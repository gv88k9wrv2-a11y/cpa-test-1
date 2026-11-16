import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { RELOCATION_CONTENT } from "../data/relocation-residency";
import { WHATSAPP_URL } from "./site-chrome";
import { WHATSAPP_URL_EN } from "./site-chrome-en";

type Lang = "he" | "en";
type Topic = "relocation" | "company";

const COMPANY_CONTENT = {
  he: {
    ctaHeadline: "בוחנים התאגדות או שינוי במבנה הפעילות?",
    ctaText: "אפשר לפנות למשרד לשיחת היכרות דיסקרטית ובחינת הנתונים והצרכים, בכפוף לסודיות המקצועית החלה על רואה חשבון ולהיקף ההתקשרות. אין הבטחה לתוצא מסוים.",
    ctaButtonLabel: "לטופס הפנייה",
    whatsappMessage: "שלום רו״ח נמרודי, אני מעוניין/ת לבחון התאגדות או שינוי במבנה הפעילות.",
  },
  en: {
    ctaHeadline: "Considering incorporation or a change to your business structure?",
    ctaText: "Contact the firm for a discreet introductory discussion and a review of your circumstances, subject to applicable CPA professional confidentiality and the agreed scope. No particular outcome is guaranteed.",
    ctaButtonLabel: "Go to the inquiry form",
    whatsappMessage: "Hello, I would like to discuss incorporation or a change to my business structure.",
  },
} as const;

export const ARTICLE_CTA_PLACEMENTS = {
  he: {
    "relocation-tax-residency-israel": { afterSection: 2, topic: "relocation" },
    "self-employed-vs-company-israel": { afterSection: 3, topic: "company" },
  },
  en: {
    "relocation-tax-residency": { afterSection: 2, topic: "relocation" },
  },
} as const satisfies Record<Lang, Record<string, { afterSection: number; topic: Topic }>>;

export function FocusedConversionCta({
  lang,
  topic,
  className = "",
}: {
  lang: Lang;
  topic: Topic;
  className?: string;
}) {
  const content = topic === "relocation" ? RELOCATION_CONTENT[lang] : COMPANY_CONTENT[lang];
  const whatsappBase = lang === "he" ? WHATSAPP_URL.split("?")[0] : WHATSAPP_URL_EN.split("?")[0];
  const whatsappUrl = `${whatsappBase}?text=${encodeURIComponent(content.whatsappMessage)}`;

  return (
    <aside
      aria-label={lang === "he" ? "פנייה למשרד" : "Contact the firm"}
      className={`rounded-2xl border border-gold/30 bg-secondary/40 p-5 sm:p-6 ${className}`}
    >
      <h2 className="font-display text-xl font-bold text-primary">{content.ctaHeadline}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{content.ctaText}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition hover:brightness-95"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {lang === "he" ? "פנייה דיסקרטית בוואטסאפ" : "Discreet WhatsApp inquiry"}
        </a>
        <Link
          to={lang === "he" ? "/contact" : "/en/contact"}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          {lang === "he" && topic === "relocation" ? "לטופס הפנייה" : content.ctaButtonLabel}
        </Link>
      </div>
    </aside>
  );
}
