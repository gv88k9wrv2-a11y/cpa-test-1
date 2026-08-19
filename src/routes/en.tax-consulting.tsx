import { createFileRoute } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-tax.webp";
import { TaxTopicList } from "../components/internal-links";
import { TAX_TOPICS, TAX_GROUP_TITLES } from "../data/internal-links";

/** Topics that already have a full section on this page. */
const EXISTING_TOPIC_IDS = new Set([
  "investments-options-digital-assets",
  "prior-reporting-regularization",
]);

const TOPIC_SECTIONS = TAX_TOPICS.en
  .filter((t) => !EXISTING_TOPIC_IDS.has(t.id))
  .map((t) => ({ id: t.id, title: t.heading, body: t.intro }));

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "What is an Israeli advance tax ruling and when should it be considered?", a: "Assistance in assessing and preparing applications for advance tax rulings, where appropriate, together with the relevant supporting materials — typically considered when tax exposure is material and precedent is unclear." },
  { q: "Can you assist with Israeli crypto tax reporting and compliance?", a: "Yes — tax, documentation and compliance support relating to crypto-derived funds and their presentation to financial institutions, subject to the institution's requirements and applicable law." },
  { q: "What options may exist for correcting prior Israeli tax reporting?", a: "Assistance in assessing available options for correcting or regularizing prior reporting, subject to the applicable law and arrangements available at the relevant time. Cross-border reporting obligations may vary depending on status, residence, citizenship, account location and applicable rules." },
  { q: "Can the firm assist with the tax analysis of a corporate reorganization?", a: "We assist with Israeli tax analysis for corporate reorganizations that may qualify for tax deferral under the applicable provisions of Part E2 of the Income Tax Ordinance, including certain mergers, demergers and asset or share transfers, subject to the statutory conditions and the facts of the proposed transaction." },
];

export const Route = createFileRoute("/en/tax-consulting")({
  head: () => ({
    meta: [
      { title: "Israeli Tax Advisory and Crypto Reporting | Nimrodi & Co." },
      { name: "description", content: "Israeli tax advisory for companies and individuals, including tax-ruling requests, digital-asset reporting, assessments and objections. Contact the firm." },
      { property: "og:title", content: "Israeli Tax Advisory and Digital Asset Reporting | Nimrodi & Co." },
      { property: "og:description", content: "Israeli tax advisory from a Herzliya Pituach CPA firm, including tax-ruling requests, digital-asset reporting and support during assessments and objections." },
      { property: "og:url", content: `${BASE}/en/tax-consulting` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/tax-consulting` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/tax-consulting` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/tax-consulting` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Israeli tax advisory and digital asset reporting documents"
      icon={FileSpreadsheet}
      eyebrow="Israeli Tax Advisory and Digital Asset Reporting"
      title="Israeli Tax Advisory for Companies, Individuals, and Digital Assets"
      intro="Tax planning can help identify relevant considerations, compare available alternatives and document decisions before implementation. The outcome depends on the facts, applicable law and the position of the relevant authorities. Within the agreed scope, the firm assists with Israeli tax analysis, tax-ruling requests, assessments, information requests and digital-asset reporting, with coordination with qualified foreign and legal advisers where required."
      highlights={[
        "Israeli corporate and individual tax planning",
        "Advance Tax Ruling Requests in Israel from the Israel Tax Authority",
        "Israeli corporate reorganization analysis under Sections 103–105",
        "Tax assessment review, objections, and preparation of appeal-related information",
        "Israeli tax and reporting support for digital-asset activity",
        "Accounting and tax information for financial-institution review of digital-asset funds",
        "Review of available routes for correcting prior reporting on foreign accounts",
        "Organization of information for FATCA, FBAR and CRS considerations with qualified advisers",
        "Israeli tax-residency, returning-resident and exit-tax considerations",
      ]}
      sections={[
        {
          title: TAX_GROUP_TITLES.en.listHeading,
          body: <TaxTopicList lang="en" />,
        },
        {
          title: "Israeli Tax Review Before a Transaction",
          body: "Before a transaction, relevant tax considerations may include fundraising, mergers and acquisitions, secondary sales, spin-offs and other structural changes. Within the agreed scope, the firm may assist with Israeli tax analysis and scenario review based on the available facts and assumptions.",
        },
        {
          title: "Advance Tax Ruling Requests",
          body: "Assistance in assessing and preparing applications for advance tax rulings, where appropriate, together with the relevant supporting materials.",
        },
        {
          id: "investments-options-digital-assets",
          title: "Taxation of investments, options and digital assets",
          body: (
            <>
              Digital-asset transactions may have Israeli tax and reporting implications depending on the activity, transaction facts and applicable law. Within the agreed scope, the firm may assist with organizing accounting and tax information for reporting and for review by financial institutions, subject to each institution’s requirements and final decision.
            </>
          ),
          bullets: [
            "Organization of crypto exchange and wallet data for Israeli gain, loss, and tax reporting calculations",
            "Calculation support based on the available transaction data, documented assumptions and the method applicable to the reporting position",
            "Israeli tax review of DeFi liquidity, lending, rewards, and token receipts",
            "Israeli tax and reporting review of NFT, staking, and crypto mining activity",
            "Assessment of whether a tax-ruling request may be appropriate for the activity and classification issue",
            "Organization of accounting and tax information requested by financial institutions regarding the source and history of funds",
          ],
        },
        {
          id: "prior-reporting-regularization",
          title: "Correction and regularization of prior reporting on assets and income",
          body: "Assistance in assessing available options for correcting or regularizing prior reporting, subject to the applicable law and arrangements available at the relevant time. Cross-border reporting obligations (FBAR, FATCA, CRS) may vary depending on the taxpayer's status, residence, citizenship, account location and the applicable reporting rules:",
          bullets: [
            "Review of available routes for regularization at the time of engagement",
            "Asset and activity mapping based on the information and records available",
            "Information organization for FATCA, FBAR and Form 8938 review with a qualified US adviser",
            "CRS information-exchange considerations and the related Israeli reporting review",
            "Review of Israeli tax and reporting information relating to foreign inheritances or estates, with legal and foreign-adviser coordination where required",
          ],
        },
        {
          title: "Israeli Tax Assessments, Objections, and Appeal Support",
          body: "Tax assessments and objections require review of the facts, documents, deadlines and applicable law. Within the agreed scope, the firm may assist with the accounting and Israeli tax aspects of the response and coordinate with qualified legal counsel when legal representation or court proceedings are required:",
          bullets: [
            "Review of the assessment, supporting information and accounting or tax matters requiring response",
            "Supporting file based on available source documents, professional opinions and relevant legal materials",
            "Accounting and Israeli tax support for discussions with the Israel Tax Authority, within the agreed scope",
            "Preparation of accounting and Israeli tax information for an appeal, in coordination with qualified legal counsel",
            "Coordination with tax-law counsel where legal representation is required",
          ],
        },
        {
          title: "Objections, settlement discussions and legal coordination",
          body: "If the Israel Tax Authority challenges a position, we may assist with the accounting and tax aspects of the response, assessment, objection and settlement discussions. Court proceedings and criminal-tax matters require coordination with qualified legal counsel.",
        },
        ...TOPIC_SECTIONS,
      ]}
      faqs={FAQS}
    />
  ),
});
