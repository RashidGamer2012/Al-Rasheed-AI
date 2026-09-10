# Al-Rasheed AI — Showcase Website

A premium, scroll-driven single-page site presenting the Al-Rasheed AI Android app.
Pure **HTML + CSS + vanilla JS** — no frameworks, no build step, nothing to install.

## Preview locally

```bash
cd website
python -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` directly also works.)

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Full page markup — hero, AI chapter, manifesto, features bento, privacy, numbers, availability, footer |
| `styles.css` | "Green & Gold Legacy" design system + all scroll choreography styles |
| `app.js` | Motion engine — reveals, word-split, parallax, tilt, magnetic buttons, counters, video lazy-play, preloader |

## Sections

1. **Hero** — night-sky over Makkah video, masked headline reveal, floating phone mockup with a live chat demo
2. **Marquee** — infinite feature ribbon
3. **AI Chapter** *(340vh pinned)* — scroll drives three talking points while a B&W Qur'an film plays; a progress bar tracks the chapter
4. **Manifesto** — word-by-word blur-in over the Ka'aba at night
5. **Feature bento** — 8 tiles, 4 with topical background film (Qur'an, Hadith, Prayer, Tasbih) + animated Qibla dial and Azkar calligraphy
6. **Privacy** — Madina film, four privacy cards
7. **Numbers** — Milky Way film, count-up stats (114 · 6,236 · 14,000+ · 99 · 0 · 3B)
8. **Quote + Availability** — download CTAs pointing at the GitHub Releases page

## Media

All videos/photos are hotlinked from [Pexels](https://www.pexels.com) (free license, attribution in footer).
Every URL was verified live (HTTP 200/206) at build time. If one ever dies, the `poster` image still shows.

## Deploy

Any static host works — the folder is self-contained:

- **GitHub Pages**: push `website/` to a repo → Settings → Pages → deploy from branch
- **Netlify / Vercel / Cloudflare Pages**: drag-and-drop the `website/` folder
- **GitHub Pages via Actions**: no build command, publish root = `website/`

## Accessibility & performance notes

- `prefers-reduced-motion` fully respected (all animation disabled, content always visible)
- Videos are `muted`, `playsinline`, lazy-mounted only when scrolled near, and pause when off-screen
- Only the hero autoplays; everything else uses poster images until visible
- Mobile: tilt/cursor/magnetic effects disabled on touch, phone mockups hidden below 1080px
- Screen-reader friendly: decorative elements `aria-hidden`, drawer has proper ARIA state
