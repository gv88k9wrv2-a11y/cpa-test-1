import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-startups.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "Where is the office located?", a: "The office is located in Herzliya Pituach. Meetings at the office can be arranged subject to availability, and video meetings are also available." },
  { q: "Are the services only for clients in Herzliya?", a: "No. The firm serves clients in Herzliya and other areas in Israel, as well as foreign companies operating in Israel. The working arrangement is determined according to the client's needs and the scope of the engagement." },
  { q: "Which services are available to companies and startups?", a: "Services may include financial-statement audits, financial reporting, tax advisory services, bookkeeping, payroll, outsourced financial management, budgets, forecasts, cash flow and accounting and financial preparation for fundraising and due-diligence processes." },
  { q: "Does the firm support foreign companies operating in Israel?", a: "Yes. The firm assists with reviewing the accounting and tax aspects of activity in Israel, including activity through a subsidiary or branch, tax-file registration, ongoing reporting, bookkeeping, payroll and coordination with legal or other professional advisers where required." },
  { q: "Does the firm handle digital-asset tax reporting?", a: "Yes. Services may include reviewing the nature of the activity, collecting and organizing transaction data, calculating results based on the records provided, preparing information for the annual return and reviewing reporting obligations. Each case is reviewed according to the facts and applicable law." },
  { q: "Does the firm handle rental-income taxation?", a: "Yes. Rental income from property in Israel and abroad may be reviewed, including the applicable tax routes, expenses, foreign tax paid, foreign tax credits and reporting obligations, depending on the type of property and the circumstances." },
  { q: "Are bookkeeping and payroll services available?", a: "Yes. Depending on the scope of the engagement, services may include document processing, reconciliations, periodic reports, payroll-data processing, employer reports and accounting and management information." },
  { q: "Are outsourced financial-management services available?", a: "Yes. Services may include budgets and forecasts, cash flow, management reports, information for management and board meetings and support for financial processes. The content and frequency are determined according to the company's needs and the scope of the engagement." },
  { q: "How are fees determined?", a: "Fees are determined according to the type of service, scope of activity, complexity, reporting frequency and the amount of information required. Following an introductory discussion, the scope of service and engagement terms can be presented." },
  { q: "Can meetings be held at the office?", a: "Yes. Meetings can be arranged at the Herzliya Pituach office subject to availability. Video meetings are also available." },
];


export const Route = createFileRoute("/en/cpa-herzliya")({
  head: () => ({
    meta: [
      { title: "CPA in Herzliya Pituach | Nimrodi & Co." },
      { name: "description", content: "Boutique CPA firm located in Herzliya Pituach — serving tech companies, startups, foreign entities and professionals in Israel's leading business district." },
      { property: "og:title", content: "CPA in Herzliya Pituach — Nimrodi & Co." },
      { property: "og:description", content: "Local boutique firm at the heart of Israel's tech corridor." },
      { property: "og:url", content: `${BASE}/en/cpa-herzliya` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-herzliya` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-herzliya` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-herzliya` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="CPA office building in Herzliya Pituach"
      icon={MapPin}
      eyebrow="CPA in Herzliya Pituach"
      title="Accounting, Tax and Financial Services in Herzliya Pituach"
      intro="Nimrodi &amp; Co. provides accounting, audit, tax and financial services to companies, startups, foreign companies, self-employed businesses and individuals. The office is located in Herzliya Pituach, with in-person and video meetings available according to the client’s needs and the scope of the engagement."
      highlights={[
        "Accounting and audit services for companies",
        "Accounting and financial support for startups",
        "Services for foreign companies operating in Israel",
        "Outsourced financial management",
        "Tax services for individuals and self-employed businesses",
        "Digital-asset tax reporting",
        "Rental-income tax reporting",
        "Bookkeeping and payroll",
        "In-person and video meetings",
      ]}
      ctaHeadline="Looking for the service relevant to your needs?"
      ctaText="Contact the firm to describe your needs and receive information about the proposed scope and engagement terms."
      sections={[
        {
          title: "Professional Services for Companies and Startups",
          body: "The firm provides accounting and financial services to companies and startups according to their stage of activity, structure and reporting requirements. Services may include financial-statement audits, financial reporting, accounting matters, tax advisory services, bookkeeping, payroll and information for management and boards.",
        },
        {
          title: "Outsourced Financial Management",
          body: "Companies requiring ongoing financial support may receive outsourced financial-management services according to management needs and the engagement scope. Services may include budgets, forecasts, cash-flow monitoring, management reports and financial preparation for fundraising and due-diligence processes.",
        },
        {
          title: "Services for Foreign Companies Operating in Israel",
          body: "The firm assists foreign companies with reviewing the accounting and tax aspects of activity in Israel. The relevant structure and reporting obligations depend on the activity, duration, employment arrangements, local agreements and applicable law.",
        },
        {
          title: "Services for Individuals and Self-Employed Businesses",
          body: "The firm provides tax-reporting and advisory services to individuals, self-employed businesses and professionals. Services are adapted to the person’s income, expenses, assets, Israeli or foreign activity and applicable reporting obligations.",
        },
        {
          title: "Digital-Asset Tax Reporting",
          body: "Services may include reviewing the nature of digital-asset activity, collecting and organizing transaction data, calculating gains and losses based on the records provided, preparing information for Israeli tax returns and reviewing reporting obligations. Where relevant, the firm may also assist with source-of-funds and activity documentation.",
        },
        {
          title: "Rental-Income Tax Reporting",
          body: "Services may include reviewing tax and reporting obligations relating to rental income from property in Israel and abroad. The treatment depends on the type of property, income, expenses, rental period, taxpayer status and applicable law.",
        },
        {
          title: "Bookkeeping and Payroll",
          body: "Bookkeeping and payroll services are provided according to the type of activity and engagement scope. Services may include document processing, reconciliations, periodic reports, payroll-data processing, employer reports and accounting and management information.",
        },
        {
          title: "Meetings and Services from Herzliya Pituach",
          body: "In-person meetings can be arranged at the Herzliya Pituach office, subject to availability. Services are also available through video meetings and agreed information-transfer methods. Services are not limited to clients located in Herzliya.",
        },
      ]}

      faqs={FAQS}
    />
  ),
});
