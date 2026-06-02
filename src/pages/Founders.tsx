import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";

import { Offerings } from "@/components/Offerings";
import { Engage } from "@/components/Engage";


const Founders = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>For Founders | Athena Revenue Partners</title>
        <meta
          name="description"
          content="We get founders out of the sales process and install a repeatable revenue system that runs without them."
        />
        <link rel="canonical" href="https://athenarevenuepartners.com/who-we-work-with/founders" />
        <meta property="og:title" content="For Founders | Athena Revenue Partners" />
        <meta
          property="og:description"
          content="You built something that works. Now revenue has to work without you."
        />
        <meta property="og:url" content="https://athenarevenuepartners.com/who-we-work-with/founders" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              For Founders
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
              You built something that works.{" "}
              <em className="italic text-muted-foreground">
                Now revenue has to work without you.
              </em>
            </h1>
            <div className="space-y-6 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              <p>
                You closed the early deals yourself. That made sense — you knew the product, the
                pitch, and the customer better than anyone. But somewhere between then and now, that
                stopped being a feature and became a ceiling.
              </p>
              <p>
                Maybe you're still the one closing every deal and you can't figure out how to change
                that. Maybe your revenue numbers are real but they're not predictable — and that's
                making your next raise harder than it should be. Maybe you've hit a growth wall and
                you're not sure if the problem is the market, the team, the motion, or something
                else entirely.
              </p>
              <p>
                It's usually the system. Or the absence of one.
              </p>
              <p className="text-foreground font-medium">
                That's what we fix.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What we do
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              We get founders out of the sales process and install a repeatable revenue system
              that runs without them — one built on how mature companies actually scale, adapted
              for where you actually are.
            </p>
            <p className="text-muted-foreground">
              Not a playbook. Not a framework. A working system your team can execute, your
              investors can underwrite, and your business can grow on.
            </p>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <Offerings />


      {/* WHAT MAKES US DIFFERENT */}
      <section className="border-t border-border py-24 md:py-32 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              What makes us different
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              We've spent careers inside Fortune 50 companies, where revenue systems are mature,
              rigorous, and built to scale. We've also spent years inside high-growth startups,
              where we learned what from that world actually transfers — and what doesn't.
            </p>
            <p className="text-muted-foreground">
              Most consultants come from one side or the other. We've lived both. That's what
              makes the difference between a system that looks right on paper and one that
              actually works inside your business.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="border-t border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who we work with
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-balance">
              The right fit.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed">
            <p>
              We work with B2B founders at Series A through C who have product-market fit and
              real revenue — but whose growth is bottlenecked by a sales process that still
              depends on them.
            </p>
            <p className="text-muted-foreground">
              If you're pre-revenue or still finding your customer, we're probably not the right
              fit yet. If you've got traction and you're ready to build something that scales, we
              are.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-10 text-balance max-w-3xl">
            Ready to make revenue predictable?
          </h2>
          <Button
            onClick={() => setOpen(true)}
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            Book a diagnostic
          </Button>
        </div>
      </section>

      <Footer />
      <DiagnosticDialog open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Founders;
