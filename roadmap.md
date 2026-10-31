# Requested updates

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
