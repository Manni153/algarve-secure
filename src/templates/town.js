'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { nearbyTowns } = require('../data/towns');
const { esc, rich, placeholder, heroIntro, reassuranceBand, renderPage, serviceIcon } = require('./layout');

// Design-system pilot: applies the homepage's finalized visual system
// (colours, typography, buttons, service cards, hero gradient/text-shadow,
// nav/dropdown — see main.css's ".page-lagos-rs" block) to this ONE town
// page only, per explicit request. Every other town page below is byte-
// for-byte unchanged — this flag is the only thing that branches their
// otherwise-shared rendering logic.
const DESIGN_SYSTEM_PILOT_SLUG = 'lagos';

// Hesitation-addressing block, varied by town character rather than repeated
// verbatim on all 22 pages. Each variant appears on at most three towns.
const REASSURANCE_VARIANTS = {
  secondHome: {
    heading: 'No pressure, no hard sell — just a straight answer.',
    body: "A quick call tells you what makes sense for a property that stands empty between visits. Most owners who'd been putting it off say the same thing afterwards: they wish they'd called sooner.",
  },
  rental: {
    heading: 'A quick call, not a sales pitch.',
    body: "Describe the property and how often it turns over, and you'll get an honest read on what's worth installing before the next changeover — and what isn't.",
  },
  rural: {
    heading: "An honest answer about what works out here.",
    body: "Rural properties get a straight assessment — including checking the connection first — before any equipment is discussed. If something won't work reliably at your property, you'll hear that on the call.",
  },
  ruralInland: {
    heading: 'No pressure, and no one-size packages.',
    body: "A short call is enough to tell you what a larger inland plot genuinely needs, and what it doesn't. The property decides the plan, not a price list.",
  },
  estate: {
    heading: 'A straight answer, even inside a gated estate.',
    body: "A quick call clarifies what your development already covers and what your own property still needs — no overlap with the estate's systems, no overselling on top of them.",
  },
  urban: {
    heading: 'Describe the property. Get a straight answer.',
    body: "No hard sell — if a compact setup covers your property, that's exactly what you'll be told. The call costs nothing and commits you to nothing.",
  },
  historic: {
    heading: 'An honest read on an older building.',
    body: "Village-centre and historic properties get a plan built around the building itself — and a frank answer about what's realistic before any commitment is asked of you.",
  },
  quietEast: {
    heading: 'One quick call settles it.',
    body: "You'll hear what actually makes sense for a property out this way — no pressure on the call, and no follow-up campaign afterwards.",
  },
};

const TOWN_REASSURANCE = {
  'lagos': 'urban', 'praia-da-luz': 'secondHome', 'sagres': 'rural', 'aljezur': 'rural',
  'alvor': 'secondHome', 'portimao': 'urban', 'ferragudo': 'historic', 'lagoa': 'rental',
  'carvoeiro': 'rental', 'silves': 'ruralInland', 'monchique': 'rural', 'albufeira': 'rental',
  'vilamoura': 'estate', 'quarteira': 'quietEast', 'loule': 'historic', 'almancil': 'estate',
  'faro': 'urban', 'olhao': 'historic', 'sao-bras-de-alportel': 'ruralInland',
  'tavira': 'secondHome', 'castro-marim': 'quietEast', 'vila-real-de-santo-antonio': 'quietEast',
};

// Short line under the hero CTA button, varied across towns.
const CTA_NOTES = [
  'Call about your property — straight answer, no pressure.',
  'One quick call tells you what makes sense here.',
  'Describe the property — get a clear answer in plain English.',
  'No pressure — just a clear answer about your options.',
  'A five-minute call is enough to point you right.',
];
const TOWN_CTA_NOTE = {
  'lagos': 0, 'praia-da-luz': 1, 'sagres': 2, 'aljezur': 3, 'alvor': 4,
  'portimao': 0, 'ferragudo': 1, 'lagoa': 2, 'carvoeiro': 3, 'silves': 4,
  'monchique': 0, 'albufeira': 1, 'vilamoura': 2, 'quarteira': 3, 'loule': 4,
  'almancil': 0, 'faro': 1, 'olhao': 2, 'sao-bras-de-alportel': 3, 'tavira': 4,
  'castro-marim': 0, 'vila-real-de-santo-antonio': 1,
};

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
  const isDesignSystemPilot = town.slug === DESIGN_SYSTEM_PILOT_SLUG;

  const serviceRows = services
    .map(
      (s) => `<a href="/${s.slug}">
        <h3>${esc(s.name)} in ${esc(town.name)}</h3>
        <span class="arrow">&rarr;</span>
      </a>`
    )
    .join('');

  // Markup for the "Most Relevant" card grid — the one section on a town
  // page that already matches the homepage's #services card structure
  // (a card-grid.cols-3 of linked cards). Was previously limited to the
  // 3 services in town.relevantServices ("most relevant" for that town's
  // property mix), which under-rendered against the homepage's own
  // #services section (all 7, always) — services are a shared data source
  // (services.js), not a per-page hardcoded list, so the fix applies here
  // for every town: all 7 services now render, using the town-specific
  // relevance reason where one is curated and falling back to the
  // service's own homepage copy (heroSubhead) for the rest — the same
  // fallback text the homepage's own cards use. On the pilot page, this
  // gets the homepage's exact card internals (icon tile + arrow-icon
  // "Learn more" pill) so main.css's .page-lagos-rs #services rules —
  // mirroring .page-home #services exactly — have the same elements to
  // style. Every other town keeps the original plain card (heading +
  // reason + text-arrow link), just with all 7 now instead of 3.
  const relevantCards = services
    .map((s) => {
      const curated = (town.relevantServices || []).find((r) => r.slug === s.slug);
      const reasonText = curated ? curated.reason : s.heroSubhead;
      if (isDesignSystemPilot) {
        return `<a href="/${s.slug}" class="card">
          <div class="card-icon-block">${serviceIcon(s.slug)}</div>
          <h3>${esc(s.name)} in ${esc(town.name)}</h3>
          <p>${esc(reasonText)}</p>
          <span class="card-link"><span class="card-link-label">Learn more</span><svg class="card-link-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.25"/><path d="M9.2 8.3 13.4 12 9.2 15.7"/></svg></span>
        </a>`;
      }
      return `<a href="/${s.slug}" class="card">
        <h3>${esc(s.name)} in ${esc(town.name)}</h3>
        <p>${esc(reasonText)}</p>
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
    subtext: town.heroSubtext,
    ctaNote: CTA_NOTES[TOWN_CTA_NOTE[town.slug] ?? 0],
    // Full-bleed split hero (the homepage's own hero mechanism — gradient
    // scrim, text-shadow, breakpoint-specific direction) is opted into for
    // the design-system pilot page only; every other town keeps its
    // original boxed, in-flow hero image untouched. No image asset is
    // supplied (town pages don't have dedicated photography), so this
    // renders the existing placeholder as the full-bleed layer instead —
    // see .page-lagos-rs .hero-stack-media .placeholder in main.css.
    twoColDesktop: isDesignSystemPilot,
  });

  const reassurance = reassuranceBand(
    REASSURANCE_VARIANTS[TOWN_REASSURANCE[town.slug] || 'urban']
  );

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
      ? `<section${isDesignSystemPilot ? ' id="services"' : ''}>
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">What We Install</span>
              <h2>Security &amp; smart home services for ${esc(town.name)} properties</h2>
              <p class="lede">All seven services are available here, each planned around how ${esc(town.name)} properties are actually used.</p>
            </div>
            <div class="card-grid cols-3">${relevantCards}</div>
            ${isDesignSystemPilot ? '<div class="carousel-progress" aria-hidden="true"><div class="carousel-progress-fill"></div></div>' : ''}
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

  ${reassurance}

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
    mainClass: isDesignSystemPilot ? 'page-lagos-rs' : undefined,
    useHomeHeader: isDesignSystemPilot,
  });
}

module.exports = renderTown;
