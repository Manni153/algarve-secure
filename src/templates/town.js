'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { nearbyTowns } = require('../data/towns');
const { esc, rich, placeholder, photo, heroIntro, renderPage, serviceIcon } = require('./layout');

// Design-system rollout: applies the homepage's finalized visual system
// (colours, typography, buttons, service cards, hero gradient/text-shadow,
// nav/dropdown — see main.css's ".page-lagos-rs" block, named for the pilot
// town it started on) to town pages approved for it, one at a time. Every
// town NOT in this set is byte-for-byte unchanged — this set is the only
// thing that branches their otherwise-shared rendering logic. Hero and
// description photography are supplied independently per town (see
// TOWN_HERO_PHOTO/TOWN_DESCRIPTION_PHOTO below) — towns without their own
// photos yet still render the standard placeholder box in that slot.
const DESIGN_SYSTEM_PILOT_SLUGS = new Set(['lagos', 'praia-da-luz', 'sagres']);

// Per-town full-bleed hero photography (same villa photoshoot, reused
// across every rollout town so far). Towns not listed here render the
// standard placeholder box as the hero's full-bleed layer instead.
// Standing convention: every future town added to DESIGN_SYSTEM_PILOT_SLUGS
// gets its own desktopWebp/desktopJpg/mobileWebp/mobileJpg pair copied from
// the same two source photos — algarve-security-installation-villa-desktop
// for desktop, algarve-security-installation-villa-mobile for mobile/tablet
// — not fresh per-town photography.
const TOWN_HERO_PHOTO = {
  lagos: {
    mobileWebp: '/assets/images/hero-security-lagos-mobile.webp',
    mobileJpg: '/assets/images/hero-security-lagos-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-lagos-desktop.webp',
    desktopJpg: '/assets/images/hero-security-lagos-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa in Lagos with a discreet CCTV camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
  'praia-da-luz': {
    mobileWebp: '/assets/images/hero-security-praia-da-luz-mobile.webp',
    mobileJpg: '/assets/images/hero-security-praia-da-luz-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-praia-da-luz-desktop.webp',
    desktopJpg: '/assets/images/hero-security-praia-da-luz-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa in Praia da Luz with a discreet CCTV camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
  sagres: {
    mobileWebp: '/assets/images/hero-security-sagres-mobile.webp',
    mobileJpg: '/assets/images/hero-security-sagres-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-sagres-desktop.webp',
    desktopJpg: '/assets/images/hero-security-sagres-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa near Sagres with a discreet CCTV camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
};

// Per-town "Local to <town>" description photo, supplied independently of
// the hero image (see TOWN_HERO_PHOTO above) since towns pick up their own
// photography on their own schedule. Towns not listed here still render
// the standard placeholder box in that slot.
const TOWN_DESCRIPTION_PHOTO = {
  lagos: {
    webp: '/assets/images/lagos-villa-terrace.webp',
    jpg: '/assets/images/lagos-villa-terrace.jpg',
    alt: 'Terrace of a Lagos villa overlooking the Algarve coastline and cliffs',
  },
  'praia-da-luz': {
    webp: '/assets/images/praia-da-luz-villa-terrace.webp',
    jpg: '/assets/images/praia-da-luz-villa-terrace.jpg',
    alt: 'Villa balcony in Praia da Luz overlooking the beach and coastline',
  },
  sagres: {
    webp: '/assets/images/sagres-villa-terrace.webp',
    jpg: '/assets/images/sagres-villa-terrace.jpg',
    alt: 'Villa terrace near Sagres overlooking clifftop coastline and the Atlantic',
  },
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
  const isDesignSystemPilot = DESIGN_SYSTEM_PILOT_SLUGS.has(town.slug);
  // Hero and "Local to <town>" photography are supplied independently, on
  // each town's own schedule — both fall back to the standard placeholder
  // box until a town's own photos are supplied (see TOWN_HERO_PHOTO /
  // TOWN_DESCRIPTION_PHOTO above).
  const heroPhoto = TOWN_HERO_PHOTO[town.slug];
  const descriptionPhoto = TOWN_DESCRIPTION_PHOTO[town.slug];

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
    alt: heroPhoto
      ? heroPhoto.alt
      : `[Placeholder: security camera being mounted on a property exterior wall in ${town.name}]`,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: town.name }],
    h1Text: `Security & Smart Home Installation in ${town.name}`,
    headlineHtml: esc(town.heroHeadline),
    subtext: town.heroSubtext,
    // Dropped on the design-system pilot page only, matching the
    // homepage's own hero (which never passes a ctaNote at all) — every
    // other town keeps its note unchanged.
    ctaNote: isDesignSystemPilot ? undefined : CTA_NOTES[TOWN_CTA_NOTE[town.slug] ?? 0],
    // Same trust-stats row as the homepage hero, reusing the same sitewide
    // data (site.js) — pilot page only, so every other town's hero is
    // unaffected (heroIntro renders nothing here when these are undefined).
    trustStats: isDesignSystemPilot ? site.trustStats : undefined,
    desktopStatsText: isDesignSystemPilot ? site.heroStatsDesktop : undefined,
    mobileStatsText: isDesignSystemPilot ? site.heroStatsShort : undefined,
    // Full-bleed split hero (the homepage's own hero mechanism — gradient
    // scrim, text-shadow, breakpoint-specific direction) is opted into for
    // every design-system rollout town; every other town keeps its
    // original boxed, in-flow hero image untouched. Towns without their
    // own photography yet (see TOWN_HERO_PHOTO above) render the same
    // full-bleed shell with the standard placeholder box instead.
    image: heroPhoto
      ? {
          mobileWebp: heroPhoto.mobileWebp,
          mobileJpg: heroPhoto.mobileJpg,
          desktopWebp: heroPhoto.desktopWebp,
          desktopJpg: heroPhoto.desktopJpg,
        }
      : undefined,
    twoColDesktop: isDesignSystemPilot,
  });

  // Design-system pilot only: wraps a section's content in the homepage's
  // "emphasis block" panel (white rounded surface on the flat page
  // background — see .page-lagos-rs .rs-block in main.css). Every other
  // town keeps its plain/section-alt backgrounds untouched.
  const blockOpen = isDesignSystemPilot ? '<div class="rs-block">' : '';
  const blockClose = isDesignSystemPilot ? '</div>' : '';

  const body = `
  ${hero}

  <section>
    <div class="container">
      ${blockOpen}<div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">Local to ${esc(town.name)}</span>
          <h2>Security &amp; smart home installation in ${esc(town.name)}</h2>
          <p>${esc(town.name)} is ${esc(town.character)}. Whether it's a villa, apartment or holiday rental, systems are planned around how the property is actually used — and every step is explained in English.</p>
          <p>${esc(town.context)}</p>
          <a href="${site.telHref}" class="btn btn-icon mt-32">${site.phoneDisplay}</a>
        </div>
        <div class="two-col-media">
          ${
            descriptionPhoto
              ? photo(descriptionPhoto.alt, { webp: descriptionPhoto.webp, jpg: descriptionPhoto.jpg, ratio: 'tall' })
              : placeholder(town.streetscapeAlt || `Street or coastal view of ${town.name}, Algarve`, { ratio: 'tall' })
          }
        </div>
      </div>${blockClose}
    </div>
  </section>

  <section${isDesignSystemPilot ? '' : ' class="section-alt"'}>
    <div class="container">
      ${blockOpen}<div class="section-head">
        <span class="eyebrow">Security in ${esc(town.name)}</span>
        <h2>What to know before installing in ${esc(town.name)}</h2>
      </div>
      <div class="narrow" style="margin: 0 auto;">
        <h3>Property Types &amp; Profile</h3>
        <p>${rich(propertyProfileHtml)}</p>
        <h3>What Owners Tend to Ask About</h3>
        <p>${rich(concernsHtml)}</p>
      </div>${blockClose}
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

  <section${isDesignSystemPilot ? '' : ' class="section-alt"'}>
    <div class="container">
      ${blockOpen}<div class="section-head">
        <span class="eyebrow">Services</span>
        <h2>What we install in ${esc(town.name)}</h2>
      </div>
      <div class="service-list">${serviceRows}</div>${blockClose}
    </div>
  </section>

  ${
    faqItems
      ? `<section id="faq">
          <div class="container">
            ${blockOpen}<div class="section-head">
              <span class="eyebrow">Questions</span>
              <h2>Frequently asked questions about ${esc(town.name)}</h2>
            </div>
            <div class="faq-list">${faqItems}</div>${blockClose}
          </div>
        </section>`
      : ''
  }

  <section>
    <div class="container">
      ${blockOpen}<div class="section-head">
        <span class="eyebrow">Nearby</span>
        <h2>Also serving areas near ${esc(town.name)}</h2>
      </div>
      <div class="narrow" style="margin: 0 auto 32px;">
        <p>${rich(proximityHtml)}</p>
      </div>
      <div class="link-line center">${nearbyLine}</div>${blockClose}
    </div>
  </section>

  ${
    isDesignSystemPilot
      ? `<section>
          <div class="container">
            <div class="cta-band rs-block">
              <span class="eyebrow">Get Started</span>
              <h2>Speak to Algarve Smart Home about your property in ${esc(town.name)}</h2>
              <p class="lede">Call now to talk through cameras, alarms or smart home options — in English, with no confusion.</p>
              <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
            </div>
          </div>
        </section>`
      : `<section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Speak to Algarve Smart Home about your property in ${esc(town.name)}</h2>
      <p class="lede">Call now to talk through cameras, alarms or smart home options — in English, with no confusion.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>`
  }
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
