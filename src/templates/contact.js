'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { esc, renderPage, renderBreadcrumb } = require('./layout');

function renderContact() {
  const serviceOptions = services
    .map((s) => `<option value="${esc(s.slug)}">${esc(s.name)}</option>`)
    .join('');

  const body = `
  <section class="hero hero-plain">
    <div class="container" style="max-width:720px;">
      ${renderBreadcrumb([{ label: 'Home', href: '/' }, { label: 'Contact' }])}
      <h1>Contact <em>AlgarveSecure</em></h1>
      <p class="lede">Call or WhatsApp for the fastest response, or send a few details below and we'll get back to you.</p>
    </div>
  </section>

  <section style="padding-top:0;">
    <div class="container">
      <div class="two-col">
        <div class="contact-direct">
          <div class="contact-direct-card">
            <h3>Call Us</h3>
            <span class="big-phone">${site.phoneDisplay}</span>
            <a href="${site.telHref}" class="btn btn-call btn-block btn-icon-phone">${site.phoneDisplay}</a>
          </div>
          <div class="contact-direct-card">
            <h3>WhatsApp</h3>
            <p>Message us directly for a quick reply.</p>
            <a href="${site.whatsappHref}" class="btn btn-outline btn-block" target="_blank" rel="noopener">Chat on WhatsApp</a>
          </div>
          <div class="contact-direct-card">
            <h3>Email</h3>
            <p>Prefer email? Reach us at:</p>
            <a href="mailto:${esc(site.email)}" class="btn btn-outline btn-block">${esc(site.email)}</a>
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
          <button type="submit" class="btn btn-call btn-block">Send Message</button>
          <p class="form-note">For a faster response, call or WhatsApp us directly using the details on the left.</p>
        </form>
      </div>
    </div>
  </section>
  `;

  return renderPage({
    path: '/contact',
    metaTitle: 'Contact AlgarveSecure | Security & Smart Home Installer, Algarve',
    metaDescription:
      'Get in touch with AlgarveSecure about CCTV, alarms or smart home installation across the Algarve. Call +351 923 272 806.',
    bodyHtml: body,
  });
}

module.exports = renderContact;
