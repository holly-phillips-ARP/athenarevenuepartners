import { defineMcp } from "@lovable.dev/mcp-js";
import getOfferingTool from "./tools/get-offering";
import listOfferingsTool from "./tools/list-offerings";
import requestDiagnosticTool from "./tools/request-diagnostic";

export default defineMcp({
  name: "athena-revenue-partners",
  title: "Athena Revenue Partners",
  version: "0.1.0",
  instructions:
    "Tools for Athena Revenue Partners, a revenue leadership consultancy. Use `list_offerings` to browse the consulting offerings (general and private-equity catalogues), `get_offering` for the full detail of one offering, and `request_diagnostic` to submit a diagnostic enquiry on behalf of someone who has explicitly asked for it.",
  tools: [listOfferingsTool, getOfferingTool, requestDiagnosticTool],
});
