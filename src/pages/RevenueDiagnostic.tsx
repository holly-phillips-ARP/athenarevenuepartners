import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const scenarios = [
  {
    title: "Missing Plan",
    body: "Growth has slowed, forecasts are consistently inaccurate, or revenue performance is becoming unpredictable.",
  },
  {
    title: "Operational Improvement",
    body: "The company has product-market fit but needs better execution to achieve the next stage of growth.",
  },
  {
    title: "Board Concern",
    body: "Forecasts, pipeline quality, or operating discipline have become recurring topics in board meetings.",
  },
  {
    title: "Pre-Transformation",
    body: "Before investing in new leadership, technology, compensation changes, or organizational redesign, identify the true constraint first.",
  },
];

const evaluationCategories = [
  {
    title: "Revenue Performance",
    question: "Where is growth breaking down?",
    items: [
      "Pipeline generation",
      "Win rates",
      "Sales cycle",
      "Average deal size",
      "Customer retention & expansion",
    ],
  },
  {
    title: "Forecast Confidence",
    question: "Can leadership accurately predict future performance?",
    items: [
      "Forecast methodology",
      "Pipeline health",
      "Stage definitions",
      "Forecast accuracy",
      "Management inspection",
    ],
  },
  {
    title: "Revenue Operating System",
    question: "Does the company have the infrastructure required to scale?",
    items: [
      "Sales process",
      "Qualification framework",
      "CRM utilization",
      "KPI dashboards",
      "Revenue technology stack",
      "Operating cadence",
    ],
  },
  {
    title: "Leadership Effectiveness",
    question: "Can leadership consistently drive execution?",
    items: [
      "Organizational structure",
      "Sales management capability",
      "Executive alignment",
      "Accountability systems",
      "Decision-making cadence",
      "Talent gaps",
    ],
  },
];

const methodology = [
  { phase: "Design", label: "Revenue Architecture Sprint", current: false },
  { phase: "Assess", label: "Revenue Diagnostic", current: true },
  { phase: "Build", label: "Revenue System Build", current: false },
  { phase: "Optimize", label: "Revenue Advisory", current: false },
];

const deliverables = [
  {
    title: "Executive Readout",
    body: "Board-ready presentation of findings, risks, and recommendations.",
  },
  {
    title: "Revenue Maturity Assessment™",
    body: "An evaluation of the company's current revenue operating system across people, process, technology, metrics, and leadership.",
  },
  {
    title: "Forecast Confidence Score™",
    body: "An assessment of the organization's ability to consistently predict revenue performance.",
  },
  {
    title: "Revenue Performance Assessment™",
    body: "Identification of the operational constraints limiting growth and forecast reliability.",
  },
  {
    title: "Prioritized Executive Roadmap",
    body: "A practical sequence of initiatives ranked by expected business impact and implementation effort.",
  },
  {
    title: "Executive Recommendations",
    body: "Specific actions leadership can take immediately to improve revenue quality and enterprise value.",
  },
];

const timeline = [
  {
    week: "Week 1",
    items: ["Executive interviews", "Business review", "Data collection", "CRM assessment"],
  },
  {
    week: "Week 2",
    items: ["Pipeline analysis", "Forecast assessment", "Revenue process review", "Leadership interviews"],
  },
  {
    week: "Week 3",
    items: ["Revenue Operating System assessment", "Constraint identification", "Prioritization"],
  },
  {
    week: "Week 4–5",
    items: ["Executive presentation", "Board-ready recommendations", "Implementation roadmap"],
  },
];

const outcomes = [
  "What's actually limiting revenue performance—not just the symptoms",
  "Which operational improvements will have the greatest impact on enterprise value",
  "How much confidence to place in the current forecast",
  "Whether leadership has the systems required to execute consistently",
  "Which initiatives should be prioritized over the next 90–180 days",
];

const nextSteps = [
  {
    title: "Revenue System Build",
    body: "If the Revenue Diagnostic identifies opportunities to strengthen the revenue operating system, the next step is typically a Revenue System Build to implement the recommendations and create a repeatable revenue engine capable of supporting the company's next stage of growth.",
    to: "/who-we-work-with/investors/private-equity/revenue-system-build",
  },
  {
    title: "Revenue Bridge",
    body: "Pair the diagnostic with a leadership transition. Install the system before or alongside a new CRO, VP of Sales, GM or CEO.",
    to: "/who-we-work-with/investors/private-equity/revenue-bridge",
  },
  {
    title: "Revenue Advisory",
    body: "Ongoing quarterly oversight once the system is in place — pressure-test forecasts, coach leadership, evolve the system.",
    to: "/who-we-work-with/investors/private-equity/revenue-advisory",
  },
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/investors/private-equity/revenue-diagnostic";

const RevenueDiagnostic = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Diagnostic | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Evaluate an existing revenue operating system to identify what's preventing predictable growth and prioritize the improvements with the greatest impact on enterprise value."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Diagnostic | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Evaluate an existing revenue operating system to identify what's preventing predictable growth and prioritize the improvements with the greatest impact on enterprise value."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Start a Revenue Diagnostic"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Private Equity — Revenue Diagnostic"
      />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
          <Link
            to="/who-we-work-with/investors/private-equity"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Private Equity
          </Link>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  Revenue Diagnostic
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
                  {methodology.map((m, i) => (
                    <div key={m.phase} className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${
                            m.current ? "bg-accent" : "bg-muted-foreground/30"
                          }`}
                        />
                        <span
                          className={`text-[10px] uppercase tracking-[0.15em] whitespace-nowrap ${
                            m.current ? "text-accent" : "text-muted-foreground"
                          }`}
                        >
                          {m.phase}
                        </span>
                      </div>
                      {i < methodology.length - 1 && (
                        <ChevronRight className="h-3 w-3 text-muted-foreground/30 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8 text-balance">
                Understand what's limiting performance before you invest in fixing it.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  The Revenue Diagnostic evaluates an existing revenue operating system to identify what's preventing predictable growth and prioritize the improvements with the greatest impact on enterprise value.
                </p>
                <p>
                  Because fixing the wrong problem is just as expensive as ignoring the right one.
                </p>
              </div>
              <div className="mt-10 p-5 border border-border/60 bg-background/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Typical Engagement
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    3–5 weeks
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Executive-level assessment
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Fixed-fee engagement
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Designed for portfolio companies underperforming plan or preparing for operational improvement
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHEN TO USE */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            WHEN TO BRING US IN
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            This engagement is designed for four common portfolio situations.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-background p-8 flex flex-col gap-3">
                <h3 className="font-display text-xl md:text-2xl leading-tight">
                  {s.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE EVALUATE */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What We Evaluate
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Organized into the questions every PE investor is asking.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {evaluationCategories.map((category) => (
              <div
                key={category.title}
                className="bg-secondary/40 border border-border/60 p-8 flex flex-col gap-4"
              >
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {category.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {category.question}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Deliverables
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            What you leave with.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="bg-background border border-border/60 p-8 flex flex-col gap-3"
              >
                <h3 className="font-display text-xl md:text-2xl leading-tight">
                  {d.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four to five weeks from kickoff to board-ready recommendations.
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((t, i) => (
              <div
                key={t.week}
                className="relative bg-secondary/40 border border-border/60 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10 text-accent font-display text-sm">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg">{t.week}</span>
                </div>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm md:text-base text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Outcomes
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            By the end of the engagement you'll know:
          </h2>
          <ul className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {outcomes.map((o) => (
              <li key={o} className="bg-background p-6 flex items-start gap-4">
                <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-lg">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TYPICAL NEXT STEPS */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Typical next steps
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-4xl">
            Where the diagnostic usually leads.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            The Revenue Diagnostic is the Assess phase of the Athena Method.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {nextSteps.map((n) => (
              <Link
                key={n.title}
                to={n.to}
                className="bg-background p-6 flex flex-col hover:bg-secondary/40 transition-colors"
              >
                <h3 className="font-display text-lg mb-3">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {n.body}
                </p>
                <span className="text-sm text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Understand what's limiting performance before you invest in fixing it.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            3–5 weeks to a clear read on the true constraints and a prioritized roadmap for the next 90–180 days.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start a diagnostic →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RevenueDiagnostic;
