export interface Offering {
  slug: string;
  no: string;
  name: string;
  duration: string;
  summary: string;
  includes: string[];
  output: string;
  investment: string;
  featured?: boolean;
  overview: string;
  whoFor: string[];
  process: { phase: string; detail: string }[];
  deliverables: string[];
}

export const offerings: Offering[] = [
  {
    slug: "revenue-diagnostic",
    no: "01",
    name: "Revenue Diagnostic",
    duration: "2–3 weeks",
    summary: "A fast, deep assessment of your revenue engine.",
    includes: [
      "Pipeline quality + coverage analysis",
      "Forecast methodology review",
      "Sales process + inspection gaps",
      "Leadership cadence evaluation",
    ],
    output: "Forecast reality vs. fiction · Top 3 revenue blockers · 90-day action plan",
    investment: "$15K – $25K",
    overview:
      "A focused, two-to-three week diagnostic that gives leadership an unflinching read on the health of your revenue engine. We look at the deals, the data, and the discipline behind them—then tell you what's real and what's not.",
    whoFor: [
      "CEOs and CROs questioning forecast credibility",
      "Boards needing an independent revenue assessment",
      "Leaders preparing for a fundraise or scaling event",
    ],
    process: [
      { phase: "Week 1", detail: "Data pull, deal sampling, and stakeholder interviews across sales, marketing, and finance." },
      { phase: "Week 2", detail: "Pipeline coverage, forecast methodology, and inspection cadence analysis." },
      { phase: "Week 3", detail: "Findings, prioritized blockers, and a 90-day action plan delivered to the executive team." },
    ],
    deliverables: [
      "Forecast credibility scorecard",
      "Top 3 revenue blockers with root cause",
      "90-day action plan with owners and milestones",
    ],
  },
  {
    slug: "forecast-accuracy-sprint",
    no: "02",
    name: "Forecast Accuracy Sprint",
    duration: "6–8 weeks",
    summary: "Our core engagement to stabilize revenue predictability.",
    includes: [
      "Deal inspection rigor",
      "Forecast methodology",
      "Pipeline coverage model",
      "Executive operating cadence",
    ],
    output: "Move toward ±10–15% forecast accuracy",
    investment: "$35K – $75K",
    featured: true,
    overview:
      "A six-to-eight week sprint to install the inspection rigor, methodology, and cadence required to forecast within ±10–15%. We work alongside your leaders to rebuild the operating system of revenue—deal by deal, week by week.",
    whoFor: [
      "Companies with chronic forecast misses",
      "Leaders ready to install discipline, not dashboards",
      "Teams scaling past $20M ARR",
    ],
    process: [
      { phase: "Weeks 1–2", detail: "Baseline current forecast, inspect open pipeline, and align leadership on standards." },
      { phase: "Weeks 3–5", detail: "Implement deal inspection rituals, forecast methodology, and pipeline coverage model." },
      { phase: "Weeks 6–8", detail: "Operationalize executive cadence and hand off the system to your team." },
    ],
    deliverables: [
      "Forecast methodology and call playbook",
      "Pipeline coverage model and inspection rhythm",
      "Executive operating cadence template",
      "Trained leaders running the system",
    ],
  },
  {
    slug: "revenue-system-build",
    no: "03",
    name: "Revenue System Build",
    duration: "3–6 months",
    summary: "A full transformation of your revenue engine.",
    includes: [
      "Scalable sales process",
      "Pipeline generation system",
      "Hiring and role design",
      "Forecast discipline",
      "Leadership coaching",
    ],
    output: "Predictable, scalable revenue",
    investment: "$90K – $200K+",
    overview:
      "A three-to-six month transformation of your revenue function—from pipeline generation through forecast discipline. We design, install, and coach the system that turns revenue from a guess into a discipline.",
    whoFor: [
      "Founder-led companies stepping into a real revenue org",
      "Investor-backed businesses preparing for the next leg of growth",
      "CEOs replacing duct-tape with a true operating system",
    ],
    process: [
      { phase: "Month 1", detail: "Diagnose the full engine, design the target operating model, and align the leadership team." },
      { phase: "Months 2–4", detail: "Build the sales process, pipeline generation system, hiring plan, and forecast discipline." },
      { phase: "Months 5–6", detail: "Coach leaders, embed cadence, and hand off a self-running revenue system." },
    ],
    deliverables: [
      "Documented sales process and stage definitions",
      "Pipeline generation system across sales and marketing",
      "Role design, hiring scorecards, and ramp plans",
      "Forecast and operating cadence",
      "Coached leadership team",
    ],
  },
];

export const getOfferingBySlug = (slug?: string) =>
  offerings.find((o) => o.slug === slug);
