'use strict';

const phoneDisplay = '+351 923 272 806';
const phoneTel = '+351923272806';

module.exports = {
  brand: 'AlgarveSecure',
  domainDisplay: 'AlgarveSecure.com',
  baseUrl: 'https://www.algarvesecure.com',
  phoneDisplay,
  phoneTel,
  telHref: `tel:${phoneTel}`,
  whatsappHref: `https://wa.me/351923272806?text=${encodeURIComponent(
    "Hi AlgarveSecure, I'd like to ask about security systems for my property."
  )}`,
  email: 'info@algarvesecure.com',

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
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],

  trustStats: [
    { value: '100%', label: 'English-Speaking' },
    { value: 'Local', label: 'Algarve-Based Installer' },
    { value: 'Fast', label: 'Response Across the Algarve' },
  ],

  trustSection: [
    {
      heading: 'English-Speaking, Start to Finish',
      text: 'Every call, quote and site visit is handled in clear English — no translation, no guesswork, from the first conversation to the finished install.',
    },
    {
      heading: 'Local Algarve Installer',
      text: 'Based in the Algarve and working across the region, with a real understanding of villas, apartments, gated communities and holiday rental properties.',
    },
    {
      heading: 'Supply & Install, One Team',
      text: 'Equipment sourced and fitted by the same team, so your cameras, alarms and access control are set up to work together properly from day one.',
    },
    {
      heading: 'One Company, Every System',
      text: 'CCTV, alarms, access control, gate automation, fire detection and networking are all handled under one roof, so a camera system and an alarm system are designed to work together rather than being sourced from two different suppliers.',
    },
  ],

  // General process outline. Deliberately no specific timelines or response
  // commitments — only what's actually true of how the work happens.
  process: [
    {
      heading: 'Get in Touch',
      text: 'Call or WhatsApp to talk through the property and what you’d like covered.',
    },
    {
      heading: 'Assessment',
      text: 'The property is looked at and what’s actually needed is worked out — camera positions, sensor coverage, where a gate motor or access point makes sense — sized to the property rather than a standard package.',
    },
    {
      heading: 'Installation',
      text: 'Equipment is installed and configured on-site by the same team that supplied it, set up to work together rather than as separate standalone pieces.',
    },
    {
      heading: 'Ongoing Support',
      text: 'Support continues after the install — questions about the app, adding a device later, or troubleshooting don’t stop the day the installation is finished.',
    },
  ],

  faqs: [
    {
      q: 'Do you supply the equipment as well as install it?',
      a: 'Yes. Equipment is supplied and installed by the same team, rather than sourced separately and handed off to an installer — so cameras, alarms, access control and the rest of a system are set up to work together from the start.',
    },
    {
      q: 'What areas of the Algarve do you cover?',
      a: 'We work across the Algarve, from Sagres in the west to Vila Real de Santo António in the east. See the areas we cover below, or get in touch to check your specific location.',
    },
    {
      q: 'Is support really in English?',
      a: 'Yes — every call, quote and site visit is handled in English, from the first enquiry through to the finished installation and any support afterwards.',
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
  ],

  complianceFooterNote:
    'AlgarveSecure installs security and smart home systems for residential and commercial properties across the Algarve, with support in English for homeowners based locally and abroad.',
};
