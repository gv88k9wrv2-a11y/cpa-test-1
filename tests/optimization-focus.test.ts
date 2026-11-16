import { describe, expect, test } from "bun:test";
import { HERZLIYA_DESCRIPTION, HERZLIYA_TITLE } from "../src/routes/cpa-herzliya";
import { HERZLIYA_DESCRIPTION_EN, HERZLIYA_TITLE_EN } from "../src/routes/en.cpa-herzliya";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";
import { ARTICLE_CTA_PLACEMENTS } from "../src/components/focused-conversion-cta";

function articleText(slug: string, english = false) {
  const post = english
    ? BLOG_POSTS_EN.find((item) => item.slug === slug)
    : BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) throw new Error(`Missing article: ${slug}`);
  return post.sections.flatMap((section) => section.p).join("\n");
}

describe("approved local-search and conversion optimization", () => {
  test("Herzliya social descriptions stay within 150–160 characters and retain the official address", () => {
    expect(HERZLIYA_DESCRIPTION.length).toBeGreaterThanOrEqual(150);
    expect(HERZLIYA_DESCRIPTION.length).toBeLessThanOrEqual(160);
    expect(HERZLIYA_DESCRIPTION_EN.length).toBeGreaterThanOrEqual(150);
    expect(HERZLIYA_DESCRIPTION_EN.length).toBeLessThanOrEqual(160);
    expect(HERZLIYA_DESCRIPTION).toContain("גלגלי הפלדה 16");
    expect(HERZLIYA_DESCRIPTION_EN).toContain("16 Galgalei HaPlada");
  });

  test("Herzliya titles target both the city and Herzliya Pituach", () => {
    expect(HERZLIYA_TITLE).toContain("רואה חשבון בהרצליה פיתוח");
    expect(HERZLIYA_TITLE_EN).toContain("CPA in Herzliya & Herzliya Pituach");
  });

  test("relevant Hebrew articles link to the Hebrew Fractional CFO page", () => {
    for (const slug of ["self-employed-vs-company-israel", "startup-taxation-overview"]) {
      expect(articleText(slug)).toContain("](/fractional-cfo)");
    }
  });

  test("relevant English articles link to the English Fractional CFO page", () => {
    for (const slug of ["startup-accounting-tax-israel", "preferred-technological-enterprise"]) {
      expect(articleText(slug, true)).toContain("](/en/fractional-cfo)");
    }
  });

  test("in-body conversion prompts are limited to the approved anchor articles", () => {
    expect(Object.keys(ARTICLE_CTA_PLACEMENTS.he)).toEqual([
      "relocation-tax-residency-israel",
      "self-employed-vs-company-israel",
    ]);
    expect(Object.keys(ARTICLE_CTA_PLACEMENTS.en)).toEqual(["relocation-tax-residency"]);
  });
});
