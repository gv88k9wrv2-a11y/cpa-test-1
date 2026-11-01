import { buildBreadcrumbJsonLd } from "../lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { FileSearch } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-audit.webp";

const BASE = "https://nimrodi.co.il";
const FAQS = [
  {
    q: "How is the applicable financial reporting framework determined?",
    a: "The applicable financial reporting framework depends on the type of entity, its reporting obligations, relevant regulation and the needs of shareholders, lenders or other stakeholders. Financial statements may be prepared under IFRS, Israeli accounting standards or another applicable framework. The firm performs audit services according to the agreed engagement and relevant professional requirements, while management remains responsible for preparing the financial statements.",
  },
  {
    q: "How long does a statutory audit take?",
    a: "The timetable for a statutory audit depends on the entity’s reporting framework, size and complexity, the completeness of the accounting records and supporting documents, and the availability of management to address questions and provide additional information. At the start of the engagement, the required information and expected work schedule are defined according to the company’s circumstances and the agreed scope.",
  },
  {
    q: "What can financial due diligence include for an acquisition, investment or fundraising process?",
    a: "Financial due diligence may include review of accounting and financial information, revenue and profitability analysis, working-capital considerations, tax matters and preparation or organization of transaction-related information. The procedures are determined by the purpose of the transaction, the available information and the agreed engagement scope. Financial due diligence is separate from a financial-statement audit and does not guarantee identification of every risk or missing item.",
  },
];

export const Route = createFileRoute("/en/audit")({
  head: () => ({
    meta: [
      { title: "Audit and Assurance Services in Israel | Nimrodi & Co. CPA" },
      {
        name: "description",
        content:
          "Audit and assurance services in Israel for companies and nonprofits, including statutory audits, IFRS reporting and financial due diligence. Contact the firm.",
      },
      { property: "og:title", content: "Audit and Assurance in Israel | Nimrodi & Co. CPA" },
      {
        property: "og:description",
        content:
          "Audit and assurance in Israel for companies and nonprofits, including statutory audits, IFRS reporting, internal controls and financial due diligence. Contact the firm.",
      },
      { property: "og:url", content: `${BASE}/en/audit` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/audit` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/audit` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/audit` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", url: "https://nimrodi.co.il/en" },
            { name: "Services", url: "https://nimrodi.co.il/en/services" },
            {
              name: "Audit and Assurance Services in Israel",
              url: "https://nimrodi.co.il/en/audit",
            },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Magnifying glass over financial statements"
      icon={FileSearch}
      eyebrow="Audit & Assurance"
      title="Audit and assurance services for companies in Israel"
      intro="Audit and financial reporting requirements depend on the entity, the applicable reporting framework and relevant legal or regulatory obligations. The firm assists in identifying the reporting requirements and performs audit procedures according to the agreed engagement and applicable professional standards. Management remains responsible for preparing the financial statements and providing the information required for the audit."
      highlights={[
        "Statutory audits of financial statements under the applicable reporting framework",
        "Audit services under the applicable reporting framework, including IFRS where relevant",
        "Assessment of relevant financial-reporting controls as part of the agreed audit or a separate engagement",
        "Financial due-diligence support for buy-side and sell-side engagements, based on the agreed scope",
        "Earnings-quality and EBITDA-adjustment analysis within an agreed financial due-diligence scope",
        "Audit and financial-reporting services for Israeli nonprofit organizations, based on the applicable requirements",
      ]}
      sections={[
        {
          id: "non-profits",
          title: "Nonprofit Audit & Public Benefit Organizations (NGOs)",
          body: "Audit and financial reporting for Israeli nonprofits and public benefit organizations depend on the entity’s status, activities, funding sources and applicable requirements. The agreed work may include financial-statement audits, reporting information and review of the presentation of donations and restricted funds. Regulatory approvals remain subject to the relevant authority’s requirements and decisions; an audit does not guarantee approval or identify every compliance issue.",
        },
        {
          id: "internal-controls",
          title: "Internal Controls & Operational Accounting Review",
          body: "Within the agreed engagement, the firm may review financial-reporting controls, accounting workflows, reconciliations and supporting documentation. Matters identified can be communicated to management or those charged with governance, together with practical recommendations where appropriate. A separate operational accounting review is distinct from a statutory audit, and neither engagement guarantees identification of every weakness, risk or irregularity.",
        },
        {
          title: "Audit approach",
          body: "The audit is planned and performed using a risk-based approach under the applicable professional standards. Procedures are designed in response to assessed risks and materiality, with the objective of obtaining reasonable, but not absolute, assurance about the financial statements. Matters requiring communication are addressed with management or those charged with governance as appropriate.",
        },
        {
          title: "IFRS conversion",
          body: "For subsidiaries of foreign parents reporting under IFRS, US GAAP or another group framework, the agreed service may include assistance with reporting information, conversion adjustments and group schedules, in coordination with management and the relevant auditors.",
        },
        {
          id: "due-diligence",
          title: "Financial Due Diligence & M&A Support",
          body: "Financial due-diligence procedures are determined by the purpose of the transaction, the available information and the agreed scope. They may include historical financial analysis, revenue and profitability review, working-capital considerations, tax matters and organization of transaction information. The work does not guarantee identification of every risk or missing item.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
