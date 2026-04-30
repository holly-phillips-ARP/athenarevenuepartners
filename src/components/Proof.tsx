import { motion } from "framer-motion";
import partner1 from "@/assets/partner-1.jpeg";
import partner2 from "@/assets/partner-2.png";

const partners = [
  { name: "Kami", title: "Co-Founder", image: partner1 },
  { name: "Co-Founder", title: "Co-Founder", image: partner2 },
];

const pillars = [
  { title: "Clarity", body: "What's actually happening in your revenue engine—surfaced and named." },
  { title: "Discipline", body: "Consistent inspection and execution at every level of leadership." },
  { title: "Repeatability", body: "Scalable processes, not heroics. Systems that outlast individuals." },
];

const proofPoints = [
  "Former CRO, VP Sales, and enterprise sales leaders",
  "Built and scaled teams in Series A–C SaaS companies",
  "Led through acquisitions and ownership transitions",
  "Rebuilt pipeline and forecasting after missed quarters",
  "Consistently delivered and exceeded revenue targets",
];

export const Proof = () => {
  return (
    <section id="proof" className="py-32 md:py-40 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Approach pillars */}
        <div className="mb-32">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Our approach
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance">
                We don't deliver slide decks—we build{" "}
                <em className="italic text-accent">systems that drive outcomes.</em>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <div className="font-display text-5xl text-accent mb-6">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Proof */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Proof
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-balance mb-6">
              <em className="italic">30+ years</em> of combined experience leading revenue organizations.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've seen this exact stage—and fixed it—multiple times.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-6 mb-10">
              {partners.map((p, i) => (
                <motion.figure
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                  className="space-y-4"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-secondary">
                    <img
                      src={p.image}
                      alt={`${p.name}, ${p.title} at Athena Revenue Partners`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>
                  <figcaption>
                    <div className="font-display text-xl leading-tight">{p.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.title}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {proofPoints.map((p, i) => (
                <li key={p} className="py-5 flex items-baseline gap-6">
                  <span className="font-display text-xs text-muted-foreground tabular-nums w-8">
                    0{i + 1}
                  </span>
                  <span className="text-base md:text-lg">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
