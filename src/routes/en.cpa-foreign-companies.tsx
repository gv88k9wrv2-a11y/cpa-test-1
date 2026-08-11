import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-foreign.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "Israeli subsidiary or branch: which structure may suit a foreign company?", a: "A subsidiary and a branch differ in legal status, accounting, tax, employment and reporting. The appropriate structure depends on the planned activity, scale, funding, liability considerations, treaty position and group plans. The firm can assist with the Israeli accounting and tax analysis, while legal aspects should be reviewed with qualified counsel." },
  { q: "How long does it take to set up an Israeli subsidiary?", a: "The timetable depends on the proposed structure, the completeness of the documents, identification requirements and the processing times of the relevant authorities. Bank-account onboarding for a foreign-owned entity depends on the ownership structure, KYC information, source-of-funds documentation and the bank’s review. The firm can assist with the Israeli accounting and tax information and coordinate with legal and banking professionals within the agreed scope." },
  { q: "Do you handle Israeli banking regulation?", a: "Bank-account onboarding, incoming funds and foreign-currency activity may require accounting, tax, ownership and source-of-funds information under the bank’s procedures and applicable rules. The firm can assist with preparing the relevant accounting and tax information. Account approval, KYC requirements and banking decisions remain subject to the bank’s review and discretion." },
  { q: "What is transfer pricing in Israel and why does it matter?", a: "Transfer pricing concerns the pricing and terms of transactions between related parties. The applicable analysis, documentation and filing requirements depend on the entities, transactions, functions, assets, risks and rules in effect for the relevant period. The firm can assist with the Israeli transfer-pricing analysis and documentation within the agreed scope." },
  { q: "What is permanent establishment risk for a foreign company in Israel?", a: "Permanent-establishment risk depends on the facts, the relevant tax treaty and applicable law, including the nature, duration and authority of the activity in Israel. The position should be reviewed with qualified Israeli and foreign tax and legal advisers. The firm can assist with the Israeli accounting and tax information within the agreed scope." },
  { q: "Can we pay Israeli developers without opening a branch?", a: "Possible arrangements may include an Employer of Record, engagement with an independent contractor or employment through an Israeli entity. The appropriate arrangement depends on the working relationship, duration and scale of activity, control, classification risk, cost and legal requirements. Each option should be reviewed with qualified employment-law and tax advisers." },
  { q: "What Israeli tax benefits are available to foreign-owned subsidiaries?", a: "A foreign-owned Israeli company may be eligible for tax-incentive programs or Israel Innovation Authority support, depending on its activity, ownership, program conditions, required approvals and the law in effect at the relevant time. The firm can assist with assessing potential eligibility and preparing the relevant financial and tax information within the agreed scope." },
];

export const Route = createFileRoute("/en/cpa-foreign-companies")({
  head: () => ({
    meta: [
      { title: "CPA Services for Foreign Companies in Israel | Subsidiary and Branch Accounting" },
      { name: "description", content: "Israeli CPA services for foreign companies, including subsidiary-or-branch considerations, payroll, transfer-pricing analysis and Israeli reporting information. Contact the firm." },
      { property: "og:title", content: "Foreign Companies in Israel | Nimrodi & Co. CPA" },
      { property: "og:description", content: "Accounting and tax support for international companies operating in Israel, including structure information, payroll, transfer pricing and reporting. Contact the firm." },
      { property: "og:url", content: `${BASE}/en/cpa-foreign-companies` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-foreign-companies` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-foreign-companies` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-foreign-companies` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Foreign company accounting and tax services in Israel"
      icon={Globe2}
      eyebrow="Foreign Companies in Israel"
      title="Accounting and Tax Services for Foreign Companies Operating in Israel"
      intro="Foreign companies operating in Israel may require local accounting, tax, payroll, transfer pricing, and financial reporting services. We assist with the Israeli accounting and tax aspects of a subsidiary, branch, or other proposed structure, with qualified advisers involved where required."
      highlights={[
        "Review of Israeli subsidiary or branch structures and support with registration preparation",
        "Preparation of accounting and tax information for bank and KYC processes, subject to the bank’s requirements and review",
        "Israeli payroll administration and coordination with qualified employment-law advisers where required",
        "Transfer-pricing analysis and documentation requirements based on the group’s circumstances",
        "Group-reporting support under the framework applicable to the parent company",
        "Accounting and tax analysis for proposed cross-border intellectual-property structures",
        "Preparation of applicable Israeli tax and corporate reporting information within the agreed scope",
        "Assessment of eligibility for Preferred Technological Enterprise tax benefits",
      ]}
      sections={[
        {
          title: "Israeli Subsidiary, Branch, and Operating Structure Review",
          body: "Possible operating structures may include an Israeli subsidiary, branch, Employer of Record or another arrangement. The accounting and tax review depends on the planned activity, scale, treaty position, intellectual-property arrangements, employment model and future plans. Legal aspects are reviewed separately with qualified counsel.",
        },
        {
          title: "Accounting and Tax Support for Setting Up Operations in Israel",
          body: "Once the proposed structure has been selected, we can assist with the accounting, tax and reporting aspects:",
          bullets: [
            "Preparation of accounting and tax information required for the registration process, with legal registration handled by qualified legal counsel",
            "Registration with VAT, ITA and Bituach Leumi",
            "Support in preparing information for bank-account and KYC review, subject to the bank’s requirements and discretion",
            "Employer registration and payroll setup",
            "Accounting system tailoring for the entity's needs",
          ],
        },
        {
          title: "Global payroll coordination for Israeli operations",
          body: "Employing personnel in Israel may involve payroll, tax, pension, insurance and employment-law requirements. The agreed service may include the following payroll and reporting activities, while legal, pension and insurance advice is coordinated separately:",
          bullets: [
            "Monthly payroll calculations and payslips based on employer-approved information and applicable reporting requirements",
            "Pension, severance and study fund contributions",
            "Reporting to Bituach Leumi and income tax withholding",
            "Executive compensation, options (Section 102 – Equity & ESOP Incentive Plans) and equity awards",
            "Termination, severance settlements and Form 161 filings",
            "Global payroll coordination with parent HR systems",
          ],
        },
        {
          title: "Ongoing management & parent reporting",
          body: "After setup, the agreed services may include bookkeeping, payroll coordination, tax reporting and group-reporting information. Responsibilities for financial statements, management decisions and external audit are defined separately and remain subject to applicable independence requirements.",
        },
        {
          title: "Israeli Transfer Pricing and BEPS Documentation",
          body: "For foreign companies in Israel with material related-party transactions, the firm may assist with Israeli transfer pricing analysis and documentation based on the entities, transactions, functions, assets, risks, available information, and rules applying to the relevant period:",
          bullets: [
            "Transfer pricing benchmarking and comparable-company data review within the agreed scope",
            "Review of the transfer pricing method based on the activity, available data, and applicable Israeli rules",
            "Transfer pricing functional analysis of functions, assets, and risks",
            "Local File and Master File documentation under BEPS Action 13",
            "Country-by-Country Reporting and CbCR coordination",
            "Periodic transfer pricing updates and accounting support in discussions with the Israel Tax Authority",
          ],
        },
        {
          title: "Cross-Border Intellectual Property Tax Analysis",
          body: "The location and use of a group's intellectual property may affect its effective tax rate, royalty flows, transfer pricing, and transaction analysis. We assist with the Israeli accounting and tax review of proposed intellectual property structures in Israel and abroad, with qualified legal and other advisers involved where required:",
          bullets: [
            "Review of Israeli accounting and tax considerations for proposed intellectual property locations",
            "Transfer pricing analysis for related-party technology, intellectual property, and service transactions",
            "Assessment of BEPS substance, DEMPE functions, and transfer pricing documentation requirements",
            "Financial and transfer pricing analysis of related-party cost-sharing arrangements",
            "Financial and Israeli tax analysis of royalty models, with legal agreements coordinated separately",
            "Support with Israeli tax ruling requests for cross-border intellectual property transactions",
            "Review of Israeli royalty withholding tax and potential tax treaty relief",
          ],
        },
        {
          title: "Israeli Tax Incentives for Foreign-Owned Companies",
          body: "Foreign-owned Israeli subsidiaries may qualify for Israeli tax incentives or Israel Innovation Authority support, subject to the relevant program, eligibility conditions, required approvals, and law applying at the relevant time:",
          bullets: [
            "Assessment of potential eligibility for Preferred Technological Enterprise tax benefits in Israel",
            "Review of Israeli dividend taxation and potential relief under the applicable incentive regime",
            "Review of Israeli accounting and tax treatment for research and development costs",
            "Financial information support for Israel Innovation Authority grant applications and reporting",
            "Analysis of tax treaty eligibility, taxing rights, and foreign tax credit considerations",
          ],
        },
        {
          title: "Fractional CFO Services for Foreign Companies in Israel",
          body: "Foreign groups operating in Israel may require local financial reporting, budgeting, payroll coordination, and communication with overseas headquarters. Subject to the agreed scope and independence requirements, the firm can provide fractional CFO services and coordinate with the company’s accounting, tax, audit, and legal advisers.",
          bullets: [
            "Local controller and fractional CFO services for Israeli operations",
            "Periodic financial reporting to overseas headquarters in the agreed format and currency",
            "Israeli budgeting, financial monitoring, and variance analysis under the group reporting framework",
            "Coordination of financial information for Israeli banking, insurance, and regulatory processes",
            "Preparation of financial information for Israeli statutory and group audit processes",
            "Financial information support for M&A, carve-out, or wind-down processes in Israel",
          ],
        },
      ]}

      govPortals={{
        title: "Foreign Company Registration and Israeli Tax Compliance",
        links: [
          { label: "Registration of a Foreign Company or Israeli Branch", href: "https://www.gov.il/en/departments/ministry_of_justice" },
          { label: "Israel Tax Authority: International Taxation and Tax Treaties", href: "https://www.gov.il/en/departments/israel_tax_authority" },

        ],
      }}
      faqs={FAQS}
      ctaHeadline="Planning business operations in Israel? Contact our CPA firm to discuss accounting, tax, payroll, transfer pricing, and reporting needs."
    />
  ),
});
