import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

const BASE = "https://www.nimrodi.co.il";

const FAQS = [
  { cat: "General", q: "Where is your office and which regions do you serve?", a: "Our office is located in Herzliya Pituach. We serve clients across Israel and internationally via video." },
  { cat: "General", q: "How does the first meeting work?", a: "An introductory meeting may be held in person or by video to understand the relevant needs and discuss a possible engagement. The proposed scope, responsibilities and fees are explained before professional services begin." },
  { cat: "General", q: "In which languages do you work?", a: "Hebrew and English, at full professional level — including reports, meetings and correspondence." },
  { cat: "Fees", q: "How is pricing determined?", a: "We prefer fixed-scope engagements. Fees are based on activity volume, complexity and required services. The proposed scope and fee structure are explained in advance and may change if the agreed work changes." },
  { cat: "Startups", q: "When should a startup engage a CPA?", a: "A startup may benefit from accounting and tax input before company formation, equity grants, financing or cross-border activity. Legal documents and elections should be addressed with qualified legal and tax advisers in the relevant jurisdictions." },
  { cat: "Startups", q: "Do you handle Israeli-Delaware Flips?", a: "The firm can assist with the Israeli accounting and tax analysis, preparation of information for a tax ruling request and coordination with the company’s Israeli and US advisers. The suitability and implementation of the structure depend on the company, its shareholders, planned activity and applicable law." },
  { cat: "Foreign companies", q: "Can you register a subsidiary and open a bank account for a foreign company?", a: "The timetable for entity registration and bank-account onboarding depends on the proposed structure, the documents, identification and KYC requirements, authority processing times and the bank’s review. The firm can assist with the relevant Israeli accounting and tax information within the agreed scope." },
  { cat: "Individuals", q: "What are the tax benefits for new immigrants?", a: "New immigrants and returning residents may be eligible for Israeli tax and reporting relief, depending on their status, dates, income, assets and the law in effect for the relevant period. Eligibility and filing requirements should be reviewed based on the individual circumstances." },
  { cat: "Crypto & Web3", q: "Do you handle cryptocurrency and digital asset taxation?", a: "Yes. We have experience with Israeli accounting, tax and reporting matters involving digital assets. The scope depends on the type of activity, the available transaction records and the applicable reporting requirements. Transactions involving virtual currencies may give rise to tax and reporting obligations depending on the nature of the activity, the facts of the transactions, the taxpayer's circumstances, and applicable law. We provide accounting and tax support in cryptocurrency and digital asset taxation, navigate complex Web3 transactions, and assist with preparing documentation and information regarding the source and history of funds for consideration by relevant financial institutions, subject to the bank's policies, compliance procedures, and final decision." },
  { cat: "Crypto & Web3", q: "How do I move crypto proceeds into an Israeli bank account?", a: "We provide tax, documentation and compliance support relating to crypto-derived funds and their presentation to Israeli financial institutions — Source of Funds documentation, tax opinions and P&L reports — subject to each institution's requirements and applicable law." },
  { cat: "Crypto & Web3", q: "When is a crypto transaction taxable in Israel?", a: "Sales, coin-to-coin swaps, DeFi actions, staking rewards, NFT mint/sale events or purchases-in-crypto may create taxable events depending on the facts and applicable law. We build a transaction ledger across exchanges and wallets, compute capital gains at the transaction-date FX, and prepare reporting support — plus Voluntary Disclosure assessment where relevant." },
  { cat: "Crypto & Web3", q: "Can you obtain a Pre-Ruling for crypto activity?", a: "For material or novel activity — trader vs. investor classification, DeFi yield, staking income, NFT royalties — we assist in preparing tax ruling requests and presenting the professional position to the Israel Tax Authority, without guaranteeing a specific outcome." },
];

export const Route = createFileRoute("/en/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nimrodi & Co. CPA" },
      { name: "description", content: "Answers to common questions on our CPA services, working process, pricing and Israeli taxation for companies, startups, freelancers and foreign clients." },
      { property: "og:title", content: "FAQ — Nimrodi & Co." },
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
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">FAQ</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">Frequently Asked Questions and Answers</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              The most common questions we get from prospective clients — grouped by topic.
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
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
