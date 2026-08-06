'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns } = require('../data/towns');
const { esc, placeholder, heroBackground, renderPage, renderBreadcrumb } = require('./layout');

// Curated cross-region subset used on non-flagship service pages for internal
// linking. CCTV (the flagship page) links to all 22 towns instead.
const CORE_TOWN_SLUGS = [
  'albufeira', 'lagos', 'tavira', 'vilamoura', 'carvoeiro',
  'portimao', 'faro', 'loule', 'quarteira', 'almancil',
];

function renderService(service) {
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const townList = service.flagship
    ? towns
    : towns.filter((t) => CORE_TOWN_SLUGS.includes(t.slug));

  const includedList = service.included
    .map((item) => `<li>${esc(item)}</li>`)
    .join('');

  const extraSections = (service.extraSections || [])
    .map(
      (sec) => `<div class="feature-card">
        <h3>${esc(sec.heading)}</h3>
        <p>${esc(sec.text)}</p>
      </div>`
    )
    .join('');

  const townChips = townList
    .map((t) => `<a href="/${t.slug}" class="town-chip">${esc(service.name)} in ${esc(t.name)}</a>`)
    .join('');

  const otherServiceCards = otherServices
    .map(
      (s) => `<a href="/${s.slug}" class="service-card">
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const body = `
  <section class="hero hero-has-bg">
    ${heroBackground(service.imageAlt)}
    <div class="container">
      ${renderBreadcrumb([{ label: 'Home', href: '/' }, { label: service.name }])}
      <h1>${esc(service.h1)}</h1>
      <p class="lede">${esc(service.heroSubhead)}</p>
      <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone hero-cta">${site.phoneDisplay}</a>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="two-col">
        <div>
          <span class="eyebrow">What's Included</span>
          <h2>What Our ${esc(service.name)} Service Covers</h2>
          <p>${esc(service.intro)}</p>
          <ul class="check-list mt-32">${includedList}</ul>
        </div>
        <div>
          ${placeholder(`[Placeholder: ${service.name} equipment detail shot]`, 'ratio-tall')}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="two-col reverse">
        <div>
          ${placeholder(`[Placeholder: ${service.name} in use at an Algarve property]`, 'ratio-tall')}
        </div>
        <div>
          <span class="eyebrow">Why It Matters</span>
          <h2>Built for Owners Who Aren't Always On-Site</h2>
          <p>${esc(service.whyItMatters)}</p>
          <a href="${site.telHref}" class="btn btn-call btn-icon-phone mt-32">${site.phoneDisplay}</a>
        </div>
      </div>
    </div>
  </section>

  ${
    extraSections
      ? `<section>
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">In Detail</span>
              <h2>${esc(service.name)}, Done Properly</h2>
            </div>
            <div class="grid-2">${extraSections}</div>
          </div>
        </section>`
      : ''
  }

  <section class="cta-band">
    <div class="container">
      <h2>Talk Through Your ${esc(service.name)} Options</h2>
      <p class="lede">Call now and we'll talk you through what makes sense for your property — in English, with no jargon.</p>
      <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Where We Work</span>
        <h2>${esc(service.name)} Across the Algarve</h2>
        <p class="lede">${service.flagship ? 'Installed for homeowners in every town we cover.' : 'Installed for homeowners across the Algarve, including:'}</p>
      </div>
      <div class="town-chip-grid">${townChips}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Other Services</span>
        <h2>Explore More of What We Install</h2>
      </div>
      <div class="service-grid">${otherServiceCards}</div>
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
