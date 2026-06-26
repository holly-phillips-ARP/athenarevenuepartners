import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const targets = [
  {
    title: "B2B software & tech-enabled services",
    body:
      "Lower- and middle-market software businesses where revenue runs through the founder, the CRM is a graveyard, and the next leg of growth requires a defensible go-to-market motion.",
  },
  {
    title: "Field & home services platforms",
    body:
      "HVAC, plumbing, electrical, pest, and multi-location consumer brands acquired from a founder or family operator — now being professionalized, consolidated, and scaled under PE ownership.",
  },
];

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
              You bought a business.{" "}
              <em className="italic text-accent font-light">
                You inherited the prior owner's revenue habits.
              </em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              In most PE-backed companies, revenue was built on the founder's relationships,
              reputation, and gut. That doesn't scale, and it doesn't underwrite. We install the
              system that replaces it — so the value-creation plan runs on architecture, not personality.
            </p>
          </motion.div>
        </div>
      </section>


      {/* PROBLEM */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we see at close
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

      {/* WHEN */}
      <section className="border-t border-border py-24 md:py-32">
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

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
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
