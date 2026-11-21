import { expect, test } from "bun:test";
import { BLOG_POSTS } from "../src/data/blog-posts";
import { BLOG_POSTS_EN } from "../src/data/blog-posts-en";
import { RELOCATION_REPORTING, RELOCATION_EXIT_TAX } from "../src/data/relocation-update";

const posts = [BLOG_POSTS.find(p => p.slug === "relocation-tax-residency-israel"), BLOG_POSTS_EN.find(p => p.slug === "relocation-tax-residency")];

test("publication stays October 27 while only the English review date advances to November 21", () => {
  for (const [index, p] of posts.entries()) {
    expect(p?.date).toBe("2026-10-27");
    expect(p?.modifiedDate).toBe(index === 0 ? "2026-11-20" : "2026-11-21");
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

test("the English Form 1348 position remains conditional and subject to authority review", () => {
  const reporting = posts[1]?.sections.find(s => s.h.includes("1348"))?.p.join(" ") ?? "";
  expect(reporting).toContain("Depending on the individual's Israeli filing obligations");
  expect(reporting).toContain("Filing Form 1348 does not constitute approval of non-resident status");
  expect(reporting).toContain("a different determination by the Israel Tax Authority");
});

test("the English exit-tax review does not promise automatic payment or deferral", () => {
  const exit = posts[1]?.sections.find(s => s.h.includes("Exit Tax"))?.p.join(" ") ?? "";
  expect(exit).toContain("Section 100A");
  expect(exit).toContain("not be described as automatically creating an immediate tax payment in every case");
  expect(exit).not.toMatch(/automatically deferred|automatic deferral|Section 100(?!A)/);
});

test("the English UK split-year treatment depends on statutory conditions rather than an optional election", () => {
  const uk = posts[1]?.sections.find(s => s.h.includes("United Kingdom"))?.p.join(" ") ?? "";
  expect(uk).toContain("Where the statutory conditions for one of the Split Year cases are satisfied");
  expect(uk).toContain("it is not simply an optional election");
});

test("the English US treaty does not automatically govern state taxation", () => {
  const us = posts[1]?.sections.find(s => s.h === "Relocation to the United States")?.p.join(" ") ?? "";
  expect(us).toContain("State tax residency and income-tax rules must be reviewed separately");
  expect(us).toContain("may not apply federal treaty relief in the same manner");
});