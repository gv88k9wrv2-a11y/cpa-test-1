# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.

## Meta description rules (AI content generation)

**Every route MUST define a unique `meta` `description` (both Hebrew `/` and English `/en/*` routes).**

Rules for AI-generated and human-written meta descriptions:

- **Hard length limit: 150–160 characters, including spaces.** Never exceed 160.
- Write natively in the page language (Hebrew for `/*`, English for `/en/*`) — no auto-translation.
- Front-load the **primary keyword** in the first ~60 characters.
- State the **user intent / value** clearly (who it's for, what they get).
- End with a short **Call to Action** (e.g., "תאמו פגישה", "Book a consultation", "Get started").
- No duplicated descriptions across routes. No filler ("Welcome to...", "This page...").
- Mirror the same rule for `og:description` and `twitter:description` when set explicitly.

**AI system-prompt snippet to reuse when generating new pages:**

> Always generate meta description text in Hebrew and English with a hard limit
> of 150–160 characters (including spaces). Prioritize primary keywords and
> clear intent within this length, and finish with a short call to action.

Verify length before committing:

```bash
python3 - <<'PY'
import re, glob
p = re.compile(r'name:\s*"description"\s*,\s*\n?\s*content:\s*\n?\s*"((?:[^"\\]|\\.)*)"', re.M)
for f in glob.glob('src/routes/**/*.tsx', recursive=True) + ['src/routes/__root.tsx']:
    for m in p.finditer(open(f).read()):
        L = len(m.group(1))
        if L > 160: print(f"OVER {L} {f}")
PY
```
