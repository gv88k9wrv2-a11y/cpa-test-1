import { Link } from "@tanstack/react-router";

const TOPICS = {
  he: [
    ["annual-tax-returns-individuals", "דוחות שנתיים והחזרי מס"],
    ["capital-declarations", "הצהרות הון"],
    ["real-estate-tax-israel", "מיסוי מקרקעין ושכר דירה"],
    ["investments-options-digital-assets", "שוק ההון, אופציות וקריפטו"],
    ["shareholder-tax", "מיסוי בעלי שליטה ודיבידנד"],
    ["guardianship-reporting", "אפוטרופסות ודיווחים מיוחדים"],
    ["tax-audits", "דיוני שומה והשגות"],
  ],
  en: [
    ["annual-tax-returns-individuals", "Annual Returns & Tax Refunds"],
    ["capital-declarations", "Capital Declarations"],
    ["real-estate-tax-israel", "Real Estate & Rental Income"],
    ["investments-options-digital-assets", "Securities, Options & Crypto"],
    ["shareholder-tax", "Controlling Shareholders & Dividends"],
    ["guardianship-reporting", "Guardianship Filings"],
    ["tax-audits", "Tax Audits & Assessments"],
  ],
} as const;

export function TaxQuickNavigation({ lang }: { lang: "he" | "en" }) {
  const heading = lang === "he" ? "ניווט מהיר לפי תחום מיסוי:" : "Quick Topic Navigation:";
  return (
    <nav aria-label={heading} className="border-y border-border py-4">
      <p className="mb-3 font-semibold text-primary">{heading}</p>
      <ul className="flex flex-wrap gap-x-4 gap-y-3 text-sm">
        {TOPICS[lang].map(([hash, label]) => (
          <li key={hash}>
            <Link
              to={lang === "he" ? "/tax-consulting" : "/en/tax-consulting"}
              hash={hash}
              className="text-primary underline decoration-gold/60 underline-offset-4 hover:text-gold-text"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}