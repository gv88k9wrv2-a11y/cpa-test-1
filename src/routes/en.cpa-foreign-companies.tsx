import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-foreign.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "Subsidiary or branch — which is better?", a: "A subsidiary and a branch differ in legal status, accounting, tax, employment and reporting. The appropriate structure depends on the planned activity, scale, funding, liability considerations, treaty position and group plans. The firm can assist with the Israeli accounting and tax analysis, while legal aspects should be reviewed with qualified counsel." },
  { q: "How long does it take to set up an Israeli subsidiary?", a: "The timetable depends on the proposed structure, the completeness of the documents, identification requirements and the processing times of the relevant authorities. Bank-account onboarding for a foreign-owned entity depends on the ownership structure, KYC information, source-of-funds documentation and the bank’s review. The firm can assist with the Israeli accounting and tax information and coordinate with legal and banking professionals within the agreed scope." },
  { q: "Do you handle Israeli banking regulation?", a: "Bank-account onboarding, incoming funds and foreign-currency activity may require accounting, tax, ownership and source-of-funds information under the bank’s procedures and applicable rules. The firm can assist with preparing the relevant accounting and tax information. Account approval, KYC requirements and banking decisions remain subject to the bank’s review and discretion." },
  { q: "What is Transfer Pricing and why does it matter?", a: "Transfer pricing concerns the pricing and terms of transactions between related parties. The applicable analysis, documentation and filing requirements depend on the entities, transactions, functions, assets, risks and rules in effect for the relevant period. The firm can assist with the Israeli transfer-pricing analysis and documentation within the agreed scope." },
  { q: "What is Permanent Establishment (PE) risk?", a: "Permanent-establishment risk depends on the facts, the relevant tax treaty and applicable law, including the nature, duration and authority of the activity in Israel. The position should be reviewed with qualified Israeli and foreign tax and legal advisers. The firm can assist with the Israeli accounting and tax information within the agreed scope." },
  { q: "Can we pay Israeli developers without opening a branch?", a: "Possible arrangements may include an Employer of Record, engagement with an independent contractor or employment through an Israeli entity. The appropriate arrangement depends on the working relationship, duration and scale of activity, control, classification risk, cost and legal requirements. Each option should be reviewed with qualified employment-law and tax advisers." },
  { q: "What Israeli tax benefits are available to foreign-owned subsidiaries?", a: "A foreign-owned Israeli company may be eligible for tax-incentive programs or Israel Innovation Authority support, depending on its activity, ownership, program conditions, required approvals and the law in effect at the relevant time. The firm can assist with assessing potential eligibility and preparing the relevant financial and tax information within the agreed scope." },
];

export const Route = createFileRoute("/en/cpa-foreign-companies")({
  head: () => ({
    meta: [
      { title: "Foreign Companies in Israel | Subsidiary & Branch | Nimrodi" },
      { name: "description", content: "Israeli CPA services for foreign companies, including subsidiary-or-branch considerations, payroll, transfer-pricing analysis and Israeli reporting information. Contact the firm." },
      { property: "og:title", content: "Foreign Companies in Israel — Nimrodi & Co." },
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
      heroImageAlt="Office tower with international company flags"
      icon={Globe2}
      eyebrow="Foreign Companies in Israel"
      title="Accounting, tax and financial support for international companies operating in Israel"
      intro="Foreign companies operating in Israel may require accounting, tax, payroll and financial-reporting support. We assist with the Israeli accounting and tax aspects of the proposed structure and ongoing activity, with additional qualified advisers involved where required."
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
          title: "Reviewing possible operating structures",
          body: "Possible operating structures may include an Israeli subsidiary, branch, Employer of Record or another arrangement. The accounting and tax review depends on the planned activity, scale, treaty position, intellectual-property arrangements, employment model and future plans. Legal aspects are reviewed separately with qualified counsel.",
        },
        {
          title: "Accounting and tax support for the setup process",
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
          title: "Transfer Pricing & BEPS compliance",
          body: "For companies with material intra-group transactions, the firm may assist with transfer-pricing analysis and documentation according to the entities, transactions, functions, assets, risks, available information and requirements applicable to the relevant period:",
          bullets: [
            "Benchmarking and comparable-data review according to the agreed transfer-pricing scope",
            "Review of the appropriate method based on the activity, available data and applicable transfer-pricing rules",
            "Functional analysis — functions, assets and risks",
            "Local File and Master File under BEPS Action 13",
            "Country-by-Country Reporting (CbCR) coordination",
            "Periodic updates and accounting and tax support in discussions with the Israel Tax Authority",
          ],
        },
        {
          title: "Cross-Border IP Tax Structuring",
          body: "The location of a group's intellectual property is one of the most consequential tax decisions — it drives effective tax rate, royalty flows and eventual Exit valuation. We assist in reviewing the accounting and tax aspects of proposed IP structures in Israel and abroad, with qualified legal and other professional advisers involved where required:",
          bullets: [
            "Review of accounting and tax considerations for proposed intellectual-property locations, with local advisers involved where required",
            "Transfer-pricing analysis and documentation for intra-group technology, intellectual-property and service transactions",
            "Assessment of BEPS-related substance, DEMPE functions and transfer-pricing documentation requirements where applicable",
            "Financial and transfer-pricing analysis of intra-group cost-sharing arrangements, with legal documentation coordinated separately",
            "Financial and tax analysis of royalty models, with coordination of intellectual-property agreements with legal counsel",
            "Support with tax ruling requests and related documentation for cross-border intellectual-property transactions",
            "Review of royalty withholding-tax treatment and potential treaty relief under the applicable rules",
          ],
        },
        {
          title: "Israeli tax incentives for multinationals",
          body: "Foreign-owned Israeli subsidiaries may be eligible for Israeli tax incentives and IIA support, subject to the applicable program, eligibility conditions, required approvals and the law in effect at the relevant time:",
          bullets: [
            "Assessment of potential eligibility for Preferred Technological Enterprise tax benefits under the applicable rules",
            "Review of dividend taxation and potential relief under the applicable incentive regime and tax rules",
            "Review of the accounting and tax treatment of research and development costs under the applicable rules",
            "Financial support for IIA grant applications and related reporting, subject to the applicable program, eligibility criteria and required approvals",
            "Analysis of treaty eligibility, taxing rights and foreign-tax-credit considerations",
          ],
        },
        {
          title: "Fractional CFO for foreign companies in Israel",
          body: "Foreign groups operating in Israel may require local financial reporting, budgeting, payroll coordination and communication with headquarters. Subject to the agreed scope and applicable independence requirements, the firm can provide fractional CFO support and coordinate with the company’s accounting, tax, audit and legal advisers.",
          bullets: [
            "Local controller and fractional CFO support for the company’s Israeli operations",
            "Periodic financial reporting to overseas headquarters in the agreed format and reporting currency",
            "Local budgeting, monitoring and variance analysis based on the agreed group-reporting framework",
            "Coordination of financial information for Israeli banking, insurance and regulatory processes within the agreed scope",
            "Preparation and coordination of financial information for statutory and group-audit processes, subject to applicable independence requirements",
            "Financial preparation and information support for M&A, carve-out or wind-down processes within the agreed scope",
          ],
        },
      ]}

      govPortals={{
        title: "Foreign Corporate Registration & Israeli Tax Compliance",
        links: [
          { label: "Registration of a Foreign Company / Israeli Branch", href: "https://www.gov.il/en/departments/ministry_of_justice" },
          { label: "Israel International Taxation Unit & Treaties", href: "https://www.gov.il/en/departments/israel_tax_authority" },

        ],
      }}
      faqs={FAQS}
      ctaHeadline="Planning to operate in Israel? Contact us to discuss the proposed activity and service scope."
    />
  ),
});
