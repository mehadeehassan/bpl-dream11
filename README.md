# BPL Dream11 — Fantasy Cricket Team Builder

React + TypeScript + Tailwind CSS v4 implementation of the "BPL Dream11" Figma design
(Assignment 7 — player selection & my-team pages).

## ⚠️ Important note about fidelity

The original `.fig` file could not be parsed programmatically — Figma's `.fig` format is a
proprietary compressed binary (Kiwi schema) that requires Figma's own internal decoder.
This build was reconstructed from:

- the file's embedded low-resolution thumbnail (layout/structure reference)
- the embedded photo assets bundled inside the `.fig` package

Layout, component structure and flow match the design closely. However, **exact hex colors,
font family/sizes, and spacing** are best-effort (Dream11/BPL-style dark navy + lime-green +
pink/orange palette). If you can export exact values from Figma (Inspect panel → CSS, or
higher-res PNG exports of each frame), share them and every token below can be tightened to
match exactly.

## Tech stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev/) for icons

## Installation

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Project structure

```
src/
  components/
    Header.tsx        — top nav, logo, tab switcher
    HeroBanner.tsx     — dark gradient hero banner + CTA
    PlayerCard.tsx     — single player card (image, stats, select button)
    PlayerGrid.tsx     — "Available Players" section (filter/sort + grid)
    MyTeamPanel.tsx    — "My Team (x/11)" list + Continue button
    PromoSignup.tsx    — floating newsletter/subscribe card
    Footer.tsx         — dark footer (about/links/newsletter columns)
  data/
    players.ts         — mock player data
  types/
    index.ts           — shared TypeScript types (Player, PlayerRole)
  App.tsx              — page composition + team-selection state
  main.tsx             — React entry point
  index.css            — Tailwind import + design tokens (@theme)
```

## Design tokens (src/index.css → @theme)

| Token             | Value     | Usage                        |
|--------------------|-----------|-------------------------------|
| `--color-navy-950`| `#0b0e1a` | Hero banner / footer background |
| `--color-lime-400`| `#d6f24a` | Primary CTA buttons, filter pill |
| `--color-pink-500`| `#ec4899` | Subscribe button gradient start |
| `--color-orange-400`| `#fb923c` | Subscribe button gradient end |

Adjust these in `src/index.css` to match exact brand colors once available.

## Replacing placeholder images

Player photos currently use Unsplash stock images. Swap `photoUrl` in
`src/data/players.ts` with real player photos, or wire the data up to a real API.
