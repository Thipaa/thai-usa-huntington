# THAI·USA — Website Makeover

A modern, editorial "fine-dining menu" redesign of [thaiusa.vercel.app](https://thaiusa.vercel.app/)
for **THAI·USA**, an authentic Thai restaurant in Huntington, NY.

All original content (74 dishes across 11 courses, hours, address, contact) is preserved.
The color theme is kept from the original site: **navy `#1E3369` · gold `#B8860B` · cream**.

![Hero](https://img.shields.io/badge/style-award--editorial-B8860B) ![Mobile](https://img.shields.io/badge/mobile-first-1E3369)

---

## What's new in the makeover

- **Oversized kinetic hero** — a full-bleed `THAI & USA` wordmark with a per-letter
  reveal animation, a gold ampersand, an outlined "USA", drifting light orbs, and a
  large Thai-script (`อาหารไทย`) watermark. Built to feel Awwwards-worthy.
- **Menu styled like a printed à-la-carte menu** — dotted price leaders, a decorative
  Thai label per course, two-column layout on larger screens, and a *Veg ✓* tag.
- **Sticky course filter** — tap a course to jump to it; the active chip follows scroll.
- **Editorial sections** — animated marquee of signature dishes, an About block with
  stats, and a navy "Visit" section with an auto-highlighted *today* in the hours, a
  Google Maps embed, and a giant outlined footer wordmark.
- **Mobile-first** — full-screen animated mobile nav, fluid `clamp()` type, touch-scroll
  course filter, safe-area aware, and `prefers-reduced-motion` support.

## Project structure

```
thai-usa-huntington/
├── index.html          # markup & sections (hero, marquee, about, menu, visit, footer)
├── css/
│   └── styles.css      # design system + all styling (no build step)
└── js/
    ├── menu-data.js     # all content: site info, hours, 74 menu items, disclaimers
    └── main.js          # menu rendering, course filter, scroll reveal, mobile nav
```

It's a **plain static site** — no framework, no build step, no dependencies
(fonts load from Google Fonts). Editing the menu is as simple as changing
`js/menu-data.js`.

## Run it locally

Open `index.html` directly, or serve the folder (recommended, so the fonts/map load cleanly):

```bash
cd thai-usa-huntington
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to Vercel

This is static, so deployment is trivial:

```bash
cd thai-usa-huntington
npx vercel        # or: npx vercel --prod
```

Or drag the folder into the Vercel dashboard, or connect a Git repo —
no framework preset needed (choose **"Other" / static**).

## Editing content

- **Menu items** — edit the arrays in `js/menu-data.js`. Each item is
  `{ name, description, price, veg }` (`veg: true` shows the *Veg ✓* tag,
  `price` may be `"Market Price"`).
- **Hours / address / phone / socials** — edit `window.SITE` in `js/menu-data.js`.
- **Colors / fonts** — edit the CSS custom properties under `:root` in `css/styles.css`.

---

_Content © THAI·USA, Huntington NY. Redesign built as a static site._
