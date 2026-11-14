import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";
import { FirmContactBlock } from "../components/firm-contact-block";

export const Route = createFileRoute("/en/terms")({
  head: () => ({
    meta: [
      {"title": "Terms of Use | Nimrodi & Co. CPA"},
      {"name": "description", "content": "Terms of Use for Nimrodi & Co. Certified Public Accountants: website enquiries, service routes, privacy, documents and professional engagement. Read the terms."},
      {"property": "og:title", "content": "Terms of Use | Nimrodi & Co. CPA"},
      {"property": "og:description", "content": "Terms of Use for Nimrodi & Co. Certified Public Accountants: website enquiries, service routes, privacy, documents and professional engagement. Read the terms."},
      {"property": "og:type", "content": "website"},
      {"property": "og:locale", "content": "en_US"},
      {"property": "og:url", "content": "https://nimrodi.co.il/en/terms"},
      {"name": "twitter:title", "content": "Terms of Use | Nimrodi & Co. CPA"},
      {"name": "twitter:description", "content": "Terms of Use for Nimrodi & Co. Certified Public Accountants: website enquiries, service routes, privacy, documents and professional engagement. Read the terms."},
      {"name": "twitter:card", "content": "summary_large_image"},
      {"name": "robots", "content": "index, follow"},
    ],
    links: [
      {"rel": "canonical", "href": "https://nimrodi.co.il/en/terms"},
      {"rel": "alternate", "hrefLang": "he-IL", "href": "https://nimrodi.co.il/terms"},
      {"rel": "alternate", "hrefLang": "en-US", "href": "https://nimrodi.co.il/en/terms"},
    ],
  }),
  component: LegalPageEn,
});

function LegalPageEn() {
  return (
    <>
      <SiteHeaderEn />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:px-6" dir="ltr">
        <header className="border-b border-border/60 pb-6">
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">Terms of Use</h1>
          <p className="mt-3 text-foreground">Nimrodi &amp; Co. Certified Public Accountants</p>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: November 2026</p>
        </header>
        <article className="mt-10 space-y-10 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">1. Scope</h2>
            <p className="mt-3">Use of the Office website, CPAI, contact forms and online Service Routes is subject to these Terms and the Privacy Policy.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">2. Purpose</h2>
            <p className="mt-3">The website and digital services are intended to provide general information, receive enquiries, operate Service Route questionnaires, support preliminary classification and routing, and facilitate contact with the Office.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">3. General Information Only</h2>
            <p className="mt-3">Unless expressly provided as part of a professional engagement, content, questionnaires, results or classifications do not constitute accounting, tax, legal, financial or other professional advice or any guarantee of an outcome.</p>
            <p className="mt-3">General information should not be relied upon for a professional decision without an individual assessment appropriate to the circumstances.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">4. CPAI and Service Routes</h2>
            <p className="mt-3">CPAI enables individuals to provide preliminary information through structured Service Routes for enquiry intake, classification and routing.</p>
            <p className="mt-3">Service Routes may change and expand over time.</p>
            <p className="mt-3">Results and classifications shown through CPAI do not by themselves constitute a binding professional position of the Office.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">5. No Professional Engagement by Use</h2>
            <p className="mt-3">Browsing the website, completing a questionnaire, submitting an enquiry, receiving a confirmation or participating in an initial conversation does not by itself establish a professional engagement.</p>
            <p className="mt-3">A professional engagement begins only after the Office accepts the Client and the scope and terms of the engagement are agreed.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">6. Accuracy of Information</h2>
            <p className="mt-3">Users should provide information that is accurate, complete and current to the best of their knowledge.</p>
            <p className="mt-3">The Office may request further information or clarification when considering an enquiry.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">7. Documents and Sensitive Information</h2>
            <p className="mt-3">Client professional documents and unnecessary sensitive information must not be submitted through CPAI.</p>
            <p className="mt-3">Where documents are required, the Office will provide appropriate instructions. Under the current policy, requested documents are sent to office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">8. AI and Automated Tools</h2>
            <p className="mt-3">The Office may use AI and automated tools for internal or controlled purposes.</p>
            <p className="mt-3">Active public CPAI Service Routes are not currently intended to provide Clients with automatic professional opinions or professional responses generated through AI.</p>
            <p className="mt-3">Technology-generated output does not replace professional review where professional review is required.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">9. Prohibited Use</h2>
            <p className="mt-3">Users must not use the website or CPAI unlawfully, interfere with the services, attempt unauthorized access, submit malicious code or perform unauthorized automated submissions.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">10. Availability and Changes</h2>
            <p className="mt-3">The Office may update, modify, suspend or discontinue digital functionality for maintenance, security, legal compliance or service improvement.</p>
            <p className="mt-3">Continuous and error-free availability is not guaranteed.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">11. Intellectual Property</h2>
            <p className="mt-3">Rights in original content, questionnaire structures, text, design and branding belong to the Office or the relevant rights holder.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">12. External Services</h2>
            <p className="mt-3">External services and links may also be subject to the terms and policies of their respective operators.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">13. Privacy</h2>
            <p className="mt-3">Personal information is handled in accordance with the Privacy Policy.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">14. Liability</h2>
            <p className="mt-3">The Office does not guarantee that general content will be complete, current or suitable for every user's circumstances.</p>
            <p className="mt-3">General content should not be relied upon for a professional decision without advice appropriate to the circumstances.</p>
            <p className="mt-3">Nothing in these Terms limits liability that cannot lawfully be limited or liability arising under a professional engagement agreement.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">15. Languages</h2>
            <p className="mt-3">The Terms and Privacy Policy may be available in Hebrew and English.</p>
            <p className="mt-3">If there is any inconsistency between the versions, the Hebrew version will prevail, subject to applicable law.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">16. Governing Law</h2>
            <p className="mt-3">Israeli law applies to use of the website and CPAI.</p>
            <p className="mt-3">Disputes will be heard by the competent court in accordance with applicable law.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">17. Changes</h2>
            <p className="mt-3">These Terms may be updated from time to time. The latest update date will appear at the top of the page.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">18. Contact</h2>
            <p className="mt-3">Nimrodi &amp; Co. Certified Public Accountants<br />16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel<br />Telephone: <bdi dir="ltr">09-958-2211</bdi><br />Email: office@nimrodi.co.il</p>
          </section>
        </article>
        <FirmContactBlock lang="en" />
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </>
  );
}
