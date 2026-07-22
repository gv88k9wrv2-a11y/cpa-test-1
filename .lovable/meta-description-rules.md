# Meta description rules

Applies to every route under `src/routes/` (Hebrew `/*` and English `/en/*`).

## Hard rules

1. Every route MUST define a unique `{ name: "description", content: "..." }` inside its `head().meta`.
2. **Length: 150–160 characters, spaces included. Never > 160.**
3. Language matches the route: Hebrew for `/*`, English for `/en/*`. No machine translation between them.
4. Front-load the primary SEO keyword; end with a short CTA.
5. `og:description` / `twitter:description`, when set, follow the same length rule.

## AI generation prompt (reuse verbatim)

> Always generate meta description text in Hebrew and English with a hard limit
> of 150–160 characters (including spaces). Prioritize primary keywords and
> clear intent within this length, and finish with a short call to action.

## Verify

```bash
python3 - <<'PY'
import re, glob
p = re.compile(r'name:\s*"description"\s*,\s*\n?\s*content:\s*\n?\s*"((?:[^"\\]|\\.)*)"', re.M)
for f in glob.glob('src/routes/**/*.tsx', recursive=True) + ['src/routes/__root.tsx']:
    for m in p.finditer(open(f).read()):
        L = len(m.group(1))
        if L > 160: print(f"OVER {L} {f}: {m.group(1)}")
PY
```
