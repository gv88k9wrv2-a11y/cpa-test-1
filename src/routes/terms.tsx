import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import { FirmContactBlock } from "../components/firm-contact-block";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {"title": "תנאי שימוש | נמרודי ושות׳ – רואי חשבון"},
      {"name": "description", "content": "תנאי שימוש באתר נמרודי ושות׳ רואי חשבון: מידע כללי, פניות ושאלוני שירות, פרטיות, מסמכים, אחריות והתקשרות מקצועית בהתאם לדין. קראו את התנאים המלאים באתר המשרד."},
      {"property": "og:title", "content": "תנאי שימוש | נמרודי ושות׳ – רואי חשבון"},
      {"property": "og:description", "content": "תנאי שימוש באתר נמרודי ושות׳ רואי חשבון: מידע כללי, פניות ושאלוני שירות, פרטיות, מסמכים, אחריות והתקשרות מקצועית בהתאם לדין. קראו את התנאים המלאים באתר המשרד."},
      {"property": "og:type", "content": "website"},
      {"property": "og:locale", "content": "he_IL"},
      {"property": "og:url", "content": "https://nimrodi.co.il/terms"},
      {"name": "twitter:title", "content": "תנאי שימוש | נמרודי ושות׳ – רואי חשבון"},
      {"name": "twitter:description", "content": "תנאי שימוש באתר נמרודי ושות׳ רואי חשבון: מידע כללי, פניות ושאלוני שירות, פרטיות, מסמכים, אחריות והתקשרות מקצועית בהתאם לדין. קראו את התנאים המלאים באתר המשרד."},
      {"name": "twitter:card", "content": "summary_large_image"},
      {"name": "robots", "content": "index, follow"},
    ],
    links: [
      {"rel": "canonical", "href": "https://nimrodi.co.il/terms"},
      {"rel": "alternate", "hrefLang": "he-IL", "href": "https://nimrodi.co.il/terms"},
      {"rel": "alternate", "hrefLang": "en-US", "href": "https://nimrodi.co.il/en/terms"},
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6" dir="rtl">
        <header className="border-b border-border/60 pb-6">
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">תנאי שימוש</h1>
          <p className="mt-3 text-foreground">נמרודי ושות׳ רואי חשבון</p>
          <p className="mt-3 text-sm text-muted-foreground">עודכן לאחרונה: נובמבר 2026</p>
        </header>
        <article className="mt-10 space-y-10 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">1. תחולה</h2>
            <p className="mt-3">השימוש באתר נמרודי ושות׳ רואי חשבון, ב-CPAI, בטופסי יצירת קשר ובמסלולי השירות המקוונים כפוף לתנאים אלה ולמדיניות הפרטיות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">2. מטרת השירותים</h2>
            <p className="mt-3">האתר והשירותים הדיגיטליים מיועדים להצגת מידע כללי, קבלת פניות, הפעלת שאלוני שירות, סיווג וניתוב פניות ותיאום קשר עם המשרד.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">3. מידע כללי בלבד</h2>
            <p className="mt-3">אלא אם ניתן במפורש כחלק מהתקשרות מקצועית, אין לראות בתוכן, בשאלון, בתוצאה או בסיווג משום חוות דעת מקצועית, ייעוץ חשבונאי, ייעוץ מס, ייעוץ משפטי, ייעוץ פיננסי או התחייבות לתוצאה.</p>
            <p className="mt-3">אין להסתמך על מידע כללי לצורך קבלת החלטה מקצועית ללא בחינה פרטנית המתאימה לנסיבות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">4. CPAI ומסלולי השירות</h2>
            <p className="mt-3">CPAI מאפשרת למסור מידע ראשוני באמצעות שאלוני שירות מובנים לצורך קליטת הפנייה, סיווגה וניתובה.</p>
            <p className="mt-3">מסלולי השירות עשויים להשתנות ולהתרחב מעת לעת.</p>
            <p className="mt-3">תוצאות או סיווגים המוצגים באמצעות CPAI אינם כשלעצמם עמדה מקצועית מחייבת של המשרד.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">5. אין יצירת התקשרות מקצועית</h2>
            <p className="mt-3">עצם הגלישה באתר, מילוי שאלון, שליחת פנייה, קבלת הודעת אישור, קבלת מידע כללי או קיום שיחה ראשונית אינם יוצרים כשלעצמם התקשרות מקצועית או התחייבות של המשרד לקבל את הפנייה לטיפול.</p>
            <p className="mt-3">התקשרות מקצועית תחול לאחר שהמשרד אישר את קבלת הלקוח והוסכמו היקף השירות ותנאיו.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">6. נכונות המידע</h2>
            <p className="mt-3">המשתמש מתבקש למסור מידע נכון, מלא ומדויק ככל האפשר. המשרד רשאי לבקש מידע נוסף או הבהרות לצורך בחינת הפנייה והמשך הטיפול.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">7. מסמכים ומידע רגיש</h2>
            <p className="mt-3">אין להעביר באמצעות CPAI מסמכי לקוחות או מידע רגיש שאינו נדרש במפורש במסגרת מסלול השירות.</p>
            <p className="mt-3">ככל שיידרשו מסמכים, המשרד ינחה כיצד להעבירם. בהתאם למדיניות הנוכחית, מסמכים שהתבקשו יועברו ל-office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">8. AI וכלים אוטומטיים</h2>
            <p className="mt-3">המשרד עשוי להסתייע בכלים אוטומטיים ובכלי AI לצרכים פנימיים או מבוקרים.</p>
            <p className="mt-3">בשלב הנוכחי מסלולי השירות הציבוריים הפעילים של CPAI אינם מיועדים להעניק ללקוחות חוות דעת מקצועיות או תשובות מקצועיות אוטומטיות באמצעות AI.</p>
            <p className="mt-3">פלט של כלי טכנולוגי אינו מחליף בדיקה מקצועית הנדרשת בנסיבות העניין.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">9. שימוש אסור</h2>
            <p className="mt-3">אין לעשות באתר או ב-CPAI שימוש בלתי חוקי, להפריע לפעילותם, לנסות לקבל גישה בלתי מורשית, להעביר קוד זדוני או לבצע שליחות אוטומטיות בלתי מורשות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">10. זמינות ושינויים</h2>
            <p className="mt-3">המשרד רשאי לעדכן, לשנות, להשעות או להפסיק רכיב בשירותים הדיגיטליים לצורכי תחזוקה, אבטחה, התאמה לדין או שיפור השירות.</p>
            <p className="mt-3">המשרד אינו מתחייב לזמינות רציפה וללא תקלות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">11. קניין רוחני</h2>
            <p className="mt-3">הזכויות בתכנים המקוריים, מבנה השאלונים, הטקסטים, העיצוב והמיתוג שייכות למשרד או לבעלי הזכויות הרלוונטיים.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">12. שירותים חיצוניים</h2>
            <p className="mt-3">שירותים וקישורים חיצוניים כפופים גם לתנאים ולמדיניות של הגורמים המפעילים אותם.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">13. פרטיות</h2>
            <p className="mt-3">עיבוד מידע אישי במסגרת האתר ו-CPAI נעשה בהתאם למדיניות הפרטיות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">14. אחריות</h2>
            <p className="mt-3">המשרד אינו מתחייב כי כל תוכן כללי יהיה מלא, עדכני או מתאים לנסיבותיו של כל משתמש.</p>
            <p className="mt-3">אין להסתמך על תוכן כללי לצורך קבלת החלטה מקצועית ללא ייעוץ המתאים לנסיבות.</p>
            <p className="mt-3">אין בתנאים אלה כדי לגרוע מאחריות שלא ניתן להגביל לפי דין או מאחריות מכוח הסכם התקשרות מקצועי.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">15. שפות</h2>
            <p className="mt-3">תנאי השימוש ומדיניות הפרטיות עשויים להתפרסם בעברית ובאנגלית.</p>
            <p className="mt-3">במקרה של סתירה או אי-התאמה בין הגרסאות, תגבר הגרסה העברית, בכפוף להוראות הדין.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">16. דין</h2>
            <p className="mt-3">על השימוש באתר וב-CPAI יחולו דיני מדינת ישראל.</p>
            <p className="mt-3">כל מחלוקת תתברר בפני הערכאה המוסמכת בהתאם להוראות הדין.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">17. עדכונים</h2>
            <p className="mt-3">המשרד רשאי לעדכן תנאים אלה מעת לעת, ותאריך העדכון האחרון יוצג בראש העמוד.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">18. יצירת קשר</h2>
            <p className="mt-3">נמרודי ושות׳ רואי חשבון<br />רח׳ גלגלי הפלדה 16, הרצליה פיתוח 4672216, ישראל<br />טלפון: <bdi dir="ltr">09-958-2211</bdi><br />דוא״ל: office@nimrodi.co.il</p>
          </section>
        </article>
        <FirmContactBlock lang="he" />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
