'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns, regionGroups } = require('../data/towns');

const whatsappIcon = `<svg viewBox="0 0 24 24" fill="#0f3238" aria-hidden="true"><path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.98.55 3.83 1.5 5.42L2 22l4.7-1.47a9.96 9.96 0 0 0 5.3 1.52h.01c5.53 0 10.01-4.48 10.01-10.02C22 6.48 17.53 2 12.01 2zm5.86 14.3c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.02.28-3.42-.72-2.88-1.2-4.73-4.1-4.87-4.3-.14-.2-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.75-.17 1.45z"/></svg>`;

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
function heroIntro({ alt, breadcrumb, h1Text, headlineHtml, subtext, ctaNote, trustStats }) {
  const statsHtml = trustStats
    ? `<div class="hero-trust-band bleed"><div class="container">${trustStats
        .map((s) => `<div class="stat"><span class="v">${esc(s.value)}</span><span class="l">${esc(s.label)}</span></div>`)
        .join('')}</div></div>`
    : '';

  return `
  <section class="hero-stack bleed">
    <div class="container">
      <div class="hero-stack-text">
        ${breadcrumb ? renderBreadcrumb(breadcrumb) : ''}
        <h1 class="hero-kicker">${esc(h1Text)}</h1>
        <h2 class="hero-headline">${headlineHtml}</h2>
        <p class="hero-subtext">${esc(subtext)}</p>
        <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
        ${ctaNote ? `<p class="cta-note">${esc(ctaNote)}</p>` : ''}
      </div>
      <div class="hero-stack-media">
        ${placeholder(alt, {})}
      </div>
    </div>
  </section>
  ${statsHtml}`;
}

// Small reassurance callout addressing hesitation directly — meant to sit
// right after the hero/CTA, before the page moves into main content.
function reassuranceBand({ heading, body }) {
  return `
  <section class="reassurance-band bleed">
    <div class="container narrow">
      <h2>${esc(heading)}</h2>
      <p>${esc(body)}</p>
    </div>
  </section>`;
}

function renderHeader() {
  return `
  <nav class="site-header bleed" aria-label="Primary">
    <div class="container">
      <a href="/" class="wordmark">Algarve <span class="accent">Smart Home</span></a>
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

function renderFooter() {
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
          <a href="/" class="wordmark">Algarve <span class="accent">Smart Home</span></a>
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

// Title tags and meta descriptions are managed entirely outside this
// codebase (hosting-platform level) — deliberately not generated here.
function renderPage({ path, bodyHtml, schema }) {
  const canonical = `${site.baseUrl}${path === '/' ? '' : path}`;
  const schemaHtml = (schema || [])
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/<\/script/gi, '<\\/script')}</script>`)
    .join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Algarve Smart Home">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#fbf6ec">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/main.css">
${schemaHtml}
</head>
<body>
${renderHeader()}
${renderNavDrawer()}
<main>
${bodyHtml}
</main>
${renderFooter()}
${renderFloatingButtons()}
<script src="/assets/js/main.js"></script>
</body>
</html>`;
}

module.exports = {
  esc,
  rich,
  placeholder,
  heroIntro,
  reassuranceBand,
  renderPage,
  renderBreadcrumb,
};
