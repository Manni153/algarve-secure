'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns, regionGroups } = require('../data/towns');
const { esc, placeholder, heroPhoto, renderPage } = require('./layout');

// Curated cross-region subset used on non-flagship service pages for internal
// linking. CCTV (the flagship page) links to all 22 towns instead.
const CORE_TOWN_SLUGS = [
  'albufeira', 'lagos', 'tavira', 'vilamoura', 'carvoeiro',
  'portimao', 'faro', 'loule', 'quarteira', 'almancil',
];

function renderService(service) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const includedList = service.included
    .map((item) => `<li>${esc(item)}</li>`)
    .join('');

  const extraCards = (service.extraSections || [])
    .map(
      (sec) => `<div class="card">
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

  const otherServiceCards = otherServices
    .map(
      (s) => `<a href="/${s.slug}" class="card${s.flagship ? ' flagship' : ''}">
        ${s.flagship ? '<span class="badge">Flagship Service</span>' : ''}
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const hero = heroPhoto({
    alt: service.imageAlt,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: service.name }],
    h1Html: esc(service.h1),
    lede: service.heroSubhead,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">What's Included</span>
          <h2>What our ${esc(service.name)} service covers</h2>
          <p>${esc(service.intro)}</p>
          <ul class="check-list mt-32">${includedList}</ul>
        </div>
        <div class="two-col-media">
          ${placeholder(`${service.name} equipment detail shot`, { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="two-col reverse">
        <div class="two-col-media">
          ${placeholder(`${service.name} in use at an Algarve property`, { ratio: 'tall' })}
        </div>
        <div class="two-col-text">
          <span class="eyebrow">Why It Matters</span>
          <h2>Built for owners who aren't always on-site</h2>
          <p>${esc(service.whyItMatters)}</p>
          <a href="${site.telHref}" class="btn btn-icon mt-32">${site.phoneDisplay}</a>
        </div>
      </div>
    </div>
  </section>

  ${
    extraCards
      ? `<section>
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">In Detail</span>
              <h2>${esc(service.name)}, done properly</h2>
            </div>
            <div class="card-grid cols-2">${extraCards}</div>
          </div>
        </section>`
      : ''
  }

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk through your ${esc(service.name.toLowerCase())} options</h2>
      <p class="lede">Call now and we'll talk you through what makes sense for your property — in English, with no jargon.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Where We Work</span>
        <h2>${esc(service.name)} across the Algarve</h2>
        <p class="lede">${service.flagship ? 'Installed for homeowners in every town we cover.' : 'Installed for homeowners across the Algarve, including:'}</p>
      </div>
      ${service.flagship ? `<div class="directory">${townLinksHtml}</div>` : `<div class="link-line center">${townLinkLine}</div>`}
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Explore</span>
        <h2>More of what we install</h2>
      </div>
      <div class="card-grid cols-3">${otherServiceCards}</div>
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
