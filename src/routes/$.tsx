import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

// Permanent 301 redirects for legacy URLs (mirrors public/_redirects for hosts
// that do not honor that file, e.g. Lovable's TanStack Start hosting).
const REDIRECTS: Record<string, string> = {
  "relocation-tax-advice": "/cpa-international",
  "cfo": "/fractional-cfo",
  pizoim: "/payroll",
  "index.html": "/",
  "international-taxation": "/cpa-international",
  "tax-return-submission": "/tax-consulting",
  "deductible-expenses-2025": "/tax-consulting",
  "rental-income-tax": "/tax-consulting",
  "new-immigrants-tax-benefits": "/cpa-international",
  "fractional-cfo-startups": "/fractional-cfo",
  "startup-fundraising": "/cpa-startups",
  "business-valuation": "/services",
  "corporate-financial-statements": "/audit",
  "financial-expert-opinion": "/services",
  "crypto-tax-reporting": "/blog/crypto-reporting",
  "annual-reports-wealth-statement": "/tax-consulting",
  "payroll-audit-termination": "/payroll",
  "payroll-management": "/payroll",
  "opening-tax-accounts": "/bookkeeping",
  "business-registration-authorities": "/bookkeeping",
  "en/auditing-accounting-herzliya": "/en/services",
  "blog/israeli-subsidiary-branch-of-foreign-company": "/blog/israeli-subsidiary-or-branch",
  "blog/foreign-companies-operating-in-israel": "/blog/foreign-company-tax-liability-israel",
  "blog/relocation-tax-residency": "/blog/relocation-tax-residency-israel",
  relocation: "/cpa-international",
  "שאלות-ותשובות": "/faq",
  "הוצאות-מוכרות-לעצמאים": "/tax-consulting",
  "חוות-דעת-חשבונאית": "/services",
  "ייעוץ-כלכלי-והערכת-שווי": "/services",
  "ייעוץ-מס-בינלאומי": "/cpa-international",
  "חישוב-דיווח-קריפטו": "/blog/crypto-reporting",
  "ניהול-כספים-וחשבות-לחברות": "/fractional-cfo",
  "גילוי-מרצון-מס-הכנסה": "/voluntary-disclosure",
  "ביקורת-וחשבונאות": "/audit",
  "ייעוץ-עסקי-וליווי-עסקי": "/services",
  "contact-us-צור-קשר": "/contact",
  "contact.html": "/contact",
  "רואה-חשבון-בהרצליה": "/cpa-herzliya",
  "דוחות-שנתיים-הצהרות-הון-לעצמאים": "/tax-consulting",
  "הגשת-דוח-שנתי-לרשות-המסים": "/tax-consulting",
  "גיוס-כספים-לסטארטאפים-וחברות-בצמיחה": "/cpa-startups",
  "בדיקת-תלושי-שכר-וגמר-חשבון": "/payroll",
  "הגשת-דוחות-שנתיים-ודוחות-כספיים-לחברות": "/audit",
  "ייעוץ-מס-לעולים-חדשים-ותושבים-חוזרים": "/cpa-international",
  "ייעוץ-מס-רילוקיישן-ועיתוק-תושבות": "/cpa-international",
  "פתיחת-תיקים-במסים-מעמ-מס-הכנסה-ביטוח-לאומי": "/bookkeeping",
  "שירותי-הנהלת-חשבונות-שוטפת-לחברות-ניהול": "/bookkeeping",
  "ייעוץ-מס-הכנסות-שכירות-וחשבונות-חול": "/tax-consulting",
  "ניהול-שכר-והפקת-תלושי-שכר-הבסיס-להתנהל": "/payroll",
  "פתיחת-תיקים-ברשויות-המס-הבסיס-הנכון-וה": "/bookkeeping",
};

// Malformed URLs created by broken link builders (e.g. "https:///", "http:/",
// or their percent-encoded forms) can never resolve to a real page, so they are
// sent permanently to the canonical root instead of rendering a 404.
const MALFORMED_PROTOCOL = /https?:/i;

function decodeAttempt(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export const Route = createFileRoute("/$")({
  head: ({ params }) => {
    const path = (params._splat ?? "").replace(/^\/+/, "");
    const en = path === "en" || path.startsWith("en/");
    return {
      meta: [
        {
          title: en
            ? "Page not found | Nimrodi & Co. CPA"
            : "העמוד לא נמצא | נמרודי ושות׳ – רואי חשבון",
        },
        { name: "robots", content: "noindex, nofollow" },
      ],
    };
  },

  beforeLoad: ({ params }) => {
    const raw = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const decoded = decodeAttempt(raw);
    const doubleDecoded = decodeAttempt(decoded);

    if (
      MALFORMED_PROTOCOL.test(raw) ||
      MALFORMED_PROTOCOL.test(decoded) ||
      MALFORMED_PROTOCOL.test(doubleDecoded)
    ) {
      throw redirect({ href: "/", statusCode: 301 });
    }

    const target = REDIRECTS[raw] ?? REDIRECTS[decoded];
    if (target) {
      throw redirect({ href: target, statusCode: 301 });
    }
    throw notFound();
  },
});
