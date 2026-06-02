import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";

const moments = [
  "Missed forecast or lack of visibility",
  "Founder still carrying key deals",
  "Inconsistent pipeline and conversion",
  "Scaling from early traction to repeatable growth",
  "M&A or structural change",
];

const Founders = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Founders | Athena Revenue Partners</title>
        <meta
          name="description"
          content="We work with founders and CEOs at startup B2B tech companies — installing the revenue systems that turn early traction into repeatable, forecastable growth."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/founders" />
        <meta property="og:title" content="For Founders | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Founders and CEOs at startup B2B tech companies."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/who-we-work-with/founders" />
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
              For Founders
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Founders and CEOs at{" "}
              <em className="italic text-muted-foreground">startup B2B tech companies.</em>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Companies navigating growth, scaling, or ownership transitions — where revenue
              execution has become the bottleneck.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MOMENTS */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              When founders call us
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              Typical moments we're brought in.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {moments.map((m, i) => (
                <li
                  key={m}
                  className="py-4 flex items-baseline gap-6 group hover:text-foreground transition-colors"
                >
                  <span className="font-display text-sm text-muted-foreground tabular-nums w-8">
                    0{i + 1}
                  </span>
                  <span className="text-base md:text-lg">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-10 text-balance max-w-3xl">
            Ready to make revenue predictable?
          </h2>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            Book a diagnostic
          </Button>
        </div>
      </section>

      <Footer />
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Founders;
