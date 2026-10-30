import { createFileRoute } from "@tanstack/react-router";
import { GatewayPage } from "../components/gateway-page";
import { COMPANIES_GROUPS_HE } from "../data/nav-content";

const BASE = "https://nimrodi.co.il";
const DESCRIPTION =
  "שירותי ביקורת, חשבונאות, מס, שכר וניהול כספים לחברות ישראליות, סטארטאפים וחברות זרות הפועלות בישראל. הכירו את מסלולי השירות ופנו למשרד לשיחת היכרות כעת.";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "חברות וסטארטאפים | נמרודי ושות׳ רואי חשבון" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "חברות וסטארטאפים | נמרודי ושות׳ רואי חשבון" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${BASE}/companies` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/companies` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/companies` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/companies` },
    ],
  }),
  component: () => (
    <GatewayPage
      lang="he"
      h1="חברות וסטארטאפים"
      intro="שירותי חשבונאות, ביקורת, מס, שכר וניהול כספים לחברות ישראליות, סטארטאפים, חברות זרות הפועלות בישראל ועמותות."
      instruction="בחרו את סוג החברה או את השירות המקצועי המתאים."
      groups={COMPANIES_GROUPS_HE}
      sections={[
        {
          id: "cpa-herzliya",
          title: "משרד רואי חשבון בהרצליה פיתוח",
          body: "המשרד ממוקם בגלגלי הפלדה 16, הרצליה פיתוח, ומלווה חברות וסטארטאפים בהרצליה, רמת השרון, רעננה, תל אביב והסביבה – וגם מרחוק בזום ובמערכות דיגיטליות.",
          link: { label: "לעמוד רואה חשבון בהרצליה", to: "/cpa-herzliya" },
        },
      ]}
      ctaLabel="צור קשר →"
      ctaTo="/contact"
    />
  ),
});
