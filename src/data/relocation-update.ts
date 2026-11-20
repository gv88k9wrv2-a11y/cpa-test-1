import { RELOCATION_FAQS } from "./relocation-residency";
import { DESTINATION_FAQS } from "./relocation-destinations";

export const RELOCATION_UPDATED_DATE = "2026-11-20";

export const RELOCATION_SUMMARIES = {
  he: "מעבר לחו״ל אינו מנתק אוטומטית תושבות מס בישראל.\nהתושבות נבחנת לפי מרכז החיים וחזקות ימי השהייה.\nפחות מ־183 ימים בישראל אינם מבטיחים כשלעצמם תושבות חוץ.\nטופס 1348 עשוי להיות רלוונטי בהתאם לחובת הדיווח ולנסיבות.\nחדילה מתושבות עשויה לעורר השלכות לפי סעיף 100א.\nאופציות, RSU וסעיף 102 מחייבים ניתוח נפרד לפי עובדות המקרה.\nתושבות במס הכנסה ותושבות בביטוח לאומי הן קביעות נפרדות.",
  en: "Relocation does not automatically terminate Israeli tax residency.\nResidency depends on the center-of-life test and applicable day-count presumptions.\nFewer than 183 days in Israel do not by themselves guarantee non-residency.\nForm 1348 may be relevant depending on reporting obligations and circumstances.\nCeasing residency may require review of Section 100A exit-tax implications.\nOptions, RSUs and Section 102 awards require separate case-specific analysis.\nIncome-tax residency and National Insurance residency are separate determinations.",
};

export const RELOCATION_REPORTING = {
  he: {
    h: "טופס 1348 והצהרת תושבות לצורכי מס",
    p: [
      "טופס 1348 עשוי להיות רלוונטי בהתאם לחובת הדיווח ולנסיבות. המידע העובדתי הנבחן עשוי לכלול ימי שהייה בישראל ובחו״ל, בית קבע, מקום מגורי המשפחה, עבודה ועסקים, חשבונות ונכסים, ביטוח רפואי, תשלומי ביטוח לאומי ומדינת התושבות הנטענת.",
      "הגשת טופס 1348 אינה קובעת כשלעצמה תושבות חוץ, והעמדה כפופה לבחינת רשות המסים. יש לבחון את מכלול העובדות, התיעוד והדין החל בשנת המס הרלוונטית.",
      "לבדיקת הנתונים והדיווח ניתן לפנות לקבלת [ייעוץ מס לרילוקיישן ובחינת תושבות](/cpa-international), בהתאם לנסיבות ולהיקף ההתקשרות.",
    ],
  },
  en: {
    h: "Form 1348 and Israeli Tax Residency Reporting",
    p: [
      "Form 1348 may be relevant depending on filing obligations and circumstances. Relevant factual disclosures may include days spent in Israel and abroad, permanent home, family residence, employment and business activity, accounts and assets, medical insurance, National Insurance contributions and the claimed country of residence.",
      "Filing Form 1348 does not itself establish non-residency. The position remains subject to review by the Israel Tax Authority and depends on the overall facts, supporting documentation and law applicable to the relevant tax year.",
      "For a review of the facts and reporting obligations, consider [Israeli relocation tax advisory and residency analysis](/en/cpa-international), according to the circumstances and agreed scope.",
    ],
  },
};

export const RELOCATION_EXIT_TAX = {
  he: {
    h: "מס יציאה לפי סעיף 100א לפקודת מס הכנסה",
    p: [
      "חדילה מתושבות ישראל עשויה לחייב בחינה של השלכות סעיף 100א לפקודת מס הכנסה ביחס לנכסים רלוונטיים, ובהם מניות, החזקות בחברות פרטיות, השקעות, נכסים דיגיטליים וזכויות הוניות.",
      "אין להסיק שכל רילוקיישן יוצר תשלום מס מיידי. היישום תלוי בסוג הנכס, במועדי הרכישה והמימוש, בנסיבות ובדין החל בשנת המס הרלוונטית. השלכות על אופציות ו־RSU נבחנות בנפרד, ככל שהן רלוונטיות.",
    ],
  },
  en: {
    h: "Exit Tax under Section 100A of the Israeli Income Tax Ordinance",
    p: [
      "Ceasing Israeli tax residency may require review of Section 100A of the Israeli Income Tax Ordinance for relevant assets, including shares, holdings in private companies, investments, digital assets and equity rights.",
      "Not every relocation creates an immediate tax payment. Application depends on the asset type, acquisition and realization dates, circumstances and law applicable to the relevant tax year. Stock-option and RSU implications are assessed separately where relevant.",
    ],
  },
};

export const RELOCATION_ADDITIONAL_FAQS = {
  he: [
    { q: "האם פחות מ־183 ימים בישראל מבטיחים ניתוק תושבות?", a: "לא. פחות מ־183 ימים בישראל אינם מבטיחים כשלעצמם תושבות חוץ. מספר הימים הוא נתון חשוב, אך יש לבחון אותו לצד מבחן מרכז החיים, החזקות החלות ומכלול העובדות והקשרים בשנת המס הרלוונטית." },
    { q: "מהו מס יציאה לפי סעיף 100א?", a: RELOCATION_EXIT_TAX.he.p.join("\n\n") },
    { q: "האם הגשת טופס 1348 קובעת תושבות חוץ?", a: "לא. הגשת טופס 1348 אינה קובעת כשלעצמה תושבות חוץ. הטופס עשוי להיות רלוונטי בהתאם לחובת הדיווח ולנסיבות; העמדה כפופה לבחינת רשות המסים לפי העובדות, התיעוד והדין החל." },
  ],
  en: [
    { q: "Do fewer than 183 days in Israel guarantee non-residency?", a: "No. Fewer than 183 days in Israel do not by themselves guarantee non-residency. The day count must be considered alongside the center-of-life test, applicable presumptions and the overall facts and connections in the relevant tax year." },
    { q: "What is exit tax under Section 100A?", a: RELOCATION_EXIT_TAX.en.p.join("\n\n") },
    { q: "Does filing Form 1348 establish non-residency?", a: "No. Filing Form 1348 does not itself establish non-residency. The form may be relevant depending on filing obligations and circumstances; the position remains subject to Israel Tax Authority review under the relevant facts, documentation and applicable law." },
  ],
};

export function relocationArticleFaqs(lang: "he" | "en") {
  const existing = RELOCATION_FAQS[lang];
  const added = RELOCATION_ADDITIONAL_FAQS[lang];
  return [added[0], existing[0], existing[1], added[1], added[2], existing[2], existing[3], ...DESTINATION_FAQS[lang]];
}