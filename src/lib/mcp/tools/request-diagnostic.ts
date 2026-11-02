import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";

export default defineTool({
  name: "request_conversation",
  title: "Request a conversation",
  description:
    "Ask Athena Revenue Partners for a conversation about hiring or supporting a founder's first AE — the same enquiry as the website's conversation form. Only submit with the person's explicit consent and their real contact details.",
  inputSchema: {
    name: z.string().trim().min(1).max(100).describe("Full name of the person requesting."),
    email: z.string().trim().email().max(255).describe("Business email address."),
    company: z.string().trim().max(150).optional().describe("Company name."),
    role: z.string().trim().max(100).optional().describe("Job title, e.g. founder or portfolio support lead."),
    arr_stage: z.string().trim().max(100).optional().describe("Current ARR or funding stage."),
    challenge: z.string().trim().max(1000).optional().describe("Where they are with their first AE and what they want help with."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, company, role, arr_stage, challenge }) => {
    const supabase = supabaseAnon();
    const id = crypto.randomUUID();
    const payload = {
      id,
      name,
      email,
      company: company || null,
      role: role || null,
      arr_stage: arr_stage || null,
      challenge: challenge || null,
    };
    const { error } = await supabase.from("diagnostic_requests").insert(payload);

    if (error) {
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    }

    const { error: emailError } = await supabase.functions.invoke("send-transactional-email", {
      body: {
        templateName: "diagnostic-request",
        idempotencyKey: `diagnostic-request-${id}`,
        templateData: {
          name: payload.name,
          email: payload.email,
          company: payload.company,
          role: payload.role,
          arr_stage: payload.arr_stage,
          challenge: payload.challenge,
        },
      },
    });
    if (emailError) {
      console.error("Conversation notification email failed", emailError);
    }


    return {
      content: [
        {
          type: "text" as const,
          text: `Conversation request submitted for ${name} (${email}). The Athena team will follow up by email.`,
        },
      ],
    };
  },
});
