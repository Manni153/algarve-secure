'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { nearbyTowns } = require('../data/towns');
const { esc, rich, placeholder, heroIntro, renderPage } = require('./layout');

// Keyword -> service page map, used to turn a first natural mention of a
// service inside a town's prose into a real link, without hand-editing 22
// town entries. Matched in this order; each service links at most once per
// page so the prose doesn't turn into a wall of links.
const SERVICE_KEYWORDS = [
  { re: /\bCCTV\b/, slug: 'cctv-installation' },
  { re: /\balarm(?: system| coverage| systems)?\b/i, slug: 'alarm-systems' },
  { re: /\baccess control\b/i, slug: 'access-control' },
  { re: /\bgate automation\b/i, slug: 'gate-automation' },
  { re: /\bfire detection\b/i, slug: 'fire-detection' },
  { re: /\bnetwork(?:ing|ed)?\b/i, slug: 'home-networking' },
  { re: /\bsmart home\b/i, slug: 'smart-home-automation' },
];

function linkifyServices(text, linkedSlugs) {
  let result = text;
  for (const kw of SERVICE_KEYWORDS) {
    if (linkedSlugs.has(kw.slug)) continue;
    if (kw.re.test(result)) {
      result = result.replace(kw.re, (match) => `<a href="/${kw.slug}">${match}</a>`);
      linkedSlugs.add(kw.slug);
    }
  }
  return result;
}

function linkifyTownNames(text, nearby) {
  let result = text;
  for (const t of nearby) {
    // Word-boundary-safe replace of the first mention only.
    const re = new RegExp(`\\b${t.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`);
    if (re.test(result)) {
      result = result.replace(re, `<a href="/${t.slug}">${t.name}</a>`);
    }
  }
  return result;
}

function renderTown(town) {
  const serviceRows = services
    .map(
      (s) => `<a href="/${s.slug}">
        <h3>${esc(s.name)} in ${esc(town.name)}</h3>
        <span class="arrow">&rarr;</span>
      </a>`
    )
    .join('');

  const relevantCards = (town.relevantServices || [])
    .map((r) => {
      const s = services.find((sv) => sv.slug === r.slug);
      if (!s) return '';
      return `<a href="/${s.slug}" class="card">
        <h3>${esc(s.name)} in ${esc(town.name)}</h3>
        <p>${esc(r.reason)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`;
    })
    .join('');

  const nearby = nearbyTowns(town.slug, 3);
  const nearbyLine = nearby
    .map((t) => `<a href="/${t.slug}">${esc(t.name)}</a>`)
    .join('<span class="sep">&middot;</span>');

  // Cross-link a first natural mention of a service within the prose, and
  // the nearby-town names already named in the proximity paragraph.
  const linkedSlugs = new Set();
  const propertyProfileHtml = linkifyServices(esc(town.propertyProfile), linkedSlugs);
  const concernsHtml = linkifyServices(esc(town.concerns), linkedSlugs);
  const proximityHtml = linkifyTownNames(esc(town.proximity), nearby);

  // Premium reframe — only present for towns with a genuinely distinct
  // property profile (e.g. Vilamoura's marina-vs-golf-estate split), so
  // this whole block is a no-op for the other 19 town pages.
  const premiumSubAreaItems = ((town.premiumProfile && town.premiumProfile.subAreas) || [])
    .map(
      (s, i) => `<div class="pillar">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <div><h3>${esc(s.heading)}</h3><p>${rich(s.text)}</p></div>
      </div>`
    )
    .join('');

  const faqItems = (town.faqs || [])
    .map(
      (f) => `<div class="faq-item">
        <h3>${esc(f.q)}</h3>
        <p>${esc(f.a)}</p>
      </div>`
    )
    .join('');

  const faqSchema = town.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: town.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: town.name, item: `${site.baseUrl}/${town.slug}` },
    ],
  };

  const hero = heroIntro({
    alt: `[Placeholder: security camera being mounted on a property exterior wall in ${town.name}]`,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: town.name }],
    h1Text: `Security & Smart Home Installation in ${town.name}`,
    headlineHtml: esc(town.heroHeadline),
    subtext: 'CCTV, alarms and smart home systems — installed and explained in plain English.',
  });

  const body = `
  ${hero}

  <section>
    <div class="container">
      <div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">Local to ${esc(town.name)}</span>
          <h2>Security &amp; smart home installation in ${esc(town.name)}</h2>
          <p>${esc(town.name)} is ${esc(town.character)}. Whether it's a villa, apartment or holiday rental, systems are planned around how the property is actually used — and every step is explained in English.</p>
          <p>${esc(town.context)}</p>
          <a href="${site.telHref}" class="btn btn-icon mt-32">${site.phoneDisplay}</a>
        </div>
        <div class="two-col-media">
          ${placeholder(town.streetscapeAlt || `Street or coastal view of ${town.name}, Algarve`, { ratio: 'tall' })}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Security in ${esc(town.name)}</span>
        <h2>What to know before installing in ${esc(town.name)}</h2>
      </div>
      <div class="narrow" style="margin: 0 auto;">
        <h3>Property Types &amp; Profile</h3>
        <p>${rich(propertyProfileHtml)}</p>
        <h3>What Owners Tend to Ask About</h3>
        <p>${rich(concernsHtml)}</p>
      </div>
    </div>
  </section>

  ${
    premiumSubAreaItems
      ? `<section id="in-detail">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">${esc(town.premiumProfile.eyebrow)}</span>
              <h2>${esc(town.premiumProfile.heading)}</h2>
              <p class="lede">${esc(town.premiumProfile.intro)}</p>
            </div>
            <div class="pillar-list mt-32">${premiumSubAreaItems}</div>
          </div>
        </section>`
      : ''
  }

  ${
    relevantCards
      ? `<section>
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">Most Relevant</span>
              <h2>Best-suited services for ${esc(town.name)} properties</h2>
              <p class="lede">Every service is available here — these tend to matter most given the local property mix.</p>
            </div>
            <div class="card-grid cols-3">${relevantCards}</div>
          </div>
        </section>`
      : ''
  }

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Services</span>
        <h2>What we install in ${esc(town.name)}</h2>
      </div>
      <div class="service-list">${serviceRows}</div>
    </div>
  </section>

  ${
    faqItems
      ? `<section id="faq">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">Questions</span>
              <h2>Frequently asked questions about ${esc(town.name)}</h2>
            </div>
            <div class="faq-list">${faqItems}</div>
          </div>
        </section>`
      : ''
  }

  <section>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Nearby</span>
        <h2>Also serving areas near ${esc(town.name)}</h2>
      </div>
      <div class="narrow" style="margin: 0 auto 32px;">
        <p>${rich(proximityHtml)}</p>
      </div>
      <div class="link-line center">${nearbyLine}</div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Speak to Algarve Smart Home about your property in ${esc(town.name)}</h2>
      <p class="lede">Call now to talk through cameras, alarms or smart home options — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>
  `;

  return renderPage({
    path: `/${town.slug}`,
    bodyHtml: body,
    schema: [breadcrumbSchema, faqSchema].filter(Boolean),
  });
}

module.exports = renderTown;
