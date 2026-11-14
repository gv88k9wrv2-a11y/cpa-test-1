import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import { FirmContactBlock } from "../components/firm-contact-block";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {"title": "מדיניות פרטיות | נמרודי ושות׳ – רואי חשבון"},
      {"name": "description", "content": "מדיניות פרטיות של נמרודי ושות׳ רואי חשבון: איסוף מידע, מטרות השימוש, ספקי שירות, עוגיות, אבטחה וזכויות הפונים בהתאם לדין. קראו את המדיניות המלאה באתר המשרד."},
      {"property": "og:title", "content": "מדיניות פרטיות | נמרודי ושות׳ – רואי חשבון"},
      {"property": "og:description", "content": "מדיניות פרטיות של נמרודי ושות׳ רואי חשבון: איסוף מידע, מטרות השימוש, ספקי שירות, עוגיות, אבטחה וזכויות הפונים בהתאם לדין. קראו את המדיניות המלאה באתר המשרד."},
      {"property": "og:type", "content": "website"},
      {"property": "og:locale", "content": "he_IL"},
      {"property": "og:url", "content": "https://nimrodi.co.il/privacy-policy"},
      {"name": "twitter:title", "content": "מדיניות פרטיות | נמרודי ושות׳ – רואי חשבון"},
      {"name": "twitter:description", "content": "מדיניות פרטיות של נמרודי ושות׳ רואי חשבון: איסוף מידע, מטרות השימוש, ספקי שירות, עוגיות, אבטחה וזכויות הפונים בהתאם לדין. קראו את המדיניות המלאה באתר המשרד."},
      {"name": "twitter:card", "content": "summary_large_image"},
      {"name": "robots", "content": "index, follow"},
    ],
    links: [
      {"rel": "canonical", "href": "https://nimrodi.co.il/privacy-policy"},
      {"rel": "alternate", "hrefLang": "he-IL", "href": "https://nimrodi.co.il/privacy-policy"},
      {"rel": "alternate", "hrefLang": "en-US", "href": "https://nimrodi.co.il/en/privacy-policy"},
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
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">מדיניות פרטיות</h1>
          <p className="mt-3 text-foreground">נמרודי ושות׳ רואי חשבון</p>
          <p className="mt-3 text-sm text-muted-foreground">עודכן לאחרונה: נובמבר 2026</p>
        </header>
        <article className="mt-10 space-y-10 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">1. כללי ותחולה</h2>
            <p className="mt-3">נמרודי ושות׳ רואי חשבון, להלן: "המשרד", מכבדת את פרטיות המשתמשים באתר, הפונים למשרד והמשתמשים בשירותים הדיגיטליים המופעלים על ידו.</p>
            <p className="mt-3">מדיניות זו חלה, לפי העניין, על אתר המשרד, טופסי יצירת קשר, מערכת CPAI, שאלוני שירות ומסלולי שירות מקוונים, פניות שמקורן בקמפיינים וערוצי תקשורת דיגיטליים של המשרד המפנים למדיניות זו.</p>
            <p className="mt-3">שירותים מקצועיים ללקוחות המשרד מוסדרים גם באמצעות הסכמי התקשרות פרטניים ונפרדים.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">2. בעל השליטה במידע</h2>
            <p className="mt-3">בעל השליטה במידע הוא:</p>
            <p className="mt-3">נמרודי ושות׳ רואי חשבון<br />רח׳ גלגלי הפלדה 16, הרצליה פיתוח 4672216, ישראל<br />טלפון: <bdi dir="ltr">09-958-2211</bdi><br />דוא״ל: office@nimrodi.co.il<br />אתר: https://nimrodi.co.il</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">3. מסירת מידע</h2>
            <p className="mt-3">מסירת מידע באמצעות האתר או CPAI נעשית מרצונכם, אלא אם נאמר אחרת במפורש.</p>
            <p className="mt-3">ללא מסירת הפרטים הנדרשים לפנייה מסוימת, ייתכן שלא נוכל לקבל את הפנייה, ליצור עמכם קשר או לבחון את השירות המתאים.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">4. מידע שעשוי להיאסף</h2>
            <p className="mt-3">בהתאם לאופן הפנייה ולמסלול השירות, עשוי להיאסף מידע כגון:</p>
            <ul className="mt-3 list-disc space-y-1 ps-6">
              <li>שם ופרטי קשר;</li>
              <li>שם חברה או עסק, ככל שנמסר;</li>
              <li>סוג השירות המבוקש;</li>
              <li>תשובות לשאלות מובנות במסלול השירות;</li>
              <li>מידע כללי הנדרש באופן סביר לקבלת הפנייה, סיווגה וניתובה;</li>
              <li>הסכמות והעדפות תקשורת;</li>
              <li>מקור הפנייה ונתוני קמפיין;</li>
              <li>מידע טכני ותפעולי הנדרש לתפעול השירות, אבטחתו ומניעת שימוש לרעה.</li>
            </ul>
            <p className="mt-3">סוג המידע עשוי להשתנות בין מסלולי השירות.</p>
            <p className="mt-3">המשרד שואף להגביל את איסוף המידע למידע הנדרש באופן סביר למטרות שלשמן הוא נאסף.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">5. מטרות השימוש</h2>
            <p className="mt-3">המידע עשוי לשמש לצורך קבלת פניות, יצירת קשר ומתן מענה, סיווג וניתוב פניות, ניהול לידים ופניות, תיאום שיחות ופגישות, ניהול הטיפול בפנייה, תפעול ואבטחת השירותים, מניעת שימוש לרעה וספאם, מדידת מקורות פנייה וקמפיינים, הגנה על זכויות המשרד, עמידה בדרישות הדין ומשלוח עדכונים או מידע שיווקי כאשר קיים בסיס מתאים לכך.</p>
            <p className="mt-3">שימוש מהותי במידע למטרה חדשה ייבחן בהתאם לדין, לרבות הצורך ביידוע או בהסכמה נוספים.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">6. CPAI ומסלולי שירות</h2>
            <p className="mt-3">CPAI משמשת לקבלת פניות, הפעלת שאלוני שירות, סיווג ראשוני וניתוב פניות.</p>
            <p className="mt-3">מסלולי השירות עשויים להשתנות ולהתרחב מעת לעת.</p>
            <p className="mt-3">אלא אם צוין במפורש אחרת, שאלון, סיווג, תוצאה או מידע המוצגים באמצעות CPAI אינם מהווים חוות דעת מקצועית, ייעוץ מס, ייעוץ חשבונאי, ייעוץ משפטי, קביעה מחייבת בדבר תושבות, חבות במס או חובת דיווח, או התחייבות לתוצאה.</p>
            <p className="mt-3">בחינה מקצועית מחייבת בדיקה פרטנית של מלוא העובדות והנסיבות הרלוונטיות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">7. מידע ייחודי למסלול שירות</h2>
            <p className="mt-3">כאשר מסלול שירות כרוך בשינוי מהותי בסוגי המידע, מטרות העיבוד, ספקי השירות, השימוש ב-AI, אופן קבלת מסמכים או תקופת השמירה, המשרד יבחן מתן יידוע נוסף ועדכון מדיניות זו, ככל שיידרש.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">8. מסמכי לקוחות</h2>
            <p className="mt-3">מסלולי השירות הציבוריים הפעילים והמאושרים של CPAI אינם מיועדים לקליטת מסמכי לקוחות.</p>
            <p className="mt-3">אין להעביר באמצעותם תעודות זהות, דרכונים, פרטי חשבון בנק, סיסמאות, דוחות מס, מסמכי שכר, חוזים, דוחות כספיים או מסמכים מקצועיים אחרים.</p>
            <p className="mt-3">ככל שיידרשו מסמכים לצורך הטיפול, המשרד ינחה את הפונה כיצד להעבירם. בהתאם למדיניות הנוכחית, מסמכים שהתבקשו על ידי המשרד יועברו ישירות ל-office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">9. בינה מלאכותית</h2>
            <p className="mt-3">המשרד עשוי להסתייע בכלים טכנולוגיים ובכלי בינה מלאכותית לצרכים פנימיים או מבוקרים, כגון סיוע במחקר, ארגון מידע והכנת טיוטות עבודה.</p>
            <p className="mt-3">בשלב הנוכחי מסלולי השירות הציבוריים הפעילים של CPAI אינם מיועדים לספק ללקוחות חוות דעת מקצועיות או תשובות מקצועיות אוטומטיות באמצעות AI.</p>
            <p className="mt-3">שינוי מהותי באופן השימוש במידע אישי באמצעות AI ייבחן בהתאם לדין, ובמידת הצורך יעודכנו המדיניות והיידוע לפני הפעלתו.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">10. WhatsApp</h2>
            <p className="mt-3">WhatsApp עשוי לשמש את המשרד לתקשורת כללית ולתיאום ואינו ערוץ להעברת מסמכי לקוחות.</p>
            <p className="mt-3">ככל שיידרשו מסמכים, המשרד ינחה כיצד להעבירם. בהתאם למדיניות הנוכחית, מסמכים שהתבקשו יועברו ישירות ל-office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">11. ספקי שירות</h2>
            <p className="mt-3">המשרד עשוי להסתייע בספקים חיצוניים לצורכי אירוח, בסיסי נתונים, אבטחה, תקשורת, מדידה, קמפיינים ושירותים טכנולוגיים.</p>
            <p className="mt-3">גישה למידע תוגבל ככל האפשר למידע ולמערכות הנדרשים למתן השירות, וההתקשרויות ייבחנו ויוסדרו בהתאם להוראות הדין החלות.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">12. העברת מידע מחוץ לישראל</h2>
            <p className="mt-3">חלק מספקי השירות עשויים לעבד או לאחסן מידע מחוץ לישראל.</p>
            <p className="mt-3">ככל שמידע אישי מועבר מחוץ לישראל, המשרד יפעל בהתאם להוראות הדין החלות על העברת מידע כאמור.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">13. עוגיות, מדידה וייחוס קמפיינים</h2>
            <p className="mt-3">האתר והשירותים הדיגיטליים עשויים להשתמש בעוגיות ובטכנולוגיות דומות לצורכי תפעול, אבטחה, שמירת העדפות, מדידת שימוש וייחוס מקורות פנייה.</p>
            <p className="mt-3">באתר המשרד נעשה שימוש ב-Google Analytics לצורך ניתוח השימוש באתר וביצועיו. כלים שאינם הכרחיים יופעלו בהתאם לבחירות המשתמש במנגנון ניהול ההסכמה, ככל שנדרש.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">14. אבטחת מידע</h2>
            <p className="mt-3">המשרד נוקט אמצעים ארגוניים וטכנולוגיים שנועדו לצמצם סיכונים למידע ולהגביל את הגישה בהתאם לצורך.</p>
            <p className="mt-3">עם זאת, אין מערכת המחוברת לאינטרנט החסינה לחלוטין מפני חדירה, תקלה, שיבוש או גישה בלתי מורשית.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">15. שמירת מידע</h2>
            <p className="mt-3">המידע יישמר למשך התקופה הנדרשת באופן סביר למטרות שלשמן נאסף, לטיפול בפנייה, לניהול הקשר, לעמידה בדרישות הדין, להגנה על זכויות המשרד ולאבטחת השירות.</p>
            <p className="mt-3">המשרד יבחן מעת לעת את הצורך בהמשך שמירת המידע ויפעל לצמצום מידע שאינו נדרש עוד, בהתאם לדין ולמדיניותו.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">16. זכויות</h2>
            <p className="mt-3">בהתאם להוראות הדין ובכפוף לתנאיהן, ניתן לפנות למשרד לצורך עיון במידע אישי ובקשה לתיקונו.</p>
            <p className="mt-3">ניתן גם להגיש בקשה למחיקת מידע. בקשה כאמור תיבחן בהתאם לדין, למטרות השמירה ולחובות החלות על המשרד.</p>
            <p className="mt-3">אין במדיניות זו התחייבות למחיקת מידע בכל מקרה.</p>
            <p className="mt-3">פניות בנושאי פרטיות: office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">17. דיוור</h2>
            <p className="mt-3">כאשר נדרשת הסכמה לקבלת מידע שיווקי, היא תתבקש בנפרד.</p>
            <p className="mt-3">אי-הסכמה לקבלת מידע שיווקי אינה מונעת שליחת פנייה מקצועית או טיפול בה.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">18. קטינים</h2>
            <p className="mt-3">האתר ו-CPAI אינם מיועדים לאיסוף מכוון של מידע אישי מקטינים.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">19. עדכונים</h2>
            <p className="mt-3">המשרד רשאי לעדכן מדיניות זו בעקבות שינויים בדין, בשירותים, במערכות, בספקים או באופן עיבוד המידע.</p>
            <p className="mt-3">תאריך העדכון האחרון יוצג בראש העמוד.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">20. יצירת קשר</h2>
            <p className="mt-3">נמרודי ושות׳ רואי חשבון<br />רח׳ גלגלי הפלדה 16, הרצליה פיתוח 4672216, ישראל<br />טלפון: <bdi dir="ltr">09-958-2211</bdi><br />דוא״ל: office@nimrodi.co.il<br />אתר: https://nimrodi.co.il</p>
          </section>
        </article>
        <FirmContactBlock lang="he" />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
