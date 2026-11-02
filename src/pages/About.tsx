import { useState } from "react";
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
      "Kami has spent 24 years in revenue roles, starting at 3M and UnitedHealth Group before moving into venture-backed tech companies.",
      "In prior roles, she helped take Degreed from $25M to $110M ARR. At Posit, she rebuilt the sales organization from scratch and scaled ARR from $72M to $130M. Those are results from her earlier operating roles, not Athena client engagements.",
      "Two of the three startups she's been part of reached unicorn status. She's also a Techstars mentor.",
      "Outside work, she's cheering on her two boys in hockey, football and soccer. She firmly believes a good margarita fixes most problems.",
    ],
    highlights: [
      "24 years in revenue roles",
      "Fortune 50 discipline and venture-backed startup experience",
      "Two of three startups reached unicorn status",
      "Techstars mentor",
    ],
  },
  {
    name: "Holly Phillips",
    role: "Co-Founder & Partner",
    location: "Detroit Metropolitan Area",
    linkedin: "https://www.linkedin.com/in/holly-marie-phillips/",
    image: partnerHolly,
    bio: [
      "Holly has spent 15+ years building and scaling go-to-market teams across SaaS, EdTech and Healthcare, from early stage through Series C+ and acquisitions.",
      "She's owned sales, customer success, enablement and revenue operations. She knows what it takes to help a seller use a process, and to help a founder hand over the deals she's used to leading.",
      "Outside work, she's keeping up with three kids in sports, reading a good book, enjoying a glass of wine, or planning the next trip.",
    ],
    highlights: [
      "15+ years building and scaling go-to-market teams",
      "Early stage through Series C+ and acquisitions",
      "Sales, customer success, enablement and revenue operations",
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
          content="Meet Kami Cekosh and Holly Phillips: 40+ years of combined revenue leadership, helping funded B2B tech founders move from founder-led to team-led sales."
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
              From founder-led to team-led. Built by operators, not consultants.
              We’re Kami Cekosh and Holly Phillips. We help funded B2B tech founders hire their first seller,
              get them selling on a real process, and start stepping back from every deal.
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
                    {p.role}
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

      <section className="py-20 md:py-28 border-t border-border bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6">How we got here</p>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] mb-8 text-balance max-w-4xl">We met doing the work.</h2>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>We met on the same enterprise SaaS team in 2018 and earned multiple Presidents Clubs. Between us, we bring 40+ years of revenue leadership: Fortune 50 discipline plus venture-backed startup experience.</p>
            <p>We've hired sellers, coached teams and carried the responsibility for revenue. Athena puts that experience alongside the founder who's ready for someone else to close.</p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-6">Our philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-10 text-balance max-w-4xl">
            Something is in the way. Let's find it together.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed opacity-90 max-w-4xl">
            <p>Most revenue problems aren't people problems. They're systems problems. Nobody is at fault. Founder-led selling is a stage, not a failure.</p>
            <p>We work with you and your seller on the actual calls and deals. We capture how you win, build a process the seller can use, and coach through the handoff. We work toward a seller closing on a real process and a founder who can step back.</p>
          </div>
          <div className="mt-12">
            <Button
              onClick={() => setOpen(true)}
              size="lg"
              variant="secondary"
              className="rounded-full px-8"
            >
              Book a conversation
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
