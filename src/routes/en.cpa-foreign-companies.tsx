import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-foreign.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "Subsidiary or branch — which is better?", a: "Each has trade-offs. An Israeli subsidiary (Ltd) is a separate legal entity with limited liability and 23% corporate tax. A branch extends the foreign parent — simpler to set up but exposes the parent to Israeli tax and liability. The choice depends on scale, home-country tax treaties and roadmap." },
  { q: "How long does it take to set up an Israeli subsidiary?", a: "The timetable depends on the proposed structure, the completeness of the documents, identification requirements and the processing times of the relevant authorities. Bank-account onboarding for a foreign-owned entity depends on the ownership structure, KYC information, source-of-funds documentation and the bank’s review. The firm can assist with the Israeli accounting and tax information and coordinate with legal and banking professionals within the agreed scope." },
  { q: "Do you handle Israeli banking regulation?", a: "Bank-account onboarding, incoming funds and foreign-currency activity may require accounting, tax, ownership and source-of-funds information under the bank’s procedures and applicable rules. The firm can assist with preparing the relevant accounting and tax information. Account approval, KYC requirements and banking decisions remain subject to the bank’s review and discretion." },
  { q: "What is Transfer Pricing and why does it matter?", a: "Transfer pricing concerns the pricing and terms of transactions between related parties. The applicable analysis, documentation and filing requirements depend on the entities, transactions, functions, assets, risks and rules in effect for the relevant period. The firm can assist with the Israeli transfer-pricing analysis and documentation within the agreed scope." },
  { q: "What is Permanent Establishment (PE) risk?", a: "If the foreign parent has meaningful presence in Israel — an office, a fixed employee closing deals, a central warehouse — it may be deemed to operate in Israel and become subject to Israeli corporate tax on that activity. Proper structuring (EOR, local Service Company where appropriate) helps reduce unintended PE risk." },
  { q: "Can we pay Israeli developers without opening a branch?", a: "Yes — three options: (1) EOR (Employer of Record) — fast but expensive; (2) independent contractor — simple but limited by misclassification risk; (3) an Israeli subsidiary — higher setup cost but cheapest long-term and full control. We model the crossover point." },
  { q: "What Israeli tax benefits are available to foreign-owned subsidiaries?", a: "A foreign-owned Israeli company may be eligible for tax-incentive programs or Israel Innovation Authority support, depending on its activity, ownership, program conditions, required approvals and the law in effect at the relevant time. The firm can assist with assessing potential eligibility and preparing the relevant financial and tax information within the agreed scope." },
];

export const Route = createFileRoute("/en/cpa-foreign-companies")({
  head: () => ({
    meta: [
      { title: "Foreign Companies in Israel | Subsidiary & Branch | Nimrodi" },
      { name: "description", content: "Israeli CPA for foreign companies: subsidiary or branch setup, banking KYC, payroll, Transfer Pricing and cross-border IP. Book a consultation." },
      { property: "og:title", content: "Foreign Companies in Israel — Nimrodi & Co." },
      { property: "og:description", content: "Comprehensive onboarding for international companies entering the Israeli market — entity, payroll, TP and IP." },
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
          title: "Choosing the right structure",
          body: "The structural decision comes first. We analyze the options — Israeli subsidiary, branch, or EOR — considering planned scale, home country, treaty network, IP roadmap and future funding.",
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
          title: "Global Payroll & Israeli labor law",
          body: "Employing in Israel means compliance with a dense set of local labor obligations — every one of which we manage as your local finance function:",
          bullets: [
            "Monthly payslips compliant with Israeli labor law",
            "Pension, severance and study fund contributions",
            "Reporting to Bituach Leumi and income tax withholding",
            "Executive compensation, options (Section 102 – Equity & ESOP Incentive Plans) and equity awards",
            "Termination, severance settlements and Form 161 filings",
            "Global payroll coordination with parent HR systems",
          ],
        },
        {
          title: "Ongoing management & parent reporting",
          body: "After setup we operate as your local finance team — day-to-day bookkeeping, VAT and tax filings, monthly payroll, quarterly reporting packs to the parent, and annual audited financial statements aligned to the group's US GAAP or IFRS reporting standard.",
        },
        {
          title: "Transfer Pricing & BEPS compliance",
          body: "For companies with material intra-group transactions we prepare Transfer Pricing studies compliant with OECD guidelines and Section 85A of the Israeli Income Tax Ordinance. Robust documentation supports the company's position in discussions with the ITA:",
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
