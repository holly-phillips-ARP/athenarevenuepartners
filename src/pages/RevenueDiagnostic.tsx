import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import { offerings } from "@/data/offerings";

const audience = [
  "Series A–C SaaS companies",
  "Founder-led sales organizations",
  "Teams preparing for scale or ownership transition",
  "Companies struggling with forecast accuracy",
  "Revenue teams experiencing inconsistent quarter-to-quarter performance",
  "CROs inheriting operational chaos",
];

const evaluation = [
  {
    title: "Pipeline Quality & Coverage",
    body: "We assess whether your pipeline reflects actual buying behavior or rep optimism.",
  },
  {
    title: "Forecast Methodology & Accuracy",
    body: "We analyze forecast reliability, inspection rigor, stage definitions, and executive visibility.",
  },
  {
    title: "Sales Process & Deal Execution",
    body: "We identify breakdowns in qualification, progression, accountability, and deal control.",
  },
  {
    title: "Leadership Operating Rhythm",
    body: "We evaluate your forecast cadence, inspection discipline, coaching structure, and revenue accountability.",
  },
  {
    title: "Founder Dependence",
    body: "We identify where revenue performance relies too heavily on executive intervention.",
  },
];

const deliverables = [
  "Executive revenue assessment",
  "Forecast accuracy analysis",
  "Pipeline health review",
  "CRM and process evaluation",
  "Top operational risks and growth constraints",
  "Prioritized 90-day action plan",
  "Leadership readout and recommendations",
];

const RevenueDiagnostic = () => {
  const [open, setOpen] = useState(false);
  const others = offerings.filter((o) => o.slug !== "revenue-diagnostic");

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Diagnostic for SaaS Companies | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Identify the root causes behind inaccurate forecasting, stalled pipeline growth, and inconsistent revenue performance. Athena Revenue Partners helps Series A-C SaaS companies build predictable revenue systems."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/offerings/revenue-diagnostic" />
        <meta property="og:title" content="Revenue Diagnostic for SaaS Companies | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Identify the root causes behind inaccurate forecasting, stalled pipeline growth, and inconsistent revenue performance. Athena Revenue Partners helps Series A-C SaaS companies build predictable revenue systems."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/offerings/revenue-diagnostic" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            to="/#offerings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> All offerings
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              01 · Revenue Diagnostic
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Your Revenue Problem Probably Isn’t Pipeline.
            </h1>
            <div className="space-y-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Most Series A–C companies don’t struggle because they lack opportunity. They struggle because their revenue engine lacks operational discipline, forecasting accuracy, and scalable systems.
              </p>
              <p>
                The Revenue Diagnostic identifies the gaps preventing predictable growth — and gives leadership a clear path forward.
              </p>
            </div>
            <div className="mt-12">
              <Button onClick={() => setOpen(true)} size="lg" className="rounded-full px-8">
                Schedule a Diagnostic
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION — WHO THIS IS FOR */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Who this is for
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-10 text-balance max-w-3xl">
            Built for Companies That Have Outgrown Founder-Led Selling
          </h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="md:col-span-2">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {audience.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-base">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed italic">
              Whether you’re missing forecast targets, carrying inflated pipeline, or struggling to scale beyond key individuals, the underlying issue is usually systemic — not tactical.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION — WHAT WE ASSESS */}
      <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we assess
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-16 text-balance">
            What We Evaluate
          </h2>

          <div className="space-y-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {evaluation.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background p-8 md:p-10 grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 items-baseline"
              >
                <span className="font-display text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl">{e.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — DELIVERABLES */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Deliverables
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">
              What You Receive
            </h2>
          </div>
          <ul className="space-y-4">
            {deliverables.map((d) => (
              <li
                key={d}
                className="flex items-start gap-4 text-lg pb-4 border-b border-border last:border-0"
              >
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION — DIFFERENTIATOR */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-6">
            Why Athena
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-12 text-balance max-w-3xl">
            We Don’t Just Tell You What’s Broken.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-lg leading-relaxed opacity-90 max-w-4xl">
            <div className="space-y-5">
              <p>Most consultants deliver observations.</p>
              <p className="font-display text-2xl md:text-3xl not-italic opacity-100">
                We deliver operational clarity.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Our approach combines executive revenue leadership, RevOps discipline, forecasting rigor, and real-world GTM experience inside scaling SaaS organizations.
              </p>
              <p>The result is a practical roadmap leadership teams can actually execute.</p>
            </div>
          </div>
          <div className="mt-16">
            <Button
              onClick={() => setOpen(true)}
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
            >
              Schedule a Diagnostic
            </Button>
          </div>
        </div>
      </section>

      {/* OTHER OFFERINGS */}
      <section className="py-24 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Other offerings
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/offerings/${o.slug}`}
                className="group p-8 border border-border rounded-sm hover:border-foreground/40 transition-colors flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-display text-sm text-muted-foreground mb-2">{o.no}</p>
                  <h3 className="font-display text-2xl mb-2">{o.name}</h3>
                  <p className="text-sm text-muted-foreground">{o.summary}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default RevenueDiagnostic;
