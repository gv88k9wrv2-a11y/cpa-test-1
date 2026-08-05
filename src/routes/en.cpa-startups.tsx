import { createFileRoute, Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-startups.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "When does a startup need a CPA?", a: "Accounting and tax input may be useful before or shortly after incorporation, depending on the proposed structure, jurisdictions, financing plans, founders’ arrangements and equity-compensation model. US legal and tax matters should be reviewed with appropriately qualified US advisers." },
  { q: "Do you support fundraising rounds?", a: "Yes — from Pre-Seed to Series C and beyond. We prepare the data room, build the financial model, coordinate with counsel on SAFEs / CLAs / priced rounds, and structure the round for tax efficiency." },
  { q: "Can you handle an Israel–Delaware Flip?", a: "We can assist with the Israeli accounting and tax aspects of a proposed Israel–Delaware restructuring, including assessing the need for an advance tax-ruling application, coordinating with legal and U.S. advisers and reviewing post-transaction transfer-pricing requirements." },
  { q: "What is Section 102 (Equity & ESOP Incentive Plans) and how does it work?", a: "Tax and compliance support for employee equity compensation and option plans, including the assessment of relevant Section 102 routes, subject to the applicable conditions and circumstances. We prepare and file the plan, work with the trustee, and support employees at exercise and sale." },
  { q: "What is the Preferred Technological Enterprise regime?", a: "Companies meeting R&D and revenue thresholds under the Capital Investments Encouragement Law may qualify for reduced corporate tax rates. We check eligibility, prepare filings with the ITA and support the position on audit." },
  { q: "What is a 409A Valuation and why does it matter?", a: "US equity-compensation arrangements may require a current fair-market-value assessment under applicable US rules. The required timing, method and potential consequences depend on the company’s circumstances and should be confirmed with qualified US legal and tax advisers. We can assist with the Israeli accounting and tax aspects and coordinate information with the company’s US advisers within the agreed scope." },
  { q: "How should we build the Cap Table for investors?", a: "A clear capitalization table can help founders and investors understand ownership and dilution. Depending on the scope of the engagement, we can assist with capitalization-table data, option-pool information and dilution scenarios using the company’s selected platform." },
  { q: "What is a Secondary Transaction and what are the tax risks?", a: "A Secondary is a sale of founder or employee shares to an existing or new investor — an opportunity for early liquidity. The main risk is misclassification, which can materially affect the effective tax rate; proper structuring and, where relevant, an advance tax ruling can help mitigate this." },
];

export const Route = createFileRoute("/en/cpa-startups")({
  head: () => ({
    meta: [
      { title: "CPA for Startups Israel | Section 102 & Delaware Flip" },
      { name: "description", content: "Boutique CPA for Israeli startups: Pre-Seed to Series C, SAFE/CLA, Section 102 ESOP, 409A, Delaware Flip, IIA grants and IFRS. Book a consultation." },
      { property: "og:title", content: "CPA for Startups — Nimrodi & Co." },
      { property: "og:description", content: "Accounting, tax and CFO services for Israeli startups from Pre-Seed to Exit." },
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
          body: "Every stage has its own priorities. We meet you where you are:",
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
          title: "Section 102 ESOP & 409A Valuations",
          body: "Employee equity arrangements may involve Israeli tax, financial-reporting, valuation and legal considerations. The appropriate Section 102 route, accounting treatment and potential need for a 409A valuation depend on the recipient, the instrument, the plan terms, the company’s reporting framework and the circumstances of the grant. Within the agreed scope, the firm can assist with the Israeli accounting and tax analysis, organize the relevant information and coordinate with the company’s legal advisers, trustee, valuation professionals and US advisers where required:",
          bullets: [
            "Assessment of relevant Section 102 routes based on facts and circumstances",
            "Coordination of information for a 409A valuation where required, with qualified valuation professionals",
            "Share-based-payment accounting under the reporting framework applicable to the company, including IFRS 2 or ASC 718 where relevant",
            "Review of tax and reporting considerations for employees at exercise or sale, based on the applicable plan and circumstances",
            "Coordination of relevant information with the trustee, plan administrator and other professional advisers where required",
          ],
        },
        {
          title: "Preferred Technological Enterprise & Israeli tax incentives",
          body: "The Capital Investments Encouragement Law may grant qualifying tech companies reduced corporate tax rates. We assess eligibility, prepare and file the application, and support the position on ITA audit:",
          bullets: [
            "Assessment of potential eligibility for Preferred Technological Enterprise tax benefits",
            "Assessment of potential eligibility for Special Preferred Technological Enterprise tax benefits",
            "New Angels Law — enhanced R&D expense recognition for investors",
            "Financial support for IIA grant applications and related reporting",
            "Review of the accounting and tax treatment of research and development costs and distributions under the applicable rules",
          ],
        },
        {
          title: "Secondary Transactions for founders & employees",
          body: "A Secondary — sale of founder or employee shares to an existing or new investor — is a valuable early-liquidity opportunity but carries significant tax risk. Misclassification can materially affect the effective tax rate. We assist founders and employees in reviewing the accounting and tax considerations relevant to the proposed transaction:",
          bullets: [
            "Assessment of the relevant Section 102 route pre-transaction",
            "Transaction structure: Direct Sale, Tender Offer, trustee-led aggregation",
            "Escrow, holdback and Clawback provisions — accounting and tax treatment",
            "Support with tax ruling requests and related financial information for material transactions where relevant",
            "Employee reporting (Form 106 – Annual Tax Statement) and trustee coordination",
            "Founder-level planning: tax spreading, returning-resident relief, spousal split",
          ],
        },
        {
          title: "Funding structures: SAFE, CLA and conversions",
          body: "SAFE (Simple Agreement for Future Equity) and CLA (Convertible Loan Agreement) are the dominant early-stage funding instruments. Each has trade-offs, risks and accounting complexity. We structure the documents and accounting so nothing surprises you at the next round:",
          bullets: [
            "SAFE terms: Valuation Cap, Discount, MFN, Pro-Rata",
            "CLA with interest, maturity and automatic/optional conversion",
            "Accounting under IFRS 9 / ASC 480 — liability vs. equity",
            "Conversion scenarios at the next round — fully diluted impact",
            "Tax implications for company and investor — including FIRPTA and Section 1202 QSBS",
            "Coordination of financial information for side letters, consent processes and other transaction documents prepared by legal counsel",
          ],
        },
        {
          title: "Fundraising readiness — what a serious investor will check",
          body: "Before a priced funding round or other transaction, the company may need to organize financial, tax, corporate and commercial information requested by investors and advisers. The firm can assist with the financial and tax information and coordinate with the company’s legal and other professional advisers within the agreed scope:",
          bullets: [
            "Review and organization of available fully diluted capitalization data, including SAFEs, convertible instruments and the option pool",
            "Financial statements and supporting information for the relevant periods, based on the applicable reporting requirements",
            "Section 102 plan approved by the ITA with an active trustee",
            "Documented Transfer Pricing policy between Israel and subsidiaries",
            "Proper founders' agreements with Vesting and Cliff",
            "Key customer contracts without problematic Change-of-Control clauses",
            "Organization of available tax records and identification of open assessments, balances and matters requiring follow-up",
          ],
        },
        {
          title: "Fractional CFO — senior finance leadership for your startup",
          body: (
            <>
              Most Seed–Series B startups do not yet justify a full-time CFO, yet the financial decisions at that stage are critical — Runway, pricing, fundraising and Board relations. We step in as a <Link to="/en/fractional-cfo" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">Fractional CFO</Link> and deliver the full senior finance layer you need. Companies with cross-border operations usually pair this with <Link to="/en/cpa-international" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">international tax advisory</Link>, while foreign parents scaling an Israeli entity should also review our <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">foreign-company support in Israel</Link>.
            </>
          ),
          bullets: [
            "Annual budgeting, cash management and Burn / Runway",
            "3–5 year VC-grade financial model (Base / Bull / Bear)",
            "Monthly / quarterly Board Deck and Investor Update email",
            "Support with financial information and participation in investor meetings where included in the agreed engagement",
            "Data Room management and continuous DD readiness",
            "Smooth handover to a full-time CFO when the time comes",
          ],
        },
      ]}

      govPortals={{
        title: "R&D Grants, Tech Incentives & Section 102 Options",
        links: [
          { label: "Israel Innovation Authority – Incentive Programs & Grants", href: "https://innovationisrael.org.il/en/" },
          { label: "Capital Investment Encouragement Law (Tax Relief)", href: "https://www.gov.il/en/departments/israel_tax_authority" },

        ],
      }}
      faqs={FAQS}
      ctaHeadline="Building a startup or about to raise? Let's talk."
    />
  ),
});
