import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";
import { FirmContactBlock } from "../components/firm-contact-block";

export const Route = createFileRoute("/en/privacy-policy")({
  head: () => ({
    meta: [
      {"title": "Privacy Policy | Nimrodi & Co. CPA"},
      {"name": "description", "content": "Privacy Policy for Nimrodi & Co. Certified Public Accountants: data collection, service providers, analytics, security and privacy rights. Read the full policy."},
      {"property": "og:title", "content": "Privacy Policy | Nimrodi & Co. CPA"},
      {"property": "og:description", "content": "Privacy Policy for Nimrodi & Co. Certified Public Accountants: data collection, service providers, analytics, security and privacy rights. Read the full policy."},
      {"property": "og:type", "content": "website"},
      {"property": "og:locale", "content": "en_US"},
      {"property": "og:url", "content": "https://nimrodi.co.il/en/privacy-policy"},
      {"name": "twitter:title", "content": "Privacy Policy | Nimrodi & Co. CPA"},
      {"name": "twitter:description", "content": "Privacy Policy for Nimrodi & Co. Certified Public Accountants: data collection, service providers, analytics, security and privacy rights. Read the full policy."},
      {"name": "twitter:card", "content": "summary_large_image"},
      {"name": "robots", "content": "index, follow"},
    ],
    links: [
      {"rel": "canonical", "href": "https://nimrodi.co.il/en/privacy-policy"},
      {"rel": "alternate", "hrefLang": "he-IL", "href": "https://nimrodi.co.il/privacy-policy"},
      {"rel": "alternate", "hrefLang": "en-US", "href": "https://nimrodi.co.il/en/privacy-policy"},
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
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-foreground">Nimrodi &amp; Co. Certified Public Accountants</p>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: November 2026</p>
        </header>
        <article className="mt-10 space-y-10 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">1. Scope</h2>
            <p className="mt-3">Nimrodi &amp; Co. Certified Public Accountants (the "Office") respects the privacy of website visitors, individuals contacting the Office and users of its digital services.</p>
            <p className="mt-3">This Policy applies, as relevant, to the Office website, contact forms, CPAI, online questionnaires and Service Routes, campaign-originated enquiries and relevant digital communication channels referring to this Policy.</p>
            <p className="mt-3">Professional services are also governed by separate engagement agreements.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">2. Controller</h2>
            <p className="mt-3">The controller is:</p>
            <p className="mt-3">Nimrodi &amp; Co. Certified Public Accountants<br />16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel<br />Telephone: <bdi dir="ltr">09-958-2211</bdi><br />Email: office@nimrodi.co.il<br />Website: https://nimrodi.co.il</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">3. Voluntary Provision of Information</h2>
            <p className="mt-3">Providing information through the website or CPAI is voluntary unless expressly stated otherwise.</p>
            <p className="mt-3">Without information required for a particular enquiry, the Office may be unable to receive the enquiry, contact the individual or determine the appropriate service.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">4. Information We May Collect</h2>
            <p className="mt-3">Depending on the interaction and Service Route, the Office may collect:</p>
            <ul className="mt-3 list-disc space-y-1 ps-6">
              <li>name and contact details;</li>
              <li>company or business name, where provided;</li>
              <li>requested service;</li>
              <li>responses to structured Service Route questions;</li>
              <li>information reasonably necessary to receive, classify and route the enquiry;</li>
              <li>communication preferences and consents;</li>
              <li>campaign and referral information;</li>
              <li>technical and operational information needed for operation, security and misuse prevention.</li>
            </ul>
            <p className="mt-3">The categories of information may vary between Service Routes.</p>
            <p className="mt-3">The Office seeks to limit collection to information reasonably necessary for the relevant purposes.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">5. Purposes</h2>
            <p className="mt-3">Information may be used to receive, classify and manage enquiries; contact individuals; manage Leads; arrange calls or meetings; manage the handling of an enquiry; operate and secure the services; prevent misuse and spam; measure campaign sources; comply with applicable requirements; protect the Office's rights; and send updates or marketing information where an appropriate basis exists.</p>
            <p className="mt-3">A material new use of personal information will be assessed in accordance with applicable law, including any additional notice or consent requirements.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">6. CPAI and Service Routes</h2>
            <p className="mt-3">CPAI is used to receive enquiries, operate structured Service Route questionnaires, perform preliminary classification and route enquiries.</p>
            <p className="mt-3">Service Routes may change and expand over time.</p>
            <p className="mt-3">Unless expressly stated otherwise, questionnaires, classifications, results or information displayed through CPAI do not constitute professional, accounting, tax or legal advice, a binding determination regarding residency, tax liability or reporting obligations, or a guarantee of any outcome.</p>
            <p className="mt-3">Professional conclusions require individual review of the relevant facts and circumstances.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">7. Route-Specific Information</h2>
            <p className="mt-3">Where a Service Route materially changes the categories of information, processing purposes, providers, AI use, document handling or retention, the Office will assess whether an additional notice or Policy update is required.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">8. Client Documents</h2>
            <p className="mt-3">Active approved public CPAI Service Routes are not intended for the submission of Client professional documents.</p>
            <p className="mt-3">Do not submit identification documents, passports, bank-account information, passwords, tax returns, payroll documents, agreements, financial statements or other professional Client documents through these Routes.</p>
            <p className="mt-3">Where documents are required, the Office will provide instructions. Under the current policy, documents requested by the Office are sent directly to office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">9. Artificial Intelligence</h2>
            <p className="mt-3">The Office may use technology and artificial-intelligence tools for internal or controlled purposes, such as assisting with research, organizing information and preparing working drafts.</p>
            <p className="mt-3">At present, active public CPAI Service Routes are not intended to provide Clients with automatic professional opinions or professional responses generated through AI.</p>
            <p className="mt-3">Any material change in the processing of personal information through AI will be assessed under applicable law, and relevant notices and policies will be updated where required before such use is introduced.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">10. WhatsApp</h2>
            <p className="mt-3">WhatsApp may be used for general communication and coordination and is not a Client-document channel.</p>
            <p className="mt-3">Where documents are required, the Office will provide instructions. Under the current policy, documents requested by the Office are sent directly to office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">11. Service Providers</h2>
            <p className="mt-3">The Office may use external providers for hosting, databases, security, communications, analytics, campaigns and other technology services.</p>
            <p className="mt-3">Access will be limited, where reasonably possible, to the information and systems required for the relevant service, and provider arrangements will be reviewed and managed in accordance with applicable requirements.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">12. International Transfers</h2>
            <p className="mt-3">Certain providers may process or store information outside Israel.</p>
            <p className="mt-3">Where personal information is transferred outside Israel, the Office will act in accordance with applicable legal requirements governing such transfers.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">13. Cookies, Analytics and Campaign Attribution</h2>
            <p className="mt-3">The website and digital services may use cookies and similar technologies for operation, security, preferences, usage measurement and campaign attribution.</p>
            <p className="mt-3">The Office website uses Google Analytics to understand website usage and performance. Non-essential technologies will be operated according to applicable consent choices where required.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">14. Information Security</h2>
            <p className="mt-3">The Office uses organizational and technological measures intended to reduce information-security risks and limit access according to need.</p>
            <p className="mt-3">No internet-connected system can be guaranteed to be completely secure.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">15. Retention</h2>
            <p className="mt-3">Information will be retained for a period reasonably necessary for the purposes for which it was collected, handling the enquiry, managing the relationship, complying with applicable requirements, protecting rights and securing the services.</p>
            <p className="mt-3">The Office will periodically assess whether information remains necessary and seek to minimize information that is no longer required, subject to applicable law and Office policies.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">16. Rights</h2>
            <p className="mt-3">Subject to applicable law and its conditions, individuals may contact the Office regarding access to and correction of personal information.</p>
            <p className="mt-3">Individuals may also submit a deletion request. Such requests will be considered subject to applicable law, retention purposes and obligations applicable to the Office.</p>
            <p className="mt-3">This Policy does not guarantee deletion in every circumstance.</p>
            <p className="mt-3">Privacy enquiries: office@nimrodi.co.il.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">17. Marketing Communications</h2>
            <p className="mt-3">Where required, consent for marketing communications will be requested separately.</p>
            <p className="mt-3">Declining marketing communications does not prevent submission or handling of a professional enquiry.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">18. Minors</h2>
            <p className="mt-3">The website and CPAI are not intended to knowingly collect personal information from minors.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">19. Changes</h2>
            <p className="mt-3">This Policy may be updated following changes in law, services, systems, providers or processing activities.</p>
            <p className="mt-3">The latest update date will appear at the top of the page.</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">20. Contact</h2>
            <p className="mt-3">Nimrodi &amp; Co. Certified Public Accountants<br />16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel<br />Telephone: <bdi dir="ltr">09-958-2211</bdi><br />Email: office@nimrodi.co.il<br />Website: https://nimrodi.co.il</p>
          </section>
        </article>
        <FirmContactBlock lang="en" />
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </>
  );
}
