import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { ConversationButton, FounderProblem, OfferPath, OfferChooser, BeyondFirstAE, OperatorProof, ConversationCTA, sectionInner } from "@/components/FounderSections";

export default function Index() {
  return <main className="min-h-screen bg-background">
    <PageMeta title="From founder-led to team-led" description="Hire your first AE right, or get the one you have closing. Athena works with funded B2B tech founders on the move from founder-led to team-led sales." path="/" />
    <Navbar />
    <section className="pt-40 pb-16 md:pt-48 md:pb-20"><div className={sectionInner}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Athena Revenue Partners · Funded B2B tech founders</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-balance max-w-5xl mb-8">Hire your first AE right.<br /><em className="italic text-accent font-light">Get the one you have closing.</em></h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">You've found product-market fit. We help you hire your first account executive, or find out what's in the way when the AE you have isn't closing. Then we fix it together, so you can start stepping back.</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm"><Link to="/offerings#the-hire" className="underline underline-offset-4">Hiring → The Hire</Link><Link to="/offerings#the-handoff" className="underline underline-offset-4">Offer signed → The Handoff</Link><Link to="/offerings#the-step-back" className="underline underline-offset-4">AE not closing → The Step Back</Link></div>
        <div className="mt-8"><ConversationButton className="px-7 h-12" /></div>
        <p className="mt-6 text-sm text-muted-foreground">From founder-led to team-led. Built by operators, not consultants.</p>
      </motion.div>
    </div></section>
    <FounderProblem /><OfferPath /><OfferChooser /><BeyondFirstAE /><OperatorProof />
    <section className="border-t border-border py-12"><div className={sectionInner}><p className="text-muted-foreground leading-relaxed max-w-3xl">A seed or Series A VC, accelerator, or portfolio support team? We help your founders with the same offers and pricing. <Link to="/who-we-work-with/investors" className="text-foreground underline underline-offset-4">How we work with referrals →</Link></p></div></section>
    <ConversationCTA /><Footer />
  </main>;
}
