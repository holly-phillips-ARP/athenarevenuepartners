import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const scenarios = [
  {
    title: "Founder-Dependent Revenue",
    body:
      "The founder still owns the biggest opportunities, the most important customer relationships, and the final decision on nearly every deal. The company grows as fast as the founder's calendar allows.",
  },
  {
    title: "No Forecast Methodology",
    body:
      "Revenue projections are based on experience and intuition—not a repeatable process leadership can inspect, improve, or defend.",
  },
  {
    title: "Premature Hiring",
    body:
      "Salespeople were added before the operating system existed. Performance becomes inconsistent because every rep is inventing their own approach.",
  },
  {
    title: "No Leadership Operating Cadence",
    body:
      "Pipeline reviews become status updates. Forecast reviews become debates. Leadership spends more time reacting than operating.",
  },
];

const fromTo = [
  {
    before: "You're in most deals. The big ones, you're in all of them.",
    after: "Your team closes without you. You step in by choice, not necessity.",
  },
  {
    before: "Forecast is a gut-feel number you negotiate with your board.",
    after: "Forecast is a methodology. The number comes from the system, not your instinct.",
  },
  {
    before: "Pipeline reviews feel like status updates. Nothing changes.",
    after: "Pipeline reviews surface problems early and drive decisions. The team owns the conversation.",
  },
  {
    before: "New reps take 9–12 months to ramp. Some never do.",
    after: "Reps ramp into a defined process. Onboarding is consistent. Performance is diagnosable.",
  },
  {
    before: "You're not sure what's working. Wins feel lucky; losses feel random.",
    after: "You know exactly why you win and why you lose. Both are useful.",
  },
];

const deliverables = [
  {
    no: "01",
    title: "Forecast Methodology",
    body:
      "A repeatable forecasting process your leadership team can build, inspect, and confidently defend.",
  },
  {
    no: "02",
    title: "Revenue Qualification",
    body:
      "A consistent framework that separates real opportunities from optimistic ones.",
  },
  {
    no: "03",
    title: "Repeatable Sales Process",
    body:
      "A documented sales motion that allows every seller—not just the founder—to execute consistently.",
  },
  {
    no: "04",
    title: "Leadership Operating Cadence",
    body:
      "A management rhythm that creates accountability, surfaces problems early, and gives leadership confidence in the number.",
  },
];

const engagements = [
  {
    slug: "revenue-architecture-sprint",
    tag: "BUILDING THE FOUNDATION",
    name: "Revenue Architecture Sprint",
    desc:
      "For founder-led companies preparing for the next stage of growth.\n\nDesign the Revenue Operating System before investing in additional people, technology, or leadership.",
  },
  {
    slug: "revenue-diagnostic",
    tag: "PERFORMANCE PLATEAU",
    name: "Revenue Diagnostic",
    desc:
      "For companies missing growth targets or struggling to create predictable execution.\n\nIdentify the operational constraints limiting scale and prioritize the improvements with the greatest business impact.",
  },
  {
    slug: "revenue-system-build",
    tag: "CORE ENGAGEMENT",
    name: "Revenue System Build",
    desc:
      "For companies ready to operationalize growth.\n\nInstall the people, process, metrics, technology, and leadership cadence that create predictable revenue.",
    featured: true,
  },
  {
    slug: "revenue-advisory",
    tag: "ONGOING",
    name: "Revenue Advisory",
    desc:
      "For leadership teams committed to continuous improvement.\n\nQuarterly strategic oversight to pressure-test forecasts, coach leaders, and evolve the Revenue Operating System as the business grows.",
    advisory: true,
  },
];

const principles = [
  {
    label: "We install, we don't advise",
    body:
      "Every engagement ends with something working — not a strategy deck, not a set of recommendations. If you want someone to tell you what to do, we're not the right fit. If you want someone to build it with you, we are.",
  },
  {
    label: "We work with your team",
    body:
      "The system only holds if your team owns it. We work alongside them — not around them. The handoff is the point, not the afterthought.",
  },
  {
    label: "We're not a long-term embed",
    body:
      "We have a defined start, a defined end, and a clear benchmark. We're done when the system is running and your team can sustain it without us.",
  },
];

const Founders = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Founders | Athena Revenue Partners</title>
        <meta
          name="description"
          content="You built the revenue. Now let's make it run without you. We install repeatable revenue systems for post-PMF B2B founders."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/founders" />
        <meta property="og:title" content="For Founders | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="You built the revenue. Now let's make it run without you."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/who-we-work-with/founders" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Let's talk"
        description="Tell us where you are — we'll reply within one business day."
        source="Founders — Schedule a conversation"
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
              For Founders & CEOs · B2B Companies · Post-Product-Market Fit
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
              You built the revenue.{" "}
              <em className="italic text-accent font-light">
                Now let's make it run without you.
              </em>
            </h1>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                You've proven customers will buy your product.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Now it's time to build the Revenue Operating System that allows your company to grow without depending on you to close every deal, answer every question, or make every decision.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Whether you're hiring your first salesperson, preparing for your first revenue leader, or getting ready for your next stage of growth, Athena installs the Revenue Operating System that turns founder-led success into a scalable business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHEN TO BRING US IN */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            WHEN TO BRING US IN
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            From founder-led selling through scalable growth.
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {[
              {
                title: "Product-Market Fit",
                body: "The product works. The system doesn't exist yet.\n\nYou've proven customers will buy. Now it's time to design the Revenue Operating System before adding people, technology, and complexity.",
              },
              {
                title: "First Sales Team",
                body: "Hiring before building the system creates expensive chaos.\n\nBefore adding more salespeople, install the process, forecasting, and operating cadence they'll inherit.",
              },
              {
                title: "First Revenue Leader",
                body: "Before or during the search\n\nA VP of Sales or CRO stepping into infrastructure executes from Day One. We install the operating system so the hire compounds—not compensates.",
              },
              {
                title: "Preparing for the Next Stage",
                body: "Growth is starting to outpace the way you've always operated.\n\nThe founder is still the best salesperson.\n\nForecasts are still based on intuition.\n\nThe company is ready for a system.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background p-6 md:p-8">
                <h3 className="font-display text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOUND FAMILIAR */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            WHAT WE SEE MOST OFTEN
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Four predictable gaps between founder-led growth and a scalable business.
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {scenarios.map((s) => (
              <div key={s.title} className="bg-background p-6 md:p-8">
                <h3 className="font-display text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What changes
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            Before and after a revenue system is in place.
          </h2>

          <div className="border border-border">
            <div className="grid grid-cols-2 bg-secondary/40">
              <div className="px-5 py-3 text-xs uppercase tracking-widest text-muted-foreground border-r border-border">
                Before
              </div>
              <div className="px-5 py-3 text-xs uppercase tracking-widest text-accent">
                After
              </div>
            </div>
            {fromTo.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 border-t border-border ${
                  i % 2 === 1 ? "bg-secondary/20" : ""
                }`}
              >
                <div className="px-5 py-4 text-sm text-muted-foreground leading-relaxed border-r border-border">
                  {row.before}
                </div>
                <div className="px-5 py-4 text-sm font-medium leading-relaxed">
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE INSTALL */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            THE REVENUE OPERATING SYSTEM
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-8 max-w-4xl">
            Four pillars. Ninety days. A revenue operation that scales beyond the founder.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12">
            We don't advise. We install. Every engagement ends with a Revenue Operating System your
            leadership team owns—not a deck, not a strategy, not a list of recommendations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
            {deliverables.map((d) => (
              <div key={d.no} className="bg-background p-6">
                <div className="font-display text-xs text-accent mb-4 tracking-widest">
                  {d.no}
                </div>
                <h3 className="font-display text-lg mb-3 leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
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
            We're not your fractional VP of Sales.
            <br />
            We're not your long-term CRO.
            <br />
            We build the Revenue Operating System your company will own long after we're gone.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {engagements.map((e) => (
              <div
                key={e.name}
                className={`bg-background p-6 md:p-8 flex flex-col ${
                  e.featured ? "border-2 border-accent" : ""
                } ${e.advisory ? "bg-secondary/40" : ""}`}
              >
                <span className="inline-block self-start text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded mb-4">
                  {e.tag}
                </span>
                <h3 className="font-display text-xl mb-3">{e.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{e.desc}</p>
                <div className="mt-6 pt-2">
                  <Link
                    to={`/who-we-work-with/founders/${e.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
            <div className="bg-accent/10 p-6 md:p-8 md:col-span-2 border border-accent/20 flex flex-col">
              <span className="inline-block self-start text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded mb-4">
                LEADERSHIP TRANSITION
              </span>
              <h3 className="font-display text-xl mb-3">Revenue Bridge</h3>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                A leadership transition doesn't require a different methodology—it requires a different starting point.

                Whether you're hiring your first VP of Sales, your first CRO, or replacing an executive, we install the operating system before or alongside the transition so new leaders spend their first months executing—not diagnosing.
              </p>
              <div className="mt-6 pt-2">
                <Link
                  to="/who-we-work-with/founders/revenue-bridge"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            A few things worth knowing
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-12 max-w-4xl">
            We're direct about what we are and what we're not.
          </h2>

          <div className="border-t border-border">
            {principles.map((p) => (
              <div
                key={p.label}
                className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-10 py-6 border-b border-border items-start"
              >
                <div className="font-display text-lg">{p.label}</div>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            If any of this sounds familiar, let's talk.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            We keep the first conversation simple — tell us where you are, we'll tell you
            honestly whether we're a fit. No pitch, no deck.
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

export default Founders;
