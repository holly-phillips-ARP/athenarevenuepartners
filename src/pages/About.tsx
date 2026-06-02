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
import partnerHolly from "@/assets/partner-2.png";

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
    name: "Kami Cekosh",
    role: "Co-Founder & Partner",
    location: "Greater Minneapolis–St. Paul",
    linkedin: "https://linkedin.com/in/kami-c-281b481/",
    image: partnerKami,
    bio: [
      "Kami is a revenue leader who has spent her career building and scaling revenue organizations inside both Fortune 50 and high-growth software companies.",
      "Most recently serving as Vice President of Sales at a high-growth data science company, she has led go-to-market teams through every stage of growth — from founder-led selling into repeatable, forecastable revenue motions.",
      "She is known across the industry for her ability to attract and retain top talent, installing the operational discipline that turns ambitious targets into predictable outcomes.",
      "Personally, she resides in the Greater Minneapolis-St. Paul Metro Area and when she is not working, loves to watch her two boys on the field or rink (football, soccer, hockey). Also, a wanna be chef and sourdough baker + huge dog lover.",
    ],
    highlights: [
      "Vice President of Sales at a high-growth data science company",
      "Revenue leadership across Fortune 50 and high-growth software",
      "Builder of high-performing, accountable revenue teams",
      "Operator-first approach to forecasting and pipeline rigor",
    ],
  },
  {
    name: "Holly Phillips",
    role: "Co-Founder & Partner",
    location: "Detroit Metropolitan Area",
    linkedin: "https://www.linkedin.com/in/holly-marie-phillips/",
    image: partnerHolly,
    bio: [
      "Holly is a revenue executive whose career spans some of the most respected names in modern go-to-market — culminating in her current role as Chief Revenue Officer at a leading product and GTM education company.",
      "She has spent two decades architecting revenue functions, leading sales and customer organizations, and coaching executives through scale.",
      "Her work blends commercial strategy, operational discipline, and a deep belief that revenue performance is a leadership problem before it is ever a tactics problem.",
    ],
    highlights: [
      "Chief Revenue Officer at a leading product and GTM education company",
      "Prior leadership across global SaaS, professional networks, and learning platforms",
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
        <title>About | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Founded by Kami Cekosh and Holly Phillips — operators who have built and scaled enterprise revenue organizations inside leading SaaS companies."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/about" />
        <meta property="og:title" content="About | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Meet the operators behind Athena Revenue Partners — Kami Cekosh and Holly Phillips."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/about" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": partners.map((p) => ({
            "@type": "Person",
            "name": p.name,
            "jobTitle": p.role,
            "worksFor": { "@type": "Organization", "name": "Athena Revenue Partners" },
            "sameAs": [p.linkedin],
          })),
        })}</script>
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
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
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

      {/* ABOUT THE NAME */}
      <section className="py-20 md:py-28 border-t border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Why Athena
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] mb-8 text-balance max-w-4xl">
              Wisdom over spectacle.
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                In ancient Greece, the gods competed to win patronage of a great city.
                Poseidon struck the earth and produced a powerful spring. Athena reached
                down and planted an olive tree.
              </p>
              <p>
                The citizens chose Athena — not because the spring wasn't impressive,
                but because the olive tree offered something more lasting: food, oil,
                timber, and trade. Wealth that compounded over generations.
              </p>
              <p>
                She didn't win with force or spectacle. She won with wisdom, simplicity,
                and strategy. That's the company we set out to build.
              </p>
            </div>
          </motion.div>
        </div>
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
