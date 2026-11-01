import { describe, expect, test } from "bun:test";
import { COMPANIES_GROUPS_HE, COMPANIES_GROUPS_EN, INDIVIDUALS_GROUPS_HE, INDIVIDUALS_GROUPS_EN } from "../src/data/nav-content";
import { CFO_PERSON_JSONLD, ORG_ID, PERSON_ID } from "../src/lib/meta";

describe("approved bilingual menu destinations", () => {
  const he = [...COMPANIES_GROUPS_HE, ...INDIVIDUALS_GROUPS_HE].flatMap(g => g.items);
  const en = [...COMPANIES_GROUPS_EN, ...INDIVIDUALS_GROUPS_EN].flatMap(g => g.items);
  const rules = [
    ["תוכניות הוניות וסעיף 102", "Equity Plans & Section 102", "/cpa-startups", "section-102"],
    ["בדיקות נאותות ו-M&A", "Due Diligence & M&A", "/fractional-cfo", "due-diligence"],
    ["עמותות ומלכ״רים", "Nonprofit Organizations", "/audit", "non-profits"],
    ["השקעות וניירות ערך", "Investments & Securities", "/tax-consulting", "investments-options-digital-assets"],
  ];
  for (const [heLabel, enLabel, to, hash] of rules) {
    test(`${heLabel} targets the approved topic in both languages`, () => {
      expect(he.find(i => i.label === heLabel)).toMatchObject({ to, hash });
      expect(en.find(i => i.label === enLabel)).toMatchObject({ to: `/en${to}`, hash });
    });
  }
});

test("CFO leadership uses the existing licensed founder and organization", () => {
  expect(CFO_PERSON_JSONLD["@id"]).toBe(PERSON_ID);
  expect(CFO_PERSON_JSONLD.worksFor["@id"]).toBe(ORG_ID);
  expect(CFO_PERSON_JSONLD.jobTitle).toBe("Managing Partner & Fractional CFO");
  expect(CFO_PERSON_JSONLD.knowsAbout).toEqual(["Fractional CFO", "Financial Modeling", "Startup Fundraising", "M&A Due Diligence", "Cash Flow Management", "Israeli Corporate Tax"]);
});