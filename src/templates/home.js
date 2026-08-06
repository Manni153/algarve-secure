'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { towns } = require('../data/towns');
const { esc, placeholder, renderPage } = require('./layout');

function renderHome() {
  const trustStats = site.trustStats
    .map(
      (s) => `<div class="trust-stat"><span class="value">${esc(s.value)}</span><span class="label">${esc(s.label)}</span></div>`
    )
    .join('');

  const trustCards = site.trustSection
    .map(
      (t, i) => `<div class="feature-card">
        <div class="icon-badge">${i + 1}</div>
        <h3>${esc(t.heading)}</h3>
        <p>${esc(t.text)}</p>
      </div>`
    )
    .join('');

  const serviceCards = services
    .map(
      (s) => `<a href="/${s.slug}" class="service-card">
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const townChips = towns
    .map((t) => `<a href="/${t.slug}" class="town-chip">${esc(t.name)}</a>`)
    .join('');

  const body = `
  <section class="hero">
    <div class="container">
      <span class="eyebrow">Security &amp; Smart Home Installation &middot; The Algarve</span>
      <h1>English-Speaking Security &amp; Smart Home Systems for the Algarve</h1>
      <p class="lede">CCTV, alarms, access control and smart home automation — supplied, installed and explained in plain English for homeowners across the Algarve.</p>
      <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone hero-cta">${site.phoneDisplay}</a>
      <div class="trust-stats">${trustStats}</div>
      <div class="hero-image-slot">
        ${placeholder('[Placeholder: Modern Algarve villa exterior with discreet CCTV camera and smart lighting]', 'ratio-wide')}
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Why Homeowners Choose Us</span>
        <h2>A Local Installer That Speaks Your Language</h2>
        <p class="lede">Straightforward communication and one team handling everything from planning to install.</p>
      </div>
      <div class="grid-3">${trustCards}</div>
    </div>
  </section>

  <section id="services">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">What We Install</span>
        <h2>Security &amp; Smart Home Services</h2>
        <p class="lede">From a single camera to a fully connected smart property, every system is planned around how you actually use the property.</p>
      </div>
      <div class="service-grid">${serviceCards}</div>
    </div>
  </section>

  <section class="section-alt" id="areas">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Where We Work</span>
        <h2>Serving Homeowners Across the Algarve</h2>
        <p class="lede">From Sagres in the west to Vila Real de Santo António in the east, we install and support systems across the region.</p>
      </div>
      <div class="town-chip-grid">${townChips}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Ready to Secure Your Property?</h2>
      <p class="lede">Call now to talk through cameras, alarms or smart home options for your property — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  return renderPage({
    path: '/',
    metaTitle: 'AlgarveSecure | English-Speaking Security & Smart Home Installer, Algarve',
    metaDescription:
      'CCTV, alarms, access control and smart home automation for homeowners across the Algarve. English-speaking, local installer. Call +351 923 272 806.',
    bodyHtml: body,
  });
}

module.exports = renderHome;
