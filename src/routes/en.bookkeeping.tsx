import { createFileRoute } from "@tanstack/react-router";
import { Calculator } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-bookkeeping.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "Which accounting software do you support?", a: "We work with a range of Israeli and international accounting platforms. The appropriate system and setup depend on the client’s activity, reporting needs, existing systems and the agreed scope of service." },
  { q: "Can you take over from an existing bookkeeper?", a: "Yes. We can assist with the transition from an existing provider, including the review of opening balances, historical reconciliations and available records. The timetable depends on the quality and completeness of the information received." },
  { q: "Do you handle VAT and withholding tax reporting?", a: "Preparation of periodic VAT, withholding-tax and employer reports, together with year-end reconciliations, according to the reporting obligations and the scope of the engagement." },
];

export const Route = createFileRoute("/en/bookkeeping")({
  head: () => ({
    meta: [
      { title: "Bookkeeping Services in Israel | Nimrodi & Co. CPA" },
      { name: "description", content: "Bookkeeping services in Israel for companies and startups, including transaction recording, periodic VAT and withholding reporting and management reports. Contact the firm." },
      { property: "og:title", content: "Bookkeeping — Nimrodi & Co. CPA" },
      { property: "og:description", content: "Cloud bookkeeping and periodic reporting for companies and startups in Israel, including VAT, withholding and management reports. Contact the firm." },
      { property: "og:url", content: `${BASE}/en/bookkeeping` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/bookkeeping` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/bookkeeping` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/bookkeeping` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Bookkeeping workstation with financial dashboard screens"
      icon={Calculator}
      eyebrow="Bookkeeping"
      title="Digital Bookkeeping for Companies and Self-Employed Businesses"
      intro="Digital bookkeeping services for companies and self-employed businesses, using systems selected according to the nature of the activity and the scope of the engagement. Services may include document capture, reconciliations, periodic reporting and management information."
      highlights={[
        "Monthly bookkeeping services according to the agreed scope",
        "Preparation of VAT and withholding-tax reporting information according to the applicable requirements",
        "Bank & credit card reconciliations",
        "Management dashboards and KPIs",
        "Trial-balance preparation and supporting reconciliations for the agreed reporting process",
        "Multi-currency and multi-entity",
      ]}
      sections={[
        {
          title: "Bookkeeping Services",
          body: "Services may cover the following accounting processes, according to the engagement:",
          bullets: [
            "Vendor invoice capture, approvals and payments",
            "Customer invoicing, collections tracking and A/R",
            "Payroll integration and employee reimbursements",
            "Monthly close with reconciliations and accruals",
            "VAT, withholding tax and annual reconciliations",
            "IFRS / Israeli GAAP presentation-ready reports",
          ],
        },
        {
          title: "Cloud stack & automation",
          body: "We use digital accounting platforms selected according to the client’s needs and the scope of the engagement. Available services may include document capture, accounts-payable workflows, reconciliations and management reporting.",
        },
        {
          title: "Reporting cadence",
          body: "Periodic management reporting may include profit-and-loss information, budget comparisons, cash-flow information, receivables aging and agreed KPIs, based on the available records and engagement scope. The content, frequency and coordination with auditors are agreed separately.",
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Discuss your bookkeeping and reporting needs with us."
    />
  ),
});
