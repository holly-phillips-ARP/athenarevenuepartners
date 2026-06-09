import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import logo from "@/assets/logo-concept-7.png";

const links = [
  { label: "Investors", href: "/who-we-work-with/investors" },
  { label: "Founders", href: "/who-we-work-with/founders" },
  { label: "About", href: "/about" },
  { label: "Proof", href: "/#proof" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40 pb-2"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        <a href="/" aria-label="Athena Revenue Partners" className="flex items-center -mt-1 -mb-6">
          <img src={logo} alt="Athena Revenue Partners" className="h-32 md:h-40 w-auto" width={1024} height={1024} />
        </a>
        <ul className="hidden md:flex items-center gap-10 text-sm">
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
        <Button onClick={() => setOpen(true)} variant="default" size="sm" className="rounded-full px-5">
          Book a diagnostic
        </Button>
      </nav>
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </motion.header>
  );
};
