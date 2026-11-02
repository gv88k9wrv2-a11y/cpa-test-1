export function sectionAnchorId(section: { id?: string }, index: number) {
  return section.id ?? `topic-${index + 1}`;
}

export function SectionQuickNavigation({
  lang,
  sections,
}: {
  lang: "he" | "en";
  sections: { id?: string; title: string }[];
}) {
  const heading = lang === "he" ? "ניווט מהיר בעמוד:" : "Quick Page Navigation:";
  return (
    <nav aria-label={heading} className="border-y border-border py-4">
      <p className="mb-3 font-semibold text-primary">{heading}</p>
      <ul className="flex flex-wrap gap-x-4 gap-y-3 text-sm">
        {sections.map((s, i) => (
          <li key={s.title}>
            <a
              href={`#${sectionAnchorId(s, i)}`}
              className="text-primary underline decoration-gold/60 underline-offset-4 hover:text-gold-text"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
