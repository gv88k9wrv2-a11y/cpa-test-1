import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-freelancers.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "What is the difference between an osek patur and an osek murshe in Israel?", a: "Osek patur and osek murshe are different VAT registration categories for self-employed activity in Israel. The appropriate category depends on the nature of the activity, the applicable turnover threshold, the customer base and the registration rules in effect at the relevant time. The firm can assist with reviewing the available information and preparing the registration documents within the agreed scope." },
  { q: "Should I operate as a sole proprietor or limited company in Israel?", a: "The comparison depends on the expected income and expenses, the amount the owner plans to withdraw, funds retained for business use, operating costs, legal considerations and future plans. Tax rules that may attribute company income to an individual should also be considered where relevant. Within the agreed scope, the firm can prepare a financial and tax comparison based on the information provided." },
  { q: "What is an Israeli capital declaration and what does it include?", a: "An Israeli capital declaration is a report of assets, liabilities and related financial information requested by the Israel Tax Authority in certain cases. The required information may cover the individual, the household and relevant holdings in Israel or abroad, according to the request and the applicable instructions. The firm can assist with organizing the supporting records and preparing the declaration based on the information provided." },
  { q: "How should an Israeli freelancer invoice foreign clients?", a: "Services supplied to a foreign resident may qualify for zero-rate VAT under Section 30(a)(5), subject to the statutory conditions and the circumstances of the service. The invoicing, VAT, currency-conversion and foreign-document requirements depend on the service, customer and applicable rules. The firm can assist with the Israeli accounting and tax aspects and coordinate information with foreign advisers where required." },
  { q: "What is an Israeli pocket company and when may Section 62A apply?", a: "Section 62A of the Israeli Income Tax Ordinance targets one-person companies used to shelter what is effectively employment income. Where the section applies, income may be attributed to the individual shareholder, which can change the effective tax outcome depending on the facts and the rules in force. We help review the relevant factors — client base, business risk, independence and documentation — based on the information provided." },
];

export const Route = createFileRoute("/en/cpa-freelancers")({
  head: () => ({
    meta: [
      { title: "CPA for Freelancers and Independent Businesses in Israel | Nimrodi" },
      { name: "description", content: "CPA services in Israel for freelancers and consultants, including registration, ongoing reporting, annual returns and capital declarations. Contact the firm." },
      { property: "og:title", content: "CPA for Freelancers in Israel | Nimrodi & Co." },
      { property: "og:description", content: "Accounting and tax support for freelancers, consultants and independent businesses in Israel, including registration, filings and annual returns. Contact the firm." },
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
      heroImageAlt="CPA services for freelancers and independent businesses in Israel"
      icon={Briefcase}
      eyebrow="Freelancers and Independent Businesses in Israel"
      title="CPA Services for Freelancers and Independent Businesses in Israel"
      intro="CPA and tax services for freelancers, consultants, independent contractors, and small businesses in Israel. Services may include VAT and tax registration, periodic reporting, annual tax returns, capital declarations, and analysis of operating as a sole proprietor or limited company."
      highlights={[
        "Assistance with registration information and filings for VAT, the Israel Tax Authority and Bituach Leumi, according to the agreed scope",
        "Osek patur or osek murshe registration assessment",
        "Monthly or bi-monthly Israeli VAT and withholding tax filings",
        "Annual personal tax return and review of deductions based on the available records and applicable rules",
        "Israeli capital declaration preparation and supporting documentation",
        "Sole proprietor versus limited company tax comparison",
        "Pocket Company (חברת ארנק) risk mitigation",
        "Foreign-client income — review of the applicable VAT treatment and reporting requirements",
        "Reporting for rental income, crypto assets, and foreign securities",
      ]}
      sections={[
        {
          title: "Getting started — the practical playbook",
          body: "When you go independent there's a required sequence of actions with the tax authorities. The engagement may include assistance with the following registration and reporting steps:",
          bullets: [
            "Status selection: osek patur / osek murshe / private company",
            "Review of the required VAT-registration timing according to the planned activity and applicable requirements",
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
            "Review of possible prior-year refund claims, subject to the applicable limitation period, available records and relevant tax year",
            "Correct withholding coordination between salaried and self-employed income",
          ],
        },
        {
          title: "Global freelancers — Israeli self-employed with foreign clients",
          body: "If you work directly with clients outside Israel, the accounting and tax treatment may depend on the services, customer location, contractual terms, payment method and applicable law. We assist freelancers and independent professionals with the Israeli accounting and tax aspects of foreign-client income:",
          bullets: [
            "Review of the VAT treatment and invoicing requirements for services supplied to foreign customers, subject to the statutory conditions and the circumstances of the service",
            "Receiving payments via PayPal, Wise, Stripe, Payoneer and wire",
            "Correct FX rate on income and payment dates",
            "Digital-invoicing support based on the applicable Israel Tax Authority requirements",
            "Coordination of information for US withholding forms where relevant, with US tax treatment confirmed by a qualified US adviser",
            "Capital declaration with foreign assets (bank, PayPal, crypto)",
            "Foreign tax credit coordination under treaty",
          ],
        },
        {
          title: "Digital Assets, Rental Income and Investments",
          body: "Self-employed individuals may also have income from digital assets, rental properties or investments. These sources may create additional Israeli and foreign reporting obligations and should be reviewed separately according to the facts and applicable law:",
          bullets: [
            "Residential rental income — review of the available tax and reporting alternatives under the rules applicable to the relevant period",
            "Israeli and foreign securities — review of capital-gains reporting, withholding and possible foreign-tax-credit treatment",
            "Digital assets — review of the activity classification, transaction data, calculation method and reporting obligations",
            "Israeli and foreign dividends — review of withholding, reporting and possible treaty or foreign-tax-credit considerations",
            "Airbnb / short-term rental — business vs. passive classification",
          ],
        },
        {
          title: "Sole proprietor → private company — review of the Pocket Company rules",
          body: "Operating through a private company may require review of the Pocket Company rules under Section 62A of the Israeli Income Tax Ordinance. The analysis depends on the activity, sources of income, working relationships and applicable law. Within the agreed scope, the firm may assist with reviewing the relevant facts and documentation:",
          bullets: [
            "Economic crossover simulation — sole proprietor vs. company",
            "Characteristics of the business activity, including clients, risks, investment and the manner in which services are provided",
            "Review of client concentration and the factual characteristics of the working relationship where employee-like or pocket-company classification may be relevant",
            "Employees and subcontractors considered as part of the overall factual analysis of the activity",
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
