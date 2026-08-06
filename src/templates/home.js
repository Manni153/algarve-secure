'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { regionGroups } = require('../data/towns');
const { esc, panel, renderPage } = require('./layout');

function renderHome() {
  const heroStats = site.trustStats
    .map((s) => `<div><span class="v">${esc(s.value)}</span>${esc(s.label)}</div>`)
    .join('');

  const indexList = site.trustSection
    .map(
      (t, i) => `<div>
        <span class="idx">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${esc(t.heading)}</h3><p>${esc(t.text)}</p></div>
      </div>`
    )
    .join('');

  const bentoTiles = services
    .map(
      (s, i) => `<a href="/${s.slug}" class="bento-tile${s.flagship ? ' flagship' : ''}">
        <span class="tile-tag">SERVICE ${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const directoryCols = regionGroups()
    .map(
      (g) => `<div class="directory-col">
        <div class="head">${esc(g.label.toUpperCase())}</div>
        ${g.towns.map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`).join('')}
      </div>`
    )
    .join('');

  const body = `
  <section class="hero">
    <div class="split">
      <div class="split-text">
        <span class="eyebrow">Security &amp; Smart Home Installation &middot; The Algarve</span>
        <h1>English-Speaking Security &amp; Smart Home Systems <em>for the Algarve</em></h1>
        <p class="lede">CCTV, alarms, access control and smart home automation — supplied, installed and explained in plain English for homeowners across the Algarve.</p>
        <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
        <div class="hero-stats">${heroStats}</div>
      </div>
      <div class="split-panel">
        ${panel('Modern Algarve villa exterior at dusk with discreet CCTV camera and smart lighting', { camera: true })}
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">01 — Why Us</span>
        <div><h2>A local installer that speaks your language</h2></div>
      </div>
      <div class="trust-split">
        <p class="pull-quote">Everything explained in English, from the first call to the finished install — not translated, not guessed at.</p>
        <div class="index-list">${indexList}</div>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">02 — Services</span>
        <div><h2>What we install</h2><p class="desc">From a single camera to a fully connected smart property, every system is planned around how you actually use the property.</p></div>
      </div>
      <div class="bento">${bentoTiles}</div>
    </div>
  </section>

  <section class="section-alt" id="areas">
    <div class="container">
      <div class="sec-head">
        <span class="sec-num">03 — Coverage</span>
        <div><h2>Serving homeowners across the Algarve</h2><p class="desc">From Sagres in the west to Vila Real de Santo António in the east.</p></div>
      </div>
      <div class="directory">${directoryCols}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="split reverse">
      <div class="split-panel">
        ${panel('Villa driveway gate with automated access control at dusk', { camera: false })}
      </div>
      <div class="split-text">
        <span class="eyebrow">Get Started</span>
        <h2>Ready to secure your property?</h2>
        <p class="lede">Call now to talk through cameras, alarms or smart home options for your property — in English, with no confusion.</p>
        <a href="${site.telHref}" class="btn btn-call btn-hero btn-icon-phone">${site.phoneDisplay}</a>
      </div>
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
