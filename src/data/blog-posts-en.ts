import imgCrypto from "../assets/blog-crypto.webp";
import imgEquity from "../assets/blog-equity.webp";
import imgTax from "../assets/blog-tax-planning.webp";
import imgIntl from "../assets/service-international.webp";
import imgStartups from "../assets/service-startups.webp";

export type BlogSectionEn = { h: string; p: string[] };

export type BlogPostEn = {
  slug: string;
  title: string;
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
  sections: BlogSectionEn[];
};

export const BLOG_POSTS_EN: BlogPostEn[] = [
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
    title: "Israeli Subsidiary or Branch: Key Considerations for Foreign Entities",
    excerpt:
      "Choosing between an Israeli subsidiary and a branch of a foreign company affects tax, legal liability, and operations. A professional review of the key considerations.",
    metaDescription:
      "Israeli subsidiary or branch of a foreign company: a professional review of the tax, liability, operational and reporting considerations. Contact the firm.",
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
    title: "Foreign Companies Operating in Israel: When Does a Corporate Tax Liability Arise?",
    excerpt:
      "Permanent Establishment, dependent agents, and digital activity — a professional review of the conditions under which a foreign company becomes taxable in Israel, and the practical implications.",
    metaDescription:
      "Foreign companies operating in Israel: permanent establishment, dependent agents, digital activity and local reporting duties, reviewed. Contact the firm today.",
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
    imageAlt: "Relocation from Israel: When Can Israeli Tax Residency End?",
    tags: ["relocation", "tax residency", "centre of life", "exit tax"],
    relatedSlugs: [
      "israeli-subsidiary-vs-branch",
      "foreign-companies-operating-in-israel",
      "israeli-tax-reporting-us-citizens",
    ],
    relatedService: { href: "/en/cpa-international", label: "International tax and relocation" },
    title: "Relocation from Israel: When Can Israeli Tax Residency End?",
    excerpt:
      "Moving abroad does not automatically sever Israeli tax residency. A review of the residency tests, the implications of relocation, and the 'exit tax' issue.",
    metaDescription:
      "Relocation and Israeli tax residency: centre-of-life tests, day counting, severing residency and exit-tax implications, reviewed. Contact the firm today.",
    date: "2026-03-05",
    readMin: 10,
    category: "International Tax",
    image: imgCrypto,
    sections: [
      {
        h: "Why residency classification is so important",
        p: [
          "Israeli tax residents are generally subject to Israeli tax and reporting rules on worldwide income, while non-residents may be subject to Israeli tax on Israeli-source income, subject to the applicable law and treaty.",
          "Accordingly, the residency question is central to tax planning around relocation. An Israeli employee who moved to Berlin and continues to be classified as an Israeli resident may be liable to Israeli tax on the German salary, subject to a foreign tax credit under an applicable treaty.",
        ],
      },
      {
        h: "The tests for individual residency",
        p: [
          "The Income Tax Ordinance defines an Israeli resident as a person whose 'center of life' is in Israel. Alongside the substantive test, quantitative presumptions apply: a presumption that a person who spent 183 days or more in Israel in the tax year is a resident, and an additional presumption based on a cumulative test of 30 days in the current year and 425 days over the three cumulative years.",
          "The quantitative presumptions may be rebutted by evidence that the center of life is elsewhere. Conversely, the Israel Tax Authority may argue that a person who does not meet the numerical presumptions is nonetheless an Israeli resident if the center of life is here.",
        ],
      },
      {
        h: "The 'center of life' test — a totality of circumstances",
        p: [
          "Center of life is evaluated based on a range of indicators: the individual's and their family's permanent home, primary place of economic activity, place of social activity, location of significant assets (home, vehicle), membership in provident and pension funds, place of voting, and registration with public bodies.",
          "Decisions may be finely balanced. A family that has moved abroad, rented out its Israeli home but retained a gym membership, active Israeli credit cards, and a continuing family connection — may still be classified as Israeli residents even after several years abroad.",
        ],
      },
      {
        h: "Exit Tax — Section 100A",
        p: [
          "An individual who ceases to be an Israeli resident is deemed, for tax purposes only, to have sold their assets on the day preceding cessation of residency. The notional gain (or loss) is subject to Israeli capital gains tax.",
          "In practice, payment of the tax may be deferred to the date of actual sale of the asset abroad. However, appropriate reporting must be filed, and documentation of asset values at the date of cessation of residency should be prepared to compute the accrued gain up to that date.",
          "The exit tax is particularly relevant to shareholders in private companies, publicly traded securities, vested options, and digital currencies — not solely to assets acquired before immigration to Israel.",
        ],
      },
      {
        h: "Tax treaties and bilateral arrangements",
        p: [
          "Israel has entered into dozens of tax treaties to prevent double taxation. Where an individual satisfies the definition of 'resident' in two countries simultaneously, treaties provide tie-breaker rules: first, a permanent home; then, the center of vital interests; then, habitual abode; and finally, citizenship.",
          "Application of a treaty requires case-specific review of the relevant treaty's wording. Not all treaties are drafted identically, and a certificate of residence from the other country may be required to obtain treaty benefits.",
        ],
      },
      {
        h: "Common mistakes in relocation planning",
        p: [
          "An incorrect assumption that changing a passport or receiving a particular visa automatically severs Israeli residency.",
          "Not filing an Israeli annual return in the years following relocation, on the assumption that no liability remains — while Israeli filing obligations may continue during and after the relocation period, depending on the individual’s circumstances, income and applicable reporting requirements.",
          "Ignoring the exit tax and the need to document Israeli and foreign asset values as of the relocation date.",
        ],
      },
      {
        h: "Conclusion",
        p: [
          "Relocation is a complex personal and financial move that requires advance tax preparation. Proper planning in the year preceding the move can help assess tax exposure, reduce double-taxation risk, and support orderly reporting to the tax authorities in Israel and the destination country.",
          "Nimrodi & Co. assists with Israeli relocation tax matters, including tax residency analysis, exit tax, tax treaties, and ongoing Israeli reporting. Contact our Israeli CPA firm for an introductory call about relocation tax, residency, treaty, and reporting needs.",
        ],
      },
    ],
  },
  {
    slug: "israeli-rental-income-tax-reporting",
    translationKey: "rental-income-israel",
    title: "Israeli Rental Income Tax and Reporting: Choosing the Appropriate Route",
    excerpt:
      "Israeli residential rental income may be taxed under different routes. The right analysis depends on the property, rent, expenses, ownership and the taxpayer’s full circumstances.",
    metaDescription:
      "Israeli rental income tax and reporting explained: compare the main routes, expenses, ownership issues, records and annual filing considerations for property owners.",
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
    title: "Multiple Rental Properties in Israel: When Can the Activity Be Treated as a Business?",
    excerpt:
      "Owning several rental properties does not create an automatic classification. The analysis considers scale, organization, financing, frequency, expertise and the way the activity is managed.",
    metaDescription:
      "Multiple rental properties in Israel: factors that may distinguish passive rental income from a business, including scale, management, financing, records and reporting.",
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
    title: "Digital Assets in Israel: Tax Events, Records and Reporting",
    excerpt:
      "Digital-asset reporting starts with a complete transaction history. Trades, conversions, payments, transfers, staking and other activity may require classification and supporting records.",
    metaDescription:
      "Digital assets tax and reporting in Israel: organize wallet and exchange records, identify taxable events, calculate gains and prepare a clear source-of-funds file.",
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
    excerpt:
      "US citizens living in Israel may face reporting in both countries. A coordinated process should map residence, income, companies, investments, accounts and available relief.",
    metaDescription:
      "Israeli tax reporting for US citizens in Israel: coordinate residence, foreign income, companies, investments, rental income and cross-border records with US advisers.",
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
    excerpt:
      "Startup accounting should support statutory reporting, management decisions and fundraising. The system must connect bookkeeping, payroll, options, grants, intercompany activity and cash planning.",
    metaDescription:
      "Startup accounting and tax in Israel: build reliable bookkeeping, payroll, Section 102 records, intercompany documentation, grant tracking and investor-ready reporting.",
    date: "2026-08-14",
    readMin: 3,
    category: "Startups",
    image: imgStartups,
    imageAlt: "Accounting and Tax for Startups Operating in Israel",
    tags: ["startups", "accounting", "payroll", "Section 102"],
    relatedSlugs: [
      "digital-assets-tax-reporting-israel",
      "israeli-tax-reporting-us-citizens",
      "israeli-rental-income-tax-reporting",
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
