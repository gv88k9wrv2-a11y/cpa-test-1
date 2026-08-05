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
    a: "Yes. We sit in VC meetings alongside the founders, answer complex financial questions, defend the model's assumptions and navigate the financial portion of the pitch. Support includes pre-meeting dry runs, coaching on financial terminology, and live response to investor challenges around Unit Economics, LTV/CAC, Rule of 40 and Gross Margin.",
  },
  {
    q: "What does a Data Room and Ongoing DD include?",
    a: "A Data Room may include financial, tax, corporate, commercial, employment and intellectual-property information requested for a financing or transaction process. The required folders and documents depend on the purpose of the review, the parties’ requests and the information available from the company and its advisers. The firm can assist with organizing available financial and tax information and coordinating related requests within the agreed scope.",
  },
  {
    q: "Which KPIs do you track for the Board?",
    a: "For SaaS: MRR/ARR, Net Revenue Retention, Gross Margin, CAC Payback, LTV/CAC, Magic Number, Rule of 40. For commerce: Contribution Margin, Repeat Rate, AOV, Inventory Turnover. Cross-sector: Cash Balance, Burn, Runway, Headcount and Budget-vs-Actual. We build a monthly Dashboard with variance analysis and recommended actions, delivered to the board and investors on a fixed cadence.",
  },
  {
    q: "How much does a Fractional CFO cost?",
    a: "Fees and engagement terms depend on the agreed responsibilities, expected level of involvement, reporting frequency and project requirements. The scope, points of contact and pricing structure are defined in advance and may be updated if the agreed work changes.",
  },
  {
    q: "When should a company move to a full-time CFO?",
    a: "Usually after Series B, when ARR crosses $10M, headcount is 50+, operations span multiple countries and the board includes institutional investors. We manage the transition: define the role, run the search, and continue to advise the incoming CFO as external consultants during the handover to preserve continuity.",
  },
];

export const Route = createFileRoute("/en/fractional-cfo")({
  head: () => ({
    meta: [
      { title: "Fractional CFO Services in Israel | Nimrodi & Co." },
      {
        name: "description",
        content:
          "Outsourced financial management, including budgets, cash flow, financial models, board information and transaction preparation. Contact us.",
      },
      { property: "og:title", content: "Fractional CFO — Nimrodi & Co." },
      {
        property: "og:description",
        content:
          "Elite outsourced CFO leadership for startups and foreign corporations operating in Israel — flexible, fractional, senior.",
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
        "3–5 year VC-grade financial model (Base / Bull / Bear)",
        "Investor & Board relations — decks, KPIs and pitch prep",
        "Support with financial information and participation in investor discussions where included in the engagement",
        "Data Room management and continuous DD readiness",
        "Unit-economics and Rule-of-40 analysis based on the company’s data and reporting needs",
        "Debt facilities, Venture Debt and FX hedging",
        "M&A, exit and next-round preparation",
      ]}
      sections={[
        {
          title: "Strategic Corporate Finance",
          body: (
            <>
              We turn finance from a cost center into a growth engine. Disciplined budgeting, continuous variance tracking, and early detection of drift — with clear recommended actions for management and the board. This service pairs naturally with our <Link to="/en/cpa-startups" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">startup CPA practice</Link>, <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">foreign-company support in Israel</Link>, and <Link to="/en/audit" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">statutory audit and assurance</Link>.
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
            "Every startup lives and dies by its Runway. We manage Burn and Runway calculations like clockwork — and identify the moment to start the next raise, cut costs, or shift strategy while there is still room to maneuver:",
          bullets: [
            "Gross Burn vs Net Burn — precise monthly calculation",
            "Runway simulation across revenue, funding and event scenarios",
            "Cash Trigger Points — when a decision becomes mandatory",
            "Deferred Revenue and credit facility monitoring",
            "Fundraise timing: a commonly used planning guideline is to begin fundraising while sufficient runway remains, often around 9–12 months depending on the company's circumstances",
            "Real-time dashboards for management and the Board",
          ],
        },
        {
          title: "Investor Relations & Board readiness",
          body:
            "A professional board meeting builds trust — an unprepared meeting erodes it. We build the materials package, prep founders for Q&A, and often sit in the meeting itself to support the financial presentation and reinforce financial credibility:",
          bullets: [
            "Monthly / quarterly Board Deck — consistent, professional structure",
            "Cross-sector KPI Dashboard: SaaS, E-Commerce, Marketplace",
            "3–5 year Financial Model in files a VC knows how to review",
            "Monthly Investor Update email — builds credibility and reputation",
            "Founder coaching before VC meetings",
            "Preparation of financial information and participation in board or committee meetings where agreed",
          ],
        },
        {
          title: "Financial model for fundraising",
          body:
            "Serious investors look first for a model that speaks their language: clear assumptions, modular revenue engines, and sensitivities they can play with. Our models are built with the information and structure commonly expected in venture-capital due diligence:",
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
            "Acquisition and funding opportunities arrive without warning. A ready company enters negotiations in days. Insufficient financial preparation can create unnecessary friction during important strategic and commercial processes. We manage the Data Room as an ongoing process, not an emergency project:",
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
