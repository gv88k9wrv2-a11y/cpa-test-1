import { createFileRoute } from "@tanstack/react-router";
import { GatewayPage } from "../components/gateway-page";
import { INDIVIDUALS_GROUPS_HE } from "../data/nav-content";

const BASE = "https://www.nimrodi.co.il";
const DESCRIPTION =
  "שירותי מס ודיווח ליחידים ולעצמאים: דוחות שנתיים, הצהרות הון, קריפטו, שכר דירה, רילוקיישן, גילוי מרצון והחזרי מס. בחרו נושא ופנו למשרד לשיחת היכרות כעת.";

export const Route = createFileRoute("/individuals")({
  head: () => ({
    meta: [
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
      sections={[
        {
          id: "employee-tax-refunds",
          title: "החזרי מס לשכירים",
          body: "בחינת זכאות אפשרית להחזר מס לשכירים נעשית על בסיס טופסי 106, אישורי ניכוי מס, נתוני הכנסות נוספות ואסמכתאות על זיכויים וניכויים אפשריים. במסגרת ההתקשרות ניתן לרכז את המידע, לבחון את שנות המס הפתוחות לדיווח ולהכין את הדוח השנתי בהתאם לנתונים שנמסרו ולהוראות הדין. קיום החזר בפועל, אם קיים, נקבע על ידי רשות המסים.",
        },
        {
          id: "guardians",
          title: "שירותים לאפוטרופוסים",
          body: "לאפוטרופוסים ניתן לקבל סיוע בריכוז נתונים כספיים, בהכנת מידע לדיווחים תקופתיים ולדוחות הנדרשים ובבחינת חובות דיווח למס הכנסה בגין נכסים והכנסות של האדם שעליו מונתה האפוטרופסות. היקף השירות, אופן הדיווח והאחריות נקבעים בהתאם לנסיבות, למסמכים שנמסרו ולהוראות הגורמים המוסמכים.",
        },
      ]}
      ctaLabel="ליצירת קשר"
      ctaTo="/contact"
    />
  ),
});
