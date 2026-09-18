import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { offerings } from "../../../data/offerings";
import { peOfferings } from "../../../data/peOfferings";

const audienceSchema = z.enum(["all", "general", "private-equity"]);

export default defineTool({
  name: "list_offerings",
  title: "List offerings",
  description:
    "List Athena Revenue Partners' consulting offerings with slug, name, duration and a short summary. Optionally filter by audience.",
  inputSchema: {
    audience: audienceSchema
      .default("all")
      .describe("Which catalogue to list: 'general', 'private-equity', or 'all'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ audience }) => {
    const general = offerings.map((o) => ({
      audience: "general" as const,
      slug: o.slug,
      name: o.name,
      duration: o.duration,
      summary: o.summary,
      investment: o.investment,
    }));
    const pe = peOfferings.map((o) => ({
      audience: "private-equity" as const,
      slug: o.slug,
      name: o.name,
      stage: o.tag,
      summary: o.summary,
    }));

    const items =
      audience === "general" ? general : audience === "private-equity" ? pe : [...general, ...pe];

    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
