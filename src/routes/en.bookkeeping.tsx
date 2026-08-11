import { createFileRoute } from "@tanstack/react-router";
import { Calculator } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-bookkeeping.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "Which bookkeeping and accounting software do you support in Israel?", a: "We work with Israeli and international bookkeeping and accounting platforms. The appropriate software and setup depend on the company’s activity, Israeli reporting requirements, existing systems, and the agreed service scope." },
  { q: "Can you transfer our Israeli bookkeeping from another provider?", a: "We can assist with transferring Israeli bookkeeping from another provider, including reviewing opening balances, historical reconciliations, and available accounting records. The process depends on the completeness and quality of the information received." },
  { q: "Do you prepare Israeli VAT and withholding tax reports?", a: "The service may include preparing periodic Israeli VAT, withholding tax, and employer reports, together with year-end reconciliations, according to the applicable reporting obligations and agreed scope." },
];

export const Route = createFileRoute("/en/bookkeeping")({
  head: () => ({
    meta: [
      { title: "Bookkeeping for Companies in Israel | Nimrodi & Co. CPA" },
      { name: "description", content: "Bookkeeping services in Israel for companies and startups, including transaction recording, periodic VAT and withholding reporting and management reports. Contact the firm." },
      { property: "og:title", content: "Bookkeeping Services in Israel | Nimrodi & Co. CPA" },
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
      heroImageAlt="Israeli bookkeeping and accounting workstation with financial reporting dashboards"
      icon={Calculator}
      eyebrow="Bookkeeping Services in Israel"
      title="Digital Bookkeeping Services for Companies and Businesses in Israel"
      intro="Digital bookkeeping services for companies, startups, and independent businesses in Israel. Services may include document capture, bank and credit card reconciliations, VAT reporting, withholding tax reporting, and management information, according to the activity and agreed scope."
      highlights={[
        "Monthly bookkeeping services for Israeli companies and businesses",
        "Preparation of Israeli VAT and withholding tax reporting information",
        "Bank and credit card reconciliations",
        "Management reporting, financial dashboards, and agreed KPIs",
        "Trial balance preparation and supporting reconciliations for financial reporting",
        "Multi-currency and multi-entity bookkeeping support",
      ]}
      sections={[
        {
          title: "Bookkeeping Services",
          body: "Israeli bookkeeping services may include the following accounting and reporting processes, according to the agreed engagement:",
          bullets: [
            "Vendor invoice capture, approval workflows, and payment information",
            "Customer invoicing, collection tracking, and accounts receivable",
            "Payroll accounting integration and employee expense reimbursements",
            "Monthly accounting close, reconciliations, and accrual entries",
            "Israeli VAT, withholding tax, and year-end reconciliations",
            "Accounting information prepared for IFRS or Israeli GAAP reporting",
          ],
        },
        {
          title: "Cloud Bookkeeping and Accounting Automation",
          body: "Digital bookkeeping platforms are selected according to the client’s activity, systems, Israeli reporting needs, and agreed scope. Services may include document capture, accounts payable workflows, reconciliations, and management reporting.",
        },
        {
          title: "Periodic Management Reporting",
          body: "Periodic management reporting may include profit and loss information, budget comparisons, cash flow data, accounts receivable aging, and agreed KPIs. The content, reporting frequency, and coordination with auditors depend on the available records and agreed scope.",
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Discuss your Israeli bookkeeping, VAT, and management reporting needs with our CPA firm."
    />
  ),
});
