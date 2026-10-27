type BlogFaqListProps = {
  faqs: { q: string; a: string }[];
  lang: "he" | "en";
};

export function BlogFaqList({ faqs, lang }: BlogFaqListProps) {
  return (
    <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
      {faqs.map((faq) => (
        <details key={faq.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
          <summary className={`flex cursor-pointer items-start justify-between gap-4 font-semibold text-primary ${lang === "he" ? "text-right" : "text-left"}`}>
            <span>{faq.q}</span>
            <span className="mt-1 text-gold-text transition group-open:rotate-45" aria-hidden>＋</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}