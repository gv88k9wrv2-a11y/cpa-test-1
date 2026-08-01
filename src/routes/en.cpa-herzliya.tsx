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
      eyebrow="Herzliya Pituach"
      title="Boutique CPA firm in the heart of Herzliya Pituach"
      intro="Our office is located in Herzliya Pituach, at the center of Herzliya Pituach business and technology district. We serve local tech companies, startups, foreign R&D centers, professionals and successful families in the Sharon region."
      highlights={[
        "Located in Herzliya Pituach business district",
        "Deep familiarity with local tech ecosystem",
        "In-person and video meetings",
        "Partners with 25+ years of experience",
        "Bilingual practice (Hebrew and English)",
      ]}
      sections={[
        {
          title: "Why local matters",
          body: "Herzliya Pituach is home to Microsoft, Apple, Meta and many of Israel's most important startups and VC funds. Being physically here means we know the ecosystem, work with local counsel and can meet you and your team in person on short notice.",
        },
        {
          title: "Who we serve locally",
          body: "Tech companies (Israeli and foreign R&D centers), startups from seed to growth, professional services firms, private clients and family offices, and freelancers and independent professionals in the Sharon region.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
