import logo from "@/assets/logo-concept-7.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap justify-between items-center gap-6 text-sm text-muted-foreground">
        <div>
          <img src={logo} alt="Athena Revenue Partners" className="h-24 md:h-28 w-auto -my-4" loading="lazy" width={1024} height={1024} />
          <p className="text-xs mt-2">From founder-led to team-led. Built by operators, not consultants.</p>
        </div>
        <a href="mailto:hello@athenarevenuepartners.com" className="underline underline-offset-4 break-all">hello@athenarevenuepartners.com</a>
        <div>© 2026 Athena Revenue Partners. All rights reserved.</div>
      </div>
    </footer>
  );
};
