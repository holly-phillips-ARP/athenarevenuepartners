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
    title: "Growth has plateaued",
    body: "Revenue has stopped growing predictably, and the levers that used to work aren't working anymore.",
  },
  {
    title: "Forecasts keep missing",
    body: "Leadership can't predict where the number will land, and the board is losing confidence in the forecast.",
  },
  {
    title: "Sales performance varies wildly",
    body: "Some deals close. Others stall. The difference seems to depend on which salesperson is involved, not the customer or the opportunity.",
  },
  {
    title: "You're preparing for the next stage",
    body: "Before hiring more people, adding technology, or changing structure, understand what's actually limiting growth.",
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
    question: "Can leadership predict future performance?",
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
    question: "Does the company have the infrastructure to scale?",
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
    body: "A clear, board-ready presentation of findings, risks, and recommended priorities.",
  },
  {
    title: "Revenue Maturity Assessment",
    body: "An evaluation of your current revenue operating system across people, process, technology, metrics, and leadership.",
  },
  {
    title: "Forecast Assessment",
    body: "An honest read on how your forecast is built, where it breaks, and how much confidence leadership can place in it.",
  },
  {
    title: "Prioritized Roadmap",
    body: "A practical sequence of initiatives ranked by business impact and implementation effort.",
  },
  {
    title: "Leadership Recommendations",
    body: "Specific actions the leadership team can take immediately to improve revenue quality and execution.",
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
    items: ["Executive presentation", "Recommendations", "Implementation roadmap"],
  },
];

const outcomes = [
  "Know what's limiting growth",
  "Prioritize improvements",
  "Improve forecast confidence",
  "Align leadership",
  "Prepare for implementation",
];

const nextSteps = [
  {
    title: "Revenue System Build",
    body: "Most founders move here next — turn the diagnostic findings into a working Revenue Operating System your team owns.",
    to: "/who-we-work-with/founders/revenue-system-build",
  },
  {
    title: "Revenue Architecture Sprint",
    body: "If the company hasn't yet designed the Revenue Operating System, start with the blueprint before building.",
    to: "/who-we-work-with/founders/revenue-architecture-sprint",
  },
  {
    title: "Revenue Advisory",
    body: "Ongoing quarterly oversight once the system is in place — coach leaders and evolve the operating model.",
    to: "/who-we-work-with/founders/revenue-advisory",
  },
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/founders/revenue-diagnostic";

const FoundersRevenueDiagnostic = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Diagnostic | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Evaluate your existing Revenue Operating System to identify what's preventing predictable growth and prioritize the improvements that matter most."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Diagnostic | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Evaluate your existing Revenue Operating System to identify what's preventing predictable growth and prioritize the improvements that matter most."
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
        source="Founders — Revenue Diagnostic"
      />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
          <Link
            to="/who-we-work-with/founders"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Founders
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
                Understand what's limiting growth before you try to fix it.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  The Revenue Diagnostic evaluates your existing Revenue Operating System to identify what's preventing predictable growth.
                </p>
                <p>
                  Because the symptoms aren't always the problem.
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
                    Executive assessment
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Fixed-fee engagement
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Designed for founder-led companies at a growth inflection point
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHEN TO BRING US IN */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            WHEN TO BRING US IN
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four common signals that it's time to diagnose the system.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-background p-8 flex flex-col gap-3">
                <h3 className="font-display text-xl md:text-2xl leading-tight">{s.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{s.body}</p>
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
            Organized into the four questions every founder should answer.
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

      {/* WHAT YOU RECEIVE */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What You Receive
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
                <h3 className="font-display text-xl md:text-2xl leading-tight">{d.title}</h3>
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
            Four to five weeks from kickoff to clear recommendations.
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
            Typical Outcomes
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            By the end of the engagement you'll have:
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

      {/* WHAT'S NEXT */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What's Next?
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-4xl">
            The Assess phase of the Athena Method.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Most founders move into a Revenue System Build.
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
            Understand what's limiting growth before you try to fix it.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            3–5 weeks to a clear read on the true constraints and a prioritized roadmap for what comes next.
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

export default FoundersRevenueDiagnostic;
