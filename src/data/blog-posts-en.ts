import imgCrypto from "../assets/blog-crypto.webp";
import imgEquity from "../assets/blog-equity.webp";

export type BlogSectionEn = { h: string; p: string[] };

export type BlogPostEn = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMin: number;
  category: string;
  image: string;
  sections: BlogSectionEn[];
};

export const BLOG_POSTS_EN: BlogPostEn[] = [
  {
    slug: "israeli-subsidiary-vs-branch",
    title: "Israeli Subsidiary or Branch: Key Considerations for Foreign Entities",
    excerpt:
      "Choosing between an Israeli subsidiary and a branch of a foreign company affects tax, legal liability, and operations. A professional review of the key considerations.",
    date: "2026-03-19",
    readMin: 9,
    category: "International Tax",
    image: imgEquity,
    sections: [
      {
        h: "Two principal options — and why the choice matters",
        p: [
          "When an international group seeks to operate in Israel at a meaningful scale, there are generally two options: incorporate a private Israeli company wholly owned by the foreign parent (a subsidiary), or register the foreign company as a foreign corporation and operate through a branch.",
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
          "Operations through an Israeli subsidiary may be subject to two levels of taxation: tax at the company level on taxable income and withholding tax when dividends are distributed to the parent company.
The applicable rates depend on Israeli law, the relevant tax treaty where applicable, the status of the recipient and the conditions governing the distribution.",
          "Requirements for equity capital, formal governance (board of directors, meetings), and audited annual financial statements.",
        ],
      },
      {
        h: "Branch of a foreign company",
        p: [
          "A branch is not a separate legal entity — it represents the foreign company's activity in Israel, registered as a foreign corporation with the Israeli Companies Registrar.",
          "Advantages: no withholding tax on the transfer of profits back to the head office (there is no legal 'dividend'), some operational simplicity, and, in certain cases, easier setup or wind-down of activity.",
          "Disadvantages: the foreign company may be directly exposed to liabilities associated with the Israeli branch, special reporting is required on the income attributed to the branch, and transfer pricing between the branch and head office is scrutinized closely by the Israel Tax Authority.",
        ],
      },
      {
        h: "Comparative tax efficiency — illustrative example",
        p: [
          "A meaningful tax comparison between an Israeli subsidiary and a branch requires more than applying the corporate tax rate.
The analysis may include the taxable income attributable to the Israeli activity, deductible expenses, intercompany payments, transfer pricing, withholding tax, the applicable tax treaty, foreign-tax-credit considerations and the treatment in the parent company’s jurisdiction.
The comparison should therefore be based on the planned structure and the relevant facts rather than on a general numerical example.",
          "The precise outcome depends on the relevant tax treaty, the parent's status in its home jurisdiction, and the availability of foreign tax credits in the country of residence. Accurate quantification requires a case-specific analysis, including the source country's tax rules.",
        ],
      },
      {
        h: "Additional considerations",
        p: [
          "Industry regulation — in certain sectors (banking, insurance, aviation), formal requirements apply to the type of legal entity permitted.",
          "Local reputation — an Israeli subsidiary with a local name can support local market perception.",
          "Employee incentive plans — granting options to Israeli employees is generally simpler and more efficient under an Israeli company (Section 102).",
          "Exit from the market — winding down a subsidiary can be more straightforward legally, though this depends on the circumstances.",
        ],
      },
      {
        h: "Conclusion",
        p: [
          "There is no single correct answer for every foreign company. The decision depends on a combination of tax considerations, legal risk, hiring plans, and long-term strategic objectives in Israel. In many cases, technology companies prefer a subsidiary, while a branch may be suitable for more limited activity.",
          "Nimrodi & Co. CPAs can assist with the Israeli accounting and tax analysis of possible operating structures and with the preparation of information for registrations and ongoing reporting. Entity formation and legal structuring should be reviewed and implemented with qualified legal advisers. Contact us to discuss the activity and the possible engagement scope.",
        ],
      },
    ],
  },
  {
    slug: "foreign-companies-operating-in-israel",
    title: "Foreign Companies Operating in Israel: When Does a Corporate Tax Liability Arise?",
    excerpt:
      "Permanent Establishment, dependent agents, and digital activity — a professional review of the conditions under which a foreign company becomes taxable in Israel, and the practical implications.",
    date: "2026-02-27",
    readMin: 9,
    category: "International Tax",
    image: imgEquity,
    sections: [
      {
        h: "The baseline principle — territorial taxation of a foreign company",
        p: [
          "A company that is not an Israeli tax resident is taxable in Israel only on income produced or accrued in Israel. The central question is when the activity of a foreign company is regarded as 'producing income in Israel', rather than merely 'selling to Israeli customers'.",
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
          "Israeli Tax Authority guidance addresses the Israeli income-tax and VAT considerations that may arise when a foreign company conducts digital activity involving Israeli customers or operations.
The analysis may include the functions performed in Israel, the involvement of local personnel or related entities, the manner in which services are offered to Israeli customers and the extent of the company’s business activity in Israel.
Whether the activity creates a permanent establishment, Israeli-source taxable income or VAT registration and reporting obligations depends on the facts, Israeli law and the relevant tax treaty where applicable.",
        ],
      },
      {
        h: "Practical implications where a PE exists",
        p: [
          "Obligation to register as a foreign corporation with the Companies Registrar and to file annual returns with the Israel Tax Authority on income attributed to the PE.",
          "Requirement to establish Transfer Pricing in transactions between the foreign company and the PE, at arm's length terms.",
          "Potential for double taxation if the company is also taxed in its country of residence — tax treaties then govern the availability of a foreign tax credit.",
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
          "Nimrodi & Co. CPAs advises foreign companies on entering the Israeli market, including setting up the corporate structure, transfer pricing advisory, and ongoing reporting to the Israel Tax Authority.",
        ],
      },
    ],
  },
  {
    slug: "relocation-tax-residency",
    title: "Relocation from Israel: When Can Israeli Tax Residency End?",
    excerpt:
      "Moving abroad does not automatically sever Israeli tax residency. A review of the residency tests, the implications of relocation, and the 'exit tax' issue.",
    date: "2026-03-05",
    readMin: 10,
    category: "International Tax",
    image: imgCrypto,
    sections: [
      {
        h: "Why residency classification is so important",
        p: [
          "Israel taxes its residents on a personal basis — an Israeli resident is taxable on worldwide income, whether earned in Israel or abroad. A non-resident is taxable in Israel only on income produced in Israel (territorial rules).",
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
          "Nimrodi & Co. CPAs advises Israelis before, during, and after relocation — including residency analysis, exit tax, tax treaties, and continued Israeli reporting. Contact us for an initial consultation.",
        ],
      },
    ],
  },
];

export const BLOG_POSTS_EN_BY_SLUG: Record<string, BlogPostEn> = Object.fromEntries(
  BLOG_POSTS_EN.map((p) => [p.slug, p]),
);
