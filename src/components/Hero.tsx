import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/50 backdrop-blur-sm text-xs text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Now booking — Summer 2026
        </motion.div>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-5xl"
        >
          Brands built with <em className="italic text-accent font-light">intention</em>,
          not noise.
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          A small, senior studio crafting identity systems and digital
          experiences for founders who care about the details.
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" className="rounded-full px-7 h-12 group">
            Start a project
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="rounded-full px-7 h-12 hover:bg-secondary"
          >
            View selected work
          </Button>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          {[
            ["12yrs", "Of practice"],
            ["80+", "Projects shipped"],
            ["6", "Industry awards"],
            ["100%", "Founder-led"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-3xl md:text-4xl">{k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
