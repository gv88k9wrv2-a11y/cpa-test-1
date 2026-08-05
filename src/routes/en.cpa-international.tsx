import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-international.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  { q: "What tax benefits do new immigrants (olim chadashim) receive?", a: "Eligible new residents and returning residents may benefit from certain tax benefits in relation to qualifying foreign-source income, subject to the applicable law, eligibility conditions, and the specific circumstances. Timing and planning of relocation can be critical to maximize the benefit." },
  { q: "Can I sever Israeli tax residency by relocating?", a: "Yes, but severance requires more than moving abroad. The ITA looks at 'center of life' (family, home, work, social ties). We plan and document the severance to withstand challenge — and address the exit tax exposure." },
  { q: "How does the US-Israel tax treaty work in practice?", a: "The treaty allocates taxing rights, provides tie-breaker rules for residency, and grants foreign tax credits. Practical planning — timing of income recognition, ESOP exercise, pension distributions — often makes a large after-tax difference." },
];

export const Route = createFileRoute("/en/cpa-international")({
  head: () => ({
    meta: [
      { title: "International Tax & Relocation for Olim | Nimrodi & Co." },
      { name: "description", content: "Israeli international tax planning: relocation, tax residency severance, new immigrant benefits, returning residents, tax treaties and cross-border structures." },
      { property: "og:title", content: "International Tax — Nimrodi & Co." },
      { property: "og:description", content: "Israeli international tax support for relocation, new immigrants and returning residents, including residency review and cross-border reporting. Contact us." },
      { property: "og:url", content: `${BASE}/en/cpa-international` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/cpa-international` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-international` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-international` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="World map illustrating international tax connections"
      icon={Plane}
      eyebrow="International Tax"
      title="Relocation, olim and cross-border tax planning"
      intro="Moving to or from Israel may involve significant residency, reporting, asset and cross-border tax considerations. The firm can assist with the Israeli tax analysis, preparation of relevant information and coordination with qualified advisers in other jurisdictions. The scope and required filings depend on the individual’s circumstances and the applicable rules."
      highlights={[
        "New immigrant (oleh chadash) 10-year benefits",
        "Senior returning resident status",
        "Israeli tax residency severance & exit tax",
        "Tax treaties (US, UK, Canada, France, Germany…)",
        "Foreign account reporting (CRS / FATCA)",
        "Crypto & digital asset taxation",
      ]}
      sections={[
        {
          title: "New immigrants & returning residents",
          body: "Eligible new residents and senior returning residents may benefit from certain tax benefits in relation to qualifying foreign-source income and gains, subject to the applicable law, eligibility conditions and the specific circumstances. The benefit is fragile — poor planning around exercise of pre-aliyah equity, US pension distributions or trusts can erode it. We plan timing and structure years in advance.",
        },
        {
          title: "Relocation & residency severance",
          body: "Leaving Israel? Center of life, physical presence, family, home, work and social ties all matter. We help plan and document the severance, address exit tax (Section 100A), coordinate with the destination country's advisor, and review ongoing Israeli tax and reporting considerations after relocation.",
        },
        {
          title: "Treaty planning & cross-border",
          body: (
            <>
              For dual-status individuals, executives with global equity and families spread across countries — we plan across treaties, coordinate foreign tax credits, time income recognition and file coordinated returns. Foreign parents entering Israel should also see our <Link to="/en/cpa-foreign-companies" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">foreign-company support</Link>, and founders considering an Israel–Delaware flip should review our <Link to="/en/cpa-startups" className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold">startup CPA practice</Link>.
            </>
          ),
        },
      ]}
      govPortals={{
        title: "Israeli Tax Benefits & Relocation Resources",
        links: [
          { label: "Tax Benefits for Returning Residents & New Immigrants (Olim)", href: "https://www.gov.il/en/departments/ministry_of_aliyah_and_integration" },
          { label: "Double Taxation Treaties of Israel", href: "https://www.gov.il/en/departments/israel_tax_authority" },

        ],
      }}
      faqs={FAQS}
    />
  ),
});
