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

- IndexNow key lives at public/b96942c3f69d63c3ffeb41ddd5525a25.txt; ping via `bun scripts/indexnow-ping.ts` after publish — keeps Bing/Yandex/AI indexes fresh without a public write endpoint.
- Service-page "Key Takeaways" text lives in src/data/page-summaries.ts keyed by pathname — one source for LLM-quotable summaries.
- Person/Organization JSON-LD share @ids from src/lib/meta.ts (ORG_ID, PERSON_ID) — articles reference the founder as author/reviewer by @id.
- Official NAP is 16 Galgalei HaPlada St., Herzliya Pituach 4672216, Israel / גלגלי הפלדה 16, הרצליה פיתוח, 4672216, ישראל; phone +972 9-958-2211 (09-9582211) — keep all visible and structured references synchronized.
