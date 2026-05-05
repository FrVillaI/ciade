# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for **CIADE Consulting**, an ERP (FENIX) implementation firm in Ecuador. It is a React SPA served as plain HTML with no build toolchain — Babel compiles JSX in the browser at runtime.

## Running Locally

No build step. Serve the `docs/` folder over HTTP:

```
python -m http.server 8000
```

Then open `http://localhost:8000/CIADE Consulting.html`. Changes to `.jsx` and `.css` files take effect on browser refresh.

## File Structure

```
docs/
├── CIADE Consulting.html   # Entry point; loads CDN deps and local files
├── app.jsx                  # Entire React app (~889 lines)
├── styles.css               # Design tokens + all component styles (~900 lines)
├── tweaks-panel.jsx         # Floating live-theming UI (useTweaks hook)
└── ciade-logo.png
```

## Architecture

**No npm, no bundler, no node_modules.** React 18, ReactDOM, and Babel Standalone are loaded from `unpkg` CDN. `tweaks-panel.jsx` is loaded as a `<script type="text/babel">` before `app.jsx`.

### app.jsx component tree

```
App
├── Header          — sticky nav with mega-dropdowns (Solutions / Industries / Services)
├── Hero            — headline + CTA + DashboardMock (tabbed ERP preview) + Chart (SVG)
├── Trust           — company stats (29 years, 100+ companies)
├── ProblemSolution — before/after grid
├── Solutions       — 3 deployment cards (Local / Web / Cloud)
├── Modules         — 6 ERP module cards
├── Differentiators — 6 key differentiator cards
├── Industries      — tab switcher (5 verticals)
├── Plans           — pricing toggle (monthly/annual) + 3 tier cards
├── Clients         — logo wall
├── Support         — help channels + accordion FAQ
├── FinalCTA        — 4-step conversion flow
├── Footer
└── TweaksPanel     — live accent/density editor (from tweaks-panel.jsx)
```

**Shared primitives:**
- `Icon` — 45+ inline SVG paths, referenced by name string
- `SectionHead` — eyebrow / title / subtitle layout block

### State

All state is local `useState`. No Context, Redux, or global store. The only cross-component communication is the `useTweaks` hook in `tweaks-panel.jsx`, which broadcasts accent/density changes via `postMessage` and applies them as CSS variable overrides on `document.documentElement`.

### Design tokens (CSS variables on `:root`)

| Token | Default |
|-------|---------|
| `--navy` | `#0B1F3A` |
| `--teal` | `#1F8B7E` |
| `--accent` | maps to active accent |
| `--pad` | `28px` (comfortable) / `20px` (compact) |
| `--container` | `1280px` max-width |

Accent variants: `teal` (#1F8B7E), `navy` (#3D6FB3), `copper` (#B26A3D). Density variants: `comfortable` (default), `compact`.

Typography: **Manrope** (body/headings), **JetBrains Mono** (labels/code elements), both from Google Fonts.

## Content is Hardcoded

There is no CMS or API. All text, pricing, client names, FAQ entries, and navigation items are JSX literals inside `app.jsx`. To update content, edit the relevant array/object in the appropriate component.
