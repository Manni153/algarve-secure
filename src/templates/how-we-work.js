'use strict';

const site = require('../data/site');
const { esc, placeholder, heroPhoto, renderPage } = require('./layout');

const stages = [
  {
    heading: 'Get in Touch',
    text: 'You call or message AlgarveSecure directly — the same phone number and WhatsApp link you see everywhere on this site. That first conversation happens in English and covers the basics: what the property is, what you\'re trying to cover, and roughly what you have in mind.',
  },
  {
    heading: 'Assessment',
    text: 'Details from that conversation are passed to the local partner team who carry out the work in your area. Depending on the property, that can mean a site visit, or working from photos and a description you provide, to work out camera positions, sensor coverage, or where a gate motor or access point makes sense.',
  },
  {
    heading: 'Installation',
    text: 'The local partner team installs and configures the equipment on-site. Because the same team supplies and fits it, the finished system is set up to work together — cameras, alarms and access control aren\'t pieced together from separate, disconnected jobs.',
  },
  {
    heading: 'Ongoing Support',
    text: 'After installation, you call the same number for support — questions about the app, adding a device later, or troubleshooting an alert. AlgarveSecure stays the point of contact even after the on-site work is finished.',
  },
];

const faqs = [
  {
    q: 'Do I need to contact the installation partner separately?',
    a: 'No. You contact AlgarveSecure, by phone or WhatsApp, for enquiries, quotes and ongoing support. The local partner team handles the on-site work, but AlgarveSecure stays the point of contact throughout.',
  },
  {
    q: 'Does this change how the installation is carried out?',
    a: 'No. The property assessment, the installation itself and the equipment used are what you\'d expect from a dedicated local installer — coordinating through AlgarveSecure just means one consistent point of contact across the whole process.',
  },
  {
    q: 'Which areas does this cover?',
    a: 'The whole Algarve, from Sagres in the west to Vila Real de Santo António in the east. See the areas we cover for the full list of towns.',
  },
];

function renderHowWeWork() {
  const stageItems = stages
    .map(
      (s, i) => `<div class="pillar">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${esc(s.heading)}</h3><p>${esc(s.text)}</p></div>
      </div>`
    )
    .join('');

  const faqItems = faqs
    .map(
      (f) => `<div class="faq-item">
        <h3>${esc(f.q)}</h3>
        <p>${esc(f.a)}</p>
      </div>`
    )
    .join('');

  const hero = heroPhoto({
    alt: 'Phone and notepad with an Algarve property photo and site plan on a desk',
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'How We Work' }],
    h1Html: 'How <em>AlgarveSecure</em> Works',
    lede: 'A straightforward look at how an enquiry turns into a working system on your property.',
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">What AlgarveSecure Does</span>
          <h2>A marketing service, connecting you to local installers</h2>
          <p><strong>AlgarveSecure is a marketing service connecting Algarve homeowners with local, experienced installation partners.</strong> In practice, that means AlgarveSecure is your first point of contact — the phone number and WhatsApp link on this site — and the team that actually assesses, supplies and installs the system on your property is a local partner working across the region.</p>
          <p>That doesn't change what happens on the ground: the same conversation about your property, the same site assessment, the same equipment installed and configured properly. It just means there's one consistent number to call, whether you're getting a quote, arranging an install, or following up with a question afterwards.</p>
        </div>
        <div class="two-col-media">
          ${placeholder('Laptop showing a property site plan alongside a phone with a messaging app open', { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">The Process</span>
        <h2>From enquiry to installation</h2>
        <p class="lede">Four stages, the same point of contact throughout.</p>
      </div>
      <div class="pillar-list">${stageItems}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="two-col reverse">
        <div class="two-col-media">
          ${placeholder('Map-style overview of Algarve towns with pins marking coverage areas', { ratio: 'tall' })}
        </div>
        <div class="two-col-text">
          <span class="eyebrow">Why It's Set Up This Way</span>
          <h2>One number, coverage across the whole region</h2>
          <p>Coordinating with local installation partners means AlgarveSecure can cover towns across the whole Algarve — from Sagres to Vila Real de Santo António — through people who already work in those areas day-to-day, rather than one small team trying to reach every property in the region alone.</p>
          <p>For you, the practical difference is small: one number to call, one point of contact for support, and a system installed by people who know the area.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Questions</span>
        <h2>Frequently asked questions</h2>
      </div>
      <div class="faq-list">${faqItems}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk through what your property needs</h2>
      <p class="lede">Call or WhatsApp now — in English, with no confusion about who you're talking to.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  return renderPage({
    path: '/how-we-work',
    metaTitle: 'How AlgarveSecure Works | Security & Smart Home Installation, Algarve',
    metaDescription:
      'How AlgarveSecure connects Algarve homeowners with local installation partners for CCTV, alarms and smart home systems. Call +351 923 272 806.',
    bodyHtml: body,
  });
}

module.exports = renderHowWeWork;
