import { Link } from "@tanstack/react-router";
import { DESTINATION_CONTENT } from "../data/relocation-destinations";

/** Existing ServiceLanding section shape, retaining bilingual stable anchors. */
export function destinationServiceSections(lang: "he" | "en") {
  const content = DESTINATION_CONTENT[lang];
  const linkClass = "font-semibold text-primary underline decoration-gold/60 underline-offset-4 hover:decoration-gold";
  return [
    { id: "relocation-destinations", title: content.heading, body: content.intro },
    ...content.sections.map((section, index) => ({
      id: ["relocation-us", "relocation-cyprus-greece", "relocation-uk-europe"][index],
      title: section.h,
      body: (
        <>
          {section.p.map((paragraph) => <p key={paragraph} className="mt-4 first:mt-0">{paragraph}</p>)}
          {index === 0 && lang === "he" && (
            <p className="mt-4"><Link to="/blog/$slug" params={{ slug: "us-israel-tax-considerations" }} className={linkClass}>אמנת המס ישראל–ארה״ב וחובות דיווח</Link></p>
          )}
          {index === 2 && (
            <>
              <p className="mt-4">{content.disclaimer}</p>
              <p className="mt-4">
                {lang === "he" ? (
                  <><Link to="/blog/$slug" params={{ slug: "relocation-tax-residency-israel" }} className={linkClass}>המדריך לניתוק תושבות מס ורילוקיישן</Link>{" · "}<Link to="/tax-consulting" className={linkClass}>ייעוץ מס ליחידים ולעסקים</Link></>
                ) : (
                  <><Link to="/en/blog/$slug" params={{ slug: "relocation-tax-residency" }} className={linkClass}>Israeli tax residency and relocation guide</Link>{" · "}<Link to="/en/tax-consulting" className={linkClass}>Tax consulting for individuals and businesses</Link></>
                )}
              </p>
            </>
          )}
        </>
      ),
    })),
  ];
}