# Portfolio Website Redesign — Design Spec

**Date:** 2026-05-13
**Owner:** Pradyun Bachu

## Goal

Replace the current "Bloomberg / financial terminal" portfolio with a clean, Apple-style, type-driven minimal site. Same content sections as today (About, Experience, Skills, Projects, Contact) — restyled and restructured around a typography-only aesthetic.

## Aesthetic Principles

- **White background**, dark text. Dark-mode toggle inverts to near-black background / off-white text.
- **Monospace typography** as the single typeface across the site (JetBrains Mono via Google Fonts).
- **Pure mono palette** — black, white, grays only. No accent color.
- **Generous whitespace.** Single column, max-width ~720px, centered.
- **No images** anywhere. Type-only portfolio.
- **No financial-terminal flair** — drop ticker codes (PULS, LTUS), status badges (ACTIVE, IN DEV), live clock, scrolling ticker marquee.
- **Proper sentence case** with proper nouns capitalized (e.g., "Hi, I'm Pradyun", "UW–Madison"). Not all-lowercase.
- **Subtle motion** — fade + slide-up as sections enter viewport. No expressive animation.

## Page Structure (top to bottom)

1. **Sticky nav** — small mono links, dot separators: `about · experience · projects · contact`. Theme toggle (sun/moon glyph) at the far right. Transparent at top, gains a thin bottom divider once scrolled.
2. **Landing (100vh)** — top-left anchored:
   - Headline: `Hi, I'm Pradyun` (~64px, weight 500, tight tracking)
   - Subtitle: `CS + Econ @ UW–Madison. Building things.` (~16px, gray)
   - Bottom-left: `↓ scroll` cue (~10px, gray)
3. **About** — small caps section label, then a 2–3 sentence paragraph. Below the paragraph, one line: `Skills: Python, React, FastAPI, ...` (Skills folded into About; no standalone Skills section).
4. **Experience** — vertical list. Education + work blended chronologically, newest first. Each entry:
   ```
   2026.05 — 2026.08            Data Engineer Intern
                                Allocore · Mechanicsburg, PA
   ```
   Dates left in gray mono, title + org right. Thin divider between entries. No alternating left/right sides.
5. **Projects** — stack of project blocks. Each block:
   ```
   Pulse                                          Mar 2026 — Present
   <description>
   Python · Airflow · TimescaleDB · dbt · FastAPI · React · AWS · Docker
   GitHub ↗
   ```
   Title larger, date right-aligned gray, description body, tech stack small gray (separator: ` · `), links as underlined text with `↗` arrows. Thin divider between projects.
6. **Contact** — section label, short prompt, compact vertical list:
   ```
   Email     pradyun.bachu@gmail.com  ↗
   GitHub    github.com/pradyunbachu  ↗
   LinkedIn  linkedin.com/in/...      ↗
   Resume    Bachu_Pradyun_Resume.pdf ↗
   ```
7. **Footer** — one thin line: `© 2026 Pradyun Bachu · email · github · linkedin · resume`. Centered, small, gray.

## Type Scale

- Landing headline: ~64px, weight 500, letter-spacing -0.03em
- Landing subtitle: ~16px, weight 400, color secondary
- Section labels (ABOUT, EXPERIENCE, …): ~14px uppercase, letter-spacing 0.1em, color secondary
- Project title: ~22px, weight 500
- Body: ~16px, weight 400, color primary
- Meta (dates, tech, footer): ~13px, color secondary

## Color Tokens

| Token              | Light       | Dark        |
|--------------------|-------------|-------------|
| `--bg`             | `#ffffff`   | `#0a0a0a`   |
| `--text-primary`   | `#111111`   | `#f5f5f5`   |
| `--text-secondary` | `#666666`   | `#888888`   |
| `--divider`        | `#e5e5e5`   | `#222222`   |

## Layout

- Single column, `max-width: 720px`, horizontally centered.
- Page padding: 32px desktop, 20px mobile.
- Vertical spacing between sections: ~160px desktop, ~96px mobile.
- Mobile: nav stays inline (4 short links fit). Type scale shrinks slightly.

## Motion

- On initial mount: landing fades in (opacity 0 → 1, ~600ms ease-out).
- As each section enters viewport: fade + slide-up 12px (~500ms ease-out). One-time per section.
- Implementation: `IntersectionObserver` toggles a `data-visible="true"` attribute. CSS handles the transition via `transition: opacity 500ms ease-out, transform 500ms ease-out`.

## Dark Mode

- Small icon-button at the far right of the sticky nav (sun/moon glyph, mono character or inline SVG).
- Toggles `data-theme="dark"` on `<html>`. CSS custom properties swap.
- Persists choice to `localStorage` under key `theme`.
- First visit (no stored value) checks `window.matchMedia('(prefers-color-scheme: dark)')` and uses that as default.

## Technical Approach

**Stack:** Keep current React + Vite. No new dependencies. Google Fonts via CSS `@import` or `<link>` in [index.html](index.html).

**File structure (new):**
- [src/App.jsx](src/App.jsx) — orchestration, theme state, IntersectionObserver wiring
- `src/components/Nav.jsx`
- `src/components/Landing.jsx`
- `src/components/About.jsx`
- `src/components/Experience.jsx`
- `src/components/Projects.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`
- `src/components/Section.jsx` — shared section wrapper (label + fade-on-scroll behavior)
- `src/data/content.js` — `about`, `experience`, `projects`, `skills`, `contact` data exports
- [src/style.css](src/style.css) — global tokens, base styles, component styles. Drop all inline styles from current App.jsx.

**To delete/remove:**
- Ticker marquee + `tickerItems` data
- Status badges + `statusColor` function
- Live clock state, `currentTime`, `formatTime`, `formatDate`
- Timeline `side: "left"/"right"` mechanism — replaced with a flat chronological list
- All inline `style={{}}` props in the current [App.jsx](src/App.jsx)
- [src/mediaqueries.css](src/mediaqueries.css) if its content is no longer needed (audit first)

**To keep:**
- Vite config, `package.json` scripts
- `public/Bachu_Pradyun_Resume.pdf` (linked from Contact + Footer)
- Existing scroll-to-section pattern (rewired to new components)
- `IntersectionObserver` pattern (extended into the `<Section>` wrapper)

## Out of Scope

- Project thumbnails / screenshots (deferred — type-only for v1)
- Headshot or any imagery
- Blog or writing section
- Per-project detail pages
- Analytics, contact form, or anything requiring a backend

## Open Questions

None at design time. Implementation plan should confirm:
- Exact contact links / handles
- Final About paragraph copy (Pradyun will provide or we can draft and iterate)
