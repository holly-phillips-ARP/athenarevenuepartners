import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import { ContactDialog } from "@/components/ContactDialog";
import partner1 from "@/assets/partner-1.png";
import partner2 from "@/assets/partner-2.png";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const stats = [
  ["±10%", "Forecast accuracy target"],
  ["90 days", "Typical time to impact"],
  ["30+ yrs", "Combined experience"],
];

const routes = [
  {
    label: "For PE & VC investors",
    headline: "Protecting portfolio value starts with predictable revenue.",
    body:
      "We work with operating partners and deal teams to install revenue architecture in portfolio companies — post-acquisition, pre-raise, and pre-hire.",
    href: "/who-we-work-with/investors",
    cta: "How we work with investors",
  },
  {
    label: "For founders & CEOs",
    headline: "You built the revenue. Now let's make it run without you.",
    body:
      "We work with post-PMF B2B founders who are ready to step back from deals and build a sales motion that doesn't depend on them being in every room.",
    href: "/who-we-work-with/founders",
    cta: "How we work with founders",
  },
];

const pillars = [
  {
    no: "01",
    title: "Forecast methodology",
    body: "A defined process for building, reviewing, and defending a forecast number your board can trust.",
  },
  {
    no: "02",
    title: "Revenue qualification",
    body: "A consistent standard for what's real versus assumed — so coverage gaps are visible before they become misses.",
  },
  {
    no: "03",
    title: "Repeatable sales process",
    body: "A defined motion so wins are replicable and losses are diagnosable — regardless of who's selling.",
  },
  {
    no: "04",
    title: "Leadership operating cadence",
    body: "A weekly rhythm that surfaces problems early and keeps leadership accountable to the number.",
  },
];

const partners = [
  { name: "Kami Cekosh", role: "Co-Founder", image: partner1 },
  { name: "Holly Phillips", role: "Co-Founder", image: partner2 },
];

const Index = () => {
  const [diagOpen, setDiagOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Athena Revenue Partners — B2B Revenue Architecture</title>
        <meta
          name="description"
          content="We install repeatable revenue systems for PE-backed companies and B2B founders — replacing founder-dependent sales with a process your board can underwrite and your team can execute."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/" />
        <meta property="og:title" content="Athena Revenue Partners — B2B Revenue Architecture" />
        <meta
          property="og:description"
          content="Revenue that runs on a system, not on the people who built it."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <DiagnosticDialog open={diagOpen} onOpenChange={setDiagOpen} />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Schedule a conversation"
        description="Tell us where you are — we'll reply within one business day."
        source="Home — Schedule a conversation"
      />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            {...fadeUp(0)}
            className="text-xs uppercase tracking-[0.2em] text-accent mb-6"
          >
            B2B Revenue Architecture
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-balance max-w-5xl mb-8"
          >
            Revenue that runs on a system,{" "}
            <em className="italic text-accent font-light">
              not on the people who built it.
            </em>
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            We install repeatable revenue systems for PE-backed companies and B2B founders —
            replacing founder-dependent sales with a process your board can underwrite and
            your team can execute.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl"
          >
            {stats.map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-3xl md:text-4xl">{k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                  {v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROUTING CARDS */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {routes.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="group bg-background p-10 md:p-12 flex flex-col justify-between min-h-[320px] hover:bg-secondary/40 transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6">
                    {r.label}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl leading-snug text-balance mb-6">
                    {r.headline}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
                <div className="mt-10 inline-flex items-center gap-2 text-sm border-b border-foreground/30 group-hover:border-foreground pb-1 w-fit transition-colors">
                  {r.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="approach" className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                What we install
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6">
                The same four pillars — in every engagement.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                The vocabulary changes depending on the business — enterprise software, HVAC
                service agreements, recurring field services contracts — but the architecture
                doesn't.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
            {pillars.map((p) => (
              <div key={p.no} className="bg-background p-8">
                <div className="font-display text-xs text-accent mb-4 tracking-widest">
                  {p.no}
                </div>
                <h3 className="font-display text-xl mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Who we are
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance">
                Operators, not consultants.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Thirty years of combined experience — building teams, rebuilding pipelines, and
                installing the systems that make revenue predictable when it isn't.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-5 bg-background border border-border p-5"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary border border-border flex-shrink-0">
                  <img
                    src={p.image}
                    alt={`${p.name}, ${p.role}`}
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-display text-lg leading-tight">{p.name}</div>
                  <div className="text-xs text-accent mt-1">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="engage" className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance max-w-3xl mx-auto mb-6">
            If your forecast isn't reliable, your growth isn't either.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
            Most clients start with a Revenue Diagnostic. It's the fastest way to see where
            the gaps are and what to fix first.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={() => setDiagOpen(true)}
              size="lg"
              className="rounded-full px-7 h-12"
            >
              Start with a diagnostic
            </Button>
            <Button
              onClick={() => setContactOpen(true)}
              size="lg"
              variant="ghost"
              className="rounded-full px-7 h-12 hover:bg-secondary"
            >
              Schedule a conversation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
