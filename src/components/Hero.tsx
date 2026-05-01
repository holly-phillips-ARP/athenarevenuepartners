import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import heroImage from "@/assets/hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/75 to-background" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm text-xs text-muted-foreground mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          For startup B2B tech leaders
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-balance max-w-5xl"
        >
          Build a predictable revenue engine—
          <em className="italic text-accent font-light">without</em> relying on
          founder-led sales.
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          We help startup tech companies achieve forecast accuracy within
          10% in six months by replacing intuition with systems, discipline,
          and repeatable execution.
        </motion.p>

        <motion.div
          {...fadeUp(0.24)}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full px-7 h-12 group">
            <a href="#engage">
              Book a diagnostic
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-7 h-12 hover:bg-secondary"
          >
            <a href="#engage">Talk to us</a>
          </Button>
        </motion.div>

        <motion.div
          {...fadeUp(0.32)}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
        >
          {[
            ["±10%", "Forecast accuracy target"],
            ["6 mo", "Typical time to impact"],
            ["30+ yrs", "Combined revenue leadership"],
            ["Startup", "Company focus"],
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
