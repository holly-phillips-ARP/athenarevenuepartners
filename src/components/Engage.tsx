import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";

const path = [
  { step: "01", name: "Diagnostic", note: "Where most clients begin" },
  { step: "02", name: "Forecast Accuracy Sprint", note: "Stabilize predictability" },
  { step: "03", name: "Revenue System Build", note: "Full transformation" },
  { step: "04", name: "Ongoing Advisory", note: "Sustained leverage" },
];

export const Engage = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="engage" className="py-32 md:py-40">
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              How we engage
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">
              Most clients start with a Revenue Diagnostic, then move into{" "}
              <em className="italic">optimization</em>.
            </h2>
          </div>
        </div>

        <div className="relative grid md:grid-cols-4 gap-px bg-border border border-border rounded-sm overflow-hidden mb-32">
          {path.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="bg-background p-8 relative"
            >
              <div className="font-display text-xs text-accent mb-6 tracking-widest">
                {p.step}
              </div>
              <h3 className="font-display text-xl mb-2">{p.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {p.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative rounded-md bg-primary text-primary-foreground p-10 md:p-20 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
            style={{ background: "hsl(var(--accent))" }}
          />
          <div className="relative grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-6">
                Let's begin
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                If your forecast isn't reliable,{" "}
                <em className="italic opacity-70">your growth isn't either.</em>
              </h2>
              <p className="mt-6 text-lg opacity-70 max-w-lg">
                Let's fix that.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right space-y-3">
              <Button
                size="lg"
                variant="secondary"
                className="w-full md:w-auto rounded-full px-7 h-12 group bg-background text-foreground hover:bg-background/90"
              >
                Start with a diagnostic
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <div>
                <a
                  href="mailto:hello@athenarevenue.com"
                  className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Or book a conversation <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
