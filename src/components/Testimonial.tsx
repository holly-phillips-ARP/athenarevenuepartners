import { motion } from "framer-motion";

export const Testimonial = () => {
  return (
    <section id="studio" className="py-32 md:py-44">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
            A word from our clients
          </p>
          <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] text-balance">
            <span className="text-accent">"</span>
            They didn't just design a brand — they helped us understand who we
            were trying to become. The work feels{" "}
            <em className="italic">inevitable</em>, like it had always been
            there.
            <span className="text-accent">"</span>
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary" />
            <div className="text-left">
              <div className="text-sm font-medium">Elena Marchetti</div>
              <div className="text-xs text-muted-foreground">
                Founder, Maison Vert
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
