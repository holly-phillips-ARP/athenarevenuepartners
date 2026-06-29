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
    title: "VP Sales search",
    body: "You're hiring your first VP of Sales and need the infrastructure they'll inherit on Day One.",
  },
  {
    title: "CRO search",
    body: "You're bringing in a Chief Revenue Officer to own the full revenue function and want them executing—not diagnosing.",
  },
  {
    title: "Founder transition",
    body: "You're stepping back from day-to-day selling and need a system that works without your direct involvement.",
  },
  {
    title: "Executive replacement",
    body: "A revenue leader is leaving, and you want to preserve continuity while setting the next hire up for success.",
  },
];

const buildItems = [
  {
    title: "Leadership documentation",
    body: "Clear documentation of the revenue operating system, processes, and expectations the new leader will manage.",
  },
  {
    title: "Operating cadence",
    body: "Weekly, monthly, and quarterly management routines that create accountability from the start.",
  },
  {
    title: "Forecast process",
    body: "A repeatable forecast methodology the incoming leader can inspect, improve, and defend.",
  },
  {
    title: "Revenue dashboards",
    body: "Executive dashboards that give the new leader immediate visibility into performance and pipeline health.",
  },
  {
    title: "Hiring & onboarding framework",
    body: "A structured plan for the new leader's first 30, 60, and 90 days.",
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
    title: "Executive Transition Plan",
    body: "A structured roadmap for the leadership transition, from pre-hire preparation through the first 90 days.",
  },
  {
    title: "Leadership Playbook",
    body: "Documented operating cadence, forecast process, KPIs, and management routines the new leader will inherit.",
  },
  {
    title: "30-60-90 Day Success Plan",
    body: "Clear priorities and milestones for the incoming executive's first three months.",
  },
  {
    title: "Revenue Documentation",
    body: "Process documentation, playbooks, and dashboards that reduce the time the new leader spends diagnosing.",
  },
  {
    title: "Onboarding Framework",
    body: "A repeatable approach to integrating new revenue leaders into the operating system.",
  },
];

const timeline = [
  {
    phase: "Week 1–2",
    items: ["Current state assessment", "Leadership gap analysis", "Transition priorities", "Documentation audit"],
  },
  {
    phase: "Week 3–6",
    items: ["Install operating cadence", "Build forecast process", "Create dashboards", "Document leadership routines"],
  },
  {
    phase: "Week 7–12",
    items: ["Finalize leadership playbook", "Build 30-60-90 plan", "Onboard new leader", "Support transition"],
  },
];

const outcomes = [
  "Faster executive ramp",
  "Less disruption",
  "Leadership continuity",
  "Immediate execution",
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/founders/revenue-bridge";

const FoundersRevenueBridge = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Bridge | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Prepare your company for a successful revenue leadership transition by installing the processes, documentation, and operating cadence your next VP of Sales or CRO will inherit."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Bridge | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Prepare your company for a successful revenue leadership transition by installing the processes, documentation, and operating cadence your next VP of Sales or CRO will inherit."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Start a Revenue Bridge"
        description="Tell us a bit about the transition — we'll reply within one business day."
        source="Founders — Revenue Bridge"
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
                  Revenue Bridge
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
                Build the role before you hire the leader.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  Revenue Bridge prepares your company for a successful leadership transition by installing the processes, documentation, and operating cadence your next VP of Sales or CRO will inherit.
                </p>
                <p>
                  Because your next revenue leader should spend Day One executing—not diagnosing.
                </p>
              </div>
              <div className="mt-10 p-5 border border-border/60 bg-background/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Typical Engagement
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    1–3 months
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Pre- and post-hire transition support
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Fixed scope
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Designed for founder-led companies hiring or replacing revenue leaders
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
            Four common leadership transitions.
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
            The infrastructure your next revenue leader will inherit.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {buildItems.map((item) => (
              <div
                key={item.title}
                className="bg-secondary/40 border border-border/60 p-8 flex flex-col gap-3"
              >
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{item.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{item.body}</p>
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
            From current state to executive handoff.
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

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Build the role before you hire the leader.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            1–3 months to a leadership-ready revenue operating system that sets your next VP of Sales or CRO up to execute from Day One.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start the bridge →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FoundersRevenueBridge;
