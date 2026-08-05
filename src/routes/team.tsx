import { createFileRoute } from "@tanstack/react-router";
import { Award, Building2, Calculator, GraduationCap, Mail, UserCheck } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader } from "../components/site-chrome";
import teamPhoto from "../assets/team-photo.webp";

const TEAM = [
  {
    name: "רו״ח שלמה נמרודי",
    role: "שותף מייסד",
    bio: "רואה חשבון מוסמך. חבר לשכת רואי החשבון. ניסיון עשיר כחשב וכמנהל כספים בחברות פרטיות וציבוריות. ניסיון רב שנים בייעוץ וליווי לחברות זרות שפועלות בישראל. מומחה במיסוי ישראלי ובין־לאומי, ובטיפול בסוגיות מס מורכבות עבור חברות ויחידים. ליווי מלא של תהליכי הנפקה בבורסה בישראל וסיוע מקיף לסטארטאפים בגיוס הון.",
    credentials: ["רו״ח מוסמך", "חבר לשכת רואי החשבון", "מיסוי ישראלי ובין־לאומי"],
  },
];

const DEPARTMENTS = [
  {
    icon: Building2,
    name: "חברות, סטארטאפים וביקורת",
    role: "חשבונאות, ביקורת, חברות זרות וניהול כספים במיקור חוץ",
    bio: "המחלקה מלווה חברות פרטיות, חברות טכנולוגיה, סטארטאפים וחברות זרות הפועלות בישראל. השירות כולל ביקורת דוחות כספיים, דיווח ותקינה חשבונאית, ניהול כספים במיקור חוץ, תקציבים ותחזיות, ניהול תזרים, דיווח ניהולי והיערכות חשבונאית ופיננסית לתהליכי גיוס הון ובדיקת נאותות.",
    credentials: [
      "ביקורת דוחות כספיים",
      "דיווח ותקינה חשבונאית",
      "חברות וסטארטאפים",
      "חברות זרות בישראל",
      "בחינת פעילות באמצעות חברה בת או סניף",
      "ניהול כספים במיקור חוץ",
      "תקציבים, תחזיות ותזרים",
      "מידע להנהלה ולדירקטוריון",
      "היערכות חשבונאית לגיוסי הון ולבדיקת נאותות",
    ],
  },
  {
    icon: UserCheck,
    name: "יחידים, עצמאים ומיסוי",
    role: "דוחות שנתיים, הצהרות הון וייעוץ מס",
    bio: "המחלקה מלווה יחידים, עצמאים ובעלי מקצועות חופשיים בדיווחים ובהתנהלות מול רשויות המס. השירות כולל פתיחת תיקים, דיווחים תקופתיים, דוחות שנתיים, הצהרות הון, מיסוי הכנסות מישראל ומחו״ל, דיווח ומיסוי נכסים דיגיטליים ומיסוי ודיווח על הכנסות משכר דירה בישראל ובחו״ל.",
    credentials: [
      "פתיחת תיקים ודיווחים תקופתיים",
      "דוחות שנתיים והצהרות הון",
      "מיסוי יחידים ועצמאים",
      "הכנסות מישראל ומחו״ל",
      "דיווח ומיסוי נכסים דיגיטליים",
      "ארגון נתוני עסקאות בנכסים דיגיטליים",
      "מיסוי הכנסות משכר דירה בישראל",
      "דיווח על שכר דירה מחו״ל",
      "בחינת מס זר וזיכוי מס זר",
      "מיסוי בין־לאומי ובחינת תושבות",
    ],
  },
  {
    icon: Calculator,
    name: "הנהלת חשבונות ושכר",
    role: "דיווחים שוטפים, התאמות ועיבוד שכר",
    bio: "המחלקה מעניקה שירותי הנהלת חשבונות ושכר לחברות ולעצמאים, בהתאם לאופי הפעילות ולהיקף ההתקשרות. השירות כולל קליטת מסמכים, התאמות, דיווחים תקופתיים, עיבוד נתוני שכר והפקת מידע חשבונאי וניהולי.",
    credentials: [
      "הנהלת חשבונות שוטפת",
      "קליטת מסמכים",
      "התאמות בנקים וכרטיסי אשראי",
      "דיווחי מע״מ ומקדמות",
      "דוחות תקופתיים",
      "חישובי שכר",
      "דיווחי מעסיקים",
      "מידע חשבונאי וניהולי",
      "הכנת מידע למחלקת ניהול הכספים",
    ],
  },
];


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "השותף המייסד | נמרודי ושות׳ – רואי חשבון בהרצליה" },
      {
        name: "description",
        content:
          "הכירו את הצוות של נמרודי ושות׳ רואי חשבון בהרצליה פיתוח: רואי חשבון, מנהלי חשבונות ומומחי מס המלווים חברות, סטארטאפים ועצמאים. קראו עוד על הצוות שלנו.",
      },
      { property: "og:title", content: "הצוות של נמרודי ושות׳" },
      {
        property: "og:description",
        content: "הצוות של נמרודי ושות׳ רואי חשבון: רואי חשבון מוסמכים, מנהלי חשבונות ומומחי מס המלווים חברות, סטארטאפים, חברות זרות ועצמאים. קראו עוד על אנשי המקצוע. נשמח לסייע.",
      },
      { property: "og:url", content: "/team" },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/team" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/team" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en/team" }
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="text-sm font-semibold uppercase tracking-widest text-gold">
            השותף המייסד
          </div>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
            רו״ח שלמה נמרודי
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            רו״ח שלמה נמרודי מלווה חברות, עצמאים ויחידים בנושאי חשבונאות, מס וניהול כספים, בהתאם לצורכי הלקוח ולהיקף ההתקשרות.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src={teamPhoto}
              alt="צוות משרד רואי חשבון נמרודי ושות׳ במשרדי המשרד בהרצליה פיתוח"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:max-w-md">
          {TEAM.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
            >
              <h2 className="font-display text-xl font-semibold text-primary">
                {p.name}
              </h2>
              <div className="mt-1 text-sm font-medium text-gold">{p.role}</div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.bio}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-4">
                {p.credentials.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-xs text-foreground/80">
                    <GraduationCap className="h-3.5 w-3.5 text-gold" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-2">
                <a
                  href="mailto:office@nimrodi.co.il"
                  aria-label="שליחת מייל"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-gold hover:text-gold"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-primary">
            המחלקות המקצועיות במשרד
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
            מחלקות המשרד פועלות בשיתוף פעולה כדי לספק מענה חשבונאי, מיסויי, פיננסי ותפעולי בהתאם לאופי הפעילות ולהיקף השירות הנדרש.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {DEPARTMENTS.map((d) => (
              <article
                key={d.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <d.icon className="h-8 w-8 text-gold" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">{d.name}</h3>
                <div className="mt-1 text-sm font-medium text-gold">{d.role}</div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {d.credentials.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-foreground/80">
                      <GraduationCap className="h-3.5 w-3.5 text-gold" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>


        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-secondary/40 p-8 text-center">
          <Award className="mx-auto mb-4 h-10 w-10 text-gold" aria-hidden />
          <h2 className="font-display text-2xl font-bold text-primary">
            מחפשים להצטרף לצוות?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            אנחנו תמיד מחפשים רואי חשבון, סטודנטים ומנהלי חשבונות מוכשרים להצטרף
            למשרד. שלחו קו״ח ל־<a href="mailto:office@nimrodi.co.il" className="font-semibold text-primary hover:text-gold">office@nimrodi.co.il</a>.
          </p>
        </div>
      </section>

      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
