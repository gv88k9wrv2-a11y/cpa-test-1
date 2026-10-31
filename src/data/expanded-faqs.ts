export type ExpandedFAQ = { q: string; a: string };

/** Approved bilingual answers shared by visible FAQs and FAQPage schemas. */
export const EXPANDED_FAQS: Record<"international" | "startups" | "herzliya", Record<"he" | "en", ExpandedFAQ[]>> = {
  "international": {
    "he": [
      {
        "q": "מתי ישראלי שיוצא לרילוקיישן נחשב כמי שניתק תושבות לצרכי מס?",
        "a": "ניתוק תושבות מס בישראל מוכרע לפי מבחן \"מרכז החיים\" (המהותי) ולפי \"חזקת הימים\" (הטכנית) הקבועה בסעיף 1 לפקודת מס הכנסה. כדי לסתור את חזקת התושבות, נדרש להראות העתקה ממשית של מרכז החיים המשפחתי, הכלכלי והאישי לחו״ל (מגורים קבועים, העברת התא המשפחתי, סיום שכירות או מכירת נכסים, פתיחת חשבונות בנק מקומיים וניתוק זיקות בישראל). בנוסף, מקובל כי נדרשת תקופה רצופה של לפחות 3–4 שנים מחוץ לישראל כדי לבסס ניתוק מוחלט, לצד מילוי שאלון לקביעת תושבות מול רשויות המס והביטוח הלאומי במועד המתאים."
      },
      {
        "q": "מהו מס יציאה (סעיף 100א) ועל מי הוא חל בעת רילוקיישן?",
        "a": "מס יציאה לפי סעיף 100א לפקודת מס הכנסה רואה באדם שחדל להיות תושב ישראל כאילו מכר את נכסיו ביום שלפני ניתוק התושבות. המס חל בעיקר על נכסי הון, מניות, ניירות ערך, אופציות ותגמולי הייטק (102/RSU). הדין מאפשר לדחות את תשלום המס עד למועד המימוש בפועל בחו״ל (אקזיט או מכירה); בעת המימוש, המס מחושב בדרך כלל באופן ליניארי לפי יחס תקופת ההחזקה בישראל לעומת סך תקופת ההחזקה, בהתאם לנסיבות ולהוראות הדין החלות."
      },
      {
        "q": "אילו הטבות מס מגיעות לתושב חוזר ותיק או לעולה חדש בישראל?",
        "a": "תושב חוזר ותיק (מי ששהה בחו״ל לפחות 10 שנים רצופות) ועולה חדש זכאים לפטור ממס בישראל ומחובת דיווח למשך 10 שנים על כלל הכנסותיהם הפסיביות והאקטיביות שמקורן מחוץ לישראל (כגון שכר עבודה בחו״ל, דיבידנדים, ריבית, דמי שכירות ורווחי הון ממכירת נכסים שנרכשו בחו״ל). מנגד, תושב חוזר \"רגיל\" (ששהה בחו״ל מעל שנתיים או שש שנים) זכאי לחבילת פטורים מצומצמת יותר, בעיקר על הכנסות פסיביות מנכסים שנרכשו בתקופת שהותו מחוץ לישראל."
      },
      {
        "q": "האם תשלום מס במדינת היעד (כגון ארה״ב או בריטניה) פוטר אוטומטית ממס בישראל?",
        "a": "לא באופן אוטומטי. אם רשות המסים בישראל עדיין רואה באדם תושב ישראל, חלה עליו חובת דיווח עולמית. עם זאת, מכוח אמנות למניעת כפל מס שעליהן חתומה ישראל (כולל האמנה מול ארה״ב ובריטניה), נקבעים \"מבחני שובר שוויון\" (Tie-Breaker Rules) לקביעת תושבות יחידה, וניתן לקבל זיכוי ממס זר כנגד המס הישראלי כדי למנוע תשלום כפול, בכפוף לדיווח שנתי מסודר בישראל."
      },
      {
        "q": "כיצד יש לפעול מול המוסד לביטוח לאומי בעת יציאה לרילוקיישן?",
        "a": "ביטוח לאומי בוחן תושבות בנפרד ממס הכנסה. ישראלי היוצא לחו״ל נדרש להסדיר את מעמדו באמצעות שאלון לקביעת תושבות במוסד לביטוח לאומי. כל עוד התושבות לא בוטלה, קיימת חובת תשלום דמי ביטוח מינימליים מדי חודש; לאחר שנתיים של שהות בחו״ל ללא תשלום, או עם אישור ניתוק תושבות יזום, מתבטלות הזכויות הרפואיות במסגרת חוק ביטוח בריאות ממלכתי, ונחסכות חשיפות לתשלומים רטרואקטיביים וקנסות."
      },
      {
        "q": "מה ההבדל המיסויי והמשפטי בין פתיחת סניף זר (Branch) לבין הקמת חברה-בת ישראלית (Subsidiary)?",
        "a": "הקמת חברה-בת ישראלית (Subsidiary) יוצרת ישות משפטית ישראלית נפרדת המגדרת את חבות המשפטית והמיסויית של חברת האם, וחייבת במס חברות ישראלי (23%) על הכנסותיה בישראל. לעומת זאת, רישום סניף זר (חברה זרה רשומה ברשם החברות) אינו מפריד את הישות המשפטית של חברת האם, ועלול לחשוף אותה לדרישות דיווח וביקורת בישראל ולחשיפות משפטיות ישירות. מבחינת מיסוי, חברה-בת נהנית בדרך כלל מוודאות רגולטורית גבוהה יותר, גישה למשטר הטבות מס לחברות הייטק (כגון מפעל טכנולוגי מועדף), ויכולת ברורה יותר להסדיר מחירי העברה (Cost+, סעיף 85א)."
      },
      {
        "q": "מתי פעילות של חברה בינלאומית מקימה \"מוסד קבע\" (Permanent Establishment) בישראל?",
        "a": "מוסד קבע (PE) עשוי להיווצר כאשר לחברה זרה יש מקום עסקים קבוע בישראל (כגון משרד, מעבדה או מרכז פיתוח), או כאשר פועל מטעמה נציג תלוי בעל סמכות להתקשר בחוזים בשמה בישראל. בנוסף, רשות המסים בישראל מיישמת עקרונות לפיהם נוכחות עובדים, ניהול ושליטה מישראל, או פעילות כלכלית דיגיטלית משמעותית עשויים להיחשב כמוסד קבע. הקמת מוסד קבע מחייבת את החברה הזרה ברישום ברשויות המס בישראל, ניהול ספרים לפי הדין הישראלי, וייחוס רווחים לפעילות בישראל לצורך תשלום מס חברות."
      }
    ],
    "en": [
      {
        "q": "When is an Israeli relocating abroad considered to have officially severed Israeli tax residency?",
        "a": "Severing Israeli tax residency is determined by the substantive \"Center of Vital Interests\" test alongside the statutory \"Day-Count Presumption\" under Section 1 of the Israeli Income Tax Ordinance. Rebutting residency requires demonstrating a genuine relocation of family, economic, and personal life abroad (permanent home, relocation of family unit, terminating Israeli leases or disposing of assets, opening local bank accounts, and cutting ties in Israel). Additionally, establishing a continuous period of at least 3–4 years abroad is generally standard practice to solidify non-resident status, alongside filing the appropriate residency determination questionnaire with the Israel Tax Authority and National Insurance Institute."
      },
      {
        "q": "What is the Israeli Exit Tax (Section 100A) and who is subject to it upon relocation?",
        "a": "Under Section 100A of the Israeli Income Tax Ordinance, an individual ceasing to be an Israeli tax resident is deemed to have sold their capital assets on the day prior to departure. The exit tax primarily impacts capital assets, company shares, securities, options, and tech equity compensation (Section 102/RSUs). The law permits deferring tax payment until actual realization abroad; upon realization, the capital gain is typically taxed linearly based on the proportion of the Israeli holding period relative to the total holding period, subject to statutory provisions and factual circumstances."
      },
      {
        "q": "What tax exemptions and benefits apply to Returning Residents and New Immigrants (Olim)?",
        "a": "Veteran Returning Residents (individuals who resided outside Israel for at least 10 consecutive years) and New Immigrants (Olim Chadashim) are eligible for a 10-year holiday exempting them from Israeli tax and reporting requirements on all foreign-sourced active and passive income (including overseas employment, dividends, interest, rental income, and capital gains from assets purchased abroad). Ordinary Returning Residents (residing abroad for over 2 or 6 years) qualify for a narrower set of exemptions, primarily on passive income from assets acquired during their period abroad."
      },
      {
        "q": "Does paying tax in the destination country (e.g., US or UK) automatically eliminate Israeli tax obligations?",
        "a": "Not automatically. If the Israel Tax Authority continues to view an individual as an Israeli tax resident, worldwide reporting and tax obligations still apply. However, bilateral double taxation treaties entered into by Israel (including treaties with the US and UK) establish \"Tie-Breaker Rules\" to assign a single residency state, and provide foreign tax credits against Israeli tax liability to prevent double taxation, subject to timely annual Israeli tax filings."
      },
      {
        "q": "How should individuals relocating abroad handle the National Insurance Institute (Bituach Leumi)?",
        "a": "The National Insurance Institute assesses residency independently of the Israel Tax Authority. Individuals relocating abroad must regularize their status by submitting a residency determination questionnaire. Unless residency cancellation is formally established, minimal monthly health and social insurance payments remain mandatory. After 2 continuous years abroad without payments, or upon approved severance of residency, coverage under the National Health Insurance Law is suspended, eliminating retroactive liability risks and penalties."
      },
      {
        "q": "What is the tax and corporate difference between opening an Israeli branch vs. an Israeli subsidiary?",
        "a": "Incorporating a local Israeli subsidiary creates a distinct legal entity that ring-fences the foreign parent company from liability, subjecting only the subsidiary to Israeli corporate tax (23%) on its Israeli-sourced income. In contrast, registering a foreign branch (registering an overseas corporation with the Israeli Registrar of Companies) maintains direct legal and fiscal ties to the parent, potentially exposing the parent company to Israeli reporting, audit requirements, and legal claims. From a tax perspective, a local subsidiary generally provides greater regulatory certainty, eligibility for Israeli tech tax incentives (such as Preferred Technological Enterprise status), and a cleaner framework for transfer pricing agreements (such as Cost-Plus models under Section 85A)."
      },
      {
        "q": "What triggers a Permanent Establishment (PE) in Israel for an international company?",
        "a": "A Permanent Establishment (PE) can be triggered under Israeli domestic tax law and applicable bilateral tax treaties when a foreign company maintains a fixed place of business in Israel (such as an office, laboratory, or R&D center), or utilizes a dependent agent who habitually concludes contracts in its name within Israel. Furthermore, the Israel Tax Authority closely scrutinizes operations where effective management, key personnel presence, or substantial digital economic activity occur locally. Establishing a PE mandates Israeli tax registration, local statutory bookkeeping, and the attribution of profits to Israeli activities subject to Israeli corporate taxation."
      }
    ]
  },
  "startups": {
    "he": [
      {
        "q": "מהם התנאים העיקריים להכרה כ״מפעל טכנולוגי מועדף״ (PTE) ואיזה מס חברות משלמים?",
        "a": "חברה בעלת מפעל טכנולוגי מועדף לפי החוק לעידוד השקעות הון עשויה ליהנות ממס חברות מופחת של 12% (או 7.5% באזור פיתוח א׳), ומס מופחת על חלוקת דיבידנד (לרוב 20% או 4% לתושבי חוץ בתנאים מסוימים). התנאים המרכזיים כוללים: הכנסות קבוצתיות הנמוכות מ־10 מיליארד ₪; מחקר ופיתוח בהיקף של לפחות 7% מהמחזור או 20 מיליון ₪ לפחות, לצד עמידה באחד מתנאי החדשנות (גידול בעובדים, השקעת קרן הון סיכון, רישום פטנט וכו'); עמידה במבחן מפעל תחרותי (יצוא של לפחות 25% מהכנסות המפעל לשווקים זרים); וחישוב הרווח הטכנולוגי הזכאי בהתאם לנוסחת ה-Nexus של ה-OECD."
      },
      {
        "q": "מה ההבדל בין הקצאת אופציות במסלול הוני לעומת מסלול פירותי לפי סעיף 102?",
        "a": "במסלול הוני (סעיף 102(ב)(2)), עובד נהנה משיעור מס מופחת של 25% מס רווחי הון (ללא תשלום ביטוח לאומי ומס בריאות) על עליית הערך של המניות, וזאת בתנאי שהאופציות מופקדות בידי נאמן למשך תקופת חסימה מינימלית של 24 חודשים ממועד ההקצאה. מנגד, במסלול פירותי (הכנסת עבודה), הרווח ממוסה לפי מדרגות מס הכנסה רגילות (עד 47% בתוספת מס יסף וביטוח לאומי), אך החברה עשויה להכיר בהוצאה לצורכי מס. רוב הסטארטאפים בישראל בוחרים במסלול ההוני באמצעות נאמן."
      },
      {
        "q": "מתי סטארטאפ ישראלי צריך לבצע מבנה מסוג \"Delaware Flip\"?",
        "a": "היפוך שרוול לדלאוור (Delaware Flip) מתבצע כאשר משקיעים זרים (בעיקר מקרנות הון סיכון מובילות בארה״ב) או תוכניות האצה (כגון Y Combinator) דורשים שחברת האם המחזיקה בקניין הרוחני (IP) ובמניות תהיה תאגיד אמריקאי (C-Corp בדלאוור). מהלך כזה דורש תכנון מס קפדני בישראל כדי למנוע אירוע מס מיידי למייסדים ולבעלי המניות (לרוב באמצעות פנייה לרשות המסים לקבלת החלטת מיסוי / Pre-Ruling לפי סעיף 104א לפקודה) וקביעת הסכמי מחירי העברה (Transfer Pricing) ושירותי מו״פ (Cost Plus) בין החברה האמריקאית לחברה הבת הישראלית."
      },
      {
        "q": "מתי משתלם כלכלית לעבור ממעמד עוסק מורשה לחברה בע״מ בשנת 2026?",
        "a": "המעבר מעוסק מורשה לחברה בע״מ הופך לכדאי בעיקר כאשר הרווח השנתי הנקי עולה על כ־300,000–350,000 ₪, וכאשר היזם אינו זקוק לכל הרווח לצריכה פרטית שוטפת. במבנה של חברה, הרווח שנותר בחברה ממוסה במס חברות (23% או 12%/7.5% במסלול PTE) לעומת מס שולי של עד 50% (כולל מס יסף וביטוח לאומי) בעוסק מורשה, מה שמאפשר השקעה חוזרת של הרווחים במיסוי מופחת, לצד הגנה על אחריות אישית של היזם (מסך התאגדות)."
      }
    ],
    "en": [
      {
        "q": "What are the key eligibility requirements and tax rates for a Preferred Technological Enterprise (PTE)?",
        "a": "Companies qualifying as a Preferred Technological Enterprise (PTE) under the Law for the Encouragement of Capital Investments enjoy a reduced corporate income tax rate of 12% (or 7.5% in Development Zone A), alongside reduced withholding tax on dividends (typically 20%, or 4% for eligible foreign corporate shareholders). Key conditions include: consolidated group revenues under NIS 10 billion; R&D expenditures representing at least 7% of revenues or NIS 20 million, combined with satisfying recognized innovation criteria (e.g., headcount growth, VC funding, patent registration); meeting the competitive enterprise threshold (at least 25% of sales to export markets); and calculating qualifying technological income according to the OECD Nexus approach."
      },
      {
        "q": "What is the difference between the Capital Gains Track and Ordinary Income Track under Section 102?",
        "a": "Under the Capital Gains Track (Section 102(b)(2)), employees benefit from a flat 25% capital gains tax rate on share appreciation (exempt from National Insurance and health taxes), provided options are held by a certified trustee for a mandatory 24-month vesting period from grant date. Under the Ordinary Income Track, gains are taxed at progressive personal income tax rates (up to 47% plus surtax and National Insurance), while granting the company a tax-deductible expense. The vast majority of Israeli technology startups implement the trustee capital gains track."
      },
      {
        "q": "When does an Israeli startup require a Delaware Flip corporate restructuring?",
        "a": "A Delaware Flip is typically executed when Tier-1 US venture capital funds or global accelerator programs (such as Y Combinator) require the parent company holding shares and IP to be incorporated as a Delaware C-Corp. This restructuring demands meticulous Israeli tax planning to avoid immediate tax liability for Israeli founders and shareholders—frequently via a tax ruling (Pre-Ruling) under Section 104A of the Israeli Tax Ordinance—coupled with intercompany Transfer Pricing agreements (such as Cost-Plus R&D services) between the US parent and Israeli subsidiary."
      },
      {
        "q": "When does transitioning from an authorized dealer (Osek Murshe) to an incorporated company (Ltd) become financially advantageous in 2026?",
        "a": "Incorporating as a private limited company (Ltd) generally becomes economically viable when annual net profits exceed NIS 300,000–350,000, and where the founder does not require all business earnings for immediate personal living expenses. Within a corporate structure, undistributed retained earnings are taxed at standard corporate tax rates (23%, or 12%/7.5% under the PTE regime) rather than marginal individual tax rates reaching up to 50% (inclusive of social security and high-income surtax), allowing reinvestment of capital while establishing legal limited liability protection."
      }
    ]
  },
  "herzliya": {
    "he": [
      {
        "q": "איזה ליווי רואה חשבון נדרש לחברות הייטק ומרכזי פיתוח באזור התעשייה הרצליה פיתוח?",
        "a": "חברות הייטק, סטארט-אפים ומרכזי מו\"פ בינלאומיים הפועלים בהרצליה פיתוח זקוקים למעטפת חשבונאית ומיסויית רב-שכבתית הכוללת: ניהול חשבונאי ושירותי CFO בהתאמה לתקני דיווח מקומיים ובינלאומיים (Israeli GAAP / US GAAP / IFRS); מחירי העברה (Transfer Pricing) ותמחור הסכמי שירותים בין-חברתיים ומודל Cost Plus בהתאם לסעיף 85א ולדוחות OECD BEPS; תמריצי מס וקניין רוחני (IP), כולל בחינת זכאות למעמד מפעל טכנולוגי מועדף (7.5%–12%), מענקי רשות החדשנות ותוכניות אופציות לעובדים (סעיף 102); ונוכחות משרדי רואי חשבון מקומיים בלב מתחם ההייטק של הרצליה פיתוח (רחוב גלגלי הפלדה 16) המאפשרת תקשורת רציפה והבנה עמוקה של האקוסיסטם."
      }
    ],
    "en": [
      {
        "q": "What CPA and accounting advisory services do tech companies and R&D centers in Herzliya Pituach require?",
        "a": "Tech companies, high-growth startups, and multinational R&D hubs operating in the Herzliya Pituach tech corridor require comprehensive accounting and tax infrastructure, including: statutory reporting and CFO advisory under Israeli GAAP, US GAAP, or IFRS; transfer pricing compliance (Cost-Plus intercompany R&D agreements under Section 85A and OECD BEPS guidelines); tax incentives and IP structuring under the Preferred Technological Enterprise (PTE) regime (7.5%–12%), IIA grants, and Section 102 share option plans; and strategic local presence directly in Herzliya Pituach (Galgalei HaPlada 16) ensuring proximity to the tech ecosystem and seamless cross-border coordination."
      }
    ]
  }
};
