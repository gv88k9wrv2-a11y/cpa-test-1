import { describe, expect, test } from "bun:test";
import { runInNewContext } from "node:vm";
import { CONSENT_DEFAULTS } from "../src/lib/consent-defaults";
import { analyticsAllowed } from "../src/lib/analytics-consent";
import { saveChoices } from "../src/lib/consent";

describe("GA4 explicit consent", () => {
  test("all four Consent Mode v2 signals default to denied before any tag", () => {
    const sandbox = { window: {} as Record<string, unknown>, navigator: {}, localStorage: { getItem: () => null }, dataLayer: [] as unknown[] };
    sandbox.window = sandbox;
    runInNewContext(CONSENT_DEFAULTS, sandbox);
    const first = Array.from(sandbox.dataLayer[0] as ArrayLike<unknown>);
    expect(first.slice(0, 2)).toEqual(["consent", "default"]);
    expect(first[2]).toEqual({ analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  });

  test("only analytics is restored from a saved grant, never advertising", () => {
    const sandbox = { window: {} as Record<string, unknown>, navigator: {}, localStorage: { getItem: () => JSON.stringify({ choice: "granted", at: Date.now() }) }, dataLayer: [] as unknown[] };
    sandbox.window = sandbox;
    runInNewContext(CONSENT_DEFAULTS, sandbox);
    const updates = sandbox.dataLayer.map(x => Array.from(x as ArrayLike<unknown>)).filter(x => x[1] === "update");
    expect(updates.map(x => x[2])).toEqual([{ analytics_storage: "granted" }]);
  });

  test("no choice and Necessary Only block analytics; Allow Analytics grants and a later refusal withdraws", async () => {
    const saved = new Map<string, string>();
    const originals = Object.fromEntries(["window", "localStorage"].map(k => [k, Object.getOwnPropertyDescriptor(globalThis, k)]));
    Object.defineProperty(globalThis, "window", { configurable: true, value: { gtag: () => {}, dispatchEvent: () => {} } });
    Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: (k: string) => saved.get(k) ?? null, setItem: (k: string, v: string) => saved.set(k, v) } });
    try {
      expect(await analyticsAllowed()).toBe(false);
      saveChoices({ analytics: "denied" });
      expect(await analyticsAllowed()).toBe(false);
      saveChoices({ analytics: "granted" });
      expect(await analyticsAllowed()).toBe(true);
      saveChoices({ analytics: "denied" });
      expect(await analyticsAllowed()).toBe(false);
    } finally {
      for (const [key, descriptor] of Object.entries(originals)) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else Reflect.deleteProperty(globalThis, key);
      }
    }
  });
});