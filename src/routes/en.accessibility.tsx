import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";
import { FirmContactBlock } from "../components/firm-contact-block";

const BASE = "https://www.nimrodi.co.il";
const UPDATED_EN = "August 2026";
const DESCRIPTION =
  "Accessibility statement of Nimrodi & Co. CPA: website accessibility principles, physical access details for the Herzliya Pituach office and how to request help.";

export const Route = createFileRoute("/en/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Nimrodi & Co. CPA" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Accessibility Statement — Nimrodi & Co. CPA" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${BASE}/en/accessibility` },
      { property: "og:image", content: `${BASE}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: `${BASE}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/en/accessibility` },
      { rel: "alternate", hrefLang: "he-IL", href: `${BASE}/accessibility` },
      { rel: "alternate", hrefLang: "en-US", href: `${BASE}/en/accessibility` },
    ],
  }),
  component: AccessibilityEn,
});

function AccessibilityEn() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeaderEn />

      <main id="main-content">
        <section className="border-b border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
              Accessibility Statement
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: {UPDATED_EN}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 leading-relaxed text-muted-foreground sm:px-6">
            <p>
              Nimrodi &amp; Co. Certified Public Accountants is committed to providing equitable and
              accessible service and continues to improve the accessibility of its website and
              services.
            </p>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">Website accessibility</h2>
              <p>
                The website was built with commonly accepted accessibility principles in mind,
                including semantic structure, keyboard navigation, alternative text for images,
                color contrast and support for assistive technologies. We continue to review and
                improve the website. This statement does not claim that a complete manual audit was
                performed or that the website fully conforms to a particular standard unless such
                testing was actually completed and documented.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">
                Physical access and arrival information
              </h2>
              <p>
                The office is located at 16 Galgalei HaPlada Street, Herzliya Pituach. Parking in
                the area is available on public streets or in nearby public parking facilities,
                subject to availability and the applicable conditions. These parking spaces are not
                private spaces belonging to the firm or the building, and availability is not
                controlled or guaranteed by the firm. There is no approved continuous accessible
                route from the street, parking area or building entrance to the office, and the
                building does not have approved accessible restrooms. If an accessibility
                accommodation is required to receive service, please contact us in advance so that
                we can consider coordination or an accessible alternative based on the need and
                available options.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-bold text-primary">Accessibility contact</h2>
              <div className="space-y-3 rounded-lg border border-border/60 bg-secondary/30 p-6">
                <p>
                  <strong>Telephone:</strong>{" "}
                  <a href="tel:099582211" className="text-primary hover:text-gold hover:underline">
                    09-9582211
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/972546688681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-gold hover:underline"
                  >
                    054-6688681
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:office@nimrodi.co.il"
                    className="text-primary hover:text-gold hover:underline"
                  >
                    office@nimrodi.co.il
                  </a>
                </p>
              </div>
              <p>
                Please state the preferred contact method and the accommodation required. Each
                request will be reviewed according to the circumstances and available options.
              </p>
            </div>

            <p className="pt-4 text-sm text-muted-foreground/80">
              This statement was last updated in {UPDATED_EN}.
            </p>
          </div>
        </section>
        <FirmContactBlock lang="en" />
      </main>

      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </div>
  );
}
