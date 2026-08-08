import { createFileRoute, Link } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-cfo.webp";

const BASE = "https://www.nimrodi.co.il";

const FAQS = [
  {
    q: "What is a Fractional CFO and who is it for?",
    a: "A fractional CFO provides senior financial-management support on a part-time or flexible basis. The appropriate level of involvement depends on the company’s stage, reporting needs, internal resources and planned transactions. The engagement scope, responsibilities, reporting frequency and points of contact are agreed in advance.",
  },
  {
    q: "How is a Fractional CFO different from a bookkeeper?",
    a: "Bookkeeping records and organizes financial transactions. Fractional CFO support may include budgeting, cash-flow planning, management reporting, financial models, board information and transaction preparation. The division of responsibilities between bookkeeping, management and CFO support is defined according to the company’s needs and the agreed scope.",
  },
  {
    q: "How are Burn Rate and Runway calculated, and why does it matter?",
    a: "Burn rate and runway are planning measures based on the company’s cash position, expected receipts, operating payments, financing arrangements and assumptions. The calculation and scenarios should be updated when material information changes. Fundraising timing is a management decision that depends on the company’s plans, market conditions and available financing alternatives.",
  },
  {
    q: "Do you actually attend investor pitches?",
    a: "Depending on the agreed engagement scope, the firm may assist with preparation of financial materials, review of model assumptions, discussion preparation and participation in investor meetings. Management remains responsible for the information presented, the company’s statements and all fundraising decisions.",
  },
  {
    q: "What does a Data Room and Ongoing DD include?",
    a: "A Data Room may include financial, tax, corporate, commercial, employment and intellectual-property information requested for a financing or transaction process. The required folders and documents depend on the purpose of the review, the parties’ requests and the information available from the company and its advisers. The firm can assist with organizing available financial and tax information and coordinating related requests within the agreed scope.",
  },
  {
    q: "Which KPIs do you track for the Board?",
    a: "The relevant KPIs depend on the company’s business model, stage, available data and reporting needs. Depending on the agreed scope, reporting may include revenue, retention, margins, customer economics, cash, burn, runway, headcount and budget-versus-actual information. The content, frequency and recipients of each report are agreed with management.",
  },
  {
    q: "How much does a Fractional CFO cost?",
    a: "Fees and engagement terms depend on the agreed responsibilities, expected level of involvement, reporting frequency and project requirements. The scope, points of contact and pricing structure are defined in advance and may be updated if the agreed work changes.",
  },
  {
    q: "When should a company move to a full-time CFO?",
    a: "The appropriate time to appoint a full-time CFO depends on the company’s reporting complexity, financing activity, geographic footprint, internal team, governance requirements and management needs. The transition should be assessed according to the company’s circumstances rather than a single funding, revenue or headcount threshold. Where agreed, the firm may support an orderly handover of financial information and responsibilities.",
  },
];

export const Route = createFileRoute("/en/fractional-cfo")({
  head: () => ({
    meta: [
      { title: "Fractional CFO Services in Israel | Nimrodi & Co." },
      {
        name: "description",
        content:
          "Fractional CFO services in Israel: budgeting, cash-flow planning, financial models, management and board reporting and transaction preparation. Contact us.",
      },
      { property: "og:title", content: "Fractional CFO — Nimrodi & Co." },
      {
        property: "og:description",
        content:
          "Outsourced senior CFO support for startups and foreign companies operating in Israel, covering budgets, models, board reporting and transactions. Talk to us.",
      },
      { property: "og:url", content: `${BASE}/en/fractional-cfo` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/fractional-cfo` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/fractional-cfo` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/fractional-cfo` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Executive boardroom with financial dashboards — Fractional CFO services"
      icon={LineChart}
      eyebrow="Financial Management & CFO"
      title="Fractional CFO — strategic corporate finance for growth-stage companies"
      intro="Senior fractional CFO support for startups, foreign companies operating in Israel and growing businesses. The engagement may include budgeting, cash-flow planning, financial models, management and board reporting, investor information and transaction preparation, according to the company’s needs and the agreed scope."
      highlights={[
        "Annual budgeting and rigorous cash flow management",
        "Burn Rate & Runway — calculation, monitoring and scenarios",
        "Financial model and scenarios for the agreed planning period, based on management-approved assumptions",
        "Investor & Board relations — decks, KPIs and pitch prep",
        "Support with financial information and participation in investor discussions where included in the engagement",
        "Organization of available financial and tax information for due-diligence processes, according to the agreed scope",
        "Unit-economics and Rule-of-40 analysis based on the company’s data and reporting needs",
        "Debt facilities, Venture Debt and FX hedging",
        "M&A, exit and next-round preparation",
      ]}
      sections={[
        {
          title: "Strategic Corporate Finance",
          body: (
            <>
              Fractional CFO support may help management organize budgeting, cash-flow planning, variance analysis and financial information for decision-making. The scope, frequency, assumptions and responsibilities are agreed with management in advance. This service pairs naturally with our <Link to="/en/cpa-startups" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">startup CPA practice</Link>, <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">foreign-company support in Israel</Link>, and <Link to="/en/audit" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">statutory audit and assurance</Link>.
            </>
          ),
          bullets: [
            "Annual budget build (Bottom-Up + Top-Down) with manager ownership",
            "Weekly / monthly / quarterly Cash Flow Forecast",
            "Periodic actual-versus-budget variance analysis and management follow-up",
            "Analysis of SaaS, headcount and marketing expenditure for planning purposes",
            "Break-Even analysis and path to profitability",
            "Working Capital and collections / payables cycle management",
          ],
        },
        {
          title: "Burn Rate & Runway — the company's lifeline",
          body:
            "Burn rate and runway are planning measures based on the company’s cash position, expected receipts, planned expenditure, financing arrangements and management assumptions. We can assist with calculations and scenarios, while fundraising, cost and strategy decisions remain the responsibility of management:",
          bullets: [
            "Gross Burn and Net Burn calculations based on the available records and agreed assumptions",
            "Runway simulation across revenue, funding and event scenarios",
            "Cash-planning indicators for management review and decision-making",
            "Deferred Revenue and credit facility monitoring",
            "Fundraise timing: a commonly used planning guideline is to begin fundraising while sufficient runway remains, often around 9–12 months depending on the company's circumstances",
            "Periodic dashboards for management and the Board, where included in the engagement and supported by the available systems and data",
          ],
        },
        {
          title: "Investor Relations & Board readiness",
          body:
            "Clear and consistent financial information can support board discussions. Depending on the agreed scope, services may include preparation of financial materials, review of assumptions, discussion preparation and participation in board or committee meetings. Management remains responsible for the information presented and the decisions made:",
          bullets: [
            "Monthly / quarterly Board Deck — consistent, professional structure",
            "Cross-sector KPI Dashboard: SaaS, E-Commerce, Marketplace",
            "3–5 year Financial Model in files a VC knows how to review",
            "Periodic investor-update information prepared according to the agreed reporting scope",
            "Founder coaching before VC meetings",
            "Preparation of financial information and participation in board or committee meetings where agreed",
          ],
        },
        {
          title: "Financial model for fundraising",
          body:
            "A financial model can help present management’s assumptions, revenue drivers, expenditure plans, cash requirements and sensitivity scenarios. Models are prepared from information and assumptions supplied or approved by management and do not predict or guarantee actual performance:",
          bullets: [
            "Revenue engines: SaaS ARR, Transactional Revenue, Marketplace GMV",
            "Cohort Analysis and data-driven Retention Curves",
            "Unit Economics: CAC, LTV, Payback Period, Gross Margin",
            "Scenario Analysis: Base / Bull / Bear with adjustable assumptions",
            "Cap-table and distribution-waterfall analysis for selected transaction scenarios",
            "Dilution Simulation for future funding rounds",
          ],
        },
        {
          title: "Continuous Due Diligence & M&A readiness",
          body:
            "Organized financial and tax information may help a company respond more efficiently to financing or transaction requests. Depending on the agreed scope, the firm may assist with periodic organization of available information and coordination with management and the company’s other advisers:",
          bullets: [
            "Data Room on DocSend / Digify / Google Drive with standard VC folder structure",
            "Periodic organization of available financial records and coordination of supporting documents for due diligence",
            "Review and organization of the fully diluted Cap Table, including SAFEs, convertible instruments and the option pool",
            "Organization of available tax records and identification of open assessments, balances and matters requiring follow-up",
            "Analysis of revenue, profitability and adjustments relevant to earnings quality, based on the agreed scope",
            "Financial due-diligence coordination and information support for buyer or investor requests",
            "Coordination with counsel (Israel + abroad), auditors and appraisers",
          ],
        },
        {
          title: "Tailored flexibility for your stage",
          body:
            "The level and frequency of CFO involvement are tailored to the company’s stage, reporting needs, transactions and internal resources. The engagement structure, responsibilities and points of contact are agreed in advance, with an emphasis on continuity and orderly knowledge transfer:",
          bullets: [
            "Engagement terms and fees agreed according to the scope and level of CFO involvement",
            "Project-based: model build, Data Room prep, funding round support",
            "Interim CFO — bridging between outgoing and incoming CFO",
            "Access senior-level financial leadership in a flexible structure tailored to the company's needs",
            "Coordination with bookkeeping, payroll, tax and audit professionals when relevant to the engagement",
            "Support for an orderly handover to an internal or full-time CFO, based on the agreed transition scope",
          ],
        },
      ]}
      faqs={FAQS}
      ctaHeadline="Approaching the next raise or preparing for a board meeting? Let's talk."
    />
  ),
});
