'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { esc, heroIntro, renderPage } = require('./layout');

function renderContact() {
  const serviceOptions = services
    .map((s) => `<option value="${esc(s.slug)}">${esc(s.name)}</option>`)
    .join('');

  const hero = heroIntro({
    alt: 'Phone and notepad on a desk beside an Algarve property photo',
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'Contact' }],
    h1Text: 'Contact Algarve Smart Home',
    headlineHtml: 'Call or WhatsApp — get a straight answer today.',
    subtext: "Send a few details and hear back quickly, or call now for the fastest response.",
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="section-head left">
        <span class="eyebrow">Get in Touch</span>
        <h2>Call, WhatsApp or send a few details</h2>
      </div>
      <div class="two-col">
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

        <form class="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="company">
          <input type="hidden" name="form-name" value="contact">
          <p style="position:absolute;left:-9999px;" aria-hidden="true">
            <label>Leave this field blank<input name="company" tabindex="-1" autocomplete="off"></label>
          </p>

          <div class="form-row">
            <label for="name">Full Name</label>
            <input id="name" name="name" type="text" required autocomplete="name">
          </div>
          <div class="form-row">
            <label for="email">Email Address</label>
            <input id="email" name="email" type="email" required autocomplete="email">
          </div>
          <div class="form-row">
            <label for="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" autocomplete="tel">
          </div>
          <div class="form-row">
            <label for="town">Town / Area</label>
            <input id="town" name="town" type="text" placeholder="e.g. Lagos, Albufeira, Tavira...">
          </div>
          <div class="form-row">
            <label for="service">Service You're Interested In</label>
            <select id="service" name="service">
              <option value="">Not sure yet</option>
              ${serviceOptions}
            </select>
          </div>
          <div class="form-row">
            <label for="message">Message</label>
            <textarea id="message" name="message" required placeholder="Tell us a little about your property and what you need..."></textarea>
          </div>
          <button type="submit" class="btn btn-block">Send Message</button>
          <p class="form-note">For a faster response, call or WhatsApp us directly using the details on the left.</p>
        </form>
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
