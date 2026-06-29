import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    title: "Founder-Dependent Revenue",
    body:
      "The founder is still the best salesperson, the best closer, and the source of every major customer relationship. Growth becomes constrained by one person's bandwidth.",
  },
  {
    title: "No Revenue Operating System",
    body:
      "Sales processes, qualification, forecasting, and leadership cadence exist—but only informally. Success depends on individual judgment rather than repeatable execution.",
  },
  {
    title: "Premature Scaling",
    body:
      "Sales hires were added before the operating system existed. Performance varies wildly, ramp times increase, and leadership struggles to understand why.",
  },
  {
    title: "Revenue Without Visibility",
    body:
      "Pipeline exists. Forecasts exist. But leadership can't confidently explain either to the board or future investors.",
  },
];

const deliverables = [
  {
    no: "01",
    title: "Forecast Methodology",
    body: "A repeatable process for forecasting, inspection, and executive decision-making.",
  },
  {
    no: "02",
    title: "Revenue Qualification",
    body: "A common framework that separates real opportunities from optimistic ones.",
  },
  {
    no: "03",
    title: "Repeatable Sales Process",
    body: "A documented motion that allows new sales leaders and new hires to execute consistently—not invent their own process.",
  },
  {
    no: "04",
    title: "Leadership Operating Cadence",
    body: "A management rhythm that gives founders, executives, and boards confidence in the number between meetings—not after them.",
  },
];

const moments = [
  {
    trigger: "Post-Product Market Fit",
    sub: "Founder still owns revenue",
    body:
      "The product works. Customers are buying. But the founder is still driving every important deal, and the company hasn't built the systems required to scale beyond them.",
  },
  {
    trigger: "First Sales Leadership Hire",
    sub: "Before or during the search",
    body:
      "A VP of Sales or CRO stepping into infrastructure executes from Day One. We install the operating system so the hire compounds—not compensates.",
  },
  {
    trigger: "Preparing for the Next Round",
    sub: "6–12 months before fundraising",
    body:
      "Investors don't just underwrite product anymore. They underwrite predictable growth. We help companies build the operating discipline, forecasting, and execution required to support the next raise.",
  },
  {
    trigger: "Board-Driven Intervention",
    sub: "When growth starts to plateau",
    body:
      "Forecasts are slipping. Pipeline quality is inconsistent. The founder is becoming the bottleneck. We step in to build the operating system before those issues become company-defining.",
  },
];

const engagements = [
  {
    tag: "POST-PRODUCT MARKET FIT",
    name: "Revenue Architecture Sprint",
    desc:
      "For founder-led companies preparing for the next stage of growth. Design the revenue operating system before scaling the team.",
    link: "/who-we-work-with/investors/private-equity/revenue-architecture-sprint",
  },
  {
    tag: "SCALING COMPANY",
    name: "Revenue Diagnostic",
    desc:
      "For companies missing growth targets or struggling to create predictable execution. Identify the operational constraints limiting scale and prioritize improvements with the greatest business impact.",
    link: "/who-we-work-with/investors/private-equity/revenue-diagnostic",
  },
  {
    tag: "CORE ENGAGEMENT",
    name: "Revenue System Build",
    desc:
      "For companies ready to operationalize growth. Install the people, process, metrics, technology, and leadership cadence that create predictable revenue.",
    link: "/who-we-work-with/investors/private-equity/revenue-system-build",
    featured: true,
  },
  {
    tag: "ONGOING",
    name: "Revenue Advisory",
    desc:
      "For companies committed to continuous improvement. Quarterly strategic oversight to pressure-test forecasts, coach leadership, and evolve the revenue operating system as the business grows.",
    link: "/who-we-work-with/investors/private-equity/revenue-advisory",
  },
  {
    tag: "LEADERSHIP TRANSITION",
    name: "Revenue Bridge",
    desc:
      "A leadership transition doesn't require a different methodology—it requires a different starting point. Whether you're hiring your first VP of Sales, your first CRO, or replacing an executive, we install the operating system before or alongside the transition so new leaders spend their first months executing—not diagnosing.",
    link: "/who-we-work-with/investors/private-equity/revenue-bridge",
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
              Every founder eventually outgrows founder-led selling.{" "}
              <em className="italic text-accent font-light">
                The best companies recognize it before growth stalls.
              </em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Whether you're preparing a portfolio company for its next stage of growth, helping a
              founder build their first revenue organization, or preparing for the next funding
              round, Athena installs the revenue operating systems that transform founder-led growth
              into repeatable execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What we see at the board table
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four predictable gaps between product-market fit and repeatable growth.
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
            Four pillars. One methodology. A revenue operating system your board can trust.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            We don't advise.
            <br />
            We install.
            <br />
            Every engagement ends with a working operating system—not a deck, not a strategy, not a list of recommendations.
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

      {/* WHEN */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            When to bring us in
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            From product-market fit through scale.
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
            We don't become your VP of Sales.
            <br />
            We don't become your CRO.
            <br />
            We build the operating system your leadership team owns.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {engagements.map((e) => (
              <div
                key={e.name}
                className={`bg-background p-6 md:p-8 flex flex-col ${
                  e.featured ? "border-2 border-accent" : ""
                }`}
              >
                <span className="inline-block text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded mb-4">
                  {e.tag}
                </span>
                <h3 className="font-display text-xl mb-3">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{e.desc}</p>
                <Link
                  to={e.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-auto"
                >
                  Learn More <span aria-hidden="true">→</span>
                </Link>
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
