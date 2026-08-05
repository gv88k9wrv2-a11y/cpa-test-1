import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-freelancers.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "What is the difference between osek patur and osek murshe in Israel?", a: "Osek patur and osek murshe are different VAT registration categories for self-employed activity in Israel. The appropriate category depends on the nature of the activity, the applicable turnover threshold, the customer base and the registration rules in effect at the relevant time. The firm can assist with reviewing the available information and preparing the registration documents within the agreed scope." },
  { q: "How do I compare operating as a sole proprietor or a limited company in Israel?", a: "The comparison depends on the expected income and expenses, the amount the owner plans to withdraw, funds retained for business use, operating costs, legal considerations and future plans. Tax rules that may attribute company income to an individual should also be considered where relevant. Within the agreed scope, the firm can prepare a financial and tax comparison based on the information provided." },
  { q: "What is an Israeli capital declaration, and what information does it include?", a: "An Israeli capital declaration is a report of assets, liabilities and related financial information requested by the Israel Tax Authority in certain cases. The required information may cover the individual, the household and relevant holdings in Israel or abroad, according to the request and the applicable instructions. The firm can assist with organizing the supporting records and preparing the declaration based on the information provided." },
  { q: "I work with clients abroad — how do I invoice?", a: "Services supplied to a foreign resident may qualify for zero-rate VAT under Section 30(a)(5), subject to the statutory conditions and the circumstances of the service. The invoicing, VAT, currency-conversion and foreign-document requirements depend on the service, customer and applicable rules. The firm can assist with the Israeli accounting and tax aspects and coordinate information with foreign advisers where required." },
  { q: "What is a Pocket Company (חברת ארנק) and how do I avoid the trap?", a: "Section 62A of the Israeli Income Tax Ordinance targets one-person companies used to shelter what is effectively employment income. Classification as a Pocket Company eliminates the corporate tax benefit and applies effective tax of ~48%. We structure incorporation to prove genuine business substance — multiple clients, business risk, real investment." },
];

export const Route = createFileRoute("/en/cpa-freelancers")({
  head: () => ({
    meta: [
      { title: "CPA for Freelancers & Single-Member Companies | Nimrodi" },
      { name: "description", content: "Israeli CPA for freelancers, consultants and single-member companies: registration, filings, annual return and Pocket Company planning. Get started." },
      { property: "og:title", content: "CPA for Freelancers — Nimrodi & Co." },
      { property: "og:description", content: "Premium service for Israeli freelancers, elite tech consultants and boutique agencies." },
      { property: "og:url", content: `${BASE}/en/cpa-freelancers` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-freelancers` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-freelancers` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-freelancers` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Freelancer working in a modern home office"
      icon={Briefcase}
      eyebrow="Freelancers, Consultants & Single-Member Companies"
      title="CPA services for freelancers, consultants and independent businesses in Israel"
      intro="Accounting and tax support for freelancers, independent contractors and boutique businesses in Israel. Services may include registration, ongoing reporting, annual returns, capital declarations and analysis of operating as a sole proprietor or company, according to the client’s circumstances and the agreed scope."
      highlights={[
        "Full digital registration with VAT, ITA and Bituach Leumi",
        "Osek patur / osek murshe fit assessment",
        "Monthly / bi-monthly VAT and withholding filings",
        "Annual personal tax return and review of deductions based on the available records and applicable rules",
        "Capital declaration (הצהרת הון) preparation and defense",
        "Sole proprietor → private company crossover simulation",
        "Pocket Company (חברת ארנק) risk mitigation",
        "Global freelancers — foreign clients, 0% VAT (Section 30(a)(5))",
        "Passive income: rental, crypto, foreign securities",
      ]}
      sections={[
        {
          title: "Getting started — the practical playbook",
          body: "When you go independent there's a required sequence of actions with the tax authorities. The engagement may include assistance with the following registration and reporting steps:",
          bullets: [
            "Status selection: osek patur / osek murshe / private company",
            "VAT file opening within 21 days of first invoice",
            "ITA file + Form 5329 and advance-payment instruction",
            "Bituach Leumi file + declared expected income",
            "Pension fund and Keren Hishtalmut for self-employed setup",
            "Digital invoice books / cloud accounting system activation",
          ],
        },
        {
          title: "Ongoing reporting",
          body: "Depending on your volume — monthly or bi-monthly VAT (Form 874), income tax advances (Form 102), withholding on subcontractors and annual reconciliations. The filing frequency and responsibilities are defined according to the client’s activity, available information and agreed scope.",
        },
        {
          title: "Annual return, capital declaration & tax planning",
          body: "We prepare your annual personal return, review potential deductions based on the available records and applicable rules (pension, study fund, life insurance, home-office expenses, professional education), prepare the capital declaration (הצהרת הון) when the ITA requires it, and plan the coming year — including whether it's time to incorporate.",
        },
        {
          title: "Reviewing Potential Refunds and Tax Credits",
          body: "Eligibility for tax refunds and credits depends on the available records, relevant tax years and applicable law. Where appropriate, we review potential credits, deductions and prior-year reporting:",
          bullets: [
            "Tax credit points (parents, children, academic degree, periphery residence)",
            "Assessment of vehicle, phone, home-office and internet expenses under applicable rules",
            "Pension and Keren Hishtalmut contributions to the annual ceilings",
            "Retroactive refund claims (up to 6 years back)",
            "Correct withholding coordination between salaried and self-employed income",
          ],
        },
        {
          title: "Global freelancers — Israeli self-employed with foreign clients",
          body: "If you're a developer, designer, consultant or marketer working directly with clients in the US, Europe or Asia, your tax structure needs specialist handling. We advise freelancers and independent professionals working with international clients and cross-border income, and know every nuance:",
          bullets: [
            "English invoices with 0% VAT under Section 30(a)(5)",
            "Receiving payments via PayPal, Wise, Stripe, Payoneer and wire",
            "Correct FX rate on income and payment dates",
            "Digital-invoicing support based on the applicable Israel Tax Authority requirements",
            "W-8BEN handling with US clients to avoid withholding",
            "Capital declaration with foreign assets (bank, PayPal, crypto)",
            "Foreign tax credit coordination under treaty",
          ],
        },
        {
          title: "Digital Assets, Rental Income and Investments",
          body: "Self-employed individuals may also have income from digital assets, rental properties or investments. These sources may create additional Israeli and foreign reporting obligations and should be reviewed separately according to the facts and applicable law:",
          bullets: [
            "Residential rental — 10% flat track vs. marginal-rate track with expenses",
            "Capital gains on Israeli and foreign securities — 25% + foreign tax credit",
            "Crypto (Bitcoin, Ethereum, altcoins) — 25% capital gains on real gain",
            "Dividends from Israeli (25%) and foreign companies (per treaty)",
            "Airbnb / short-term rental — business vs. passive classification",
          ],
        },
        {
          title: "Sole proprietor → private company — and the Pocket Company (חברת ארנק) trap",
          body: "Incorporation can be a major strategic step, but it carries the risk of being reclassified as a Pocket Company under Section 62A of the Israeli Income Tax Ordinance. The rule targets professionals using an Ltd shell for what is effectively employment — reclassification eliminates the tax benefit and applies ~48% effective tax. We structure the setup to be safe:",
          bullets: [
            "Economic crossover simulation — sole proprietor vs. company",
            "Genuine business substance: multiple clients, business risk, investment",
            "Avoid single-client dominance (70%+ of revenue is a clear red flag)",
            "Hiring employees or subcontractors — strengthens business classification",
            "Separation of owner's draws from salary; documentation of owner's role",
            "Support with tax ruling requests in relevant cases, based on the available information and agreed scope",
            "Review of controlling-shareholder distribution considerations under the applicable rules",
          ],
        },
      ]}
      faqs={FAQS}
    />
  ),
});
