import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";
import { ProfessionalDisclaimer } from "../components/professional-disclaimer";

const BASE = "https://www.nimrodi.co.il";

const FAQS = [
  { cat: "General", q: "Where is your CPA office in Israel and which clients do you serve?", a: "Our office is located in Herzliya Pituach. We serve clients across Israel and internationally via video." },
  { cat: "General", q: "How does the first meeting work?", a: "An introductory meeting may be held in person or by video to understand the relevant needs and discuss a possible engagement. The proposed scope, responsibilities and fees are explained before professional services begin." },
  { cat: "General", q: "In which languages do you work?", a: "Services may be provided in Hebrew or English, including meetings, correspondence and documents within the agreed engagement scope." },
  { cat: "Fees", q: "How is pricing determined?", a: "We prefer fixed-scope engagements. Fees are based on activity volume, complexity and required services. The proposed scope and fee structure are explained in advance and may change if the agreed work changes." },
  { cat: "Startups", q: "When should an Israeli startup engage a CPA firm?", a: "A startup may benefit from accounting and tax input before company formation, equity grants, financing or cross-border activity. Legal documents and elections should be addressed with qualified legal and tax advisers in the relevant jurisdictions." },
  { cat: "Startups", q: "Can you assist with the Israeli tax analysis of an Israel-Delaware flip?", a: "The firm can assist with the Israeli accounting and tax analysis, preparation of information for a tax ruling request and coordination with the company’s Israeli and US advisers. The suitability and implementation of the structure depend on the company, its shareholders, planned activity and applicable law." },
  { cat: "Foreign companies", q: "Can you assist a foreign company with Israeli subsidiary registration and bank onboarding information?", a: "The timetable for entity registration and bank-account onboarding depends on the proposed structure, the documents, identification and KYC requirements, authority processing times and the bank’s review. The firm can assist with the relevant Israeli accounting and tax information within the agreed scope." },
  { cat: "Individuals", q: "What Israeli tax benefits may apply to new immigrants and returning residents?", a: "New immigrants and returning residents may be eligible for Israeli tax and reporting relief, depending on their status, dates, income, assets and the law in effect for the relevant period. Eligibility and filing requirements should be reviewed based on the individual circumstances." },
  { cat: "Crypto & Web3", q: "Do you provide Israeli cryptocurrency and digital asset tax reporting services?", a: "Yes. The firm assists with Israeli accounting, tax and reporting matters involving digital assets. The scope depends on the type of activity, the available transaction records, the taxpayer’s circumstances and the applicable reporting requirements. Where relevant, the work may include organizing transaction information and preparing accounting and tax information for review by financial institutions, subject to each institution’s policies and final decision." },
  { cat: "Crypto & Web3", q: "What information may an Israeli bank request for cryptocurrency proceeds?", a: "Israeli financial institutions may request information about the source and history of digital-asset funds. Within the agreed scope, the firm may assist with organizing accounting and tax information for the institution’s review, subject to its policies, procedures and final decision." },
  { cat: "Crypto & Web3", q: "Which cryptocurrency transactions may be taxable in Israel?", a: "Sales, coin-to-coin swaps, DeFi activity, staking rewards, NFT transactions and purchases made with digital assets may have Israeli tax and reporting implications, depending on the facts and applicable law. Within the agreed scope, the firm may assist with organizing transaction data, reviewing the activity and preparing information for Israeli tax reporting." },
  { cat: "Crypto & Web3", q: "Can you assist with an Israeli tax ruling request for digital asset activity?", a: "Depending on the facts and the agreed scope, the firm may assist with the accounting and Israeli tax analysis, preparation of information for a tax-ruling request and coordination with legal or other advisers. Filing a request does not guarantee that the Israel Tax Authority will issue a ruling or accept a particular position." },
];

export const Route = createFileRoute("/en/faq")({
  head: () => ({
    meta: [
      { title: "Israeli CPA and Tax FAQ | Nimrodi & Co." },
      { name: "description", content: "Answers to common questions on our CPA services, working process, pricing and Israeli taxation for companies, startups, freelancers and foreign clients." },
      { property: "og:title", content: "Israeli CPA Services FAQ | Nimrodi & Co." },
      { property: "og:description", content: "Common questions about working with an Israeli CPA firm: services, process, engagement scope, fees and reporting for companies and individuals. Read more." },
      { property: "og:url", content: `${BASE}/en/faq` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/faq` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/faq` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/faq` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqEn,
});

function FaqEn() {
  const cats = Array.from(new Set(FAQS.map((f) => f.cat)));
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />
      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">Israeli CPA FAQ</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">Israeli Accounting and Tax Frequently Asked Questions</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Answers to common questions about Israeli accounting, tax, startups, foreign companies, freelancers, and digital assets.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6">
            {cats.map((cat) => (
              <div key={cat}>
                <h2 className="font-display text-2xl font-bold text-primary">{cat}</h2>
                <div className="mt-4 space-y-3">
                  {FAQS.filter((f) => f.cat === cat).map((f) => (
                    <details key={f.q} className="group rounded-lg border border-border bg-card p-4 shadow-sm open:shadow-md">
                      <summary className="cursor-pointer list-none font-semibold text-primary">
                        <span className="mr-2 text-gold">+</span>
                        {f.q}
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Professional disclaimer */}
        {/* Required on all professional-content pages. Do not remove or duplicate. */}
        <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <ProfessionalDisclaimer lang="en" />
        </section>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
