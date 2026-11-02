import { describe, expect, it } from "vitest";
import { getOfferingBySlug, offerRules, offerings, secondaryOfferings, offerForSituation } from "./offerings";

describe("approved first-AE offer rules", () => {
  it("prices Hire Base at $3,500", () => { expect(offerings[0].tiers[0].price).toBe(3500); });
  it("prices Hire Plus at $6,500", () => { expect(offerings[0].tiers[1].price).toBe(6500); });
  it("plans Hire around four weeks", () => { expect(offerRules.hire.approximateWeeks).toBe(4); });
  it("limits Plus final interviews to three finalists", () => { expect(offerRules.hire.maxFinalists).toBe(3); });
  it("provides a 90-day Hire ramp plan", () => { expect(offerRules.hire.rampPlanDays).toBe(90); });
  it("prices Handoff at $24K", () => { expect(offerings[1].price).toBe(24000); });
  it("covers the first 90 days in Handoff", () => { expect(offerRules.handoff.days).toBe(90); });
  it("limits Handoff to two AEs", () => { expect(offerings[1].maxAEs).toBe(2); });
  it("prices Step Back at $36K", () => { expect(offerings[2].price).toBe(36000); });
  it("runs Step Back for 90 days", () => { expect(offerRules.stepBack.days).toBe(90); });
  it("limits Step Back to two AEs", () => { expect(offerings[2].maxAEs).toBe(2); });
  it("starts Step Back eligibility at three months in seat", () => { expect(offerRules.stepBack.minMonthsInSeat).toBe(3); });
  it("ends Step Back entry range at nine months", () => { expect(offerRules.stepBack.maxMonthsInSeat).toBe(9); });
  it("assesses Step Back in weeks 1–3", () => { expect(offerRules.stepBack.assessmentWeeks).toEqual([1, 3]); });
  it("implements Step Back in weeks 4–12", () => { expect(offerRules.stepBack.implementationWeeks).toEqual([4, 12]); });
  it("starts monthly Advisory at $5K", () => { expect(offerRules.advisory.minMonthlyPrice).toBe(5000); });
  it("ends monthly Advisory range at $15K", () => { expect(offerRules.advisory.maxMonthlyPrice).toBe(15000); });
  it("keeps three primary offers", () => { expect(offerings.map(o => o.slug)).toEqual(["the-hire", "the-handoff", "the-step-back"]); });
  it("keeps leadership support secondary", () => { expect(secondaryOfferings.every(o => o.category === "secondary")).toBe(true); expect(secondaryOfferings).toHaveLength(3); });
  it("routes deciding or hiring to Hire", () => { expect(offerForSituation("deciding-or-hiring")).toBe("the-hire"); });
  it("routes a signed offer to Handoff", () => { expect(offerForSituation("offer-signed")).toBe("the-handoff"); });
  it("routes not closing to Step Back", () => { expect(offerForSituation("not-closing")).toBe("the-step-back"); });
  it.each(["revenue-diagnostic", "forecast-accuracy-sprint", "revenue-architecture-sprint", "revenue-system-build"])("does not offer retired %s", slug => { expect(getOfferingBySlug(slug)).toBeUndefined(); });
});