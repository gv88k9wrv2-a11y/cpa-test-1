import { createFileRoute } from "@tanstack/react-router";
import { GatewayPage } from "../components/gateway-page";
import { COMPANIES_GROUPS_EN } from "../data/nav-content";

const BASE = "https://www.nimrodi.co.il";
const DESCRIPTION =
  "Audit, accounting, Israeli tax, payroll and financial-management services for companies, startups and foreign businesses operating in Israel. Contact our firm.";

export const Route = createFileRoute("/en/companies")({
  head: () => ({
    meta: [
      { title: "Companies & Startups | Nimrodi & Co. CPA" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Companies & Startups | Nimrodi & Co. CPA" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${BASE}/en/companies` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/companies` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/companies` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/companies` },
    ],
  }),
  component: () => (
    <GatewayPage
      lang="en"
      h1="Companies & Startups"
      intro="Accounting, audit, tax, payroll and financial-management services for Israeli companies, startups, foreign companies operating in Israel and nonprofit organizations."
      instruction="Choose the company type or professional service that best matches your needs."
      groups={COMPANIES_GROUPS_EN}
      ctaLabel="Contact Us"
      ctaTo="/en/contact"
    />
  ),
});
