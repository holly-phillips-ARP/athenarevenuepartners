import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";

const ease = [0.22, 1, 0.36, 1] as const;

const audiences = [
  {
    title: "Private Equity Investors",
    href: "/who-we-work-with/investors/private-equity",
    description: "Increase enterprise value through revenue quality",
    items: ["Pre-close diligence", "First 100 days", "Leadership transition", "Exit readiness"],
  },
  {
    title: "Venture Capital Investors",
    href: "/who-we-work-with/investors/venture-capital",
    description: "Build the revenue engine that gets companies to the next stage",
    items: ["Founder transition", "First sales hires", "Revenue architecture sprint", "Revenue systems build"],
  },
];

const Investors = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Investors | Athena Revenue Partners</title>
        <meta
          name="description"
          content="Your portfolio company has product-market fit. What it doesn't have is a revenue system. We fix it in 90 days."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/investors" />
        <meta property="og:title" content="For Investors | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="Protecting portfolio value starts with predictable revenue."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/who-we-work-with/investors" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title="Let's talk about your portfolio"
        description="Tell us a bit about the company — we'll reply within one business day."
        source="Investors — Schedule a conversation"
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
              FOR INVESTORS · OPERATING PARTNERS · PORTFOLIO LEADERS
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
              Revenue problems rarely start with revenue.{" "}
              <em className="italic text-accent font-light">
                They start with the operating system behind it.
              </em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Whether you're evaluating a new investment or improving the performance of an
              existing one, the quality of a company's revenue operating system determines how
              confidently it can grow, forecast, hire and ultimately create enterprise value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            HOW WE PARTNER
          </p>
          <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
            Financial diligence tells you what happened. Revenue diligence tells you what happens next.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {audiences.map((a) => (
              <Link
                key={a.title}
                to={a.href}
                className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[200px] hover:bg-secondary/40 transition-colors"
              >
                <h3 className="font-display text-xl md:text-2xl leading-snug">{a.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{a.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 inline-flex items-center gap-2 text-sm border-b border-foreground/30 group-hover:border-foreground pb-1 w-fit transition-colors">
                  How we work with {a.title.toLowerCase().replace(" investors", "")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-balance mb-6 max-w-3xl mx-auto">
            Let's talk about your portfolio.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're evaluating an investment, accelerating a portfolio company, or preparing for a leadership transition or exit, determine whether the revenue operating system is the next constraint to solve.
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

export default Investors;
