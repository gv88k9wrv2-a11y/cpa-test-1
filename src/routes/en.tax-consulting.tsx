import { createFileRoute, Link } from "@tanstack/react-router";
import { FileSpreadsheet } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-tax.webp";

const BASE = "https://cpa-test-1.lovable.app";
const FAQS = [
  { q: "What is a Pre-Ruling and when should we get one?", a: "Assistance in assessing and preparing applications for advance tax rulings, where appropriate, together with the relevant supporting materials — typically considered when tax exposure is material and precedent is unclear." },
  { q: "Can you handle crypto tax compliance?", a: "Yes — tax, documentation and compliance support relating to crypto-derived funds and their presentation to financial institutions, subject to the institution's requirements and applicable law." },
  { q: "What is Voluntary Disclosure (גילוי מרצון)?", a: "Assistance in assessing available options for correcting or regularizing prior reporting, subject to the applicable law and arrangements available at the relevant time. Cross-border reporting obligations may vary depending on status, residence, citizenship, account location and applicable rules." },
  { q: "Can you plan a corporate reorganization tax-efficiently?", a: "Yes — we plan and execute tax-deferred reorganizations under Sections 103–105, including mergers, spin-offs and asset transfers between related entities." },
];

export const Route = createFileRoute("/en/tax-consulting")({
  head: () => ({
    meta: [
      { title: "Complex Tax Disputes, Crypto & Voluntary Disclosure | Nimrodi & Co." },
      { name: "description", content: "Israeli tax advisory: Pre-Rulings, crypto compliance, Voluntary Disclosure, reorganizations, audits and appeals for companies and investors. Book a call." },
      { property: "og:title", content: "Tax Advisory, Crypto & Voluntary Disclosure — Nimrodi & Co." },
      { property: "og:description", content: "Tax planning, Pre-Rulings, crypto compliance and Voluntary Disclosure from a Herzliya boutique CPA firm." },
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
      title="Complex tax disputes, crypto assets and Voluntary Disclosure"
      intro="Sound tax planning saves years of pain. We advise entrepreneurs, companies and international investors on complex Israeli and cross-border tax matters — structuring transactions, obtaining Pre-Rulings, defending audits, managing crypto compliance, and running Voluntary Disclosure programs — with the same partners you speak to on day one."
      highlights={[
        "Corporate & personal tax planning",
        "Pre-Rulings (החלטות מיסוי) from the Israel Tax Authority",
        "Reorganizations under Sections 103–105",
        "Objections (השגה) and District Court appeals",
        "Crypto tax compliance — Bitcoin, DeFi, NFT, staking",
        "AML/KYC to move crypto capital into Israeli banks",
        "Voluntary Disclosure (גילוי מרצון) — foreign accounts",
        "FATCA, FBAR and CRS reporting",
        "Residency planning (returning resident, exit tax)",
      ]}
      sections={[
        {
          title: "Planning that anticipates the Exit",
          body: "Effective tax planning happens before transactions close, not after. We work with founders, executives and boards to model the tax implications of fundraising, M&A, secondaries, spin-offs and Exit — and choose the structure that maximizes after-tax outcome.",
        },
        {
          title: "Pre-Rulings (החלטות מיסוי)",
          body: "Assistance in assessing and preparing applications for advance tax rulings, where appropriate, together with the relevant supporting materials.",
        },
        {
          title: "Crypto & Digital Assets",
          body: (
            <>
              The Israel Tax Authority classifies digital assets as property for tax purposes — a sale, coin-to-coin swap or purchase-in-crypto may be a taxable event. We provide tax, documentation and compliance support relating to crypto-derived funds and their presentation to financial institutions, subject to the institution's requirements and applicable law. Cross-border holders should also review our <Link to="/en/cpa-international" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">international tax practice</Link>, and independent crypto traders should see our <Link to="/en/cpa-freelancers" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">CPA for freelancers</Link>:
            </>
          ),
          bullets: [
            "P&L preparation from major exchanges and wallets",
            "Capital-gain calculation using FIFO/LIFO at transaction-date FX",
            "DeFi handling: Liquidity Mining, Yield Farming, Lending, Airdrops",
            "NFT, Staking and Mining — ordinary income vs. capital gains analysis",
            "Assessment of advance tax ruling options for trader vs. investor classification",
            "AML/KYC documentation and source-of-funds materials for financial institutions",
          ],
        },
        {
          title: "Voluntary Disclosure (גילוי מרצון) — Undeclared Foreign Accounts",
          body: "Assistance in assessing available options for correcting or regularizing prior reporting, subject to the applicable law and arrangements available at the relevant time. Cross-border reporting obligations (FBAR, FATCA, CRS) may vary depending on the taxpayer's status, residence, citizenship, account location and the applicable reporting rules:",
          bullets: [
            "Review of available routes for regularization at the time of engagement",
            "Full asset schedule, activity mapping and historic income reconstruction",
            "FATCA (US accounts), FBAR and Form 8938 reporting considerations",
            "CRS — automatic exchange of information between tax authorities",
            "Support with undeclared foreign inheritances and complex estates",
          ],
        },
        {
          title: "Complex tax audits and District Court appeals",
          body: "For material assessments — cross-border issues, Pocket Company, Section 3(J1), Transfer Pricing, Preferred Enterprise or crypto taxation — you need advisors who know current case law and ITA practice. We lead complex matters from objection through District Court appeal:",
          bullets: [
            "Professional dissection of the assessment and identification of attack points",
            "Evidence file: source documents, expert opinions, supporting case law",
            "Negotiation with the ITA — settlements that save interest and penalties",
            "Appeal to the District Court, Civil Tax Division",
            "Joint representation with leading tax-law counsel",
          ],
        },
        {
          title: "Objections, settlements and criminal-tax matters",
          body: "If the ITA challenges a position, we represent the client through every stage: initial response, assessment (שומה), objection (השגה), settlement negotiations and — where needed — District Court appeal. In criminal-tax matters we build the accounting defense file jointly with tax-law counsel, including kofer (settlement in lieu of prosecution) applications.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
