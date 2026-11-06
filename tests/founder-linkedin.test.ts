import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { CFO_PERSON_JSONLD, PERSON_JSONLD } from "../src/lib/meta";

const LINKEDIN = "https://www.linkedin.com/in/shlomo-nimrodi-60734";
const OLD_LINKEDIN = "https://www.linkedin.com/in/nimrodi-co-cpa-israel-60734";

describe("founder LinkedIn address", () => {
  test("Person and CFO Person schemas publish the clean LinkedIn profile", () => {
    expect(PERSON_JSONLD.sameAs).toEqual([LINKEDIN]);
    expect(CFO_PERSON_JSONLD.sameAs).toEqual([LINKEDIN]);
  });

  test("AccountingService schema lists LinkedIn alongside the map", () => {
    const root = readFileSync("src/routes/__root.tsx", "utf8");
    const sameAs = root.slice(root.indexOf("sameAs: ["), root.indexOf("],", root.indexOf("sameAs: [")));
    expect(sameAs).toContain("https://maps.app.goo.gl/jxWz9287qp3QRVFg8");
    expect(sameAs).toContain(LINKEDIN);
  });

  test("visible social link points at the clean profile in both languages", () => {
    const social = readFileSync("src/components/social-proof.tsx", "utf8");
    expect(social).toContain(`href: "${LINKEDIN}"`);
    expect(social).not.toContain(OLD_LINKEDIN);
  });

  test("no file still carries the old LinkedIn address", () => {
    for (const file of ["src/lib/meta.ts", "src/routes/__root.tsx", "src/components/social-proof.tsx"]) {
      expect(readFileSync(file, "utf8")).not.toContain(OLD_LINKEDIN);
    }
  });
});
