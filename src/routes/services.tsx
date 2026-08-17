import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Calculator,
  ChartLine,
  FileSearch,
  FileSpreadsheet,
  Globe2,
  Handshake,
  MapPin,
  MessageCircle,
  Plane,
  ReceiptText,
  Rocket,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FloatingWhatsApp, SiteFooter, SiteHeader, WHATSAPP_URL } from "../components/site-chrome";
import { GovPortalLinks } from "../components/gov-portal-links";

type ServiceRoute =
  | "/fractional-cfo"
  | "/bookkeeping"
  | "/payroll"
  | "/audit"
  | "/tax-consulting"
  | "/cpa-startups"
  | "/cpa-freelancers"
  | "/cpa-foreign-companies"
  | "/cpa-herzliya"
  | "/cpa-international";

type ServiceItem = { icon: LucideIcon; label: string; desc: string; to: ServiceRoute };
type ServiceGroup = { title: string; items: ServiceItem[] };

const GROUPS: ServiceGroup[] = [
  {
    title: "שירותים חשבונאיים ופיננסיים",
    items: [
      { to: "/fractional-cfo", label: "ניהול כספים במיקור חוץ ו-Fractional CFO", icon: ChartLine, desc: "תקציב, תזרים, מדדי Burn ו־Runway, מודלים פיננסיים ומידע ניהולי לדירקטוריון ולמשקיעים." },
      { to: "/bookkeeping", label: "הנהלת חשבונות", icon: Calculator, desc: "הנהלת חשבונות דיגיטלית, התאמות, דיווחים תקופתיים והפקת מידע ניהולי בהתאם למערכת ולהיקף השירות." },
      { to: "/payroll", label: "שכר ואופציות (ESOP)", icon: ReceiptText, desc: "תלושי שכר, סעיף 102 (תוכניות אופציות ESOP), טופס 106, טופס 161 ומידע ותיאום בנושאי הפקדות פנסיוניות." },
      { to: "/audit", label: "ביקורת חשבונאית", icon: FileSearch, desc: "ביקורת דוחות כספיים בהתאם לכללי החשבונאות המקובלים בישראל ולתקני IFRS, וכן בדיקות נאותות בעסקאות מיזוג ורכישה." },
      { to: "/tax-consulting", label: "ייעוץ מס", icon: FileSpreadsheet, desc: "בחינת סוגיות מס, הכנת בקשות להחלטות מיסוי במקרים המתאימים וליווי חשבונאי ומיסויי בהליכי שומה והשגה." },
    ],
  },
  {
    title: "לפי סוג לקוח",
    items: [
      { to: "/cpa-startups", label: "סטארטאפים וחברות טכנולוגיה בישראל", icon: Rocket, desc: "גיוסי הון, אופציות 102, מבנה Delaware-Israel Flip ומעמד מפעל טכנולוגי מועדף." },
      { to: "/cpa-freelancers", label: "עצמאים ופרילנסרים", icon: Briefcase, desc: "סיוע בפתיחת תיקים, דיווחים שוטפים, דוח שנתי והכנת מידע להצהרת הון, בהתאם להיקף ההתקשרות." },
      { to: "/cpa-foreign-companies", label: "חברות זרות בישראל", icon: Globe2, desc: "חברה בת או סניף, KYC, Transfer Pricing ודיווחים שוטפים לפי הדרישות החלות." },
      { to: "/cpa-herzliya", label: "רואה חשבון בהרצליה פיתוח", icon: MapPin, desc: "שירותי ראיית חשבון ממשרד בהרצליה פיתוח, בפגישות מתואמות או בעבודה מרחוק." },
    ],
  },
  {
    title: "מיסוי בין־לאומי",
    items: [
      { to: "/cpa-international", label: "רילוקיישן ותושבים חוזרים", icon: Plane, desc: "בחינת תושבות מס, הכנסות מחו״ל, הטבות לעולים ולתושבים חוזרים ויישום אמנות מס בהתאם לנסיבות." },
    ],
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "שירותי ראיית חשבון, מס וניהול כספים | נמרודי ושות׳" },
      {
        name: "description",
        content:
          "שירותי חשבונאות, ביקורת, מס, הנהלת חשבונות, שכר ודיווח לחברות, סטארטאפים, עצמאים וחברות זרות, לרבות נכסים דיגיטליים. עיינו בשירותים ופנו אלינו לשיחת היכרות.",
      },
      { property: "og:title", content: "שירותי משרד רואי חשבון נמרודי ושות׳" },
      {
        property: "og:description",
        content:
          "שירותי חשבונאות, שכר, ביקורת, מס ומידע ניהולי לחברות, סטארטאפים, עצמאים וחברות זרות, בהתאם לצורך ולהיקף ההתקשרות.",
      },
      { property: "og:url", content: "https://www.nimrodi.co.il/services" },
      { property: "og:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://www.nimrodi.co.il/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nimrodi.co.il/services" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://www.nimrodi.co.il/services" },
      { rel: "alternate", hrefLang: "en-US", href: "https://www.nimrodi.co.il/en/services" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
        <section className="border-b border-border/60 bg-gradient-to-b from-secondary/60 to-background">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">תחומי ההתמחות שלנו</div>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary sm:text-5xl">
              בחרו את מסלול השירות המתאים לכם
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              התחילו לפי סוג הלקוח או לפי השירות המקצועי המבוקש. כל מסלול מוביל לעמודים המפרטים את השירותים הרלוונטיים.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3">
            {[
              { to: "/companies", label: "חברות וסטארטאפים" },
              { to: "/individuals", label: "יחידים ועצמאים" },
              { to: "/services", label: "לפי שירות מקצועי" },
            ].map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-border bg-card p-6 text-center font-display text-xl font-bold text-primary transition hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </section>


        <section className="py-16">
          <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{g.title}</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {g.items.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="group flex cursor-pointer flex-col rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary group-hover:bg-gold/15 group-hover:text-gold">
                        <s.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-primary">{s.label}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="mt-4 inline-flex text-xs font-semibold text-gold">{s.label} ←</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Handshake className="mx-auto mb-4 h-8 w-8 text-gold" aria-hidden />
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              לא בטוחים איזה שירות מתאים לכם?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              נשמח לקיים שיחת היכרות, להבין את הצרכים ולבחון את היקף השירות המתאים.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-semibold text-gold-foreground transition hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                דברו איתנו בוואטסאפ
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
              >
                לעמוד יצירת קשר
              </Link>
            </div>
          </div>
        </section>

        <GovPortalLinks
          lang="he"
          title="פורטלי השירות המרכזיים של המדינה"
          links={[
            { label: "רשות המסים – אזור אישי, מע\"מ ודיווחים", href: "https://www.gov.il/he/departments/israel_tax_authority" },
            { label: "המוסד לביטוח לאומי", href: "https://www.btl.gov.il" },
            { label: "רשות החדשנות – מסלולי תמיכה ומענקים", href: "https://innovationisrael.org.il" },
            { label: "משרד המשפטים – רשם החברות והתאגידים", href: "https://www.gov.il/he/departments/ministry_of_justice" },
          ]}
        />
      </main>

      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
