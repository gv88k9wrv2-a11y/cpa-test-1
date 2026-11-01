import { buildBreadcrumbJsonLd } from "../lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { GatewayPage } from "../components/gateway-page";
import { INDIVIDUALS_GROUPS_HE } from "../data/nav-content";

const BASE = "https://nimrodi.co.il";
const DESCRIPTION =
  "שירותי מס ודיווח ליחידים ולעצמאים: דוחות שנתיים, הצהרות הון, קריפטו, שכר דירה, רילוקיישן, גילוי מרצון והחזרי מס. בחרו נושא ופנו למשרד לשיחת היכרות כעת.";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
      { name: "twitter:title", content: "שירותי מס ליחידים ולעצמאים | נמרודי ושות׳" },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:locale", content: "he_IL" },
      { title: "שירותי מס ליחידים ולעצמאים | נמרודי ושות׳" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "שירותי מס ליחידים ולעצמאים | נמרודי ושות׳" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${BASE}/individuals` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(buildBreadcrumbJsonLd([{"name": "בית", "url": "https://nimrodi.co.il/"}, {"name": "יחידים ועצמאים", "url": "https://nimrodi.co.il/individuals"}])) }],
    links: [
      { rel: "canonical", href: `${BASE}/individuals` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/individuals` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/individuals` },
    ],
  }),
  component: () => (
    <GatewayPage
      lang="he"
      h1="יחידים ועצמאים"
      intro="שירותי מס ודיווח ליחידים ולעצמאים, לרבות דוחות שנתיים, הצהרות הון, קריפטו, שכר דירה, רילוקיישן, גילוי מרצון והחזרי מס."
      instruction="בחרו את הנושא המתאים כדי להגיע לעמוד השירות הרלוונטי."
      groups={INDIVIDUALS_GROUPS_HE}
      ctaLabel="צור קשר →"
      ctaTo="/contact"
    />
  ),
});
