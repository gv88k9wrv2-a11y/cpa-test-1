import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

// Permanent 301 redirects for legacy URLs (mirrors public/_redirects for hosts
// that do not honor that file, e.g. Lovable's TanStack Start hosting).
const REDIRECTS: Record<string, string> = {
  "relocation-tax-advice": "/cpa-international",
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
  "ייעוץ-מס-בינלאומי": "/cpa-international",
  "חישוב-דיווח-קריפטו": "/blog/crypto-reporting",
  "ניהול-כספים-וחשבות-לחברות": "/fractional-cfo",
  "גילוי-מרצון-מס-הכנסה": "/tax-consulting",
  "דוחות-שנתיים-הצהרות-הון-לעצמאים": "/tax-consulting",
  "הגשת-דוח-שנתי-לרשות-המסים": "/tax-consulting",
  "גיוס-כספים-לסטארטאפים-וחברות-בצמיחה": "/cpa-startups",
  "בדיקת-תלושי-שכר-וגמר-חשבון": "/payroll",
  "הגשת-דוחות-שנתיים-ודוחות-כספיים-לחברות": "/audit",
  "ייעוץ-מס-לעולים-חדשים-ותושבים-חוזרים": "/cpa-international",
  "שירותי-הנהלת-חשבונות-שוטפת-לחברות-ניהול": "/bookkeeping",
  "ייעוץ-מס-הכנסות-שכירות-וחשבונות-חול": "/tax-consulting",
  "ניהול-שכר-והפקת-תלושי-שכר-הבסיס-להתנהל": "/payroll",
  "פתיחת-תיקים-ברשויות-המס-הבסיס-הנכון-וה": "/bookkeeping",
};

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
        { name: "robots", content: "noindex, follow" },
      ],
    };
  },

  beforeLoad: ({ params }) => {
    const raw = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    let decoded = raw;
    try {
      decoded = decodeURIComponent(raw);
    } catch {
      decoded = raw;
    }
    const target = REDIRECTS[raw] ?? REDIRECTS[decoded];
    if (target) {
      throw redirect({ href: target, statusCode: 301 });
    }
    throw notFound();
  },
});
