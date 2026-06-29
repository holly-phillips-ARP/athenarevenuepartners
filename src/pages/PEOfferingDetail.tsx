import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "@/components/ContactDialog";
import { getPEOfferingBySlug, peOfferings } from "@/data/peOfferings";

const ease = [0.22, 1, 0.36, 1] as const;

const PEOfferingDetail = () => {
  const { slug } = useParams();
  const offering = getPEOfferingBySlug(slug);
  const [contactOpen, setContactOpen] = useState(false);

  if (!offering) return <Navigate to="/who-we-work-with/investors/private-equity" replace />;

  const others = peOfferings.filter((o) => o.slug !== offering.slug);
  const url = `https://athenarevenuepartners.com/who-we-work-with/investors/private-equity/${offering.slug}`;

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{`${offering.name} | Athena Revenue Partners`}</title>
        <meta name="description" content={offering.summary} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${offering.name} | Athena Revenue Partners`} />
        <meta property="og:description" content={offering.summary} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <ContactDialog
        open={contactOpen}
        onOpenChange={setContactOpen}
        title={`Let's talk about ${offering.name}`}
        description="Tell us a bit about the company — we'll reply within one business day."
        source={`Private Equity — ${offering.name}`}
      />

      <article className="pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            to="/who-we-work-with/investors/private-equity"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Private Equity
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-block text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded mb-6">
              {offering.tag}
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              {offering.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {offering.overview}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16 mt-24">
            <div className="md:col-span-2 space-y-16">
              <section>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  Who it's for
                </p>
                <ul className="space-y-3">
                  {offering.whoFor.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-lg">
                      <span className="mt-3 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  What we do
                </p>
                <ul className="space-y-3">
                  {offering.whatWeDo.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-lg">
                      <span className="mt-3 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="md:sticky md:top-32 h-fit border border-border rounded-sm p-8 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Outcome
                </p>
                <p className="text-sm italic font-display leading-relaxed">{offering.outcome}</p>
              </div>
              <Button onClick={() => setContactOpen(true)} className="w-full rounded-full">
                Schedule a conversation →
              </Button>
            </aside>
          </div>

          <section className="mt-32 pt-16 border-t border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Other offerings
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={`/who-we-work-with/investors/private-equity/${o.slug}`}
                  className="group p-8 border border-border rounded-sm hover:border-foreground/40 transition-colors flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      {o.tag}
                    </p>
                    <h3 className="font-display text-2xl mb-2">{o.name}</h3>
                    <p className="text-sm text-muted-foreground">{o.summary}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default PEOfferingDetail;
