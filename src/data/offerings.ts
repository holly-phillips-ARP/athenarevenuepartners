export const offerRules = {
  hire: { basePrice: 3500, plusPrice: 6500, approximateWeeks: 4, maxFinalists: 3, rampPlanDays: 90 },
  handoff: { price: 24000, days: 90, maxSellers: 2 },
  stepBack: { price: 36000, days: 90, maxSellers: 2, minMonthsInSeat: 3, maxMonthsInSeat: 9, assessmentWeeks: [1, 3], implementationWeeks: [4, 12] },
  advisory: { minMonthlyPrice: 5000, maxMonthlyPrice: 15000 },
} as const;

export const offerForSituation = (situation: "deciding-or-hiring" | "offer-signed" | "not-closing") =>
  ({ "deciding-or-hiring": "the-hire", "offer-signed": "the-handoff", "not-closing": "the-step-back" } as const)[situation];

export const offerings = [
  {
    slug: "the-hire", no: "01", name: "The Hire", category: "primary",
    situation: "Still deciding, or ready to hire your first seller.",
    summary: "Get the most important hire right. Figure out what makes you successful, whether you're ready, and who can sell the way your customers buy.",
    investment: "$3,500 Base / $6,500 Plus", duration: "About 4 weeks · 1:1",
    overview: "Before you write a job description, let's get clear on how you win. We'll work out whether you're ready to hire, what needs fixing first, and who your first seller needs to be. You'll leave with a written hiring plan you can run yourself.",
    tiers: [
      { name: "Base", price: offerRules.hire.basePrice, includes: ["How you win today, and what a seller will need to repeat it", "Whether you're ready to hire, or what to fix first", "Who to hire, when, and how", "A compensation range and a plan to tap your network", "A written hiring plan you can run on your own"] },
      { name: "Plus", price: offerRules.hire.plusPrice, includes: ["Everything in Base", "A hiring scorecard built around how you win", "An interview guide and custom role play", "A written 90-day ramp plan", "Kami or Holly on final interviews for up to 3 finalists"] },
    ],
    includes: ["Hiring readiness and written hiring plan", "Plus: scorecard, interview guide, role play, 90-day ramp plan and final interviews for up to 3 finalists"],
    exclusions: ["Candidate sourcing", "Recruiting fees"],
    output: "A written hiring plan, with the option to build the interview and ramp tools together.",
    process: [{ phase: "About 4 weeks", detail: "1:1 work on your selling motion, readiness and hiring plan. Plus adds interview and ramp tools and support with finalists." }],
  },
  {
    slug: "the-handoff", no: "02", name: "The Handoff", category: "primary",
    situation: "Offer signed. Your first seller is starting soon.",
    summary: "Turn how you win into a playbook your seller can use. We're with you from the signed offer through their first 90 days, so the handoff doesn't land back on your calendar.",
    investment: "$24K", price: offerRules.handoff.price, duration: "Signed offer through the first 90 days", maxSellers: offerRules.handoff.maxSellers,
    overview: "You signed the offer. Now the work is helping someone else sell what you've been selling. We capture your playbook before the seller starts, then work alongside you and the seller through the first 90 days.",
    includes: ["Write the playbook of how you win before the seller starts", "Run the 90-day ramp plan from day one", "Hold weekly deal reviews and coach the seller", "Step you back deal by deal", "Covers up to two sellers"],
    output: "We work toward a seller closing on a real process and on track, with you stepping back from more deals.",
    process: [{ phase: "Before the seller starts", detail: "Write down how you win and prepare the ramp plan." }, { phase: "First 90 days", detail: "Run the ramp, review deals weekly, coach the seller and step you back deal by deal." }],
  },
  {
    slug: "the-step-back", no: "03", name: "The Step Back", category: "primary",
    situation: "A seller in seat 3–9 months, but not closing on their own.",
    summary: "Find out what's in the way, then fix it together. We work with you and your seller on the process, coaching and real deals that make stepping back possible.",
    investment: "$36K", price: offerRules.stepBack.price, duration: "90 days · Up to two sellers", maxSellers: offerRules.stepBack.maxSellers,
    overview: "You hired your first seller so you could step back. Let's get you there. We'll answer the question you've been carrying: is it the rep, the system, or both? Then we'll work on what's in the way, together.",
    includes: ["Sit in on calls and review the pipeline", "Talk with you and your seller separately", "A clear answer and written plan after weeks 1–3", "Turn how you win into a playbook with stages and qualification", "Reset the seller's ramp on that playbook", "Weekly deal reviews and seller coaching", "Step you back deal by deal, working toward you running the review yourself", "Covers up to two sellers"],
    output: "A clear answer, a written plan, and hands-on work toward a seller closing on a real process and a founder able to step back.",
    process: [{ phase: "Weeks 1–3", detail: "Listen to calls, review the pipeline and talk with founder and seller separately. Answer whether the rep, system or both need support. Leave you with a clear answer and written plan." }, { phase: "Weeks 4–12", detail: "Build the playbook, stages and qualification. Reset the ramp, coach the seller and run weekly deal reviews. Step you back deal by deal until you can run the review yourself." }],
  },
] as const;

export const secondaryOfferings = [
  { slug: "revenue-advisory", name: "Revenue Advisory", category: "secondary", investment: "$5K–$15K per month, depending on scope", summary: "Ongoing forecast reviews, leadership coaching, and an independent read for the board. A natural next step after The Step Back." },
  { slug: "revenue-bridge", name: "Revenue Bridge", category: "secondary", investment: "Scoped per engagement", summary: "Install the revenue operating system before or alongside a new sales leader or CEO." },
  { slug: "fractional-revenue-leadership", name: "Fractional revenue leadership", category: "secondary", investment: "Scoped to the hours needed", summary: "Revenue leadership support, scoped to the hours your company needs." },
] as const;

export const getOfferingBySlug = (slug?: string) => [...offerings, ...secondaryOfferings].find((offer) => offer.slug === slug);