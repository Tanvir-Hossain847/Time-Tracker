# Time Tracker

A desktop-style time tracking dashboard built with **Next.js 16**, **Tailwind CSS v4**, and inline SVG icons. The UI is fixed at 1050px wide and supports both light and dark mode via `prefers-color-scheme`.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Theme tokens (light/dark), Tailwind config
│   ├── layout.jsx        # Root layout, font setup
│   └── page.jsx          # Entry point — composes Navbar, Tasks, Timer
├── components/
│   ├── Navbar/
│   │   └── Navbar.jsx    # Vertical sidebar navigation
│   ├── Tasks/
│   │   ├── Tasks.jsx     # Tasks panel root
│   │   ├── Header.jsx    # Title + add button
│   │   ├── InProgress.jsx# "In Progress" filter badge
│   │   └── Cards.jsx     # Task row cards
│   └── Timer/
│       ├── Timer.jsx     # Timer panel root
│       ├── ActiveTimer.jsx # Active timer card with clock display
│       ├── WorkOn.jsx    # Project/task dropdown selectors
│       ├── Progress.jsx  # Today / This Week stat rows
│       └── Footer.jsx    # Version + Sync footer
└── lib/
    └── utils.js          # Shared utility functions (cn, etc.)
```

---

## Components

### `Navbar`
Vertical sidebar fixed at 86px wide. Contains the app logo, Tasks and Settings nav items, a logout icon, and a user avatar at the bottom. All icons are inline SVGs using `currentColor` for theme compatibility.

### `Tasks`
The main content panel. Composed of:
- **Header** — page title, subtitle, and a rotated diamond add button
- **InProgress** — pill badge showing the active filter and task count
- **Cards** — list of task rows, each showing title, category, priority dot (color-coded via `bg-destructive`, `bg-chart-3`, `bg-chart-1`), and time

### `Timer`
Right-side panel. Composed of:
- **ActiveTimer** — displays the running timer (`00:0000`), a clock icon, add-file icon, and a red stop button
- **WorkOn** — two dropdown rows (project + task) with a vertical "WORK ON" label strip
- **Progress** — two stat cards (Today / This Week) each with an icon, time value, and a ring chart image (`Green70.svg` / `Red30.svg`)
- **Footer** — sidebar toggle icon, version label, and sync button

---

## Theming

All colors are defined as CSS custom properties in `globals.css` using the shadcn token system. Dark mode is applied automatically via `@media (prefers-color-scheme: dark)` — no class toggling needed.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--background` | `#ffffff` | `#101318` | Navbar + Tasks bg |
| `--card` | `#f0f2f7` | `#161c2a` | Task row cards |
| `--secondary` | `#f0f2f7` | `#131720` | Timer panel bg |
| `--accent` | `#e2e5ed` | `#1a2236` | Timer inner cards |
| `--primary` | `#3b5bdb` | `#02439F` | Blue buttons, borders |
| `--destructive` | `#ef4444` | `#ef4444` | Red, high priority |
| `--muted` | `#e2e5ed` | `#1e2535` | Badge bg, strips |
| `--border` | `#d1d5db` | `#1e2a3a` | All borders |
| `--chart-1` | `#22c55e` | `#22c55e` | Low priority (green) |
| `--chart-2` | `#14b8a6` | `#14b8a6` | Teal accent |
| `--chart-3` | `#f97316` | `#f97316` | Medium priority (orange) |

---

## Tech Stack

- **Next.js 16** — App Router
- **Tailwind CSS v4** — utility-first styling, CSS variable tokens
- **Lucide React** — `Clock`, `RefreshCw` icons
- **Roboto** — primary font (Google Fonts)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
