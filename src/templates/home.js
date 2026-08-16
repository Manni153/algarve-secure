'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { regionGroups } = require('../data/towns');
const { esc, rich, placeholder, heroIntro, reassuranceBand, renderPage, cardIcon, serviceIcon } = require('./layout');

function renderHome() {
  const trustCards = site.trustSection
    .map(
      (t) => `<div class="card">
        <div class="icon-dot">${cardIcon(t.icon)}</div>
        <h3>${esc(t.heading)}</h3>
        <p>${esc(t.text)}</p>
      </div>`
    )
    .join('');

  const serviceCards = services
    .map(
      (s) => `<a href="/${s.slug}" class="card${s.flagship ? ' flagship' : ''}">
        <div class="card-icon-block">${serviceIcon(s.slug)}</div>
        ${placeholder(s.imageAlt, { ratio: 'wide' })}
        ${s.flagship ? '<span class="badge">Flagship Service</span>' : ''}
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link"><span class="card-link-label">Learn more</span> <span class="card-link-arrow-text" aria-hidden="true">&rarr;</span><svg class="card-link-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.25"/><path d="M9.2 8.3 13.4 12 9.2 15.7"/></svg></span>
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const hero = heroIntro({
    alt: 'Modern Algarve villa at dusk with a discreet CCTV camera mounted above illuminated glass doors',
    h1Text: 'Security & Smart Home Installation in the Algarve',
    // "Smart Home" never splits across lines (nbsp, all breakpoints); the
    // <br> is desktop-only (see .hero-kicker-break in main.css) so it
    // forces a clean two-line break there without affecting mobile's
    // natural wrap. Wording/punctuation is byte-identical to h1Text above
    // — no copy change, purely a line-break placement.
    h1Html: 'Security &amp; Smart&nbsp;Home Installation<br class="hero-kicker-break"> in the Algarve',
    headlineHtml: 'Keep your Algarve property secure &mdash; even when you&rsquo;re away',
    subtext: 'CCTV, alarms and smart home systems — installed and explained in plain English.',
    trustStats: site.trustStats,
    desktopStatsText: site.heroStatsDesktop,
    mobileStatsText: site.heroStatsShort,
    // Full-bleed hero, two dedicated images (branch: claude/hero-
    // fullbleed-mobile-tablet, extending claude/hero-fullbleed-desktop):
    // desktop (1025px+) keeps its own wide (2048x1152) crop of the villa;
    // mobile and tablet (<=1024px, both breakpoints together) share ONE
    // portrait (1632x2048) image composed for that aspect ratio from the
    // start, not cropped from the desktop photo — see heroIntro in
    // layout.js for the single 1025px <picture> breakpoint that splits
    // them. This replaces the previous round's door-vs-camera crop
    // tradeoff entirely: the portrait composition keeps both comfortably
    // in frame at cover on every mobile/tablet width that's been tested
    // (390-820px), where the old desktop-photo crop geometrically could
    // not fit both at once.
    image: {
      mobileWebp: '/assets/images/hero-security-mobile.webp',
      mobileJpg: '/assets/images/hero-security-mobile.jpg',
      desktopWebp: '/assets/images/hero-security-desktop.webp',
      desktopJpg: '/assets/images/hero-security-desktop.jpg',
      objectPosition: '90% 50%',
    },
    twoColDesktop: true,
  });

  const reassurance = reassuranceBand({
    heading: 'No pressure, no hard sell — just a straight answer.',
  });

  const body = `
  <div class="hero-viewport">
    ${hero}
    ${reassurance}
  </div>

  <section id="services">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">What We Install</span>
        <h2>Security &amp; smart home services</h2>
        <p class="lede">From a single camera to a fully connected smart property, every system is planned around how you actually use it.</p>
      </div>
      <div class="card-grid cols-3">${serviceCards}</div>
      <div class="carousel-progress" aria-hidden="true"><div class="carousel-progress-fill"></div></div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block">
        <div class="section-head">
          <span class="eyebrow">The Algarve, in Practice</span>
          <h2>Security and smart home installation for English-speaking homeowners</h2>
        </div>
        <div class="narrow" style="margin: 0 auto;">
          <h3>A Region Where Properties Sit Empty for Months at a Time</h3>
          <p>A large share of homes across the Algarve are only occupied for part of the year. Owners split their time between the region and the UK, Ireland, the Netherlands or Germany, and a property can sit unoccupied for weeks or months between visits. That pattern shapes what actually matters here: a camera system that can be checked from a phone anywhere in Europe, an alarm that can be armed and disarmed remotely, and a gate that doesn't need someone standing at it to open. Security in the Algarve isn't primarily about occasional break-ins — it's about knowing a property is fine while nobody is there to check on it in person.</p>

          <h3>One Point of Contact, From CCTV to Smart Home Automation</h3>
          <p>${rich('Algarve Smart Home covers seven services — <a href="/cctv-installation">CCTV</a>, <a href="/alarm-systems">alarm systems</a>, <a href="/access-control">access control</a>, <a href="/gate-automation">gate automation</a>, <a href="/fire-detection">fire detection</a>, <a href="/home-networking">home networking</a> and <a href="/smart-home-automation">smart home automation</a> — coordinated through a single phone number rather than split across separate suppliers. In practice, that matters because these systems overlap: a camera feed and an alarm\'s arm/disarm status often live in the same app, a gate motor connects into the same access control setup as a video intercom, and a network that hasn\'t been planned properly is one of the most common reasons a security system becomes unreliable. Planning them together, from one call, avoids the gaps that show up when each system is bought and installed separately.')}</p>

          <h3>Built for Villas, Apartments and Everything In Between</h3>
          <p>Property types across the Algarve vary widely, and a system that works for a hillside villa with a long driveway doesn't automatically make sense for an apartment with a single shared entrance. A villa typically needs full perimeter coverage, an automated gate and standalone alarm sensors; an apartment usually needs access control and a video intercom at the building's own entrance, layered on top of whatever the building itself already has; a holiday rental raises different questions again, mostly around managing access between guests without physical keys changing hands. Every install starts from the property itself rather than a fixed package, in a first conversation that happens entirely in English.</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block rs-block--overhang">
        <div class="section-head">
          <span class="eyebrow">Why Homeowners Choose Us</span>
          <h2>A local installer that speaks your language</h2>
          <p class="lede">Straightforward communication and one team handling everything from planning to install.</p>
        </div>
        <div class="trust-grid">${trustCards}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block">
        <div class="section-head">
          <span class="eyebrow">How It Works</span>
          <h2>From first call to finished install</h2>
          <p class="lede">Every step is handled as one connected process, so nothing gets lost between a quote and the equipment actually going in.</p>
        </div>
        <div class="pillar-list">${processSteps}</div>
      </div>
    </div>
  </section>

  <section id="areas">
    <div class="container">
      <div class="rs-block">
        <div class="section-head">
          <span class="eyebrow">Where We Work</span>
          <h2>Serving homeowners across the Algarve</h2>
          <p class="lede">From Sagres in the west to Vila Real de Santo António in the east.</p>
        </div>
        <div class="directory">${directoryCols}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block">
        <div class="section-head">
          <span class="eyebrow">Questions</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div class="faq-list">${faqItems}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-band rs-block rs-block--dark">
        <span class="eyebrow">Get Started</span>
        <h2>Ready to secure your property?</h2>
        <p class="lede">Call now to talk through cameras, alarms or smart home options for your property — in English, with no confusion.</p>
        <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
      </div>
    </div>
  </section>
  `;

  return renderPage({
    path: '/',
    bodyHtml: body,
    schema: [faqSchema],
    mainClass: 'page-home',
    title: 'Security & Automation in the Algarve | Algarve Smart Home',
    metaDescription: 'CCTV, alarms and smart home systems for properties across the Algarve, installed by a locally based, 100% English-speaking team — call today for a quote.',
  });
}

module.exports = renderHome;
