import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Accessibility, RotateCcw, X } from "lucide-react";

type Lang = "he" | "en";

type Prefs = {
  fontScale: number; // 0 = default, 1/2 = larger, -1 = smaller
  contrast: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
};

const DEFAULT_PREFS: Prefs = { fontScale: 0, contrast: false, readableFont: false, highlightLinks: false };
const STORAGE_KEY = "nimrodi-a11y-prefs";

const COPY = {
  he: {
    open: "פתח תפריט נגישות",
    close: "סגור תפריט נגישות",
    title: "נגישות",
    bigger: "הגדלת טקסט",
    smaller: "הקטנת טקסט",
    contrast: "ניגודיות גבוהה",
    readable: "גופן קריא",
    links: "הדגשת קישורים",
    reset: "איפוס הגדרות",
    statement: "הצהרת הנגישות המלאה",
  },
  en: {
    open: "Open accessibility menu",
    close: "Close accessibility menu",
    title: "Accessibility",
    bigger: "Increase text size",
    smaller: "Decrease text size",
    contrast: "High contrast",
    readable: "Readable font",
    links: "Highlight links",
    reset: "Reset all settings",
    statement: "Full accessibility statement",
  },
} as const;

function applyPrefs(p: Prefs) {
  const root = document.documentElement;
  root.style.fontSize = p.fontScale === 0 ? "" : `${100 + p.fontScale * 12.5}%`;
  root.classList.toggle("a11y-contrast", p.contrast);
  root.classList.toggle("a11y-readable-font", p.readableFont);
  root.classList.toggle("a11y-highlight-links", p.highlightLinks);
}

export function AccessibilityWidget({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT_PREFS, ...(JSON.parse(raw) as Partial<Prefs>) };
        setPrefs(parsed);
        applyPrefs(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = (next: Prefs) => {
    setPrefs(next);
    applyPrefs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const toggle = (key: "contrast" | "readableFont" | "highlightLinks") =>
    update({ ...prefs, [key]: !prefs[key] });

  const btn =
    "flex w-full items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent min-h-[44px]";
  const active = "border-gold bg-gold/10 text-primary";

  return (
    <div className="fixed bottom-20 left-4 z-40 sm:bottom-6" dir={lang === "he" ? "rtl" : "ltr"}>
      {open && (
        <div
          role="dialog"
          aria-label={t.title}
          className="mb-3 w-64 rounded-2xl border border-border bg-card p-4 shadow-xl"
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-primary">{t.title}</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.close}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => update({ ...prefs, fontScale: Math.min(2, prefs.fontScale + 1) })}
                className={btn}
                aria-label={t.bigger}
              >
                {t.bigger} <span aria-hidden>A+</span>
              </button>
              <button
                type="button"
                onClick={() => update({ ...prefs, fontScale: Math.max(-1, prefs.fontScale - 1) })}
                className={btn}
                aria-label={t.smaller}
              >
                {t.smaller} <span aria-hidden>A−</span>
              </button>
            </div>
            <button type="button" onClick={() => toggle("contrast")} aria-pressed={prefs.contrast} className={`${btn} ${prefs.contrast ? active : ""}`}>
              {t.contrast}
            </button>
            <button type="button" onClick={() => toggle("readableFont")} aria-pressed={prefs.readableFont} className={`${btn} ${prefs.readableFont ? active : ""}`}>
              {t.readable}
            </button>
            <button type="button" onClick={() => toggle("highlightLinks")} aria-pressed={prefs.highlightLinks} className={`${btn} ${prefs.highlightLinks ? active : ""}`}>
              {t.links}
            </button>
            <button type="button" onClick={() => update(DEFAULT_PREFS)} className={btn}>
              <RotateCcw className="h-4 w-4" aria-hidden /> {t.reset}
            </button>
            <Link
              to={lang === "he" ? "/accessibility" : "/en/accessibility"}
              className="block pt-1 text-center text-xs font-semibold text-gold-text underline underline-offset-4"
            >
              {t.statement}
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.close : t.open}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90"
      >
        <Accessibility className="h-6 w-6" aria-hidden />
      </button>
    </div>
  );
}
