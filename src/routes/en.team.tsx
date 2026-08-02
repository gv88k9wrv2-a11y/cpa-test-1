import { createFileRoute } from "@tanstack/react-router";
import heroImg from "../assets/team-photo.webp";
import { Building2, Calculator, GraduationCap, UserCheck, Users } from "lucide-react";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

const BASE = "https://www.nimrodi.co.il";

export const Route = createFileRoute("/en/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Nimrodi & Co. CPA" },
      { name: "description", content: "Meet Shlomo Nimrodi, CPA and the team at Nimrodi & Co. — a boutique CPA firm in Herzliya Pituach serving companies, startups and international clients." },
      { property: "og:title", content: "Our Team — Nimrodi & Co." },
      { property: "og:description", content: "Senior partners with decades of experience across tax, audit and cross-border structures." },
      { property: "og:url", content: `${BASE}/en/team` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/team` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/team` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/team` },
    ],
  }),
  component: TeamEn,
});

const TEAM = [
  { name: "Shlomo Nimrodi, CPA", role: "Founding Partner", bio: "Certified Public Accountant and a member of the Institute of Certified Public Accountants in Israel. Professional experience includes controller and CFO roles in private and public companies, work with foreign companies operating in Israel and services relating to Israeli and international taxation. Previous experience also includes financial participation in capital-raising and public-company processes." },
];

const DEPARTMENTS = [
  {
    icon: Building2,
    name: "Companies, Startups and Audit",
    role: "Accounting, audit, foreign companies and outsourced financial management",
    bio: "The team supports private companies, technology companies, startups and foreign companies operating in Israel. Services include financial-statement audits, accounting and reporting matters, outsourced financial management, budgets and forecasts, cash-flow management, management reporting and accounting and financial preparation for fundraising and due-diligence processes.",
    credentials: [
      "Financial-statement audits",
      "Financial reporting and accounting frameworks",
      "Companies and startups",
      "Foreign companies operating in Israel",
      "Review of subsidiary and branch alternatives",
      "Outsourced financial management",
      "Budgets, forecasts and cash-flow management",
      "Management and board information",
      "Fundraising and due-diligence preparation",
    ],
  },
  {
    icon: UserCheck,
    name: "Individuals, Self-Employed Businesses and Tax",
    role: "Annual returns, capital declarations and tax advisory services",
    bio: "The team supports individuals, self-employed businesses and professionals with tax reporting and dealings with the Israel Tax Authority. Services include tax-file registration, periodic reports, annual returns, capital declarations, Israeli and foreign-source income, digital-asset tax reporting and rental-income tax reporting for properties in Israel and abroad.",
    credentials: [
      "Tax-file registration and periodic reports",
      "Annual returns and capital declarations",
      "Individual and self-employed taxation",
      "Israeli and foreign-source income",
      "Digital-asset tax reporting",
      "Digital-asset transaction-data organization",
      "Rental-income tax reporting in Israel",
      "Foreign rental-income reporting",
      "Foreign-tax-credit considerations",
      "International-tax and residency matters",
    ],
  },
  {
    icon: Calculator,
    name: "Bookkeeping and Payroll",
    role: "Periodic reporting, reconciliations and payroll processing",
    bio: "The team provides bookkeeping and payroll services to companies and self-employed businesses according to the nature of the activity and the scope of the engagement. Services include document processing, reconciliations, periodic reports, payroll processing and accounting and management information.",
    credentials: [
      "Ongoing bookkeeping",
      "Document processing",
      "Bank and credit-card reconciliations",
      "VAT and tax-advance reports",
      "Periodic reports",
      "Payroll processing",
      "Employer reports",
      "Accounting and management information",
      "Information for the financial-management team",
    ],
  },
];


function TeamEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              <Users className="h-3.5 w-3.5" aria-hidden />
              The team
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">Our partners and senior team</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Our professional team provides private clients, corporations, and startups with comprehensive accounting expertise and advanced, high-level tax solutions.
            </p>
          </div>
        </section>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img src={heroImg} alt="Nimrodi & Co. CPA team at the Herzliya Pituach offices" width={1024} height={1024} loading="lazy" decoding="async" className="h-auto w-full object-cover" />
          </div>
        </div>
      </section>


        <section className="py-16">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:max-w-md">
            {TEAM.map((m) => (
              <article key={m.name} className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-display text-xl font-bold text-primary">{m.name}</h2>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">{m.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
            <h2 className="text-center font-display text-3xl font-bold text-primary">
              Professional Service Areas
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
              The firm&rsquo;s teams work together to provide accounting, tax, financial and operational support according to each client&rsquo;s activity and the agreed scope of service.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {DEPARTMENTS.map((d) => (
                <article key={d.name} className="flex flex-col rounded-xl border border-border bg-card p-6">
                  <d.icon className="h-8 w-8 text-gold" aria-hidden />
                  <h3 className="mt-4 font-display text-xl font-bold text-primary">{d.name}</h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">{d.role}</div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {d.credentials.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-xs text-foreground/80">
                        <GraduationCap className="h-3.5 w-3.5 text-gold" aria-hidden />
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
