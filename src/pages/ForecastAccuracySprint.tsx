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

const breakCauses = [
  "Inconsistent qualification",
  "Weak inspection cadence",
  "Undefined stage exit criteria",
  "Rep optimism",
  "Poor CRM hygiene",
  "Lack of accountability",
  "Leadership overreliance on anecdotal deal updates",
];

const breakResults = [
  "Missed revenue targets",
  "Board distrust",
  "Reactive decision-making",
  "Inefficient hiring and spend planning",
];

const sprintIncludes = [
  "Forecast methodology redesign",
  "Stage definition and exit criteria alignment",
  "Pipeline inspection framework",
  "Leadership forecast cadence",
  "Deal review structure",
  "Forecast categories and confidence modeling",
  "CRM workflow recommendations",
  "Executive dashboards and reporting guidance",
  "Manager coaching structure",
];

const outcomes = [
  "Improved forecast accuracy",
  "Stronger executive visibility",
  "More disciplined deal progression",
  "Earlier risk identification",
  "Improved investor and board confidence",
  "Scalable revenue inspection processes",
];

const ForecastAccuracySprint = () => {
  const [open, setOpen] = useState(false);
  const others = offerings.filter((o) => o.slug !== "forecast-accuracy-sprint");
  const phases = getOfferingBySlug("forecast-accuracy-sprint")?.process ?? [];

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Forecast Accuracy Sprint | Athena Revenue Partners</title>
        <meta
          name="description"
          content="A 6–8 week sprint that installs the inspection rigor and methodology to forecast within ±10–15% for Series A–C SaaS companies."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/offerings/forecast-accuracy-sprint" />
        <meta property="og:title" content="Forecast Accuracy Sprint | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Install forecast discipline and reach ±10–15% accuracy in six to eight weeks."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/offerings/forecast-accuracy-sprint" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Forecast Accuracy Sprint",
          "description": "A 6–8 week sprint to install forecast discipline and pipeline inspection rigor.",
          "provider": { "@type": "Organization", "name": "Athena Revenue Partners", "url": "https://athenarevenuepartners.com/" },
          "areaServed": "Global",
          "url": "https://athenarevenuepartners.com/offerings/forecast-accuracy-sprint",
        })}</script>
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
              02 · Forecast Accuracy Sprint
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Forecasts Should Drive Decisions — Not Anxiety.
            </h1>
            <div className="space-y-5 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>Most SaaS companies operate with forecast numbers they don't fully trust.</p>
              <p>
                The Forecast Accuracy Sprint helps revenue leaders build a forecasting process
                grounded in inspection rigor, operational discipline, and measurable pipeline
                reality.
              </p>
            </div>
            <div className="mt-12">
              <Button onClick={() => setOpen(true)} size="lg" className="rounded-full px-8">
                Improve Forecast Accuracy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION — THE PROBLEM */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            The problem
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-12 text-balance max-w-3xl">
            Why Forecasting Breaks
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Forecast inaccuracy is rarely a spreadsheet issue. It’s usually caused by:
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
                Root causes
              </p>
              <ul className="space-y-3">
                {breakCauses.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-base">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-5">
                The result
              </p>
              <ul className="space-y-3">
                {breakResults.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-base">
                    <span className="mt-2.5 w-1 h-1 rounded-full bg-destructive flex-shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION — WHAT WE BUILD */}
      <section className="py-24 md:py-32 border-t border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we build
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-16 text-balance">
            What the Sprint Includes
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {sprintIncludes.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-background p-6 md:p-8 flex flex-col gap-3"
              >
                <span className="font-display text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <p className="font-display text-lg leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EngagementTimeline phases={phases} heading="What happens, week by week." />

      {/* SECTION — BUSINESS IMPACT */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">
            Business impact
          </p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-12 text-balance max-w-3xl">
            The Outcome: Predictable Revenue Operations
          </h2>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16">
            <div className="space-y-5 text-lg leading-relaxed opacity-90">
              <p>Our goal isn't just cleaner forecasting.</p>
              <p className="font-display text-2xl md:text-3xl opacity-100">
                It's operational confidence.
              </p>
              <p>Clients leave with:</p>
            </div>
            <ul className="space-y-4">
              {outcomes.map((o) => (
                <li
                  key={o}
                  className="flex items-start gap-4 text-lg pb-4 border-b border-primary-foreground/20 last:border-0"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <Button
              onClick={() => setOpen(true)}
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
            >
              Improve Forecast Accuracy
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

export default ForecastAccuracySprint;
