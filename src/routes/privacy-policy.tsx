import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import { FirmContactBlock } from "../components/firm-contact-block";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות ותנאי שימוש | נמרודי ושות׳ – רואי חשבון" },
      {
        name: "description",
        content:
          "מדיניות הפרטיות ותנאי השימוש של נמרודי ושות׳ רואי חשבון: איסוף מידע, שימוש, שמירה, אבטחה וזכויות המשתמש בהתאם לדין החל. קראו את המדיניות המלאה כאן. נשמח לסייע.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "מדיניות פרטיות ותנאי שימוש | נמרודי ושות׳" },
      { property: "og:description", content: "מדיניות הפרטיות של נמרודי ושות׳: אופן איסוף המידע, השימוש בו, אבטחתו והזכויות שלכם בהתאם לתיקון 13 ולדין החל בישראל. קראו את המדיניות המלאה שלנו באתר." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/privacy-policy" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/privacy-policy" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en/privacy-policy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6" dir="rtl">
        <header className="border-b border-border/60 pb-6">
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
            מדיניות פרטיות ותנאי שימוש
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">עודכן לאחרונה: אוגוסט 2026</p>
        </header>

        <article className="mt-10 space-y-10 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              1. מחויבות לסודיות ותחולת המדיניות
            </h2>
            <p className="mt-3">
              נמרודי ושות׳ – רואי חשבון (להלן: "המשרד") מחויב לסודיות מקצועית וטיפול במידע בהתאם להוראות הדין ולמדיניות הפרטיות הרלוונטית של פרטי לקוחותיו והפונים
              אליו, בהתאם לכללי האתיקה המקצועית של רואי החשבון בישראל ולחוק הגנת הפרטיות,
              התשמ״א-1981 (לרבות תיקון מס' 13).
            </p>
            <p className="mt-3">
              מדיניות זו חלה על השימוש והאינטראקציה באתר האינטרנט של המשרד. מתן שירותים מקצועיים
              ללקוחות המשרד מוסדר באמצעות הסכמי התקשרות פרטניים ונפרדים ולא באמצעות אתר זה.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              2. העברת מסמכים, טפסים ומידע פיננסי
            </h2>
            <p className="mt-3">
              אתר זה הינו אתר תדמיתי ואינפורמטיבי בלבד. האתר <strong>אינו מיועד ואינו מאפשר</strong>{" "}
              העלאה, שליחה או עיבוד של דוחות כספיים, טפסי מס, נתוני שכר, או מסמכים אישיים ופיננסיים
              רגישים.
            </p>
            <p className="mt-3">
              לקוחות המשרד מתבקשים להעביר מסמכים ונתונים אך ורק באמצעות הערוצים המאובטחים והייעודיים
              שהוגדרו על ידי המשרד (כגון שאלונים מאובטחים, Dropbox File Request, דוא״ל מוגן או מסירה
              ידנית במשרד).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              3. איסוף מידע ומטרותיו (חובת יידוע לפי תיקון 13)
            </h2>
            <p className="mt-3">
              דרך טפסי הפנייה באתר אנו אוספים אך ורק את הפרטים שבחרתם למסור מרצונכם החופשי: שם מלא,
              שם חברה, כתובת אימייל, מספר טלפון ותוכן ההודעה. <strong>לא חלה עליכם חובה חוקית</strong>{" "}
              למסור פרטים אלו.
            </p>
            <p className="mt-3">
              המידע משמש אך ורק ליצירת קשר חוזר, מענה לפנייתכם ותיאום פגישת ייעוץ. הפרטים מטופלים אך ורק בהתאם למדיניות פרטיות זו ולהוראות הדין החלות, ואינם נמכרים, מושכרים או מועברים לצדדים שלישיים, אלא במידה הנדרשת על פי דין.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              4. אבטחת מידע, ספקי תשתיות ועוגיות (Cookies)
            </h2>
            <p className="mt-3">
              האתר מאובטח באמצעות חיבור מוצפן (HTTPS). האתר עשוי לאסוף מידע טכני כללי (כגון כתובת
              IP, סוג דפדפן, ועוגיות תפעוליות/אנליטיות לצורכי אבטחה ושיפור הגלישה).
            </p>
            <p className="mt-3">
              עיבוד הנתונים הטכניים עשוי להתבצע באמצעות ספקי שירותי מחשוב, תשתיות ואחסון בענן הכפופים
              להסכמי אבטחה וסודיות קפדניים. האתר מיועד לקהל עסקי ומקצועי ואינו אוסף ביודעין מידע מקטינים.
            </p>
            <p className="mt-3">
              ייתכן כי המידע יעובד או יאוחסן גם מחוץ לישראל באמצעות ספקי שירות העומדים בסטנדרטים מקובלים של אבטחת מידע וסודיות.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              5. שמירת מידע, זכויות המשתמשים ויצירת קשר
            </h2>
            <p className="mt-3">
              המידע יישמר אך ורק לתקופה הנדרשת לטיפול בפנייתכם או בהתאם לחובות שמירת מסמכים על פי דין.
              עומדת לכם הזכות לעיין במידע האישי הנשמר אודותיכם בידי המשרד, לתקנו או לבקש את מחיקתו.
            </p>
            <p className="mt-3">
              לשאלות בנושא פרטיות או למימוש זכויותיכם ניתן לפנות לכתובת הדוא״ל:{" "}
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline">
                office@nimrodi.co.il
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              6. העדר הסתמכות והגבלת אחריות מקצועית (Disclaimer)
            </h2>
            <p className="mt-3">
              כל התכנים, המאמרים והמידע המוצגים באתר מיועדים להתרשמות כללית ומתן מידע ראשוני בלבד.
              המידע באתר <strong>אינו מהווה ייעוץ חשבונאי, מיסויי, משפטי או פיננסי</strong>, ואינו
              מחליף חוות דעת מקצועית או ייעוץ פרטני המותאם לנסיבותיו של כל לקוח/ה.
            </p>
            <p className="mt-3">
              המשרד אינו נושא באחריות לכל תוצאה שתיגרם כתוצאה מהסתמכות על המידע המופיע באתר ללא קבלת
              ייעוץ פרטני מראש.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              7. עדכון מדיניות הפרטיות
            </h2>
            <p className="mt-3">
              המשרד רשאי לעדכן מדיניות פרטיות זו מעת לעת בהתאם לשינויים בדין, בשירותי האתר או באופן
              עיבוד המידע. הגרסה המעודכנת תפורסם באתר ותיכנס לתוקף ממועד פרסומה.
            </p>
          </section>

          <section className="rounded-2xl border border-gold/40 bg-gold/5 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">8. פרטי המשרד</h2>
            <address className="mt-3 not-italic leading-8">
              <strong>נמרודי ושות׳ – רואי חשבון</strong>
              <br />
              כתובת: גלגלי הפלדה 16, הרצליה פיתוח
              <br />
              טלפון:{" "}
              <a href="tel:099582211" className="text-gold underline">
                09-9582211
              </a>
              <br />
              דוא״ל:{" "}
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline">
                office@nimrodi.co.il
              </a>
            </address>
          </section>
        </article>
        <FirmContactBlock lang="he" />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
