import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import { getOfferingBySlug, offerings } from "@/data/offerings";

const OfferingDetail = () => {
  const { slug } = useParams();
  const offering = getOfferingBySlug(slug);
  const [open, setOpen] = useState(false);

  if (!offering) return <Navigate to="/" replace />;

  const others = offerings.filter((o) => o.slug !== offering.slug);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <Link
            to="/#offerings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" /> All offerings
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="flex items-baseline gap-6 mb-6">
              <span className="font-display text-sm text-muted-foreground">{offering.no}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {offering.duration}
              </span>
            </div>
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
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
                  How it works
                </p>
                <div className="space-y-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
                  {offering.process.map((p) => (
                    <div key={p.phase} className="bg-background p-6 md:p-8 grid md:grid-cols-[160px_1fr] gap-4">
                      <p className="font-display text-base">{p.phase}</p>
                      <p className="text-muted-foreground leading-relaxed">{p.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                  What you walk away with
                </p>
                <ul className="space-y-3">
                  {offering.deliverables.map((d) => (
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
                  Includes
                </p>
                <ul className="space-y-2 text-sm">
                  {offering.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Outcome
                </p>
                <p className="text-sm italic font-display leading-relaxed">{offering.output}</p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  Investment
                </p>
                <p className="font-display text-2xl">{offering.investment}</p>
              </div>
              <Button onClick={() => setOpen(true)} className="w-full rounded-full">
                Book a diagnostic
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
                  to={`/offerings/${o.slug}`}
                  className="group p-8 border border-border rounded-sm hover:border-foreground/40 transition-colors flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="font-display text-sm text-muted-foreground mb-2">{o.no}</p>
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
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default OfferingDetail;
