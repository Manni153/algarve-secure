'use strict';

const site = require('../data/site');
const { heroIntro, renderPage } = require('./layout');

function renderContact() {
  const hero = heroIntro({
    alt: 'Phone and notepad on a desk beside an Algarve property photo',
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Contact' }],
    h1Text: 'Contact Algarve Smart Home',
    headlineHtml: 'Call or WhatsApp — get a straight answer today.',
    subtext: 'Call now for the fastest response, or message us on WhatsApp.',
    ctaNote: 'Fastest way to a clear answer.',
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Get in Touch</span>
        <h2>Call or WhatsApp us directly</h2>
        <p class="lede">The fastest way to a straight answer — no forms, no waiting on email.</p>
      </div>
      <div class="contact-direct">
        <div class="contact-direct-card">
          <h3>Call Us</h3>
          <span class="big-phone">${site.phoneDisplay}</span>
          <a href="${site.telHref}" class="btn btn-block btn-icon">${site.phoneDisplay}</a>
        </div>
        <div class="contact-direct-card">
          <h3>WhatsApp</h3>
          <p>Message us directly for a quick reply.</p>
          <a href="${site.whatsappHref}" class="btn btn-outline btn-block" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
  `;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${site.baseUrl}/contact` },
    ],
  };

  return renderPage({
    path: '/contact',
    bodyHtml: body,
    schema: [breadcrumbSchema],
  });
}

module.exports = renderContact;
