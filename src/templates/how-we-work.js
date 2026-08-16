'use strict';

const site = require('../data/site');
const { esc, heroIntro, renderPage } = require('./layout');

const stages = [
  {
    heading: 'Get in Touch',
    text: 'Call or message on WhatsApp and you\'re straight through to Rui — the same person whose team assesses, supplies and fits your system. Whichever way you reach out, there\'s no call centre and no waiting for a callback.',
  },
  {
    heading: 'Assessment',
    text: 'From that first conversation, Rui and his team work out what your property actually needs — camera positions, sensor coverage, or where a gate motor or access point makes sense. Depending on the job, that might happen on the call, from photos you send over, or with a site visit.',
  },
  {
    heading: 'Installation',
    text: 'Rui\'s own team installs and configures everything on-site — no subcontractors, so the people who scoped the job are the ones doing the work.',
  },
  {
    heading: 'Ongoing Support',
    text: 'After installation, you call the same number for support — questions about the app, adding a device later, or troubleshooting an alert. Algarve Smart Home stays the point of contact even after the on-site work is finished.',
  },
];

const faqs = [
  {
    q: 'Do I need to contact the installation partner separately?',
    a: 'No. Whether you call or message on WhatsApp, you\'re speaking with Rui and his team from the first message through to support afterwards — there\'s no separate installer to loop in.',
  },
  {
    q: 'Does this change how the installation is carried out?',
    a: 'No. The property assessment, the installation itself and the equipment used are what you\'d expect from a dedicated local installer — coordinating through Algarve Smart Home just means one consistent point of contact across the whole process.',
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

  const hero = heroIntro({
    breadcrumb: [{ label: 'Home', href: '/' }, { label: 'How We Work' }],
    h1Text: 'How Algarve Smart Home Works',
    headlineHtml: 'From first call to finished install — no surprises along the way.',
    subtext: 'A straightforward look at how an enquiry turns into a working system.',
    ctaNote: 'Start with a call — see exactly how it works.',
    noMedia: true,
    dark: true,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="rs-block"><div class="narrow" style="margin: 0 auto;">
        <span class="eyebrow">What Algarve Smart Home Does</span>
        <h2>A marketing service, connecting you to local installers</h2>
        <p><strong>Algarve Smart Home is a marketing service connecting Algarve homeowners with local, experienced installation partners.</strong> In practice, that means Algarve Smart Home is your first point of contact — the phone number and WhatsApp link on this site — and the team that actually assesses, supplies and installs the system on your property is a local partner working across the region.</p>
        <p>That doesn't change what happens on the ground: the same conversation about your property, the same site assessment, the same equipment installed and configured properly. It just means there's one consistent number to call, whether you're getting a quote, arranging an install, or following up with a question afterwards.</p>
      </div></div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block">
        <div class="section-head">
          <span class="eyebrow">The Process</span>
          <h2>From enquiry to installation</h2>
          <p class="lede">Four stages, the same point of contact throughout.</p>
        </div>
        <div class="pillar-list">${stageItems}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="rs-block"><div class="narrow" style="margin: 0 auto;">
        <span class="eyebrow">Why It's Set Up This Way</span>
        <h2>One number, coverage across the whole region</h2>
        <p>One number, one WhatsApp — both connect you straight to Rui and his team, the same people who cover the whole Algarve themselves, from Sagres to Vila Real de Santo António. There's no network of different subcontractors depending on where your property is; it's one consistent, experienced team either way.</p>
        <p>For you, the practical difference is small: one number to call, one point of contact for support, and a system installed by people who know the area.</p>
      </div></div>
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

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk through what your property needs</h2>
      <p class="lede">Call or WhatsApp now — in English, with no confusion about who you're talking to.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'How We Work', item: `${site.baseUrl}/how-we-work` },
    ],
  };

  return renderPage({
    path: '/how-we-work',
    bodyHtml: body,
    schema: [breadcrumbSchema, faqSchema],
    mainClass: 'page-lagos-rs page-how-we-work',
    useHomeHeader: true,
  });
}

module.exports = renderHowWeWork;
