import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { supabaseAnon } from "../supabase";

export default defineTool({
  name: "request_diagnostic",
  title: "Request a revenue diagnostic",
  description:
    "Submit a diagnostic request to Athena Revenue Partners — the same enquiry the website's 'Book a diagnostic' form sends. Only submit with the person's explicit consent and their real contact details.",
  inputSchema: {
    name: z.string().trim().min(1).max(100).describe("Full name of the person requesting."),
    email: z.string().trim().email().max(255).describe("Business email address."),
    company: z.string().trim().max(150).optional().describe("Company name."),
    role: z.string().trim().max(100).optional().describe("Job title, e.g. CEO or CRO."),
    arr_stage: z.string().trim().max(100).optional().describe("Current ARR or funding stage."),
    challenge: z.string().trim().max(1000).optional().describe("The revenue challenge they want help with."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, company, role, arr_stage, challenge }) => {
    const supabase = supabaseAnon();
    const { error } = await supabase.from("diagnostic_requests").insert({
      id: crypto.randomUUID(),
      name,
      email,
      company: company || null,
      role: role || null,
      arr_stage: arr_stage || null,
      challenge: challenge || null,
    });

    if (error) {
      return { content: [{ type: "text" as const, text: error.message }], isError: true };
    }

    return {
      content: [
        {
          type: "text" as const,
          text: `Diagnostic request submitted for ${name} (${email}). The Athena team will follow up by email.`,
        },
      ],
    };
  },
});
