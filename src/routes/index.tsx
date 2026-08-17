import { createFileRoute } from "@tanstack/react-router";
import { UnifiedHome } from "../components/unified-home";

const FAQS = [
  {
    q: "איפה ממוקם המשרד ובאילו אזורים אתם מלווים לקוחות?",
    a: "המשרד ממוקם באזור התעשייה של הרצליה פיתוח. אנו מלווים לקוחות בהרצליה, רמת השרון, רעננה, תל אביב והסביבה – וגם לקוחות מרחוק בזום ובמערכות דיגיטליות.",
  },
  {
    q: "מה כולל ליווי חשבונאי לחברה או סטארטאפ?",
    a: "הליווי כולל הנהלת חשבונות שוטפת, הפקת תלושי שכר, דוחות כספיים ודוחות שנתיים, ייעוץ מס, שירותי חשבות וניהול כספים, היערכות חשבונאית ופיננסית לתהליכי גיוס הון והנפקה – בהתאם להיקף ההתקשרות המוסכם.",
  },
  {
    q: "האם אתם מתאימים גם לעצמאים ופרילנסרים בתחילת הדרך?",
    a: "בהחלט. אנו מלווים עצמאים, בעלי מקצועות חופשיים, מתכנתים ויועצים – מפתיחת התיקים ברשויות, דרך דיווחים שוטפים ועד דוח שנתי, הצהרת הון ותכנון מס אישי.",
  },
  {
    q: "כמה עולה שירות של רואה חשבון?",
    a: "העלות נגזרת מהיקף הפעילות, מספר התנועות, מורכבות הטיפול והשירותים הנדרשים. לאחר שיחת היכרות ובחינת הצרכים ניתן להציג את היקף השירות ואת תנאי ההתקשרות.",
  },
  {
    q: "האם אתם מטפלים בהכנסות מחו״ל, קריפטו ורילוקיישן?",
    a: "כן. אנו מלווים בסוגיות דיווח ומיסוי הנוגעות לנכסים דיגיטליים, לרבות בחינת אופי הפעילות, איסוף וארגון נתוני עסקאות, חישוב רווחים והפסדים על בסיס הנתונים שנמסרו, הכנת מידע לדוח השנתי ובחינת חובות הדיווח בישראל. בהתאם למקרה, ניתן לסייע גם בהכנת תיעוד הנדרש להתנהלות מול בנקים ורשויות. בנוסף ניתן לקבל שירותים בנושאי מיסוי בין־לאומי, דיווחי חשבונות בחו״ל, בחינת תושבות מס וליווי עולים חדשים ותושבים חוזרים.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "רואי חשבון בהרצליה פיתוח | סטארטאפים וחברות זרות" },
      {
        name: "description",
        content:
          "רואי חשבון בהרצליה פיתוח לסטארטאפים, חברות זרות ועצמאים: הנהלת חשבונות, שכר, דוחות שנתיים, ביקורת, ייעוץ מס ומיסוי נכסים דיגיטליים. צרו קשר לשיחת היכרות.",
      },
      { property: "og:title", content: "רואי חשבון בהרצליה פיתוח | נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "ליווי חשבונאי ומיסויי לסטארטאפים, חברות זרות ועצמאים מהרצליה פיתוח: הנהלת חשבונות, שכר, דוחות, ביקורת, ייעוץ מס ודיווח נכסים דיגיטליים. דברו איתנו לשיחת היכרות.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.nimrodi.co.il/" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return <UnifiedHome lang="he" />;
}
