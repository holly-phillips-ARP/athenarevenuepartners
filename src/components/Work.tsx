import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "Maison Vert", tag: "Identity · Web", year: "2026", hue: "120 25% 75%" },
  { name: "Halcyon Coffee", tag: "Brand · Packaging", year: "2025", hue: "30 45% 70%" },
  { name: "Praxis Studio", tag: "Digital Product", year: "2025", hue: "20 50% 65%" },
  { name: "Ostara Wellness", tag: "Identity · Art Direction", year: "2024", hue: "200 30% 72%" },
];

export const Work = () => {
  return (
    <section id="work" className="py-32 md:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Selected work
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl text-balance">
              A quiet portfolio of <em className="italic">loud</em> results.
            </h2>
          </div>
          <a
            href="#"
            className="text-sm flex items-center gap-2 hover:text-accent transition-colors"
          >
            View archive <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.a
              href="#"
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              className="group block"
            >
              <div
                className="aspect-[4/5] md:aspect-[5/4] rounded-sm overflow-hidden relative"
                style={{
                  background: `linear-gradient(135deg, hsl(${p.hue} / 0.6), hsl(${p.hue} / 0.95))`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl md:text-7xl text-foreground/15 group-hover:text-foreground/30 transition-colors duration-700">
                    {p.name}
                  </span>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 -rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex justify-between items-baseline mt-5">
                <div>
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
                </div>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {p.year}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
