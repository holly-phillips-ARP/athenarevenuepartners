const logos = [
  "Northwind", "Lumen & Co", "Maison Vert", "Folio", "Aperture",
  "Kindred", "Halcyon", "Praxis", "Ostara",
];

export const Marquee = () => {
  return (
    <section className="border-y border-border/60 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by considered brands
        </p>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-16 pr-16">
          {logos.concat(logos).map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-muted-foreground/70 whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee gap-16 pr-16" aria-hidden>
          {logos.concat(logos).map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl text-muted-foreground/70 whitespace-nowrap"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
