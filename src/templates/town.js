'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { nearbyTowns } = require('../data/towns');
const { esc, placeholder, heroPhoto, renderPage } = require('./layout');

function renderTown(town) {
  const serviceRows = services
    .map(
      (s) => `<a href="/${s.slug}">
        <div><h3>${esc(s.name)} in ${esc(town.name)}</h3><p>${esc(s.heroSubhead)}</p></div>
        <span class="arrow">&rarr;</span>
      </a>`
    )
    .join('');

  const nearby = nearbyTowns(town.slug, 3);
  const nearbyLine = nearby
    .map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`)
    .join('<span class="sep">&middot;</span>');

  const hero = heroPhoto({
    alt: `Property exterior in ${town.name}, Algarve, with security camera detail`,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: town.name }],
    h1Html: `English-Speaking Security &amp; Smart Home Systems in ${esc(town.name)}`,
    lede: `CCTV, alarms and smart home installation for homeowners in ${town.name} and the surrounding area, with support in plain English from start to finish.`,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">Local to ${esc(town.name)}</span>
          <h2>Security &amp; smart home installation in ${esc(town.name)}</h2>
          <p>${esc(town.name)} is ${esc(town.character)}. Whether it's a villa, apartment or holiday rental, we plan cameras, alarms and access systems around how the property is actually used — and explain every step in English.</p>
          <p>${esc(town.context)}</p>
          <a href="${site.telHref}" class="btn btn-icon mt-32">${site.phoneDisplay}</a>
        </div>
        <div class="two-col-media">
          ${placeholder(`Street or coastal view of ${town.name}, Algarve`, { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Services</span>
        <h2>What we install in ${esc(town.name)}</h2>
      </div>
      <div class="service-list">${serviceRows}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Nearby</span>
        <h2>Also serving areas near ${esc(town.name)}</h2>
      </div>
      <div class="link-line center">${nearbyLine}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Speak to AlgarveSecure about your property in ${esc(town.name)}</h2>
      <p class="lede">Call now to talk through cameras, alarms or smart home options — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
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
