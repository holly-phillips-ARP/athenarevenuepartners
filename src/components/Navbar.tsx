import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-concept-7.png";

const links = [
  { label: "Approach", href: "#approach" },
  { label: "Offerings", href: "#offerings" },
  { label: "Proof", href: "#proof" },
  { label: "Engage", href: "#engage" },
];

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        <a href="#" aria-label="Athena Revenue Partners" className="flex items-center -my-8">
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
        <Button asChild variant="default" size="sm" className="rounded-full px-5">
          <a href="mailto:hello@athenarevenue.com?subject=Revenue%20Diagnostic%20Inquiry&body=Hi%20Athena%20team%2C%0A%0AI%27d%20like%20to%20book%20a%20Revenue%20Diagnostic.%0A%0AA%20bit%20about%20us%3A%0A-%20Company%3A%20%0A-%20Role%3A%20%0A-%20Current%20ARR%2Fstage%3A%20%0A-%20Top%20revenue%20challenge%3A%20%0A%0AThanks%2C">Book a diagnostic</a>
        </Button>
      </nav>
    </motion.header>
  );
};
