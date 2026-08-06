'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns } = require('../data/towns');

const whatsappIcon = `<svg viewBox="0 0 24 24" fill="#0b1220" aria-hidden="true"><path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.98.55 3.83 1.5 5.42L2 22l4.7-1.47a9.96 9.96 0 0 0 5.3 1.52h.01c5.53 0 10.01-4.48 10.01-10.02C22 6.48 17.53 2 12.01 2zm5.86 14.3c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.02.28-3.42-.72-2.88-1.2-4.73-4.1-4.87-4.3-.14-.2-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.75-.17 1.45z"/></svg>`;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function placeholder(alt, ratioClass) {
  return `<div class="placeholder-block ${ratioClass || 'ratio-wide'}" role="img" aria-label="${esc(alt)}">${esc(alt)}</div>`;
}

// Full-bleed hero background placeholder: fills the entire hero section behind
// the overlaid headline/CTA content, with a dark navy gradient on top for
// text readability. Still a clearly marked placeholder, not a real image.
function heroBackground(alt) {
  return `<div class="hero-bg" role="img" aria-label="${esc(alt)}">
    <span class="hero-bg-label">${esc(alt)}</span>
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>`;
}

function renderHeader() {
  return `
  <header class="site-header">
    <div class="container">
      <a href="/" class="wordmark">Algarve<span class="accent">Secure</span></a>
      <div class="header-actions">
        <a href="${site.telHref}" class="header-phone" aria-label="Call AlgarveSecure">
          <span class="icon">&#9742;</span>${site.phoneDisplay}
        </a>
        <button type="button" class="hamburger" data-nav-open aria-expanded="false" aria-controls="nav-drawer" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
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
        <a href="/" class="wordmark">Algarve<span class="accent">Secure</span></a>
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
        <a href="${site.telHref}" class="btn btn-call btn-block btn-icon-phone">${site.phoneDisplay}</a>
        <a href="${site.whatsappHref}" class="btn btn-outline btn-block" target="_blank" rel="noopener">WhatsApp Us</a>
      </div>
    </nav>
  </div>`;
}

function renderFooter() {
  const serviceLinks = services
    .map((s) => `<li><a href="/${s.slug}">${esc(s.name)}</a></li>`)
    .join('');
  const townLinks = towns
    .map((t) => `<li><a href="/${t.slug}">${esc(t.name)}</a></li>`)
    .join('');
  const year = new Date().getFullYear();

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="wordmark">Algarve<span class="accent">Secure</span></a>
          <p>English-speaking security systems and smart home installation for homeowners across the Algarve.</p>
          <p><a href="${site.telHref}" class="header-phone">&#9742; ${site.phoneDisplay}</a></p>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>${serviceLinks}</ul>
        </div>
        <div class="footer-col">
          <h4>Areas We Cover</h4>
          <ul class="footer-towns-grid">${townLinks}</ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom" style="margin-top:44px;">
        <p class="footer-disclaimer">${esc(site.complianceFooterNote)}</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} AlgarveSecure. All rights reserved.</p>
        <p>${esc(site.phoneDisplay)} &middot; ${esc(site.email)}</p>
      </div>
    </div>
  </footer>`;
}

function renderFloatingButtons() {
  return `
  <a href="${site.whatsappHref}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat with AlgarveSecure on WhatsApp">
    ${whatsappIcon}
  </a>
  <div class="mobile-call-bar">
    <a href="${site.telHref}" class="btn btn-call btn-icon-phone">Call ${site.phoneDisplay}</a>
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

function renderPage({ path, metaTitle, metaDescription, bodyHtml }) {
  const canonical = `${site.baseUrl}${path === '/' ? '' : path}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(metaTitle)}</title>
<meta name="description" content="${esc(metaDescription)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="AlgarveSecure">
<meta property="og:title" content="${esc(metaTitle)}">
<meta property="og:description" content="${esc(metaDescription)}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#0b1220">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/main.css">
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
  placeholder,
  heroBackground,
  renderPage,
  renderBreadcrumb,
};
