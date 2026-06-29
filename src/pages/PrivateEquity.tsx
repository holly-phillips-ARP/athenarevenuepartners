import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    title: "Owner-dependent revenue",
    body:
      "Customers were loyal to a person, not a process. When the prior operator steps back, retention and new-logo growth wobble at the same time.",
  },
  {
    title: "No forecast to underwrite",
    body:
      "The number in the board deck is a feeling. There's no methodology behind it, and the value-creation plan is exposed to every miss.",
  },
  {
    title: "Hiring without infrastructure",
    body:
      "A new CRO, VP of Sales, or GM steps into chaos and spends six months diagnosing instead of executing — burning the most expensive year of the hold.",
  },
  {
    title: "No operating cadence",
    body:
      "Pipeline reviews, deal inspections, and forecast calls either don't exist or don't have teeth. Problems surface in the QBR, not before.",
  },
];

const deliverables = [
  {
    no: "01",
    title: "Forecast methodology",
    body:
      "A defined process for building, reviewing, and defending a forecast number. ±10% accuracy is the benchmark we hold ourselves to.",
  },
  {
    no: "02",
    title: "Revenue qualification",
    body:
      "A consistent standard for what's real versus assumed — so coverage gaps are visible before they become misses.",
  },

  {
    no: "03",
    title: "Repeatable sales process",
    body:
      "A defined motion from first contact to close — so wins are replicable and losses are diagnosable, regardless of who's selling.",
  },
  {
    no: "04",
    title: "Leadership operating cadence",
    body:
      "A weekly and monthly inspection rhythm that surfaces problems early and keeps leadership accountable to the number.",
  },
];

const moments = [
  {
    trigger: "Pre-close diligence",
    sub: "LOI to close",
    body:
      "A diligence-grade read on forecast accuracy, pipeline quality, and sales process maturity — so the revenue assumptions in the model are something you can defend at IC, not hope for.",
  },
  {
    trigger: "First 100 days",
    sub: "0–18 months post-close",
    body:
      "The highest-leverage window. Revenue habits are forming, the prior operator is still present, and the board is engaged. Install the system now and the business compounds on it.",
  },
  {
    trigger: "Pre-leadership hire",
    sub: "Before or during the search",
    body:
      "A CRO, VP of Sales, or GM stepping into infrastructure executes from Day 1. We install the system so the hire compounds — not compensates.",
  },
  {
    trigger: "Pre-exit",
    sub: "12–18 months before a process",
    body:
      "A defensible forecast and a clean pipeline are valuation inputs. Revenue that looks real but can't be explained costs turns at exit.",
  },
];

const levers = [
  { name: "Win rate", impact: "More qualified deals close" },
  { name: "Average deal size", impact: "Better discovery, better scope" },
  { name: "Stage conversion", impact: "Deals move faster, stall less" },
  { name: "Pipeline volume", impact: "Qualified coverage, not noise" },
];

const engagements = [
  {
    tag: "Pre-investment",
    name: "Revenue Diagnostic",
    desc:
      "A diligence-grade assessment of forecast accuracy, pipeline quality, and sales process maturity. Identifies the highest-ROI lever and quantifies the gap — before you close.",
  },
  {
    tag: "Core engagement",
    name: "Revenue System Build",
    desc:
      "Full installation of all four pillars across 90 days. Ends with a trained team, a working forecast, and a sales process your next hire can step into.",
    featured: true,
  },
  {
    tag: "Transition situations",
    name: "Revenue Bridge",
    desc:
      "For companies mid-search for a CRO, VP of Sales, or GM — we stabilize and document the revenue operation so the incoming hire steps into infrastructure, not a blank page.",
    note:
      "For searches that run longer than expected, Revenue Bridge can extend to 3–6 months without changing what we're building.",
  },
  {
    tag: "Post-engagement",
    name: "Executive Advisory",
    desc:
      "For companies that have completed a Revenue System Build and want ongoing outside perspective. A quarterly cadence to review performance, pressure-test the forecast, and identify what to tune.",
    note:
      "You own the system. We're the outside eyes. Available to Revenue System Build alumni on a defined quarterly basis.",
    advisory: true,
  },
];

const PrivateEquity = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Private Equity Investors | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Diligence-grade revenue assessment and 90-day system installation for PE-backed portfolio companies. Protect the model. Defend the exit."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/investors/private-equity" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Let's talk about your portfolio"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Private Equity — Schedule a conversation"
      />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6">
              For Private Equity Investors
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
              Every investment comes with a value creation plan.{" "}
              <em className="italic text-accent font-light">
                Very few come with the revenue operating system needed to execute it.
              </em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Whether you're evaluating an acquisition, integrating a new portfolio company, preparing for a leadership transition, or positioning for exit, Athena installs the revenue operating systems that turn investment theses into operational reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHEN */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            When to bring us in
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            From diligence through exit.
          </h2>
          <div className="border-t border-border">
            {moments.map((t) => (
              <div
                key={t.trigger}
                className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 py-6 border-b border-border items-start"
              >
                <div>
                  <div className="font-display text-lg">{t.trigger}</div>
                  <div className="text-xs text-muted-foreground mt-1">{t.sub}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            WHAT WE SEE MOST OFTEN
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four predictable gaps between the CIM and reality.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {problems.map((p) => (
              <div key={p.title} className="bg-background p-6 border-l-2 border-accent">
                <h3 className="font-display text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE INSTALL */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            THE REVENUE OPERATING SYSTEM
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-8 max-w-4xl">
            Four deliverables. Ninety days. A revenue operation your board can trust.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            We don't advise. We install. Every engagement ends with a working system — not a deck,
            not a strategy, not a set of recommendations.
          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
            {deliverables.map((d) => (
              <div key={d.no} className="bg-background p-6 flex flex-col">
                <div className="font-display text-xs text-accent mb-4 tracking-widest">{d.no}</div>
                <h3 className="font-display text-lg mb-3 leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RETURN */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            The return
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-10 max-w-4xl">
            A 10% improvement in any one lever is a multiple of our fee.
          </h2>

          <div className="bg-secondary/40 p-8 md:p-10 border border-border">
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              We work across four revenue levers. Improving any one of them — win rate, deal size,
              stage conversion, or pipeline volume — compounds across the others. The ROI
              conversation usually takes care of itself before the SOW is signed.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {levers.map((l) => (
                <div key={l.name} className="bg-background border border-border p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {l.name}
                  </div>
                  <div className="text-sm font-medium">{l.impact}</div>
                </div>
              ))}
            </div>
            <p className="text-sm italic text-muted-foreground mt-6">
              Our benchmark: ±10% forecast accuracy within six months of engagement.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Offerings
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-8 max-w-4xl">
            Project-based. Fixed scope. Defined handoff.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            We don't take fractional VP of Sales roles. We don't embed indefinitely. We install a
            system with a clear start, a clear end, and a clean handoff — so the business runs
            without us.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {engagements.map((e) => (
              <div
                key={e.name}
                className={`bg-background p-6 md:p-8 ${
                  e.featured ? "border-2 border-accent" : ""
                } ${e.advisory ? "bg-secondary/40" : ""}`}
              >
                <span className="inline-block text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded mb-4">
                  {e.tag}
                </span>
                <h3 className="font-display text-xl mb-3">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                {e.note && (
                  <p className="text-xs italic text-muted-foreground mt-4 pt-4 border-t border-border leading-relaxed">
                    {e.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Let's talk about your portfolio.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            If revenue predictability is the constraint on a portfolio company — or you're
            evaluating one — we're happy to have a candid conversation about fit.
          </p>
          <Button onClick={() => setContactOpen(true)} size="lg" className="rounded-full px-8 h-12">
            Schedule a conversation →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivateEquity;
