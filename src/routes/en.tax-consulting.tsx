import { createFileRoute, Link } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-tax.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "What is an advance tax ruling and when should we consider one?", a: "Assistance in assessing and preparing applications for advance tax rulings, where appropriate, together with the relevant supporting materials — typically considered when tax exposure is material and precedent is unclear." },
  { q: "Can you handle crypto tax compliance?", a: "Yes — tax, documentation and compliance support relating to crypto-derived funds and their presentation to financial institutions, subject to the institution's requirements and applicable law." },
  { q: "What is Voluntary Disclosure (גילוי מרצון)?", a: "Assistance in assessing available options for correcting or regularizing prior reporting, subject to the applicable law and arrangements available at the relevant time. Cross-border reporting obligations may vary depending on status, residence, citizenship, account location and applicable rules." },
  { q: "Can you plan a corporate reorganization tax-efficiently?", a: "Yes — we plan and execute tax-deferred reorganizations under Sections 103–105, including mergers, spin-offs and asset transfers between related entities." },
];

export const Route = createFileRoute("/en/tax-consulting")({
  head: () => ({
    meta: [
      { title: "Complex Tax, Crypto & Voluntary Disclosure | Nimrodi" },
      { name: "description", content: "Israeli tax advisory for companies and individuals, including tax-ruling requests, digital-asset reporting, assessments and objections. Contact the firm." },
      { property: "og:title", content: "Tax Advisory, Crypto & Voluntary Disclosure — Nimrodi & Co." },
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
      heroImageAlt="Tax planning documents on an executive desk"
      icon={FileSpreadsheet}
      eyebrow="Complex Tax, Crypto & Voluntary Disclosure"
      title="Israeli tax advisory, digital assets and tax disputes"
      intro="Tax planning can help identify relevant considerations, compare available alternatives and document decisions before implementation. The outcome depends on the facts, applicable law and the position of the relevant authorities. Within the agreed scope, the firm assists with Israeli tax analysis, tax-ruling requests, assessments, information requests and digital-asset reporting, with coordination with qualified foreign and legal advisers where required."
      highlights={[
        "Corporate & personal tax planning",
        "Tax ruling requests from the Israel Tax Authority",
        "Reorganizations under Sections 103–105",
        "Tax objections and preparation of appeal-related information",
        "Israeli tax and reporting support for digital-asset activity",
        "Accounting and tax information for financial-institution review of digital-asset funds",
        "Review of available routes for correcting prior reporting on foreign accounts",
        "Organization of information for FATCA, FBAR and CRS considerations with qualified advisers",
        "Israeli tax-residency, returning-resident and exit-tax considerations",
      ]}
      sections={[
        {
          title: "Tax considerations before a transaction",
          body: "Before a transaction, relevant tax considerations may include fundraising, mergers and acquisitions, secondary sales, spin-offs and other structural changes. Within the agreed scope, the firm may assist with Israeli tax analysis and scenario review based on the available facts and assumptions.",
        },
        {
          title: "Tax ruling requests",
          body: "Assistance in assessing and preparing applications for advance tax rulings, where appropriate, together with the relevant supporting materials.",
        },
        {
          title: "Digital-asset tax and reporting",
          body: (
            <>
              Digital-asset transactions may have Israeli tax and reporting implications depending on the activity, transaction facts and applicable law. Within the agreed scope, the firm may assist with organizing accounting and tax information for reporting and for review by financial institutions, subject to each institution’s requirements and final decision. Cross-border holders should also review our <Link to="/en/cpa-international" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">international tax practice</Link>, and independent crypto traders should see our <Link to="/en/cpa-freelancers" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">CPA for freelancers</Link>:
            </>
          ),
          bullets: [
            "Organization of exchange and wallet data for calculation of gains, losses and reporting information",
            "Calculation support based on the available transaction data, documented assumptions and the method applicable to the reporting position",
            "Review of DeFi activity, including liquidity, lending, rewards and token receipts",
            "Review of NFT, staking and mining activity for Israeli tax and reporting purposes",
            "Assessment of whether a tax-ruling request may be appropriate for the activity and classification issue",
            "Organization of accounting and tax information requested by financial institutions regarding the source and history of funds",
          ],
        },
        {
          title: "Correction or regularization of prior reporting on foreign accounts",
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
          title: "Tax assessments, objections and appeal support",
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
      ]}
      faqs={FAQS}
    />
  ),
});
