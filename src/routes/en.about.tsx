import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, MessageCircle } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";

const BASE = "https://www.nimrodi.co.il";

export const Route = createFileRoute("/en/about")({
  head: () => ({
    meta: [
      { title: "About Nimrodi & Co. | CPA Firm in Herzliya Pituach Since 2000" },
      { name: "description", content: "About Nimrodi & Co. CPA — serving Israeli and international clients from Herzliya Pituach since 2000, with senior-level involvement and boutique-firm attention." },
      { property: "og:title", content: "About Nimrodi & Co." },
      { property: "og:description", content: "About Nimrodi & Co., a boutique CPA firm in Herzliya Pituach supporting companies, startups and international clients in Israel. Learn more about our firm." },
      { property: "og:url", content: `${BASE}/en/about` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/about` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/about` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/about` },
    ],
  }),
  component: AboutEn,
});

function AboutEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Award className="h-3.5 w-3.5" aria-hidden />
              About the firm
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">
              Nimrodi & Co. CPA firm in Israel
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Nimrodi & Co. has operated since 2000 and provides accounting, tax and financial services to companies, founders, individuals and international businesses operating in Israel. Engagement responsibilities, points of contact and service scope are agreed with each client.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Our story</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Founded by Shlomo Nimrodi, CPA, the firm serves companies, entrepreneurs, executives and individuals in Israel and internationally in areas including technology, professional services, real estate and cross-border activity.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Our approach</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Engagement responsibility. The professional responsible for the engagement is identified according to the agreed scope and working arrangements.",
                  "Long-term working relationships. Engagements may continue over time according to the client’s needs and the agreed scope.",
                  "Digital working methods. We use accounting platforms selected according to the client’s needs and the agreed scope of access.",
                  "Cross-border coordination. Israeli tax matters may be coordinated with qualified advisers in the relevant foreign jurisdictions.",
                  "Transparent pricing. Fixed-scope engagements where appropriate, with the scope, assumptions and pricing terms explained in advance.",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2 text-foreground">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Where we're based</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our office is in Herzliya Pituach — the Herzliya Pituach business district, home to many technology campuses. We serve clients across Israel and internationally.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's talk</h2>
            <p className="mt-3 text-primary-foreground/80">Introductory consultation, with scope and terms explained in advance.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground">
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
              <Link to="/en/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Contact page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
