'use strict';

const site = require('../data/site');
const { esc, placeholder, heroPhoto, renderPage } = require('./layout');

const pillars = [
  {
    heading: 'English From the First Call',
    text: 'Every conversation — from the first enquiry to the final walkthrough — happens in clear English. No translation apps, no back-and-forth over language, just a straightforward conversation about what your property needs.',
  },
  {
    heading: 'We Know Algarve Properties',
    text: 'Villas with pools and long boundary walls, apartments in gated blocks, holiday rentals that sit empty between guests — property types across the Algarve differ, and systems are planned around the property rather than fitted from a standard template.',
  },
  {
    heading: 'Supplied and Installed as One Job',
    text: 'Equipment is sourced and fitted as a single job, so cameras, alarms and smart home devices are set up to work together properly, rather than being pieced together from separate suppliers.',
  },
  {
    heading: 'Support That Doesn’t Disappear After Install',
    text: 'Questions about how to use the app, add a new device, or troubleshoot an alert don’t stop the day the installation is finished — you can call the same number you called to begin with.',
  },
];

function renderAbout() {
  const pillarItems = pillars
    .map(
      (p, i) => `<div class="pillar">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${esc(p.heading)}</h3><p>${esc(p.text)}</p></div>
      </div>`
    )
    .join('');

  const trustCards = site.trustSection
    .map(
      (t) => `<div class="card">
        <div class="icon-dot"></div>
        <h3>${esc(t.heading)}</h3>
        <p>${esc(t.text)}</p>
      </div>`
    )
    .join('');

  const hero = heroPhoto({
    alt: 'AlgarveSecure installer fitting an outdoor security camera on a villa wall',
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'About' }],
    h1Html: 'About <em>AlgarveSecure</em>',
    lede: "A local installer built around one idea: security and smart home systems should be easy to understand, whoever you are and wherever you're from.",
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">Who We Are</span>
          <h2>Built for English-speaking homeowners in the Algarve</h2>
          <p>AlgarveSecure installs CCTV, alarms, access control, gate automation, fire detection, networking and smart home systems for homeowners across the Algarve — many of whom split their time between Portugal and the UK, Ireland, the Netherlands or Germany.</p>
          <p>That back-and-forth is exactly why the service is built the way it is: clear English communication, systems you can check on remotely, and support that's easy to reach when you need it, whether you're at the property or on the other side of Europe.</p>
        </div>
        <div class="two-col-media">
          ${placeholder('Close-up of installer wiring a CCTV camera bracket', { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Why Homeowners Choose Us</span>
        <h2>What you can expect</h2>
      </div>
      <div class="trust-grid">${trustCards}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">How We Work</span>
        <h2>What makes AlgarveSecure different</h2>
      </div>
      <div class="pillar-list">${pillarItems}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk to AlgarveSecure about your property</h2>
      <p class="lede">Call now to discuss cameras, alarms or smart home options — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  return renderPage({
    path: '/about',
    metaTitle: 'About AlgarveSecure | English-Speaking Security Installer, Algarve',
    metaDescription:
      'AlgarveSecure installs CCTV, alarms and smart home systems for English-speaking homeowners across the Algarve. Call +351 923 272 806.',
    bodyHtml: body,
  });
}

module.exports = renderAbout;
