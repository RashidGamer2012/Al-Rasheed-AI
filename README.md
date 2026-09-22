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
| `index.html` | Full page markup — hero, AI chapter, manifesto, features bento, privacy, transparency, numbers, availability, footer. All feature claims are verified against the app source (hadith counts, versions, offline behavior). |
| `styles.css` | "Green & Gold Legacy" design system + all scroll choreography styles |
| `app.js` | Motion engine — reveals, word-split, parallax, tilt, magnetic buttons, counters, video lazy-play, preloader |

## Sections

1. **Hero** — night-sky over Makkah video, masked headline reveal, floating phone mockup with a live chat demo
2. **Marquee** — infinite feature ribbon
3. **AI Chapter** *(420vh pinned)* — scroll drives four talking points while a B&W Qur'an film plays; a progress bar tracks the chapter
4. **Manifesto** — word-by-word blur-in over the Ka'aba at night
5. **Feature bento** — 9 tiles, 4 with topical background film (Qur'an, Hadith, Prayer, Tasbih) + animated Qibla dial, recitation waveform and Azkar calligraphy
6. **Privacy** — Madina film, four privacy cards
7. **Transparency (Responsible AI)** — verified citations, honest no-source fallback, scholar cautions, About AI & Sources
8. **Numbers** — Milky Way film, count-up stats (114 · 6,236 · 72,313 · 99 · 0 · 3B)
9. **Quote + Availability** — download CTAs pointing at the GitHub Releases page

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
