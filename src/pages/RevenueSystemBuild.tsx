import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import { offerings, getOfferingBySlug } from "@/data/offerings";
import { EngagementTimeline } from "@/components/EngagementTimeline";

const systemElements = [
  "Sales process",
  "Forecasting methodology",
  "Pipeline management",
  "Leadership cadence",
  "Customer handoffs",
  "Accountability structures",
  "Coaching",
  "CRM workflows",
  "Revenue reporting",
];

const engagementAreas = [
  {
    title: "Revenue Operating Rhythm",
    body: "Forecast calls, inspection cadence, leadership accountability, KPI structure.",
  },
  {
    title: "Pipeline Management",
    body: "Coverage modeling, progression standards, qualification discipline, funnel visibility.",
  },
  {
    title: "Sales Process Architecture",
    body: "Stage design, opportunity management, MEDDIC alignment, inspection rigor.",
  },
  {
    title: "CRM & Workflow Optimization",
    body: "Operational structure that supports forecasting accuracy and executive visibility.",
  },
  {
    title: "Leadership & Team Enablement",
    body: "Manager coaching systems, deal reviews, accountability frameworks.",
  },
  {
    title: "Founder Independence",
    body: "Building a revenue engine that no longer relies on executive escalation to close deals.",
  },
];

const RevenueSystemBuild = () => {
  const [open, setOpen] = useState(false);
  const others = offerings.filter((o) => o.slug !== "revenue-system-build");
  const phases = getOfferingBySlug("revenue-system-build")?.process ?? [];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue System Consulting for SaaS Companies | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Build a scalable revenue engine with Athena Revenue Partners. Revenue system consulting for Series A-C SaaS companies focused on forecast accuracy, operational rigor, and predictable growth."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/offerings/revenue-system-build" />
        <meta property="og:title" content="Revenue System Consulting for SaaS Companies | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Build a scalable revenue engine with Athena Revenue Partners. Revenue system consulting for Series A-C SaaS companies focused on forecast accuracy, operational rigor, and predictable growth."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/offerings/revenue-system-build" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* HERO */}
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
              03 · Revenue System Build
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Growth Stops When the Revenue System Can’t Scale.
            </h1>
            <div className="space-y-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>Most companies don't fail because they lack talent.</p>
              <p>
                They fail because their revenue engine was never designed to scale beyond the
                founder, the first sales team, or early-stage chaos.
              </p>
              <p>
                We help companies build operationally disciplined revenue systems that create
                predictable growth.
              </p>
            </div>
            <div className="mt-12">
              <Button onClick={() => setOpen(true)} size="lg" className="rounded-full px-8">
                Build a Scalable Revenue System
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT A REVENUE SYSTEM ACTUALLY MEANS */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What a revenue system actually means
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-10 text-balance max-w-3xl">
            A Revenue System Is More Than RevOps
          </h2>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>Technology alone does not create revenue predictability.</p>
              <p>A scalable revenue system aligns:</p>
              <p className="italic">
                Without alignment, growth becomes inconsistent and difficult to scale.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {systemElements.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base">
                  <span className="mt-2.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CORE ENGAGEMENT AREAS */}
      <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we help build
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-16 text-balance">
            Core Engagement Areas
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {engagementAreas.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-background p-8 md:p-10 flex flex-col"
              >
                <span className="font-display text-sm text-muted-foreground mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl mb-3">{e.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8 text-balance max-w-3xl">
            Ready to build the system your next stage of growth requires?
          </h2>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            variant="secondary"
            className="rounded-full px-8 mt-4"
          >
            Build a Scalable Revenue System
          </Button>
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

export default RevenueSystemBuild;
