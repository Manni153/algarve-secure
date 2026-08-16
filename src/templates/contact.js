'use strict';

const site = require('../data/site');
const { heroIntro, renderPage, breadcrumbListSchema } = require('./layout');

function renderContact() {
  const hero = heroIntro({
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Contact' }],
    h1Text: 'Contact Algarve Smart Home',
    headlineHtml: 'Call or WhatsApp — get a straight answer today.',
    subtext: 'Call now for the fastest response, or message us on WhatsApp.',
    ctaNote: 'Fastest way to a clear answer.',
    noMedia: true,
    dark: true,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="rs-block"><div class="section-head">
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
      </div></div>
    </div>
  </section>
  `;

  const breadcrumbSchema = breadcrumbListSchema([
    { name: 'Home', item: `${site.baseUrl}/` },
    { name: 'Contact', item: `${site.baseUrl}/contact` },
  ]);

  return renderPage({
    path: '/contact',
    bodyHtml: body,
    schema: [breadcrumbSchema],
    title: 'Contact Algarve Smart Home | Call or WhatsApp Today',
    metaDescription: 'Call or WhatsApp Algarve Smart Home for a fast, straightforward answer about CCTV, alarms, access control or smart home systems — no forms, no waiting.',
    mainClass: 'page-lagos-rs page-contact',
    useHomeHeader: true,
  });
}

module.exports = renderContact;
