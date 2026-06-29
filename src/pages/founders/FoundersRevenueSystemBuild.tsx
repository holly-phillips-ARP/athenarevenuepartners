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
    title: "After the Architecture Sprint",
    body: "The blueprint is defined. Now it's time to install the operating system your team will run.",
  },
  {
    title: "After a Revenue Diagnostic",
    body: "The constraints are identified. Now it's time to build the systems, process, and cadence that remove them.",
  },
  {
    title: "Before hiring a VP Sales",
    body: "Give your first revenue leader infrastructure to execute against from Day One, not a blank slate to rebuild.",
  },
  {
    title: "Preparing for rapid growth",
    body: "Growth is coming. Install the system before speed exposes every weak process in the business.",
  },
];

const buildCategories = [
  {
    title: "Revenue Process",
    question: "A repeatable sales motion leadership can inspect and improve.",
    items: [
      "Sales process",
      "Qualification framework",
      "Stage definitions",
      "Exit criteria",
      "Deal inspection methodology",
    ],
  },
  {
    title: "Revenue Operations",
    question: "The infrastructure that makes execution measurable.",
    items: [
      "CRM optimization",
      "KPI dashboards",
      "Forecast methodology",
      "Pipeline management",
      "Revenue reporting",
    ],
  },
  {
    title: "Revenue Organization",
    question: "The systems that allow teams to scale consistently.",
    items: [
      "Territory design",
      "Compensation framework",
      "Hiring profiles",
      "Onboarding framework",
      "Performance management",
    ],
  },
  {
    title: "Leadership Operating Cadence",
    question: "The management rhythm that drives accountability.",
    items: [
      "Weekly operating cadence",
      "Forecast reviews",
      "Pipeline inspections",
      "Executive scorecards",
      "Board reporting framework",
    ],
  },
];

const methodology = [
  { phase: "Design", label: "Revenue Architecture Sprint", current: false },
  { phase: "Assess", label: "Revenue Diagnostic", current: false },
  { phase: "Build", label: "Revenue System Build", current: true },
  { phase: "Optimize", label: "Revenue Advisory", current: false },
];

const deliverables = [
  {
    title: "Forecast Framework",
    body: "A documented forecasting methodology leadership can consistently execute and defend.",
  },
  {
    title: "Revenue Playbooks",
    body: "Standardized sales processes, qualification, inspection, and management documentation.",
  },
  {
    title: "KPI Dashboards",
    body: "Executive dashboards that provide visibility into performance, pipeline health, and forecast confidence.",
  },
  {
    title: "Operating Cadence",
    body: "Documented meeting structure, inspection routines, and accountability framework.",
  },
  {
    title: "CRM Optimization",
    body: "A CRM configured to support the sales process, forecast, and management inspection.",
  },
  {
    title: "Leadership Training",
    body: "A trained leadership team capable of operating the system independently.",
  },
];

const timeline = [
  {
    week: "Month 1",
    items: ["Design finalization", "Executive alignment", "Foundation build", "Priority implementation"],
  },
  {
    week: "Month 2",
    items: ["System implementation", "CRM optimization", "Forecast methodology", "Management cadence"],
  },
  {
    week: "Month 3",
    items: ["Leadership coaching", "Team enablement", "Operational refinement", "Executive handoff"],
  },
];

const outcomes = [
  "Founder no longer owns every major deal",
  "Forecasts become predictable",
  "Salespeople execute consistently",
  "Leadership manages from the same data",
  "Revenue scales without constant founder intervention",
];

const nextSteps = [
  {
    title: "Revenue Advisory",
    body: "Once the Revenue Operating System is installed, most founders continue with Revenue Advisory to pressure-test forecasts, coach leaders, and evolve the system.",
    to: "/who-we-work-with/founders/revenue-advisory",
  },
  {
    title: "Revenue Diagnostic",
    body: "Re-assess the operating system as the business scales to identify new constraints before they impact performance.",
    to: "/who-we-work-with/founders/revenue-diagnostic",
  },
  {
    title: "Revenue Architecture Sprint",
    body: "If the system hasn't been designed yet, start with a blueprint before building.",
    to: "/who-we-work-with/founders/revenue-architecture-sprint",
  },
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/founders/revenue-system-build";

const FoundersRevenueSystemBuild = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue System Build | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Install the people, process, metrics, technology, and leadership cadence that transform founder-led selling into a repeatable revenue organization."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue System Build | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Install the people, process, metrics, technology, and leadership cadence that transform founder-led selling into a repeatable revenue organization."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Start a Revenue System Build"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Founders — Revenue System Build"
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
                  Revenue System Build
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
                Install the operating system your company needs to scale.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  The Revenue System Build transforms founder-led selling into a repeatable revenue organization by implementing the people, process, metrics, technology, and leadership cadence required for predictable growth.
                </p>
                <p>
                  Because systems—not heroics—create scale.
                </p>
              </div>
              <div className="mt-10 p-5 border border-border/60 bg-background/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Typical Engagement
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    3–6 months
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Implementation partnership
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Fixed scope
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Designed for founder-led companies ready to operationalize growth
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
            Four common moments to install the system.
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

      {/* WHAT WE BUILD */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What We Build
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            The four pillars of a scalable revenue operating system.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {buildCategories.map((category) => (
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
            Three months to a fully installed operating system.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
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
          <p className="text-sm text-muted-foreground mt-6">
            Larger engagements or more complex organizations may extend implementation through Months 4–6.
          </p>
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
            The Build phase of the Athena Method.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Most founders transition into Revenue Advisory.
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
            Install the operating system your company needs to scale.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            3–6 months to transform founder-led selling into a repeatable revenue organization your leadership team can run.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start the build →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FoundersRevenueSystemBuild;
