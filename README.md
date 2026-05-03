# manav2109.github.io

Personal portfolio of **Manav Rathi** — Software Engineer · Cloud &amp; DevOps · SDET-II at Affle.

🌐 Live: **[manav2109.github.io](https://manav2109.github.io)**

---

## What this is

A single self-contained static page in the **Chromatic Press** style — a deliberate fusion of three design languages:

- **Editorial** — Fraunces serif, drop caps, magazine masthead, italic pull-quotes.
- **Holographic** — WebGL fragment-shader portrait, hue-cycling text, holographic accents.
- **Brutalist** — thick ink borders, hard offset shadows, rotated stamps, marquee tickers.

Plus a custom **Warp Portal** cursor (three concentric SVG rings, gold center pip, smooth lerp positioning, holographic trail).

## Stack

| Layer | Choice |
|---|---|
| Page | One self-contained `index.html` |
| Type | Fraunces · Archivo Black · Inter · IBM Plex Mono (Google Fonts) |
| Visuals | Pure CSS + SVG + Canvas + WebGL (no build step, no dependencies) |
| Hosting | GitHub Pages (`main` branch root) |

No JavaScript framework. No bundler. No build pipeline. The page ships exactly as you see it in source.

## Project structure

```
.
├── index.html         ← the entire portfolio (single file)
├── 404.html           ← branded 404 page
├── assets/
│   ├── favicon.svg    ← Warp Portal icon
│   ├── apple-touch-icon.png
│   └── og.png         ← OpenGraph share image
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── .nojekyll          ← disables Jekyll on GitHub Pages
└── README.md
```

## Local preview

```bash
# any static server works — pick one:
python3 -m http.server 5173
# then open http://127.0.0.1:5173/
```

Or use `npx serve` / `live-server` / VS Code Live Server.

## Deploy

Pushing to `main` is the deploy step.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages serves from the `main` branch root. Settings → Pages → Source: `main` / `/ (root)`.

## Sections

1. **Hero** — name, tagline, six stat cards
2. **About** — magazine-style profile with drop cap + sticker side panel
3. **Dispatch** — career timeline (Affle / Bosler / H&amp;M / Airbus)
4. **Compositors' Notes** — full technology stack across 12 categories
5. **Selected Work** — twelve shipping projects, horizontal scroll
6. **Filed Papers** — certifications &amp; industries served
7. **Outside the Office** — interests &amp; languages
8. **Letters** — contact channels

---

Set in *Fraunces*, **Archivo Black** &amp; `IBM Plex Mono`.
Filed from Bahadurgarh / Worldwide.
