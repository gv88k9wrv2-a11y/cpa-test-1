import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  ChartLine,
  
  Handshake,
  MessageCircle,
  Star,
  Users,
} from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import aboutImage from "../assets/about-visual.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "אודות | נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח" },
      {
        name: "description",
        content:
          "אודות נמרודי ושות׳, משרד רואי חשבון בהרצליה פיתוח הפעיל משנת 2000 ומלווה חברות, סטארטאפים, חברות זרות ועצמאים בחשבונאות ובמס. קראו עוד על המשרד. נשמח לסייע.",
      },
      { property: "og:title", content: "אודות נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        property: "og:description",
        content:
          "משרד רואי חשבון בהרצליה פיתוח המלווה חברות טכנולוגיה, סטארטאפים, עצמאים וחברות זרות בחשבונאות, שכר, דוחות וייעוץ מס. קראו עוד על הדרך המקצועית שלנו. נשמח לסייע.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:type", content: "article" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/about" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/about" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en/about" }
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Award, title: "עבודה מקצועית המבוססת על ניסיון, בדיקה ושיקול דעת", desc: "כלים חשבונאיים מתקדמים, ידע עדכני והכשרה מתמדת." },
  { icon: Handshake, title: "יחס אישי ודיסקרטי", desc: "המשרד שואף לספק קשר ישיר ומענה אישי בהתאם לצורך ולהיקף ההתקשרות." },
  { icon: ChartLine, title: "חשיבה אסטרטגית", desc: "לא רק מספרים – ליווי לצמיחה וקבלת החלטות." },
  { icon: Users, title: "מענה אישי בהתאם לצורך ולהיקף השירות", desc: "תקשורת פתוחה, שקופה ומהירה לאורך כל השנה." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">אודות</div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            נמרודי ושות׳ – רואי חשבון
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            נמרודי ושות׳ הוא משרד רואי חשבון בוטיק הפועל משנת 2000 בהרצליה פיתוח ומספק
            שירותי חשבונאות, ביקורת, מס וניהול כספים לחברות, עצמאים ויחידים.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              המשרד מנוהל על ידי רו״ח שלמה נמרודי, בעל ניסיון בחשבונאות ובניהול כספים, אשר
              שימש בעבר כחשב וכמנהל כספים בחברות ציבוריות והיה מעורב בתהליכי הנפקה בבורסה
              בישראל.
            </p>
            <p>
              שירותי המשרד כוללים, בהתאם לצורכי הלקוח ולהיקף ההתקשרות, ביקורת ודוחות
              כספיים, הנהלת חשבונות, שכר, ייעוץ ודיווחי מס, טיפול בהצהרות הון, פתיחת תיקים
              ותמיכה בתהליכים פיננסיים של חברות ועסקים.
            </p>
            <p>
              המשרד מטפל גם בסוגיות הנוגעות לחברות טכנולוגיה וסטארטאפים, גיוסי הון, פעילות
              בין־לאומית, חברות זרות הפועלות בישראל, נכסים דיגיטליים וכן דיווח ומיסוי של
              הכנסות משכר דירה.
            </p>
            <p>
              העבודה מתבצעת בליווי אישי, בתיאום ציפיות מראש ובהתאם למידע, למסמכים ולתחומי
              האחריות שנקבעו בהתקשרות.
            </p>

          </div>

          <aside className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <img
                src={aboutImage}
                alt="פתרונות חשבונאיים ופיננסיים מקצועיים במשרד רואי החשבון נמרודי ושות׳"
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-xl border border-gold/40 bg-gold/10 p-6">
              <Star className="mb-2 h-6 w-6 text-gold" aria-hidden />
              <div className="font-display text-lg font-bold text-primary">
                ביקורות וחוות דעת ב-Google
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                מעוניינים להתרשם? ניתן לעיין בביקורות הציבוריות של המשרד ב-Google Maps.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=%D7%A0%D7%9E%D7%A8%D7%95%D7%93%D7%99+%D7%95%D7%A9%D7%95%D7%AA+%D7%A8%D7%95%D7%90%D7%99+%D7%97%D7%A9%D7%91%D7%95%D7%9F+%D7%92%D7%9C%D7%92%D7%9C%D7%99+%D7%94%D7%A4%D7%9C%D7%93%D7%94+%D7%94%D7%A8%D7%A6%D7%9C%D7%99%D7%94"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-primary hover:text-gold"
              >
                צפו בביקורות שלנו ב-Google Maps ←
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-primary sm:text-4xl">
            הערכים שמובילים אותנו
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6">
                <Icon className="mb-3 h-6 w-6 text-gold" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Building2 className="mx-auto mb-4 h-8 w-8 text-gold" aria-hidden />
          <h2 className="font-display text-3xl font-bold text-primary">
            רוצים להכיר את המשרד מקרוב?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            אפשר לקבוע פגישת היכרות במשרדנו בהרצליה פיתוח או בשיחת וידאו – ונראה איך נוכל לתמוך בכם.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              קביעת פגישה
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              לתחומי ההתמחות
            </Link>
          </div>
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

