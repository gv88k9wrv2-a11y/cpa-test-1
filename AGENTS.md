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

- Expanded bilingual professional FAQs share a typed data module across service and central FAQ pages; render and serialize the same entries to prevent editorial and schema drift.

- Hebrew blog sections support escaped inline local Markdown links, bold emphasis and optional typed comparison tables; article-specific disclaimers override the shared disclaimer without duplicating it, preserving approved editorial structure safely.
- Bilingual blog sections can place post-level FAQs inline and paragraphs after comparison tables; the shared FAQ list keeps approved article order without duplicating FAQ content or schema.

- Voluntary-disclosure pages share a typed bilingual content module and presentation component; leaf routes supply language-specific metadata and schemas to keep approved content consistent.
- New voluntary-disclosure forms persist validated inquiries through a write-only server function with database-backed rate limiting before using the existing Web3Forms delivery; other form behavior remains unchanged.

- IndexNow key lives at public/b96942c3f69d63c3ffeb41ddd5525a25.txt; ping via `bun scripts/indexnow-ping.ts` after publish — keeps Bing/Yandex/AI indexes fresh without a public write endpoint.
- Service-page "Key Takeaways" text lives in src/data/page-summaries.ts keyed by pathname — one source for LLM-quotable summaries.
- Person/Organization JSON-LD share @ids from src/lib/meta.ts (ORG_ID, PERSON_ID) — articles reference the founder as author/reviewer by @id.
- Founder credentials and official registry URL are defined centrally in src/lib/meta.ts and reused by Person and article author/reviewer references and About-page registry links — keeps licensing facts consistent without asserting a license number or independent review.
- Official NAP is 16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel / גלגלי הפלדה 16, הרצליה פיתוח, 4672216, ישראל; phone +972 9-958-2211 (09-9582211) — keep all visible and structured references synchronized.
