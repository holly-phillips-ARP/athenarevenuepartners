import { ToolError, defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { offerings } from "../../../data/offerings";
import { peOfferings } from "../../../data/peOfferings";

export default defineTool({
  name: "get_offering",
  title: "Get offering details",
  description:
    "Get the full details of one Athena Revenue Partners offering by slug: overview, who it's for, process, deliverables and outcome.",
  inputSchema: {
    slug: z.string().trim().min(1).describe("Offering slug, e.g. 'revenue-diagnostic'."),
    audience: z
      .enum(["general", "private-equity"])
      .default("general")
      .describe("Which catalogue the slug belongs to."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, audience }) => {
    const found =
      audience === "private-equity"
        ? peOfferings.find((o) => o.slug === slug)
        : offerings.find((o) => o.slug === slug);

    if (!found) {
      const available = (audience === "private-equity" ? peOfferings : offerings)
        .map((o) => o.slug)
        .join(", ");
      throw new ToolError(`No offering with slug "${slug}". Available: ${available}`);
    }

    return {
      content: [{ type: "text" as const, text: JSON.stringify(found, null, 2) }],
      structuredContent: { offering: found },
    };
  },
});
