import { expect, test } from "bun:test";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";
import { RELOCATION_REPORTING, RELOCATION_EXIT_TAX } from "../src/data/relocation-update";

const posts = [BLOG_POSTS.find(p => p.slug === "relocation-tax-residency-israel"), BLOG_POSTS_EN.find(p => p.slug === "relocation-tax-residency")];

test("publication stays October 27 while this substantive update is November 20", () => {
  for (const p of posts) {
    expect(p?.date).toBe("2026-10-27");
    expect(p?.modifiedDate).toBe("2026-11-20");
  }
});

test("Form 1348 does not determine non-residency", () => {
  expect(RELOCATION_REPORTING.he.p[1]).toContain("אינה קובעת כשלעצמה תושבות חוץ");
  expect(RELOCATION_REPORTING.en.p[1]).toContain("does not itself establish non-residency");
});

test("exit-tax review does not imply immediate payment for every relocation", () => {
  expect(RELOCATION_EXIT_TAX.he.p[1]).toContain("אין להסיק שכל רילוקיישן יוצר תשלום מס מיידי");
  expect(RELOCATION_EXIT_TAX.en.p[1]).toContain("Not every relocation creates an immediate tax payment");
});

test("Form 1348 follows center of life and precedes exit tax in both guides", () => {
  for (const p of posts) {
    expect(p?.sections[1].h).toMatch(/מרכז החיים|Center of Life/);
    expect(p?.sections[2].h).toContain("1348");
    expect(p?.sections[3].h).toMatch(/100א|100A/);
  }
});