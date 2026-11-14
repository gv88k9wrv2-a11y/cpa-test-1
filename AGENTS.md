<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Project rules

- GA4 uses the shared explicit analytics-consent gate and loads only after a grant; the first root head script establishes denied defaults, and footer preferences reuse the single banner so withdrawal and non-PII events share one permission source.

- Professional association logos and links use a shared bilingual affiliation component and membership schema constant, separate from CPA licensing credentials; third-party affiliation logos do not replace the firm's branding.

- Both language headers use viewport-fixed positioning with an equal-height flow spacer; mobile panels start below the header so navigation remains accessible without covering page content.

- Content leaf routes own localized OG/Twitter titles and descriptions; use the leaf description for all social descriptions and keep root metadata limited to sitewide defaults to prevent cross-language inheritance.
- ServiceLanding and ServiceLandingEn accept optional topic navigation above the service details; section IDs remain language-independent so menu fragments and quick navigation target the same subjects.
- CFO service Person schemas extend the centrally licensed founder using PERSON_ID and ORG_ID, preserving the same entity identity and credentials across pages.

- Expanded bilingual professional FAQs share a typed data module across service and central FAQ pages; render and serialize the same entries to prevent editorial and schema drift.
- Relocation service and article FAQs share bilingual relocation data; service CTA labels/messages are optional props so contextual updates preserve other services and the existing design.
- Destination-specific relocation paragraphs and FAQs share a bilingual data module across existing services and articles; service adapters retain stable destination anchors to prevent content drift without new country routes.

- Hebrew blog sections support escaped inline local Markdown links, bold emphasis and optional typed comparison tables; article-specific disclaimers override the shared disclaimer without duplicating it, preserving approved editorial structure safely.
- Bilingual blog sections can place post-level FAQs inline and paragraphs after comparison tables; the shared FAQ list keeps approved article order without duplicating FAQ content or schema.

- Voluntary-disclosure pages share a typed bilingual content module and presentation component; leaf routes supply language-specific metadata and schemas to keep approved content consistent.
- New voluntary-disclosure forms persist validated inquiries through a write-only server function with database-backed rate limiting before using the existing Web3Forms delivery; other form behavior remains unchanged.

- IndexNow key lives at public/b96942c3f69d63c3ffeb41ddd5525a25.txt; ping via `bun scripts/indexnow-ping.ts` after publish — keeps Bing/Yandex/AI indexes fresh without a public write endpoint.
- Service-page "Key Takeaways" text lives in src/data/page-summaries.ts keyed by pathname — one source for LLM-quotable summaries.
- Person/Organization JSON-LD share @ids from src/lib/meta.ts (ORG_ID, PERSON_ID) — articles reference the founder as author/reviewer by @id.
- Founder credentials and official registry URL are defined centrally in src/lib/meta.ts and reused by Person and article author/reviewer references and About-page registry links — keeps licensing facts consistent without asserting a license number or independent review.
- Official NAP is 16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel / גלגלי הפלדה 16, הרצליה פיתוח, 4672216, ישראל; phone +972 9-958-2211 (09-9582211) — keep all visible and structured references synchronized.
- Service pages opt into `sectionNavigation` to render a top TOC from section titles; anchors use the section id or a stable `topic-N` fallback so links always match headings.

- Legal leaf routes keep approved text literal in the existing legal-page layout, while footer-only legal link lists stay separate from mobile navigation to avoid unrelated menu changes.
