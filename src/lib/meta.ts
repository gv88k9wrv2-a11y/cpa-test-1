const MIN_LENGTH = 150;
const MAX_LENGTH = 160;

/**
 * Shorten a description to the repository metadata rule (max 160 characters)
 * without cutting in the middle of a word.
 */
export function toMetaDescription(input: string, maxLength: number = MAX_LENGTH): string {
  const text = input.replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;

  const slice = text.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > MIN_LENGTH - 20 ? slice.slice(0, lastSpace) : slice;
  return cut.replace(/[\s,;:.\-–—]+$/u, "") + "…";
}

export type BreadcrumbItem = { name: string; url: string };

/** BreadcrumbList JSON-LD for a canonical page hierarchy. */
export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const SITE_ORIGIN = "https://nimrodi.co.il";
export const ORG_ID = `${SITE_ORIGIN}/#organization`;
export const PERSON_ID = `${SITE_ORIGIN}/#shlomo-nimrodi`;

/** Official public registry search; not an individual license-number assertion. */
export const CPA_REGISTRY_URL = "https://www.gov.il/he/departments/dynamiccollectors/cpa-search?skip=0&LastName=%D7%A0%D7%9E%D7%A8%D7%95%D7%93%D7%99&FirstName=%D7%A9%D7%9C%D7%9E%D7%94";
export const CPA_CREDENTIAL_JSONLD = {
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "Professional license",
  name: "Certified Public Accountant (Israel) – רואה חשבון מוסמך",
  description: "Israeli CPA license held since 1997; licensing authority: Auditors Council, Ministry of Justice.",
  dateCreated: "1997",
  url: CPA_REGISTRY_URL,
  recognizedBy: {
    "@type": "GovernmentOrganization",
    name: "Auditors Council of Israel – מועצת רואי חשבון",
    url: "https://www.gov.il/he/departments/units/auditors_council",
    parentOrganization: {
      "@type": "GovernmentOrganization",
      name: "Ministry of Justice, Israel – משרד המשפטים",
      url: "https://www.gov.il/he/departments/ministry_of_justice",
    },
  },
};

/** E-E-A-T Person schema for the founding partner (rendered once, sitewide). */
export const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Shlomo Nimrodi",
  alternateName: "שלמה נמרודי",
  honorificSuffix: "CPA",
  jobTitle: "Certified Public Accountant (CPA), Founding Partner",
  url: `${SITE_ORIGIN}/en/team`,
  worksFor: { "@id": ORG_ID },
  telephone: "+972 9-958-2211",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 Galgalei HaPlada St.",
    addressLocality: "Herzliya Pituach",
    postalCode: "4672216",
    addressCountry: "IL",
  },
  description: "Shlomo Nimrodi, CPA, holds an Israeli CPA license since 1997 and is the founding partner of Nimrodi & Co., active since 2000.",
  hasCredential: CPA_CREDENTIAL_JSONLD,
  knowsLanguage: ["he", "en"],
  knowsAbout: [
    "Financial statement audit",
    "Israeli taxation",
    "International taxation",
    "Startup accounting",
    "Foreign companies in Israel",
    "Payroll",
    "Bookkeeping",
  ],
};

/** Reference used as author / reviewedBy on articles. */
export const AUTHOR_PERSON_REF = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Shlomo Nimrodi, CPA",
  url: `${SITE_ORIGIN}/en/team`,
  hasCredential: CPA_CREDENTIAL_JSONLD,
  worksFor: { "@id": ORG_ID },
};
