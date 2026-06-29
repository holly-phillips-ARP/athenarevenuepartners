import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const scenarios = [
  {
    title: "Quarterly planning",
    body: "You need an outside perspective to pressure-test the plan, forecast, and priorities before committing resources.",
  },
  {
    title: "Board preparation",
    body: "You want an independent review of revenue performance, forecast confidence, and execution risks ahead of board conversations.",
  },
  {
    title: "Executive coaching",
    body: "Your leadership team needs experienced guidance to improve forecasting, pipeline management, and operating discipline.",
  },
  {
    title: "Growth strategy",
    body: "The business is evolving, and the revenue operating system needs to evolve with it.",
  },
];

const partnerships = [
  {
    title: "Executive Coaching",
    body: "One-on-one and team coaching to strengthen revenue leadership, decision-making, and accountability.",
  },
  {
    title: "Forecast Reviews",
    body: "Regular pressure-testing of the forecast methodology, pipeline health, and forecast confidence.",
  },
  {
    title: "Strategic Planning",
    body: "Quarterly input on growth priorities, resource allocation, and the operating system required to support the next stage.",
  },
  {
    title: "Operating System Optimization",
    body: "Continuous refinement of process, metrics, cadence, and technology as the business grows.",
  },
];

const methodology = [
  { phase: "Design", label: "Revenue Architecture Sprint", current: false },
  { phase: "Assess", label: "Revenue Diagnostic", current: false },
  { phase: "Build", label: "Revenue System Build", current: false },
  { phase: "Optimize", label: "Revenue Advisory", current: true },
];

const deliverables = [
  {
    title: "Quarterly Business Reviews",
    body: "Independent assessment of revenue performance, forecast accuracy, and operating system health.",
  },
  {
    title: "Executive Coaching",
    body: "Strategic coaching sessions with founders and revenue leaders to improve decision-making and execution.",
  },
  {
    title: "Board Preparation",
    body: "Review and framing of revenue topics, forecast confidence, and risks for board discussions.",
  },
  {
    title: "Strategic Recommendations",
    body: "Prioritized opportunities to improve the revenue operating system as the business evolves.",
  },
];

const timeline = [
  {
    phase: "Quarterly",
    items: ["Business review", "Forecast pressure-test", "Priority identification", "Strategic recommendations"],
  },
  {
    phase: "Monthly",
    items: ["Operating cadence review", "KPI analysis", "Leadership coaching", "System refinement"],
  },
  {
    phase: "Ongoing",
    items: ["Board preparation", "Ad-hoc guidance", "Continuous improvement", "Operating model evolution"],
  },
];

const outcomes = [
  "Better executive decisions",
  "Stronger forecasting",
  "Continuous improvement",
  "Leadership confidence",
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/founders/revenue-advisory";

const FoundersRevenueAdvisory = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Advisory | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Ongoing strategic oversight for founders and leadership teams after implementation — keep the revenue operating system improving as the business grows."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Advisory | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Ongoing strategic oversight for founders and leadership teams after implementation — keep the revenue operating system improving as the business grows."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Start Revenue Advisory"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Founders — Revenue Advisory"
      />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
          <Link
            to="/who-we-work-with/founders"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Founders
          </Link>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  Revenue Advisory
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
                  {methodology.map((m, i) => (
                    <div key={m.phase} className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`h-1.5 w-1.5 rounded-full ${
                            m.current ? "bg-accent" : "bg-muted-foreground/30"
                          }`}
                        />
                        <span
                          className={`text-[10px] uppercase tracking-[0.15em] whitespace-nowrap ${
                            m.current ? "text-accent" : "text-muted-foreground"
                          }`}
                        >
                          {m.phase}
                        </span>
                      </div>
                      {i < methodology.length - 1 && (
                        <ChevronRight className="h-3 w-3 text-muted-foreground/30 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8 text-balance">
                Keep improving without rebuilding.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  Revenue Advisory provides ongoing strategic oversight for founders and leadership teams after implementation.
                </p>
                <p>
                  As the business grows, the operating system evolves with it.
                </p>
              </div>
              <div className="mt-10 p-5 border border-border/60 bg-background/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Typical Engagement
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Monthly or quarterly advisory
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Executive coaching and strategic reviews
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Ongoing add-on following a Revenue System Build
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Designed for founder-led companies committed to continuous improvement
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHEN TO BRING US IN */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            WHEN TO BRING US IN
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Ongoing support for four common leadership moments.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-background p-8 flex flex-col gap-3">
                <h3 className="font-display text-xl md:text-2xl leading-tight">{s.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE PARTNER */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            How We Partner
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four ways we help leadership teams keep improving.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerships.map((p) => (
              <div
                key={p.title}
                className="bg-secondary/40 border border-border/60 p-8 flex flex-col gap-3"
              >
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{p.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU RECEIVE */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What You Receive
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            What you leave with.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="bg-background border border-border/60 p-8 flex flex-col gap-3"
              >
                <h3 className="font-display text-xl md:text-2xl leading-tight">{d.title}</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            A continuous operating rhythm.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {timeline.map((t, i) => (
              <div
                key={t.phase}
                className="relative bg-secondary/40 border border-border/60 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10 text-accent font-display text-sm">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg">{t.phase}</span>
                </div>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm md:text-base text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Typical Outcomes
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            By the end of the engagement you'll have:
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

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Keep improving without rebuilding.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Ongoing strategic oversight that helps your revenue operating system evolve with the business.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start advisory →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FoundersRevenueAdvisory;
