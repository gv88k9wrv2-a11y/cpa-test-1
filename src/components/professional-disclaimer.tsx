type ProfessionalDisclaimerProps = {
  lang: "he" | "en";
  className?: string;
};

const COPY = {
  he: "המידע בעמוד זה הוא כללי בלבד ואינו מהווה ייעוץ חשבונאי, מיסויי, משפטי או פיננסי. אין להסתמך עליו לצורך קבלת החלטה ללא בדיקה פרטנית של הנסיבות הספציפיות בידי איש מקצוע מוסמך.",
  en: "The information on this page is general in nature and does not constitute accounting, tax, legal, or financial advice. It should not be relied upon for decision-making without a review of the specific circumstances by a qualified professional.",
} as const;

export function ProfessionalDisclaimer({ lang, className = "" }: ProfessionalDisclaimerProps) {
  return (
    <aside
      aria-label={lang === "he" ? "הבהרה מקצועית" : "Professional disclaimer"}
      dir={lang === "he" ? "rtl" : "ltr"}
      className={`rounded-xl border border-border bg-secondary/45 px-5 py-4 text-sm leading-7 text-muted-foreground ${className}`}
    >
      <p>{COPY[lang]}</p>
    </aside>
  );
}
