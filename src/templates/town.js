'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { nearbyTowns } = require('../data/towns');
const { esc, panel, renderPage, renderBreadcrumb } = require('./layout');

function renderTown(town, index) {
  const dirA = index % 2 === 0 ? '' : 'reverse';
  const dirB = index % 2 === 0 ? 'reverse' : '';

  const serviceRows = services
    .map(
      (s) => `<a href="/${s.slug}">
        <div><h3>${esc(s.name)} in ${esc(town.name)}</h3><p>${esc(s.heroSubhead)}</p></div>
        <span class="arrow">&rarr;</span>
      </a>`
    )
    .join('');

  const nearby = nearbyTowns(town.slug, 4);
  const nearbyLine = nearby
    .map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`)
    .join('<span class="sep">&middot;</span>');

  const body = `
  <section class="hero">
    <div class="split ${dirA}">
      <div class="split-text">
        ${renderBreadcrumb([{ label: 'Home', href: '/' }, { label: town.name }])}
        <h1>English-Speaking Security &amp; Smart Home Systems in ${esc(town.name)}</h1>
        <p class="lede">CCTV, alarms and smart home installation for homeowners in ${esc(town.name)} and the surrounding area, with support in plain English from start to finish.</p>
        <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
      </div>
      <div class="split-panel">
        ${panel(`Property exterior in ${town.name}, Algarve, with security camera detail`, { camera: true })}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="split ${dirB} contained">
        <div class="split-text">
          <span class="eyebrow">Local to ${esc(town.name)}</span>
          <h2>Security &amp; smart home installation in ${esc(town.name)}</h2>
          <p>${esc(town.name)} is ${esc(town.character)}. Whether it's a villa, apartment or holiday rental, we plan cameras, alarms and smart home systems around how the property is actually used — and explain every step in English.</p>
          <p>From a single CCTV camera covering a driveway to a fully connected system with alarms, access control and smart lighting, systems are sized to the property, not sold as a one-size-fits-all package.</p>
          <a href="${site.telHref}" class="btn btn-call btn-icon-phone mt-32">${site.phoneDisplay}</a>
        </div>
        <div class="split-panel">
          ${panel(`Street or coastal view of ${town.name}, Algarve`)}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">Services</span>
        <div><h2>What we install in ${esc(town.name)}</h2></div>
      </div>
      <div class="service-list">${serviceRows}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">Nearby</span>
        <div><h2>Also serving areas near ${esc(town.name)}</h2></div>
      </div>
      <div class="link-line">${nearbyLine}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="split ${dirA}">
      <div class="split-panel">
        ${panel(`Villa gate and driveway in ${town.name}, Algarve`)}
      </div>
      <div class="split-text">
        <span class="eyebrow">Get Started</span>
        <h2>Speak to AlgarveSecure about your property in ${esc(town.name)}</h2>
        <p class="lede">Call now to talk through cameras, alarms or smart home options — in English, with no confusion.</p>
        <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
      </div>
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
