'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { regionGroups } = require('../data/towns');
const { esc, placeholder, heroPhoto, renderPage } = require('./layout');

function renderService(service) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const includedList = service.included
    .map((item) => `<li>${esc(item)}</li>`)
    .join('');

  const extraCards = (service.extraSections || [])
    .map(
      (sec) => `<div class="card">
        <h3>${esc(sec.heading)}</h3>
        <p>${esc(sec.text)}</p>
      </div>`
    )
    .join('');

  const scenarioItems = (service.scenarios || [])
    .map(
      (s, i) => `<div class="pillar">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${esc(s.heading)}</h3><p>${esc(s.text)}</p></div>
      </div>`
    )
    .join('');

  const propertyTypeCards = (service.propertyTypes || [])
    .map(
      (p) => `<div class="card">
        <h3>${esc(p.type)}</h3>
        <p>${esc(p.text)}</p>
      </div>`
    )
    .join('');

  const faqItems = (service.faqs || [])
    .map(
      (f) => `<div class="faq-item">
        <h3>${esc(f.q)}</h3>
        <p>${esc(f.a)}</p>
      </div>`
    )
    .join('');

  const faqSchema = service.faqs
    ? JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    : '';

  // Every service page links to all 22 town pages using a "[Service] in
  // [Town]" anchor text pattern, grouped by region for scannability.
  const townLinksHtml = regionGroups()
    .map(
      (g) => `<div class="directory-col">
        <div class="head">${esc(g.label.toUpperCase())}</div>
        ${g.towns.map((t) => `<a href="/${t.slug}">${esc(service.name)} in ${esc(t.name)}</a>`).join('')}
      </div>`
    )
    .join('');

  const otherServiceCards = otherServices
    .map(
      (s) => `<a href="/${s.slug}" class="card${s.flagship ? ' flagship' : ''}">
        ${s.flagship ? '<span class="badge">Flagship Service</span>' : ''}
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`
    )
    .join('');

  const hero = heroPhoto({
    alt: service.imageAlt,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: service.name }],
    h1Html: esc(service.h1),
    lede: service.heroSubhead,
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">What's Included</span>
          <h2>What our ${esc(service.name)} service covers</h2>
          <p>${esc(service.intro)}</p>
          <ul class="check-list mt-32">${includedList}</ul>
        </div>
        <div class="two-col-media">
          ${placeholder(service.imageAlt, { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="two-col reverse">
        <div class="two-col-media">
          ${placeholder(`${service.name} in use at an Algarve property`, { ratio: 'tall' })}
        </div>
        <div class="two-col-text">
          <span class="eyebrow">Why It Matters</span>
          <h2>Built for owners who aren't always on-site</h2>
          <p>${esc(service.whyItMatters)}</p>
          <a href="${site.telHref}" class="btn btn-icon mt-32">${site.phoneDisplay}</a>
        </div>
      </div>
    </div>
  </section>

  ${
    scenarioItems
      ? `<section>
          <div class="container">
            <div class="two-col">
              <div class="two-col-text">
                <span class="eyebrow">Real-World Scenarios</span>
                <h2>Where ${esc(service.name.toLowerCase())} actually gets used</h2>
                <div class="pillar-list mt-32">${scenarioItems}</div>
              </div>
              <div class="two-col-media">
                ${placeholder(service.scenarioImageAlt, { ratio: 'tall' })}
              </div>
            </div>
          </div>
        </section>`
      : ''
  }

  ${
    propertyTypeCards
      ? `<section class="section-alt">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">By Property Type</span>
              <h2>How this applies to your property</h2>
              <p class="lede">The same service, sized differently depending on what you own.</p>
            </div>
            <div class="card-grid cols-2">${propertyTypeCards}</div>
          </div>
        </section>`
      : ''
  }

  ${
    extraCards
      ? `<section>
          <div class="container">
            <div class="two-col reverse">
              <div class="two-col-media">
                ${placeholder(service.detailImageAlt, { ratio: 'tall' })}
              </div>
              <div class="two-col-text">
                <span class="eyebrow">In Detail</span>
                <h2>${esc(service.name)}, done properly</h2>
              </div>
            </div>
            <div class="card-grid cols-2 mt-32">${extraCards}</div>
          </div>
        </section>`
      : ''
  }

  ${
    faqItems
      ? `<section class="section-alt">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">Questions</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div class="faq-list">${faqItems}</div>
          </div>
        </section>
        ${faqSchema ? `<script type="application/ld+json">${faqSchema}</script>` : ''}`
      : ''
  }

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk through your ${esc(service.name.toLowerCase())} options</h2>
      <p class="lede">Call now and we'll talk you through what makes sense for your property — in English, with no jargon.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Where We Work</span>
        <h2>${esc(service.name)} across the Algarve</h2>
        <p class="lede">Installed for homeowners in every town we cover.</p>
      </div>
      <div class="directory">${townLinksHtml}</div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Explore</span>
        <h2>More of what we install</h2>
      </div>
      <div class="card-grid cols-3">${otherServiceCards}</div>
    </div>
  </section>
  `;

  return renderPage({
    path: `/${service.slug}`,
    metaTitle: service.metaTitle,
    metaDescription: service.metaDescription,
    bodyHtml: body,
  });
}

module.exports = renderService;
