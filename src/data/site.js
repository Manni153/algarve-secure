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
      text: 'Equipment sourced and fitted by the same team, so your cameras, alarms and smart home devices are set up to work together properly from day one.',
    },
  ],

  complianceFooterNote:
    'AlgarveSecure installs security and smart home systems for residential and commercial properties across the Algarve, with support in English for homeowners based locally and abroad.',
};
