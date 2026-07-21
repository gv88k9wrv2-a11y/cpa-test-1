import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/contact-office.webp";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";
import { LeadForm } from "../components/lead-form";

const BASE = "https://id-preview--11cf7c4c-7c75-4426-b3e1-7078afb54370.lovable.app";

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nimrodi & Co. CPA | Herzliya Pituach, Israel" },
      { name: "description", content: "Contact Nimrodi & Co. — boutique CPA firm in Herzliya Pituach. Free introductory consultation for companies, startups and individuals." },
      { property: "og:title", content: "Contact Nimrodi & Co." },
      { property: "og:description", content: "Free introductory consultation with our senior team." },
      { property: "og:url", content: `${BASE}/en/contact` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/contact` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/contact` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/contact` },
    ],
  }),
  component: ContactEn,
});

function ContactEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">Get in touch</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Free introductory consultation. We usually respond within a business day.
            </p>
          </div>
        </section>
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <img src={heroImg} alt="Nimrodi & Co. office reception" width={1024} height={1024} loading="lazy" className="h-64 w-full object-cover sm:h-80" />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-4xl gap-4 px-4 sm:grid-cols-2 sm:px-6">
            <InfoCard icon={Phone} label="Phone" value="+972-9-9582211" href="tel:+97299582211" />
            <InfoCard icon={MessageCircle} label="WhatsApp" value="+972-54-6688681" href={WHATSAPP_URL_EN} />
            <InfoCard icon={Mail} label="Email" value="office@nimrodi.co.il" href="mailto:office@nimrodi.co.il" />
            <InfoCard
              icon={MapPin}
              label="Office"
              value="16 Galgalei ha-Plada St, Herzliya Pituach"
              href="https://www.google.com/maps/search/?api=1&query=16+Galgalei+ha-Plada+St+Herzliya+Pituach"
            />
          </div>
        </section>

        <LeadForm lang="en" />
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener"
      className="flex items-start gap-3 rounded-xl border border-border bg-card p-6 transition hover:border-gold/40"
    >
      <Icon className="mt-1 h-5 w-5 text-gold" aria-hidden />
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 text-lg font-semibold text-primary">{value}</div>
      </div>
    </a>
  );
}
