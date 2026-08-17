import { createFileRoute } from "@tanstack/react-router";
import { ReceiptText } from "lucide-react";
import { ServiceLandingEn, buildFaqJsonLd } from "../components/service-landing-en";
import heroImg from "../assets/service-payroll.webp";

const BASE = "https://www.nimrodi.co.il";
const FAQS = [
  {
    q: "Can you run payroll for a foreign company with employees in Israel?",
    a: "We can assist with payroll setup and ongoing administration, including employer information required for National Insurance and income-tax reporting. Legal registration and pension or insurance advice require the appropriate qualified advisers.",
  },
  {
    q: "Do you handle Section 102 ESOP plans?",
    a: "Yes — we work with trustees, coordinate filings and approval processes with the Tax Authority, produce Form 106 (Annual Tax Statement), and support employees through exercise and sale under Section 102 (Equity & ESOP Incentive Plans).",
  },
  {
    q: "What about severance (Form 161) and terminations?",
    a: "We prepare payroll information for Form 161, coordinate available pension information and assist with reviewing tax considerations relating to severance, subject to the employee’s circumstances and applicable law.",
  },
];

export const Route = createFileRoute("/en/payroll")({
  head: () => ({
    meta: [
      { title: "Israeli Payroll Services | Section 102 ESOP | Nimrodi & Co." },
      {
        name: "description",
        content:
          "Payroll services in Israel for companies and startups, including payslips, employer reporting, Section 102 information and annual forms. Contact the firm today.",
      },
      { property: "og:title", content: "Payroll & ESOP Services — Nimrodi & Co." },
      {
        property: "og:description",
        content:
          "Israeli payroll administration and equity-plan reporting for companies and startups, including payslips, employer filings and annual forms. Contact the firm.",
      },
      { property: "og:url", content: `${BASE}/en/payroll` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/payroll` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/payroll` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/payroll` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildFaqJsonLd(FAQS)) }],
  }),
  component: () => (
    <ServiceLandingEn
      heroImage={heroImg}
      heroImageAlt="Israeli payslips and salary calculations on a desk"
      icon={ReceiptText}
      eyebrow="Payroll & ESOP"
      title="Israeli payroll, employer reporting and equity-compensation support"
      intro="Israeli payroll may involve mandatory pension contributions, study-fund arrangements, National Insurance, severance, cross-border employee considerations and equity plans. We support the payroll and reporting processes included in the agreed scope."
      highlights={[
        "Monthly Israeli payslips (tlush)",
        "Bituach Leumi & income tax filings",
        "Section 102 (Equity & ESOP Incentive Plans) — capital / income track",
        "Form 106 (Annual Tax Statement), Form 161 (severance)",
        "Payroll information and coordination for pension and study-fund contributions",
        "Payroll for foreign companies (EOR alternative)",
      ]}
      sections={[
        {
          title: "Payroll for Israeli & foreign employers",
          body: "We support Israeli and foreign companies with payroll setup and ongoing payroll administration in Israel, including coordination of registrations and employee information according to the scope of the engagement.",
          bullets: [
            "Registration with Tax Authority, Bituach Leumi and pension funds",
            "Monthly gross-to-net calculations and payslips",
            "Employer filings (Form 102, annual Form 126)",
            "Employee onboarding and offboarding",
            "Support with expat and relocation tax regimes",
          ],
        },
        {
          title: "Section 102 ESOP plans",
          body: "We assist with the Israeli accounting, payroll and tax aspects of Section 102 employee equity plans, including relevant information, reporting and trustee coordination, within the agreed scope and in coordination with the company’s legal advisers. Under certain routes and subject to the applicable conditions, capital-gains tax treatment may apply. The actual tax treatment depends on the relevant allocation route, plan terms, trustee requirements, holding periods and the circumstances of the realization.",
        },
        {
          title: "Termination & severance",
          body: "Depending on the engagement, services may include preparation of Form 161 information, coordination of relevant payroll data and assistance with the accounting and tax information required for the termination process.",
        },
      ]}
      faqs={FAQS}
    />
  ),
});
