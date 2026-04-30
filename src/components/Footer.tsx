export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap justify-between items-center gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-base text-foreground">
            Athena Revenue Partners<span className="text-accent">.</span>
          </div>
          <p className="text-xs mt-1">Predictable revenue, built to scale.</p>
        </div>
        <div className="flex gap-8">
          <a href="#approach" className="hover:text-foreground transition-colors">Approach</a>
          <a href="#offerings" className="hover:text-foreground transition-colors">Offerings</a>
          <a href="#engage" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div>© 2026 Athena Revenue Partners. All rights reserved.</div>
      </div>
    </footer>
  );
};
