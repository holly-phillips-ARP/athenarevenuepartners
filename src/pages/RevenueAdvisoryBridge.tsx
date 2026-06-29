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
    title: "Executive Coaching",
    body: "Leadership wants an experienced outside perspective to pressure-test decisions and improve execution.",
  },
  {
    title: "Leadership Transition",
    body: "A CRO, VP Sales, GM, or CEO search is underway—or about to begin.",
  },
  {
    title: "Portfolio Oversight",
    body: "Operating partners want ongoing visibility into revenue performance without becoming operators themselves.",
  },
  {
    title: "Continuous Improvement",
    body: "The operating system is in place, but the business continues to evolve.",
  },
];

const partnerships = [
  {
    title: "Revenue Advisory",
    intro:
      "Ongoing strategic guidance for leadership teams committed to continuous improvement. Ideal for organizations that want experienced outside perspective without adding another executive.",
    items: [
      "Quarterly business reviews",
      "Forecast reviews",
      "KPI analysis",
      "Executive coaching",
      "Board preparation",
      "Revenue strategy",
      "Growth planning",
    ],
  },
  {
    title: "Revenue Bridge",
    intro:
      "Build the role before you hire the person. Revenue Bridge prepares the organization for a successful executive transition by installing the operating system, documenting leadership processes, and creating the infrastructure the incoming executive will inherit.",
    subintro:
      "Rather than asking a new CRO or VP Sales to spend six months diagnosing the business, Revenue Bridge allows them to begin executing from day one.",
    items: [
      "Leadership operating cadence",
      "Executive documentation",
      "Forecast methodology",
      "KPI dashboards",
      "Hiring profile & onboarding plan",
      "Transition planning",
      "Revenue process stabilization",
    ],
  },
];

const methodology = [
  { phase: "Design", label: "Revenue Architecture Sprint", current: false },
  { phase: "Assess", label: "Revenue Diagnostic", current: false },
  { phase: "Build", label: "Revenue System Build", current: false },
  { phase: "Optimize", label: "Revenue Advisory", current: true },
];

const deliverables = {
  advisory: [
    {
      title: "Executive Coaching",
      body: "Regular strategic sessions with Athena founders.",
    },
    {
      title: "Quarterly Operating Reviews",
      body: "Independent review of revenue performance, forecasts, and execution.",
    },
    {
      title: "Strategic Recommendations",
      body: "Prioritized opportunities for continued improvement.",
    },
    {
      title: "Board Support",
      body: "Outside perspective for leadership and operating partners.",
    },
  ],
  bridge: [
    {
      title: "Executive Transition Plan",
      body: "A structured roadmap for leadership transition.",
    },
    {
      title: "Revenue Leadership Playbook",
      body: "Documented operating cadence, forecasting process, KPIs, and management routines.",
    },
    {
      title: "Executive Onboarding Framework",
      body: "A clear 30-60-90 day plan for the incoming executive.",
    },
    {
      title: "Stabilized Revenue Operation",
      body: "A business prepared for leadership change rather than disrupted by it.",
    },
  ],
};

const timeline = [
  {
    phase: "Phase 1",
    items: ["Understand the business", "Assess current leadership", "Define priorities"],
  },
  {
    phase: "Phase 2",
    items: ["Install or refine the operating system", "Document leadership processes", "Coach key stakeholders"],
  },
  {
    phase: "Phase 3",
    items: [
      "Transition",
      "Support",
      "Optimization",
      "Executive handoff (Revenue Bridge)",
      "or",
      "Quarterly operating cadence (Revenue Advisory)",
    ],
  },
];

const outcomes = [
  "Leadership continuity through periods of change",
  "An operating system that survives executive turnover",
  "Better executive decision-making",
  "More disciplined forecasting and operating cadence",
  "Faster executive onboarding",
  "Ongoing strategic perspective without adding permanent headcount",
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/investors/private-equity/revenue-advisory";

const RevenueAdvisoryBridge = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Advisory & Revenue Bridge | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Ongoing strategic oversight and leadership transition support that keeps your revenue operating system creating value long after implementation."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Advisory & Revenue Bridge | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Ongoing strategic oversight and leadership transition support that keeps your revenue operating system creating value long after implementation."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Revenue Advisory & Revenue Bridge"
        description="Tell us a bit about the situation — we'll reply within one business day."
        source="Private Equity — Revenue Advisory & Revenue Bridge"
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
                  Revenue Advisory & Revenue Bridge
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
                Great revenue systems survive leadership change.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  Building a revenue operating system is only the beginning.
                </p>
                <p>
                  Whether you're looking for ongoing strategic oversight or preparing for a leadership transition, Athena helps ensure your revenue operating system continues creating value long after implementation.
                </p>
                <p>
                  Because leadership should change.
                </p>
                <p>
                  Your operating system shouldn't.
                </p>
              </div>
              <div className="mt-10 p-5 border border-border/60 bg-background/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Typical Engagement
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Monthly or quarterly advisory
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Leadership transition support
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Add-on engagements following a Revenue System Build
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
            These engagements are designed for four common situations.
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

      {/* HOW WE PARTNER */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            How We Partner
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Two ways to keep the operating system creating value.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((p) => (
              <div
                key={p.title}
                className="bg-secondary/40 border border-border/60 p-8 flex flex-col gap-4"
              >
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {p.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {p.intro}
                </p>
                {p.subintro && (
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
                    {p.subintro}
                  </p>
                )}
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  Typical focus areas
                </p>
                <ul className="grid grid-cols-1 gap-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</n                    </li>
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
            Deliverables tailored to the engagement.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-xl md:text-2xl">Revenue Advisory</h3>
              {deliverables.advisory.map((d) => (
                <div
                  key={d.title}
                  className="bg-background border border-border/60 p-6 flex flex-col gap-2"
                >
                  <h4 className="font-display text-lg leading-tight">{d.title}</h4>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-xl md:text-2xl">Revenue Bridge</h3>
              {deliverables.bridge.map((d) => (
                <div
                  key={d.title}
                  className="bg-background border border-border/60 p-6 flex flex-col gap-2"
                >
                  <h4 className="font-display text-lg leading-tight">{d.title}</h4>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
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
            From assessment to continuous operation or executive handoff.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {timeline.map((t, i) => (
              <div
                key={t.phase}
                className="relative bg-secondary/40 border border-border/60 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10 text-accent font-display text-sm">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg">{t.phase}</span>
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
            By the end of these engagements you'll have:
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
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What's Next?
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-4xl mx-auto">
            Keep the operating system working.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            Whether you're supporting a leadership team over time or preparing for executive transition, Athena helps ensure the revenue operating system continues creating enterprise value long after implementation.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start the conversation →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RevenueAdvisoryBridge;
