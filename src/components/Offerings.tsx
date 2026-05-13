import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { offerings } from "@/data/offerings";

const additional = [
  {
    name: "Executive Advisory",
    sub: "Retainer",
    body: "Ongoing strategic support for CEOs and CROs—deal and forecast reviews, leadership coaching, revenue strategy.",
    investment: "$10K – $20K / month",
  },
  {
    name: "Targeted Interventions",
    sub: "Short, high-impact",
    body: "Deal rescue, pipeline rebuild, or sales leadership alignment when you need fast traction.",
    investment: "$10K – $30K",
  },
  {
    name: "Agentic GTM Enablement",
    sub: "Embedded",
    body: "Embedding agentic GTM support into your workflows to accelerate execution and scale revenue operations.",
    investment: "$15K – $25K",
  },
];

export const Offerings = () => {
  return (
    <section id="offerings" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our offerings
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl text-balance">
              Three engagements. <em className="italic text-muted-foreground">One outcome.</em>
            </h2>
          </div>
          <a
            href="#engage"
            className="text-sm flex items-center gap-2 hover:text-accent transition-colors"
          >
            How we engage <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {offerings.map((o, i) => (
            <motion.div
              key={o.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className={`relative p-8 md:p-10 rounded-sm border flex flex-col ${
                o.featured
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border"
              }`}
            >
              {o.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 text-[10px] uppercase tracking-widest bg-accent text-accent-foreground rounded-full whitespace-pre-wrap">
                  RECOMMENDED
                </span>
              )}
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display text-sm opacity-60">{o.no}</span>
                <span className="text-xs uppercase tracking-widest opacity-60">
                  {o.duration}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">{o.name}</h3>
              <p className={`leading-relaxed mb-8 ${o.featured ? "opacity-80" : "text-muted-foreground"}`}>
                {o.summary}
              </p>

              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-3">
                  Includes
                </p>
                <ul className="space-y-2 text-sm">
                  {o.includes.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className={`mt-2 w-1 h-1 rounded-full flex-shrink-0 ${o.featured ? "bg-accent" : "bg-accent"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mb-8 pb-8 border-b ${o.featured ? "border-primary-foreground/20" : "border-border"}`}>
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-3">
                  Outcome
                </p>
                <p className="text-sm italic font-display">{o.output}</p>
              </div>

              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">
                  Investment
                </p>
                <p className="font-display text-xl mb-6">{o.investment}</p>
                <Link
                  to={`/offerings/${o.slug}`}
                  className={`inline-flex items-center gap-2 text-sm border-b pb-1 w-fit transition-colors ${
                    o.featured
                      ? "border-primary-foreground/40 hover:border-primary-foreground"
                      : "border-foreground/30 hover:border-foreground"
                  }`}
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Additional ways we support
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {additional.map((a) => (
              <div key={a.name} className="bg-background p-8 flex flex-col">
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-display text-xl">{a.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {a.sub}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {a.body}
                </p>
                <p className="text-sm font-display mt-auto">{a.investment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
