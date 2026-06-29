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
  },
  {
    title: "Venture Capital Investors",
    href: "/who-we-work-with/investors/venture-capital",
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
              For investors · Operating Partners · Portfolio Leaders
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
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {audiences.map((a) => (
              <Link
                key={a.title}
                to={a.href}
                className="group bg-background p-8 md:p-10 flex flex-col justify-between min-h-[200px] hover:bg-secondary/40 transition-colors"
              >
                <h3 className="font-display text-xl md:text-2xl leading-snug">{a.title}</h3>
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
            If you have a portfolio company where revenue predictability is the constraint —
            or you're evaluating one — we're happy to have a candid conversation about whether
            we're a fit.
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

export default Investors;
