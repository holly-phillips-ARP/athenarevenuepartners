import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const methodology = [
  {
    no: "01",
    phase: "Design",
    body:
      "Define the revenue operating system the business actually needs—shaped by stage, motion, and the leadership team in place.",
  },
  {
    no: "02",
    phase: "Assess",
    body:
      "Pressure-test the current state. Forecast credibility, pipeline quality, process maturity, and leadership cadence—measured against what the next stage requires.",
  },
  {
    no: "03",
    phase: "Build",
    body:
      "Install the system. Forecast methodology, qualification, repeatable process, and operating cadence—trained into the team that will run it.",
  },
  {
    no: "04",
    phase: "Optimize",
    body:
      "Tune the system as the business evolves. New leaders, new motions, new stages—the operating system adapts without starting over.",
  },
];

const offerings = [
  {
    name: "Revenue Architecture Sprint",
    desc: "Design the revenue operating system.",
  },
  {
    name: "Revenue Diagnostic",
    desc: "Identify what's limiting performance.",
  },
  {
    name: "Revenue System Build",
    desc: "Install the operating system.",
  },
  {
    name: "Revenue Advisory",
    desc: "Ongoing optimization.",
  },
  {
    name: "Revenue Bridge",
    desc: "Leadership transitions.",
  },
];

const buyers = [
  {
    tag: "Private Equity",
    title: "Portfolio Companies",
    body:
      "For sponsor-backed companies between thesis and exit—where revenue predictability is a board-level requirement.",
    href: "/who-we-work-with/investors/private-equity",
    cta: "View private equity investor offerings",
  },
  {
    tag: "Venture Capital",
    title: "Founder-Led Companies",
    body:
      "For post-product-market-fit companies scaling past founder-led selling toward a repeatable revenue motion.",
    href: "/who-we-work-with/investors/venture-capital",
    cta: "View venture capital investor offerings",
  },
  {
    tag: "Founders & CEOs",
    title: "Operating Companies",
    body:
      "For founders and CEOs building the revenue operation directly—without an investor mandate driving the timeline.",
    href: "/who-we-work-with/founders",
    cta: "View founder & CEO offerings",
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
          content="A single methodology—Design, Assess, Build, Optimize—tailored to private equity, venture capital, and founder-led companies."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/offerings" />
        <meta property="og:title" content="Offerings | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="One methodology. Three buyers. Project-based engagements with a defined start, end, and handoff."
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
        source="Offerings — Start the conversation"
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
              One methodology.{" "}
              <em className="italic text-accent font-light">
                Tailored to the buyer.
              </em>
            </h1>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Every Athena Revenue Partners engagement&nbsp;is built on the same Revenue Operating System methodology. The engagement you start with depends on where your business is today - not who you are.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Whether you're an investor evaluating a company, a portfolio executive driving transformation, or a founder preparing for the next stage of growth, we meet you where you are and build from there.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              THE ATHENA METHOD
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Design. Assess. Build. Optimize.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {methodology.map((m) => (
              <div key={m.no} className="bg-background p-6 md:p-8 flex flex-col">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-sm text-muted-foreground">
                    {m.no}
                  </span>
                  <h3 className="font-display text-2xl">{m.phase}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS — HIGH LEVEL */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              The engagements
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Five ways the methodology shows up.
            </h2>
            <p className="text-muted-foreground leading-relaxed mt-6">
              The scope, sequencing, and emphasis shift by buyer. The underlying system does
              not.
            </p>
          </div>
          <div className="border-t border-border">
            {offerings.map((o) => (
              <div
                key={o.name}
                className="border-b border-border py-6 md:py-7 grid md:grid-cols-12 gap-4 items-baseline"
              >
                <h3 className="font-display text-xl md:text-2xl md:col-span-5">
                  {o.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed md:col-span-7">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER PATHS */}
      <section className="border-t border-border py-20 md:py-28 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
              By buyer
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              See how the engagements apply to your context.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {buyers.map((b) => (
              <Link
                key={b.href}
                to={b.href}
                className="group bg-background border border-border p-6 md:p-8 flex flex-col hover:border-accent transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded w-fit mb-5">
                  {b.tag}
                </span>
                <h3 className="font-display text-2xl mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {b.body}
                </p>
                <span className="mt-auto text-sm border-b border-foreground/30 pb-1 w-fit group-hover:border-accent group-hover:text-accent transition-colors">
                  {b.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Not sure which path fits?
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
            Start the conversation →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Offerings;