export type NavItem = { label: string; to: string; hash?: string };
export type NavGroup = { title: string; items: NavItem[] };

/* ---------------------------------- Hebrew --------------------------------- */

export const COMPANIES_GROUPS_HE: NavGroup[] = [
  {
    title: "לפי סוג החברה",
    items: [
      { label: "חברות ישראליות", to: "/companies" },
      { label: "סטארטאפים וחברות טכנולוגיה", to: "/cpa-startups" },
      { label: "חברות זרות הפועלות בישראל", to: "/cpa-foreign-companies" },
      { label: "עמותות ומלכ״רים", to: "/audit" },
    ],
  },
  {
    title: "חשבונאות, מס ודיווח",
    items: [
      { label: "ביקורת דוחות כספיים", to: "/audit" },
      { label: "הנהלת חשבונות", to: "/bookkeeping" },
      { label: "חשבות שכר", to: "/payroll" },
      { label: "ייעוץ מס לחברות", to: "/tax-consulting" },
      { label: "מיסוי בין־לאומי", to: "/cpa-international" },
    ],
  },
  {
    title: "ניהול כספים וצמיחה",
    items: [
      { label: "Fractional CFO וניהול כספים", to: "/fractional-cfo" },
      { label: "תקציב, תזרים ודיווח ניהולי", to: "/fractional-cfo" },
      { label: "ליווי סטארטאפים וגיוסי הון", to: "/cpa-startups" },
      { label: "בדיקות נאותות ו-M&A", to: "/fractional-cfo" },
      { label: "תוכניות הוניות וסעיף 102", to: "/payroll" },
    ],
  },
];

export const COMPANIES_BOTTOM_HE: NavItem = {
  label: "לכל השירותים לחברות וסטארטאפים",
  to: "/companies",
};

export const INDIVIDUALS_GROUPS_HE: NavGroup[] = [
  {
    title: "דיווחים אישיים",
    items: [
      {
        label: "דוחות שנתיים ליחידים",
        to: "/tax-consulting",
        hash: "annual-tax-returns-individuals",
      },
      {
        label: "הצהרות הון",
        to: "/tax-consulting",
        hash: "annual-tax-returns-individuals",
      },
      { label: "גילוי מרצון ודיווח על נכסים והכנסות", to: "/tax-consulting", hash: "prior-reporting-regularization" },
      { label: "החזרי מס לשכירים", to: "/tax-consulting", hash: "employee-tax-refunds" },
      { label: "שירותים לאפוטרופוסים", to: "/tax-consulting", hash: "guardianship-reporting" },
    ],
  },
  {
    title: "נכסים והכנסות",
    items: [
      { label: "קריפטו ונכסים דיגיטליים", to: "/tax-consulting", hash: "investments-options-digital-assets" },
      { label: "הכנסות משכר דירה בישראל", to: "/tax-consulting", hash: "real-estate-tax-israel" },
      { label: "הכנסות משכר דירה בחו״ל", to: "/tax-consulting", hash: "real-estate-tax-israel" },
      { label: "השקעות וניירות ערך", to: "/tax-consulting" },
      { label: "הכנסות מחו״ל וזיכוי מס זר", to: "/cpa-international" },
    ],
  },
  {
    title: "תושבות ועצמאים",
    items: [
      { label: "רילוקיישן ותושבות מס", to: "/cpa-international" },
      { label: "עולים חדשים ותושבים חוזרים", to: "/cpa-international" },
      { label: "אזרחים אמריקאים בישראל", to: "/cpa-international" },
      { label: "עצמאים ועוסקים מורשים", to: "/cpa-freelancers" },
      { label: "עוסק פטור / זעיר", to: "/cpa-freelancers" },
      { label: "פרילנסרים עם פעילות בחו״ל", to: "/cpa-freelancers" },
      { label: "מעבר מעצמאי לחברה", to: "/cpa-freelancers" },
    ],
  },
];

export const INDIVIDUALS_BOTTOM_HE: NavItem = {
  label: "לכל השירותים ליחידים ולעצמאים",
  to: "/individuals",
};

export const SERVICES_GROUPS_HE: NavGroup[] = [
  {
    title: "שירותים מקצועיים",
    items: [
      { label: "ביקורת דוחות כספיים", to: "/audit" },
      { label: "הנהלת חשבונות", to: "/bookkeeping" },
      { label: "חשבות שכר", to: "/payroll" },
      { label: "ייעוץ מס", to: "/tax-consulting" },
      { label: "מיסוי בין־לאומי", to: "/cpa-international" },
      { label: "Fractional CFO וניהול כספים", to: "/fractional-cfo" },
      { label: "רואה חשבון בהרצליה פיתוח", to: "/cpa-herzliya" },
      { label: "לכל השירותים", to: "/services" },
    ],
  },
];

export const ABOUT_GROUP_HE: NavItem[] = [
  { label: "אודות המשרד", to: "/about" },
  { label: "הצוות", to: "/team" },
];

export const KNOWLEDGE_GROUP_HE: NavItem[] = [
  { label: "מאמרים ומדריכים", to: "/blog" },
  { label: "שאלות ותשובות", to: "/faq" },
];

/* ---------------------------------- English -------------------------------- */

export const COMPANIES_GROUPS_EN: NavGroup[] = [
  {
    title: "By Company Type",
    items: [
      { label: "Israeli Companies", to: "/en/companies" },
      { label: "Startups & Technology Companies", to: "/en/cpa-startups" },
      { label: "Foreign Companies Operating in Israel", to: "/en/cpa-foreign-companies" },
      { label: "Nonprofit Organizations", to: "/en/audit" },
    ],
  },
  {
    title: "Accounting, Tax & Reporting",
    items: [
      { label: "Financial Statement Audit", to: "/en/audit" },
      { label: "Bookkeeping", to: "/en/bookkeeping" },
      { label: "Payroll", to: "/en/payroll" },
      { label: "Corporate Tax Advisory", to: "/en/tax-consulting" },
      { label: "International Tax", to: "/en/cpa-international" },
    ],
  },
  {
    title: "Financial Management & Growth",
    items: [
      { label: "Fractional CFO & Financial Management", to: "/en/fractional-cfo" },
      { label: "Budget, Cash Flow & Management Reporting", to: "/en/fractional-cfo" },
      { label: "Startup Support & Fundraising", to: "/en/cpa-startups" },
      { label: "Due Diligence & M&A", to: "/en/fractional-cfo" },
      { label: "Equity Plans & Section 102", to: "/en/payroll" },
    ],
  },
];

export const COMPANIES_BOTTOM_EN: NavItem = {
  label: "All Services for Companies & Startups",
  to: "/en/companies",
};

export const INDIVIDUALS_GROUPS_EN: NavGroup[] = [
  {
    title: "Personal Reporting",
    items: [
      {
        label: "Individual Annual Returns",
        to: "/en/tax-consulting",
        hash: "annual-tax-returns-individuals",
      },
      {
        label: "Capital Declarations",
        to: "/en/tax-consulting",
        hash: "annual-tax-returns-individuals",
      },
      { label: "Voluntary Disclosure and Reporting of Assets and Income", to: "/en/tax-consulting" },
      { label: "Employee Tax Refunds", to: "/en/tax-consulting", hash: "employee-tax-refunds" },
      { label: "Services for Guardians", to: "/en/tax-consulting", hash: "guardianship-reporting" },
    ],
  },
  {
    title: "Assets & Income",
    items: [
      {
        label: "Crypto & Digital Assets",
        to: "/en/tax-consulting",
        hash: "investments-options-digital-assets",
      },
      { label: "Rental Income in Israel", to: "/en/tax-consulting", hash: "real-estate-tax-israel" },
      { label: "Foreign Rental Income", to: "/en/tax-consulting", hash: "real-estate-tax-israel" },
      { label: "Investments & Securities", to: "/en/tax-consulting" },
      { label: "Foreign Income & Foreign Tax Credits", to: "/en/cpa-international" },
    ],
  },
  {
    title: "Residency & Self-Employment",
    items: [
      { label: "Relocation & Tax Residency", to: "/en/cpa-international" },
      { label: "New Immigrants & Returning Residents", to: "/en/cpa-international" },
      { label: "US Citizens Living in Israel", to: "/en/cpa-international" },
      { label: "Self-Employed Businesses", to: "/en/cpa-freelancers" },
      { label: "Osek Patur / Small Business", to: "/en/cpa-freelancers" },
      { label: "Freelancers with Overseas Activity", to: "/en/cpa-freelancers" },
      { label: "Moving from Sole Proprietor to Company", to: "/en/cpa-freelancers" },
    ],
  },
];

export const INDIVIDUALS_BOTTOM_EN: NavItem = {
  label: "All Services for Individuals & Self-Employed",
  to: "/en/individuals",
};

export const SERVICES_GROUPS_EN: NavGroup[] = [
  {
    title: "Professional Services",
    items: [
      { label: "Financial Statement Audit", to: "/en/audit" },
      { label: "Bookkeeping", to: "/en/bookkeeping" },
      { label: "Payroll", to: "/en/payroll" },
      { label: "Tax Advisory", to: "/en/tax-consulting" },
      { label: "International Tax", to: "/en/cpa-international" },
      { label: "Fractional CFO & Financial Management", to: "/en/fractional-cfo" },
      { label: "CPA Firm in Herzliya Pituach", to: "/en/cpa-herzliya" },
      { label: "All Services", to: "/en/services" },
    ],
  },
];

export const ABOUT_GROUP_EN: NavItem[] = [
  { label: "About the Firm", to: "/en/about" },
  { label: "Team", to: "/en/team" },
];

export const KNOWLEDGE_GROUP_EN: NavItem[] = [
  { label: "Articles & Guides", to: "/en/blog" },
  { label: "FAQ", to: "/en/faq" },
];
