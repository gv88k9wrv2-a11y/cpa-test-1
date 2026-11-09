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
      expect(posts[index]?.faqs?.[0]).toBe(RELOCATION_FAQS[lang][0]);
      expect(EXPANDED_FAQS.international[lang]).toContain(RELOCATION_FAQS[lang][0]);
    }
  });
  test("exit tax and equity awards use the approved case-specific answer rather than a universal formula", () => {
    for (const [index, lang] of (["he", "en"] as const).entries()) {
      expect(posts[index]?.sections[2].p).toEqual(RELOCATION_FAQS[lang][1].a.split("\n\n"));
      expect(posts[index]?.sections[3].afterTable).toEqual([RELOCATION_FAQS[lang][1].a.split("\n\n")[2]]);
    }
  });
  test("advance planning remains a recommendation, not a statutory requirement", () => {
    expect(posts[0]?.faqs?.[2]).toBe(RELOCATION_FAQS.he[2]);
    expect(posts[1]?.faqs?.[2]).toBe(RELOCATION_FAQS.en[2]);
  });
  test("a professional residency opinion is not generally mandatory", () => {
    expect(posts[0]?.faqs?.[3]).toBe(RELOCATION_FAQS.he[3]);
    expect(posts[1]?.faqs?.[3]).toBe(RELOCATION_FAQS.en[3]);
  });
});