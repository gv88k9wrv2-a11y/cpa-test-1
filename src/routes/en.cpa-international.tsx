import { RELOCATION_CONTENT } from "../data/relocation-residency";
import { DESTINATION_FAQS } from "../data/relocation-destinations";
import { destinationServiceSections } from "../components/relocation-destinations";
import { EXPANDED_FAQS } from "../data/expanded-faqs";
import { buildBreadcrumbJsonLd } from "../lib/meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-international.webp";

const BASE = "https://nimrodi.co.il";
const FAQS = [
  ...DESTINATION_FAQS.en,
  ...EXPANDED_FAQS.international.en,
  {
    q: "What tax benefits do new immigrants (olim chadashim) receive?",
    a: "Eligible new residents and returning residents may benefit from certain tax benefits in relation to qualifying foreign-source income, subject to the applicable law, eligibility conditions, and the specific circumstances. Timing and planning of relocation can be critical to maximize the benefit.",
  },
  {
    q: "Can I sever Israeli tax residency by relocating?",
    a: "Relocation does not by itself determine whether Israeli tax residency has ended. The position depends on the statutory tests, the individual’s factual circumstances, applicable presumptions, treaty provisions and supporting documentation. Within the agreed scope, we can assist with the Israeli tax analysis and organization of relevant information, without guaranteeing the position that a tax authority may adopt.",
    link: {
      label: "Read the full guide: terminating Israeli tax residency and relocation",
      to: "/en/blog/$slug",
      params: { slug: "relocation-tax-residency" },
    },
  },
  {
    q: "How does the US-Israel tax treaty work in practice?",
    a: "The treaty allocates taxing rights, provides tie-breaker rules for residency, and grants foreign tax credits. The timing and treatment of income, equity compensation and pension distributions may have different consequences under Israeli and foreign law. Each matter should be reviewed according to the relevant treaty, the applicable domestic rules and the individual’s circumstances.",
  },
];

export const Route = createFileRoute("/en/cpa-international")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: RELOCATION_CONTENT.en.title },
      { name: "twitter:description", content: RELOCATION_CONTENT.en.description },
      { property: "og:locale", content: "en_US" },
      { title: RELOCATION_CONTENT.en.title },
      {
        name: "description",
        content:
          RELOCATION_CONTENT.en.description,
      },
      { property: "og:title", content: RELOCATION_CONTENT.en.title },
      { property: "og:description", content: RELOCATION_CONTENT.en.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${BASE}/en/cpa-international` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "alternate", hrefLang: "x-default", href: "https://nimrodi.co.il/cpa-international" },
      { rel: "canonical", href: `${BASE}/en/cpa-international` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/cpa-international` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/cpa-international` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          buildBreadcrumbJsonLd([
            { name: "Home", url: "https://nimrodi.co.il/en" },
            { name: "Services", url: "https://nimrodi.co.il/en/services" },
            {
              name: "International Tax & Relocation for Olim",
              url: "https://nimrodi.co.il/en/cpa-international",
            },
          ]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) },
    ],
  }),
  component: () => (
    <ServiceLandingEn
      sectionNavigation
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
          id: "cross-border-advisory",
          title: "Cross-Border Tax Advisory: US-Israel Structuring, Subsidiary Setup & Permanent Establishment",
          body: "When does an Israeli company require cross-border international tax advisory? Tech companies and multinational businesses require structured tax planning when establishing foreign subsidiaries (e.g., Delaware C-Corp), executing intellectual property migration, managing intercompany transfer pricing under Section 85A of the Israeli Income Tax Ordinance, or mitigating Permanent Establishment (PE) exposure for global sales and remote founders.",
        },
        {
          title: "New immigrants & returning residents",
          body: "Eligible new residents and senior returning residents may qualify for certain tax benefits relating to specified foreign-source income and gains, subject to the applicable law, eligibility conditions and individual circumstances. Equity compensation, pensions, trusts and transactions before or after relocation should be reviewed with qualified advisers in the relevant jurisdictions.",
        },
        {
          title: "Relocation & residency severance",
          body: (
            <>
              <p>
                A move abroad does not by itself determine Israeli tax residency. The position
                depends on the statutory tests, factual circumstances, applicable presumptions,
                treaty provisions and supporting documentation. Within the agreed scope, the firm
                may assist with the Israeli tax analysis, exit-tax considerations, organization of
                relevant information and coordination with an adviser in the destination country,
                without guaranteeing the position a tax authority may adopt.
              </p>
              <p className="mt-4">
                <Link
                  to="/en/blog/$slug"
                  params={{ slug: "relocation-tax-residency" }}
                  className="font-semibold text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
                >
                  Israeli tax residency and relocation tax planning
                </Link>
              </p>
              <p className="mt-4">{RELOCATION_CONTENT.en.disclaimer}</p>
            </>
          ),
        },
        {
          title: "Treaty planning & cross-border",
          body: (
            <>
              For individuals with connections to more than one country, the tax and reporting
              treatment may depend on domestic law, the relevant treaty, the type and timing of
              income and the person’s circumstances. Within the agreed scope, the firm may assist
              with the Israeli analysis, organization of information and coordination with qualified
              advisers in the other jurisdiction. Foreign parents entering Israel should also see
              our{" "}
              <Link
                to="/en/cpa-foreign-companies"
                className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                foreign-company support
              </Link>
              , and founders considering an Israel–Delaware flip should review our{" "}
              <Link
                to="/en/cpa-startups"
                className="text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                startup CPA practice
              </Link>
              .
            </>
          ),
        },
        ...destinationServiceSections("en"),
      ]}
      govPortals={{
        title: "Israeli Tax Benefits & Relocation Resources",
        links: [
          {
            label: "Tax Benefits for Returning Residents & New Immigrants (Olim)",
            href: "https://www.gov.il/en/departments/ministry_of_aliyah_and_integration",
          },
          {
            label: "Double Taxation Treaties of Israel",
            href: "https://www.gov.il/en/departments/israel_tax_authority",
          },
        ],
      }}
      ctaHeadline={RELOCATION_CONTENT.en.ctaHeadline}
      ctaText={RELOCATION_CONTENT.en.ctaText}
      ctaButtonLabel={RELOCATION_CONTENT.en.ctaButtonLabel}
      whatsappMessage={RELOCATION_CONTENT.en.whatsappMessage}
      faqs={FAQS}
    />
  ),
});
