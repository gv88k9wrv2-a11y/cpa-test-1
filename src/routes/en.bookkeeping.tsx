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
      { name: "description", content: "Professional cloud bookkeeping in Israel. Monthly VAT, withholding tax, management reports and clean books ready for audit. Talk to us." },
      { property: "og:title", content: "Bookkeeping — Nimrodi & Co. CPA" },
      { property: "og:description", content: "Modern digital bookkeeping and monthly reporting for companies and startups in Israel." },
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
        "Full-cycle monthly bookkeeping",
        "VAT filings (Form 874) and withholding tax",
        "Bank & credit card reconciliations",
        "Management dashboards and KPIs",
        "Audit-ready trial balance",
        "Multi-currency and multi-entity",
      ]}
      sections={[
        {
          title: "Bookkeeping Services",
          body: "We handle every touchpoint between transactions and financial statements:",
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
          body: "Monthly management pack including P&L vs. budget, cash flow, A/R aging and KPIs relevant to your business. Quarterly investor updates and annual statements aligned with your auditors.",
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Want cleaner, faster books? Let's talk."
    />
  ),
});
