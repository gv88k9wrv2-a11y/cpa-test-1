import { describe, expect, test } from "bun:test";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";
import { EXPANDED_FAQS } from "../src/data/expanded-faqs";
import { RELOCATION_FAQS } from "../src/data/relocation-residency";

describe("approved relocation legal rules", () => {
  const posts = [
    BLOG_POSTS.find(post => post.slug === "relocation-tax-residency-israel"),
    BLOG_POSTS_EN.find(post => post.slug === "relocation-tax-residency"),
  ];
  test("income-tax and National Insurance determinations use the approved separate-framework answer", () => {
    for (const [index, lang] of (["he", "en"] as const).entries()) {
      if (lang === "he") {
        expect(posts[index]?.faqs).toContain(RELOCATION_FAQS.he[0]);
      } else {
        expect(posts[index]?.faqs?.find(f => f.q === "Is National Insurance residency automatically terminated when income-tax residency ends?")?.a).toContain("separate determinations under different legal and administrative frameworks");
      }
      expect(EXPANDED_FAQS.international[lang]).toContain(RELOCATION_FAQS[lang][0]);
    }
  });
  test("exit tax and equity awards use the approved case-specific answer rather than a universal formula", () => {
    for (const [index, lang] of (["he", "en"] as const).entries()) {
      const exit = posts[index]?.sections.find(s => s.h.includes(lang === "he" ? "מס יציאה" : "Exit Tax"));
      const equity = posts[index]?.sections.find(s => s.table);
      expect(exit?.p.join(" ")).toContain(lang === "he" ? "סעיף 100א" : "Section 100A");
      if (lang === "he") {
        expect(equity?.afterTable).toEqual([RELOCATION_FAQS.he[1].a.split("\n\n")[2]]);
      } else {
        expect(equity?.afterTable?.join(" ")).toContain("No single linear allocation methodology should be assumed to apply universally");
      }
    }
  });
  test("advance planning remains a recommendation, not a statutory requirement", () => {
    expect(posts[0]?.faqs).toContain(RELOCATION_FAQS.he[2]);
    expect(posts[1]?.faqs).toContain(RELOCATION_FAQS.en[2]);
  });
  test("a professional residency opinion is not generally mandatory", () => {
    expect(posts[0]?.faqs).toContain(RELOCATION_FAQS.he[3]);
    expect(posts[1]?.faqs).toContain(RELOCATION_FAQS.en[3]);
  });
});