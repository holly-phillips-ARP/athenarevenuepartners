import logo from "@/assets/logo-concept-7.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap justify-between items-center gap-6 text-sm text-muted-foreground">
        <div>
          <img src={logo} alt="Athena Revenue Partners" className="h-24 md:h-28 w-auto -my-4" loading="lazy" width={1024} height={1024} />
          <p className="text-xs mt-2">Predictable revenue, built to scale.</p>
        </div>
        <div className="flex gap-8">
          <a href="/about" className="hover:text-foreground transition-colors">About</a>
          <a href="/#approach" className="hover:text-foreground transition-colors">Approach</a>
          <a href="/#offerings" className="hover:text-foreground transition-colors">Offerings</a>
          <a href="/#engage" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div>© 2026 Athena Revenue Partners. All rights reserved.</div>
      </div>
    </footer>
  );
};
