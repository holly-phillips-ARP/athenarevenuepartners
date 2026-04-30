const moments = [
  "Missed forecast or lack of visibility",
  "Founder still carrying key deals",
  "Inconsistent pipeline and conversion",
  "Scaling from early traction to repeatable growth",
  "M&A or structural change",
];

export const WhoWeWorkWith = () => {
  return (
    <section className="border-y border-border/60 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Who we work with
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
            Founders, CEOs, and CROs at <em className="italic">Series A–C</em> B2B tech companies.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Companies navigating growth, scaling, or ownership transitions—where
            revenue execution has become the bottleneck.
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Typical moments we're brought in
          </p>
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {moments.map((m, i) => (
              <li
                key={m}
                className="py-4 flex items-baseline gap-6 group hover:text-foreground transition-colors"
              >
                <span className="font-display text-sm text-muted-foreground tabular-nums w-8">
                  0{i + 1}
                </span>
                <span className="text-base md:text-lg">{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
