'use strict';

// Order below is priority order for build/internal-linking weight.
// CCTV Installation is the flagship page: extra depth + links to all 22 towns.
const services = [
  {
    slug: 'cctv-installation',
    name: 'CCTV Installation',
    navLabel: 'CCTV Installation',
    flagship: true,
    metaTitle: 'CCTV Installation Algarve | English-Speaking Installer | AlgarveSecure',
    metaDescription:
      'CCTV camera installation for homes and businesses across the Algarve. Indoor & outdoor cameras, NVR/DVR recording, remote app viewing. Call +351 923 272 806.',
    h1: 'CCTV Installation in the Algarve',
    heroSubhead:
      'Indoor and outdoor camera systems with remote viewing, installed and explained in plain English for homeowners across the Algarve.',
    imageAlt: '[Placeholder: CCTV camera close-up, mounted on villa exterior wall]',
    intro:
      'A CCTV system is often the first thing an owner installs to keep an eye on a property from a distance — whether that means checking on a pool area, seeing who has come to the gate, or looking in on a holiday rental between guests.',
    included: [
      'Outdoor cameras built to handle the Algarve’s sun, salt air and rain',
      'Indoor cameras for hallways, living areas and entry points',
      'NVR/DVR recording so footage is stored securely on-site',
      'Remote viewing from your phone via a dedicated app, wherever you are',
      'Night vision and motion-triggered recording',
      'Systems sized for villas, apartments and small businesses',
    ],
    whyItMatters:
      'For owners who split their time between the Algarve and their home country, being able to check on a property from anywhere is a big part of peace of mind. A well-placed camera system means you can see who’s at the gate, keep an eye on a pool area, or check in on a rental property between guests — all from an app on your phone, with the whole process explained in English from the first call.',
    extraSections: [
      {
        heading: 'Indoor & Outdoor Cameras',
        text: 'Camera placement is planned around how the property is actually used — entrances, driveways, pool areas and boundary lines outside, and hallways, living areas or storage rooms inside. Outdoor units are chosen to cope with direct sun and coastal weather; indoor units are kept discreet.',
      },
      {
        heading: 'NVR & DVR Recording',
        text: 'Footage is recorded to a local NVR or DVR unit kept on-site, so you have a recorded history to look back on rather than relying on live viewing alone. Storage capacity and retention are matched to how many cameras you run and how long you want footage kept.',
      },
      {
        heading: 'Remote Viewing From Anywhere',
        text: 'Once set up, cameras can be viewed live from a phone or tablet through a dedicated app — useful whether you’re at the local café, back in the UK, Ireland, the Netherlands or Germany, or simply upstairs and want to check the front gate.',
      },
      {
        heading: 'Built for the Algarve Climate',
        text: 'Strong sun, salt air near the coast and heavy winter rain all take a toll on outdoor electronics over time. Equipment and mounting positions are chosen with that climate in mind, rather than treating every install the same regardless of location.',
      },
    ],
  },
  {
    slug: 'alarm-systems',
    name: 'Alarm Systems',
    navLabel: 'Alarm Systems',
    flagship: false,
    metaTitle: 'Alarm System Installation Algarve | AlgarveSecure',
    metaDescription:
      'Intruder alarm systems for villas, apartments and holiday homes across the Algarve. Remote arm/disarm, English-language support. Call +351 923 272 806.',
    h1: 'Alarm Systems in the Algarve',
    heroSubhead:
      'Intruder alarm systems for villas, apartments and holiday homes, set up and explained with clear English-language support.',
    imageAlt: '[Placeholder: Alarm control panel and door sensor installed indoors]',
    intro:
      'An alarm system covers the parts of a property a camera can’t always watch — doors, windows and internal movement — and adds an audible deterrent on top of recorded footage.',
    included: [
      'Door and window sensors for full perimeter coverage',
      'Motion detectors for hallways, living rooms and access points',
      'On-site siren to deter intruders',
      'Panic buttons for added peace of mind',
      'Remote arm/disarm from a mobile app',
      'Systems suited to permanent homes and seasonal or holiday properties',
    ],
    whyItMatters:
      'Many properties in the Algarve sit empty for weeks at a time while owners are back in the UK, Ireland, the Netherlands or Germany. An alarm system you can arm, disarm and check on remotely gives you a way to keep watch over an empty property without being there in person.',
    extraSections: [],
  },
  {
    slug: 'access-control',
    name: 'Access Control',
    navLabel: 'Access Control',
    flagship: false,
    metaTitle: 'Access Control Systems Algarve | AlgarveSecure',
    metaDescription:
      'Video intercoms, keypads and card/fob entry systems for gated properties and apartment blocks in the Algarve. Call +351 923 272 806.',
    h1: 'Access Control Systems in the Algarve',
    heroSubhead:
      'Keypads, video intercoms and card or fob entry systems for gated properties, apartment blocks and businesses.',
    imageAlt: '[Placeholder: Video intercom panel mounted beside a gated entrance]',
    intro:
      'Access control puts you in charge of who can get onto a property — cleaners, gardeners, guests and delivery drivers — without needing to hand out physical keys or be on-site to let people in.',
    included: [
      'Video door entry and intercom systems',
      'Keypad and code-based entry',
      'Card and fob access for apartment blocks and gated communities',
      'Integration with gate automation for full perimeter control',
      'Visitor and delivery access without being on-site',
      'Access logs so you know who came and went',
    ],
    whyItMatters:
      'For gated villas, condominiums and rental properties, controlling who comes through the front gate matters — especially when you’re not there to answer the door yourself. Access control lets you manage entry for cleaners, gardeners, guests and delivery drivers without handing out physical keys.',
    extraSections: [],
  },
  {
    slug: 'gate-automation',
    name: 'Gate Automation',
    navLabel: 'Gate Automation',
    flagship: false,
    metaTitle: 'Automated Gate Installation Algarve | AlgarveSecure',
    metaDescription:
      'Motorised gates and driveway entry systems for villas and gated developments across the Algarve. Remote and app control. Call +351 923 272 806.',
    h1: 'Automated Gate Systems in the Algarve',
    heroSubhead:
      'Motorised gates and entry barriers for driveways, villas and gated developments, with remote and app control.',
    imageAlt: '[Placeholder: Automated sliding driveway gate at villa entrance]',
    intro:
      'A gate that opens smoothly and reliably is often the first thing that makes a property feel secure — and the first thing that frustrates an owner when it doesn’t.',
    included: [
      'Swing and sliding gate motors',
      'Remote controls and keypad entry',
      'App-based opening for guests and family',
      'Integration with intercom and access control systems',
      'Battery backup so gates keep working during power cuts',
      'Suited to both new installations and upgrading existing gates',
    ],
    whyItMatters:
      'Automating a driveway gate adds a layer of security while making everyday access easier for family, guests and visiting contractors — no more getting out of the car in the rain to open a manual gate by hand.',
    extraSections: [],
  },
  {
    slug: 'fire-detection',
    name: 'Fire Detection',
    navLabel: 'Fire Detection',
    flagship: false,
    metaTitle: 'Fire & Smoke Detection Installation Algarve | AlgarveSecure',
    metaDescription:
      'Smoke and heat detection systems for homes and small businesses in the Algarve, with mobile alerts. Call +351 923 272 806.',
    h1: 'Fire Detection Systems in the Algarve',
    heroSubhead:
      'Smoke and heat detection for homes and small businesses, with alerts sent straight to your phone.',
    imageAlt: '[Placeholder: Smoke detector mounted on ceiling in hallway]',
    intro:
      'A property standing empty for long stretches is exactly where early fire detection matters most — there’s nobody there to smell smoke or notice a fault.',
    included: [
      'Smoke detectors for bedrooms, hallways and living areas',
      'Heat detectors for kitchens and garages',
      'Interlinked alarms so one trigger sounds throughout the property',
      'Mobile alerts for early warning, even when you’re away',
      'Suited to villas, apartments and holiday rental properties',
      'Can be combined with your existing security or smart home setup',
    ],
    whyItMatters:
      'Mobile alerts mean you find out early, whether you’re across town or back home in the UK, Ireland, the Netherlands or Germany — rather than finding out when it’s too late to make a difference.',
    extraSections: [],
  },
  {
    slug: 'home-networking',
    name: 'Home Networking',
    navLabel: 'Home Networking',
    flagship: false,
    metaTitle: 'Home Networking & Wi-Fi Installation Algarve | AlgarveSecure',
    metaDescription:
      'Whole-property Wi-Fi coverage and structured cabling to support cameras, alarms and smart home devices across the Algarve. Call +351 923 272 806.',
    h1: 'Home Networking in the Algarve',
    heroSubhead:
      'Reliable Wi-Fi coverage and structured cabling to support your cameras, alarms and smart home devices.',
    imageAlt: '[Placeholder: Network router and cabling panel installed in utility cupboard]',
    intro:
      'Every camera, alarm and smart device in a property depends on a network connection that doesn’t drop out. A poorly planned network is the most common reason smart security systems become unreliable.',
    included: [
      'Whole-property Wi-Fi coverage, including outdoor areas and outbuildings',
      'Structured cabling for a stable, wired backbone',
      'Network setup that supports CCTV, alarms and smart home devices reliably',
      'Mesh Wi-Fi for larger villas and multi-floor properties',
      'Guest network setup for rental properties',
      'Troubleshooting for existing networks with dead spots or drop-outs',
    ],
    whyItMatters:
      'Solid networking is the foundation everything else runs on — get it right and your cameras, alarms and smart home devices simply work, without constant drop-outs or dead spots around the property.',
    extraSections: [],
  },
  {
    slug: 'smart-home-automation',
    name: 'Smart Home Automation',
    navLabel: 'Smart Home Automation',
    flagship: false,
    metaTitle: 'Smart Home Automation Installation Algarve | AlgarveSecure',
    metaDescription:
      'Smart lighting, climate, blinds and hub installation for homes across the Algarve, controlled from your phone. Call +351 923 272 806.',
    h1: 'Smart Home Automation in the Algarve',
    heroSubhead:
      'Lighting, climate, blinds and hubs, connected together and controlled from your phone.',
    imageAlt: '[Placeholder: Smart home control panel and app interface on wall-mounted tablet]',
    intro:
      'A smart home setup that actually works together — lighting, climate, blinds and security in one place — makes a property easier to manage from a distance.',
    included: [
      'Smart lighting control, scheduling and scenes',
      'Climate control for air conditioning and heating',
      'Automated blinds and shutters',
      'Central hubs that bring devices together in one app',
      'Voice control integration',
      'Combine with CCTV and alarms for one connected system',
    ],
    whyItMatters:
      'Whether that’s adjusting the heating before you arrive or checking the blinds are closed while you’re away, having everything connected in one app makes managing a property from a distance far simpler.',
    extraSections: [],
  },
];

module.exports = services;
