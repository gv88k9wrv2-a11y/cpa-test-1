import { describe, expect, test } from "bun:test";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";
import { enHrefForHeSlug, heHrefForEnSlug } from "../src/data/blog-pairs";
import { TAX_TOPICS } from "../src/data/internal-links";

describe("approved relocation article pairing", () => {
  test("both articles use the approved publication date", () => {
    expect(BLOG_POSTS.find((post) => post.slug === "relocation-tax-residency-israel")?.date).toBe("2026-10-27");
    expect(BLOG_POSTS_EN.find((post) => post.slug === "relocation-tax-residency")?.date).toBe("2026-10-27");
  });

  test("language switching targets the approved counterpart in both directions", () => {
    expect(enHrefForHeSlug("relocation-tax-residency-israel")).toBe("/en/blog/relocation-tax-residency");
    expect(heHrefForEnSlug("relocation-tax-residency")).toBe("/blog/relocation-tax-residency-israel");
  });
});

describe("international tax topics reference the relocation guide", () => {
  test("the Hebrew international-tax topic links to the Hebrew guide", () => {
    const topic = TAX_TOPICS.he.find((t) => t.id === "international-tax");
    expect(topic?.link?.to).toBe("/blog/$slug");
    expect(topic?.link?.params).toEqual({ slug: "relocation-tax-residency-israel" });
  });

  test("the English international-tax topic links to the English guide", () => {
    const topic = TAX_TOPICS.en.find((t) => t.id === "international-tax");
    expect(topic?.link?.to).toBe("/en/blog/$slug");
    expect(topic?.link?.params).toEqual({ slug: "relocation-tax-residency" });
  });
});