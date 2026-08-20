import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import {
  Phone,
  MessageCircle,
  Menu,
  ChevronDown,
  Building2,
  Briefcase,
  Globe2,
  MapPin,
  Calculator,
  ReceiptText,
  FileSearch,
  FileSpreadsheet,
  Plane,
  LineChart,
} from "lucide-react";
import { SocialIcons } from "./social-proof";
import {
  ABOUT_GROUP_HE,
  COMPANIES_BOTTOM_HE,
  COMPANIES_GROUPS_HE,
  INDIVIDUALS_BOTTOM_HE,
  INDIVIDUALS_GROUPS_HE,
  KNOWLEDGE_GROUP_HE,
  SERVICES_GROUPS_HE,
} from "../data/nav-content";
import type { NavGroup, NavItem } from "../data/nav-content";


const WHATSAPP_URL =
  "https://wa.me/972546688681?text=" + encodeURIComponent("פנייה מהאתר – נמרודי ושות׳");

const PHONE_TEL = "tel:099582211";
const PHONE_DISPLAY = "09-9582211";
const WHATSAPP_DISPLAY = "054-6688681";
const EMAIL = "office@nimrodi.co.il";
const ADDRESS_HE = "גלגלי הפלדה 16, הרצליה פיתוח";
import { enHrefForHeSlug } from "../data/blog-pairs";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("גלגלי הפלדה 16, הרצליה פיתוח");

/** Map current Hebrew path → English equivalent. */
function toEnglishPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/en";
  if (pathname.startsWith("/en")) return pathname;
  if (pathname.startsWith("/blog/")) return enHrefForHeSlug(pathname.slice("/blog/".length));
  if (pathname.startsWith("/blog")) return "/en/blog";
  return `/en${pathname}`;
}

const MAIN_LINKS = [
  { to: "/companies", label: "חברות וסטארטאפים" },
  { to: "/individuals", label: "יחידים ועצמאים" },
  { to: "/services", label: "שירותים" },
  { to: "/blog", label: "מרכז ידע" },
  { to: "/about", label: "אודות" },
  { to: "/contact", label: "צור קשר" },
] as const;


const LEGAL_LINKS = [
  { to: "/accessibility", label: "הצהרת נגישות" },
  { to: "/privacy-policy", label: "מדיניות פרטיות ושימוש באתר" },
] as const;

type ServiceRoute =
  | "/bookkeeping"
  | "/payroll"
  | "/audit"
  | "/tax-consulting"
  | "/fractional-cfo"
  | "/cpa-startups"
  | "/cpa-freelancers"
  | "/cpa-foreign-companies"
  | "/cpa-herzliya"
  | "/cpa-international";

type ServiceItem = {
  to: ServiceRoute;
  label: string;
  desc: string;
  icon: typeof Building2;
};

const SERVICE_GROUPS: { label: string; items: ServiceItem[] }[] = [
  {
    label: "שירותי ליבה",
    items: [
      {
        to: "/fractional-cfo",
        label: "ניהול כספים ו-Fractional CFO",
        desc: "תקציב · תזרים · Burn ו-Runway · דיווח ניהולי",
        icon: LineChart,
      },
      {
        to: "/bookkeeping",
        label: "הנהלת חשבונות",
        desc: "מערכות ענן · סגירת חודש · דוחות ניהוליים",
        icon: Calculator,
      },
      {
        to: "/payroll",
        label: "חשבות שכר ותלושים",
        desc: "תלושים · דיווחי מעסיק · טופסי 106 ו-161",
        icon: ReceiptText,
      },
      {
        to: "/audit",
        label: "ביקורת דוחות כספיים",
        desc: "Israeli GAAP · IFRS",
        icon: FileSearch,
      },
      {
        to: "/tax-consulting",
        label: "ייעוץ מס",
        desc: "תכנון מס · בקשות להחלטות מיסוי · השגות",
        icon: FileSpreadsheet,
      },
    ],
  },

  {
    label: "שירותים לפי סוג לקוח",
    items: [
      {
        to: "/cpa-startups",
        label: "סטארטאפים וחברות טכנולוגיה",
        desc: "חשבונאות · סעיף 102 · הכנה לגיוסי הון",
        icon: Building2,
      },
      {
        to: "/cpa-freelancers",
        label: "עצמאים ובעלי מקצוע",
        desc: "פתיחת תיקים · דיווחים תקופתיים · דוח שנתי",
        icon: Briefcase,
      },
      {
        to: "/cpa-foreign-companies",
        label: "חברות זרות הפועלות בישראל",
        desc: "חברה בת או סניף · דיווחים · מחירי העברה",
        icon: Globe2,
      },
      {
        to: "/cpa-herzliya",
        label: "רואה חשבון בהרצליה פיתוח",
        desc: "שירות במשרד בהרצליה פיתוח או מרחוק",
        icon: MapPin,
      },
    ],
  },
  {
    label: "מיסוי בין־לאומי",
    items: [
      {
        to: "/cpa-international",
        label: "רילוקיישן, עולים ותושבים חוזרים",
        desc: "תושבות מס · הטבות מס · הכנסות מחו״ל · אמנות מס",
        icon: Plane,
      },
    ],
  },
];

const ALL_SERVICES: ServiceItem[] = SERVICE_GROUPS.flatMap((g) => g.items);

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const enHref = toEnglishPath(pathname);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        דלג לתוכן העיקרי
      </a>
      <header className="sticky top-0 z-40 border-b border-gold/40 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-lg font-bold text-primary sm:text-xl">
              נמרודי ושות׳
            </span>
            <span className="text-[11px] text-muted-foreground sm:text-xs">
              רואי חשבון · מאז 2000
            </span>
          </Link>


          {/* Desktop nav (xl and above) */}
          <nav
            aria-label="ניווט ראשי"
            className="hidden items-center gap-0.5 text-sm font-medium text-foreground/80 xl:flex"
          >
            <MegaMenu
              label="חברות וסטארטאפים"
              groups={COMPANIES_GROUPS_HE}
              bottom={COMPANIES_BOTTOM_HE}
            />
            <MegaMenu
              label="יחידים ועצמאים"
              groups={INDIVIDUALS_GROUPS_HE}
              bottom={INDIVIDUALS_BOTTOM_HE}
            />
            <MegaMenu label="שירותים" groups={SERVICES_GROUPS_HE} />
            <Dropdown label="מרכז ידע" items={KNOWLEDGE_GROUP_HE} />
            <Dropdown label="אודות" items={ABOUT_GROUP_HE} />
            <Link
              to="/contact"
              className="whitespace-nowrap rounded-md px-3 py-2 hover:text-primary"
              activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-2 text-primary" }}
            >
              צור קשר
            </Link>
          </nav>

          {/* Right cluster */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <a
              href={enHref}
              className="inline-flex h-11 min-w-[44px] items-center justify-center gap-1 rounded-md border border-border/40 px-2.5 text-xs font-semibold text-primary hover:bg-secondary"
              aria-label="English version"
              hrefLang="en"
            >
              EN
            </a>
            <span className="h-6 w-px bg-border/60 xl:hidden" aria-hidden />

            <a
              href={PHONE_TEL}
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary md:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-1.5 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              ייעוץ ראשוני
            </a>

            {/* Mobile menu toggle */}
            <MobileMenu enHref={enHref} />
          </div>
        </div>
      </header>
    </>
  );
}

function NavPathLink({
  to,
  hash,
  className,
  children,
}: {
  to: string;
  hash?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={to as "/services"} hash={hash} className={className}>
      {children}
    </Link>
  );
}

function MegaMenu({
  label,
  groups,
  bottom,
}: {
  label: string;
  groups: NavGroup[];
  bottom?: NavItem;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
      </button>
      <div className="pointer-events-none invisible absolute right-0 top-full z-50 w-[680px] max-w-[calc(100vw-2rem)] translate-y-1 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid gap-6 rounded-xl border border-border bg-card p-6 shadow-2xl sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gold">
                {group.title}
              </div>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <NavPathLink
                      to={item.to}
                      hash={item.hash}
                      className="block rounded-md px-2 py-1.5 text-sm text-foreground/90 transition hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </NavPathLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {bottom && (
            <div className="border-t border-border pt-4 sm:col-span-3">
              <NavPathLink
                to={bottom.to}
                className="text-xs font-semibold text-primary hover:text-gold"
              >
                {bottom.label} ←
              </NavPathLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Dropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
      </button>
      <div className="pointer-events-none invisible absolute right-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <ul className="rounded-xl border border-border bg-card p-3 shadow-2xl">
          {items.map((item) => (
            <li key={item.label}>
              <NavPathLink
                to={item.to}
                className="block rounded-md px-3 py-2 text-sm text-foreground/90 transition hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </NavPathLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MOBILE_COMPANIES: NavItem[] = [
  { label: "חברות ישראליות", to: "/companies" },
  { label: "סטארטאפים וחברות טכנולוגיה", to: "/cpa-startups" },
  { label: "חברות זרות הפועלות בישראל", to: "/cpa-foreign-companies" },
  { label: "ביקורת והנהלת חשבונות", to: "/audit" },
  { label: "Fractional CFO וניהול כספים", to: "/fractional-cfo" },
  { label: "לכל השירותים לחברות וסטארטאפים", to: "/companies" },
];

const MOBILE_INDIVIDUALS: NavItem[] = [
  {
    label: "דוחות שנתיים והצהרות הון",
    to: "/tax-consulting",
    hash: "annual-tax-returns-individuals",
  },
  { label: "קריפטו ונכסים דיגיטליים", to: "/tax-consulting", hash: "investments-options-digital-assets" },
  { label: "הכנסות משכר דירה", to: "/tax-consulting", hash: "real-estate-tax-israel" },
  { label: "רילוקיישן ותושבות מס", to: "/cpa-international" },
  { label: "עצמאים ופרילנסרים", to: "/cpa-freelancers" },
  { label: "לכל השירותים ליחידים ולעצמאים", to: "/individuals" },
];

function MobileAccordion({
  id,
  label,
  items,
  open,
  onToggle,
}: {
  id: string;
  label: string;
  items: NavItem[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 px-3 py-3 text-base font-semibold text-foreground"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      <ul id={id} hidden={!open} className="pb-3">
        {items.map((item) => (
          <li key={item.label}>
            <NavPathLink
              to={item.to}
              hash={item.hash}
              className="block rounded-md px-5 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </NavPathLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileMenu({ enHref }: { enHref: string }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const toggle = (key: string) => setSection((cur) => (cur === key ? null : key));

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        aria-label="פתח תפריט"
        aria-expanded={open}
        aria-controls="mobile-menu-he"
        onClick={() => setOpen((v) => !v)}
        className="grid h-11 w-11 place-items-center rounded-md border border-border/40 bg-card text-primary"
      >
        {open ? (
          <span className="text-lg font-bold" aria-hidden>
            ×
          </span>
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      <div
        id="mobile-menu-he"
        hidden={!open}
        className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background shadow-xl"
      >
        <div className="px-4 py-4 sm:px-6">
          <MobileAccordion
            id="m-he-companies"
            label="חברות וסטארטאפים"
            items={MOBILE_COMPANIES}
            open={section === "companies"}
            onToggle={() => toggle("companies")}
          />
          <MobileAccordion
            id="m-he-individuals"
            label="יחידים ועצמאים"
            items={MOBILE_INDIVIDUALS}
            open={section === "individuals"}
            onToggle={() => toggle("individuals")}
          />
          <MobileAccordion
            id="m-he-services"
            label="שירותים"
            items={SERVICES_GROUPS_HE[0].items}
            open={section === "services"}
            onToggle={() => toggle("services")}
          />

          <ul className="mt-3 space-y-1">
            {[
              { to: "/blog", label: "מרכז ידע" },
              { to: "/about", label: "אודות" },
              { to: "/contact", label: "צור קשר" },
            ].map((l) => (
              <li key={l.to}>
                <NavPathLink
                  to={l.to}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </NavPathLink>
              </li>
            ))}
          </ul>

          {/* Legal */}
          <div className="mt-4 border-t border-border pt-4">
            <div className="grid grid-cols-2 gap-2">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex min-h-11 items-center justify-center rounded-md border border-border px-3 py-2.5 text-center text-sm font-semibold text-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
            <a
              href={enHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm font-semibold text-primary"
              aria-label="English version"
              hrefLang="en"
            >
              EN / English
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-3 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              התקשרו
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-3 py-2.5 text-sm font-semibold text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              וואטסאפ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">נמרודי ושות׳</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            משרד רואי חשבון בוטיק בהרצליה פיתוח. המשרד פועל משנת 2000 ומלווה חברות, סטארטאפים,
            עצמאים ופרילנסרים.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic text-primary-foreground/80">
            <div>
              <a href={PHONE_TEL} className="hover:text-gold">
                טלפון: {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-gold">
                וואטסאפ: {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div>
              <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                {EMAIL}
              </a>
            </div>
            <div>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="hover:text-gold">
                {ADDRESS_HE}
              </a>
            </div>
          </address>
          <div className="mt-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
              עקבו אחרינו
            </div>
            <SocialIcons lang="he" variant="footer" />
          </div>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">ניווט</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {MAIN_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {SERVICE_GROUPS.slice(0, 2).map((group) => (
          <div key={group.label}>
            <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
              {group.label}
            </div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {group.items.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
              {group.label === "לפי סוג לקוח" &&
                SERVICE_GROUPS[2].items.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <nav
        dir="rtl"
        aria-label="קישורים משפטיים"
        className="w-full border-t border-primary-foreground/10"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 text-sm text-primary-foreground/80">
          {LEGAL_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full border-t border-primary-foreground/10 px-4 py-5 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} נמרודי ושות׳ – רואי חשבון. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="פנייה בוואטסאפ"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
    </a>
  );
}

/** Inline sub-nav to related services – for use inside pages */
export function RelatedServicesNav({ currentPath }: { currentPath?: string }) {
  const items = ALL_SERVICES.filter((l) => l.to !== currentPath);
  return (
    <section
      aria-label="שירותים נוספים"
      className="border-t border-border/60 bg-secondary/30 py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            המשך קריאה
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
            שירותים נוספים במשרד
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            כל תחומי ההתמחות של נמרודי ושות׳ – רואי חשבון בהרצליה פיתוח.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                  <l.icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-primary">{l.label}</div>
                  <div className="mt-0.5 truncate text-xs text-muted-foreground">{l.desc}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { WHATSAPP_URL, SERVICE_GROUPS, ALL_SERVICES };
