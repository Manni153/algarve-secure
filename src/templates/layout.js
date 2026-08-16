'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns, regionGroups } = require('../data/towns');

const whatsappIcon = `<svg viewBox="0 0 24 24" fill="#0f3238" aria-hidden="true"><path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.98.55 3.83 1.5 5.42L2 22l4.7-1.47a9.96 9.96 0 0 0 5.3 1.52h.01c5.53 0 10.01-4.48 10.01-10.02C22 6.48 17.53 2 12.01 2zm5.86 14.3c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.02.28-3.42-.72-2.88-1.2-4.73-4.1-4.87-4.3-.14-.2-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.75-.17 1.45z"/></svg>`;

// Small, consistent-style line-icon set for feature/trust cards (the
// .icon-dot slot) — simple stroke icons on a 24x24 grid, not illustrative,
// colored via currentColor so they inherit whatever the surrounding
// component sets. Keyed by name so data files can just reference a name
// (e.g. icon: 'pin') rather than embedding markup.
const cardIcons = {
  chat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="11" rx="2.5"/><path d="M8 16.5v3l4-3"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
  tools: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2-2 2.6-2.6z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="7" r="2.2"/><circle cx="18" cy="7" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M7.8 8.3 10.5 16M16.2 8.3 13.5 16M8.2 7h7.6"/></svg>`,
};

function cardIcon(name) {
  return cardIcons[name] || '';
}

// Hero stats-row icons — hand-drawn, not from an icon set. Shared spec
// across all three: 24x24 viewBox, 2px stroke, round caps/joins, no fill
// on the stroked shape itself, generous corner radii, base colour
// #475569 (matches --hero2-steel), with exactly one small filled detail
// per icon in #DC143C (--hero2-crimson). Order matches the fixed
// English-Speaking / Locally-Based / Fast-Response order both stat rows
// already render in (see heroStatIcons below), so no explicit
// name-to-stat mapping is needed.
// Redrawn one pass after shipping: the element box measured correctly at
// 26x26 (confirmed with Playwright) but the artwork itself only filled
// ~65-70% of the bubble/pin's 24-unit viewBox and as little as ~27% of
// the bolt's width — plenty of unused margin inside the box, which reads
// as a visibly smaller icon even though the box itself is exactly right.
// Paths below now extend much closer to the viewBox edges (leaving only
// enough clearance for the 2px stroke itself), so the visible ink
// actually approaches the full 26px box — confirmed via getBBox(), not
// just the element's own width/height.
const heroStatIcons = [
  // 1. Speech bubble (English-Speaking): soft, near-pill rounded body,
  // now spanning nearly the full viewBox width (was 17 of 24 units, now
  // 21). Tail stays a short, separate stroke sitting just below the body
  // with a visible gap — "slightly detached" — just pulled further down
  // to match the taller body. Crimson dot sits inside the body.
  `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="1.5" y="3" width="21" height="12.5" rx="6"/><path d="M6.6 17.4C5.7 19 4.2 20.4 2.3 21.3"/><circle cx="12" cy="9.25" r="1.5" fill="#DC143C" stroke="none"/></svg>`,
  // 2. Map pin (Locally-Based): same single closed teardrop shape, widened
  // and lengthened to reach much closer to the viewBox edges (was 13x18
  // of 24 units, now 15x20). Crimson dot centred in the rounded head.
  `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 2.3C7.7 2.3 4.3 5.8 4.3 10c0 5.9 7.7 12.7 7.7 12.7s7.7-6.8 7.7-12.7c0-4.2-3.4-7.7-7.7-7.7Z"/><circle cx="12" cy="9.7" r="1.6" fill="#DC143C" stroke="none"/></svg>`,
  // 3. Lightning bolt (Fast Response): the previous zigzag amplitude was
  // very narrow (6.5 of 24 units wide) even though it ran the full
  // height — a thin vertical sliver that read as much smaller than the
  // other two icons. Widened the zigzag itself (now ~11.5 units wide),
  // still drawn as smooth curves rather than hard corners. Crimson dot
  // marks the tip.
  `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#475569" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M17 1.8C13 6.5 9 10.5 5.5 14c2.8.2 5.6.4 8.5.6-3.5 3.4-7 6.4-8.5 7.9"/><circle cx="5.5" cy="22.5" r="1.5" fill="#DC143C" stroke="none"/></svg>`,
];

// Service-card icons (desktop-only card rebuild) — standalone symbol only,
// no house-outline wrapper (the navy rounded-square .card-icon-block tile
// is the only frame). 24x24 viewBox, 2.5px stroke, round caps/joins, fill
// none, single colour (white — these sit on a solid steel-blue block, no
// crimson accent on this set). Small dots/squares that need to read as
// solid (keypad buttons, antenna ball, camera lens) are filled white rather
// than stroked, same white as everything else — still "single colour",
// just filled instead of outlined for those tiny details. Each icon's own
// path data still sits in its original lower-viewBox position (left over
// from when a house-roof occupied the top third), so the viewBox's own
// min-y is shifted down per icon — a pure viewport translation, not a path
// edit — to recentre that icon's actual ink inside the tile; values were
// picked by rendering each icon against a crosshair at the tile's true
// centre and adjusting until the glyph's own bounding box lined up with it.
// Keyed by service slug (see data/services.js) rather than by index, so the
// mapping stays correct even if services.js is reordered.
const serviceIcons = {
  'cctv-installation': `<svg viewBox="0 2.8 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M8.26 13.1V11.56"/><rect x="6.5" y="13.1" width="6.6" height="4.18" rx="1.1"/><path d="M13.1 14.2v1.98l3.74 1.87v-5.72Z" fill="#FFFFFF" stroke="none"/></svg>`,
  'alarm-systems': `<svg viewBox="0 3.25 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 10.9c-1.87 0-3.3 1.43-3.3 3.3v1.43c0 .66-.22 1.21-.66 1.65l-.44.44h8.8l-.44-.44c-.44-.44-.66-.99-.66-1.65V14.2c0-1.87-1.43-3.3-3.3-3.3Z"/><path d="M10.46 18.82c.22.77.88 1.21 1.54 1.21s1.32-.44 1.54-1.21"/></svg>`,
  'access-control': `<svg viewBox="0 3.85 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="7.05" y="10.9" width="9.9" height="9.9" rx="1.98"/><circle cx="9.8" cy="13.87" r="0.935" fill="#FFFFFF" stroke="none"/><circle cx="14.2" cy="13.87" r="0.935" fill="#FFFFFF" stroke="none"/><circle cx="9.8" cy="17.83" r="0.935" fill="#FFFFFF" stroke="none"/><circle cx="14.2" cy="17.83" r="0.935" fill="#FFFFFF" stroke="none"/></svg>`,
  'gate-automation': `<svg viewBox="0 4.18 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M7.05 19.7v-7.04h9.9V19.7"/></svg>`,
  'fire-detection': `<svg viewBox="0 2.26 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 8.82c1.1 1.54-.44 2.53-.33 3.96.11.88.88 1.43.88 1.43s1.1-.77 1.21-1.98c1.21 1.21 1.76 2.53 1.76 3.85 0 2.09-1.54 3.41-3.52 3.41s-3.52-1.32-3.52-3.41c0-1.65.88-2.97 1.76-3.96.11.88.66 1.43.66 1.43S10.35 11.68 12 8.82Z"/></svg>`,
  'home-networking': `<svg viewBox="0 3.465 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="7.05" y="16.4" width="9.9" height="3.52" rx="1.1"/><path d="M12 16.4v-3.74"/><circle cx="12" cy="12" r="0.99" fill="#FFFFFF" stroke="none"/></svg>`,
  'smart-home-automation': `<svg viewBox="0 3.93 24 24" width="38" height="38" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 11.12v3.63"/><path d="M8.7 13.43a4.4 4.4 0 1 0 6.6 0"/></svg>`,
};

function serviceIcon(slug) {
  return serviceIcons[slug] || '';
}

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// For trusted, hand-authored copy fields that intentionally contain inline
// <a> links (contextual cross-links between services/towns). Never use on
// anything that isn't a literal string written in our own data files.
function rich(str) {
  return String(str);
}

// Plain, unobtrusive image placeholder — clearly marked, not decorative.
// Real photography drops in later; this just needs to hold the space.
function placeholder(alt, { ratio } = {}) {
  const ratioClass = ratio ? ` ratio-${ratio}` : '';
  return `<div class="placeholder${ratioClass}" role="img" aria-label="${esc(alt)}">
    <span class="ph-label">${esc(alt)}</span>
  </div>`;
}

// Real-photography counterpart to placeholder() — same ratio classes and
// rounded-frame sizing, a real <picture> (WebP with a JPEG fallback)
// instead of the labelled placeholder box.
function photo(alt, { webp, jpg, ratio } = {}) {
  const ratioClass = ratio ? ` ratio-${ratio}` : '';
  return `<picture class="photo-frame${ratioClass}">
    <source type="image/webp" srcset="${webp}">
    <img src="${jpg}" alt="${esc(alt)}" loading="lazy">
  </picture>`;
}

function renderBreadcrumb(items) {
  if (!items || !items.length) return '';
  const parts = items
    .map((item, i) => {
      if (i === items.length - 1) return `<span>${esc(item.label)}</span>`;
      return `<a href="${item.href}">${esc(item.label)}</a>`;
    })
    .join(' &rsaquo; ');
  return `<p class="breadcrumb">${parts}</p>`;
}

// Headline-first hero, single column, stacked top to bottom:
// nav (rendered separately) -> small keyword H1 (crawlable, the real <h1>)
// -> large emotional headline (a separate, visually dominant heading, NOT
// the H1) -> practical subtext -> CTA -> supporting image. The image sits
// below the CTA, full width of the content column (not full-bleed), so it
// reads as evidence rather than a backdrop. Trust stats render as a
// separate band directly after, so they're the first thing seen on scroll.
// twoColDesktop opts a single page's hero into a real two-column layout at
// desktop widths (kicker/headline/subtext/CTA/note/trust-stats stacked in a
// left column, image filling the right column's full height) — currently
// used by the homepage only. Every other page keeps the single-column,
// stacked-then-image layout at every breakpoint. Mobile/tablet are
// unaffected either way: the split only activates at the desktop breakpoint.
function heroIntro({ alt, breadcrumb, h1Text, h1Html, headlineHtml, subtext, ctaNote, trustStats, desktopStatsText, mobileStatsText, image, twoColDesktop, noMedia, dark }) {
  // Mobile (<768px) uses trustStats' two-tier bold-value + caption-label
  // format (.v/.l); tablet+ (768px+) uses desktopStatsText's single
  // combined-line format (.vs) instead — both rendered into the same
  // markup when both are supplied, toggled by breakpoint via CSS (see
  // .page-home .hero-trust-band .v/.l/.vs in main.css), same "render
  // both, hide via CSS" pattern used elsewhere on this page. Pages
  // without trustStats (none currently) or without desktopStatsText fall
  // back to whichever one they do have.
  const statsHtml = trustStats
    ? `<div class="hero-trust-band${twoColDesktop ? ' hero-trust-band--split' : ''} bleed"><div class="container">${trustStats
        .map((s, i) => `<div class="stat">${heroStatIcons[i] || ''}<span class="v">${esc(s.value)}</span><span class="l">${esc(s.label)}</span>${desktopStatsText ? `<span class="vs">${esc(desktopStatsText[i])}</span>` : ''}</div>`)
        .join('')}</div></div>`
    : desktopStatsText
    ? `<div class="hero-trust-band${twoColDesktop ? ' hero-trust-band--split' : ''} bleed"><div class="container">${desktopStatsText
        .map((t, i) => `<div class="stat">${heroStatIcons[i] || ''}<span class="vs">${esc(t)}</span></div>`)
        .join('')}</div></div>`
    : '';

  // Desktop-only duplicate of the trust stats, rendered inside the text
  // column so it can sit in the left-column stack instead of the full-bleed
  // band above (which is hidden at desktop widths when twoColDesktop is on).
  // When desktopStatsText is supplied (homepage, latest pass) each entry is
  // one single-line combined string ("100% English-Speaking") rendered as
  // a single span — no separate bold-value/caption split — independent of
  // trustStats, which still drives the mobile/tablet band's original
  // two-line format unchanged.
  // mobileStatsText (mobile+tablet, <=1024px) vs desktopStatsText
  // (1025px+) — both rendered, toggled by breakpoint via CSS (.v-desktop/
  // .v-mobile, see main.css), same "render both, hide via CSS" pattern
  // used elsewhere on this page. Desktop stays a single combined-string
  // line ("100% English-Speaking"); mobile/tablet render each stat as
  // icon / value / label — three stacked rows, each a separate .v-mobile
  // span (both share the .v-mobile class so the existing display-toggle
  // and font-size rules in main.css apply to both without changes there).
  // Falls back to rendering desktopStatsText alone (old behaviour) when
  // no mobile-specific data is supplied.
  const inlineStatsHtml = twoColDesktop && desktopStatsText && mobileStatsText
    ? `<div class="hero-trust-inline">${desktopStatsText
        .map((t, i) => `<div class="stat">${heroStatIcons[i] || ''}<span class="v v-desktop">${esc(t)}</span><span class="v v-mobile v-mobile-value">${esc(mobileStatsText[i].value)}</span><span class="v v-mobile v-mobile-label">${esc(mobileStatsText[i].label)}</span></div>`)
        .join('')}</div>`
    : twoColDesktop && desktopStatsText
    ? `<div class="hero-trust-inline">${desktopStatsText
        .map((t, i) => `<div class="stat">${heroStatIcons[i] || ''}<span class="v">${esc(t)}</span></div>`)
        .join('')}</div>`
    : twoColDesktop && trustStats
    ? `<div class="hero-trust-inline">${trustStats
        .map((s, i) => `<div class="stat">${heroStatIcons[i] || ''}<span class="v">${esc(s.value)}</span><span class="l">${esc(s.label)}</span></div>`)
        .join('')}</div>`
    : '';

  const ctaNoteHtml = twoColDesktop && ctaNote ? `<p class="hero-cta-note">${esc(ctaNote)}</p>` : '';

  // When a real image is supplied, render a responsive <picture> (WebP with
  // a JPEG fallback) instead of the placeholder. Above-the-fold and
  // LCP-critical, so eager load with high fetch priority rather than the
  // below-the-fold lazy path.
  // Exactly ONE breakpoint, at 1025px — mobile and tablet (<=1024px) both
  // resolve to the same image.mobileWebp/mobileJpg source, desktop
  // (1025px+) gets its own image.desktopWebp/desktopJpg. Used to be three
  // tiers (a true-mobile-only image, a 768px+ tier covering tablet, and a
  // 1025px+-only desktop override) from when mobile/tablet were still
  // cropped from the desktop photo — collapsed to two once mobile/tablet
  // got their own purpose-composed image instead of a crop, since there's
  // no longer a reason for tablet to sit in its own tier between them.
  // <source> elements are evaluated in order and the first match wins, so
  // the 1025px+ (desktop) source has to render first. Only home.js and
  // town.js's Lagos design-system-pilot page currently supply `image` —
  // every other caller of heroIntro() leaves it undefined and renders the
  // placeholder branch below instead.
  // noMedia (About/Contact/How We Work only): these pages have no
  // photography at all, so the media column — real image or dashed
  // placeholder box alike — is dropped entirely rather than rendering an
  // empty box. Paired with `dark`, which gives the now-image-less hero a
  // deliberate solid --ink background (the same dark-section treatment
  // used elsewhere for CTA bands/footer) instead of the default
  // transparent hero that would otherwise just show blank page background.
  const mediaHtml = noMedia
    ? ''
    : image
    ? `<picture>
        <source media="(min-width: 1025px)" type="image/webp" srcset="${image.desktopWebp}">
        <source media="(min-width: 1025px)" type="image/jpeg" srcset="${image.desktopJpg}">
        <source type="image/webp" srcset="${image.mobileWebp}">
        <img src="${image.mobileJpg}" alt="${esc(alt)}"${image.objectPosition ? ` style="--hero-obj-pos: ${esc(image.objectPosition)};"` : ''} loading="eager" fetchpriority="high">
      </picture>`
    : placeholder(alt, {});

  return `
  <section class="hero-stack${twoColDesktop ? ' hero-stack--split' : ''}${dark ? ' hero-stack--dark' : ''} bleed">
    <div class="container">
      <div class="hero-stack-text">
        ${breadcrumb ? renderBreadcrumb(breadcrumb) : ''}
        <h1 class="hero-kicker">${h1Html || esc(h1Text)}</h1>
        <h2 class="hero-headline">${headlineHtml}</h2>
        <p class="hero-subtext">${esc(subtext)}</p>
        <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
        ${ctaNoteHtml}
        ${inlineStatsHtml}
      </div>
      ${noMedia ? '' : `<div class="hero-stack-media">
        ${mediaHtml}
      </div>`}
    </div>
  </section>
  ${statsHtml}`;
}

// Small reassurance callout addressing hesitation directly — meant to sit
// right after the hero/CTA, before the page moves into main content.
function reassuranceBand({ heading, body }) {
  return `
  <section class="reassurance-band">
    <div class="container narrow">
      <h2>${esc(heading)}</h2>
      ${body ? `<p>${esc(body)}</p>` : ''}
    </div>
  </section>`;
}

// Desktop-only (1025px+, see main.css) nav bar for the homepage's white
// header: a Services dropdown (the 7 service pages) plus Service Areas
// (the homepage's own #areas section — there's no standalone town-hub
// page), About and Contact. Only ever called when isHome is true, so this
// markup never renders on the other 32 pages.
function renderHomeHeaderNav() {
  const dropdownLinks = site.headerServiceNav
    .map((s) => `<a href="${s.href}">${esc(s.label)}</a>`)
    .join('');
  return `
      <nav class="home-header-nav" aria-label="Primary">
        <div class="home-header-nav-item">
          <button type="button" class="home-header-nav-trigger" data-dropdown-trigger aria-haspopup="true" aria-expanded="false">Services</button>
          <div class="home-header-dropdown">${dropdownLinks}</div>
        </div>
        <a href="#areas" class="home-header-nav-link">Service Areas</a>
        <a href="/about" class="home-header-nav-link">About</a>
        <a href="/contact" class="home-header-nav-link">Contact</a>
      </nav>`;
}

// Shared by both the header and (on the homepage only) the footer wordmark,
// so the roof-mark SVG and its markup structure never drift between the two
// instances — one string to keep in sync instead of two. Absolutely
// positioned inside a relatively-positioned wrapper around just the "H"
// glyph, so it floats above without affecting line height/layout in either
// context.
function wordmarkHtml(isHome) {
  return isHome
    ? `Algarve <span class="accent">Smart <span class="wordmark-h-wrap">H<svg class="wordmark-roof" viewBox="0 0 28 11" fill="none" aria-hidden="true" focusable="false"><path d="M2 9.3 14 1.8 26 9.3" stroke="#DC143C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>ome</span>`
    : `Algarve <span class="accent">Smart Home</span>`;
}

// isHome adds a site-header--home class so the homepage's white-header
// treatment (see main.css) can be scoped without touching the header on
// any of the other 32 pages, which all still get the plain dark header.
function renderHeader(isHome) {
  const headerNavLinks = site.headerServiceNav
    .map((s) => `<li><a href="${s.href}">${esc(s.label)}</a></li>`)
    .join('');
  return `
  <nav class="site-header${isHome ? ' site-header--home' : ''} bleed" aria-label="Primary">
    <div class="container">
      <a href="/" class="wordmark">${wordmarkHtml(isHome)}</a>
      <ul class="header-nav">${headerNavLinks}</ul>
      ${isHome ? renderHomeHeaderNav() : ''}
      <div class="header-actions">
        <a href="${site.telHref}" class="header-phone" aria-label="Call Algarve Smart Home">
          <span class="icon" aria-hidden="true"></span><span class="phone-digits">${site.phoneDisplay}</span>
        </a>
        <button type="button" class="hamburger" data-nav-open aria-expanded="false" aria-controls="nav-drawer" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

function renderNavDrawer() {
  const serviceLinks = site.serviceNav
    .map((s) => `<li><a href="${s.href}">${esc(s.label)}</a></li>`)
    .join('');
  const companyLinks = site.companyNav
    .map((c) => `<li><a href="${c.href}">${esc(c.label)}</a></li>`)
    .join('');
  const townLinks = towns
    .map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`)
    .join('');

  return `
  <div class="nav-drawer" id="nav-drawer" data-nav-drawer>
    <nav class="nav-panel" aria-label="Main menu">
      <div class="nav-panel-top">
        <a href="/" class="wordmark">Algarve <span class="accent">Smart Home</span></a>
        <button type="button" class="nav-close" data-nav-close aria-label="Close menu">&#10005;</button>
      </div>

      <p class="nav-group-label">Home</p>
      <ul class="nav-list"><li><a href="/">Home</a></li></ul>

      <p class="nav-group-label">Services</p>
      <ul class="nav-list">${serviceLinks}</ul>

      <p class="nav-group-label">Areas We Cover</p>
      <div class="nav-list nav-towns-grid">${townLinks}</div>

      <p class="nav-group-label">Company</p>
      <ul class="nav-list">${companyLinks}</ul>

      <div class="nav-cta">
        <a href="${site.telHref}" class="btn btn-block btn-icon">${site.phoneDisplay}</a>
        <a href="${site.whatsappHref}" class="btn btn-outline btn-block" target="_blank" rel="noopener">WhatsApp Us</a>
      </div>
    </nav>
  </div>`;
}

function renderFooter(isHome) {
  const serviceLinks = services
    .map((s) => `<li><a href="/${s.slug}">${esc(s.name)}</a></li>`)
    .join('');
  const groups = regionGroups();
  const areaLinks = groups
    .map((g) => g.towns.map((t) => `<li><a href="/${t.slug}">${esc(t.name)}</a></li>`).join(''))
    .join('');
  const year = new Date().getFullYear();

  return `
  <footer class="site-footer bleed">
    <div class="container">
      <div class="footer-masthead">
        <div>
          <a href="/" class="wordmark">${wordmarkHtml(isHome)}</a>
          <p>English-speaking security systems and smart home installation for homeowners across the Algarve.</p>
        </div>
        <a href="${site.telHref}" class="btn btn-icon">${site.phoneDisplay}</a>
      </div>
      <div class="footer-grid">
        <div class="footer-col">
          <h4>Services</h4>
          <ul>${serviceLinks}</ul>
        </div>
        <div class="footer-col">
          <h4>Areas We Cover</h4>
          <ul>${areaLinks}</ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/how-we-work">How We Work</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Direct</h4>
          <ul>
            <li><a href="${site.telHref}">${esc(site.phoneDisplay)}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} Algarve Smart Home. All rights reserved.</p>
        <p>${esc(site.phoneDisplay)}</p>
      </div>
    </div>
  </footer>`;
}

function renderFloatingButtons() {
  return `
  <a href="${site.whatsappHref}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat with Algarve Smart Home on WhatsApp">
    ${whatsappIcon}
  </a>`;
}

// Canonical business entity: one HomeAndConstructionBusiness, identified by
// a stable @id, injected into every page's JSON-LD by renderPage() below.
// Service-page and town-page Service schema reference it via
// `provider: { '@id': BUSINESS_ID }` instead of repeating the object.
// Deliberately minimal — name/telephone/url/image/areaServed only. No
// address (none is confirmed) and no certification/licensing claims.
const BUSINESS_ID = `${site.baseUrl}/#business`;
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': BUSINESS_ID,
  name: 'Algarve Smart Home',
  telephone: site.phoneTel,
  url: `${site.baseUrl}/`,
  image: `${site.baseUrl}/assets/icons/icon-512.png`,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Algarve, Portugal',
  },
};

// Shared BreadcrumbList JSON-LD builder. Takes an ordered list of
// { name, item } steps (item omitted for a non-navigable step) and numbers
// the positions automatically, so every template builds its breadcrumb
// schema the same way instead of hand-rolling the itemListElement array.
function breadcrumbListSchema(steps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: steps.map((step, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: step.name,
      ...(step.item ? { item: step.item } : {}),
    })),
  };
}

// Title tags and meta descriptions are managed entirely outside this
// codebase (hosting-platform level) — deliberately not generated here.
// useHomeHeader lets a single non-homepage page (currently: the Lagos
// town page, a one-page pilot of the homepage's design system — see
// town.js) opt into the same white-header/dropdown-nav/Nunito-fonts
// treatment as the homepage, independent of mainClass/isHome. isHome
// itself still only reflects mainClass === 'page-home' — this doesn't
// make that page "the homepage" in any other sense (schema, mainClass,
// path are all untouched), it only reuses the header/footer/font chrome.
function renderPage({ path, bodyHtml, schema, mainClass, useHomeHeader, title, metaDescription }) {
  const isHome = mainClass === 'page-home';
  const useHeaderChrome = isHome || Boolean(useHomeHeader);
  const canonical = `${site.baseUrl}${path === '/' ? '' : path}`;
  // businessSchema renders on every page (not just those that pass their
  // own schema) — it's the single source other pages' Service schema
  // references via BUSINESS_ID, so it always needs to be resolvable.
  const schemaHtml = [businessSchema, ...(schema || [])]
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/<\/script/gi, '<\\/script')}</script>`)
    .join('\n');
  // Homepage typography test (Nunito/Nunito Sans) — gated on
  // useHeaderChrome (was isHome directly) the same way renderHeader's
  // homepage-style markup is, so none of the other 31 pages make this
  // extra request. To roll this out site-wide later: change
  // `useHeaderChrome ?` below to `true ?` (or drop the ternary) —
  // nothing else about this block, or the CSS that consumes it, needs to
  // move or be duplicated per page.
  const homeFontsLink = useHeaderChrome
    ? '<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">'
    : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${title ? `<title>${esc(title)}</title>\n` : ''}${metaDescription ? `<meta name="description" content="${esc(metaDescription)}">\n` : ''}<link rel="canonical" href="${canonical}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Algarve Smart Home">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.baseUrl}/assets/icons/icon-512.png">
<meta name="twitter:card" content="summary">
<meta name="twitter:image" content="${site.baseUrl}/assets/icons/icon-512.png">
<meta name="theme-color" content="#fbf6ec">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;700&family=Syne:wght@600;700;800&family=Figtree:wght@400;500;700;800&display=swap" rel="stylesheet">
${homeFontsLink}
<link rel="stylesheet" href="/assets/css/main.css">
${schemaHtml}
</head>
<body>
${renderHeader(useHeaderChrome)}
${renderNavDrawer()}
<main${mainClass ? ` class="${mainClass}"` : ''}>
${bodyHtml}
</main>
${renderFooter(useHeaderChrome)}
${renderFloatingButtons()}
<script src="/assets/js/main.js"></script>
</body>
</html>`;
}

module.exports = {
  esc,
  rich,
  placeholder,
  photo,
  heroIntro,
  reassuranceBand,
  renderPage,
  renderBreadcrumb,
  cardIcon,
  serviceIcon,
  BUSINESS_ID,
  breadcrumbListSchema,
};
