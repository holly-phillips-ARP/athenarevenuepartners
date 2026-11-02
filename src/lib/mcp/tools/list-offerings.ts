import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { offerings, secondaryOfferings } from "../../../data/offerings";

export default defineTool({
  name: "list_offerings", title: "List Athena offers",
  description: "Browse The Hire, The Handoff and The Step Back for a founder's first seller, plus clearly secondary leadership support. Same offers and pricing for founders and investor referrals.",
  inputSchema: { audience: z.enum(["all", "general"]).default("all").describe("Shared founder and referral catalog; both values return the same offers.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = [...offerings, ...secondaryOfferings].map(offer => ({ slug: offer.slug, name: offer.name, category: offer.category, summary: offer.summary, investment: offer.investment, url: `/offerings#${offer.category === "primary" ? offer.slug : "beyond-your-first-seller"}` }));
    return { content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }], structuredContent: { items } };
  },
});
