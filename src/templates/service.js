'use strict';

const site = require('../data/site');
const services = require('../data/services');
const { regionGroups } = require('../data/towns');
const { esc, rich, placeholder, photo, heroIntro, renderPage, serviceIcon } = require('./layout');

// Design-system rollout for service pages — mirrors the town-page rollout
// (see town.js's DESIGN_SYSTEM_PILOT_SLUGS): applies the homepage's
// finalized visual system (full-bleed split hero, rs-block panels,
// icon-tile "Explore" cards, white header/nav chrome) to service pages
// approved for it, one at a time, starting with the flagship CCTV page.
// Every service NOT in this set is byte-for-byte unchanged.
const SERVICE_DESIGN_SYSTEM_PILOT_SLUGS = new Set(['cctv-installation', 'alarm-systems', 'access-control', 'gate-automation']);

// Minimal-images rollout — separate from the design-system set above.
// CCTV had all four of its two-col placeholder slots reduced to just two
// real photos (scenarios/in-detail dropped their media column entirely,
// collapsing to single-column layouts), per explicit request. Every other
// pilot page (e.g. Alarm Systems) keeps its placeholder boxes in every
// slot until told otherwise — same design language, unreduced imagery.
const SERVICE_MINIMAL_IMAGES_SLUGS = new Set(['cctv-installation', 'alarm-systems']);

// Per-service full-bleed hero photography for the pilot page(s) — same
// standard villa photoshoot/pair reused across most rollout towns (see
// town.js's TOWN_HERO_PHOTO), rather than dedicated per-service
// photography. Services not listed here (i.e. every non-pilot page)
// don't call heroIntro with an `image` at all, so this is a no-op for them.
const SERVICE_HERO_PHOTO = {
  'cctv-installation': {
    mobileWebp: '/assets/images/hero-security-cctv-installation-mobile.webp',
    mobileJpg: '/assets/images/hero-security-cctv-installation-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-cctv-installation-desktop.webp',
    desktopJpg: '/assets/images/hero-security-cctv-installation-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa with a discreet CCTV camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
  'alarm-systems': {
    mobileWebp: '/assets/images/hero-security-alarm-systems-mobile.webp',
    mobileJpg: '/assets/images/hero-security-alarm-systems-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-alarm-systems-desktop.webp',
    desktopJpg: '/assets/images/hero-security-alarm-systems-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa with a discreet security camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
  'access-control': {
    mobileWebp: '/assets/images/hero-security-access-control-mobile.webp',
    mobileJpg: '/assets/images/hero-security-access-control-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-access-control-desktop.webp',
    desktopJpg: '/assets/images/hero-security-access-control-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa with a discreet security camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
  'gate-automation': {
    mobileWebp: '/assets/images/hero-security-gate-automation-mobile.webp',
    mobileJpg: '/assets/images/hero-security-gate-automation-mobile.jpg',
    desktopWebp: '/assets/images/hero-security-gate-automation-desktop.webp',
    desktopJpg: '/assets/images/hero-security-gate-automation-desktop.jpg',
    alt: 'Terracotta-walled Algarve villa with a discreet security camera mounted above the roofline, olive trees and glass sliding doors at the entrance',
  },
};

// In-page description photos — one image per content section, each used
// at every breakpoint (no separate mobile/desktop crop, unlike the hero
// pair above), supplied independently per service/section on its own
// schedule, same as town.js's TOWN_DESCRIPTION_PHOTO. Keyed by service
// slug, then by section (included/whyItMatters/scenarios/inDetail —
// matching the four two-col placeholder slots service.js renders).
// Services/sections not listed here still render the standard
// placeholder box in that slot.
const SERVICE_DESCRIPTION_PHOTO = {
  'cctv-installation': {
    included: {
      webp: '/assets/images/cctv-installed-professionally.webp',
      jpg: '/assets/images/cctv-installed-professionally.jpg',
      alt: 'CCTV camera professionally installed on an Algarve villa exterior wall',
    },
    whyItMatters: {
      webp: '/assets/images/cctv-installed-by-experts.webp',
      jpg: '/assets/images/cctv-installed-by-experts.jpg',
      alt: 'CCTV camera installed by an expert technician on an Algarve villa',
    },
  },
  'alarm-systems': {
    included: {
      webp: '/assets/images/alarm-system-installed.webp',
      jpg: '/assets/images/alarm-system-installed.jpg',
      alt: 'Alarm motion sensor installed indoors on an Algarve property wall',
    },
    whyItMatters: {
      webp: '/assets/images/alarm-system-control-panel.webp',
      jpg: '/assets/images/alarm-system-control-panel.jpg',
      alt: 'Wall-mounted alarm control keypad with app-based remote access',
    },
  },
  'access-control': {
    included: {
      webp: '/assets/images/access-control-intercom-panel.webp',
      jpg: '/assets/images/access-control-intercom-panel.jpg',
      alt: 'Video intercom access control unit installed at an Algarve apartment building entrance',
    },
    whyItMatters: {
      webp: '/assets/images/access-control-system-installed.webp',
      jpg: '/assets/images/access-control-system-installed.jpg',
      alt: 'Video intercom camera and panel installed professionally at an Algarve property entrance',
    },
    scenarios: {
      webp: '/assets/images/access-control-keypad.webp',
      jpg: '/assets/images/access-control-keypad.jpg',
      alt: 'Numeric keypad access reader mounted beside a property entrance',
    },
    inDetail: {
      webp: '/assets/images/access-control-exit-button.webp',
      jpg: '/assets/images/access-control-exit-button.jpg',
      alt: 'Touchless exit sensor mounted beside a controlled door entrance',
    },
  },
  'gate-automation': {
    included: {
      webp: '/assets/images/gate-automation-swing-operators.webp',
      jpg: '/assets/images/gate-automation-swing-operators.jpg',
      alt: 'Swing gate motor operators installed at a driveway entrance',
      ratio: 'tall-desktop-wide',
    },
    whyItMatters: {
      webp: '/assets/images/gate-automation-sliding-roller.webp',
      jpg: '/assets/images/gate-automation-sliding-roller.jpg',
      alt: 'Sliding roller gate installed at an Algarve property entrance',
    },
    scenarios: {
      webp: '/assets/images/gate-automation-vehicle-access-control.webp',
      jpg: '/assets/images/gate-automation-vehicle-access-control.jpg',
      alt: 'Vehicle approaching an automated gate with access control installed at an Algarve property',
    },
    inDetail: {
      webp: '/assets/images/gate-automation-single-swing.webp',
      jpg: '/assets/images/gate-automation-single-swing.jpg',
      alt: 'Single swing gate motor mounted beside a driveway gate',
      ratio: 'tall-desktop-wide',
    },
  },
};

function renderService(service) {
  const isPilot = SERVICE_DESIGN_SYSTEM_PILOT_SLUGS.has(service.slug);
  const isMinimalImages = SERVICE_MINIMAL_IMAGES_SLUGS.has(service.slug);
  // Design-system pilot only: wraps a section's content in the homepage's
  // "emphasis block" panel (white rounded surface on the flat page
  // background — see .page-lagos-rs .rs-block in main.css). Every other
  // service keeps its plain/section-alt backgrounds untouched.
  const blockOpen = isPilot ? '<div class="rs-block">' : '';
  const blockClose = isPilot ? '</div>' : '';

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

  // On the pilot page, this gets the homepage's exact card internals (icon
  // tile + arrow-icon "Learn more" pill) so main.css's .page-lagos-rs
  // #services rules — mirroring .page-home #services exactly — have the
  // same elements to style. Every other service page keeps the original
  // plain card (heading + subhead + text-arrow link).
  const otherServiceCards = otherServices
    .map((s) => {
      if (isPilot) {
        return `<a href="/${s.slug}" class="card${s.flagship ? ' flagship' : ''}">
          <div class="card-icon-block">${serviceIcon(s.slug)}</div>
          ${s.flagship ? '<span class="badge">Flagship Service</span>' : ''}
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.heroSubhead)}</p>
          <span class="card-link"><span class="card-link-label">Learn more</span> <span class="card-link-arrow-text" aria-hidden="true">&rarr;</span><svg class="card-link-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.25"/><path d="M9.2 8.3 13.4 12 9.2 15.7"/></svg></span>
        </a>`;
      }
      return `<a href="/${s.slug}" class="card${s.flagship ? ' flagship' : ''}">
        ${s.flagship ? '<span class="badge">Flagship Service</span>' : ''}
        <h3>${esc(s.name)}</h3>
        <p>${esc(s.heroSubhead)}</p>
        <span class="card-link">Learn more &rarr;</span>
      </a>`;
    })
    .join('');

  const heroPhoto = SERVICE_HERO_PHOTO[service.slug];
  const descriptionPhotos = SERVICE_DESCRIPTION_PHOTO[service.slug] || {};

  const hero = heroIntro({
    alt: heroPhoto ? heroPhoto.alt : service.imageAlt,
    breadcrumb: [{ label: 'Home', href: '/' }, { label: service.name }],
    h1Text: service.h1,
    headlineHtml: esc(service.heroHeadline),
    subtext: service.heroTagline,
    // Dropped on the design-system pilot page only, matching the
    // homepage's own hero (which never passes a ctaNote at all) — every
    // other service keeps its note unchanged.
    ctaNote: isPilot ? undefined : service.ctaNote,
    // Same trust-stats row as the homepage/town-pilot hero, reusing the
    // same sitewide data (site.js) — pilot page only.
    trustStats: isPilot ? site.trustStats : undefined,
    desktopStatsText: isPilot ? site.heroStatsDesktop : undefined,
    mobileStatsText: isPilot ? site.heroStatsShort : undefined,
    // Full-bleed split hero (the homepage's own hero mechanism) is opted
    // into for the pilot; every other service page keeps its original
    // boxed, in-flow hero image untouched.
    image: heroPhoto
      ? {
          mobileWebp: heroPhoto.mobileWebp,
          mobileJpg: heroPhoto.mobileJpg,
          desktopWebp: heroPhoto.desktopWebp,
          desktopJpg: heroPhoto.desktopJpg,
        }
      : undefined,
    twoColDesktop: isPilot,
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

  <nav class="toc${isPilot ? ' toc-rs' : ''}" aria-label="Page sections">
    <div class="container">
      <span class="toc-label">On this page</span>
      <div class="toc-links">${tocHtml}</div>
    </div>
  </nav>

  <section id="included">
    <div class="container">
      ${blockOpen}<div class="two-col">
        <div class="two-col-text">
          <span class="eyebrow">What's Included</span>
          <h2>What our ${esc(service.name)} service covers</h2>
          <p>${rich(service.intro)}</p>
          <ul class="check-list mt-32">${includedList}</ul>
        </div>
        <div class="two-col-media">
          ${
            descriptionPhotos.included
              ? photo(descriptionPhotos.included.alt, { webp: descriptionPhotos.included.webp, jpg: descriptionPhotos.included.jpg, ratio: descriptionPhotos.included.ratio || 'tall' })
              : placeholder(service.imageAlt, { ratio: 'tall' })
          }
        </div>
      </div>${blockClose}
    </div>
  </section>

  <section${isPilot ? '' : ' class="section-alt"'} id="why-it-matters">
    <div class="container">
      ${blockOpen}<div class="two-col reverse">
        <div class="two-col-media">
          ${
            descriptionPhotos.whyItMatters
              ? photo(descriptionPhotos.whyItMatters.alt, { webp: descriptionPhotos.whyItMatters.webp, jpg: descriptionPhotos.whyItMatters.jpg, ratio: 'tall' })
              : placeholder(`${service.name} in use at an Algarve property`, { ratio: 'tall' })
          }
        </div>
        <div class="two-col-text">
          <span class="eyebrow">Why It Matters</span>
          <h2>Built for owners who aren't always on-site</h2>
          <p>${esc(service.whyItMatters)}</p>
          <a href="${site.telHref}" class="btn btn-icon mt-32">${site.phoneDisplay}</a>
        </div>
      </div>${blockClose}
    </div>
  </section>

  ${
    deepDiveHtml
      ? `<section id="in-depth">
          <div class="container">
            ${blockOpen}<div class="section-head">
              <span class="eyebrow">In Depth</span>
              <h2>How ${esc(service.name.toLowerCase())} actually works</h2>
            </div>
            <div class="narrow" style="margin: 0 auto;">${deepDiveHtml}</div>${blockClose}
          </div>
        </section>`
      : ''
  }

  ${
    scenarioItems
      ? isMinimalImages
        ? `<section id="scenarios">
          <div class="container">
            <div class="section-head">
              <span class="eyebrow">Real-World Scenarios</span>
              <h2>Where ${esc(service.name.toLowerCase())} actually gets used</h2>
            </div>
            <div class="pillar-list mt-32">${scenarioItems}</div>
          </div>
        </section>`
        : `<section${isPilot ? '' : ' class="section-alt"'} id="scenarios">
          <div class="container">
            ${blockOpen}<div class="two-col">
              <div class="two-col-text">
                <span class="eyebrow">Real-World Scenarios</span>
                <h2>Where ${esc(service.name.toLowerCase())} actually gets used</h2>
                <div class="pillar-list mt-32">${scenarioItems}</div>
              </div>
              <div class="two-col-media">
                ${
                  descriptionPhotos.scenarios
                    ? photo(descriptionPhotos.scenarios.alt, { webp: descriptionPhotos.scenarios.webp, jpg: descriptionPhotos.scenarios.jpg, ratio: 'tall' })
                    : placeholder(service.scenarioImageAlt, { ratio: 'tall' })
                }
              </div>
            </div>${blockClose}
          </div>
        </section>`
      : ''
  }

  ${
    commonProblemCards
      ? `<section id="common-problems">
          <div class="container">
            ${blockOpen}<div class="section-head">
              <span class="eyebrow">Common Problems</span>
              <h2>What owners actually call about</h2>
              <p class="lede">The specific issues that come up most, and what's usually behind them.</p>
            </div>
            <div class="card-grid cols-2">${commonProblemCards}</div>${blockClose}
          </div>
        </section>`
      : ''
  }

  ${
    propertyTypeCards
      ? `<section id="property-types">
          <div class="container">
            ${blockOpen}<div class="section-head">
              <span class="eyebrow">By Property Type</span>
              <h2>How this applies to your property</h2>
              <p class="lede">The same service, sized differently depending on what you own.</p>
            </div>
            <div class="card-grid cols-2">${propertyTypeCards}</div>${blockClose}
          </div>
        </section>`
      : ''
  }

  ${
    extraCards
      ? isMinimalImages
        ? `<section id="in-detail">
          <div class="container">
            ${blockOpen}<div class="section-head">
              <span class="eyebrow">In Detail</span>
              <h2>${esc(service.name)}, done properly</h2>
            </div>
            <div class="card-grid cols-2 mt-32">${extraCards}</div>${blockClose}
          </div>
        </section>`
        : `<section${isPilot ? '' : ' class="section-alt"'} id="in-detail">
          <div class="container">
            ${blockOpen}<div class="two-col reverse">
              <div class="two-col-media">
                ${
                  descriptionPhotos.inDetail
                    ? photo(descriptionPhotos.inDetail.alt, { webp: descriptionPhotos.inDetail.webp, jpg: descriptionPhotos.inDetail.jpg, ratio: descriptionPhotos.inDetail.ratio || 'tall' })
                    : placeholder(service.detailImageAlt, { ratio: 'tall' })
                }
              </div>
              <div class="two-col-text">
                <span class="eyebrow">In Detail</span>
                <h2>${esc(service.name)}, done properly</h2>
              </div>
            </div>
            <div class="card-grid cols-2 mt-32">${extraCards}</div>${blockClose}
          </div>
        </section>`
      : ''
  }

  ${
    faqItems
      ? `<section id="faq">
          <div class="container">
            ${blockOpen}<div class="section-head">
              <span class="eyebrow">Questions</span>
              <h2>Frequently asked questions</h2>
            </div>
            <div class="faq-list">${faqItems}</div>${blockClose}
          </div>
        </section>`
      : ''
  }

  ${
    isPilot
      ? `<section>
          <div class="container">
            <div class="cta-band rs-block">
              <span class="eyebrow">Get Started</span>
              <h2>Talk through your ${esc(service.name.toLowerCase())} options</h2>
              <p class="lede">Call now and we'll talk you through what makes sense for your property — in English, with no jargon.</p>
              <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
            </div>
          </div>
        </section>`
      : `<section class="cta-band">
    <div class="container">
      <span class="eyebrow">Get Started</span>
      <h2>Talk through your ${esc(service.name.toLowerCase())} options</h2>
      <p class="lede">Call now and we'll talk you through what makes sense for your property — in English, with no jargon.</p>
      <a href="${site.telHref}" class="btn btn-lg btn-icon">${site.phoneDisplay}</a>
    </div>
  </section>`
  }

  <section${isPilot ? '' : ' class="section-alt"'}>
    <div class="container">
      ${blockOpen}<div class="section-head">
        <span class="eyebrow">Where We Work</span>
        <h2>${esc(service.name)} across the Algarve</h2>
      </div>
      <div class="narrow region-links" style="margin: 0 auto;">${townLinksHtml}</div>${blockClose}
    </div>
  </section>

  <section${isPilot ? ' id="services"' : ''}>
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Explore</span>
        <h2>More of what we install</h2>
      </div>
      <div class="card-grid cols-3">${otherServiceCards}</div>
      ${isPilot ? '<div class="carousel-progress" aria-hidden="true"><div class="carousel-progress-fill"></div></div>' : ''}
    </div>
  </section>
  `;

  return renderPage({
    path: `/${service.slug}`,
    bodyHtml: body,
    schema: [serviceSchema, breadcrumbSchema, faqSchema].filter(Boolean),
    mainClass: isPilot ? 'page-lagos-rs' : undefined,
    useHomeHeader: isPilot,
  });
}

module.exports = renderService;
