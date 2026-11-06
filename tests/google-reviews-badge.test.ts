import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";

const HE_LABEL = "מעל 70 ביקורות ב-Google";
const EN_LABEL = "70+ Google Reviews";

describe("Google reviews badge", () => {
  test("badge label reads 'מעל 70 ביקורות ב-Google' in Hebrew and '70+ Google Reviews' in English", () => {
    const badge = readFileSync("src/components/social-proof.tsx", "utf8");
    expect(badge).toContain(HE_LABEL);
    expect(badge).toContain(EN_LABEL);
    expect(badge).not.toContain("72 ביקורות");
    expect(badge).not.toContain("72 Google Reviews");
  });

  test("Hebrew home hero shows the badge below the hero buttons", () => {
    const home = readFileSync("src/components/unified-home.tsx", "utf8");
    const buttonsEnd = home.indexOf("t.hero.buttons[2].label");
    const badge = home.indexOf("<GoogleReviewsBadge");
    expect(buttonsEnd).toBeGreaterThan(-1);
    expect(badge).toBeGreaterThan(buttonsEnd);
  });

  test("Hebrew service hero shows the badge below the call buttons", () => {
    const page = readFileSync("src/components/service-landing.tsx", "utf8");
    const phoneButton = page.indexOf('href="tel:099582211"');
    const badge = page.indexOf("<GoogleReviewsBadge");
    expect(phoneButton).toBeGreaterThan(-1);
    expect(badge).toBeGreaterThan(phoneButton);
  });

  test("English service hero shows the badge below the call buttons", () => {
    const page = readFileSync("src/components/service-landing-en.tsx", "utf8");
    const phoneButton = page.indexOf('href="tel:+97299582211"');
    const badge = page.indexOf("<GoogleReviewsBadge");
    expect(phoneButton).toBeGreaterThan(-1);
    expect(badge).toBeGreaterThan(phoneButton);
  });
});
