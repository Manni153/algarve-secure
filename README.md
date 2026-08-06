# AlgarveSecure.com

Static marketing / lead-generation site for **AlgarveSecure** — security systems and smart home installation across the Algarve, targeting English-speaking expats (UK, Ireland, Netherlands, Germany).

## Stack

Zero-dependency Node.js static site generator (plain JS template literals, no framework). Content and site structure live in `/src`; running the build compiles everything to plain HTML/CSS/JS in `/public`, ready to deploy to any static host.

```
src/
  data/            site config, 7 services, 22 towns
  templates/       page templates (layout, home, service, town, about, contact)
  assets/          css + js, copied as-is into the build
  build.js         generates /public
public/            generated static site (build output — deploy this folder)
```

## Build

```
npm run build
```

Regenerates `/public`, including `sitemap.xml` and `robots.txt`, from the data and templates in `/src`. No install step required — the generator has no external dependencies.

## Local preview

```
npm run serve
```

Or any static file server, e.g. `python3 -m http.server 4173 --directory public`.

## Pages (32 total)

- `/` — homepage
- 7 service pages: `/cctv-installation` (flagship), `/alarm-systems`, `/access-control`, `/gate-automation`, `/fire-detection`, `/home-networking`, `/smart-home-automation`
- 22 town pages, e.g. `/albufeira`, `/lagos`, `/tavira`, ... (full list in `src/data/towns.js`)
- `/about`, `/contact`

Each URL is served as a clean directory (`/cctv-installation/index.html`), which static hosts serve automatically for `/cctv-installation`.

## Deploying

The `/public` folder is a complete static site — point any static host at it:

- **Netlify / Vercel / Cloudflare Pages**: set build command to `npm run build` and publish directory to `public`.
- **Any plain static host / S3 / GitHub Pages**: upload the contents of `/public` directly.

### Contact form

The contact form (`/contact`) is marked up for **Netlify Forms** (`data-netlify="true"`, honeypot field). If deploying elsewhere, wire the form up to a form backend of your choice (e.g. Formspree) or a serverless function — the phone and WhatsApp CTAs work regardless of the form backend.

## Content notes

- Tracking phone number `+351 923 272 806` is used site-wide (header, hero, footer, sticky mobile call bar, WhatsApp link).
- All photography slots are intentionally left as visible gray placeholder blocks (`[Placeholder: ...]`) — no stock or generated filler images — ready to swap for real/AI-generated photography.
- Copy avoids certification/licensing claims, "free quote" language, and "same-day" promises per the brief's compliance rules.

## Editing content

- Update phone number, nav, trust stats: `src/data/site.js`
- Update/add a service: `src/data/services.js`
- Update/add a town: `src/data/towns.js`
- Then run `npm run build` to regenerate `/public`.
