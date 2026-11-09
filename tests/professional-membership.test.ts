import { describe, expect, test } from "bun:test";
import { ICPAS_MEMBERSHIP_JSONLD, PERSON_JSONLD, CFO_PERSON_JSONLD, CPA_CREDENTIAL_JSONLD } from "../src/lib/meta";

describe("professional association membership", () => {
  test("membership identifies the official ICPAS organization", () => {
    expect(ICPAS_MEMBERSHIP_JSONLD.url).toBe("https://icpas.org.il");
    expect(ICPAS_MEMBERSHIP_JSONLD["@type"]).toBe("Organization");
  });
  test("founder and CFO profiles share the same membership", () => {
    expect(PERSON_JSONLD.memberOf).toEqual(ICPAS_MEMBERSHIP_JSONLD);
    expect(CFO_PERSON_JSONLD.memberOf).toEqual(ICPAS_MEMBERSHIP_JSONLD);
  });
  test("association membership does not replace government licensing", () => {
    expect(CPA_CREDENTIAL_JSONLD.recognizedBy.url).toBe("https://www.gov.il/he/departments/units/auditors_council");
  });
});