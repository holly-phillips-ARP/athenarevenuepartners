export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap justify-between items-center gap-6 text-sm text-muted-foreground">
        <div className="font-display text-base text-foreground">
          Atelier<span className="text-accent">.</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Are.na</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
        <div>© 2026 Atelier Studio. All rights reserved.</div>
      </div>
    </footer>
  );
};
