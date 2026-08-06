'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns, regionGroups } = require('../data/towns');

const whatsappIcon = `<svg viewBox="0 0 24 24" fill="#0b1220" aria-hidden="true"><path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 1.98.55 3.83 1.5 5.42L2 22l4.7-1.47a9.96 9.96 0 0 0 5.3 1.52h.01c5.53 0 10.01-4.48 10.01-10.02C22 6.48 17.53 2 12.01 2zm5.86 14.3c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.02.28-3.42-.72-2.88-1.2-4.73-4.1-4.87-4.3-.14-.2-1.16-1.55-1.16-2.95 0-1.4.73-2.09 1-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.25.6.85 2.08.92 2.23.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.75-.17 1.45z"/></svg>`;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// The signature visual device: a single-weight Algarve villa roofline,
// rendered in the limestone "drafting ink" tone. Used on every image
// placeholder panel site-wide, and as a wider skyline strip in the footer.
function villaRoofline({ camera = false } = {}) {
  return `<svg class="roofline" viewBox="0 0 400 130" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <path d="M-10 118 L40 118 L40 82 L78 52 L116 82 L116 118 L162 118 L162 66 L196 38 L230 66 L230 118 L280 118 L280 92 L312 68 L344 92 L344 118 L410 118"
      fill="none" stroke="var(--limestone)" stroke-width="1.6" opacity="0.9" stroke-linejoin="round" stroke-linecap="round"/>
    <rect x="188" y="20" width="9" height="20" fill="none" stroke="var(--limestone)" stroke-width="1.3" opacity="0.9"/>
    <line x1="-10" y1="118" x2="410" y2="118" stroke="var(--limestone)" stroke-width="1" opacity="0.35"/>
    ${camera ? '<circle cx="78" cy="57" r="4" fill="none" stroke="var(--steel-core)" stroke-width="1.3"/><circle cx="78" cy="57" r="1.4" fill="var(--steel-core)"/>' : ''}
  </svg>`;
}

function villaSkyline() {
  return `<svg class="footer-roofline" viewBox="0 0 1200 130" preserveAspectRatio="none" aria-hidden="true">
    <path d="M-20 116 L30 116 L30 88 L62 64 L94 88 L94 116 L150 116 L150 100 L172 82 L194 100 L194 116
      L250 116 L250 70 L286 40 L322 70 L322 116 L380 116 L380 96 L406 76 L432 96 L432 116
      L500 116 L500 84 L534 58 L568 84 L568 116 L630 116 L630 102 L654 84 L678 102 L678 116
      L740 116 L740 66 L778 36 L816 66 L816 116 L880 116 L880 92 L908 70 L936 92 L936 116
      L1000 116 L1000 100 L1024 82 L1048 100 L1048 116 L1220 116"
      fill="none" stroke="var(--limestone)" stroke-width="1.3" opacity="0.8" stroke-linejoin="round" stroke-linecap="round"/>
    <rect x="768" y="18" width="8" height="18" fill="none" stroke="var(--limestone)" stroke-width="1.1" opacity="0.8"/>
    <rect x="284" y="22" width="7" height="16" fill="none" stroke="var(--limestone)" stroke-width="1.1" opacity="0.8"/>
    <line x1="-20" y1="116" x2="1220" y2="116" stroke="var(--limestone)" stroke-width="1" opacity="0.3"/>
    <circle cx="62" cy="69" r="3.5" fill="none" stroke="var(--steel-core)" stroke-width="1.2" opacity="0.85"/>
    <circle cx="62" cy="69" r="1.2" fill="var(--steel-core)" opacity="0.85"/>
  </svg>`;
}

// Image placeholder panel carrying the villa-roofline signature. Replaces
// generic gray boxes everywhere — hero split panels, two-col imagery, etc.
function panel(alt, { ratio, roofline = true, camera = false } = {}) {
  const ratioClass = ratio ? ` ratio-${ratio}` : '';
  return `<div class="panel${ratioClass}" role="img" aria-label="${esc(alt)}">
    <span class="panel-tag">${esc(alt)}</span>
    ${roofline ? villaRoofline({ camera }) : ''}
  </div>`;
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
  const groups = regionGroups();
  const areaLinks = groups
    .map((g) => g.towns.map((t) => `<li><a href="/${t.slug}">${esc(t.name)}</a></li>`).join(''))
    .join('');
  const year = new Date().getFullYear();

  return `
  <footer class="site-footer">
    ${villaSkyline()}
    <div class="container">
      <div class="footer-masthead">
        <div>
          <a href="/" class="wordmark">Algarve<span class="accent">Secure</span></a>
          <p>English-speaking security systems and smart home installation for homeowners across the Algarve.</p>
        </div>
        <a href="${site.telHref}" class="btn btn-call btn-icon-phone">${site.phoneDisplay}</a>
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
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Direct</h4>
          <ul>
            <li><a href="${site.telHref}">${esc(site.phoneDisplay)}</a></li>
            <li><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom" style="border-top:none;flex-direction:column;align-items:flex-start;padding-top:0;">
        <p class="footer-disclaimer">${esc(site.complianceFooterNote)}</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${year} AlgarveSecure. All rights reserved.</p>
        <p class="mono-tag">N 37.02, W 8.02 &middot; THE ALGARVE, PORTUGAL</p>
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
<meta name="theme-color" content="#0a0f1c">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;700&family=Syne:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
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
  panel,
  villaRoofline,
  renderPage,
  renderBreadcrumb,
};
