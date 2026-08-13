'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { regionGroups } = require('../data/towns');
const { esc, rich, placeholder, heroIntro, renderPage } = require('./layout');

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

  const commonProblemCards = (service.commonProblems || [])
    .map(
      (p) => `<div class="card">
        <h3>&ldquo;${esc(p.symptom)}&rdquo;</h3>
        <p>${rich(p.text)}</p>
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
        <p>${rich(f.a)}</p>
      </div>`
    )
    .join('');

  const deepDiveHtml = (service.deepDive || [])
    .map((d) => `<h3>${esc(d.heading)}</h3><p>${rich(d.text)}</p>`)
    .join('');

  // FAQPage answers must be plain text for the schema (no markup), so this
  // strips the same anchor tags that are rendered live in the page copy.
  const stripTags = (str) => String(str).replace(/<[^>]+>/g, '');

  const faqSchema = service.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) },
        })),
      }
    : null;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: `${service.name} in the Algarve`,
    description: stripTags(service.intro),
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Algarve, Portugal',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Algarve Smart Home',
      telephone: site.phoneTel,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: service.name, item: `${site.baseUrl}/${service.slug}` },
    ],
  };

  // Every service page still links to all 22 town pages, but as flowing,
  // regionally-framed sentences with town-name anchors rather than a
  // mechanical 22-item list of "[Service] in [Town]" entries.
  const groups = regionGroups();
  const linkList = (towns) => {
    const links = towns.map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`);
    if (links.length === 1) return links[0];
    return `${links.slice(0, -1).join(', ')} and ${links[links.length - 1]}`;
  };
  const west = groups.find((g) => g.key === 'west');
  const central = groups.find((g) => g.key === 'central');
  const east = groups.find((g) => g.key === 'east');
  const townLinksHtml = `
    <p>Across the <strong>West Algarve</strong>, ${esc(service.name.toLowerCase())} is installed in ${linkList(west.towns)}.</p>
    <p>In the <strong>Central Algarve</strong>, that coverage runs through ${linkList(central.towns)}.</p>
    <p>And along the <strong>East Algarve</strong>, it reaches ${linkList(east.towns)} — the full stretch to the Spanish border.</p>`;

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

  const hero = heroIntro({
    alt: service.imageAlt,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: service.name }],
    h1Text: service.h1,
    headlineHtml: esc(service.heroHeadline),
    subtext: service.heroTagline,
    ctaNote: service.ctaNote,
  });

  // Jump-link table of contents — only lists sections this service actually
  // has, so it stays accurate if a section is ever conditionally empty.
  const tocSections = [
    { id: 'included', label: "What's Included" },
    { id: 'why-it-matters', label: 'Why It Matters' },
    deepDiveHtml ? { id: 'in-depth', label: 'In Depth' } : null,
    scenarioItems ? { id: 'scenarios', label: 'Real-World Scenarios' } : null,
    commonProblemCards ? { id: 'common-problems', label: 'Common Problems' } : null,
    propertyTypeCards ? { id: 'property-types', label: 'By Property Type' } : null,
    extraCards ? { id: 'in-detail', label: 'In Detail' } : null,
    faqItems ? { id: 'faq', label: 'FAQ' } : null,
  ].filter(Boolean);

  const tocHtml = tocSections
    .map((t) => `<a href="#${t.id}">${esc(t.label)}</a>`)
    .join('');

  const body = `
  ${hero}

  <nav class="toc" aria-label="Page sections">
    <div class="container">
      <span class="toc-label">On this page</span>
      <div class="toc-links">${tocHtml}</div>
    </div>
  </nav>

  <section id="included">
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">What's Included</span>
          <h2>What our ${esc(service.name)} service covers</h2>
          <p>${rich(service.intro)}</p>
          <ul class="check-list mt-32">${includedList}</ul>
        </div>
        <div class="two-col-media">
          ${placeholder(service.imageAlt, { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt" id="why-it-matters">
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
    deepDiveHtml
      ? `<section id="in-depth">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">In Depth</span>
              <h2>How ${esc(service.name.toLowerCase())} actually works</h2>
            </div>
            <div class="narrow" style="margin: 0 auto;">${deepDiveHtml}</div>
          </div>
        </section>`
      : ''
  }

  ${
    scenarioItems
      ? `<section class="section-alt" id="scenarios">
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
    commonProblemCards
      ? `<section id="common-problems">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">Common Problems</span>
              <h2>What owners actually call about</h2>
              <p class="lede">The specific issues that come up most, and what's usually behind them.</p>
            </div>
            <div class="card-grid cols-2">${commonProblemCards}</div>
          </div>
        </section>`
      : ''
  }

  ${
    propertyTypeCards
      ? `<section id="property-types">
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
      ? `<section class="section-alt" id="in-detail">
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
      ? `<section id="faq">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">Questions</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div class="faq-list">${faqItems}</div>
          </div>
        </section>`
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
      </div>
      <div class="narrow region-links" style="margin: 0 auto;">${townLinksHtml}</div>
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
    bodyHtml: body,
    schema: [serviceSchema, breadcrumbSchema, faqSchema].filter(Boolean),
  });
}

module.exports = renderService;
