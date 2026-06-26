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
    title: "Post-PMF B2B SaaS",
    body:
      "Seed- through Series B software companies with real customer signal — where the founder is still the primary closer and the next round depends on showing a repeatable motion.",
  },
  {
    title: "Founder-led go-to-market",
    body:
      "Companies where the first sales hires haven't unlocked the second wave of growth, and the board is starting to ask whether it's the people, the process, or both.",
  },
];

const problems = [
  {
    title: "Founder-as-CRO",
    body:
      "The founder is still the best closer. Every deal that matters runs through them — which caps growth and makes the forecast a function of their calendar.",
  },
  {
    title: "Pipeline theater",
    body:
      "CRM hygiene is poor, qualification is loose, and coverage looks fine until the quarter closes 40% short. The board sees it last.",
  },
  {
    title: "Premature scaling",
    body:
      "Reps were hired before the motion was repeatable. Ramp is slow, attribution is murky, and CAC payback is moving the wrong direction.",
  },
  {
    title: "No forecast methodology",
    body:
      "The number is a vibe. There's no inspection cadence, no accountability, and no way to defend it to the board — or to the next round's lead.",
  },
];

const moments = [
  {
    trigger: "Post-Series A",
    sub: "First 12 months after the round",
    body:
      "The window where the company has to prove the motion is repeatable without the founder. Installing the system now sets up the Series B story.",
  },
  {
    trigger: "Pre-CRO hire",
    sub: "Before or during the search",
    body:
      "A CRO or VP of Sales stepping into infrastructure executes from Day 1. We install the system so the hire compounds — not compensates.",
  },
  {
    trigger: "Pre-raise",
    sub: "6–12 months before the next round",
    body:
      "A defensible forecast methodology and clean pipeline are underwriting inputs. We make the revenue story as defensible as the product story.",
  },
  {
    trigger: "Board-driven intervention",
    sub: "When the forecast keeps missing",
    body:
      "When the board has lost confidence in the number, we step in as a neutral third party to diagnose, install, and hand back a working system.",
  },
];

const VentureCapital = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Venture Capital Investors | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Help post-PMF B2B SaaS portfolio companies graduate from founder-led selling to a repeatable revenue motion — in 90 days."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/investors/venture-capital" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Let's talk about your portfolio"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Venture Capital — Schedule a conversation"
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
              For Venture Capital Investors
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
              The product works.{" "}
              <em className="italic text-accent font-light">
                The go-to-market hasn't graduated from the founder.
              </em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Most post-PMF B2B SaaS companies stall at the same spot: revenue still runs through
              the founder, the forecast is a guess, and the next round depends on showing a
              repeatable motion. We install the system that gets them there — in 90 days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Where we work
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {targets.map((a) => (
              <div key={a.title} className="bg-background p-8 md:p-10">
                <h3 className="font-display text-xl md:text-2xl mb-4 leading-snug">{a.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we see at the board table
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four patterns that quietly cost the next round.
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
            Four inflection points where ARP delivers the highest leverage.
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
            If you have a portfolio company stuck between founder-led selling and a repeatable
            motion, we're happy to have a candid conversation about fit.
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

export default VentureCapital;
