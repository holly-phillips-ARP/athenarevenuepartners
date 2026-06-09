import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const audiences = [
  {
    label: "Investors",
    href: "/who-we-work-with/investors",
    headline: "Protecting portfolio value starts with predictable revenue.",
    description:
      "Investor firms partnering with us on diligence, post-close execution, and ongoing portfolio support.",
  },
  {
    label: "Founders",
    href: "/who-we-work-with/founders",
    headline: "Founders and CEOs at startup B2B tech companies.",
    description:
      "Leaders navigating growth, scaling, or ownership transitions — where revenue execution has become the bottleneck.",
  },
];

export const WhoWeWorkWith = () => {
  return (
    <section className="border-y border-border/60 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who we work with
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              Two audiences. <em className="italic">One discipline.</em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-muted-foreground leading-relaxed">
              We work shoulder-to-shoulder with the investors protecting portfolio value and the
              founders building the companies inside it — installing the operational discipline
              that turns growth into a system.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {audiences.map((a) => (
            <Link
              key={a.href}
              to={a.href}
              className="group relative bg-background p-10 md:p-12 flex flex-col justify-between min-h-[320px] hover:bg-secondary/40 transition-colors"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  {a.label}
                </p>
                <h3 className="font-display text-2xl md:text-3xl leading-snug text-balance mb-6">
                  {a.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
              <div className="mt-10 inline-flex items-center gap-2 text-sm border-b border-foreground/30 group-hover:border-foreground pb-1 w-fit transition-colors">
                Explore how we work with {a.label.toLowerCase()}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
