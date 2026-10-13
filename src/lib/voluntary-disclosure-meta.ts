import { VOLUNTARY_DISCLOSURE } from "../data/voluntary-disclosure";
import { buildBreadcrumbJsonLd, ORG_ID, PERSON_ID } from "./meta";

export function voluntaryDisclosureHead(lang: "he" | "en") {
  const c = VOLUNTARY_DISCLOSURE[lang];
  const he = lang === "he";
  const origin = "https://nimrodi.co.il";
  const path = he ? "/voluntary-disclosure" : "/en/voluntary-disclosure";
  const url = origin + path;
  const serviceName = he ? "גילוי מרצון והסדרה יזומה" : "Voluntary Disclosure & Tax Regularization";
  return {
    meta: [
      { title: c.metaTitle },
      { name: "description", content: c.description },
      { property: "og:title", content: c.metaTitle },
      { property: "og:description", content: c.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "he-IL", href: origin + "/voluntary-disclosure" },
      { rel: "alternate", hrefLang: "en-US", href: origin + "/en/voluntary-disclosure" },
      { rel: "alternate", hrefLang: "x-default", href: origin + "/voluntary-disclosure" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "AccountingService", "@id": ORG_ID,
        name: he ? "נמרודי ושות׳ – רואי חשבון" : "Nimrodi & Co. CPA",
        url: origin, telephone: "+972 9-958-2211", email: "office@nimrodi.co.il",
        founder: { "@id": PERSON_ID },
        address: { "@type": "PostalAddress", streetAddress: he ? "גלגלי הפלדה 16" : "16 Galgalei HaPlada St.", addressLocality: he ? "הרצליה פיתוח" : "Herzliya Pituach", postalCode: "4672216", addressCountry: "IL" },
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "18:00" },
        hasOfferCatalog: { "@type": "OfferCatalog", name: serviceName, itemListElement: [{ "@type": "Offer", itemOffered: { "@type": "Service", name: serviceName, url } }] },
      }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) },
      { type: "application/ld+json", children: JSON.stringify(buildBreadcrumbJsonLd([{ name: he ? "בית" : "Home", url: origin + (he ? "/" : "/en") }, { name: he ? "שירותים" : "Services", url: origin + (he ? "/services" : "/en/services") }, { name: serviceName, url }])) },
    ],
  };
}