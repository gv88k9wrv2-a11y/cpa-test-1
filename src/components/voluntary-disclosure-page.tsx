import { Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowDown, Phone } from "lucide-react";
import { VOLUNTARY_DISCLOSURE } from "../data/voluntary-disclosure";
import { SiteHeader, SiteFooter, FloatingWhatsApp } from "./site-chrome";
import { SiteHeaderEn, SiteFooterEn, FloatingWhatsAppEn } from "./site-chrome-en";
import { LeadForm } from "./lead-form";
import { Button } from "./ui/button";
import { PageSummary } from "./page-summary";
import internationalImage from "../assets/service-international.webp";

export function VoluntaryDisclosurePage({ lang }: { lang: "he" | "en" }) {
  const he = lang === "he";
  const c = VOLUNTARY_DISCLOSURE[lang];
  const path = he ? "/voluntary-disclosure" : "/en/voluntary-disclosure";
  return (
    <div className="min-h-screen bg-background" dir={he ? "rtl" : "ltr"}>
      {he ? <SiteHeader /> : <SiteHeaderEn />}
      <main id="main-content">
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
            <nav aria-label={he ? "פירורי לחם" : "Breadcrumb"} className="mb-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <Link to={he ? "/" : "/en"}>{he ? "בית" : "Home"}</Link><span>/</span>
              <Link to={he ? "/services" : "/en/services"}>{he ? "שירותים" : "Services"}</Link><span>/</span>
              <span>{he ? "גילוי מרצון והסדרה יזומה" : "Voluntary Disclosure"}</span>
            </nav>
            <div className="inline-flex max-w-full items-start gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-text">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden /><span>{c.eyebrow}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">{c.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="h-auto min-h-11 whitespace-normal bg-gold py-3 text-gold-foreground hover:bg-gold/90"><a href="#contact-form">{he ? "לתיאום פגישת היכרות דיסקרטית" : "Schedule a Confidential Consultation"}</a></Button>
              <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal py-3"><a href="#process"><ArrowDown aria-hidden />{he ? "קראו על שלבי ההליך" : "Explore the 4-Step Process"}</a></Button>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6">
            <PageSummary pathname={path} lang={lang} />
            <img src={internationalImage} alt={he ? "חשבונאות ומס בפעילות בין־לאומית" : "International accounting and tax activity"} width={1024} height={1024} loading="lazy" className="aspect-[3/1] w-full rounded-lg object-cover" />
            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{he ? "למי השירות מתאים?" : "Who May Benefit From This Service?"}</h2>
              <ul className="mt-6 space-y-5">{c.audience.map(item => <li key={item.title} className="leading-relaxed text-muted-foreground"><strong className="text-foreground">{item.title}: </strong>{item.text}</li>)}</ul>
            </article>
            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{he ? "גילוי מרצון לחשבונות בנק בחו״ל, נכסי קריפטו והכנסות שלא דווחו" : "Voluntary Disclosure for Foreign Accounts, Crypto & Undisclosed Income"}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{c.context}</p>
              {he ? <p className="mt-4 leading-relaxed text-muted-foreground">להרחבה בנושא תיעוד ודרישות בנקאיות: <Link to="/blog/$slug" params={{ slug: "crypto-funds-bank-israel" }} className="font-semibold text-primary underline underline-offset-4 hover:text-gold-text">כספי קריפטו במערכת הבנקאית בישראל</Link>.</p> : null}
            </article>
            <article id="process" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{he ? "ארבעת שלבי הטיפול במשרד נמרודי ושות׳" : "The Four-Step Process at Nimrodi & Co."}</h2>
              <ol className="mt-8 space-y-7">{c.steps.map((step, i) => <li key={step.title} className="flex items-start gap-4 border-b border-border pb-7"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 font-semibold text-gold-text">{i + 1}</span><div className="min-w-0"><h3 className="font-display text-lg font-semibold text-primary">{step.title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{step.text}</p></div></li>)}</ol>
            </article>
            <article>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{he ? "יתרונות המשרד ומעטפת מקצועית" : "Professional Advantages"}</h2>
              <ul className="mt-6 space-y-5">{c.advantages.map(item => <li key={item.title} className="leading-relaxed text-muted-foreground"><strong className="text-foreground">{item.title}: </strong>{item.text}</li>)}</ul>
              <p className="mt-6 border-s-2 border-gold ps-4 leading-relaxed text-muted-foreground">{he ? "סודיות מקצועית של רואה חשבון אינה חיסיון עו״ד–לקוח. אין הבטחה לתוצאה מול רשות המסים או לקבלת כספים בבנק; כל הליך נבחן בהתאם לנסיבות ולהוראות הדין החלות." : "An accountant’s professional confidentiality is not attorney-client privilege. No outcome with the tax authority or acceptance of funds by a bank is guaranteed; each matter is assessed according to its circumstances and applicable law."}</p>
            </article>
          </div>
        </section>
        <section className="border-y border-border bg-secondary/40 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-primary">{he ? "שאלות נפוצות" : "Frequently Asked Questions"}</h2>
            <div className="mt-8 space-y-4">{c.faqs.map(f => <details key={f.q} className="rounded-lg border border-border bg-card p-5"><summary className="cursor-pointer font-semibold text-primary">{f.q}</summary><p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div>
            <aside className="mt-8 text-sm leading-relaxed text-muted-foreground" aria-label={he ? "הבהרה מקצועית" : "Disclaimer"}>{c.disclaimer}</aside>
          </div>
        </section>
        <div id="contact-form" className="scroll-mt-24"><LeadForm lang={lang} serviceName={he ? "גילוי מרצון והסדרה יזומה" : "Voluntary Disclosure & Tax Regularization"} persistVoluntaryInquiry /></div>
        <section className="py-10">
          <div className="mx-auto max-w-4xl space-y-3 px-4 text-muted-foreground sm:px-6">
            <h2 className="font-display text-2xl font-bold text-primary">{he ? "נמרודי ושות׳ – רואי חשבון" : "Nimrodi & Co. CPA"}</h2>
            <address className="not-italic">{he ? "גלגלי הפלדה 16, הרצליה פיתוח, 4672216, ישראל" : "16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel"}</address>
            <div className="flex flex-wrap gap-x-6 gap-y-3"><a href={he ? "tel:099582211" : "tel:+97299582211"} className="inline-flex items-center gap-2 text-primary"><Phone className="h-4 w-4" aria-hidden /><bdi>{he ? "09-9582211" : "+972 9-958-2211"}</bdi></a><a href="https://wa.me/972546688681" target="_blank" rel="noopener noreferrer" className="text-primary">WhatsApp: 054-6688681</a><a href="mailto:office@nimrodi.co.il" className="text-primary">office@nimrodi.co.il</a></div>
            <p>{he ? "רו״ח שלמה נמרודי – רישיון מועצת רואי חשבון בישראל משנת 1997" : "Shlomo Nimrodi, CPA — licensed by the Auditors Council of Israel since 1997"}</p>
            <a href="https://nimrodi.co.il" className="inline-block text-primary">nimrodi.co.il</a>
          </div>
        </section>
      </main>
      {he ? <SiteFooter /> : <SiteFooterEn />}
      {he ? <FloatingWhatsApp /> : <FloatingWhatsAppEn />}
    </div>
  );
}