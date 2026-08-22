# Single global "back to top" button

Today the scroll-to-top button only appears on service pages (it is rendered inside the Hebrew and English service-landing components), and it sits on the same side as the floating WhatsApp button. The fix makes it a single, global button on every page, on the opposite side from WhatsApp.

## What changes

- One scroll-to-top button rendered globally, so it appears on all pages: home, gateway, service, blog, contact, FAQ, privacy, accessibility and 404 — in both Hebrew and English.
- Language detected from the URL: `/en` and `/en/*` use English labels; everything else uses Hebrew.
- The two per-page copies inside the service pages are removed, so no page ever shows two buttons.
- Placement: Hebrew pages show it bottom-right, English pages bottom-left (always opposite the WhatsApp button), 16px from the side and bottom, minimum 44x44px tap area, with accessible labels in the right language.
- Behavior stays the same: appears after scrolling past 300px, hides again at or below 300px, smooth scroll to the top.
- No other layout, content, navigation or styling is touched.

## Technical notes

- `src/routes/__root.tsx`: render `<ScrollToTop lang={isEnglish ? "en" : "he"} />` inside `RootComponent`, next to `<Outlet />`, reusing the existing `pathname` from `useRouterState` for the `/en` check.
- `src/components/scroll-to-top.tsx`: flip the side mapping to `he -> right-4`, `en -> left-4`; change `bottom-24` to `bottom-4` (kept above `env(safe-area-inset-bottom)`); ensure the button is at least 44x44 (`h-11 w-11` already satisfies this) and keeps `aria-label`.
- `src/components/service-landing.tsx` and `src/components/service-landing-en.tsx`: remove the `ScrollToTop` import and its usage.

## Verification

- Run build and TypeScript check.
- Playwright pass over Hebrew and English home, gateway, service, blog, contact, FAQ, privacy, accessibility and a 404 URL: scroll past 300px and assert exactly one scroll-to-top button, correct side, and that it hides again when scrolled back up.
