'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { nearbyTowns } = require('../data/towns');
const { esc, placeholder, heroBackground, renderPage, renderBreadcrumb } = require('./layout');

function renderTown(town) {
  const serviceCards = services
    .map(
      (s) => `<a href="/${s.slug}" class="service-card">
        <h3>${esc(s.name)} in ${esc(town.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const nearby = nearbyTowns(town.slug, 4);
  const nearbyChips = nearby
    .map((t) => `<a href="/${t.slug}" class="town-chip">${esc(t.name)}</a>`)
    .join('');

  const body = `
  <section class="hero hero-has-bg">
    ${heroBackground(`[Placeholder: Property exterior in ${town.name}, Algarve, with security camera detail]`)}
    <div class="container">
      ${renderBreadcrumb([{ label: 'Home', href: '/' }, { label: town.name }])}
      <h1>English-Speaking Security &amp; Smart Home Systems in ${esc(town.name)}</h1>
      <p class="lede">CCTV, alarms and smart home installation for homeowners in ${esc(town.name)} and the surrounding area, with support in plain English from start to finish.</p>
      <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone hero-cta">${site.phoneDisplay}</a>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="two-col">
        <div>
          <span class="eyebrow">Local to ${esc(town.name)}</span>
          <h2>Security &amp; Smart Home Installation in ${esc(town.name)}</h2>
          <p>${esc(town.name)} is ${esc(town.character)}. Whether it's a villa, apartment or holiday rental, we plan cameras, alarms and smart home systems around how the property is actually used — and explain every step in English.</p>
          <p>From a single CCTV camera covering a driveway to a fully connected system with alarms, access control and smart lighting, systems are sized to the property, not sold as a one-size-fits-all package.</p>
          <a href="${site.telHref}" class="btn btn-call btn-icon-phone mt-32">${site.phoneDisplay}</a>
        </div>
        <div>
          ${placeholder(`[Placeholder: Street or coastal view of ${town.name}]`, 'ratio-tall')}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Services in ${esc(town.name)}</span>
        <h2>What We Install in ${esc(town.name)}</h2>
      </div>
      <div class="service-grid">${serviceCards}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Nearby Areas</span>
        <h2>Also Serving Areas Near ${esc(town.name)}</h2>
      </div>
      <div class="town-chip-grid">${nearbyChips}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Speak to AlgarveSecure About Your Property in ${esc(town.name)}</h2>
      <p class="lede">Call now to talk through cameras, alarms or smart home options — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  return renderPage({
    path: `/${town.slug}`,
    metaTitle: `Security & Smart Home Installer in ${town.name}, Algarve | AlgarveSecure`,
    metaDescription: `English-speaking CCTV, alarm and smart home installation for homeowners in ${town.name}, Algarve. Call +351 923 272 806.`,
    bodyHtml: body,
  });
}

module.exports = renderTown;
