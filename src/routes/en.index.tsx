import { createFileRoute } from "@tanstack/react-router";
import { UnifiedHome } from "../components/unified-home";

const BASE = "https://www.nimrodi.co.il";

const FAQS = [
  {
    q: "Where are you located and which regions do you serve?",
    a: "Our office is located in Herzliya Pituach business district. We serve clients in Herzliya, Ramat HaSharon, Ra'anana, Tel Aviv and beyond — as well as remote clients around the world via Zoom and digital collaboration tools.",
  },
  {
    q: "Which accounting services can a company or startup receive?",
    a: "The engagement may include bookkeeping, payroll, financial reporting, annual tax filings, audit support, tax advisory and outsourced CFO services. The services, reporting frequency and responsibilities are defined according to the company’s activity, reporting needs and agreed scope.",
  },
  {
    q: "Do you work with freelancers and self-employed clients starting out?",
    a: "Absolutely. We support freelancers, independent professionals, developers and consultants — from opening files with the authorities, through ongoing reporting to annual returns, Capital Declarations (Asset & Net Worth Reports) and personal tax planning.",
  },
  {
    q: "How much does a CPA service cost?",
    a: "Fees depend on activity volume, number of transactions and required services. We invite you to an introductory discussion, after which the proposed scope and pricing can be explained in advance.",
  },
  {
    q: "Do you handle foreign income, crypto and relocation?",
    a: "Yes. We have experience with Israeli tax and reporting matters involving digital assets, including the organization of transaction data, review of the activity’s classification and preparation of information for relevant filings. Transactions involving virtual currencies may give rise to tax and reporting obligations depending on the nature of the activity, the facts of the transactions, the taxpayer's circumstances, and applicable law. We navigate complex Web3 transactions and assist with preparing documentation and information regarding the source and history of funds for consideration by relevant financial institutions, subject to the bank's policies, compliance procedures, and final decision. We also handle international tax advisory, FBAR/FATCA/CRS reporting, residency severance and advisory for new immigrants and returning residents.",
  },
];

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Nimrodi & Co. CPA – Herzliya Firm for Startups & Foreign Cos" },
      {
        name: "description",
        content:
          "Boutique CPA firm in Herzliya Pituach supporting startups, foreign companies, freelancers and individuals with accounting, tax and reporting. Get in touch.",
      },
      {
        property: "og:title",
        content: "Nimrodi & Co. CPA – Herzliya Firm for Startups & Foreign Cos",
      },
      {
        property: "og:description",
        content:
          "Boutique CPA firm in Herzliya Pituach providing accounting, tax, outsourced financial-management, digital-asset reporting and rental-income tax services.",
      },
      { property: "og:url", content: `${BASE}/en` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomeEn,
});

function HomeEn() {
  return <UnifiedHome lang="en" />;
}
