import { PAGE_SUMMARIES } from "../data/page-summaries";

/** Factual "Key Takeaways" block for LLM / answer-engine quotability. */
export function PageSummary({ pathname, lang }: { pathname: string; lang: "he" | "en" }) {
  const text = PAGE_SUMMARIES[pathname.replace(/\/$/, "")];
  if (!text) return null;
  return <SummaryBox text={text} lang={lang} />;
}

export function SummaryBox({ text, lang }: { text: string; lang: "he" | "en" }) {
  const label = lang === "he" ? "בקצרה" : "Key Takeaways";
  return (
    <aside
      aria-label={label}
      data-summary="key-takeaways"
      className="rounded-lg border border-gold/40 bg-card p-5 shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-gold-text">{label}</p>
      <p className="mt-2 leading-relaxed text-foreground">{text}</p>
    </aside>
  );
}
