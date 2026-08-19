/**
 * Precise internal-link map.
 * Exact destinations only — do not add links, destinations or blocks that are
 * not defined here.
 */

export type Lang = "he" | "en";

export type TaxTopic = {
  /** Anchor id — identical on the Hebrew and English tax advisory pages. */
  id: string;
  /** Short label used in the topic list. */
  label: string;
  /** Section heading rendered at the target. */
  heading: string;
  /** Section introduction rendered at the target. */
  intro: string;
  group: "A" | "B";
};

export const TAX_TOPICS: Record<Lang, TaxTopic[]> = {
  he: [
    {
      id: "corporate-tax-israel",
      label: "מיסוי חברות בישראל",
      heading: "מיסוי חברות בישראל",
      intro:
        "בחינת חבות מס, ניכויים, פחת, מסלולי מס והטבות אפשריות לחברות, בהתאם לנתונים ולהוראות הדין.",
      group: "A",
    },
    {
      id: "shareholder-tax",
      label: "מיסוי בעלי מניות",
      heading: "מיסוי בעלי מניות והתחשבנויות עם החברה",
      intro:
        "בחינת משיכות כספים, שכר, דיבידנדים, הלוואות והתחשבנויות בין החברה לבין בעלי המניות.",
      group: "A",
    },
    {
      id: "real-estate-tax-israel",
      label: "מיסוי מקרקעין בישראל",
      heading: "מיסוי מקרקעין, שכר דירה ועסקאות נדל״ן",
      intro:
        "בחינת מס שבח, מס רכישה, הכנסות משכר דירה והיבטי מס בעסקאות ובנכסים בישראל.",
      group: "A",
    },
    {
      id: "international-tax",
      label: "מיסוי בין־לאומי",
      heading: "מיסוי בין־לאומי ותושבות מס",
      intro:
        "בחינת תושבות מס, הכנסות מחו״ל, זיכוי מס זר, צדדים קשורים והחזקות בחברות זרות.",
      group: "A",
    },
    {
      id: "investments-options-digital-assets",
      label: "מיסוי השקעות, אופציות ונכסים דיגיטליים",
      heading: "מיסוי השקעות, אופציות ונכסים דיגיטליים",
      intro:
        "בחינת רווחים, הפסדים, ניכוי מס במקור וחובות דיווח בנושאי השקעות, אופציות ונכסים דיגיטליים.",
      group: "A",
    },
    {
      id: "intergenerational-transfers",
      label: "היבטי מס בהעברה בין־דורית, מתנות, ירושות ונאמנויות",
      heading: "העברה בין־דורית, מתנות, ירושות ונאמנויות",
      intro:
        "בחינת היבטי מס ודיווח בהעברת נכסים, מתנות, ירושות ונאמנויות, בתיאום עם היועצים המשפטיים.",
      group: "A",
    },
    {
      id: "annual-tax-returns-individuals",
      label: "דוחות שנתיים ליחידים",
      heading: "דוחות שנתיים ליחידים",
      intro:
        "הכנת מידע ודיווח שנתי ליחידים בהתאם להכנסות, לנכסים, למסמכים ולחובות הדיווח.",
      group: "B",
    },
    {
      id: "capital-declarations",
      label: "הצהרות הון",
      heading: "הצהרות הון",
      intro:
        "הכנת הצהרות הון, ריכוז נכסים והתחייבויות והתאמת המידע למסמכים ולדיווחים קודמים.",
      group: "B",
    },
    {
      id: "prior-reporting-regularization",
      label: "גילוי מרצון ודיווח על נכסים והכנסות",
      heading: "תיקון והסדרת דיווחים קודמים על נכסים והכנסות",
      intro:
        "בחינת אפשרויות זמינות לתיקון או להסדרת דיווחים קודמים בהתאם לדין ולהסדרים הקיימים במועד הטיפול, ללא מצג שמסלול גילוי מרצון זמין בכל עת.",
      group: "B",
    },
    {
      id: "employee-tax-refunds",
      label: "החזרי מס לשכירים",
      heading: "החזרי מס לשכירים",
      intro:
        "בחינת זכאות אפשרית להחזר מס על בסיס הכנסות, ניכויים, זיכויים, הפקדות ואישורים לשנות המס הרלוונטיות.",
      group: "B",
    },
    {
      id: "guardianship-reporting",
      label: "שירותים לאפוטרופוסים",
      heading: "דיווח וליווי חשבונאי לאפוטרופוסים",
      intro:
        "סיוע בריכוז מידע, הכנת דיווחים והתנהלות חשבונאית הנדרשת מאפוטרופוסים בהתאם למסמכים ולהוראות החלות.",
      group: "B",
    },
  ],
  en: [
    {
      id: "corporate-tax-israel",
      label: "Corporate tax in Israel",
      heading: "Corporate tax in Israel",
      intro:
        "Review of tax liability, deductions, depreciation, tax tracks and possible benefits for companies, based on the data and applicable law.",
      group: "A",
    },
    {
      id: "shareholder-tax",
      label: "Shareholder taxation",
      heading: "Shareholder taxation and balances with the company",
      intro:
        "Review of withdrawals, salary, dividends, loans and balances between the company and its shareholders.",
      group: "A",
    },
    {
      id: "real-estate-tax-israel",
      label: "Real-estate taxation in Israel",
      heading: "Real-estate taxation, rental income and property transactions",
      intro:
        "Review of betterment tax, purchase tax, rental income and tax aspects of transactions and properties in Israel.",
      group: "A",
    },
    {
      id: "international-tax",
      label: "International tax",
      heading: "International tax and tax residency",
      intro:
        "Review of tax residency, foreign income, foreign tax credit, related parties and holdings in foreign companies.",
      group: "A",
    },
    {
      id: "investments-options-digital-assets",
      label: "Investments, options and digital assets",
      heading: "Taxation of investments, options and digital assets",
      intro:
        "Review of gains, losses, withholding tax and reporting obligations relating to investments, options and digital assets.",
      group: "A",
    },
    {
      id: "intergenerational-transfers",
      label: "Intergenerational transfers, gifts, inheritances and trusts",
      heading: "Intergenerational transfers, gifts, inheritances and trusts",
      intro:
        "Review of tax and reporting aspects of asset transfers, gifts, inheritances and trusts, in coordination with legal counsel.",
      group: "A",
    },
    {
      id: "annual-tax-returns-individuals",
      label: "Annual tax returns for individuals",
      heading: "Annual tax returns for individuals",
      intro:
        "Preparation of information and annual reporting for individuals according to income, assets, documents and reporting obligations.",
      group: "B",
    },
    {
      id: "capital-declarations",
      label: "Capital declarations",
      heading: "Capital declarations",
      intro:
        "Preparation of capital declarations, consolidation of assets and liabilities and reconciliation with documents and prior filings.",
      group: "B",
    },
    {
      id: "prior-reporting-regularization",
      label: "Correction and regularization of prior reporting",
      heading: "Correction and regularization of prior reporting on assets and income",
      intro:
        "Review of the options available for correcting or regularizing prior reporting under the law and arrangements in place at the relevant time, without presenting a voluntary-disclosure route as always available.",
      group: "B",
    },
    {
      id: "employee-tax-refunds",
      label: "Employee tax refunds",
      heading: "Employee tax refunds",
      intro:
        "Review of a possible refund entitlement based on income, deductions, credits, contributions and certificates for the relevant tax years.",
      group: "B",
    },
    {
      id: "guardianship-reporting",
      label: "Services for guardians",
      heading: "Reporting and accounting support for guardians",
      intro:
        "Assistance with consolidating information, preparing reports and maintaining the accounting required from guardians, based on the documents and applicable requirements.",
      group: "B",
    },
  ],
};

export const TAX_GROUP_TITLES: Record<Lang, { A: string; B: string; listHeading: string }> = {
  he: {
    A: "חברות, בעלי מניות ועסקאות",
    B: "יחידים ומשקי בית",
    listHeading: "נושאי ייעוץ מס",
  },
  en: {
    A: "Companies, shareholders and transactions",
    B: "Individuals and households",
    listHeading: "Tax advisory topics",
  },
};

export type RelatedService = { label: string; to: string; hash?: string };

/** Section 10 — one Related Services item per listed page. */
export const RELATED_SERVICE: Record<string, RelatedService> = {
  "/bookkeeping": { label: "ייעוץ מס ודיווחים תקופתיים", to: "/tax-consulting" },
  "/payroll": { label: "שירותי שכר לחברות וסטארטאפים", to: "/companies" },
  "/audit": { label: "ניהול כספים במיקור חוץ", to: "/fractional-cfo" },
  "/fractional-cfo": { label: "ביקורת דוחות כספיים", to: "/audit" },
  "/cpa-startups": {
    label: "מיסוי השקעות, אופציות ונכסים דיגיטליים",
    to: "/tax-consulting",
    hash: "investments-options-digital-assets",
  },
  "/cpa-freelancers": {
    label: "מיסוי הכנסות משכר דירה",
    to: "/tax-consulting",
    hash: "real-estate-tax-israel",
  },
  "/cpa-foreign-companies": {
    label: "מיסוי חברות בישראל",
    to: "/tax-consulting",
    hash: "corporate-tax-israel",
  },
  "/cpa-international": {
    label: "תיקון והסדרת דיווחים קודמים",
    to: "/tax-consulting",
    hash: "prior-reporting-regularization",
  },
  "/tax-consulting": { label: "שירותי רואה חשבון לעצמאים ופרילנסרים", to: "/cpa-freelancers" },

  "/en/bookkeeping": { label: "Tax advisory and periodic reporting", to: "/en/tax-consulting" },
  "/en/payroll": { label: "Payroll services for companies and startups", to: "/en/companies" },
  "/en/audit": { label: "Outsourced financial management", to: "/en/fractional-cfo" },
  "/en/fractional-cfo": { label: "Financial statement audit", to: "/en/audit" },
  "/en/cpa-startups": {
    label: "Taxation of investments, options and digital assets",
    to: "/en/tax-consulting",
    hash: "investments-options-digital-assets",
  },
  "/en/cpa-freelancers": {
    label: "Rental-income taxation",
    to: "/en/tax-consulting",
    hash: "real-estate-tax-israel",
  },
  "/en/cpa-foreign-companies": {
    label: "Corporate tax in Israel",
    to: "/en/tax-consulting",
    hash: "corporate-tax-israel",
  },
  "/en/cpa-international": {
    label: "Correction and regularization of prior reporting",
    to: "/en/tax-consulting",
    hash: "prior-reporting-regularization",
  },
  "/en/tax-consulting": {
    label: "CPA services for freelancers and self-employed clients",
    to: "/en/cpa-freelancers",
  },
};

export const RELATED_HEADING: Record<Lang, string> = {
  he: "שירות נוסף רלוונטי",
  en: "Related service",
};
