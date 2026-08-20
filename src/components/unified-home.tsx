import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "./site-chrome";
import {
  FloatingWhatsAppEn,
  SiteFooterEn,
  SiteHeaderEn,
  WHATSAPP_URL_EN,
} from "./site-chrome-en";
import { ExecutiveTestimonials } from "./social-proof";
import { HOME_CONTENT } from "../data/home-content";
import heroImage from "../assets/hero-office.webp";

type Lang = "he" | "en";

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

export function UnifiedHome({ lang }: { lang: Lang }) {
  const t = HOME_CONTENT[lang];
  const isHe = lang === "he";
  const Arrow = isHe ? ArrowLeft : ArrowRight;
  const whatsappUrl = isHe ? WHATSAPP_URL : WHATSAPP_URL_EN;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isHe ? <SiteHeader /> : <SiteHeaderEn />}

      <main id="main-content">
        {/* 1 — Hero */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={t.hero.imageAlt}
              width={1920}
              height={1280}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              className={
                isHe
                  ? "absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/85 to-primary/60"
                  : "absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60"
              }
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="max-w-3xl text-primary-foreground">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {t.hero.eyebrow}
              </div>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {t.hero.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85 sm:text-xl">
                {t.hero.paragraph}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch">
                  {t.hero.buttons.slice(0, 2).map((b) => (
                    <PathLink
                      key={b.to}
                      to={b.to}
                      className="inline-flex min-h-[56px] flex-1 items-center justify-center rounded-md border border-gold bg-primary/70 px-6 py-3 text-center text-base font-semibold text-primary-foreground shadow-sm backdrop-blur transition hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98]"
                    >
                      {b.label}
                    </PathLink>
                  ))}
                </div>
                {t.hero.buttons[2] && (
                  <PathLink
                    to={t.hero.buttons[2].to}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-primary-foreground/40 bg-transparent px-6 py-3 text-center text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {t.hero.buttons[2].label}
                  </PathLink>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 2 — Audience cards */}
        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2">
            {t.audiences.map((a) => (
              <PathLink
                key={a.to}
                to={a.to}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"
              >
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  {a.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  {a.cta}
                  <Arrow className="h-4 w-4" aria-hidden />
                </span>
              </PathLink>
            ))}
          </div>
        </section>

        {/* 3 — Need cards */}
        <section className="border-y border-border/60 bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {t.needs.heading}
              </h2>
              <p className="mt-3 text-muted-foreground">{t.needs.intro}</p>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.needs.cards.map((c) => (
                <li key={c.label}>
                  <PathLink
                    to={c.to}
                    hash={c.hash}
                    className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
                  >
                    <span>{c.label}</span>
                    <Arrow className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                  </PathLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 — Trust facts */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl">
              {t.trust.heading}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.trust.facts.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-sm font-medium leading-relaxed text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 — Service clusters */}
        <section className="border-y border-border/60 bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl">
              {t.clustersHeading}
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.clusters.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-display text-xl font-bold text-primary">{c.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {c.items.map((i) => (
                      <li key={i.label}>
                        <PathLink
                          to={i.to}
                          hash={i.hash}
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-gold"
                        >
                          <Arrow className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden />
                          {i.label}
                        </PathLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — Public review sources */}
        <ExecutiveTestimonials lang={lang} />

        {/* 7 — FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl">
              {t.faqHeading}
            </h2>
            <div className="mt-10 space-y-3">
              {t.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-lg border border-border bg-card p-4 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none font-semibold text-primary">
                    <span className="mx-2 text-gold">+</span>
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — Final CTA */}
        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.cta.heading}</h2>
            <p className="mt-3 text-primary-foreground/80">{t.cta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {t.cta.whatsapp}
              </a>
              <PathLink
                to={t.cta.contactTo}
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                {t.cta.contact}
              </PathLink>
            </div>
          </div>
        </section>
      </main>

      {isHe ? <SiteFooter /> : <SiteFooterEn />}
      {isHe ? <FloatingWhatsApp /> : <FloatingWhatsAppEn />}
    </div>
  );
}
