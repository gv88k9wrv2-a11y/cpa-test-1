import imgCrypto from "../assets/blog-crypto.webp";
import imgEquity from "../assets/blog-equity.webp";
import imgTax from "../assets/blog-tax-planning.webp";
import imgIntl from "../assets/service-international.webp";
import imgStartups from "../assets/service-startups.webp";

export type BlogSectionEn = {
  h: string;
  p: string[];
  afterTable?: string[];
  faqs?: boolean;
  /** Optional typed comparison table rendered after the paragraphs. */
  table?: { headers: string[]; rows: string[][] };
};

export type BlogPostEn = {
  slug: string;
  title: string;
  /** Short SEO title, <=44 chars (suffix added by the route) */
  metaTitle?: string;
  excerpt: string;
  /** SEO meta description, 150-160 chars */
  metaDescription: string;
  date: string;
  readMin: number;
  category: string;
  image: string;
  /** shared key linking a HE article to its EN counterpart */
  translationKey?: string;
  tags?: string[];
  imageAlt?: string;
  relatedSlugs?: string[];
  relatedService?: { href: string; label: string };
  modifiedDate?: string;
  /** Article-specific disclaimer overriding the shared one. */
  disclaimer?: string;
  faqs?: { q: string; a: string }[];
  sections: BlogSectionEn[];
};

export const BLOG_POSTS_EN: BlogPostEn[] = [
  {
    slug: "preferred-technological-enterprise",
    translationKey: "preferred-technological-enterprise",
    imageAlt: "Preferred Technological Enterprise (PTE): Tax Incentives for Israeli Tech Companies",
    tags: [
      "preferred technological enterprise",
      "PTE",
      "corporate tax",
      "R&D incentives",
      "startups",
    ],
    relatedSlugs: ["startup-accounting-tax-israel", "israeli-subsidiary-vs-branch"],
    relatedService: {
      href: "/en/cpa-startups",
      label: "CPA services for startups and tech ventures in Israel",
    },
    title: "Preferred Technological Enterprise (PTE): Tax Incentives Guide for Israeli Tech Companies",
    metaTitle: "Preferred Technological Enterprise (PTE)",
    excerpt:
      "Israel's Law for the Encouragement of Capital Investments provides technology companies, software ventures, and startups with the opportunity to benefit from reduced corporate tax rates, which may apply where statutory requirements are satisfied, alongside reduced dividend withholding tax. Eligibility depends on R&D expenditure tests, qualified intellectual property (IP), international competitiveness, and application of the OECD Nexus approach. This guide reviews key eligibility criteria, calculation mechanics, and reporting requirements with the Israel Tax Authority.",
    metaDescription:
      "Guide to Israel's Preferred Technological Enterprise (PTE) regime: eligibility, Nexus rules, dividend taxation, reporting requirements and tax incentives.",
    date: "2026-10-19",
    readMin: 11,
    category: "Corporate & Tech Tax",
    image: imgStartups,
    disclaimer:
      "The information presented in this article constitutes a general professional overview only. The legal framework governing capital investment incentives, Preferred Enterprises, and Preferred Technological Enterprises is grounded in detailed statutory provisions, regulations, administrative tax circulars, and the specific application of facts to each individual case. The contents herein should not be relied upon for decision-making without independent professional review of the particular circumstances. Nothing in this article constitutes legal advice, formal tax opinion, or an engagement recommendation. Each case must be evaluated based on its distinct factual background, operational structure, and applicable law and precedent at the relevant time. For tailored professional guidance, please contact our firm.",
    faqs: [
      {
        q: "Are SaaS companies delivering cloud-based software eligible for PTE benefits?",
        a: "In many cases, the mere hosting of servers or cloud infrastructure outside Israel does not in itself preclude eligibility. However, qualification requires an evaluation of statutory requirements, revenue sourcing, where the underlying IP was developed, and operational substance. Where software is engineered in Israel and constitutes a qualifying intangible asset, subscription-based revenue (SaaS) can qualify as technological income, provided all other legal benchmarks are satisfied.",
      },
      {
        q: "Is prior approval required from the Israel Tax Authority or the Innovation Authority?",
        a: "In most standard PTE scenarios, an eligible company generally claims the applicable benefits through its annual corporate tax return (\"self-assessment track\"), provided objective statutory tests are met. However, companies that do not meet quantitative growth thresholds require formal certification from the Israel Innovation Authority. For complex group restructurings or cross-border asset transfers, seeking a formal pre-ruling from the Israel Tax Authority is strongly advisable.",
      },
      {
        q: "What is the primary difference between a Preferred Enterprise and a PTE?",
        a: "A standard Preferred Enterprise primarily serves traditional or advanced manufacturing enterprises exporting tangible goods, offering corporate tax rates of 16% (central Israel) or 7.5% (Development Area A). In contrast, a Preferred Technological Enterprise (PTE) targets IP-centric software, technology, and R&D enterprises, delivering a 12% corporate tax rate in central Israel, 7.5% in development zones, and specialized withholding tax relief on dividends paid to foreign parent entities.",
      },
      {
        q: "Can tax incentives apply if the IP was acquired from a third party?",
        a: "Acquiring intellectual property from an external party does not automatically disqualify an enterprise, but directly affects the Nexus ratio: the acquisition cost is added to the denominator, potentially reducing the proportion of income eligible for preferential rates if subsequent substantial development is not conducted by the acquiring entity. A detailed analysis of the transaction structure and subsequent R&D operations is necessary.",
      },
    ],
    sections: [
      {
        h: "Introduction: Tax Incentives for Technology and Growth Companies in Israel",
        p: [
          "The Law for the Encouragement of Capital Investments, 5719-1959, serves as one of the State of Israel's central economic incentive frameworks designed to foster business expansion, exports, and research and development (R&D). While historical incentive regimes focused primarily on traditional, asset-heavy industrial plants, modern legislative amendments—most notably Amendment 73—realigned the tax framework with the knowledge-based economy, targeting software companies, startups, and intellectual property (IP)-intensive ventures.",
          "For technology companies operating in Israel, distinguishing between a **Preferred Enterprise** and a **Preferred Technological Enterprise (PTE)** is critical. Selecting the appropriate track, combined with rigorous compliance with international Nexus principles (OECD BEPS Action 5), can yield a substantially reduced corporate tax rate relative to the standard rate, alongside significant dividend withholding tax relief—strictly subject to satisfying statutory provisions and examining the specific circumstances of each case.",
        ],
      },
      {
        h: "Comparison of Tracks and Corporate Tax Rates",
        p: [
          "*The tax rates and conditions presented below are general and may vary based on statutory provisions, temporary orders, ownership structure, and the specific facts of each case.*",
        ],
        table: {
          headers: [
            "Parameter",
            "Standard Company",
            "Preferred Enterprise",
            "Preferred Technological Enterprise (PTE)",
            "Special Preferred Technological Enterprise",
          ],
          rows: [
            ["**Corporate Income Tax – Central Israel**", "23%", "16%", "12%", "6%"],
            ["**Corporate Income Tax – Development Area A**", "23%", "7.5%", "7.5%", "6%"],
            ["**Dividend Tax for Individual Israeli Residents**", "25%–30%", "20%", "20%", "20%"],
            [
              "**Dividend Tax for Foreign Parent Company**",
              "Treaty rate (typically 10%–25%)",
              "Treaty rate",
              "4% (subject to statutory criteria)",
              "4% (subject to statutory criteria)",
            ],
            [
              "**Primary Eligibility Basis**",
              "None",
              "Industrial exports & competitiveness",
              "R&D activity & qualifying IP",
              "Global group turnover exceeding NIS 10B",
            ],
          ],
        },
      },
      {
        h: "Key Criteria for Assessing Preferred Technological Enterprise (PTE) Eligibility",
        p: [
          "*The criteria below represent the primary statutory tests. Actual eligibility is governed by the law, regulations, Israel Tax Authority positions, and the specific facts of each company and its operations.*",
          "Eligibility assessment involves several statutory tests established by law, regulations, and tax authority guidance, with implementation varying based on company characteristics:",
          "**1. Group Revenue Ceiling** — The total consolidated revenue of the company (or the multinational group of which it is part) does not exceed NIS 10 billion in the tax year. (Enterprises exceeding this threshold are assessed under the \"Special Preferred Technological Enterprise\" regime).",
          "**2. Qualifying Intangible Asset (Qualifying IP)** — Revenues must derive from a qualifying intangible asset as defined in the law and regulations—such as computer software, patents, technological know-how, or other proprietary rights satisfying statutory requirements—developed through the enterprise's research and development activities.",
          "**3. Technological Activity Test (R&D Spending and Growth)** — The company must satisfy the baseline R&D expenditure threshold (R&D expenses representing at least 7% of annual revenue or at least NIS 75 million per year), alongside at least one of the following additional criteria: sustained workforce growth (at least 200 employees or a 25% increase in headcount in accordance with statutory rules); external venture capital investment of at least NIS 8 million; at least 25% revenue growth over a three-year period; or, alternatively, obtaining specific formal certification from the Israel Innovation Authority (IIA) recognizing the company as an \"innovation-promoting company.\"",
          "**4. International Competitiveness Test (Exports)** — Compliance with statutory export and competitiveness tests. The statutory provisions set forth diverse market and export benchmarks, which in certain instances relate to the characteristics of the target market.",
        ],
      },
      {
        h: "The Nexus Formula: Calculating Qualifying Technological Income",
        p: [
          "Tax benefits under the PTE regime do not automatically apply to an enterprise's total net profit, but solely to its **Preferred Technological Income**. The eligible income ratio is calculated in accordance with the modified Nexus approach established under OECD BEPS Action 5:",
          "Eligible Nexus Ratio = min(1, (Direct Qualifying R&D * 1.3) / (Total R&D Costs + IP Acquisition Costs))",
          "*The formula presented above is for illustrative purposes only and does not replace a comprehensive professional computation.*",
          "Economic implications of the Nexus formula:",
          "**1. Incentivizing Direct Local R&D:** The greater the proportion of core development performed directly by company employees in Israel, the closer the eligible ratio approaches 100%.",
          "**2. Impact of IP Acquisitions and Outsourcing:** Acquiring intellectual property from foreign affiliates or outsourcing core R&D activities outside of Israel expands the denominator, potentially diluting the proportion of income eligible for reduced corporate tax rates.",
          "**3. The 30% Uplift Factor:** Israeli law permits a 30% uplift on qualifying domestic R&D expenses to buffer against certain external and outsourced expenditures, capped at total actual R&D costs.",
        ],
      },
      {
        h: "Dividend Taxation for Foreign Parent Companies (The 4% Regime)",
        p: [
          "A substantial advantage of the Preferred Technological Enterprise regime involves reduced taxation on dividends distributed to a foreign parent entity holding the Israeli enterprise.",
          "As a general rule, the law establishes a series of cumulative statutory conditions for the application of this reduced withholding rate, including conditions relating to the ownership structure, characteristics of the foreign parent, origin of the distributed profits, and additional legal prerequisites. Determining eligibility requires a case-by-case analysis of the multinational group structure, corporate classification, and the circumstances of the distribution, in conjunction with applicable bilateral double taxation treaties.",
        ],
      },
      {
        h: "Common Pitfalls in Managing Technological Tax Regimes",
        p: [
          "**1. Inadequate R&D Time and Project Tracking:** Failure to maintain a clear evidentiary separation between qualified R&D activities and routine technical support, implementation, or sales operations.",
          "**2. IP Acquisitions Without Prior Nexus Modeling:** Purchasing source code or technology assets from related entities without modeling how the acquisition will affect the Nexus denominator and overall effective tax rate.",
          "**3. Cross-Border Transactions and Transfer Pricing:** Inconsistent transfer pricing methodologies between the foreign parent and the Israeli development center, creating exposure to dual-jurisdiction tax audits.",
          "**4. Incomplete Annual Tax Return Filings:** Omitting required forms and supporting documentation from the annual corporate tax return (such as Form 973 for calculating preferred technological income, Form 901A, and related filings in accordance with statutory provisions and Israel Tax Authority directives). Additional notifications, declarations, and attachments may be required depending on the chosen track and filing circumstances.",
        ],
      },
      {
        h: "Professional Consultation & Advisory",
        p: [
          "Evaluating eligibility for tax incentives under Israel's Law for the Encouragement of Capital Investments? Nimrodi & Co. CPAs assists software companies, startups, and technology enterprises in assessing eligibility for Preferred Enterprise and Preferred Technological Enterprise (PTE) regimes, modeling tax impacts, preparing defensible Nexus documentation, and assisting with tax authority interactions, reporting requirements and auditor coordination. See also our [corporate tax consulting and planning](/en/tax-consulting) services.",
          "**Phone:** 09-958-2211 · **Email:** office@nimrodi.co.il · **Address:** 16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel",
        ],
      },
    ],
  },
  {
    slug: "israeli-subsidiary-vs-branch",
    translationKey: "foreign-company-structure",
    imageAlt: "Israeli Subsidiary or Branch: Key Considerations for Foreign Entities",
    tags: ["foreign companies", "subsidiary", "branch", "international tax"],
    relatedSlugs: [
      "foreign-companies-operating-in-israel",
      "relocation-tax-residency",
      "startup-accounting-tax-israel",
    ],
    relatedService: {
      href: "/en/cpa-foreign-companies",
      label: "CPA services for foreign companies in Israel",
    },
    title: "Israeli Subsidiary or Branch: Key Tax Considerations",
    metaTitle: "Israeli Subsidiary or Branch",
    excerpt:
      "Choosing between an Israeli subsidiary and a branch of a foreign company affects tax, legal liability, and operations. A professional review of the key considerations.",
    metaDescription:
      "Israeli subsidiary or branch: review tax, liability, operational and reporting considerations for a foreign company entering Israel. Contact our firm today.",
    date: "2026-03-19",
    readMin: 9,
    category: "International Tax",
    image: imgEquity,
    sections: [
      {
        h: "Two principal options — and why the choice matters",
        p: [
          "When an international group plans ongoing activity in Israel, two common structures are an Israeli subsidiary and an Israeli branch. Other arrangements may also be relevant, depending on the activity and circumstances.",
          "Each option has implications across multiple areas: corporate income tax and withholding on dividends, legal liability, regulatory requirements, reporting structure, transfer pricing, and local reputation considerations.",
        ],
      },
      {
        h: "Israeli subsidiary — key advantages",
        p: [
          "A separate legal entity with limited liability — Israeli claims are directed to the local entity rather than to the foreign parent.",
          "A familiar and well-understood structure from an Israeli tax authority perspective, with standard annual reporting as a private company.",
          "Ability to hire employees and raise capital in Israel under a local entity — often significant for technology companies.",
          "Clarity on dividend taxation — an applicable tax treaty typically defines the withholding tax rate on dividends paid to the foreign parent.",
        ],
      },
      {
        h: "Israeli subsidiary — disadvantages",
        p: [
          "Operations through an Israeli subsidiary may be subject to two levels of taxation: tax at the company level on taxable income and withholding tax when dividends are distributed to the parent company.",
          "The applicable rates depend on Israeli law, the relevant tax treaty where applicable, the status of the recipient and the conditions governing the distribution.",
          "Requirements for equity capital, formal governance (board of directors, meetings), and audited annual financial statements.",
        ],
      },
      {
        h: "Branch of a foreign company",
        p: [
          "A branch is not a separate legal entity — it represents the foreign company's activity in Israel, registered as a foreign corporation with the Israeli Companies Registrar.",
          "Advantages: no withholding tax on the transfer of profits back to the head office (there is no legal 'dividend'), some operational simplicity, and, in certain cases, easier setup or wind-down of activity.",
          "Possible disadvantages include direct exposure of the foreign company to liabilities of the Israeli branch, Israeli reporting on income attributed to the branch, and transfer-pricing analysis of dealings between the branch and head office.",
        ],
      },
      {
        h: "Comparative tax efficiency — illustrative example",
        p: [
          "A meaningful tax comparison between an Israeli subsidiary and a branch requires more than applying the corporate tax rate.",
          "The analysis may include the taxable income attributable to the Israeli activity, deductible expenses, intercompany payments, transfer pricing, withholding tax, the applicable tax treaty, foreign-tax-credit considerations and the treatment in the parent company’s jurisdiction.",
          "The comparison should therefore be based on the planned structure and the relevant facts rather than on a general numerical example.",
          "The precise outcome depends on the relevant tax treaty, the parent's status in its home jurisdiction, and the availability of foreign tax credits in the country of residence. Accurate quantification requires a case-specific analysis, including the source country's tax rules.",
        ],
      },
      {
        h: "Additional considerations",
        p: [
          "Industry regulation — in certain sectors (banking, insurance, aviation), formal requirements apply to the type of legal entity permitted.",
          "Local market presence — an Israeli subsidiary may provide a clearer local identity for customers, suppliers and employees.",
          "Employee incentive plans — the structure and tax treatment of options for Israeli employees should be reviewed under Section 102 and the applicable plan arrangements.",
          "Exit from the market — the legal, tax, employment and reporting steps for winding down a subsidiary or branch depend on the structure and circumstances.",
        ],
      },
      {
        h: "Conclusion",
        p: [
          "There is no single correct structure for every foreign company. The decision depends on tax considerations, legal exposure, hiring plans, contracts, expected duration and the company’s objectives in Israel.",
          "Nimrodi & Co. can assist with the Israeli accounting and tax analysis of possible operating structures and with the preparation of information for registrations and ongoing reporting. Entity formation and legal structuring should be reviewed and implemented with qualified legal advisers. Contact the firm to discuss the activity and the possible engagement scope.",
        ],
      },
    ],
  },
  {
    slug: "foreign-companies-operating-in-israel",
    translationKey: "foreign-company-tax-presence",
    imageAlt: "Foreign Companies Operating in Israel: When Does a Corporate Tax Liability Arise?",
    tags: ["foreign companies", "permanent establishment", "corporate tax", "reporting"],
    relatedSlugs: [
      "israeli-subsidiary-vs-branch",
      "relocation-tax-residency",
      "startup-accounting-tax-israel",
    ],
    relatedService: {
      href: "/en/cpa-foreign-companies",
      label: "CPA services for foreign companies in Israel",
    },
    title: "Foreign Companies in Israel: Corporate Tax Liability",
    metaTitle: "Foreign Companies: Israeli Tax",
    excerpt:
      "Permanent Establishment, dependent agents, and digital activity — a professional review of the conditions under which a foreign company becomes taxable in Israel, and the practical implications.",
    metaDescription:
      "Foreign companies operating in Israel: review permanent establishment, dependent agents, digital activity and local reporting duties. Contact our firm today.",
    date: "2026-02-27",
    readMin: 9,
    category: "International Tax",
    image: imgEquity,
    sections: [
      {
        h: "The baseline principle — territorial taxation of a foreign company",
        p: [
          "A company that is not an Israeli tax resident may still have Israeli tax obligations in relation to Israeli-source income or activity. The analysis distinguishes between selling to Israeli customers and conducting income-producing activity in Israel.",
          "Where a tax treaty exists between Israel and the company's country of residence, an additional layer of analysis applies — generally under the concept of a Permanent Establishment (PE).",
        ],
      },
      {
        h: "Permanent Establishment (PE) under tax treaties",
        p: [
          "Most of Israel's tax treaties follow the OECD model and define a PE as a fixed place of business through which the enterprise carries on its business, wholly or in part. Examples include an office, branch, workshop, or a construction site of a specified duration.",
          "Treaties exclude certain activities from the PE definition, such as a warehouse used solely for storage or an office used for auxiliary functions. Classification depends on the specific facts and the actual scope of activity, not solely on the formal designation.",
        ],
      },
      {
        h: "Dependent agent as a Permanent Establishment",
        p: [
          "Even without a physical office, a foreign company may be considered to have a PE in Israel where it has a 'dependent agent' in Israel — a person who acts on behalf of the company and habitually exercises authority to conclude contracts on its behalf, or plays a principal role in closing transactions.",
          "This is particularly relevant to foreign technology companies that engage sales personnel in Israel under a subcontractor or representative arrangement. Even where the engagement is formally structured as 'marketing services only', the actual role may justify classification as a dependent agent.",
        ],
      },
      {
        h: "Digital economy and taxation challenges",
        p: [
          "With the growth of the digital economy, foreign companies sell services and content to Israeli customers without any physical presence. Authorities in many jurisdictions are examining new taxation mechanisms — Digital Services Tax, OECD Pillar One rules, and sourcing rules.",
          "Israeli Tax Authority guidance addresses the Israeli income-tax and VAT considerations that may arise when a foreign company conducts digital activity involving Israeli customers or operations.",
          "The analysis may include the functions performed in Israel, the involvement of local personnel or related entities, the manner in which services are offered to Israeli customers and the extent of the company’s business activity in Israel.",
          "Whether the activity creates a permanent establishment, Israeli-source taxable income or VAT registration and reporting obligations depends on the facts, Israeli law and the relevant tax treaty where applicable.",
        ],
      },
      {
        h: "Practical implications where a PE exists",
        p: [
          "A permanent establishment may trigger Israeli registration, tax-return and reporting obligations, depending on the legal structure, activity and applicable requirements.",
          "Transactions and profit attribution between the foreign company and the permanent establishment may require transfer-pricing analysis on an arm’s-length basis.",
          "Double taxation may arise if the same income is taxed in Israel and in the company’s country of residence; treaty relief and foreign tax credits depend on the applicable rules.",
        ],
      },
      {
        h: "What should be reviewed before entering the Israeli market?",
        p: [
          "The planned operating structure — direct office, Israeli subsidiary, subcontractor, independent agent, or an Israeli employee.",
          "The scope of sales and service activity in Israel, and who effectively makes business decisions.",
          "The relevant treaty between Israel and the country of incorporation, and structuring activity around its PE rules.",
        ],
      },
      {
        h: "Conclusion",
        p: [
          "Foreign companies operating in Israel today face a complex regulatory environment. A review before activity commences may help identify accounting, tax, reporting and permanent-establishment issues and compare possible operating structures. The appropriate treatment depends on the facts, applicable law and relevant treaty.",
          "Nimrodi & Co. assists foreign companies entering the Israeli market with accounting and tax analysis of proposed structures, transfer-pricing matters and ongoing Israeli reporting.",
        ],
      },
    ],
  },
  {
    slug: "relocation-tax-residency",
    translationKey: "relocation-tax-residency",
    imageAlt: "Terminating Israeli Tax Residency: Exit Tax, Relocation and National Insurance Guide",
    tags: ["relocation", "tax residency", "centre of life", "exit tax"],
    relatedSlugs: [
      "foreign-companies-operating-in-israel",
      "israeli-subsidiary-vs-branch",
      "preferred-technological-enterprise",
    ],
    relatedService: { href: "/en/cpa-international", label: "International tax and relocation planning" },
    title: "Relocation and Terminating Israeli Tax Residency: The Complete Guide for Israelis Moving Abroad (2026)",
    metaTitle: "Terminating Israeli Tax Residency: Exit Tax, Relocation & National Insurance Guide | Nimrodi & Co.",
    excerpt: "Center of Life Test: Israeli tax residency is not determined solely by the number of days spent outside Israel. The Israel Tax Authority and courts examine the totality of an individual's personal, family, economic, and social ties.\n\nExit Tax (Section 100A): Individuals ceasing to be Israeli tax residents may become subject to exit tax rules on capital assets, including shares, stock options, RSUs, and other capital assets. Tax may be paid immediately or deferred until realization.\n\nNational Insurance: Severing tax residency with the Israel Tax Authority does not automatically terminate residency status with the National Insurance Institute (NII). The issue must be reviewed separately.\n\nTax Treaties: In cases of dual residency, international tax treaties may determine residency status and allocate taxing rights between countries through tie-breaker rules.",
    metaDescription:
      "Planning a relocation abroad? Comprehensive guide by Shlomo Nimrodi, CPA, covering Israeli tax residency termination, Section 100A exit tax, National Insurance, RSUs, employee stock options, and tax treaties.",
    date: "2026-10-27",
    readMin: 14,
    category: "International Tax",
    image: imgIntl,
    sections: [
  {
    "h": "1. Introduction: Israel’s Worldwide Taxation System",
    "p": [
      "Since the tax reform that took effect in the early 2000s, Israel has operated under a personal worldwide taxation regime.",
      "As a result, an Israeli tax resident is generally subject to Israeli taxation on worldwide income, even when income is earned, generated, or received outside Israel.",
      "Accordingly, individuals relocating abroad who fail to establish a valid termination of Israeli tax residency may remain exposed to Israeli taxation on:\nSalary paid by a foreign employer.\n\nForeign business and self-employment income.\n\nCapital gains and investment income.\n\nEmployee stock options, RSUs, and ESPP plans.\n\nPassive income from foreign sources, including rental income, dividends, and interest.",
      "Proper tax planning before departure may significantly reduce tax exposure, prevent disputes with tax authorities, and minimize the risk of double taxation."
    ]
  },
  {
    "h": "2. Who Is Considered an Israeli Tax Resident?",
    "p": [
      "Section 1 of the Israeli Income Tax Ordinance provides that an individual is generally considered an Israeli resident if their center of life is in Israel.",
      "The Substantive Test – Center of Life\nThe Israel Tax Authority and Israeli courts examine the totality of circumstances through several categories of ties.",
      "Personal and Family Ties\nLocation of the spouse's primary residence.\n\nPlace of residence of children.\n\nEducational institutions attended by children.\n\nCommunity and social involvement.\n\nOngoing personal and family relationships.",
      "Economic Ties\nPrincipal place of employment.\n\nLocation of business management.\n\nReal estate holdings in Israel and abroad.\n\nActive bank accounts and credit card usage.\n\nInvestment portfolios and financial assets.",
      "Behavioral Ties\nIntent regarding the duration of relocation.\n\nMaintenance of a permanent home in the destination country (long-term lease or home purchase).\n\nConduct with authorities in the destination country (filing as a local tax resident).",
      "As the center of life is relocated in a consistent, substantive, and documented manner, the taxpayer's position regarding termination of Israeli tax residency is strengthened.",
      "The Quantitative Test – Statutory Day Presumptions\nThe Ordinance establishes two rebuttable presumptions based on physical presence:\nFirst Presumption: Physical presence in Israel for 183 days or more during the tax year.\n\nSecond Presumption: Physical presence in Israel for 30 days or more during the tax year, combined with presence of 425 days or more during that tax year and the two preceding tax years.",
      "Importantly, these presumptions are rebuttable by both the taxpayer and the tax authority. An individual spending fewer than 183 days in Israel may still be classified as a resident if their center of life remains in Israel; conversely, an individual meeting a presumption may rebut it by establishing that their center of life has shifted abroad."
    ]
  },
  {
    "h": "3. Exit Tax – Section 100A of the Income Tax Ordinance",
    "p": [
      "Section 100A of the Israeli Income Tax Ordinance is among the most significant considerations in relocation tax planning. The provision ensures that capital gains accrued on assets during the period of Israeli tax residency are subject to Israeli taxation, even if the assets are disposed of after residency ends.",
      "Definition of Asset Under Section 100A\nThe exit tax generally applies to an individual's capital assets, including:\nShares in private and publicly traded corporations.\n\nStock options, RSUs, and equity-based instruments.\n\nIntangible assets and capital rights.",
      "The provision generally does not apply to real estate located in Israel (taxable upon sale under the Real Estate Taxation Law) or assets retaining an explicit territorial tax connection to Israel.",
      "Tax Mechanics: Two Statutory Alternatives\nTaxpayers may choose between two alternatives:\nPayment Upon Departure: The asset is valued on the date residency terminates, tax is calculated on the deemed gain accrued to that date, and the Israeli tax connection for that asset is severed.\n\nDeferral Until Actual Disposal: Payment is deferred until the asset is sold. Upon realization, tax is calculated on a linear basis: the proportion of the gain corresponding to the period of Israeli residency relative to the total holding period is allocated to Israel and taxed accordingly.",
      "Illustrative Numerical Example (Linear Allocation)\nAn individual purchased shares in a private company for NIS 100,000.\nAfter 4 years, Israeli tax residency terminated and tax was deferred.\nFour years later (total holding period of 8 years), the shares were sold for NIS 500,000 (total capital gain: NIS 400,000).",
      "Simply stated, residency in Israel accounted for 4 of the 8 holding years; therefore, approximately 50% of the gain (NIS 200,000) may be attributed to the period of Israeli residency and may create an Israeli tax liability, subject to applicable law.",
      "Calculations may be affected by transitional rules, regulations, CPI indexation, currency fluctuations, and applicable tax treaties."
    ]
  },
  {
    "h": "4. Employee Stock Options, RSUs and Equity Compensation",
    "p": [
      "Many technology professionals and executives hold complex forms of equity compensation, including:\nSection 102 options.\n\nRestricted Stock Units (RSUs).\n\nRestricted Shares.\n\nEmployee Stock Purchase Plans (ESPPs).",
      "Relocation frequently creates overlap between multiple tax jurisdictions."
    ],
    "table": {
      "headers": [
        "Compensation Type",
        "Key Relocation Issue"
      ],
      "rows": [
        [
          "Section 102 Options",
          "Vesting periods spanning multiple countries and trustee holding requirements"
        ],
        [
          "RSUs",
          "Taxable events upon vesting and possible dual-tax exposure"
        ],
        [
          "ESPP Plans",
          "Classification of benefits and timing issues"
        ],
        [
          "Restricted Shares",
          "Allocation between periods of employment in different jurisdictions"
        ]
      ]
    },
    "afterTable": [
      "In many cases, detailed allocation calculations are required to determine which portion of the benefit relates to work performed in Israel versus abroad."
    ]
  },
  {
    "h": "5. Founders, Controlling Shareholders and Israeli Companies",
    "p": [
      "Relocation by a founder or significant shareholder may have consequences not only for the individual but also for the company.",
      "Management and Control\nForeign tax authorities may argue that a company's effective management is exercised from the destination country.",
      "Permanent Establishment (PE)\nOngoing business activity carried out abroad may create a taxable Permanent Establishment in another jurisdiction.",
      "International Structures\nCareful review may be required regarding:\nForeign companies.\n\nHolding structures.\n\nDividend distributions.\n\nManagement fees.\n\nTransfer pricing arrangements.",
      "Special consideration should be given to Israeli Controlled Foreign Company (CFC / חמ״ז) and Foreign Professional Company (FPC / חמי״ז) rules. The objective of structured planning is, among other things, to enhance certainty and mitigate double taxation risks."
    ]
  },
  {
    "h": "6. National Insurance Institute (NII) and Healthcare",
    "p": [
      "A common misconception is that terminating tax residency automatically terminates residency for National Insurance purposes. The two regimes operate under distinct legal frameworks.",
      "Key Considerations:\nOngoing Contributions: An individual regarded as an Israeli resident for National Insurance purposes who does not work in Israel may remain liable for minimum National Insurance and health insurance contributions. Unpaid contributions may generate debts, interest, and penalties.",
      "Residency Status Questionnaire: In appropriate cases, individuals may proactively submit a questionnaire to determine residency status with the NII.",
      "Extended Absence Abroad: Long-term residence abroad may serve as a significant indicator that residency has ceased, though status depends on the totality of circumstances rather than duration alone.",
      "Waiting Period for Healthcare: Ceasing to be an Israeli resident results in loss of state healthcare coverage. Upon a future return, a statutory waiting period applies (one month per year of absence, up to a maximum of six months), which may in certain circumstances be redeemed through a statutory payment."
    ]
  },
  {
    "h": "7. Relocating to the United States",
    "p": [
      "Relocating to the US presents unique considerations due to the US tax system:",
      "Worldwide Taxation: The US taxes citizens and permanent residents (green card holders) on worldwide income.",
      "Saving Clause: The US-Israel Tax Treaty includes a Saving Clause that limits the ability of US citizens to rely on treaty provisions to reduce US taxation.",
      "Substantial Presence Test: Non-US citizens may become US tax residents under this test based on days spent in the US over a three-year period.",
      "International Reporting Obligations: Strict reporting applies to foreign accounts, trusts, pension plans, and foreign entities (e.g., FBAR, Form 8938, Form 5471, PFIC rules).",
      "Social Security Considerations: In the absence of a comprehensive Totalization Agreement between Israel and the US, social security obligations should be evaluated on a case-by-case basis."
    ]
  },
  {
    "h": "8. Tax Treaties and Tie-Breaker Rules",
    "p": [
      "Where an individual qualifies as a tax resident of two countries simultaneously, the applicable tax treaty may determine residency.",
      "Most Israeli treaties generally apply the following hierarchy:\nPermanent Home.\n\nCenter of Vital Interests.\n\nHabitual Abode.\n\nNationality.\n\nMutual Agreement Procedure (MAP)."
    ]
  },
  {
    "h": "9. Relocation Checklist",
    "p": [
      "Before Departure\nReview assets and investments.\n\nAnalyze exit tax exposure.\n\nReview stock options and RSUs.\n\nConsider National Insurance implications.\n\nReview the applicable tax treaty.\n\nStructure employment arrangements properly.",
      "Year of Departure\nMaintain records of travel days.\n\nPreserve relocation documentation.\n\nReview Israeli tax filing obligations.",
      "After Relocation\nMonitor visits to Israel.\n\nMaintain consistency with residency claims.\n\nTrack compliance obligations in the destination country."
    ]
  },
  {
    "h": "10. Frequently Asked Questions",
    "p": [],
    "faqs": true
  },
  {
    "h": "11. Moving Abroad? Plan Before You Leave",
    "p": [
      "Decisions made before departure may affect taxation, exit tax exposure, National Insurance obligations, and double taxation risks for years to come.",
      "Early planning can significantly reduce risk and help establish a defensible tax position.",
      "Nimrodi & Co. – Certified Public Accountants\nAddress: 16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel\nPhone: +972-9-958-2211\nEmail: office@nimrodi.co.il\nWebsite: https://nimrodi.co.il/en",
      "Relevant Services\nInternational Tax Advisory.\n\nRelocation Tax Planning.\n\nRSU and Equity Compensation Taxation.\n\nTax Planning for Entrepreneurs and Controlling Shareholders.\n\nNational Insurance Status Review.\n\nDigital Asset Taxation.\n\nRental Income Tax Advisory."
    ]
  }
],
    faqs: [
  {
    "q": "Does spending more than 183 days outside Israel automatically terminate Israeli tax residency?",
    "a": "No. Day counts are only one factor. The center-of-life test remains the primary consideration."
  },
  {
    "q": "Can I own property in Israel and still qualify as a foreign resident?",
    "a": "Yes. Ownership alone does not determine residency. The manner in which the property is used is often significant."
  },
  {
    "q": "Does the Israeli exit tax apply to stock options?",
    "a": "In many cases it may, but treatment depends on the nature of the rights, vesting terms, and individual circumstances."
  },
  {
    "q": "Should I continue paying National Insurance while abroad?",
    "a": "The answer depends on the expected duration of relocation, family circumstances, and long-term objectives."
  }
],
    disclaimer: "The information contained in this guide is provided for general informational purposes only and does not constitute tax advice, legal advice, a professional opinion, or an official position of the Israel Tax Authority, the National Insurance Institute, or any other authority. Determining tax residency, applying Section 100A, interpreting tax treaties, and complying with international reporting obligations require an individualized review of the relevant facts, documentation, and circumstances. Consultation with a qualified CPA specializing in international taxation is strongly recommended before taking any action based on this guide.",
  },
  {
    slug: "israeli-rental-income-tax-reporting",
    translationKey: "rental-income-israel",
    title: "Israeli Rental Income Tax: Choosing a Reporting Route",
    metaTitle: "Israeli Rental Income Tax",
    excerpt:
      "Israeli residential rental income may be taxed under different routes. The right analysis depends on the property, rent, expenses, ownership and the taxpayer’s full circumstances.",
    metaDescription:
      "Israeli rental income tax and reporting: compare routes, expenses, ownership, records and annual filing considerations for property owners. Contact our firm.",
    date: "2026-08-14",
    readMin: 3,
    category: "Israeli Tax",
    image: imgTax,
    imageAlt: "Israeli Rental Income Tax and Reporting: Choosing the Appropriate Route",
    tags: ["rental income", "Israeli tax", "property", "reporting"],
    relatedSlugs: [
      "multiple-rental-properties-business-classification-israel",
      "digital-assets-tax-reporting-israel",
      "israeli-tax-reporting-us-citizens",
    ],
    relatedService: { href: "/en/tax-consulting", label: "Israeli tax advisory" },
    sections: [
      {
        h: "Start with the facts, not the route",
        p: [
          "Israeli rental-income treatment depends on the type and use of the property, the parties, the rent received, ownership, financing, expenses and the taxpayer’s wider activity. A route should not be selected from the headline rate alone. The first step is to organize the lease, receipts, ownership records and annual expense information.",
        ],
      },
      {
        h: "The exemption framework",
        p: [
          "Residential rent may fall within an exemption framework when the statutory conditions are met. The available exemption can be affected by the total rent, the relevant period and the taxpayer’s circumstances. Because thresholds and rules may change, the current position should be checked for the relevant tax year rather than copied from an old example.",
        ],
      },
      {
        h: "The reduced-rate route",
        p: [
          "A reduced-rate route may be available for qualifying residential rental income. It can offer simpler treatment, but limitations on deductions and interactions with other facts must be considered. A lower headline rate is not automatically the lowest overall result.",
        ],
      },
      {
        h: "The regular tax route",
        p: [
          "Under the regular route, taxable rental income is generally examined together with allowable expenses and the taxpayer’s circumstances. Relevant records may include financing costs, repairs, professional fees, insurance, depreciation information and periods in which the property was not rented, subject to the applicable rules.",
        ],
      },
      {
        h: "Reporting and record keeping",
        p: [
          "Keep signed leases, proof of rent received, ownership documents, invoices, financing statements and details of shared ownership. If rent is received through platforms, agents or foreign accounts, retain the complete transaction trail. The reporting method should match the route selected and any wider filing obligation.",
        ],
      },
      {
        h: "Review the position annually",
        p: [
          "A route that suited one year may not suit the next after a rent change, purchase or sale, refinancing, a change in personal income or the addition of another property. Review the portfolio before filing and document the basis for the selected treatment.",
        ],
      },
      {
        h: "Residential use and the lease terms",
        p: [
          "The tax analysis should begin with the actual use of the property and the lease terms. A property described as residential may be used for business, short-term accommodation or another purpose. Review the identity of the tenant, the term, renewal rights, services supplied, deposits, reimbursements and any amounts paid by a third party. The agreement and the actual conduct should tell the same story.",
        ],
      },
      {
        h: "Shared ownership and family arrangements",
        p: [
          "Shared ownership can affect records, allocation of rent and expenses, and the way the selected route is applied. Keep evidence of ownership percentages, bank receipts, expense payments and arrangements between co-owners. Where a spouse, relative, trust or company is involved, do not assume that the person receiving the cash is automatically the only person relevant to the tax analysis.",
        ],
      },
      {
        h: "Foreign owners and cross-border reporting",
        p: [
          "A person who is not resident in Israel may still have Israeli reporting and payment obligations in relation to an Israeli property. The same income may also need to be reported in another jurisdiction. Maintain Israeli documents in a form that can be shared with the foreign adviser, including gross rent, expenses, taxes paid, ownership and exchange-rate information. Treaty and foreign-tax-credit treatment requires a separate country-specific review.",
        ],
      },
      {
        h: "Annual review checklist",
        p: [
          "Before choosing the route and preparing the filing, confirm the property use, total rent, ownership, months rented, deposits, expense records, financing, withholding, advance payments and any sale or refinancing during the year. Reconcile the schedule to bank receipts and signed leases. Document why the route was selected and retain the working papers with the annual return records.",
        ],
      },
    ],
  },
  {
    slug: "multiple-rental-properties-business-classification-israel",
    translationKey: "multiple-rental-properties",
    title: "Multiple Rental Properties: Business Classification in Israel",
    metaTitle: "Multiple Rental Properties in Israel",
    excerpt:
      "Owning several rental properties does not create an automatic classification. The analysis considers scale, organization, financing, frequency, expertise and the way the activity is managed.",
    metaDescription:
      "Multiple rental properties in Israel: review scale, management, financing, records and reporting factors affecting business classification. Contact our firm.",
    date: "2026-08-14",
    readMin: 3,
    category: "Israeli Tax",
    image: imgTax,
    imageAlt:
      "Multiple Rental Properties in Israel: When Can the Activity Be Treated as a Business?",
    tags: ["rental properties", "business classification", "Israeli tax", "reporting"],
    relatedSlugs: [
      "israeli-rental-income-tax-reporting",
      "digital-assets-tax-reporting-israel",
      "startup-accounting-tax-israel",
    ],
    relatedService: { href: "/en/tax-consulting", label: "Israeli tax advisory" },
    sections: [
      {
        h: "There is no single property-count test",
        p: [
          "The number of properties is relevant, but it is not the only fact. Classification depends on the overall character of the activity. A portfolio can become more business-like when it requires continuous organization, active management, financing, marketing, frequent decisions and dedicated operational resources.",
        ],
      },
      {
        h: "Factors commonly examined",
        p: [
          "The analysis may consider scale, transaction frequency, holding periods, financing, professional knowledge, improvement work, marketing, tenant turnover, use of employees or service providers, and the time devoted to management. No factor should be treated as decisive in isolation.",
        ],
      },
      {
        h: "Why classification matters",
        p: [
          "Business classification can affect the tax calculation, deductible expenses, advance payments, bookkeeping and wider reporting. It can also influence how the taxpayer should organize supporting records. The consequences should be reviewed before assuming that a residential-rent route applies to every property.",
        ],
      },
      {
        h: "Build a defensible factual file",
        p: [
          "Maintain a property schedule, leases, purchase and sale documents, financing records, management agreements, expense invoices, time records where relevant and a description of decision-making. The file should explain how the portfolio actually operates, not merely how the owner prefers to label it.",
        ],
      },
      {
        h: "Review changes in the portfolio",
        p: [
          "Classification should be reconsidered when properties are added, activity becomes more intensive, short-term rentals expand, employees or managers are engaged, or acquisitions and disposals become frequent. A documented annual review helps keep the reporting position aligned with the facts.",
        ],
      },
      {
        h: "Short-term rentals and additional services",
        p: [
          "Short-term activity can involve frequent guest turnover, marketing, cleaning, booking platforms, pricing decisions and additional services. These facts may make the activity operationally different from a long-term residential lease. The analysis should record the services provided, time devoted, systems used and the owner’s involvement rather than relying only on the number of units.",
        ],
      },
      {
        h: "Financing and development activity",
        p: [
          "Repeated acquisitions, substantial leverage, renovations aimed at resale or rapid tenant turnover can be relevant to the character of the activity. Keep finance agreements, renovation budgets, contractor invoices and the business rationale for purchases and disposals. A single fact does not determine classification, but a pattern of organized commercial activity may require closer review.",
        ],
      },
      {
        h: "Management companies and outsourced operations",
        p: [
          "Using a management company does not by itself resolve the classification. The owner may still make key decisions, set strategy, approve acquisitions and bear commercial risk. The engagement agreement, services actually provided, reporting received and time spent by the owner should be documented. Outsourcing can change how work is performed without changing the economic substance of the portfolio.",
        ],
      },
      {
        h: "Practical year-end review",
        p: [
          "At year-end, compare the portfolio with the preceding year. Record acquisitions, sales, changes in rental model, staffing, management arrangements, financing, occupancy and owner involvement. Reconcile property-level results to the accounting or tax schedule. Where the facts have changed materially, reconsider the reporting position before filing rather than automatically repeating the prior-year treatment.",
        ],
      },
    ],
  },
  {
    slug: "digital-assets-tax-reporting-israel",
    translationKey: "digital-assets-reporting-israel",
    title: "Digital Assets in Israel: Tax and Reporting Records",
    metaTitle: "Digital Asset Tax in Israel",
    excerpt:
      "Digital-asset reporting starts with a complete transaction history. Trades, conversions, payments, transfers, staking and other activity may require classification and supporting records.",
    metaDescription:
      "Digital assets tax reporting in Israel: organize wallet and exchange records, identify taxable events, calculate gains and prepare source-of-funds records.",
    date: "2026-08-14",
    readMin: 3,
    category: "Digital Assets",
    image: imgCrypto,
    imageAlt: "Digital Assets in Israel: Tax Events, Records and Reporting",
    tags: ["digital assets", "crypto", "tax reporting", "records"],
    relatedSlugs: [
      "israeli-rental-income-tax-reporting",
      "israeli-tax-reporting-us-citizens",
      "startup-accounting-tax-israel",
    ],
    relatedService: { href: "/en/tax-consulting", label: "Digital-asset tax and reporting" },
    sections: [
      {
        h: "A wallet balance is not a tax calculation",
        p: [
          "Tax reporting requires a chronological transaction history rather than a screenshot of current holdings. The records should connect exchanges, wallets, bank transfers and on-chain activity, and distinguish acquisitions, disposals, internal transfers, fees and income-like receipts.",
        ],
      },
      {
        h: "Identify the nature of each event",
        p: [
          "Sales for fiat currency, swaps between assets, purchases of goods or services, rewards, staking, mining, airdrops, lending and DeFi activity can raise different classification questions. The treatment depends on the facts, the taxpayer’s level of activity and the applicable law.",
        ],
      },
      {
        h: "Create a reconciled data set",
        p: [
          "Export full CSV or API histories from every available exchange and wallet. Preserve transaction hashes, timestamps, quantities, fees and fiat values. Remove duplicates carefully and document missing data or estimates rather than silently filling gaps.",
        ],
      },
      {
        h: "Calculate gains consistently",
        p: [
          "A calculation should apply a consistent method supported by the available records and the reporting position. Fees, asset identification, foreign-currency conversion and missing cost information require careful treatment. The final schedule should reconcile opening holdings, activity and closing holdings.",
        ],
      },
      {
        h: "Prepare source-of-funds documentation",
        p: [
          "Banks and other institutions may request evidence showing how funds were acquired and how they moved. A clear file can include exchange statements, wallet trails, tax reports and supporting agreements. Acceptance remains subject to each institution’s policies and decision.",
        ],
      },
      {
        h: "Correct earlier gaps where necessary",
        p: [
          "If earlier transactions were not reported or records are incomplete, organize the history before making new transfers. The appropriate reporting or correction process depends on the facts and should not be selected from a generic template.",
        ],
      },
      {
        h: "Internal transfers and wallet ownership",
        p: [
          "Transfers between wallets owned by the same taxpayer should be identified separately from disposals or payments. Maintain evidence connecting each address or account to the owner and preserve transaction hashes for both sides of the transfer. Unmatched transfers can create apparent sales, acquisitions or unexplained balances. A wallet inventory prepared before the calculation helps prevent duplication.",
        ],
      },
      {
        h: "Staking, rewards and DeFi records",
        p: [
          "Rewards, staking, lending, liquidity pools and other decentralized-finance activity can generate frequent transactions and classification questions. Preserve protocol statements, wallet histories, token quantities, timestamps and available market-value data. Separate the receipt of an asset from a later disposal. Do not collapse multiple steps into one net bank movement, because that can hide the underlying events needed for analysis.",
        ],
      },
      {
        h: "Business activity versus investment activity",
        p: [
          "The scale, frequency, financing, organization, expertise, systems and time devoted to digital-asset activity may be relevant when considering whether activity has a business character. Keep records of strategy, tools, borrowing, staffing and operational processes. Classification should follow the complete factual pattern and not a label chosen by the taxpayer or an exchange.",
        ],
      },
      {
        h: "A review file that can be audited",
        p: [
          "The final work file should allow another reviewer to move from reported totals back to source transactions. Include raw exports, transformed data, reconciliation reports, pricing sources, assumptions, exception lists and explanations for missing records. Retain a version of the calculation used for filing. A reproducible file is more useful than a single spreadsheet containing unexplained final figures.",
        ],
      },
    ],
  },
  {
    slug: "israeli-tax-reporting-us-citizens",
    translationKey: "us-citizens-israel-reporting",
    title: "Israeli Tax and Reporting for US Citizens Living in Israel",
    metaTitle: "US Citizens: Israeli Tax Reporting",
    excerpt:
      "US citizens living in Israel may face reporting in both countries. A coordinated process should map residence, income, companies, investments, accounts and available relief.",
    metaDescription:
      "Israeli tax reporting for US citizens: coordinate residence, foreign income, companies, investments, rental income and records with qualified US advisers.",
    date: "2026-08-14",
    readMin: 3,
    category: "International Tax",
    image: imgIntl,
    imageAlt: "Israeli Tax and Reporting for US Citizens Living in Israel",
    tags: ["US citizens", "international tax", "reporting", "Israel"],
    relatedSlugs: [
      "digital-assets-tax-reporting-israel",
      "israeli-rental-income-tax-reporting",
      "startup-accounting-tax-israel",
    ],
    relatedService: { href: "/en/cpa-international", label: "International tax and relocation" },
    sections: [
      {
        h: "Two systems must be coordinated",
        p: [
          "US citizenship can continue to create US filing obligations while Israeli residence or Israeli-source income can create Israeli obligations. The correct process starts with a common fact pattern so that the Israeli and US advisers are working from the same income, ownership and account information.",
        ],
      },
      {
        h: "Map residence and income sources",
        p: [
          "Prepare a timeline of Israeli residence, travel, employment, self-employment, company ownership, investments, pensions, rental income and other receipts. Determine where services were performed, when income arose and which entity or person received it.",
        ],
      },
      {
        h: "Companies and self-employment require early review",
        p: [
          "Ownership of an Israeli or foreign company, compensation from a closely held company, options, partnership interests or self-employment can create overlapping classification and reporting issues. Agreements and payroll treatment should be reviewed before year-end where possible.",
        ],
      },
      {
        h: "Foreign tax relief and timing",
        p: [
          "Relief from double taxation may depend on the type of income, source rules, treaty provisions, taxes actually paid and the timing of recognition. A tax paid in one country does not automatically produce an identical credit in the other.",
        ],
      },
      {
        h: "Accounts, assets and information reporting",
        p: [
          "Bank and investment accounts, digital assets, trusts, pensions and company interests can involve information reporting in addition to income tax. The Israeli engagement should be coordinated with qualified US professionals for US forms and filing positions.",
        ],
      },
      {
        h: "Use one annual information package",
        p: [
          "Maintain a consolidated package containing Israeli and US returns, wage and pension certificates, company records, investment reports, rental schedules, account statements and proof of taxes paid. Reconciliation between the two reporting systems reduces omissions and inconsistent figures.",
        ],
      },
      {
        h: "Residency does not replace citizenship-based filing",
        p: [
          "Living in Israel can change residence and source analysis, but it does not by itself end filing obligations connected with US citizenship. The Israeli analysis should remain focused on Israeli law and Israeli-source or resident reporting, while US filing positions should be handled by qualified US professionals. Both sides should exchange the same core data and clearly identify differences in treatment.",
        ],
      },
      {
        h: "Pensions, funds and investment products",
        p: [
          "Israeli pension funds, training funds, investment accounts and insurance products may be described differently under US rules. Maintain annual statements, contributions, withdrawals, ownership details and tax certificates. Do not assume that tax deferral or exemption in Israel produces the same result in the United States. Product-specific US analysis should be coordinated separately.",
        ],
      },
      {
        h: "Closely held companies and compensation",
        p: [
          "An owner-manager may receive salary, dividends, loans, expense reimbursements, options or other benefits from an Israeli or foreign company. Each category should be recorded consistently in payroll, company accounts and personal reporting. Intercompany arrangements and ownership disclosures should be reviewed before filing so that the advisers in both countries are not working from conflicting classifications.",
        ],
      },
      {
        h: "Cross-border annual close process",
        p: [
          "Set a common timetable for collecting Israeli tax certificates, payroll forms, company financial information, investment reports and foreign-account records. Reconcile gross income, taxes paid and currency conversion before the returns are finalized. Keep a list of unresolved differences and document how each was treated. A coordinated close reduces late corrections and inconsistent figures between jurisdictions.",
        ],
      },
    ],
  },
  {
    slug: "startup-accounting-tax-israel",
    translationKey: "startup-accounting-israel",
    title: "Accounting and Tax for Startups Operating in Israel",
    metaTitle: "Startup Accounting and Tax in Israel",
    excerpt:
      "Startup accounting should support statutory reporting, management decisions and fundraising. The system must connect bookkeeping, payroll, options, grants, intercompany activity and cash planning.",
    metaDescription:
      "Startup accounting and tax in Israel: organize bookkeeping, payroll, Section 102 records, intercompany documents, grants and investor-ready reporting.",
    date: "2026-08-14",
    readMin: 3,
    category: "Startups",
    image: imgStartups,
    imageAlt: "Accounting and Tax for Startups Operating in Israel",
    tags: ["startups", "accounting", "payroll", "Section 102"],
    relatedSlugs: [
      "israeli-subsidiary-vs-branch",
      "foreign-companies-operating-in-israel",
      "digital-assets-tax-reporting-israel",
    ],
    relatedService: { href: "/en/cpa-startups", label: "CPA services for startups" },
    sections: [
      {
        h: "Build the finance foundation early",
        p: [
          "A startup’s records should support tax and statutory reporting while also giving management a reliable view of cash, commitments and runway. The chart of accounts, document flow and monthly close should be designed around the company’s actual model rather than a generic template.",
        ],
      },
      {
        h: "Bookkeeping and monthly controls",
        p: [
          "Organize invoices, bank and card feeds, supplier documents, expenses, foreign-currency activity and supporting approvals. Reconcile cash and key balance-sheet accounts regularly. Management reports should be traceable to the accounting records.",
        ],
      },
      {
        h: "Payroll, founders and equity",
        p: [
          "Founder compensation, employees, contractors and equity plans require coordinated records. For Section 102 plans, maintain trustee documents, grants, vesting information and payroll coordination. Legal and tax advisers should align the plan documentation with the company’s implementation.",
        ],
      },
      {
        h: "Grants, R&D and cross-border activity",
        p: [
          "Government grants, R&D expenditure, overseas subsidiaries, foreign customers and related-party services can affect accounting and tax reporting. Track restricted funds, eligible costs and intercompany charges separately, with agreements that reflect the actual activity.",
        ],
      },
      {
        h: "Fundraising and due diligence readiness",
        p: [
          "Investors may request historical financial statements, management accounts, cap-table support, tax filings, payroll records, material agreements and reconciliations. Maintaining an orderly data room reduces last-minute reconstruction and allows issues to be addressed earlier.",
        ],
      },
      {
        h: "Connect compliance with decision-making",
        p: [
          "A useful finance process produces both compliant records and practical information for management. Budget versus actual, cash forecast, hiring commitments and revenue assumptions should use consistent source data and clearly documented assumptions.",
        ],
      },
      {
        h: "Revenue models and contract data",
        p: [
          "Startup revenue can involve subscriptions, usage fees, milestones, implementation services, marketplaces or licensing. Accounting records should connect invoices to signed agreements, delivery evidence, credits and collection terms. Management reporting should distinguish recurring, one-time and deferred elements when relevant. The objective is to produce consistent information, not to force every business model into one generic revenue label.",
        ],
      },
      {
        h: "Cash runway and commitments",
        p: [
          "A cash forecast should include payroll, suppliers, taxes, grant restrictions, debt, contractual commitments and expected collection dates. Document the assumptions and compare forecast to actual results each month. Separate committed costs from optional plans and identify payments denominated in foreign currency. This creates a clearer basis for hiring, fundraising and spending decisions.",
        ],
      },
      {
        h: "Intercompany and international operations",
        p: [
          "A startup with a foreign parent or subsidiary should maintain agreements describing services, intellectual property, financing and cost allocations. The actual functions and decision-making should match those documents. Track intercompany balances and invoices separately and reconcile them across entities. Transfer-pricing analysis and local reporting should be coordinated with advisers in the relevant jurisdictions.",
        ],
      },
      {
        h: "Data-room readiness checklist",
        p: [
          "Maintain current incorporation documents, cap-table support, board approvals, material customer and supplier agreements, payroll records, option-plan documents, grant files, tax returns, reconciliations and management reports. Assign an owner to each document family and remove obsolete duplicates. A structured data room does not replace due diligence, but it makes the company’s information easier to verify and explain.",
        ],
      },
    ],
  },
];

export const BLOG_POSTS_EN_BY_SLUG: Record<string, BlogPostEn> = Object.fromEntries(
  BLOG_POSTS_EN.map((p) => [p.slug, p]),
);
