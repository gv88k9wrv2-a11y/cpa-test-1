import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "./site-chrome";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "./site-chrome-en";
import type { NavGroup } from "../data/nav-content";
import { ProfessionalDisclaimer } from "./professional-disclaimer";

type Lang = "he" | "en";

export type GatewaySection = { id: string; title: string; body: string };

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

export function GatewayPage({
  lang,
  h1,
  intro,
  instruction,
  groups,
  sections = [],
  ctaLabel,
  ctaTo,
}: {
  lang: Lang;
  h1: string;
  intro: string;
  instruction: string;
  groups: NavGroup[];
  sections?: GatewaySection[];
  ctaLabel: string;
  ctaTo: string;
}) {
  const isHe = lang === "he";
  const Arrow = isHe ? ArrowLeft : ArrowRight;
  const whatsappUrl = isHe ? WHATSAPP_URL : WHATSAPP_URL_EN;

  return (
    <div className="min-h-screen bg-background">
      {isHe ? <SiteHeader /> : <SiteHeaderEn />}

      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">{h1}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{instruction}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-bold text-primary">{g.title}</h2>
                <ul className="mt-4 space-y-2">
                  {g.items.map((i) => (
                    <li key={i.label}>
                      <PathLink
                        to={i.to}
                        hash={i.hash}
                        className="inline-flex items-start gap-2 text-sm text-muted-foreground transition hover:text-gold"
                      >
                        <Arrow className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden />
                        {i.label}
                      </PathLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {sections.length > 0 && (
          <section className="border-t border-border/60 bg-secondary/30 py-16">
            <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Professional disclaimer */}
        {/* Required on all professional-content pages. Do not remove or duplicate. */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <ProfessionalDisclaimer lang={lang} />
        </section>

        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 px-4 sm:px-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {isHe ? "וואטסאפ" : "WhatsApp"}
            </a>
            <PathLink
              to={ctaTo}
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              {ctaLabel}
            </PathLink>
          </div>
        </section>
      </main>

      {isHe ? <SiteFooter /> : <SiteFooterEn />}
      {isHe ? <FloatingWhatsApp /> : <FloatingWhatsAppEn />}
    </div>
  );
}
