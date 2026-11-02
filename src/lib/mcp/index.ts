import { defineMcp } from "@lovable.dev/mcp-js";
import getOfferingTool from "./tools/get-offering";
import listOfferingsTool from "./tools/list-offerings";
import requestDiagnosticTool from "./tools/request-diagnostic";

export default defineMcp({
  name: "athena-revenue-partners",
  title: "Athena Revenue Partners",
  version: "0.2.0",
  instructions:
    "Athena Revenue Partners helps funded B2B tech founders move from founder-led to team-led sales. Use list_offerings for The Hire, The Handoff, The Step Back and secondary leadership support; get_offering for exact scope and pricing; request_conversation only with explicit consent and real contact details. These offers have the same pricing for investor referrals. Do not promise guaranteed results or full ramp by day 90.",
  tools: [listOfferingsTool, getOfferingTool, requestDiagnosticTool],
});
