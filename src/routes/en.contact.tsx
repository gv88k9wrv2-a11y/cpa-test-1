import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/contact-office.webp";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";
import { LeadForm } from "../components/lead-form";

const BASE = "https://www.nimrodi.co.il";

export const Route = createFileRoute("/en/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nimrodi & Co. | CPA Firm in Herzliya Pituach" },
      { name: "description", content: "Contact Nimrodi & Co. in Herzliya Pituach for an introductory discussion about accounting, tax, payroll, audit and financial services in Israel." },
      { property: "og:title", content: "Contact Nimrodi & Co." },
      { property: "og:description", content: "Contact Nimrodi & Co. CPA in Herzliya Pituach to discuss accounting, tax, payroll, audit or reporting needs for a company or business in Israel." },
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
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">Contact Our CPA Firm in Herzliya Pituach</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Contact Nimrodi & Co. for an introductory discussion about accounting, tax, payroll, audit, and financial reporting services in Israel.
            </p>
          </div>
        </section>
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
              <img src={heroImg} alt="Reception area at the Nimrodi & Co. CPA office in Herzliya Pituach" width={1024} height={1024} loading="lazy" decoding="async" className="h-auto w-full object-cover" />
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
