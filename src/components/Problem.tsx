import { motion } from "framer-motion";

const symptoms = [
  "Pipeline is inconsistent",
  "Forecasts are unreliable",
  "Sales success depends on individual heroics",
  "Leadership lacks inspection and rigor",
];

export const Problem = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              The problem
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-balance">
              Most companies at this stage don't have a growth problem—they have
              a <em className="italic text-accent">revenue execution</em> problem.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ul className="space-y-5">
              {symptoms.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                  className="flex items-start gap-4 text-lg"
                >
                  <span className="mt-3 h-px w-6 bg-accent flex-shrink-0" />
                  {s}
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Result
              </p>
              <p className="font-display text-2xl md:text-3xl italic text-balance">
                Revenue is unpredictable, and growth stalls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
