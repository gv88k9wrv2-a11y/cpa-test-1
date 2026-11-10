import { describe, expect, test } from "bun:test";
import { DESTINATION_CONTENT, DESTINATION_FAQS } from "../src/data/relocation-destinations";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";

describe("destination-specific relocation legal boundaries", () => {
  const en = JSON.stringify(DESTINATION_CONTENT.en);
  const he = JSON.stringify(DESTINATION_CONTENT.he);
  test("exit-tax references use Section 100A rather than Section 100", () => {
    expect(en.match(/Section 100\w*/g)).toEqual(["Section 100A"]);
    expect(he.match(/סעיף 100[^\s]*/g)).toEqual(["סעיף 100א"]);
  });
  test("US foreign reporting is conditional on requirements and exceptions", () => {
    expect(en).toContain("subject to the applicable thresholds, conditions and exceptions");
    expect(he).toContain("בכפוף לתנאי התחולה, לספים ולחריגים");
  });
  test("US state tax remains a separate analysis from federal treaty relief", () => {
    expect(en).toContain("State residency and income-tax rules must be reviewed separately");
    expect(he).toContain("יש לבחון בנפרד את דיני מדינת היעד");
  });
  test("Cyprus and Greece regimes are separate and incentives do not terminate Israeli residency", () => {
    expect(en).toContain("These are separate regimes with different eligibility conditions");
    expect(en).toContain("does not by itself establish termination of Israeli tax residency");
    expect(he).toContain("מדובר במסלולים נפרדים עם תנאי זכאות שונים");
    expect(en + he).not.toMatch(/Non-Dom|capital.gains exemption|פטור.*רווחי הון/i);
  });
  test("visit frequency is not an independent residency test", () => {
    expect(en).toContain("is not an independent residency test");
    expect(he).toContain("אינה מבחן עצמאי לקביעת תושבות");
  });
  test("remote work raises possible issues rather than automatic permanent establishment", () => {
    expect(en).toContain("may raise personal tax, payroll and social-security issues and, in some structures");
    expect(he).toContain("עשויים לעורר סוגיות");
  });
  test("social-security coverage is limited to certain jurisdictions and individual agreements", () => {
    expect(en).toContain("with certain European jurisdictions");
    expect(en).toContain("must be reviewed individually");
    expect(he).toContain("עם מדינות מסוימות באירופה");
  });
  test("equity analysis is case-specific with no universal allocation formula", () => {
    expect(DESTINATION_FAQS.en[0].a).toContain("require a case-specific review");
    expect(he).toContain("אין להניח כי מנגנון ליניארי אחיד חל בכל מקרה");
    expect(en).not.toMatch(/universal linear|pro rata|linear allocation/i);
  });
  test("existing bilingual guides include both shared destination FAQs", () => {
    const posts = [BLOG_POSTS.find(p => p.slug === "relocation-tax-residency-israel"), BLOG_POSTS_EN.find(p => p.slug === "relocation-tax-residency")];
    for (const [i, lang] of (["he", "en"] as const).entries()) {
      expect(posts[i]?.faqs?.slice(-2)).toEqual(DESTINATION_FAQS[lang]);
    }
  });
});