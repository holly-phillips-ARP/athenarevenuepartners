import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import partnerKami from "@/assets/partner-1.png";

interface Partner {
  name: string;
  role: string;
  location: string;
  linkedin: string;
  image?: string;
  bio: string[];
  highlights: string[];
}

const partners: Partner[] = [
  {
    name: "Kami C.",
    role: "Co-Founder & Partner",
    location: "Greater Minneapolis–St. Paul",
    linkedin: "https://linkedin.com/in/kami-c-281b481/",
    image: partnerKami,
    bio: [
      "Kami is a sales leader who has spent her career building and scaling enterprise revenue organizations inside high-growth software companies.",
      "Most recently Vice President of Sales at Posit PBC, she has led enterprise sales teams through every stage of growth — from founder-led selling into repeatable, forecastable revenue motions.",
      "She is known across the industry for her ability to recruit, develop, and elevate sales talent, and for installing the operational discipline that turns ambitious targets into predictable outcomes.",
    ],
    highlights: [
      "VP of Sales, Posit PBC",
      "Enterprise sales leadership across SaaS and data platforms",
      "Builder of high-performing, accountable revenue teams",
      "Operator-first approach to forecasting and pipeline rigor",
    ],
  },
  {
    name: "Holly Marie Phillips",
    role: "Co-Founder & Partner",
    location: "Detroit Metropolitan Area",
    linkedin: "https://www.linkedin.com/in/holly-marie-phillips/",
    bio: [
      "Holly is a revenue executive whose career spans some of the most respected names in modern go-to-market — including LinkedIn, Pavilion, and Learn In — culminating in her current role as Chief Revenue Officer at Pragmatic Institute.",
      "She has spent two decades architecting revenue functions, leading sales and customer organizations, and coaching executives through scale.",
      "Her work blends commercial strategy, operational discipline, and a deep belief that revenue performance is a leadership problem before it is ever a tactics problem.",
    ],
    highlights: [
      "Chief Revenue Officer, Pragmatic Institute",
      "Prior leadership at LinkedIn, Pavilion, and Learn In",
      "Two decades architecting GTM and revenue organizations",
      "Executive coach to CEOs, founders, and revenue leaders",
    ],
  },
];

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>About Athena Revenue Partners | Revenue Leadership for SaaS Companies</title>
        <meta
          name="description"
          content="Athena Revenue Partners is led by Kami C. and Holly Marie Phillips — two operators who have built and scaled enterprise revenue organizations inside the world's leading SaaS companies."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/about" />
        <meta property="og:title" content="About Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Founded by operators who have led revenue at LinkedIn, Posit, Pavilion, and Pragmatic Institute."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/about" />
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
              About
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              Built by operators. <em className="italic text-muted-foreground">Not consultants.</em>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Athena Revenue Partners was founded by two revenue leaders who have spent their
              careers inside the companies they now advise — building forecastable revenue, hiring
              and coaching the teams behind it, and installing the operational discipline that
              turns growth into a system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-border">
        {partners.map((p, idx) => (
          <div
            key={p.name}
            className={`py-20 md:py-28 ${idx % 2 === 1 ? "bg-secondary/30 border-t border-border" : ""}`}
          >
            <div className="max-w-5xl mx-auto px-6 md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start"
              >
                {/* Portrait / placeholder */}
                <div className="relative">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted border border-border">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-6xl text-muted-foreground/40">
                          {p.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    {p.role} · {p.location}
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-6">
                    {p.name}
                  </h2>

                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                    {p.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="border-t border-border pt-6 mb-6">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                      Highlights
                    </p>
                    <ul className="space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-base">
                          <span className="mt-2.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm border-b border-foreground/30 hover:border-foreground pb-1 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-6">Our philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-10 text-balance max-w-4xl">
            Revenue is a leadership problem before it is a tactics problem.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-lg leading-relaxed opacity-90 max-w-4xl">
            <p>
              Most revenue problems aren't solved by a new playbook, a new tool, or a new hire.
              They're solved by clarity — clarity on the deals, the pipeline, the people, and the
              cadence that holds it all together.
            </p>
            <p>
              We work shoulder-to-shoulder with leadership teams to install that clarity. The
              result isn't a deck. It's a revenue function leaders can actually run.
            </p>
          </div>
          <div className="mt-12">
            <Button
              onClick={() => setOpen(true)}
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
            >
              Book a diagnostic
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default About;
