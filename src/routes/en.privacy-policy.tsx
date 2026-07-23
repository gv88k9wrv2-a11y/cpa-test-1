import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsAppEn, SiteFooterEn, SiteHeaderEn } from "../components/site-chrome-en";

export const Route = createFileRoute("/en/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Terms of Use | Nimrodi & Co. CPA" },
      {
        name: "description",
        content:
          "Privacy policy and terms of use for Nimrodi & Co. CPA. Full professional confidentiality, compliance with Amendment 13 to the Israeli Privacy Law, and data security.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy & Terms of Use | Nimrodi & Co. CPA" },
      {
        property: "og:description",
        content: "Full confidentiality for prospective clients and inquiries, aligned with Amendment 13.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://cpa-test-1.lovable.app/en/privacy-policy" },
      { rel: "alternate", hrefLang: "he-IL", href: "https://cpa-test-1.lovable.app/privacy-policy" },
      { rel: "alternate", hrefLang: "en-US", href: "https://cpa-test-1.lovable.app/en/privacy-policy" },
    ],
  }),
  component: PrivacyPageEn,
});

function PrivacyPageEn() {
  return (
    <>
      <SiteHeaderEn />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <header className="border-b border-border/60 pb-6">
          <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
            Privacy Policy &amp; Terms of Use
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: July 2026</p>
        </header>

        <article className="mt-10 space-y-10 text-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              1. Commitment to Confidentiality &amp; Scope
            </h2>
            <p className="mt-3">
              Nimrodi &amp; Co. CPA ("the Firm") is bound by strict professional secrecy under the
              Israeli CPA ethics code and the Protection of Privacy Law, 5741-1981 (including
              Amendment No. 13). All client and prospect information is treated with full
              discretion.
            </p>
            <p className="mt-3">
              This policy governs interactions with the Firm's website. Formal professional services
              provided to clients are governed by separate, direct engagement letters, and not
              through this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              2. Document, Form &amp; Financial Data Submission
            </h2>
            <p className="mt-3">
              This site is a promotional and informational website only. It{" "}
              <strong>does not accept, process, or store</strong> financial statements, tax forms,
              payroll data, or any confidential personal or financial documents.
            </p>
            <p className="mt-3">
              Clients are asked to submit documents and data exclusively through the Firm's
              authorized secure channels (e.g., secure intake questionnaires, Dropbox File Request,
              encrypted email, or in-person delivery at the office).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              3. Data Collection &amp; Purpose (Amendment 13 Notice)
            </h2>
            <p className="mt-3">
              Through the website's contact forms we collect only the details you voluntarily choose
              to provide: full name, company name, business email, direct phone number, and message
              content. <strong>You are under no legal obligation</strong> to provide this
              information.
            </p>
            <p className="mt-3">
              This data is used solely to respond to your inquiry and coordinate a consultation. It
              is not processed for unrelated purposes and is never sold, rented, or transferred to
              any third party.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              4. Data Security, Infrastructure Providers &amp; Cookies
            </h2>
            <p className="mt-3">
              The site operates over an encrypted, secure connection (HTTPS). The site may collect
              standard technical information (e.g., IP address, browser type, and functional /
              analytics cookies) for security and to improve the browsing experience.
            </p>
            <p className="mt-3">
              Technical processing may involve trusted cloud computing and hosting infrastructure
              providers bound by strict security and confidentiality obligations. The site is
              intended for a general business and professional audience and does not knowingly
              collect information from minors.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              5. Data Retention, User Rights &amp; Contact
            </h2>
            <p className="mt-3">
              Data is retained only for the period required to handle your inquiry or as required by
              applicable record-keeping obligations under law. You have the right to inspect,
              correct, or request deletion of personal information the Firm holds about you through
              the site.
            </p>
            <p className="mt-3">
              To exercise these rights, please contact:{" "}
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline">
                office@nimrodi.co.il
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-primary">
              6. Professional Disclaimer &amp; No Reliance
            </h2>
            <p className="mt-3">
              All content, articles, and information presented on the site are provided for general
              informational purposes only. The information{" "}
              <strong>does not constitute accounting, tax, legal, or financial advice</strong> and
              is not a substitute for a formal professional opinion or individualized advice
              tailored to each client's specific circumstances.
            </p>
            <p className="mt-3">
              The Firm shall not be liable for any consequences arising from reliance on the
              information published on the site without first obtaining individualized professional
              advice.
            </p>
          </section>

          <section className="rounded-2xl border border-gold/40 bg-gold/5 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">7. Office Contact</h2>
            <address className="mt-3 not-italic leading-8">
              <strong>Nimrodi &amp; Co. CPA</strong>
              <br />
              Address: 16 Galgalei ha-Plada St, Herzliya Pituach
              <br />
              Phone:{" "}
              <a href="tel:+97299582211" className="text-gold underline">
                +972-9-9582211
              </a>
              <br />
              Email:{" "}
              <a href="mailto:office@nimrodi.co.il" className="text-gold underline">
                office@nimrodi.co.il
              </a>
            </address>
          </section>
        </article>
      </main>
      <SiteFooterEn />
      <FloatingWhatsAppEn />
    </>
  );
}
