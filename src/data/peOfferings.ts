export interface PEOffering {
  slug: string;
  tag: string;
  name: string;
  summary: string;
  overview: string;
  whoFor: string[];
  whatWeDo: string[];
  outcome: string;
}

export const peOfferings: PEOffering[] = [
  {
    slug: "revenue-architecture-sprint",
    tag: "Pre-investment",
    name: "Revenue Architecture Sprint",
    summary:
      "For companies you're evaluating before acquisition. Evaluate the quality of the revenue operating system and leave with a value creation blueprint before you close.",
    overview:
      "A diligence-grade assessment of the target's revenue engine, run during the LOI-to-close window. We pressure-test forecast credibility, pipeline quality, and sales process maturity, then deliver a value creation blueprint with a prioritized 100-day roadmap so the revenue assumptions in the model are something you can defend at IC.",
    whoFor: [
      "PE firms in active diligence on a platform or add-on",
      "Investment teams underwriting a revenue growth thesis",
      "Operating partners stress-testing forecast assumptions before close",
    ],
    whatWeDo: [
      "Forecast accuracy and pipeline coverage analysis",
      "Sales process and revenue qualification review",
      "Identification of investment risks and value creation levers",
      "100-day post-close roadmap aligned to the value creation plan",
    ],
    outcome:
      "A defensible read on the revenue engine — and a blueprint for the first 100 days post-close.",
  },
  {
    slug: "revenue-diagnostic",
    tag: "Existing portfolio company",
    name: "Revenue Diagnostic",
    summary:
      "For portfolio companies missing plan or struggling to forecast. Identify what's limiting performance and prioritize the improvement with the greatest impact on enterprise value.",
    overview:
      "A focused diagnostic of an existing portfolio company's revenue operating system. We evaluate forecast methodology, pipeline quality, sales process maturity, and leadership cadence — then prioritize the improvements with the greatest impact on enterprise value.",
    whoFor: [
      "Portfolio companies missing plan or with unreliable forecasts",
      "Operating partners preparing for a value creation reset",
      "Boards needing an independent read before a leadership change",
    ],
    whatWeDo: [
      "Forecast credibility and pipeline health assessment",
      "Sales process and operating cadence evaluation",
      "Root-cause analysis of underperformance",
      "Prioritized action plan ranked by impact on enterprise value",
    ],
    outcome:
      "Clarity on what's limiting performance — and a prioritized plan to fix it.",
  },
  {
    slug: "revenue-system-build",
    tag: "Core engagement",
    name: "Revenue System Build",
    summary:
      "For companies ready to operationalize growth. Install the people, process, metrics, technology and operating cadence that create predictable revenue.",
    overview:
      "Our core engagement. We install the full revenue operating system — forecast methodology, revenue qualification, repeatable sales process, and leadership operating cadence — turning revenue into a repeatable business capability rather than individual heroics.",
    whoFor: [
      "Portfolio companies in the first 18 months post-close",
      "Businesses scaling past founder-led or operator-led revenue",
      "Companies preparing for a leadership transition or exit process",
    ],
    whatWeDo: [
      "Install forecast methodology with ±10% accuracy as the benchmark",
      "Implement revenue qualification and pipeline coverage standards",
      "Build a documented, repeatable sales process",
      "Operationalize a weekly and monthly leadership cadence",
    ],
    outcome:
      "A working revenue operating system the leadership team owns and runs.",
  },
  {
    slug: "revenue-bridge",
    tag: "Leadership transition",
    name: "Revenue Bridge",
    summary:
      "A leadership transition doesn't require a different methodology — it requires a different starting point.",
    overview:
      "Whether you're onboarding a new CRO, VP of Sales, GM, or CEO, we install the operating system before or alongside the leadership change so new executives spend their first 90 days executing instead of diagnosing.",
    whoFor: [
      "Portfolio companies in active executive search",
      "Newly hired CROs, VPs of Sales, GMs, or CEOs",
      "Operating partners managing a leadership transition",
    ],
    whatWeDo: [
      "Install the operating system before or alongside the new hire",
      "Document the current state and translate it into an executable plan",
      "Partner with the incoming executive through onboarding",
      "Hand off a system the new leader owns from Day 1",
    ],
    outcome:
      "New leadership executes from Day 1 instead of spending six months diagnosing.",
  },
  {
    slug: "revenue-advisory",
    tag: "Ongoing",
    name: "Revenue Advisory",
    summary:
      "For portfolio companies committed to continuous improvement. Quarterly strategic oversight to pressure-test forecasts, coach leadership, and optimize the revenue operating system.",
    overview:
      "Ongoing strategic oversight for companies that have installed the operating system and want outside eyes on it. We partner with operating partners and executive teams on a quarterly basis to review performance, pressure-test forecasts, coach leaders, and evolve the system as the business grows.",
    whoFor: [
      "Revenue System Build alumni",
      "Operating partners who want an independent quarterly read",
      "Executive teams committed to continuous improvement",
    ],
    whatWeDo: [
      "Quarterly performance and forecast reviews",
      "Leadership coaching for the CRO and revenue leadership team",
      "Ongoing optimization of process, cadence, and metrics",
      "Independent perspective for the board and operating partners",
    ],
    outcome:
      "A revenue operating system that keeps evolving — with outside eyes on it.",
  },
];

export const getPEOfferingBySlug = (slug?: string) =>
  peOfferings.find((o) => o.slug === slug);
