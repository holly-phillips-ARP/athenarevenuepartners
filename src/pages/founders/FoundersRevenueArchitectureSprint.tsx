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
    title: "Product-Market Fit Achieved",
    body: "Customers are buying consistently, but growth still depends on the founder.",
  },
  {
    title: "First Sales Hire",
    body: "Build the operating system before hiring the team that will run it.",
  },
  {
    title: "Preparing for a VP of Sales",
    body: "Define the infrastructure your future leader should inherit.",
  },
  {
    title: "Planning the Next Stage",
    body: "Create the operating system that supports predictable growth before complexity arrives.",
  },
];

const designCategories = [
  {
    title: "Revenue Strategy",
    items: [
      "ICP refinement",
      "Segmentation",
      "Go-to-market motion",
      "Growth priorities",
    ],
  },
  {
    title: "Revenue Organization",
    items: [
      "Role definition",
      "Hiring roadmap",
      "Organizational structure",
      "Leadership responsibilities",
    ],
  },
  {
    title: "Revenue Operations",
    items: [
      "Forecast methodology",
      "KPIs",
      "Technology roadmap",
      "Reporting expectations",
    ],
  },
  {
    title: "Executive Roadmap",
    items: [
      "90-Day priorities",
      "Growth risks",
      "Operating cadence",
      "Revenue blueprint",
    ],
  },
];

const methodology = [
  { phase: "Design", label: "Revenue Architecture Sprint", current: true },
  { phase: "Assess", label: "Revenue Diagnostic", current: false },
  { phase: "Build", label: "Revenue System Build", current: false },
  { phase: "Optimize", label: "Revenue Advisory", current: false },
];

const deliverables = [
  { title: "Revenue Operating Blueprint", body: "The full design of the system your team will install and run." },
  { title: "Growth Readiness Assessment", body: "An honest read on where the business is today and what scaling will require." },
  { title: "Forecast Framework", body: "A repeatable methodology leadership can build, inspect, and defend." },
  { title: "Revenue Priorities", body: "The handful of decisions that matter most before adding people or technology." },
  { title: "Hiring Roadmap", body: "The sequence of roles to build the team your next stage requires." },
  { title: "90-Day Implementation Plan", body: "A clear path from blueprint to execution." },
];

const timeline = [
  { week: "Week 1", items: ["Discovery", "Leadership interviews"] },
  { week: "Week 2", items: ["Assessment", "Architecture design"] },
  { week: "Week 3", items: ["Operating model", "Roadmap"] },
  { week: "Week 4", items: ["Executive presentation", "Implementation planning"] },
];

const outcomes = [
  "A Revenue Operating System designed for your next stage of growth",
  "Clear hiring priorities",
  "Leadership alignment",
  "A roadmap for implementation",
  "Confidence before scaling the team",
];

const nextSteps = [
  {
    title: "Revenue System Build",
    body: "Most founders continue here — turn the blueprint into a working revenue operating system your team owns.",
    to: "/who-we-work-with/founders/revenue-system-build",
  },
  {
    title: "Revenue Diagnostic",
    body: "If the sprint surfaces performance questions, pressure-test the current engine before building.",
    to: "/who-we-work-with/founders/revenue-diagnostic",
  },
  {
    title: "Revenue Advisory",
    body: "Ongoing quarterly oversight once the system is in place — coach leaders and evolve the operating model.",
    to: "/who-we-work-with/founders/revenue-advisory",
  },
];

const url =
  "https://athenarevenuepartners.com/who-we-work-with/founders/revenue-architecture-sprint";

const FoundersRevenueArchitectureSprint = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Revenue Architecture Sprint | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Design the Revenue Operating System founder-led companies need before hiring the team, adding technology, or bringing in a sales leader."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Revenue Architecture Sprint | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Design the Revenue Operating System founder-led companies need before hiring the team, adding technology, or bringing in a sales leader."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Start a Revenue Architecture Sprint"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Founders — Revenue Architecture Sprint"
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
                  Revenue Architecture Sprint
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
                Build the revenue operating system before you build the sales team.
              </h1>
              <div className="space-y-4 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                <p>
                  The Revenue Architecture Sprint helps founder-led companies design the revenue operating system they'll need for the next stage of growth.
                </p>
                <p>
                  Before hiring more people, adding more technology, or bringing in a sales leader, we define the structure that allows the business to scale beyond the founder.
                </p>
                <p>
                  Because scaling a company starts with designing the system—not adding headcount.
                </p>
              </div>
              <div className="mt-10 p-5 border border-border/60 bg-background/50">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Typical Engagement
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    2–4 weeks
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Executive working sessions
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Fixed-fee engagement
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    Designed for founder-led companies after Product-Market Fit
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
            Designed for four common moments in founder-led growth.
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

      {/* WHAT WE DESIGN */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What We Design
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {designCategories.map((category) => (
              <div
                key={category.title}
                className="bg-secondary/40 border border-border/60 p-8 flex flex-col gap-4"
              >
                <h3 className="font-display text-2xl md:text-3xl leading-tight">
                  {category.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm md:text-base text-muted-foreground"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
            Four weeks from discovery to implementation plan.
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((t, i) => (
              <div
                key={t.week}
                className="relative bg-secondary/40 border border-border/60 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10 text-accent font-display text-sm">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg">{t.week}</span>
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

      {/* WHAT'S NEXT */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What's Next?
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-4xl">
            The Design phase of the Athena Method.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Most founders continue with a Revenue System Build to implement the operating
            system designed in the sprint.
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {nextSteps.map((n) => (
              <Link
                key={n.title}
                to={n.to}
                className="bg-background p-6 flex flex-col hover:bg-secondary/40 transition-colors"
              >
                <h3 className="font-display text-lg mb-3">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {n.body}
                </p>
                <span className="text-sm text-accent">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Design the system before you scale the team.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            2–4 weeks to a Revenue Operating Blueprint your leadership team can build against.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            size="lg"
            className="rounded-full px-8 h-12"
          >
            Start a sprint →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FoundersRevenueArchitectureSprint;
