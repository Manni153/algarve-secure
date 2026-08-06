'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { regionGroups } = require('../data/towns');
const { esc, heroPhoto, renderPage } = require('./layout');

function renderHome() {
  const trustCards = site.trustSection
    .map(
      (t) => `<div class="card">
        <div class="icon-dot"></div>
        <h3>${esc(t.heading)}</h3>
        <p>${esc(t.text)}</p>
      </div>`
    )
    .join('');

  const serviceCards = services
    .map(
      (s) => `<a href="/${s.slug}" class="card${s.flagship ? ' flagship' : ''}">
        ${s.flagship ? '<span class="badge">Flagship Service</span>' : ''}
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

  const processSteps = site.process
    .map(
      (p, i) => `<div class="pillar">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${esc(p.heading)}</h3><p>${esc(p.text)}</p></div>
      </div>`
    )
    .join('');

  const faqItems = site.faqs
    .map(
      (f) => `<div class="faq-item">
        <h3>${esc(f.q)}</h3>
        <p>${esc(f.a)}</p>
      </div>`
    )
    .join('');

  const faqSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });

  const hero = heroPhoto({
    alt: 'Modern Algarve villa exterior at golden hour with discreet CCTV camera visible on the wall',
    eyebrow: 'Security &amp; Smart Home Installation &middot; The Algarve',
    h1Html: 'English-Speaking Security &amp; Smart Home Systems <em>for the Algarve</em>',
    lede: 'CCTV, alarms, access control and smart home automation — supplied, installed and explained in plain English for homeowners across the Algarve.',
    trustStats: site.trustStats,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Why Homeowners Choose Us</span>
        <h2>A local installer that speaks your language</h2>
        <p class="lede">Straightforward communication and one team handling everything from planning to install.</p>
      </div>
      <div class="trust-grid">${trustCards}</div>
    </div>
  </section>

  <section class="section-alt" id="services">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">What We Install</span>
        <h2>Security &amp; smart home services</h2>
        <p class="lede">From a single camera to a fully connected smart property, every system is planned around how you actually use it.</p>
      </div>
      <div class="card-grid cols-3">${serviceCards}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">How It Works</span>
        <h2>From first call to finished install</h2>
        <p class="lede">Every step is handled as one connected process, so nothing gets lost between a quote and the equipment actually going in.</p>
      </div>
      <div class="pillar-list">${processSteps}</div>
    </div>
  </section>

  <section class="section-alt" id="areas">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Where We Work</span>
        <h2>Serving homeowners across the Algarve</h2>
        <p class="lede">From Sagres in the west to Vila Real de Santo António in the east.</p>
      </div>
      <div class="directory">${directoryCols}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Questions</span>
        <h2>Frequently asked questions</h2>
      </div>
      <div class="faq-list">${faqItems}</div>
    </div>
  </section>
  <script type="application/ld+json">${faqSchema}</script>

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Ready to secure your property?</h2>
      <p class="lede">Call now to talk through cameras, alarms or smart home options for your property — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
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
