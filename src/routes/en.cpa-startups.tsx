import { createFileRoute, Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-startups.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "When does a startup need a CPA?", a: "Accounting and tax input may be useful before or shortly after incorporation, depending on the proposed structure, jurisdictions, financing plans, founders’ arrangements and equity-compensation model. US legal and tax matters should be reviewed with appropriately qualified US advisers." },
  { q: "Do you support fundraising rounds?", a: "Depending on the engagement scope, the firm may assist with financial models, organization of financial and tax information, and coordination with the company’s legal and other professional advisers. Legal documents and transaction structure remain the responsibility of qualified legal advisers, and no particular tax outcome is guaranteed." },
  { q: "Can you handle an Israel–Delaware Flip?", a: "We can assist with the Israeli accounting and tax aspects of a proposed Israel–Delaware restructuring, including assessing the need for an advance tax-ruling application, coordinating with legal and U.S. advisers and reviewing post-transaction transfer-pricing requirements." },
  { q: "What is Section 102 (Equity & ESOP Incentive Plans) and how does it work?", a: "Employee equity arrangements may involve Israeli tax, reporting, valuation and legal considerations. Within the agreed scope, the firm may assist with the Israeli accounting and tax analysis, preparation of relevant information and coordination with the company’s legal advisers, trustee and other professionals. The applicable route and tax treatment depend on the plan, the recipient, the statutory conditions and the circumstances of the realization." },
  { q: "What is the Preferred Technological Enterprise regime?", a: "Companies that meet the applicable statutory conditions may be eligible for tax benefits under the Capital Investments Encouragement Law. The firm may assist with an initial eligibility review and preparation of relevant accounting and tax information. Eligibility, the applicable rate and acceptance of the company’s position depend on the law, the facts and the decisions of the relevant authorities." },
  { q: "What is a 409A Valuation and why does it matter?", a: "US equity-compensation arrangements may require a current fair-market-value assessment under applicable US rules. The required timing, method and potential consequences depend on the company’s circumstances and should be confirmed with qualified US legal and tax advisers. We can assist with the Israeli accounting and tax aspects and coordinate information with the company’s US advisers within the agreed scope." },
  { q: "How should we build the Cap Table for investors?", a: "A clear capitalization table can help founders and investors understand ownership and dilution. Depending on the scope of the engagement, we can assist with capitalization-table data, option-pool information and dilution scenarios using the company’s selected platform." },
  { q: "What is a secondary transaction, and what tax risks may arise?", a: "A Secondary is a sale of founder or employee shares to an existing or new investor. The accounting and tax treatment depends on the seller, the instrument, the transaction terms, the applicable plan and the relevant law. Where appropriate, the need for an advance tax-ruling request may be considered with the company’s legal and tax advisers." },
];

export const Route = createFileRoute("/en/cpa-startups")({
  head: () => ({
    meta: [
      { title: "CPA for Startups Israel | Section 102 & Delaware Flip" },
      { name: "description", content: "CPA services for Israeli startups, including bookkeeping, payroll, employee-equity matters, financial reporting and audit support. Contact the firm to discuss." },
      { property: "og:title", content: "CPA for Startups — Nimrodi & Co." },
      { property: "og:description", content: "Accounting, tax and CFO support for Israeli startups, including reporting, financial models and investor information according to the agreed scope. Contact the firm." },
      { property: "og:url", content: `${BASE}/en/cpa-startups` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-startups` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-startups` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-startups` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Modern startup office in Herzliya Pituach"
      icon={Rocket}
      eyebrow="Startups & Technology Ventures"
      title="CPA Services for Startups in Israel"
      intro="Nimrodi & Co. provides accounting, tax and financial support to startups at different stages, from company formation and ongoing reporting to fundraising, international activity and due-diligence preparation."
      highlights={[
        "Accounting, tax and financial support for SAFEs, convertible instruments and priced funding rounds",
        "Assessment of Section 102 routes and trustee requirements for employee equity plans",
        "Accounting support for share-based payments and coordination of 409A valuation information where relevant",
        "Israel–Delaware Flip and cross-border reorganizations",
        "Assessment of eligibility for Preferred Technological Enterprise tax benefits",
        "IIA / Israel Innovation Authority grants and financial audits",
        "Secondary transactions — founder and employee liquidity",
        "Capitalization-table support using the company’s selected platform",
        "Financial due-diligence and earnings-quality analysis for proposed investment or transaction processes",
      ]}
      sections={[
        {
          title: "Accounting, Tax and Financial Services",
          body: "Accounting, tax and financial support can be tailored to the startup’s stage, activity and agreed scope:",
          bullets: [
            "Accounting and tax input for company formation and structure, coordinated with the startup’s legal advisers",
            "Digital bookkeeping on modern cloud accounting platforms",
            "Financial-reporting support under the framework applicable to the startup, including IFRS or US GAAP where relevant",
            "Corporate and founder tax planning",
            "IIA grants, R&D incentives and Chief Scientist programs",
            "Preparation and organization of financial information for due diligence and fundraising processes",
          ],
        },
        {
          title: "Stage-by-stage support",
          body: "The relevant accounting and financial priorities vary according to the company’s stage, reporting obligations, internal resources and planned transactions:",
          bullets: [
            "Pre-Seed: entity setup, structure, vesting, 83(b) elections",
            "Seed: books, cash management, financial model, Section 102 foundation",
            "Series A: reporting-framework assessment, budgeting and board-information support",
            "Growth: Transfer Pricing, global expansion, Preferred Enterprise filing",
            "Exit / IPO: data room, DD support, founder and employee tax",
          ],
        },
        {
          title: "Israel–Delaware Corporate Flip",
          body: "An Israeli startup may consider an Israel–Delaware Flip in connection with US investment or a change in its group structure. The process can involve Israeli and US tax, accounting and legal considerations. Within the agreed scope, the firm can assist with the Israeli accounting and tax analysis, preparation of information for a tax ruling request, and coordination with the company’s legal and US tax advisers. The suitability and implementation of the structure depend on the company, its shareholders, planned activity and applicable law.",
        },
        {
          title: "Section 102 ESOP and 409A Valuation Support for Startups",
          body: "Employee equity arrangements may involve Israeli tax, financial-reporting, valuation and legal considerations. The appropriate Section 102 route, accounting treatment and potential need for a 409A valuation depend on the recipient, the instrument, the plan terms, the company’s reporting framework and the circumstances of the grant. Within the agreed scope, the firm can assist with the Israeli accounting and tax analysis, organize the relevant information and coordinate with the company’s legal advisers, trustee, valuation professionals and US advisers where required:",
          bullets: [
            "Assessment of Israeli Section 102 option routes based on the plan and grant circumstances",
            "Coordination of startup financial information for a 409A valuation by qualified valuation professionals",
            "Share-based payment accounting under IFRS 2 or ASC 718, according to the startup’s reporting framework",
            "Review of Israeli tax and reporting considerations for employees exercising or selling startup equity",
            "Coordination of relevant information with the trustee, plan administrator and other professional advisers where required",
          ],
        },
        {
          title: "Preferred Technological Enterprise and Israeli Startup Tax Incentives",
          body: "Companies that meet the applicable statutory conditions may be eligible for tax benefits under the Capital Investments Encouragement Law. Within the agreed scope, the firm can assist with an initial eligibility review, preparation of accounting and tax information, and relevant filings. Eligibility, the applicable rate and acceptance of the company’s position remain subject to the law, the facts and the decisions of the relevant authorities:",
          bullets: [
            "Assessment of startup eligibility for Preferred Technological Enterprise tax benefits in Israel",
            "Assessment of potential eligibility for Special Preferred Technological Enterprise tax benefits in Israel",
            "Israeli Angels Law review for qualifying startup investments and R&D expenditure",
            "Financial information support for Israel Innovation Authority grant applications and reporting",
            "Review of the accounting and tax treatment of research and development costs and distributions under the applicable rules",
          ],
        },
        {
          title: "Secondary Share Transactions for Startup Founders and Employees",
          body: "A Secondary — sale of founder or employee shares to an existing or new investor — is a valuable early-liquidity opportunity but carries significant tax risk. Misclassification can materially affect the effective tax rate. We assist founders and employees in reviewing the accounting and tax considerations relevant to the proposed transaction:",
          bullets: [
            "Assessment of the applicable Israeli Section 102 route before a secondary transaction",
            "Secondary transaction structures including direct sale, tender offer, and trustee-led aggregation",
            "Accounting and Israeli tax treatment of escrow, holdback, and clawback provisions",
            "Support with tax ruling requests and related financial information for material transactions where relevant",
            "Employee tax reporting, Form 106 information, and Section 102 trustee coordination",
            "Review of the founder’s individual Israeli tax circumstances, potentially relevant reliefs and reporting obligations.",
          ],
        },
        {
          title: "Startup Funding Structures: SAFE, Convertible Loans, and Conversions",
          body: "SAFE and convertible-loan arrangements may create accounting, tax, valuation and legal issues that depend on their terms and the company’s reporting framework. Legal documents should be prepared and approved by the company’s legal advisers. Within the agreed scope, the firm can assist with the accounting and Israeli tax analysis and with organizing information for the company and its advisers:",
          bullets: [
            "SAFE financing terms including valuation cap, discount, MFN, and pro rata rights",
            "Convertible loan accounting for interest, maturity, and automatic or optional conversion",
            "SAFE and convertible loan accounting under IFRS 9, with any application of U.S. GAAP, including ASC 480, confirmed with appropriately qualified U.S. advisers.",
            "Conversion scenarios and fully diluted ownership impact at the next funding round",
            "Israeli tax considerations for the company and investor, with any U.S. tax matters, including FIRPTA and Section 1202 QSBS, reviewed by appropriately qualified U.S. advisers.",
            "Coordination of financial information for side letters, consent processes and other transaction documents prepared by legal counsel",
          ],
        },
        {
          title: "Startup Fundraising Readiness and Investor Financial Information",
          body: "Before a priced funding round or other transaction, the company may need to organize financial, tax, corporate and commercial information requested by investors and advisers. The firm can assist with the financial and tax information and coordinate with the company’s legal and other professional advisers within the agreed scope:",
          bullets: [
            "Review of fully diluted startup capitalization data, including SAFEs, convertible instruments, and the option pool",
            "Startup financial statements and supporting information for investor due diligence",
            "Israeli Section 102 option plan information, ITA approval, and active trustee details",
            "Documented transfer pricing policy between the Israeli startup and related companies",
            "Founder agreements, Vesting and Cliff documentation prepared and confirmed by the company’s legal advisers",
            "Key customer contracts and Change-of-Control provisions reviewed by the company’s legal advisers",
            "Organization of available tax records and identification of open assessments, balances and matters requiring follow-up",
          ],
        },
        {
          title: "Fractional CFO Services for Startups in Israel",
          body: (
            <>
              Growth-stage companies may require senior financial support before appointing a full-time CFO. Depending on the company’s needs and the agreed engagement scope, services may include <Link to="/en/fractional-cfo" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">Fractional CFO support</Link>. Companies with cross-border activity may also consider <Link to="/en/cpa-international" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">international tax services</Link>, while foreign groups operating in Israel may consider <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">services for foreign companies in Israel</Link>, according to their activity and the agreed scope.
            </>
          ),
          bullets: [
            "Annual budgeting, cash flow management, burn rate, and runway analysis",
            "Financial model and scenarios for the agreed planning period, based on management-approved assumptions",
            "Monthly or quarterly board reporting and investor update information",
            "Support with financial information and participation in investor meetings where included in the agreed engagement",
            "Organization of available financial and tax information for due-diligence processes, according to the agreed scope",
            "Orderly financial handover to a full-time CFO as the startup grows",
          ],
        },
      ]}

      govPortals={{
        title: "Israeli R&D Grants, Technology Tax Incentives, and Section 102 Options",
        links: [
          { label: "Israel Innovation Authority – Incentive Programs & Grants", href: "https://innovationisrael.org.il/en/" },
          { label: "Capital Investment Encouragement Law (Tax Relief)", href: "https://www.gov.il/en/departments/israel_tax_authority" },

        ],
      }}
      faqs={FAQS}
      ctaHeadline="Building or fundraising for an Israeli startup? Discuss CPA, tax, and fractional CFO services with our firm."
    />
  ),
});
