import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";

const dealCycle = [
  {
    title: "Pre-Investment Diligence",
    body: "We sharpen your read on GTM risk before you write the check. If a company's revenue depends entirely on the founder closing deals, that's a scalability ceiling — and a valuation risk. We help you see it clearly and underwrite with confidence.",
  },
  {
    title: "Post-Close Execution",
    body: "We move fast. Within weeks of engagement, your portfolio company has a working revenue system: structured pipeline, defined sales motion, and a forecast that holds. No more waiting quarters for the right hire to figure it out.",
  },
  {
    title: "Ongoing Portfolio Support",
    body: "Revenue predictability isn't a one-time fix. We stay alongside portfolio leaders to ensure systems scale as the business scales — so you're not putting out the same fires as your portfolio companies grow.",
  },
];

const focusAreas = [
  "Revenue system design and implementation",
  "Forecast accuracy and pipeline discipline",
  "Sales process and motion definition",
  "GTM strategy and ICP refinement",
  "Founder transition out of the sales role",
];

const engagements = [
  {
    title: "Firm-Level Partnership",
    body: "Preferred access for portfolio-wide diagnostic and system-build engagements. We become a trusted resource across your portfolio, available when a company hits a growth inflection point or revenue stall.",
  },
  {
    title: "Deal-Specific Engagements",
    body: "Pre-close diligence support or post-close execution work scoped to a specific portfolio company and timeline.",
  },
];

const Investors = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Investors | Athena Revenue Partners</title>
        <meta
          name="description"
          content="We partner with VC and PE firms on GTM diligence, post-close execution, and ongoing portfolio support — protecting valuation and accelerating returns."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/investors" />
        <meta property="og:title" content="For Investors | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Protecting portfolio value starts with predictable revenue."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/who-we-work-with/investors" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              For Investors
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Protecting portfolio value starts with{" "}
              <em className="italic text-muted-foreground">predictable revenue.</em>
            </h1>
            <div className="space-y-6 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              <p>
                Most revenue problems in your portfolio aren't sales problems. They're systems
                problems — and they're expensive to discover after the fact.
              </p>
              <p>
                We partner with investors and portfolio leaders to identify and fix the root cause:
                founder-dependent revenue. We install the repeatable systems that get founders out
                of the sales process and put predictable growth in its place — protecting valuation,
                improving forecast accuracy, and accelerating returns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEAL CYCLE */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Where we work
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] mb-14 text-balance max-w-3xl">
            Across the deal cycle.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {dealCycle.map((d) => (
              <div key={d.title} className="bg-background p-8 md:p-10">
                <h3 className="font-display text-xl md:text-2xl mb-4 leading-snug">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What makes us different
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              We've built revenue systems inside Fortune 50 companies — so we know what mature,
              scalable GTM looks like. And we've spent years inside high-growth startups — so we
              know what actually transfers and what doesn't.
            </p>
            <p className="text-muted-foreground">
              That dual experience is rare. It's also exactly what your portfolio companies need.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What we typically work on
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              The work itself.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {focusAreas.map((f, i) => (
                <li
                  key={f}
                  className="py-4 flex items-baseline gap-6 group hover:text-foreground transition-colors"
                >
                  <span className="font-display text-sm text-muted-foreground tabular-nums w-8">
                    0{i + 1}
                  </span>
                  <span className="text-base md:text-lg">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW INVESTORS WORK WITH US */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            How investors work with us
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] mb-14 text-balance max-w-3xl">
            Two ways to engage.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {engagements.map((e) => (
              <div key={e.title} className="bg-background p-8 md:p-10">
                <h3 className="font-display text-xl md:text-2xl mb-4 leading-snug">{e.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-10 text-balance max-w-3xl">
            Ready to talk about your portfolio?
          </h2>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            Schedule a conversation →
          </Button>
        </div>
      </section>

      <Footer />
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Investors;
