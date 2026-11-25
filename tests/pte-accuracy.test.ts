import { expect, test } from "bun:test";
import { EXPANDED_FAQS } from "../src/data/expanded-faqs";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";

test("PTE eligibility does not use a standalone NIS 20 million threshold", () => {
  for (const locale of ["he", "en"] as const) {
    const answer = EXPANDED_FAQS.startups[locale][0]?.a;
    expect(answer).toBeDefined();
    expect(answer).not.toMatch(/20 מיליון|20 million/i);
  }
});

test("the PTE 7% R&D ratio uses relevant prior-year data rather than annual revenue alone", () => {
  const he = BLOG_POSTS.find(p => p.slug === "preferred-technological-enterprise")?.sections.flatMap(s => s.p).find(p => p.includes("**3. מבחן הפעילות"));
  const en = BLOG_POSTS_EN.find(p => p.slug === "preferred-technological-enterprise")?.sections.flatMap(s => s.p).find(p => p.includes("**3. Technological Activity Test"));
  expect(he).toMatch(/7%.*נתוני השנים הרלוונטיות/);
  expect(en).toMatch(/7%.*relevant prior-year data/);
});

test("the alternative exceeds NIS 75 million in each of the three preceding tax years", () => {
  const he = BLOG_POSTS.find(p => p.slug === "preferred-technological-enterprise")?.sections.flatMap(s => s.p).join(" ");
  const en = BLOG_POSTS_EN.find(p => p.slug === "preferred-technological-enterprise")?.sections.flatMap(s => s.p).join(" ");
  expect(he).toContain("העולות על 75 מיליון ש״ח בכל אחת משלוש השנים שקדמו לשנת המס");
  expect(en).toContain("exceeding NIS 75 million in each of the three years preceding the tax year");
});