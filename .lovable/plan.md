# Improving search and AI visibility

## What the check found
- **Site address mismatch (the most important issue).** The live site runs at nimrodi.co.il, and www.nimrodi.co.il forwards there with a *temporary* (302) redirect. But almost every page tells Google its "official" address is the www version, and so do the sitemap and robots.txt. Google gets told to index addresses that redirect, which slows indexing and splits ranking signals.
- **Very low current visibility.** Semrush (Israel database) shows only one ranking keyword ("tax prep services", position 75), with an estimated traffic of roughly zero. The new site probably hasn't been indexed long enough yet.
- **Search Console isn't linked to this project**, so actual clicks, impressions and positions (including the reported 5–6 for "רואה חשבון בהרצליה") can't be checked from here.
- **The site-scan results are out of date** (from July); metadata checks have never run.
- The content side is in good shape: titles and descriptions on every page, structured data (Organization, Person, FAQ, Breadcrumb), llms.txt files, AI crawlers allowed, IndexNow, and good internal linking.

## Proposed steps

### 1. Unify the site address (in-site work)
- Point every official page address, language alternate, share link and structured data entry at `https://nimrodi.co.il` (no www).
- Update sitemap.xml, robots.txt, llms.txt / llms-full.txt and the shared IDs in structured data.
- Check that no "www" address is left, the build passes, and the sitemap uses the right domain.
- After publishing: send the full address list to IndexNow and resubmit the sitemap in Search Console.

### 2. Connect Search Console to the project (with your approval)
- Link the existing verified property so we can see actual clicks, positions and indexing per page, and measure the effect of the Herzliya title change.

### 3. Run a fresh site scan
- After steps 1–2, run a new scan and fix any issues it finds.

### 4. Content and AI visibility (suggestions, built only with your approval)
- Local pages for nearby areas you actually serve (for example Ra'anana, Ramat HaSharon, Kfar Shmaryahu), each with original content, not duplicated text.
- Two or three new articles on high-intent topics (opening a business file, choosing an accountant for a startup, annual report for self-employed), based on keyword research.
- Strengthen trust signals that AI tools quote: the CPA license number on the team page, clear publication/update dates, a short "in brief" answer at the top of each article.

### 5. Outside the site (your action)
- Monthly Google Business Profile posts and continued customer reviews.
- Make sure listings on B144, Easy and other directories show the exact same name, address, phone number and website (nimrodi.co.il).
- Change the www forwarding from temporary (302) to permanent (301) in the domain settings, if possible.

## Technical details
- Change the `BASE`/`SITE_ORIGIN`/`BASE_URL` constants and literal `https://www.nimrodi.co.il` strings (~49 files under `src/`, plus `public/robots.txt`, `public/llms*.txt`, `scripts/indexnow-ping.ts`) to `https://nimrodi.co.il`. The `ORG_ID`/`PERSON_ID` `@id` values change together, so they stay consistent.
- Keep the domain list for checking where forms are sent from (it accepts both hosts).
- Don't add `<lastmod>` to the sitemap.
- Afterwards, mark the stale `http:robots` and `http:sitemap` findings fixed only once they're confirmed resolved.
