import { motion } from "framer-motion";

const focus = [
  { title: "Forecast accuracy", body: "Methodology, inspection, and discipline that produce numbers leadership can trust." },
  { title: "Pipeline quality & coverage", body: "Qualification rigor and coverage models - not just more volume." },
  { title: "Sales process & inspection", body: "A repeatable process with the inspection layer to enforce it." },
  { title: "Leadership cadence", body: "An executive operating rhythm that drives consistent execution." },
];

const pov = [
  "Most forecast issues are not data problems—they're execution and leadership discipline problems.",
  "Pipeline gaps are often qualification issues, not volume issues.",
  "Founder-led sales can't be scaled.",
];

export const Approach = () => {
  return (
    <section id="approach" className="py-32 md:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              What we do
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              We replace founder-led, inconsistent sales with a{" "}
              <em className="italic">structured, predictable</em> revenue system.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden mb-24">
          {focus.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="bg-background p-8 md:p-10"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-display text-sm text-muted-foreground tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl">{f.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our point of view
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              Three convictions that shape every engagement.
            </h3>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            {pov.map((p, i) => (
              <div key={i} className="flex gap-6">
                <span className="font-display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed pt-1">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
