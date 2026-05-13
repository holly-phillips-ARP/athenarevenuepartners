import { motion } from "framer-motion";

interface Phase {
  phase: string;
  detail: string;
}

interface Props {
  phases: Phase[];
  eyebrow?: string;
  heading?: string;
  variant?: "default" | "muted";
}

export const EngagementTimeline = ({
  phases,
  eyebrow = "How it works",
  heading = "Engagement timeline.",
  variant = "default",
}: Props) => {
  return (
    <section
      className={`py-24 md:py-32 border-t border-border ${
        variant === "muted" ? "bg-secondary/30" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-16 text-balance">
          {heading}
        </h2>

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[7px] md:left-[140px] top-2 bottom-2 w-px bg-border" />

          <ol className="space-y-10">
            {phases.map((p, i) => (
              <motion.li
                key={p.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 pl-8 md:pl-0"
              >
                {/* dot */}
                <span className="absolute left-0 md:left-[133px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />

                <div className="md:text-right md:pr-8">
                  <p className="font-display text-base">{p.phase}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                  {p.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
