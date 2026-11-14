# Requested updates

- [x] Final legal + cookie UI completion (Nov 14): phone display format unified to 09-958-2211 in lead-form, firm-contact-block, service-landing, voluntary-disclosure, accessibility, contact and both llms files (tel: targets and SEO metadata unchanged); EN accessibility firm-name spacing verified correct. Six legal routes return 200 with correct RTL/LTR; all footer legal links and cookie-preferences reopen verified both languages; mobile banner 180–200px at 375/390/430px with no overflow, no _ga cookies after refusal. 36 tests pass, build OK; nothing published.

- [x] Mobile cookie presentation polish only: compact initial banner, removed panel focus outline and redundant initial settings row; footer reopening, toggle/save and all tracking logic preserved. Requested telephone display formatting updated only. HE/EN at 375/390/430px verified without overflow/clipping, initial height 180–200px, equal 40px touch targets; desktop at 1280px verified. Preferences reopen/save/reload and analytics off after refusal verified; tracking files and consent handlers unchanged. All 36 existing tests pass, harness build OK; no separate manual TypeScript run under harness workflow. Nothing published.

- [x] Destination-specific relocation update: approved HE/EN US, Cyprus/Greece and UK/Europe sections on international services and existing relocation guides; two shared visible/schema FAQs added per page, contextual existing-page links and consolidated llms entries. Four pages return 200; all visible FAQs match schema, canonical/hreflang verified, seven related destinations resolve, desktop/mobile verified without overflow or runtime errors; 33 tests pass and harness build OK. No same-language English treaty article or separate severance article exists, so no placeholder links added. No publication; standalone TypeScript check not manually run under harness workflow.

- [x] Approved relocation/residency update: exact bilingual international-page metadata, four shared visible/schema FAQs, contextual CTA/WhatsApp, corrected existing article/legal wording and descriptive links, consolidated AI references. Four routes return 200, canonical/hreflang and exact answer/schema parity verified, 26 internal destinations resolve, desktop/mobile screenshots show no horizontal overflow or runtime errors; 24 tests pass and build/typecheck OK. No separate tax-residency-severance article exists, so its future link is deferred; not published.

- [x] Add the supplied ICPAS affiliation logo to bilingual home trust strips, footers and About pages; Person/CFO and AccountingService memberOf point to the official site. Verified four pages on desktop/mobile, image loading, schemas and no overflow; 20 tests pass, build OK; not published.

- [x] Module 1: corrected bilingual menu destinations; all 22 menu anchor destinations verified and startup/CFO/nonprofit links clicked in both languages.
- [x] Module 2: added bilingual quick topic navigation above tax details; all seven links per language clicked successfully; mobile layout verified.
- [x] Module 3: added exact approved bilingual CFO leadership paragraphs and five points; Person schema retains shared founder/organization IDs and licensing credential; desktop/mobile verified.
- [x] Module 4: completed English audit nonprofit, due-diligence and internal-control sections, with distinct anchors and professional scope limitations.
- [x] Module 5: verified page-specific OG/Twitter metadata, 150–160 character descriptions and non-www canonicals on 44 content pages and social/canonical parity on 25 articles; removed page-specific root inheritance; IndexNow canonical normalization tested with mocked fetch, no external submission.
- [x] Module 6: added all 12 requested BreadcrumbList schemas; JSON-LD parsed on content pages, 9 regression tests passed, latest build OK, no browser runtime errors; not published.

- [x] Embed the expanded bilingual international/startup/Herzliya FAQs in eight requested pages with matching FAQPage schemas; all 24 supplied answers verified through visible accordions and JSON-LD, eight pages return 200, existing four regression tests pass, build OK; not published.

- [x] Improvement batch 2026-10-28: fix /גילוי-מרצון-מס-הכנסה redirect to /voluntary-disclosure in both public/_redirects and src/routes/$.tsx; add 301s /ביקורת-וחשבונאות/ → /audit, /ייעוץ-עסקי-וליווי-עסקי/ → /services, /contact-us-צור-קשר/ → /contact, /contact.html → /contact, /רואה-חשבון-בהרצליה → /cpa-herzliya. Verified live (301 after router trailing-slash 307 normalization), build OK; not published.
- [x] Improvement batch 2026-10-28: add the bilingual relocation / tax-residency anchor guide to llms.txt (HE bullet in professional content, EN bullet in English pages) and llms-full.txt (full Professional-content subsection with 2026-10-27 publication note + anchor-guide links under the International tax & relocation deep-dive); verified served files.
- [x] Improvement batch 2026-10-28: lead-form microcopy — HE "מלאו את הפרטים כדי לשלוח פנייה ישירה למשרד", EN "Complete the details to send a direct inquiry to the office"; verified in SSR output both languages.

- [x] Embed the full approved Hebrew and English relocation articles supplied 2026-10-27 07:14 UTC: all 11 sections in order, section 4 tables, section 10 FAQs, exact disclaimers and numerical example. Verified 200 responses, all sections, four FAQs per language, Article/FAQPage/Breadcrumb schemas, date, canonical/hreflang, actual language switching, paired sitemap and desktop/mobile rendering without runtime errors. No publication performed.

- [x] Catch-all route: 301 malformed URLs containing http:/https: (plain and percent-encoded) to the canonical root; robots noindex,nofollow on every not-found render (root head detects the "/$" match, plus both article not-found branches); all REDIRECTS kept. Verified live: 301 to /, 404 pages noindex,nofollow, normal pages index,follow, build OK; not published.

- [x] Embed approved English article `/en/blog/preferred-technological-enterprise` with Article/FAQ/Breadcrumb/Person schemas (inLanguage en-US), comparison table, 4 FAQs, article-specific disclaimer, service-startups.webp image, canonical, blog index and sitemap entry; verified live (200, 5 table rows, 4 FAQs, schemas, internal links), build OK; not published.
- [x] Embed approved Hebrew counterpart `/blog/preferred-technological-enterprise` with shared translationKey linking both articles (hreflang he-IL/en-US/x-default both directions), paired sitemap entry, table, FAQs, disclaimer; verified live (200, schemas, index card), build OK; not published.

- [x] Add six bilingual contextual service links and replace two unrelated startup article recommendations with foreign-company guides; all eight destinations clicked successfully, desktop/mobile rendering verified without runtime errors, build OK; not published.

- [x] Add the two approved Hebrew articles dated 2026-10-15, full draft sections, FAQs, images and contextual outgoing/incoming links.
- [x] Add both article URLs and summaries to the sitemap and AI reference files; desktop/mobile, FAQs, incoming links, metadata and public references verified without runtime errors; build OK, not published.

- [x] Stage 3: enrich founder licensing schema and verify visible credentials and author/reviewer references; official registry remains a public search link, not a fresh status verification.
- [x] Stage 3: refresh AI reference files and verify direct-answer summaries for the approved service areas; no new articles.
- [x] Stage 3: verify rendered metadata, reference files and build status; preview checks passed without runtime errors, build OK.

- [x] Move Hebrew About portrait below the title, update caption and badge; verify mobile and desktop.
- [x] Prevent Hebrew header wrapping, match intermediate-width subtitle visibility, widen container.
- [x] Add approved bilingual voluntary disclosure pages, legal wording, process, FAQ, contact form and schemas.
- [x] Add bilingual navigation/footer links and sitemap entries; verify page and stored contact flows.
- [ ] Verify owner email delivery: existing Web3Forms service failed in the sandbox; Cloud email sending is not configured. Stored inquiries are available in Cloud → Database → voluntary_disclosure_inquiries.

- [x] Official header icon in Hebrew and English.
- [x] Remove duplicate homepage hero call button; retain contact and mobile actions.
- [x] Use Call Now in English mobile actions.
- [x] Official CPA registry link in both About pages and footers.
- [x] Verify IndexNow key locally and on both live domains; submit all 63 sitemap URLs (HTTP 202, accepted for processing).
- [x] Verify both home and About pages at desktop/mobile widths, logo rendering, registry links, no horizontal overflow, and no runtime errors; build OK.

- [x] Legal completion: four exact approved texts uploaded November 14 implemented in existing Privacy and new Terms leaf routes (20 Privacy / 18 Terms sections per language); footer-only links updated without changing header/mobile navigation. Accessibility substantive text and dates preserved, explicit page/phone directions added; English firm name was already correctly spaced. Six routes return 200, exact displayed text, RTL/LTR, legal links, client-side Terms navigation, preferences reopening, no GA cookies/tag after refusal and desktop/mobile no overflow verified. Shared schemas, forms, GA4/consent and header configuration unchanged; 36 existing tests pass, harness build OK. No standalone manual TypeScript run under harness workflow; nothing published.
- [x] Add global opt-in GA4 consent, bilingual banner/footer preferences, local persistence and withdrawal; preserve measurement ID and non-PII event parameters. HE desktop/EN mobile browser checks confirm no GA script/cookies before consent, cookies after grant, saved preferences after reload and cookie removal plus no tag reload after withdrawal; no runtime errors or horizontal overflow. Consent/affiliation regression tests pass and harness build OK. Legal/accessibility pages unchanged; no publication.
