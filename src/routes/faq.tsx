import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";

const CATEGORIES = [
  {
    title: "כללי",
    items: [
      {
        q: "איפה ממוקם המשרד ובאילו אזורים אתם מלווים לקוחות?",
        a: "המשרד ממוקם באזור התעשייה של הרצליה פיתוח. אנו מלווים לקוחות בהרצליה, רמת השרון, רעננה, תל אביב והסביבה, וגם לקוחות מרחוק בכל הארץ באמצעות מערכות דיגיטליות ו-Zoom.",
      },
      {
        q: "מה יתרון של משרד בוטיק על פני משרד גדול?",
        a: "אצלנו מקבלים יחס אישי מרואה החשבון המטפל – לא מוקד ולא מזכירה. הזמינות גבוהה, המענה מהיר, וההיכרות עם העסק שלכם עמוקה ואמיתית.",
      },
      {
        q: "כמה עולה שירות של רואה חשבון?",
        a: "העלות תלויה בסוג הישות, בהיקף הפעילות, במספר התנועות, במורכבות הטיפול ובשירותים הנדרשים. לאחר שיחת היכרות ובחינת הצרכים ניתן להציג את היקף השירות ואת תנאי ההתקשרות.",
      },
    ],
  },
  {
    title: "לחברות וסטארטאפים",
    items: [
      {
        q: "מה כולל ליווי חשבונאי לחברה או סטארטאפ?",
        a: "הליווי כולל הנהלת חשבונות שוטפת, הפקת תלושי שכר, דוחות כספיים חודשיים ורבעוניים, דוחות שנתיים, ייעוץ מס, שירותי חשבות (CFO חיצוני), ליווי גיוסי הון והכנה להנפקות.",
      },
      {
        q: "האם אתם מלווים בגיוסי הון וסבבי השקעה?",
        a: "כן. יש לנו ניסיון עשיר בליווי חברות בסבבי Seed, A, B ומעלה – כולל בניית דוחות למשקיעים, ליווי Due Diligence, הכנת Cap Table ותכנון מס לפני ואחרי הגיוס.",
      },
      {
        q: "מה זה תוכנית 102 ואיך מטפלים באופציות לעובדים?",
        a: "ליווי בהיבטי המס והדיווח הקשורים לתוכניות אופציות והקצאות הוניות לעובדים, לרבות בחינת מסלולים רלוונטיים לפי סעיף 102, בהתאם לנסיבות ולתנאים החלים. אנו מלווים את כל התהליך – בחירת המסלול, אישור נאמן ודיווחים לרשות המסים ולעובדים.",
      },
    ],
  },
  {
    title: "לעצמאים ופרילנסרים",
    items: [
      {
        q: "האם אתם מתאימים גם לעצמאים בתחילת דרך?",
        a: "בהחלט. אנו מלווים עצמאים, פרילנסרים ובעלי מקצועות חופשיים מתחילת הפעילות – מפתיחת התיקים ברשויות, דרך דיווחים שוטפים ועד דוח שנתי, הצהרת הון ובחינת היבטי מס אישיים.",
      },
      {
        q: "מה ההבדל בין עוסק פטור לעוסק מורשה?",
        a: "עוסק פטור מוגבל בתקרת הכנסה שנתית ואינו גובה מע״מ (וגם לא מקזז מע״מ תשומות). עוסק מורשה גובה ומקזז מע״מ ומתאים לרוב פעילויות המסחר והשירותים. הבחירה תלויה בהיקף הפעילות ובאופי ההוצאות – נעזור לכם להחליט נכון.",
      },
    ],
  },
  {
    title: "מיסוי בין־לאומי וקריפטו",
    items: [
      {
        q: "האם אתם מטפלים בהכנסות מחו״ל, קריפטו ורילוקיישן?",
        a: "כן. אנו מלווים בסוגיות מס הנוגעות לנכסים דיגיטליים, בעסקאות מורכבות ובהכנת המידע והתיעוד הנדרשים להתנהלות מול בנקים בישראל. אנו מסייעים גם בהכנת דיווחים לרשות המסים, בסוגיות מיסוי בין־לאומי, בבחינת תושבות מס ובליווי עולים חדשים ותושבים חוזרים, בהתאם לנסיבות ולדין החל.",
      },
      {
        q: "מתי צריך לדווח על רווחים מקריפטו?",
        a: "מכירה, המרה או שימוש במטבע דיגיטלי (כולל DeFi, Staking ו-NFT) עשויים ליצור אירוע מס וחובת דיווח בהתאם לנסיבות ולדין. אנו בונים תיעוד של הארנקים והבורסות, מחשבים רווח/הפסד לפי שיטה עקבית ובשער התאריך, ומכינים דיווח לרשות המסים – כולל בחינת הליכי גילוי מרצון בעת הצורך.",
      },
      {
        q: "איך מכניסים כספי קריפטו לבנק בישראל?",
        a: "אנו מלווים לקוחות מקצה לקצה מול הבנקים בישראל בהעברת תמורות ממכירת קריפטו – כולל הכנת תיק AML/KYC, מסמכי מקור כסף (Source of Funds), חוות דעת מיסוי ותיאום מול מחלקות הציות הבנקאיות בהתאם למדיניות בנק ישראל.",
      },
      {
        q: "האם אתם מגישים בקשות Pre-Ruling לרשות המסים בנושא קריפטו?",
        a: "בפעילות מהותית או מורכבת בנכסים דיגיטליים ניתן לבחון את הסיווג החשבונאי והמיסויי ואת הצורך בפנייה מקדמית לרשות המסים. במקרים המתאימים אנו מסייעים בהכנת המידע ובהצגת העמדה המקצועית, בהתאם לנתונים, להיקף ההתקשרות ולשיקול דעתה של רשות המסים.",
      },
    ],
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CATEGORIES.flatMap((c) =>
    c.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  ),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "שאלות ותשובות | נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        name: "description",
        content:
          "כל התשובות על שירותי רואי חשבון – ליווי חברות, עצמאים, מיסוי בין־לאומי, קריפטו וגיוסי הון. משרד נמרודי ושות׳ בהרצליה פיתוח.",
      },
      { property: "og:title", content: "שאלות ותשובות – נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "מדריך תשובות מקיף על שירותי רואה חשבון, מיסוי, גיוסי הון וליווי עצמאים.",
      },
      { property: "og:url", content: "/faq" },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/faq" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/faq" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en/faq" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            שאלות ותשובות
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            כל מה שרציתם לדעת – ותשובה שלנו
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            שאלות נפוצות מלקוחות פרטיים ועסקיים על שירותי משרד רואי החשבון.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-14 px-4 sm:px-6">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-display text-2xl font-bold text-primary">{cat.title}</h2>
              <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
                {cat.items.map((f) => (
                  <details
                    key={f.q}
                    className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-right font-semibold text-primary">
                      <span>{f.q}</span>
                      <span className="mt-1 text-gold transition group-open:rotate-45" aria-hidden>
                        ＋
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
