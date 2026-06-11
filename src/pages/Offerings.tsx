import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const offerings = [
  {
    tag: "Start here",
    name: "Revenue Diagnostic",
    duration: "2–3 weeks",
    desc:
      "A focused assessment of forecast accuracy, pipeline quality, and sales process maturity. Identifies the highest-ROI lever and quantifies the gap.",
    forInvestors:
      "Diligence-grade read on a portfolio company — pre- or post-close.",
    forFounders:
      "A good starting point if you're not sure what the problem is or where to focus first.",
  },
  {
    tag: "Most common",
    name: "Revenue System Build",
    duration: "90 days",
    desc:
      "Full installation of all four pillars — forecast methodology, revenue qualification, repeatable sales process, and leadership operating cadence. Ends with a trained team and a working system.",
    forInvestors:
      "The core engagement. A revenue operation your board can underwrite.",
    forFounders:
      "A trained team, a working forecast, and a sales process your next hire can step into.",
    featured: true,
  },
  {
    tag: "In transition",
    name: "Revenue Bridge",
    duration: "3–6 months",
    desc:
      "For companies mid-search for a CRO, VP of Sales, or GM — we stabilize and document the revenue operation so the incoming hire steps into infrastructure, not a blank page.",
    forInvestors:
      "Protects the asset during a leadership search and de-risks the hire.",
    forFounders:
      "Your new hire steps into infrastructure — not a blank page.",
  },
  {
    tag: "Post-engagement",
    name: "Executive Advisory",
    duration: "Quarterly",
    desc:
      "For companies that have completed a Revenue System Build and want ongoing outside perspective. A quarterly cadence to review performance, pressure-test the forecast, and identify what to tune.",
    forInvestors:
      "Outside eyes on a portfolio company that already runs the system.",
    forFounders:
      "You own the system. We're the outside eyes — on a defined quarterly basis.",
    advisory: true,
  },
];

const Offerings = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Offerings | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Four engagements designed to install a revenue system that runs — for investors and founders alike."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/offerings" />
        <meta property="og:title" content="Offerings | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Project-based engagements with a defined start, end, and handoff."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/offerings" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Let's talk"
        description="Tell us where you are — we'll reply within one business day."
        source="Offerings — Schedule a conversation"
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
              Offerings
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
              Project-based.{" "}
              <em className="italic text-accent font-light">
                Fixed scope. Defined handoff.
              </em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              We don't take fractional VP of Sales roles. We don't embed indefinitely. Every
              engagement has a clear start, a clear end, and leaves a system the business can
              run without us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {offerings.map((o) => (
              <div
                key={o.name}
                className={`bg-background p-6 md:p-8 flex flex-col ${
                  o.featured ? "border-2 border-accent" : ""
                } ${o.advisory ? "bg-secondary/40" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">
                    {o.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{o.duration}</span>
                </div>
                <h3 className="font-display text-2xl mb-3">{o.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {o.desc}
                </p>
                <div className="mt-auto pt-5 border-t border-border space-y-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-accent mb-1">
                      For investors
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {o.forInvestors}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-accent mb-1">
                      For founders
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {o.forFounders}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Not sure which one fits?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us where you are — we'll tell you honestly whether we're a fit and which
            engagement makes the most sense.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Schedule a conversation →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Offerings;
