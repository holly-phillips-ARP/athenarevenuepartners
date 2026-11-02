import { ToolError, defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getOfferingBySlug } from "../../../data/offerings";

export default defineTool({
  name: "get_offering", title: "Get Athena offer details",
  description: "Get the scope, price and entry point for an Athena first-seller offer or secondary leadership support. No guaranteed results or full-ramp-by-day-90 promise.",
  inputSchema: { slug: z.string().trim().min(1).describe("Offer slug: the-hire, the-handoff, the-step-back, revenue-advisory or revenue-bridge."), audience: z.literal("general").default("general").describe("Shared catalog for founders and investor referrals.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const offer = getOfferingBySlug(slug);
    if (!offer) throw new ToolError("Offer not found. Use list_offerings for current offers.");
    return { content: [{ type: "text" as const, text: JSON.stringify(offer, null, 2) }] };
  },
});
