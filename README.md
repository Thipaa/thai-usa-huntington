# THAI·USA — Huntington, NY

Static website for **THAI·USA**, an authentic Thai restaurant in Huntington, NY.

## Project structure

```
thai-usa-huntington/
├── index.html
├── css/styles.css
└── js/
    ├── menu-data.js   # site info, hours, 74 menu items
    └── main.js
```

## Run locally

```bash
python3 -m http.server 8000
```

## Editing content

- **Menu items** — `js/menu-data.js` (each item: `{ name, description, price, veg }`)
- **Hours / address / contact** — `window.SITE` in `js/menu-data.js`
- **Colors / fonts** — CSS custom properties in `css/styles.css`
