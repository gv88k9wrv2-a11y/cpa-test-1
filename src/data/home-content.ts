export type HomeLink = { label: string; to: string; hash?: string };

export type HomeContent = {
  dir: "rtl" | "ltr";
  hero: {
    eyebrow: string;
    h1: string;
    paragraph: string;
    buttons: { label: string; to: string }[];
    imageAlt: string;
  };
  audiences: { title: string; desc: string; to: string; cta: string }[];
  needs: { heading: string; intro: string; cards: HomeLink[] };
  trust: { heading: string; facts: string[] };
  clusters: { title: string; items: HomeLink[] }[];
  clustersHeading: string;
  faqHeading: string;
  faqs: { q: string; a: string }[];
  cta: { heading: string; body: string; contact: string; whatsapp: string; contactTo: string };
};

export const HOME_CONTENT: Record<"he" | "en", HomeContent> = {
  he: {
    dir: "rtl",
    hero: {
      eyebrow: "משרד רואי חשבון בוטיק · הרצליה פיתוח · משנת 2000",
      h1: "ראיית חשבון, מס וניהול כספים לחברות, ליחידים ולעצמאים",
      paragraph:
        "נמרודי ושות׳ מעניק שירותי חשבונאות, ביקורת, מס ודיווח בישראל, בהתאם לצורכי הלקוח ולהיקף ההתקשרות.",
      buttons: [
        { label: "שירותים לחברות וסטארטאפים", to: "/companies" },
        { label: "שירותים ליחידים ולעצמאים", to: "/individuals" },
        { label: "יצירת קשר", to: "/contact" },
      ],
      imageAlt: "משרד רואי חשבון נמרודי ושות׳ בהרצליה פיתוח",
    },
    audiences: [
      {
        title: "חברות וסטארטאפים",
        desc: "ביקורת, חשבונאות, מס, שכר וניהול כספים לחברות ישראליות, סטארטאפים, חברות זרות הפועלות בישראל ועמותות.",
        to: "/companies",
        cta: "לכל השירותים לחברות וסטארטאפים",
      },
      {
        title: "יחידים ועצמאים",
        desc: "דוחות שנתיים, הצהרות הון, קריפטו, שכר דירה, רילוקיישן, החזרי מס ושירותים לעצמאים.",
        to: "/individuals",
        cta: "לכל השירותים ליחידים ולעצמאים",
      },
    ],
    needs: {
      heading: "במה נוכל לסייע?",
      intro: "בחרו את הנושא המתאים כדי להגיע ישירות למידע ולשירותים הרלוונטיים.",
      cards: [
        { label: "יש לי חברה או סטארטאפ", to: "/companies" },
        { label: "אני מייצג חברה זרה הפועלת בישראל", to: "/cpa-foreign-companies" },
        {
          label: "אני צריך לדווח על קריפטו",
          to: "/tax-consulting",
          hash: "investments-options-digital-assets",
        },
        { label: "יש לי הכנסות משכר דירה", to: "/tax-consulting", hash: "real-estate-tax-israel" },
        { label: "אני לפני רילוקיישן או חזרה לישראל", to: "/cpa-international" },
        { label: "אני עצמאי וצריך דיווח או דוח שנתי", to: "/cpa-freelancers" },
      ],
    },
    trust: {
      heading: "ניסיון, בהירות וליווי מקצועי",
      facts: [
        "המשרד פועל משנת 2000",
        "למעלה מ־30 שנות ניסיון לרו״ח שלמה נמרודי",
        "שירות בעברית ובאנגלית",
        "משרד בהרצליה פיתוח ופגישות וידאו",
      ],
    },
    clustersHeading: "מסלולי השירות של המשרד",
    clusters: [
      {
        title: "חברות, סטארטאפים ופעילות עסקית",
        items: [
          { label: "ביקורת דוחות כספיים", to: "/audit" },
          { label: "הנהלת חשבונות", to: "/bookkeeping" },
          { label: "חשבות שכר", to: "/payroll" },
          { label: "סטארטאפים וחברות טכנולוגיה", to: "/cpa-startups" },
          { label: "Fractional CFO וניהול כספים", to: "/fractional-cfo" },
        ],
      },
      {
        title: "יחידים, עצמאים ונכסים",
        items: [
          {
            label: "דוחות שנתיים והצהרות הון",
            to: "/tax-consulting",
            hash: "annual-tax-returns-individuals",
          },
          { label: "הכנסות משכר דירה", to: "/tax-consulting", hash: "real-estate-tax-israel" },
          { label: "החזרי מס לשכירים", to: "/tax-consulting", hash: "employee-tax-refunds" },
          { label: "עצמאים ופרילנסרים", to: "/cpa-freelancers" },
          { label: "שירותים לאפוטרופוסים", to: "/tax-consulting", hash: "guardianship-reporting" },
        ],
      },
      {
        title: "פעילות בין־לאומית ונכסים דיגיטליים",
        items: [
          {
            label: "קריפטו ונכסים דיגיטליים",
            to: "/tax-consulting",
            hash: "investments-options-digital-assets",
          },
          { label: "רילוקיישן ותושבות מס", to: "/cpa-international" },
          { label: "עולים חדשים ותושבים חוזרים", to: "/cpa-international" },
          { label: "חברות זרות הפועלות בישראל", to: "/cpa-foreign-companies" },
          { label: "מיסוי בין־לאומי", to: "/cpa-international" },
        ],
      },
    ],
    faqHeading: "שאלות ותשובות",
    faqs: [
      {
        q: "אילו סוגי לקוחות המשרד מלווה?",
        a: "המשרד מלווה חברות ישראליות, סטארטאפים וחברות טכנולוגיה, חברות זרות הפועלות בישראל, עמותות, עצמאים ופרילנסרים וכן יחידים. היקף השירות, תדירות הדיווח והאחריות נקבעים בהתאם לפעילות ולהיקף ההתקשרות המוסכם.",
      },
      {
        q: "האם ניתן לקבל ליווי בדיווח על קריפטו ונכסים דיגיטליים?",
        a: "כן. אנו מלווים בסוגיות דיווח ומיסוי הנוגעות לנכסים דיגיטליים, לרבות בחינת אופי הפעילות, איסוף וארגון נתוני עסקאות, חישוב רווחים והפסדים על בסיס הנתונים שנמסרו, הכנת מידע לדוח השנתי ובחינת חובות הדיווח בישראל. בהתאם למקרה, ניתן לסייע גם בהכנת תיעוד הנדרש להתנהלות מול בנקים ורשויות.",
      },
      {
        q: "כיצד מדווחות הכנסות משכר דירה בישראל ובחו״ל?",
        a: "אופן הדיווח והמיסוי של הכנסות משכר דירה תלוי במיקום הנכס, בסוגו, בשימוש בו ובמסלול המס הנבחן. לצורך הבחינה מרוכזים חוזי שכירות, אסמכתאות לתשלומים ונתונים על הוצאות, מימון ותקופות השכרה. בנכס בחו״ל נדרשים גם דוחות מקומיים ואישורי מס זר לצורך הדיווח בישראל ובחינת זיכוי מס זר.",
      },
      {
        q: "האם אתם מלווים רילוקיישן, עולים חדשים ותושבים חוזרים?",
        a: "כן. ניתן לקבל ליווי בבחינת תושבות המס, בדיווח על הכנסות ונכסים מחוץ לישראל, בבחינת זכאות להטבות לעולים חדשים ולתושבים חוזרים וביישום אמנות מס, בהתאם לנסיבות, לנתונים שנמסרו ולהוראות הדין.",
      },
      {
        q: "כיצד מלווה המשרד חברות זרות הפועלות בישראל?",
        a: "הליווי כולל בחינה של פעילות באמצעות חברה בת או סניף, פתיחת תיקים ברשויות, הנהלת חשבונות, שכר, דיווחים שוטפים והיערכות לדרישות מחירי העברה, בהתאם לפעילות בישראל ולהיקף ההתקשרות המוסכם.",
      },
    ],
    cta: {
      heading: "לא בטוחים לאיזה שירות לפנות?",
      body: "כתבו לנו אם הפנייה היא עבור חברה, עצמאי או יחיד ומה הנושא המרכזי, ונבחן את אופן ההמשך המתאים.",
      contact: "לעמוד יצירת קשר",
      whatsapp: "וואטסאפ",
      contactTo: "/contact",
    },
  },

  en: {
    dir: "ltr",
    hero: {
      eyebrow: "Boutique CPA Firm · Herzliya Pituach · Operating Since 2000",
      h1: "Accounting, Tax and Financial Services for Companies, Individuals and Self-Employed Clients",
      paragraph:
        "Nimrodi & Co. provides accounting, audit, Israeli tax and reporting services according to each client’s needs and the agreed engagement scope.",
      buttons: [
        { label: "Services for Companies & Startups", to: "/en/companies" },
        { label: "Services for Individuals & Self-Employed", to: "/en/individuals" },
        { label: "Contact Us", to: "/en/contact" },
      ],
      imageAlt: "Nimrodi & Co. CPA offices in Herzliya Pituach, Israel",
    },
    audiences: [
      {
        title: "Companies & Startups",
        desc: "Audit, accounting, tax, payroll and financial-management services for Israeli companies, startups, foreign companies operating in Israel and nonprofit organizations.",
        to: "/en/companies",
        cta: "All Services for Companies & Startups",
      },
      {
        title: "Individuals & Self-Employed",
        desc: "Annual returns, capital declarations, crypto, rental income, relocation, employee tax refunds and services for self-employed clients.",
        to: "/en/individuals",
        cta: "All Services for Individuals & Self-Employed",
      },
    ],
    needs: {
      heading: "How Can We Help?",
      intro: "Choose the topic that best matches your needs to reach the relevant information and services.",
      cards: [
        { label: "I have a company or startup", to: "/en/companies" },
        {
          label: "I represent a foreign company operating in Israel",
          to: "/en/cpa-foreign-companies",
        },
        {
          label: "I need to report crypto activity",
          to: "/en/tax-consulting",
          hash: "investments-options-digital-assets",
        },
        { label: "I have rental income", to: "/en/tax-consulting", hash: "real-estate-tax-israel" },
        { label: "I am planning relocation or a return to Israel", to: "/en/cpa-international" },
        {
          label: "I am self-employed and need reporting or an annual return",
          to: "/en/cpa-freelancers",
        },
      ],
    },
    trust: {
      heading: "Experience, Clarity and Professional Support",
      facts: [
        "Firm operating since 2000",
        "More than 30 years of experience for Shlomo Nimrodi, CPA",
        "Service in Hebrew and English",
        "Herzliya Pituach office and video meetings",
      ],
    },
    clustersHeading: "Service Paths",
    clusters: [
      {
        title: "Companies, Startups & Business Activity",
        items: [
          { label: "Financial Statement Audit", to: "/en/audit" },
          { label: "Bookkeeping", to: "/en/bookkeeping" },
          { label: "Payroll", to: "/en/payroll" },
          { label: "Startups & Technology Companies", to: "/en/cpa-startups" },
          { label: "Fractional CFO & Financial Management", to: "/en/fractional-cfo" },
        ],
      },
      {
        title: "Individuals, Self-Employed & Assets",
        items: [
          {
            label: "Annual Returns & Capital Declarations",
            to: "/en/tax-consulting",
            hash: "annual-tax-returns-individuals",
          },
          { label: "Rental Income", to: "/en/tax-consulting", hash: "real-estate-tax-israel" },
          { label: "Employee Tax Refunds", to: "/en/tax-consulting", hash: "employee-tax-refunds" },
          { label: "Self-Employed & Freelancers", to: "/en/cpa-freelancers" },
          { label: "Services for Guardians", to: "/en/tax-consulting", hash: "guardianship-reporting" },
        ],
      },
      {
        title: "International Activity & Digital Assets",
        items: [
          {
            label: "Crypto & Digital Assets",
            to: "/en/tax-consulting",
            hash: "investments-options-digital-assets",
          },
          { label: "Relocation & Tax Residency", to: "/en/cpa-international" },
          { label: "New Immigrants & Returning Residents", to: "/en/cpa-international" },
          { label: "Foreign Companies Operating in Israel", to: "/en/cpa-foreign-companies" },
          { label: "International Tax", to: "/en/cpa-international" },
        ],
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Which client types does the firm work with?",
        a: "The firm works with Israeli companies, startups and technology companies, foreign companies operating in Israel, nonprofit organizations, self-employed businesses and freelancers, as well as individuals. The services, reporting frequency and responsibilities are defined according to the activity, reporting needs and agreed scope.",
      },
      {
        q: "Can you assist with crypto and digital-asset reporting?",
        a: "Yes. We have experience with Israeli tax and reporting matters involving digital assets, including the organization of transaction data, review of the activity’s classification and preparation of information for relevant filings. Transactions involving virtual currencies may give rise to tax and reporting obligations depending on the nature of the activity, the facts of the transactions and applicable law.",
      },
      {
        q: "How is rental income in Israel and abroad reported?",
        a: "Reporting and taxation of rental income depend on the property location, its type and use, and the tax route being considered. Lease agreements, payment records and information on expenses, financing and rental periods are organized for the review. For property abroad, local reports and foreign tax certificates are also required for Israeli reporting and for reviewing foreign tax credits.",
      },
      {
        q: "Do you assist with relocation, new immigrants and returning residents?",
        a: "Yes. Support may include reviewing Israeli tax residency, reporting foreign income and assets, assessing eligibility for new immigrant and returning resident benefits, and applying tax treaties, subject to the circumstances, the information provided and applicable law.",
      },
      {
        q: "How do you support foreign companies operating in Israel?",
        a: "Support may include reviewing activity through an Israeli subsidiary or branch, registration with the authorities, bookkeeping, payroll, ongoing reporting and preparation for transfer-pricing requirements, according to the activity in Israel and the agreed engagement scope.",
      },
    ],
    cta: {
      heading: "Not Sure Which Service to Choose?",
      body: "Tell us whether the inquiry concerns a company, a self-employed business or an individual, and describe the main topic so that the appropriate next step can be considered.",
      contact: "Contact page",
      whatsapp: "WhatsApp",
      contactTo: "/en/contact",
    },
  },
};
