import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.22, 1, 0.36, 1] as const;

const whenToUse = [
  "You're evaluating an acquisition",
  "A founder is hiring their first sales leader",
  "You need confidence in the revenue model",
  "The company has outgrown founder-led sales",
];

const methodology = [
  { phase: "Design", label: "Revenue Architecture Sprint", current: true },
  { phase: "Assess", label: "Revenue Diagnostic", current: false },
  { phase: "Build", label: "Revenue System Build", current: false },
  { phase: "Optimize", label: "Revenue Advisory", current: false },
];

const pillars = [
  {
    title: "Revenue Strategy",
    items: ["ICP", "Segmentation", "GTM motion"],
  },
  {
    title: "Revenue Organization",
    items: ["Org design", "Roles", "Hiring roadmap"],
  },
  {
    title: "Revenue Operations",
    items: ["Technology", "KPIs", "Forecast approach"],
  },
  {
    title: "Executive Roadmap",
    items: ["100-Day Plan", "Priorities", "Risks"],
  },
];

const deliverables = [
  "Revenue Operating Blueprint",
  "Revenue Quality Assessment",
  "Forecast Confidence Score",
  "Revenue Maturity Assessment",
  "Investment Risk Summary",
  "100-Day Roadmap",
  "Executive Presentation",
];

const timeline = [
  {
    week: "Week 1",
    phase: "Discovery",
    detail:
      "Data pull, stakeholder interviews across sales, marketing, finance and product. We map the current revenue motion as it actually runs.",
  },
  {
    week: "Week 2",
    phase: "Assessment",
    detail:
      "Pipeline quality, forecast methodology, sales process maturity and operating cadence — pressure-tested against the value creation thesis.",
  },
  {
    week: "Week 3",
    phase: "Architecture",
    detail:
      "Target operating model designed across strategy, organization, operations and executive cadence. Risks quantified, priorities sequenced.",
  },
  {
    week: "Week 4",
    phase: "Executive Readout",
    detail:
      "Board-ready presentation of findings, the revenue operating blueprint, and a 100-day roadmap aligned to the value creation plan.",
  },
];

const outcomes = [
  "Clear investment priorities",
  "Board-ready recommendations",
  "Defined revenue operating system",
  "Leadership alignment",
  "Implementation roadmap",
];

const nextSteps = [
  {
    title: "Revenue System Build",
    body: "Install the operating system designed in the sprint. Our core engagement turns the blueprint into a working revenue function.",
    to: "/who-we-work-with/investors/private-equity/revenue-system-build",
  },
  {
    title: "Revenue Bridge",
    body: "Pair the sprint with a leadership transition. Install the system before or alongside a new CRO, VP of Sales, GM or CEO.",
    to: "/who-we-work-with/investors/private-equity/revenue-bridge",
  },
  {
    title: "Revenue Advisory",
    body: "Ongoing quarterly oversight once the system is in place — pressure-test forecasts, coach leadership, evolve the system.",
    to: "/who-we-work-with/investors/private-equity/revenue-advisory",
  },
];

const faqs = [
  {
    q: "When in the deal cycle do you run the sprint?",
    a: "Most often between LOI and close, or in the first 30 days post-close. Either way, the four-week timeline is designed to land before the value creation plan is locked.",
  },
  {
    q: "Who needs to be involved from the target company?",
    a: "The CEO, head of revenue, head of finance, and typically a marketing or product lead. We also sample 8–12 deals and speak with frontline sellers and CSMs.",
  },
  {
    q: "How is this different from commercial diligence?",
    a: "Commercial diligence tests the market thesis — TAM, ICP fit, win/loss patterns. The Architecture Sprint tests the revenue operating system that has to deliver on that thesis after close.",
  },
  {
    q: "What happens after the readout?",
    a: "You leave with a 100-day roadmap and a recommendation on the right next engagement — typically Revenue System Build, Revenue Bridge, or no further engagement at all.",
  },
  {
    q: "Do you work directly with the management team or only the deal team?",
    a: "Both. The deal team owns the investment decision; the management team owns execution. The sprint is designed so both walk away aligned on what comes next.",
  },
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/investors/private-equity/revenue-architecture-sprint";

const RevenueArchitectureSprint = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Architecture Sprint | Athena Revenue Partners</title>
        <meta
          name="description"
          content="A four-week sprint to design the revenue operating system before you build it. For PE firms evaluating acquisitions and portfolio companies outgrowing founder-led sales."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Architecture Sprint | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Design the revenue operating system before you build it. A four-week diligence-grade sprint for PE-backed companies."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Start a Revenue Architecture Sprint"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Private Equity — Revenue Architecture Sprint"
      />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            to="/who-we-work-with/investors/private-equity"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Private Equity
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6">
              Pre-investment · 4 weeks
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Revenue Architecture Sprint
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              <em className="italic text-foreground/90 font-light">
                Design the revenue operating system before you build it.
              </em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHEN TO USE */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            When to use it
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            You should consider an Architecture Sprint if…
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {whenToUse.map((w) => (
              <div key={w} className="bg-background p-6 flex items-start gap-4">
                <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we build
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four pillars of the revenue operating system.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-background p-6 flex flex-col">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-display text-xs text-accent tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg leading-snug">{p.title}</h3>
                </div>
                <ul className="space-y-2">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {it}
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
            You'll receive.
          </h2>
          <ul className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {deliverables.map((d) => (
              <li key={d} className="bg-background p-6 flex items-start gap-4">
                <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-lg">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Timeline
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four weeks. Four phases.
          </h2>
          <div className="border-t border-border">
            {timeline.map((t) => (
              <div
                key={t.week}
                className="grid md:grid-cols-[200px_180px_1fr] gap-4 md:gap-6 py-3 border-b border-border items-start"
              >
                <div className="font-display text-lg text-accent">{t.week}</div>
                <div className="font-display text-lg">{t.phase}</div>
                <p className="text-muted-foreground leading-relaxed">{t.detail}</p>
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
            After the engagement you'll have.
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
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Where the sprint usually leads.
          </h2>
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

      {/* FAQ */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Common questions.
          </h2>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="font-display text-lg text-left py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Design the operating system before you build it.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Four weeks to a defensible read on the revenue engine and a 100-day roadmap your
            board can act on.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start a sprint →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RevenueArchitectureSprint;
