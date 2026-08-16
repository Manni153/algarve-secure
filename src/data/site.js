'use strict';

const phoneDisplay = '+351 923 272 806';
const phoneTel = '+351923272806';

module.exports = {
  brand: 'Algarve Smart Home',
  domainDisplay: 'AlgarveSecure.com',
  baseUrl: 'https://www.algarvesmarthome.com',
  phoneDisplay,
  phoneTel,
  telHref: `tel:${phoneTel}`,
  whatsappHref: `https://wa.me/351923272806?text=${encodeURIComponent(
    "Hi Algarve Smart Home, I'd like to ask about security systems for my property."
  )}`,

  // Primary nav shown inside the hamburger menu on every page.
  serviceNav: [
    { label: 'CCTV Installation', href: '/cctv-installation' },
    { label: 'Alarm Systems', href: '/alarm-systems' },
    { label: 'Access Control', href: '/access-control' },
    { label: 'Gate Automation', href: '/gate-automation' },
    { label: 'Fire Detection', href: '/fire-detection' },
    { label: 'Home Networking', href: '/home-networking' },
    { label: 'Smart Home Automation', href: '/smart-home-automation' },
  ],

  companyNav: [
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  // Compact labels for the inline desktop header nav — shorter than
  // serviceNav's drawer labels since the header row has limited width.
  headerServiceNav: [
    { label: 'CCTV', href: '/cctv-installation' },
    { label: 'Alarms', href: '/alarm-systems' },
    { label: 'Access Control', href: '/access-control' },
    { label: 'Gate Automation', href: '/gate-automation' },
    { label: 'Fire Detection', href: '/fire-detection' },
    { label: 'Home Networking', href: '/home-networking' },
    { label: 'Smart Home Automation', href: '/smart-home-automation' },
  ],

  // Mobile (<768px) uses this two-tier value/label format directly, per
  // request — shortened labels ("Based"/"Response", not the older longer
  // "Algarve-Based Installer"/"Response Across the Algarve") specifically
  // chosen to read cleanly as a short second line under a bold first line.
  trustStats: [
    { value: '100%', label: 'English-Speaking' },
    { value: 'Local', label: 'Based' },
    { value: 'Fast', label: 'Response' },
  ],

  // Tablet (768px+) and desktop single-line versions of the same three
  // trust points, for the homepage hero's inline stats row.
  heroStatsDesktop: ['100% English-Speaking', 'Locally Based', 'Fast Response'],

  // Mobile AND tablet (<=1024px) render each stat as icon / value line /
  // label line (three stacked rows) instead of desktop's single combined
  // string above — value/label pairs, not shortened text, since each now
  // gets its own row rather than competing for space on one line.
  // Desktop (1025px+) keeps the single-line heroStatsDesktop text above,
  // unaffected.
  heroStatsShort: [
    { value: '100%', label: 'English-Speaking' },
    { value: 'Locally', label: 'Based' },
    { value: 'Fast', label: 'Response' },
  ],

  trustSection: [
    {
      heading: 'English-Speaking, Start to Finish',
      text: 'Every call, quote and site visit is handled in clear English — no translation, no guesswork, from the first conversation to the finished install.',
      icon: 'chat',
    },
    {
      heading: 'Local Algarve Installer',
      text: 'Based in the Algarve and working across the region, with a real understanding of villas, apartments, gated communities and holiday rental properties.',
      icon: 'pin',
    },
    {
      heading: 'Supplied & Installed as One System',
      text: 'Equipment is supplied and installed as a single job, rather than sourced separately and handed off, so your cameras, alarms and access control are set up to work together properly from day one.',
      icon: 'tools',
    },
    {
      heading: 'One Company, Every System',
      text: 'CCTV, alarms, access control, gate automation, fire detection and networking are all handled under one roof, so a camera system and an alarm system are designed to work together rather than being sourced from two different suppliers.',
      icon: 'link',
    },
  ],

  // General process outline. Deliberately no specific timelines or response
  // commitments — only what's actually true of how the work happens.
  process: [
    {
      heading: 'Get in Touch',
      text: 'A call or WhatsApp message starts things off, and that first conversation happens entirely in English — no translation, no guessing at technical terms in a second language. It covers the basics: what the property is, roughly what needs covering, and what’s realistic for that kind of property, so there’s a clear idea of next steps before anything is booked in.',
    },
    {
      heading: 'Assessment',
      text: 'What actually gets installed is worked out from the property itself, not picked off a standard package list. That means camera positions that cover the real entry points and blind spots, sensor coverage sized to the layout, and a decision on whether a gate motor or access point makes sense for how the property is used — a large villa with several access points needs a different plan than a single apartment with one door.',
    },
    {
      heading: 'Installation',
      text: 'Equipment goes in on-site, supplied and fitted as one job rather than sourced from one place and installed by someone else. That matters in practice: cameras, alarms and access control end up configured to work together — arming an alarm through the same app that shows the camera feed, for example — rather than functioning as separate systems that happen to share a property.',
    },
    {
      heading: 'Ongoing Support',
      text: 'The relationship doesn’t end when the equipment is switched on. Questions about the app, adding a camera or sensor later, or troubleshooting an alert are handled through the same number used to arrange the original installation — one point of contact throughout, not a new call centre to find every time something needs attention.',
    },
  ],

  faqs: [
    {
      q: 'Do you supply the equipment as well as install it?',
      a: 'Yes — and because it comes from one job rather than a separate hardware supplier and a separate installer, there\'s a single point of contact if anything ever needs attention, rather than being sent back and forth between two companies.',
    },
    {
      q: 'What areas of the Algarve do you cover?',
      a: 'We work across the Algarve, from Sagres in the west to Vila Real de Santo António in the east. See the areas we cover below, or get in touch to check your specific location.',
    },
    {
      q: 'Is support really in English?',
      a: 'Yes — including technical terms explained in plain language rather than assuming familiarity with security jargon. If a term like "NVR" or "addressable panel" doesn\'t mean anything to you, that\'s normal, and explaining it clearly is part of the job.',
    },
    {
      q: 'Can I view my cameras or control my alarm remotely?',
      a: 'CCTV systems support remote viewing from a phone or tablet through a dedicated app, and alarm systems can be armed, disarmed and checked through an app as well.',
    },
    {
      q: 'Do you work with holiday rental and seasonal properties, or only full-time homes?',
      a: 'Both. Systems are sized to the property and how it’s used, whether that’s a full-time residence, a holiday home used for part of the year, or a rental property between guests.',
    },
    {
      q: 'What types of properties do you work with?',
      a: 'Residences, condominiums and commercial premises — from a single villa to shared entrances and common areas in a gated development or apartment block.',
    },
    {
      q: 'How much does a security or smart home system cost?',
      a: 'It depends on the property, the number of cameras or sensors involved, and how much cabling or network work is needed — there’s no single price that fits every property. Call or WhatsApp with a few details about yours and you’ll get an answer specific to your situation rather than a generic estimate.',
    },
    {
      q: 'Do I need a site visit before I can get a quote?',
      a: 'Often a site visit gives the most accurate picture, particularly for larger or more complex properties, but a first conversation and some photos or a description can be enough to start scoping out what makes sense before anything is booked in.',
    },
    {
      q: 'Can I start with one system and add others later?',
      a: 'Yes — CCTV, alarms, access control and the rest don’t have to go in all at once. A camera system installed now can have an alarm or access control added later, and connected together at that point rather than needing to start over.',
    },
    {
      q: 'What happens if there’s a power cut or the internet goes down?',
      a: 'Backup power (UPS) can be added to keep equipment running through a short power interruption, and footage is recorded to a local NVR or DVR on-site rather than relying solely on the cloud — so an internet outage doesn’t mean losing everything in the meantime.',
    },
  ],
};
