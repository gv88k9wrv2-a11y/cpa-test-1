import { createFileRoute } from "@tanstack/react-router";
import { UnifiedHome } from "../components/unified-home";
import { HOME_CONTENT } from "../data/home-content";
import heroOffice from "../assets/hero-office.webp";

const BASE = "https://nimrodi.co.il";



export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: "Nimrodi & Co. CPA – Herzliya Firm for Startups & Foreign Cos" },
      { name: "twitter:description", content: "Boutique CPA firm in Herzliya Pituach supporting startups, foreign companies, freelancers and individuals with accounting, tax and reporting. Get in touch." },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Nimrodi & Co. CPA – Herzliya Firm for Startups & Foreign Cos" },
      {
        name: "description",
        content:
          "Boutique CPA firm in Herzliya Pituach supporting startups, foreign companies, freelancers and individuals with accounting, tax and reporting. Get in touch.",
      },
      {
        property: "og:title",
        content: "Nimrodi & Co. CPA – Herzliya Firm for Startups & Foreign Cos",
      },
      { property: "og:description", content: "Boutique CPA firm in Herzliya Pituach supporting startups, foreign companies, freelancers and individuals with accounting, tax and reporting. Get in touch." },
      { property: "og:url", content: `${BASE}/en` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroOffice,
        type: "image/webp",
        fetchPriority: "high",
      },
      { rel: "canonical", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en` },
      { rel: "alternate", hrefLang: "x-default", href: `${BASE}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_CONTENT.en.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomeEn,
});

function HomeEn() {
  return <UnifiedHome lang="en" />;
}
