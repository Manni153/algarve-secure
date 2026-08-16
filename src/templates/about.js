'use strict';

const site = require('../data/site');
const { esc, rich, heroIntro, renderPage } = require('./layout');

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

  const hero = heroIntro({
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'About' }],
    h1Text: 'About Algarve Smart Home',
    headlineHtml: 'A local installer that explains everything in plain English.',
    subtext: 'Built around one idea: security systems should be easy to understand, whoever you are.',
    ctaNote: 'Questions welcome — no pitch, just answers.',
    noMedia: true,
    dark: true,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="rs-block"><div class="narrow" style="margin: 0 auto;">
        <span class="eyebrow">Who We Are</span>
        <h2>Built for English-speaking homeowners in the Algarve</h2>
        <p>${rich('Algarve Smart Home installs <a href="/cctv-installation">CCTV</a>, <a href="/alarm-systems">alarms</a>, <a href="/access-control">access control</a>, <a href="/gate-automation">gate automation</a>, <a href="/fire-detection">fire detection</a>, <a href="/home-networking">networking</a> and <a href="/smart-home-automation">smart home systems</a> for homeowners across the Algarve — many of whom split their time between Portugal and the UK, Ireland, the Netherlands or Germany.')}</p>
        <p>That back-and-forth is exactly why the service is built the way it is: clear English communication, systems you can check on remotely, and support that's easy to reach when you need it, whether you're at the property or on the other side of Europe.</p>
      </div></div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block">
        <div class="section-head">
          <span class="eyebrow">Why Homeowners Choose Us</span>
          <h2>What makes Algarve Smart Home different</h2>
        </div>
        <div class="pillar-list">${pillarItems}</div>
      </div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk to Algarve Smart Home about your property</h2>
      <p class="lede">Call now to discuss cameras, alarms or smart home options — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${site.baseUrl}/about` },
    ],
  };

  return renderPage({
    path: '/about',
    bodyHtml: body,
    schema: [breadcrumbSchema],
    mainClass: 'page-lagos-rs page-about',
    useHomeHeader: true,
  });
}

module.exports = renderAbout;
