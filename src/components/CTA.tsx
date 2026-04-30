import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative rounded-md bg-primary text-primary-foreground p-10 md:p-20 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "hsl(var(--accent))" }}
          />
          <div className="relative grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-6">
                Let's begin
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                Have a project in mind?{" "}
                <em className="italic opacity-70">We'd love to hear it.</em>
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-7 h-12 group bg-background text-foreground hover:bg-background/90"
              >
                hello@atelier.co
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
