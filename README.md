# manav2109.github.io

Personal portfolio of **Manav Rathi** — Software Engineer · Cloud &amp; DevOps · SDET-II at Affle.

Live at <https://manav2109.github.io/>.

## Stack

- **Vite 5** + **React 18** + **TypeScript 5** (strict)
- One global stylesheet (`src/styles/theme.css`) — design tokens + the full editorial / holographic / brutalist theme
- WebGL holographic portrait + canvas-driven Warp Portal cursor + confetti
- Zero runtime CSS frameworks, zero state libraries — vanilla `useEffect` and IntersectionObserver
- Static deploy via **GitHub Actions → GitHub Pages**

## Getting started

```bash
npm install
npm run dev      # → http://127.0.0.1:5173
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

## Project layout

```
.
├── index.html                    Vite entry · meta · OG · JSON-LD
├── public/                       static files (copied as-is)
│   ├── favicon.ico · 404.html · robots.txt · sitemap.xml · .nojekyll
│   └── assets/                   favicon.svg · apple-touch-icon · og.png
├── src/
│   ├── main.tsx                  React root
│   ├── App.tsx                   page composition
│   ├── types.ts                  TS interfaces
│   ├── icons.tsx                 inline SVG social icons
│   ├── styles/
│   │   └── theme.css             the entire theme (~1.1k lines)
│   ├── data/
│   │   └── portfolio.ts          projects · career · stack · contacts · marquees
│   ├── hooks/
│   │   ├── useCountUp.ts         animated counter
│   │   └── useReveal.ts          IntersectionObserver wrapper
│   └── components/
│       ├── WarpPortalCursor.tsx  cursor + holographic trail canvas
│       ├── ConfettiCanvas.tsx    listens for `confetti-burst` event
│       ├── HoloPortrait.tsx      WebGL metaball shader
│       ├── Hero.tsx · StatCard.tsx
│       ├── Masthead.tsx · Marquee.tsx · Footer.tsx · Reveal.tsx
│       ├── About.tsx · Timeline.tsx · TechStack.tsx
│       ├── Projects.tsx          horizontal scroll (wheel · drag · arrow keys)
│       └── Credentials.tsx · Life.tsx · Contact.tsx
└── .github/workflows/deploy.yml  build + deploy to Pages on push to main
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`:

1. `npm ci` and `npm run build`
2. Upload `dist/` as a Pages artifact
3. Deploy via `actions/deploy-pages@v4`

**One-time repo setting required:**
`Settings → Pages → Build and deployment → Source: GitHub Actions`.

After that, every push to `main` auto-publishes.

## Design

A merge of editorial broadsheet, holographic foil, and neo-brutalist tech. Type
pairs Fraunces (display serif) with Archivo Black (brutalist sans) and IBM Plex Mono
(technical accent). Color tokens are defined as CSS custom properties at the top of
`theme.css`.

## License

MIT © Manav Rathi
