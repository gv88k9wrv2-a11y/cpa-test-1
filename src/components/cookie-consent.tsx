import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { readChoice, saveChoices, onConsentChange } from "../lib/consent";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const OPEN_EVENT = "open-cookie-preferences";

export function CookiePreferencesLink({ lang }: { lang: "he" | "en" }) {
  return <Button variant="link" className="h-auto p-0 font-normal text-primary-foreground/80 hover:text-gold" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
    {lang === "he" ? "הגדרות עוגיות" : "Cookie Preferences"}
  </Button>;
}

export function CookieConsent({ lang }: { lang: "he" | "en" }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const he = lang === "he";

  useEffect(() => {
    const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    setGpc(privacySignal);
    setOpen(readChoice("analytics") === null);
    const show = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setAnalytics(readChoice("analytics") === "granted");
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, show);
    const unsubscribe = onConsentChange(() => {
      setAnalytics(readChoice("analytics") === "granted");
      setOpen(readChoice("analytics") === null);
    });
    return () => { window.removeEventListener(OPEN_EVENT, show); unsubscribe(); };
  }, []);

  useEffect(() => { if (open) panel.current?.focus({ preventScroll: true }); }, [open]);

  const save = (granted: boolean) => {
    saveChoices({ analytics: granted ? "granted" : "denied" });
    setOpen(false);
    setSettings(false);
    returnFocus.current?.focus({ preventScroll: true });
  };

  if (!open) return null;
  return <div ref={panel} tabIndex={-1} role="dialog" aria-modal="false" aria-labelledby="cookie-title" dir={he ? "rtl" : "ltr"}
    className="fixed inset-x-4 bottom-20 z-[90] mx-auto max-h-[calc(100dvh-160px)] max-w-xl overflow-y-auto rounded-lg border border-border bg-card p-5 text-card-foreground shadow-xl sm:p-6">
    <h2 id="cookie-title" className="font-display text-xl font-bold text-primary">{he ? "עוגיות ופרטיות" : "Cookies & Privacy"}</h2>
    <p className="mt-2 text-sm leading-relaxed">{he
      ? "אנו משתמשים בטכנולוגיות הכרחיות לצורך תפעול האתר. בכפוף לבחירתכם, נוכל להשתמש גם בעוגיות מדידה לצורך הבנת השימוש באתר ושיפורו."
      : "We use necessary technologies to operate the website. Subject to your choice, we may also use analytics cookies to understand website usage and improve our services."}</p>
    <Link to={he ? "/privacy-policy" : "/en/privacy-policy"} className="mt-2 inline-block text-sm text-gold-text underline">{he ? "מדיניות פרטיות" : "Privacy Policy"}</Link>
    {settings && <div className="mt-4 space-y-4 border-t border-border pt-4">
      <div className="flex items-center justify-between gap-3 text-sm"><span>{he ? "הכרחיות" : "Necessary"}</span><span className="text-muted-foreground">{he ? "פעילות תמיד" : "Always on"}</span></div>
      <div className="flex items-center justify-between gap-3"><label htmlFor="cookie-analytics" className="text-sm">{he ? "מדידה, באמצעות Google Analytics" : "Analytics, provided by Google Analytics"}</label><Switch id="cookie-analytics" checked={analytics && !gpc} disabled={gpc} onCheckedChange={setAnalytics} /></div>
      {gpc && <p className="text-sm text-muted-foreground">{he ? "אות הפרטיות של הדפדפן חל כאן; המדידה כבויה." : "Your browser’s privacy signal applies; analytics is off."}</p>}
      <Button variant="outline" className="w-full" onClick={() => save(analytics)}>{he ? "שמירת העדפות" : "Save Preferences"}</Button>
    </div>}
    <div className="mt-4 grid grid-cols-2 gap-3">
      <Button variant="outline" className="h-auto min-h-11 whitespace-normal px-3" disabled={gpc} onClick={() => save(true)}>{he ? "אישור מדידה" : "Allow Analytics"}</Button>
      <Button variant="outline" className="h-auto min-h-11 whitespace-normal px-3" onClick={() => save(false)}>{he ? "הכרחיות בלבד" : "Necessary Only"}</Button>
    </div>
    {!settings && <Button variant="link" className="mt-2 h-auto p-0 text-gold-text" onClick={() => { setAnalytics(readChoice("analytics") === "granted"); setSettings(true); }}>{he ? "הגדרות עוגיות" : "Cookie Preferences"}</Button>}
  </div>;
}