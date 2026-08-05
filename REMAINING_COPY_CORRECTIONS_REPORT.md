# Remaining Copy Corrections Report

Run date: 2026-08-05. Task IDs R001–R048 only.

## Summary

| Status | Count |
| --- | --- |
| APPLIED | 47 |
| ALREADY SATISFIED | 0 |
| BLOCKED | 1 |
| FAILED VALIDATION | 0 |

Every applied task was verified as exactly 1 OLD occurrence before the edit and exactly 1 NEW occurrence after the edit (OLD count after = 0, NEW count before = 0). Multi-string tasks (R017, R025, R026, R031, R043, R044, R046, R047, R048) were applied string-by-string under the same rule.

## Task table

| Task | File | Structural anchor | Status |
| --- | --- | --- | --- |
| R001 | `src/components/site-chrome-en.tsx` | nav CTA text | APPLIED |
| R002 | `src/components/site-chrome-en.tsx` | Tax Advisory menu description | APPLIED |
| R003 | `src/routes/en.services.tsx` | service item label 'Startups & Tech' | APPLIED |
| R004 | `src/routes/en.services.tsx` | visible page heading | APPLIED |
| R005 | `src/routes/en.services.tsx` | intro paragraph | APPLIED |
| R006 | `src/components/site-chrome-en.tsx` | services-menu supporting line | APPLIED |
| R007 | `src/routes/en.index.tsx` | home FAQ object q + a | APPLIED |
| R008 | `src/routes/en.services.tsx` | service item label 'Tax Advisory' | APPLIED |
| R009 | `src/components/site-chrome-en.tsx` | startup menu description | APPLIED |
| R010 | `src/routes/en.cpa-foreign-companies.tsx` | FAQ answer starting 'Payroll arrangements for employees working in Israel depend' | BLOCKED — anchor not present in file (no FAQ answer begins with that text; nearest payroll-related FAQ is 'Can we pay Israeli developers without opening a branch?') |
| R011 | `src/routes/index.tsx` | Hebrew service description phrase | APPLIED |
| R012 | `src/routes/fractional-cfo.tsx` | Hebrew punctuation 'נאותות.:' | APPLIED |
| R013 | `src/routes/en.cpa-foreign-companies.tsx` | FAQS answer — subsidiary timing | APPLIED |
| R014 | `src/routes/en.cpa-foreign-companies.tsx` | FAQS answer — banking regulation | APPLIED |
| R015 | `src/routes/en.cpa-foreign-companies.tsx` | FAQS answer — transfer pricing | APPLIED |
| R016 | `src/routes/en.cpa-foreign-companies.tsx` | FAQS answer — tax benefits | APPLIED |
| R017 | `src/routes/en.cpa-foreign-companies.tsx` | highlights array (4 strings) | APPLIED |
| R018 | `src/routes/en.cpa-foreign-companies.tsx` | IP location bullet | APPLIED |
| R019 | `src/routes/en.fractional-cfo.tsx` | FAQS answer — what a fractional CFO is | APPLIED |
| R020 | `src/routes/en.fractional-cfo.tsx` | FAQS answer — vs bookkeeper | APPLIED |
| R021 | `src/routes/en.fractional-cfo.tsx` | FAQS answer — burn/runway | APPLIED |
| R022 | `src/routes/en.fractional-cfo.tsx` | FAQS answer — data room | APPLIED |
| R023 | `src/routes/en.fractional-cfo.tsx` | FAQS answer — pricing | APPLIED |
| R024 | `src/routes/en.fractional-cfo.tsx` | intro prop | APPLIED |
| R025 | `src/routes/en.fractional-cfo.tsx` | bullets/highlights (6 strings) | APPLIED |
| R026 | `src/routes/en.cpa-startups.tsx` | highlights (2 strings) | APPLIED |
| R027 | `src/routes/en.cpa-startups.tsx` | R&D bullet | APPLIED |
| R028 | `src/routes/en.cpa-startups.tsx` | tax ruling bullet | APPLIED |
| R029 | `src/routes/en.cpa-startups.tsx` | side letters bullet | APPLIED |
| R030 | `src/routes/en.cpa-startups.tsx` | section body 'Before you approach a Priced Round' | APPLIED |
| R031 | `src/routes/en.cpa-startups.tsx` | DD bullets (3 strings) | APPLIED |
| R032 | `src/routes/en.cpa-startups.tsx` | investor meetings bullet | APPLIED |
| R033 | `src/routes/en.cpa-startups.tsx` | Series A bullet | APPLIED |
| R034 | `src/routes/en.cpa-international.tsx` | intro prop | APPLIED |
| R035 | `src/routes/en.cpa-international.tsx` | section body 'Leaving Israel?' | APPLIED |
| R036 | `src/routes/en.faq.tsx` | FAQS pricing answer sentence | APPLIED |
| R037 | `src/routes/en.faq.tsx` | FAQS answer — startup CPA timing | APPLIED |
| R038 | `src/routes/en.faq.tsx` | FAQS answer — Israel–Delaware Flip | APPLIED |
| R039 | `src/routes/en.faq.tsx` | FAQS answer — registration + bank account | APPLIED |
| R040 | `src/routes/en.faq.tsx` | FAQS answer — new immigrants | APPLIED |
| R041 | `src/routes/en.faq.tsx` | FAQS crypto answer phrase | APPLIED |
| R042 | `src/routes/en.faq.tsx` | FAQS crypto ruling answer phrase | APPLIED |
| R043 | `src/routes/en.tax-consulting.tsx` | tax-ruling terminology (visible copy + metadata) | APPLIED |
| R044 | `src/routes/en.tax-consulting.tsx` | intro prop phrases | APPLIED |
| R045 | `src/routes/en.cpa-freelancers.tsx` | FAQS answer final sentence | APPLIED |
| R046 | `src/routes/en.cpa-freelancers.tsx` | title prop + intro prop | APPLIED |
| R047 | `src/routes/en.cpa-freelancers.tsx` | service bullets (4 strings) | APPLIED |
| R048 | `src/routes/en.cpa-freelancers.tsx` | section bodies (3 strings) | APPLIED |

## Hebrew replacements (verified separately)

**Hebrew replacement A — R011**, file `src/routes/index.tsx`:

- Exact OLD: `עבודה מול בנקים ישראלים להכנסת כספי קריפטו` — occurrences before: 1, after: 0
- Exact NEW: `ליווי ההתנהלות מול בנקים בישראל בכל הנוגע לכספים שמקורם בפעילות בנכסים דיגיטליים` — occurrences before: 0, after: 1
- Status: APPLIED. Letter order preserved byte-for-byte (no reversal, transliteration or Unicode normalization). The remainder of the description, including references to רשות המסים, שכירות, שוק ההון, גילוי מרצון and חוות דעת, is unchanged.

**Hebrew replacement B — R012**, file `src/routes/fractional-cfo.tsx`:

- Exact OLD: `נאותות.:` — occurrences before: 1, after: 0
- Exact NEW: `נאותות:` — occurrences before: 0, after: 1
- Status: APPLIED. Punctuation-only; no other Hebrew text in the sentence was modified.

## Blocked tasks

### R010 — `src/routes/en.cpa-foreign-companies.tsx`

Required anchor: FAQ answer beginning `Payroll arrangements for employees working in Israel depend`. No such answer exists in the repository (search across `src/` returned zero matches). The nearest payroll-related FAQ in the file is:

> q: "Can we pay Israeli developers without opening a branch?"
> a: "Yes — three options: (1) EOR (Employer of Record) …"

No edit was made, per the no-guessing rule.

## Changed files (visible copy pass)

- `src/components/site-chrome-en.tsx`
- `src/routes/en.cpa-foreign-companies.tsx`
- `src/routes/en.cpa-freelancers.tsx`
- `src/routes/en.cpa-international.tsx`
- `src/routes/en.cpa-startups.tsx`
- `src/routes/en.faq.tsx`
- `src/routes/en.fractional-cfo.tsx`
- `src/routes/en.index.tsx`
- `src/routes/en.services.tsx`
- `src/routes/en.tax-consulting.tsx`
- `src/routes/fractional-cfo.tsx`
- `src/routes/index.tsx`

## FAQ integrity

All FAQ edits were made inside the shared `FAQS` arrays only. No generated JSON-LD was hand-edited; each page continues to serialize `buildFaqJsonLd(FAQS)` (and `en.faq.tsx` maps over the same `FAQS` array), so the structured data remains synchronized automatically.

## Validation

| Check | Result |
| --- | --- |
| Build (`npm run build`) | PASS |
| TypeScript (`npx tsgo --noEmit`) | PASS, 0 errors |
| Lint (`npx eslint src --quiet`) | 1,418 pre-existing `prettier/prettier` formatting findings across 51 files, including files untouched by this run (e.g. `src/routes/blog.$slug.tsx`, `src/routes/sitemap[.]xml.ts`). No new rule categories introduced; no mass formatting was run. |
| `git diff --check` | PASS, no whitespace errors |
| TSX parse | All changed files parse (build + typecheck succeeded) |

No routes, link destinations, component names, CSS classes, images, icons, canonical URLs, hreflang entries, section order, or blog content were changed.
