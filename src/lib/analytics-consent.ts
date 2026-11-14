import { canTrack, onConsentChange, readChoice } from "./consent";

export const GA4_MEASUREMENT_ID = "G-DVPW43Z6TN";
let initialized = false;
let enabled = false;

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

export async function analyticsAllowed() {
  // This site requires an explicit grant everywhere, not just in consent regions.
  return readChoice("analytics") === "granted" && await canTrack("analytics");
}

function clearAnalyticsCookies() {
  const host = location.hostname.split(".");
  const domains = ["", ...host.map((_, index) => host.slice(index).join("."))];
  const segments = location.pathname.split("/").filter(Boolean);
  const paths = ["/", ...segments.map((_, index) => "/" + segments.slice(0, index + 1).join("/"))];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name || !/^_ga(?:_|$)/.test(name)) continue;
    for (const domain of domains) for (const path of paths) {
      document.cookie = `${name}=; Max-Age=0; path=${path}${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

export function sendAnalyticsEvent(name: string, params: Record<string, string>) {
  if (!enabled || readChoice("analytics") !== "granted") return;
  const w = window as AnalyticsWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...params });
  w.gtag?.("event", name, params);
}

export function sendPageView() {
  sendAnalyticsEvent("page_view", {
    page_path: location.pathname + location.search,
    page_title: document.title,
    page_location: location.href,
  });
}

export function watchAnalyticsConsent() {
  let active = true;
  const sync = async () => {
    const allowed = await analyticsAllowed();
    if (!active) return;
    const w = window as AnalyticsWindow;
    const wasEnabled = enabled;
    enabled = allowed;
    // Enforce denied on cleared/expired answers even outside the regional defaults.
    w.gtag?.("consent", "update", {
      analytics_storage: allowed ? "granted" : "denied",
      ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    });
    (window as unknown as Record<string, unknown>)[`ga-disable-${GA4_MEASUREMENT_ID}`] = !allowed;
    if (!allowed) {
      clearAnalyticsCookies();
      return;
    }
    if (!initialized) {
      initialized = true;
      w.gtag?.("js", new Date());
      w.gtag?.("config", GA4_MEASUREMENT_ID, { send_page_view: false });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
    if (!wasEnabled) sendPageView();
  };
  const unsubscribe = onConsentChange(() => { void sync(); });
  void sync();
  return () => { active = false; unsubscribe(); };
}