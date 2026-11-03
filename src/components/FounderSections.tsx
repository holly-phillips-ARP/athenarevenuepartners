import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { offerings, secondaryOfferings } from "@/data/offerings";
import { Button } from "@/components/ui/button";
import { DiagnosticDialog } from "@/components/DiagnosticDialog";
import { useState } from "react";
import kami from "@/assets/partner-1.png";
import holly from "@/assets/partner-2.png";

export const sectionInner = "max-w-7xl mx-auto px-6 md:px-10";
export const sectionTitle = "font-display text-3xl md:text-5xl leading-[1.05] text-balance";

export function ConversationButton({ className = "", size = "lg" }: { className?: string; size?: "lg" | "sm" | "default" }) {
  const [open, setOpen] = useState(false);
  return <><Button size={size} onClick={() => setOpen(true)} className={`rounded-full ${className}`}>Book a conversation</Button><DiagnosticDialog open={open} onOpenChange={setOpen} /></>;
}

export function FounderProblem() {
  return <section className="border-t border-border py-20 md:py-28"><div className={sectionInner}>
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 mb-12"><div><p className="text-xs uppercase tracking-[0.2em] text-accent mb-5">Sound familiar</p><h2 className={sectionTitle}>The first seller was supposed to give you time back.</h2></div><p className="text-lg text-muted-foreground leading-relaxed">It's 11pm. You're answering email after another day on sales calls. Your seller is working hard. You're still on every deal. And you're wondering whether it's the rep, or whether something else is in the way.</p></div>
    <div className="grid md:grid-cols-3 gap-px bg-border border border-border">{["I'm still the best seller here.", "I'm on every single deal.", "I still spend most of my time on sales."].map(quote => <blockquote key={quote} className="bg-background p-8 md:p-10 font-display text-2xl leading-snug">“{quote}”</blockquote>)}</div>
    <p className="text-muted-foreground leading-relaxed max-w-3xl mt-8">Founder-led sales is a stage, not a failure. Most revenue problems aren't people problems. They're systems problems. Nobody is at fault. Something is just in the way.</p>
  </div></section>;
}

export function OfferPath() {
  return <section className="border-t border-border py-20 md:py-28 bg-secondary/40"><div className={sectionInner}>
    <p className="text-xs uppercase tracking-[0.2em] text-accent mb-5">From founder-led to team-led</p><h2 className={`${sectionTitle} mb-6`}>The Hire. The Handoff. The Step Back.</h2><p className="text-muted-foreground leading-relaxed max-w-2xl mb-12">Start where you are. These aren't three things you have to buy in order. Each meets you at a different point with your first seller.</p>
    <div className="grid lg:grid-cols-3 gap-px bg-border border border-border">{offerings.map(offer => <div key={offer.slug} className="bg-background p-8 md:p-10 flex flex-col"><p className="text-xs text-accent tracking-widest mb-6">{offer.no}</p><h3 className="font-display text-3xl mb-4">{offer.name}</h3><p className="font-medium mb-4">{offer.situation}</p><p className="text-muted-foreground leading-relaxed mb-6">{offer.summary}</p><p className="text-sm font-medium mt-auto">{offer.investment}</p><p className="text-sm text-muted-foreground mt-2 mb-8">{offer.duration}</p><Button asChild variant="link" className="p-0 justify-start h-auto self-start"><Link to={`/offerings#${offer.slug}`}>Explore {offer.name}<ArrowUpRight className="h-4 w-4 ml-2" /></Link></Button></div>)}</div>
  </div></section>;
}

export function OfferChooser() {
  return <section id="choose" className="border-t border-border py-20 md:py-28"><div className={sectionInner}><p className="text-xs uppercase tracking-[0.2em] text-accent mb-5">Your starting point</p><h2 className={`${sectionTitle} mb-12`}>Which one is for me?</h2><div className="border-t border-border">{offerings.map(offer => <div key={offer.slug} className="grid md:grid-cols-[1fr_auto] items-center gap-4 py-7 border-b border-border"><div className="flex items-start gap-5"><span className="shrink-0 w-10 h-10 rounded bg-secondary text-accent flex items-center justify-center text-sm">{offer.no}</span><p className="font-display text-xl md:text-2xl leading-snug">{offer.situation}</p></div><Button asChild variant="link" className="justify-start md:justify-end p-0 h-auto"><Link to={`/offerings#${offer.slug}`}>{offer.name}<ArrowUpRight className="h-4 w-4 ml-2" /></Link></Button></div>)}</div></div></section>;
}

export function BeyondFirstAE() {
  return <section id="beyond-your-first-seller" className="border-t border-border py-14 md:py-20 bg-secondary/30"><div className={sectionInner}><h2 className="font-display text-2xl md:text-3xl mb-5">Beyond your first seller</h2><p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">When the next need is ongoing leadership support or a leadership transition, we can keep working with you.</p><div className="divide-y divide-border border-t border-b border-border">{secondaryOfferings.map(offer => <div key={offer.slug} className="grid md:grid-cols-12 gap-3 md:gap-8 py-5"><div className="md:col-span-4"><h3 className="font-display text-lg">{offer.name}</h3><p className="text-xs text-muted-foreground mt-2">{offer.investment}</p></div><p className="md:col-span-8 text-sm text-muted-foreground leading-relaxed">{offer.summary}</p></div>)}</div></div></section>;
}

export function OperatorProof() {
  return <section className="border-t border-border py-20 md:py-28"><div className={sectionInner}><div className="grid md:grid-cols-12 gap-10 mb-12"><div className="md:col-span-5"><p className="text-xs uppercase tracking-[0.2em] text-accent mb-5">Kami Cekosh + Holly Phillips</p><h2 className={sectionTitle}>Built by operators,<br /><em className="text-accent font-light">not consultants.</em></h2></div><div className="md:col-span-6 md:col-start-7 space-y-5 text-lg text-muted-foreground leading-relaxed"><p><span className="text-foreground font-medium">40+ years of combined revenue leadership.</span> Fortune 50 discipline plus venture-backed startup experience. We've hired, coached and led the teams doing the selling.</p><p>We met on the same enterprise SaaS team in 2018 and earned multiple Presidents Clubs. Now we work with founders on the handoff we know firsthand.</p></div></div><div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">{[{ name: "Kami Cekosh", image: kami, bio: "24 years in revenue roles. Techstars mentor." }, { name: "Holly Phillips", image: holly, bio: "15+ years building and scaling go-to-market teams." }].map(partner => <Link key={partner.name} to="/about" className="group"><figure><div className="aspect-[4/5] overflow-hidden bg-secondary"><img src={partner.image} alt={`${partner.name}, co-founder of Athena Revenue Partners`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" /></div><figcaption className="mt-4"><h3 className="font-display text-xl">{partner.name}</h3><p className="text-sm text-muted-foreground mt-2">{partner.bio}</p></figcaption></figure></Link>)}</div></div></section>;
}

export function ConversationCTA({ title = "Tell us where your first seller stands.", body = "Still deciding who to hire? Signed the offer? Still on every deal? Let's talk about what's in the way and whether we can help." }: { title?: string; body?: string }) {
  return <section id="engage" className="border-t border-border py-20 md:py-28 bg-secondary/40"><div className={`${sectionInner} text-center`}><h2 className={`${sectionTitle} max-w-3xl mx-auto mb-6`}>{title}</h2><p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-9">{body}</p><ConversationButton className="px-8 h-12" /><p className="mt-6 text-sm text-muted-foreground"><a href="mailto:hello@athenarevenuepartners.com" className="underline underline-offset-4">hello@athenarevenuepartners.com</a></p></div></section>;
}