import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  RELATED_HEADING,
  RELATED_SERVICE,
  TAX_GROUP_TITLES,
  TAX_TOPICS,
  type Lang,
} from "../data/internal-links";

/** Router-typed link for data-driven paths. */
function PathLink({
  to,
  hash,
  className,
  children,
}: {
  to: string;
  hash?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={to as "/services"} hash={hash} className={className}>
      {children}
    </Link>
  );
}

const ROW_CLASS =
  "link-row flex min-h-12 w-full items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition hover:border-gold/70 hover:bg-gold/5";

/** Service-list rows — the whole row is a single link. */
export function ServiceRowList({
  lang,
  items,
  ariaLabel,
}: {
  lang: Lang;
  items: { label: string; to: string; hash?: string }[];
  ariaLabel?: string;
}) {
  const Arrow = lang === "he" ? ArrowLeft : ArrowRight;
  return (
    <ul className="grid gap-2 sm:grid-cols-2" aria-label={ariaLabel}>
      {items.map((i) => (
        <li key={`${i.to}${i.hash ?? ""}${i.label}`}>
          <PathLink to={i.to} hash={i.hash} className={ROW_CLASS}>
            <span>{i.label}</span>
            <Arrow className="h-4 w-4 shrink-0 text-gold" aria-hidden />
          </PathLink>
        </li>
      ))}
    </ul>
  );
}

/** Topic list on the tax advisory page, grouped exactly as defined. */
export function TaxTopicList({ lang }: { lang: Lang }) {
  const titles = TAX_GROUP_TITLES[lang];
  const topics = TAX_TOPICS[lang];
  return (
    <div className="space-y-8">
      {(["A", "B"] as const).map((g) => (
        <div key={g}>
          <h3 className="mb-3 font-display text-lg font-bold text-primary">{titles[g]}</h3>
          <ServiceRowList
            lang={lang}
            items={topics.filter((t) => t.group === g).map((t) => ({
              label: t.label,
              to: lang === "he" ? "/tax-consulting" : "/en/tax-consulting",
              hash: t.id,
            }))}
          />
        </div>
      ))}
    </div>
  );
}

/** Section 10 — one Related Services block containing one item only. */
export function RelatedServiceBlock({ lang, currentPath }: { lang: Lang; currentPath: string }) {
  const path = currentPath.replace(/\/$/, "") || "/";
  const item = RELATED_SERVICE[path];
  if (!item) return null;
  const Arrow = lang === "he" ? ArrowLeft : ArrowRight;

  return (
    <section
      aria-label={RELATED_HEADING[lang]}
      className="border-t border-border/60 bg-secondary/30 py-14"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-primary">
          {RELATED_HEADING[lang]}
        </h2>
        <div className="mt-6">
          <PathLink
            to={item.to}
            hash={item.hash}
            className="link-card flex items-center justify-between gap-3 rounded-xl border border-gold/40 bg-card px-5 py-4 text-base font-semibold text-primary transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
          >
            <span>{item.label}</span>
            <Arrow className="h-5 w-5 shrink-0 text-gold" aria-hidden />
          </PathLink>
        </div>
      </div>
    </section>
  );
}
