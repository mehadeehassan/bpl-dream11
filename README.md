# BPL Dream11

A clean, responsive fantasy cricket team builder for Bangladesh Premier League fans. Browse the available players, select your squad, and review your picks in the **My Team** view.

## Overview

BPL Dream11 is a frontend-only React application built around a simple fantasy team-building flow:

1. View the available BPL players.
2. Add or remove players with the action button on each player card.
3. Open **My Team** to review the selected squad.
4. Remove players from the squad when needed.

The current demo starts with three players already selected and supports a maximum squad size display of 11 players.

## Features

- Responsive layout for mobile, tablet, and desktop screens
- Sticky header with BPL Dream11 branding
- Navigation between **Available Players** and **My Team**
- Player cards with:
  - Player photo
  - Name and role
  - Team name
  - Credits
  - Fantasy points
  - Add/remove selection control
- Selected-player count in the My Team view
- Empty-state message when no players are selected
- Remove players directly from the My Team list
- Hero banner introducing the BPL fantasy team experience
- Newsletter and team-news subscription UI
- Reusable React components and strongly typed player data
- Lucide icons for interface actions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `lucide-react`
- `oxlint`

## Requirements

- Node.js 18 or newer
- npm 9 or newer

You can check your installed versions with:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone or open the project

```bash
git clone <repository-url>
cd bpl-dream11
```

If the project is already open in VS Code, run the remaining commands from the project root.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with hot reload        |
| `npm run build`   | Runs the TypeScript build and creates a production bundle |
| `npm run preview` | Serves the production build locally                       |
| `npm run lint`    | Runs Oxlint against the project                           |

For a production-style local check:

```bash
npm run build
npm run preview
```

## Project Structure

```text
bpl-dream11/
├── public/                  # Public static files
├── src/
│   ├── assets/              # Brand and image assets
│   ├── components/
│   │   ├── Footer.tsx       # Footer, quick links, and newsletter UI
│   │   ├── Header.tsx       # Branding and tab navigation
│   │   ├── HeroBanner.tsx   # Introductory hero section
│   │   ├── MyTeamPanel.tsx  # Selected-player list and squad count
│   │   ├── PlayerCard.tsx   # Individual player card
│   │   ├── PlayerGrid.tsx   # Available player grid
│   │   └── PromoSignup.tsx  # Team-news subscription section
│   ├── data/
│   │   └── players.ts       # Initial player dataset
│   ├── types/
│   │   └── index.ts         # Player and player-role types
│   ├── App.tsx              # Main application state and layout
│   ├── index.css            # Tailwind import and theme styles
│   └── main.tsx             # React entry point
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Application Behavior

The main application state lives in `src/App.tsx`:

- `players` stores the current player list and each player's `selected` state.
- `activeTab` controls whether the player grid or My Team panel is visible.
- Selecting a player toggles that player's `selected` value.
- The My Team panel derives its list from the selected players.
- Removing a player from My Team uses the same toggle handler as the player grid.

Player records follow this TypeScript shape:

```ts
interface Player {
  id: string;
  name: string;
  role: "Batsman" | "Bowler" | "All-Rounder" | "Wicket-Keeper";
  team: string;
  photoUrl: string;
  credits: number;
  points: number;
  selected: boolean;
}
```

To add or update players, edit `src/data/players.ts` while preserving this shape.

## Current Demo Limitations

This project is currently a frontend prototype. The following controls are present for the interface but do not yet connect to backend logic:

- Player filtering
- Player sorting
- Hero **Start Building** button
- Continue button validation or submission
- Newsletter form submission
- Header search, notifications, and mobile menu actions
- Footer quick links
- Persistent storage, authentication, leaderboard, fixtures, or live points

Player photos are loaded from external image URLs, so an internet connection may be needed for all images to render.

## Recommended Next Steps

- Add functional role/team filters and sorting
- Enforce fantasy squad rules and an 11-player limit
- Add budget and role-balance validation
- Persist team selections with local storage or a backend API
- Connect newsletter forms to a real subscription service
- Add authentication, fixtures, leaderboard, and live scoring
- Replace remote image URLs with optimized local or CDN-managed assets
- Add component and interaction tests

## License

No license has been specified for this project yet.
