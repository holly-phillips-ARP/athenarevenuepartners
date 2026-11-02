import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-concept-7.png";

const links = [
  { label: "For Investors", href: "/who-we-work-with/investors" },
  { label: "Founders", href: "/who-we-work-with/founders" },
  { label: "Offers", href: "/offerings" },
  { label: "About", href: "/about" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40 pb-2"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        <a href="/" aria-label="Athena Revenue Partners" className="flex items-center -mt-1 -mb-6">
          <img src={logo} alt="Athena Revenue Partners" className="h-24 md:h-40 w-auto" width={1024} height={1024} />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2"><Button onClick={() => setMenuOpen(!menuOpen)} variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button><Button onClick={() => setOpen(true)} variant="default" size="sm" className="rounded-full px-3 md:px-5">
          Book a conversation
        </Button></div>
      </nav>
      {menuOpen && <ul className="md:hidden px-6 py-5 border-t border-border space-y-4 bg-background">{links.map(link => <li key={link.href}><a className="text-sm" href={link.href}>{link.label}</a></li>)}</ul>}
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </motion.header>
  );
};
