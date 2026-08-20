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
  ABOUT_GROUP_EN,
  COMPANIES_BOTTOM_EN,
  COMPANIES_GROUPS_EN,
  INDIVIDUALS_BOTTOM_EN,
  INDIVIDUALS_GROUPS_EN,
  KNOWLEDGE_GROUP_EN,
  SERVICES_GROUPS_EN,
} from "../data/nav-content";
import type { NavGroup, NavItem } from "../data/nav-content";

export const WHATSAPP_URL_EN =
  "https://wa.me/972546688681?text=" + encodeURIComponent("Website inquiry – Nimrodi & Co.");

const PHONE_TEL = "tel:+97299582211";
const PHONE_DISPLAY_EN = "+972-9-9582211";
const WHATSAPP_DISPLAY_EN = "+972-54-6688681";
const EMAIL = "office@nimrodi.co.il";
const ADDRESS_EN = "16 Galgalei ha-Plada St, Herzliya Pituach";
import { heHrefForEnSlug } from "../data/blog-pairs";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("16 Galgalei ha-Plada St, Herzliya Pituach");

/** Map current English path → Hebrew equivalent. */
function toHebrewPath(pathname: string): string {
  if (!pathname || pathname === "/en" || pathname === "/en/") return "/";
  if (pathname.startsWith("/en/blog/")) return heHrefForEnSlug(pathname.slice("/en/blog/".length));
  if (pathname.startsWith("/en/blog")) return "/blog";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

const MAIN_LINKS = [
  { to: "/en/companies", label: "Companies & Startups" },
  { to: "/en/individuals", label: "Individuals" },
  { to: "/en/services", label: "Services" },
  { to: "/en/blog", label: "Insights" },
  { to: "/en/about", label: "About" },
  { to: "/en/contact", label: "Contact" },
] as const;

const LEGAL_LINKS_EN = [
  { to: "/en/accessibility", label: "Accessibility Statement" },
  { to: "/en/privacy-policy", label: "Privacy Policy" },
] as const;

type ServiceRoute =
  | "/en/bookkeeping"
  | "/en/payroll"
  | "/en/audit"
  | "/en/tax-consulting"
  | "/en/fractional-cfo"
  | "/en/cpa-startups"
  | "/en/cpa-freelancers"
  | "/en/cpa-foreign-companies"
  | "/en/cpa-herzliya"
  | "/en/cpa-international";

type ServiceItem = {
  to: ServiceRoute;
  label: string;
  desc: string;
  icon: typeof Building2;
};

export const SERVICE_GROUPS_EN: { label: string; items: ServiceItem[] }[] = [
  {
    label: "Core Services",
    items: [
      {
        to: "/en/fractional-cfo",
        label: "Fractional CFO",
        desc: "Burn · Runway · Board · VC prep",
        icon: LineChart,
      },
      {
        to: "/en/bookkeeping",
        label: "Bookkeeping",
        desc: "Bookkeeping · Reconciliations · Management reports",
        icon: Calculator,
      },
      {
        to: "/en/payroll",
        label: "Payroll",
        desc: "Section 102 (ESOP), Form 106 (Annual Tax Statement)",
        icon: ReceiptText,
      },
      {
        to: "/en/audit",
        label: "Audit & Assurance",
        desc: "Israeli GAAP · IFRS",
        icon: FileSearch,
      },
      {
        to: "/en/tax-consulting",
        label: "Tax Advisory",
        desc: "Israeli tax planning · Ruling requests · Objections",
        icon: FileSpreadsheet,
      },
    ],
  },

  {
    label: "By Client Type",
    items: [
      {
        to: "/en/cpa-startups",
        label: "Startups & Tech",
        desc: "Fundraising · Employee equity · Israel–Delaware Flip",
        icon: Building2,
      },
      {
        to: "/en/cpa-freelancers",
        label: "Freelancers & Self-Employed",
        desc: "Setup, filings, Capital Declaration (Asset & Net Worth Report)",
        icon: Briefcase,
      },
      {
        to: "/en/cpa-foreign-companies",
        label: "Foreign Companies in Israel",
        desc: "Subsidiary or branch · Reporting · Transfer pricing coordination",
        icon: Globe2,
      },
      {
        to: "/en/cpa-herzliya",
        label: "Businesses in Herzliya",
        desc: "Boutique firm in Herzliya Pituach",
        icon: MapPin,
      },
    ],
  },
  {
    label: "International Tax",
    items: [
      {
        to: "/en/cpa-international",
        label: "Relocation & Returning Residents",
        desc: "Residency, olim benefits, treaties",
        icon: Plane,
      },
    ],
  },
];

export const ALL_SERVICES_EN: ServiceItem[] = SERVICE_GROUPS_EN.flatMap((g) => g.items);

export function SiteHeaderEn() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const heHref = toHebrewPath(pathname);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/en" className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-display text-lg font-bold text-primary sm:text-xl">
              Nimrodi &amp; Co.
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block sm:text-xs">
              Certified Public Accountants · Herzliya Pituach
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 text-sm font-medium text-foreground/80 xl:flex"
          >
            <MegaMenuEn
              label="Companies & Startups"
              groups={COMPANIES_GROUPS_EN}
              bottom={COMPANIES_BOTTOM_EN}
            />
            <MegaMenuEn
              label="Individuals"
              groups={INDIVIDUALS_GROUPS_EN}
              bottom={INDIVIDUALS_BOTTOM_EN}
            />
            <MegaMenuEn label="Services" groups={SERVICES_GROUPS_EN} />
            <DropdownEn label="Insights" items={KNOWLEDGE_GROUP_EN} />
            <DropdownEn label="About" items={ABOUT_GROUP_EN} />
            <Link
              to="/en/contact"
              className="whitespace-nowrap rounded-md px-3 py-2 hover:text-primary"
              activeProps={{ className: "whitespace-nowrap rounded-md px-3 py-2 text-primary" }}
            >
              Contact
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={heHref}
              className="inline-flex items-center gap-1 rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-primary hover:bg-secondary"
              aria-label="Hebrew version"
              hrefLang="he"
            >
              עברית
            </a>
            <a
              href={PHONE_TEL}
              className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-primary hover:bg-secondary md:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {PHONE_DISPLAY_EN}
            </a>
            <a
              href={WHATSAPP_URL_EN}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-1.5 rounded-md bg-gold px-3 py-2 text-sm font-semibold text-gold-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Contact us
            </a>
            <MobileMenuEn heHref={heHref} />
          </div>
        </div>
      </header>
    </>
  );
}

function NavPathLinkEn({
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
    <Link to={to as "/en/services"} hash={hash} className={className}>
      {children}
    </Link>
  );
}

function MegaMenuEn({
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
      <div className="pointer-events-none invisible absolute left-0 top-full z-50 w-[680px] max-w-[calc(100vw-2rem)] translate-y-1 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid gap-6 rounded-xl border border-border bg-card p-6 shadow-2xl sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gold">
                {group.title}
              </div>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <NavPathLinkEn
                      to={item.to}
                      hash={item.hash}
                      className="block rounded-md px-2 py-1.5 text-sm text-foreground/90 transition hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </NavPathLinkEn>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {bottom && (
            <div className="border-t border-border pt-4 sm:col-span-3">
              <NavPathLinkEn
                to={bottom.to}
                className="text-xs font-semibold text-primary hover:text-gold"
              >
                {bottom.label} →
              </NavPathLinkEn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DropdownEn({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 hover:text-primary"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
      </button>
      <div className="pointer-events-none invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <ul className="rounded-xl border border-border bg-card p-3 shadow-2xl">
          {items.map((item) => (
            <li key={item.label}>
              <NavPathLinkEn
                to={item.to}
                className="block rounded-md px-3 py-2 text-sm text-foreground/90 transition hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </NavPathLinkEn>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MOBILE_COMPANIES_EN: NavItem[] = [
  { label: "Israeli Companies", to: "/en/companies" },
  { label: "Startups & Technology Companies", to: "/en/cpa-startups" },
  { label: "Foreign Companies Operating in Israel", to: "/en/cpa-foreign-companies" },
  { label: "Audit & Bookkeeping", to: "/en/audit" },
  { label: "Fractional CFO & Financial Management", to: "/en/fractional-cfo" },
  { label: "All Services for Companies & Startups", to: "/en/companies" },
];

const MOBILE_INDIVIDUALS_EN: NavItem[] = [
  {
    label: "Annual Returns & Capital Declarations",
    to: "/en/tax-consulting",
    hash: "annual-tax-returns-individuals",
  },
  { label: "Crypto & Digital Assets", to: "/en/tax-consulting", hash: "investments-options-digital-assets" },
  { label: "Rental Income", to: "/en/tax-consulting", hash: "real-estate-tax-israel" },
  { label: "Relocation & Tax Residency", to: "/en/cpa-international" },
  { label: "Self-Employed & Freelancers", to: "/en/cpa-freelancers" },
  { label: "All Services for Individuals & Self-Employed", to: "/en/individuals" },
];

function MobileAccordionEn({
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
            <NavPathLinkEn
              to={item.to}
              hash={item.hash}
              className="block rounded-md px-5 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </NavPathLinkEn>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileMenuEn({ heHref }: { heHref: string }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const toggle = (key: string) => setSection((cur) => (cur === key ? null : key));

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu-en"
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-md border border-border bg-card text-primary"
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
        id="mobile-menu-en"
        hidden={!open}
        className="fixed inset-x-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background shadow-xl"
      >
        <div className="px-4 py-4 sm:px-6">
          <MobileAccordionEn
            id="m-en-companies"
            label="Companies & Startups"
            items={MOBILE_COMPANIES_EN}
            open={section === "companies"}
            onToggle={() => toggle("companies")}
          />
          <MobileAccordionEn
            id="m-en-individuals"
            label="Individuals & Self-Employed"
            items={MOBILE_INDIVIDUALS_EN}
            open={section === "individuals"}
            onToggle={() => toggle("individuals")}
          />
          <MobileAccordionEn
            id="m-en-services"
            label="Services"
            items={SERVICES_GROUPS_EN[0].items}
            open={section === "services"}
            onToggle={() => toggle("services")}
          />

          <ul className="mt-3 space-y-1">
            {[
              { to: "/en/blog", label: "Insights" },
              { to: "/en/about", label: "About" },
              { to: "/en/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <NavPathLinkEn
                  to={l.to}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </NavPathLinkEn>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-border pt-4">
            <div className="grid grid-cols-2 gap-2">
              {LEGAL_LINKS_EN.map((l) => (
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

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
            <a
              href={heHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2.5 text-sm font-semibold text-primary"
              hrefLang="he"
            >
              עברית
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-3 py-2.5 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call
            </a>
            <a
              href={WHATSAPP_URL_EN}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-3 py-2.5 text-sm font-semibold text-gold-foreground"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export function SiteFooterEn() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold">Nimrodi &amp; Co.</div>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Boutique CPA firm in Herzliya Pituach. Operating since 2000 and serving companies,
            startups, freelancers and foreign investors in Israel.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic text-primary-foreground/80">
            <div>
              <a href={PHONE_TEL} className="hover:text-gold">
                Phone: {PHONE_DISPLAY_EN}
              </a>
            </div>
            <div>
              <a href={WHATSAPP_URL_EN} target="_blank" rel="noopener" className="hover:text-gold">
                WhatsApp: {WHATSAPP_DISPLAY_EN}
              </a>
            </div>
            <div>
              <a href={`mailto:${EMAIL}`} className="hover:text-gold">
                {EMAIL}
              </a>
            </div>
            <div>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="hover:text-gold">
                {ADDRESS_EN}
              </a>
            </div>
          </address>
          <div className="mt-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
              Follow us
            </div>
            <SocialIcons lang="en" variant="footer" />
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">
            Navigation
          </div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {MAIN_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/" className="hover:text-gold">
                עברית / Hebrew
              </Link>
            </li>
          </ul>
        </div>
        {SERVICE_GROUPS_EN.slice(0, 2).map((group) => (
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
              {group.label === "By Client Type" &&
                SERVICE_GROUPS_EN[2].items.map((l) => (
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
        dir="ltr"
        aria-label="Legal links"
        className="w-full border-t border-primary-foreground/10"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 text-sm text-primary-foreground/80">
          {LEGAL_LINKS_EN.map((l) => (
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
        © {new Date().getFullYear()} Nimrodi &amp; Co. — Certified Public Accountants. All rights
        reserved.
      </div>
    </footer>
  );
}

export function FloatingWhatsAppEn() {
  return (
    <a
      href={WHATSAPP_URL_EN}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
    </a>
  );
}

export function RelatedServicesNavEn({ currentPath }: { currentPath?: string }) {
  const items = ALL_SERVICES_EN.filter((l) => l.to !== currentPath);
  return (
    <section
      aria-label="Related services"
      className="border-t border-border/60 bg-secondary/30 py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            Continue reading
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
            More services from Nimrodi &amp; Co.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Explore additional accounting, tax and financial services available from our Herzliya
            Pituach office.
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
