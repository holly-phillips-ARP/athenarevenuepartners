import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "Brand Identity",
    body: "Naming, visual systems, and verbal language. We build identities that stay sharp as you scale.",
    items: ["Strategy", "Logo & marks", "Type & color", "Guidelines"],
  },
  {
    no: "02",
    title: "Digital Product",
    body: "Marketing sites and product interfaces designed and built end-to-end with our engineering partners.",
    items: ["Web design", "Development", "CMS", "Analytics"],
  },
  {
    no: "03",
    title: "Art Direction",
    body: "Photography, motion, and campaign work that brings the brand to life across every touchpoint.",
    items: ["Campaigns", "Photography", "Motion", "Print"],
  },
];

export const Services = () => {
  return (
    <section id="approach" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              What we do
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Three disciplines.{" "}
              <span className="italic text-muted-foreground">One studio.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between mb-12">
                <span className="font-display text-sm text-muted-foreground">
                  {s.no}
                </span>
                <div className="h-px flex-1 mx-4 bg-border" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {s.body}
              </p>
              <ul className="space-y-2 text-sm">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
