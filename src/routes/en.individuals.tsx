import { createFileRoute } from "@tanstack/react-router";
import { GatewayPage } from "../components/gateway-page";
import { INDIVIDUALS_GROUPS_EN } from "../data/nav-content";

const BASE = "https://www.nimrodi.co.il";
const DESCRIPTION =
  "Israeli tax and reporting services for individuals and self-employed clients, including annual returns, crypto, rental income and relocation. Contact our firm.";

export const Route = createFileRoute("/en/individuals")({
  head: () => ({
    meta: [
      { title: "Tax Services for Individuals | Nimrodi & Co. CPA" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Tax Services for Individuals | Nimrodi & Co. CPA" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${BASE}/en/individuals` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/individuals` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/individuals` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/individuals` },
    ],
  }),
  component: () => (
    <GatewayPage
      lang="en"
      h1="Individuals & Self-Employed"
      intro="Israeli tax and reporting services for individuals and self-employed clients, including annual returns, capital declarations, crypto, rental income, relocation, voluntary disclosure and employee tax refunds."
      instruction="Choose the topic that best matches your needs to reach the relevant service page."
      groups={INDIVIDUALS_GROUPS_EN}
      sections={[
        {
          id: "employee-tax-refunds",
          title: "Employee Tax Refunds",
          body: "Reviewing a possible tax refund for employees is based on Form 106 statements, withholding certificates, details of additional income and documentation of potential credits and deductions. Within the agreed scope, the information can be organized, the tax years still open for filing reviewed, and the annual return prepared according to the information provided and applicable law. Any refund, if due, is determined by the Israel Tax Authority.",
        },
        {
          id: "guardians",
          title: "Services for Guardians",
          body: "Guardians may receive assistance in organizing financial data, preparing information for periodic reports and required filings, and reviewing Israeli income tax reporting obligations relating to the assets and income of the person under guardianship. The scope of the service, the reporting method and the responsibilities are defined according to the circumstances, the documents provided and the requirements of the competent authorities.",
        },
      ]}
      ctaLabel="Contact Us"
      ctaTo="/en/contact"
    />
  ),
});
