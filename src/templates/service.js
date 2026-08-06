'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns, regionGroups } = require('../data/towns');
const { esc, panel, renderPage, renderBreadcrumb } = require('./layout');

// Curated cross-region subset used on non-flagship service pages for internal
// linking. CCTV (the flagship page) links to all 22 towns instead.
const CORE_TOWN_SLUGS = [
  'albufeira', 'lagos', 'tavira', 'vilamoura', 'carvoeiro',
  'portimao', 'faro', 'loule', 'quarteira', 'almancil',
];

function renderService(service, index) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  // Alternate composition by page index (rhythm across the 7 pages) and
  // flip again within the page (rhythm section to section).
  const dirA = index % 2 === 0 ? '' : 'reverse';
  const dirB = index % 2 === 0 ? 'reverse' : '';

  const includedList = service.included
    .map((item) => `<li>${esc(item)}</li>`)
    .join('');

  const extraCards = (service.extraSections || [])
    .map(
      (sec) => `<div class="card-arch">
        <h3>${esc(sec.heading)}</h3>
        <p>${esc(sec.text)}</p>
      </div>`
    )
    .join('');

  const townLinksHtml = service.flagship
    ? regionGroups()
        .map(
          (g) => `<div class="directory-col">
            <div class="head">${esc(g.label.toUpperCase())}</div>
            ${g.towns.map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`).join('')}
          </div>`
        )
        .join('')
    : '';

  const townLinkLine = !service.flagship
    ? towns
        .filter((t) => CORE_TOWN_SLUGS.includes(t.slug))
        .map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`)
        .join('<span class="sep">&middot;</span>')
    : '';

  const otherServiceTiles = otherServices
    .map(
      (s) => `<a href="/${s.slug}" class="bento-tile${s.flagship ? ' flagship' : ''}">
        <span class="tile-tag">${s.flagship ? 'FLAGSHIP' : 'SERVICE'}</span>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const body = `
  <section class="hero">
    <div class="split ${dirA}">
      <div class="split-text">
        ${renderBreadcrumb([{ label: 'Home', href: '/' }, { label: service.name }])}
        <h1>${esc(service.h1)}</h1>
        <p class="lede">${esc(service.heroSubhead)}</p>
        <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
      </div>
      <div class="split-panel">
        ${panel(service.imageAlt, { camera: service.flagship })}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="split ${dirB} contained">
        <div class="split-text">
          <span class="eyebrow">What's Included</span>
          <h2>What our ${esc(service.name)} service covers</h2>
          <p>${esc(service.intro)}</p>
          <ul class="check-list mt-32">${includedList}</ul>
        </div>
        <div class="split-panel">
          ${panel(`${service.name} equipment detail shot`)}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="split ${dirA} contained">
        <div class="split-text">
          <span class="eyebrow">Why It Matters</span>
          <h2>Built for owners who aren't always on-site</h2>
          <p>${esc(service.whyItMatters)}</p>
          <a href="${site.telHref}" class="btn btn-call btn-icon-phone mt-32">${site.phoneDisplay}</a>
        </div>
        <div class="split-panel">
          ${panel(`${service.name} in use at an Algarve property`)}
        </div>
      </div>
    </div>
  </section>

  ${
    extraCards
      ? `<section>
          <div class="container">
            <div class="sec-head">
              <span class="sec-num">In Detail</span>
              <div><h2>${esc(service.name)}, done properly</h2></div>
            </div>
            <div class="card-grid cols-2">${extraCards}</div>
          </div>
        </section>`
      : ''
  }

  <section class="cta-band">
    <div class="split ${dirB}">
      <div class="split-panel">
        ${panel('Algarve property exterior, security system installed')}
      </div>
      <div class="split-text">
        <span class="eyebrow">Get Started</span>
        <h2>Talk through your ${esc(service.name.toLowerCase())} options</h2>
        <p class="lede">Call now and we'll talk you through what makes sense for your property — in English, with no jargon.</p>
        <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">Coverage</span>
        <div><h2>${esc(service.name)} across the Algarve</h2><p class="desc">${service.flagship ? 'Installed for homeowners in every town we cover.' : 'Installed for homeowners across the Algarve, including:'}</p></div>
      </div>
      ${service.flagship ? `<div class="directory">${townLinksHtml}</div>` : `<div class="link-line">${townLinkLine}</div>`}
    </div>
  </section>

  <section>
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">Explore</span>
        <div><h2>More of what we install</h2></div>
      </div>
      <div class="bento">${otherServiceTiles}</div>
    </div>
  </section>
  `;

  return renderPage({
    path: `/${service.slug}`,
    metaTitle: service.metaTitle,
    metaDescription: service.metaDescription,
    bodyHtml: body,
  });
}

module.exports = renderService;
