import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import { FirmContactBlock } from "../components/firm-contact-block";

const UPDATED_HE = "אוגוסט 2026";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | נמרודי ושות׳ רואי חשבון" },
      {
        name: "description",
        content:
          "הצהרת הנגישות של נמרודי ושות׳ רואי חשבון: עקרונות הנגישות באתר, מידע על הגעה ועל נגישות פיזית במשרד בהרצליה פיתוח ודרכי פנייה לתיאום התאמה. אפשר לפנות אלינו לבירור ראשוני.",
      },
      { property: "og:title", content: "הצהרת נגישות | נמרודי ושות׳ רואי חשבון" },
      {
        property: "og:description",
        content:
          "הצהרת הנגישות של נמרודי ושות׳ רואי חשבון: עקרונות הנגישות באתר, מידע על הגעה ועל נגישות פיזית במשרד בהרצליה פיתוח ודרכי פנייה לתיאום התאמה. נשמח לסייע.",
      },
      { property: "og:url", content: "https://www.nimrodi.co.il/accessibility" },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/accessibility" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/accessibility" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en/accessibility" },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
              הצהרת נגישות
            </h1>
            <p className="mt-4 text-muted-foreground">עודכן לאחרונה: {UPDATED_HE}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 leading-relaxed text-muted-foreground sm:px-6">
            <p>
              נמרודי ושות׳ רואי חשבון מייחסת חשיבות למתן שירות שוויוני ונגיש ופועלת לשיפור נגישות
              האתר והשירותים הניתנים על ידה.
            </p>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">נגישות אתר האינטרנט</h2>
              <p>
                האתר נבנה תוך התייחסות לעקרונות נגישות מקובלים, ובהם מבנה סמנטי, ניווט באמצעות
                מקלדת, טקסט חלופי לתמונות, ניגודיות ותמיכה בטכנולוגיות מסייעות. אנו ממשיכים לבדוק
                ולשפר את האתר. אין בהצהרה זו טענה כי בוצעה בדיקה ידנית מלאה או כי האתר עומד באופן
                מלא בתקן מסוים, אלא אם בדיקה כזאת בוצעה ותועדה בפועל.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">הגעה ונגישות פיזית</h2>
              <p>
                המשרד ממוקם ברחוב גלגלי הפלדה 16, הרצליה פיתוח. החניה באזור היא ברחוב או בחניונים
                ציבוריים סמוכים, בכפוף לזמינות ולתנאי המקום. החניות אינן חניות פרטיות של המשרד או של
                הבניין, זמינותן אינה בשליטת המשרד ואינה מובטחת. קיים מסלול נגיש ורציף מהחניה
                ברחוב ועד למשרד, לרבות מעלית. בבניין קיימים שירותים, אך ככל הידוע למשרד הם טרם אושרו
                כנדרש וטרם סומנו כשירותים נגישים. אם נדרשת
                התאמת נגישות לצורך קבלת שירות, אנא צרו קשר מראש כדי שנוכל לבחון תיאום או חלופה נגישה
                בהתאם לצורך ולאפשרויות.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                יצירת קשר בנושא נגישות
              </h2>
              <div className="space-y-3 rounded-lg border border-border/60 bg-secondary/30 p-6">
                <p>
                  <strong>טלפון:</strong>{" "}
                  <a href="tel:099582211" className="text-primary hover:text-gold hover:underline">
                    09-9582211
                  </a>
                </p>
                <p>
                  <strong>וואטסאפ:</strong>{" "}
                  <a
                    href="https://wa.me/972546688681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-gold hover:underline"
                  >
                    054-6688681
                  </a>
                </p>
                <p>
                  <strong>דוא״ל:</strong>{" "}
                  <a
                    href="mailto:office@nimrodi.co.il"
                    className="text-primary hover:text-gold hover:underline"
                  >
                    office@nimrodi.co.il
                  </a>
                </p>
              </div>
              <p>
                בפנייה יש לציין את אופן יצירת הקשר המועדף ואת ההתאמה הנדרשת. הפנייה תיבחן בהתאם
                לנסיבות ולאפשרויות ההתאמה.
              </p>
            </div>

            <p className="pt-4 text-sm text-muted-foreground/80">
              הצהרה זו עודכנה לאחרונה בחודש {UPDATED_HE}.
            </p>
          </div>
        </section>
        <FirmContactBlock lang="he" />
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
