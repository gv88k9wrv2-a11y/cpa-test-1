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
};

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "העמוד לא נמצא | נמרודי ושות׳ – רואי חשבון" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  beforeLoad: ({ params }) => {
    const key = (params._splat ?? "").replace(/^\/+|\/+$/g, "");
    const target = REDIRECTS[key];
    if (target) {
      throw redirect({ href: target, statusCode: 301 });
    }
    throw notFound();
  },
});
