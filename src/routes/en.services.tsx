import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, Briefcase, Globe2, MapPin, Calculator, ReceiptText,
  FileSearch, FileSpreadsheet, Plane, MessageCircle, LineChart,
} from "lucide-react";

import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn, WHATSAPP_URL_EN } from "../components/site-chrome-en";
import { GovPortalLinks } from "../components/gov-portal-links";

const BASE = "https://www.nimrodi.co.il";

const GROUPS = [
  {
    title: "Core Services",
    items: [
      { to: "/en/fractional-cfo", label: "Fractional CFO Services in Israel", icon: LineChart, desc: "Fractional CFO support for budgeting, cash flow, burn rate, runway, board reporting, financial models, and due diligence readiness." },
      { to: "/en/bookkeeping", label: "Bookkeeping Services in Israel", icon: Calculator, desc: "Israeli bookkeeping services including monthly close, reconciliations, VAT reporting, and management information on digital platforms." },
      { to: "/en/payroll", label: "Israeli Payroll and Section 102 ESOP", icon: ReceiptText, desc: "Israeli payroll services, payslips, Section 102 equity plans, Form 106, Form 161, employer reporting, and pension information." },
      { to: "/en/audit", label: "Audit and Assurance Services in Israel", icon: FileSearch, desc: "Statutory financial statement audits under Israeli GAAP or IFRS, audit preparation, and financial due diligence support." },
      { to: "/en/tax-consulting", label: "Israeli Tax Advisory", icon: FileSpreadsheet, desc: "Israeli tax planning, advance tax ruling requests, digital asset reporting, tax assessments, and objections." },
    ],
  },

  {
    title: "Services by Client Type",
    items: [
      { to: "/en/cpa-startups", label: "CPA Services for Startups and Technology Companies", icon: Building2, desc: "Startup accounting, fundraising readiness, Section 102 equity plans, Israel-Delaware flip analysis, and technology tax incentives." },
      { to: "/en/cpa-freelancers", label: "CPA Services for Freelancers and Self-Employed Businesses", icon: Briefcase, desc: "Israeli tax registration, periodic filings, annual tax returns, capital declarations, rental income, and digital asset reporting." },
      { to: "/en/cpa-foreign-companies", label: "CPA Services for Foreign Companies in Israel", icon: Globe2, desc: "Israeli subsidiary or branch analysis, bookkeeping, payroll, KYC information, transfer pricing, and local tax reporting." },
      { to: "/en/cpa-herzliya", label: "CPA Firm in Herzliya Pituach", icon: MapPin, desc: "Boutique CPA firm in Herzliya Pituach serving companies, startups, foreign businesses, freelancers, and individuals." },
    ],
  },
  {
    title: "International and Cross-Border Tax Services",
    items: [
      { to: "/en/cpa-international", label: "Relocation, New Immigrants, and Returning Residents", icon: Plane, desc: "Israeli tax residency, relocation, new immigrant and returning resident benefits, tax treaties, and foreign income reporting." },
    ],
  },
] as const;

export const Route = createFileRoute("/en/services")({
  head: () => ({
    meta: [
      { title: "CPA Services in Israel | Nimrodi & Co., Herzliya Pituach" },
      { name: "description", content: "Accounting, tax and financial services in Israel for companies and startups, including audit, payroll, bookkeeping and CFO support. Explore the firm's services." },
      { property: "og:title", content: "Accounting and Tax Services in Israel | Nimrodi & Co." },
      { property: "og:description", content: "Accounting, tax and financial services for companies and startups in Israel, including audit, bookkeeping, payroll, tax advisory and CFO support. Explore the services." },
      { property: "og:url", content: `${BASE}/en/services` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/services` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/services` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/services` },
    ],
  }),
  component: ServicesEn,
});

function ServicesEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">CPA Services in Israel</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              Accounting, Tax, Audit, Payroll, and CFO Services in Israel
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Our Israeli CPA services may include bookkeeping, payroll, financial reporting, audit, tax advisory, fractional CFO support, and international tax matters, based on the agreed scope.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3">
            {[
              { to: "/en/companies", label: "Companies & Startups" },
              { to: "/en/individuals", label: "Individuals & Self-Employed" },
              { to: "/en/services", label: "Services" },
            ].map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-border bg-card p-6 text-center font-display text-xl font-bold text-primary transition hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </section>


        <section className="py-16">
          <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{g.title}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((s) => (
                    <Link key={s.to} to={s.to} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-xl">
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary group-hover:bg-gold/15 group-hover:text-gold">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="mt-4 inline-flex text-xs font-semibold text-gold">{s.label} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Choose the Service Path That Fits Your Needs</h2>
            <p className="mt-3 text-primary-foreground/80">Start by client type or by the professional service required. Each path leads to the relevant service information.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground">
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
              <Link to="/en/contact" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10">
                Contact Our CPA Firm
              </Link>
            </div>
          </div>
        </section>
      <GovPortalLinks
        lang="en"
        title="Official Israeli Tax, Corporate, and Regulatory Authorities"
        links={[
            { label: "Israel Tax Authority – Corporate, VAT & Filings", href: "https://www.gov.il/en/departments/israel_tax_authority" },
            { label: "National Insurance Institute (Bituach Leumi)", href: "https://www.btl.gov.il" },
            { label: "Israel Innovation Authority – Grants & Programs", href: "https://innovationisrael.org.il/en/" },
            { label: "Ministry of Justice – Corporations Registrar", href: "https://www.gov.il/en/departments/ministry_of_justice" },
        ]}
      />

      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
