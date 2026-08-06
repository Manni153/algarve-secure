'use strict';

// Order below is priority order for build/internal-linking weight.
// CCTV Installation is the flagship page: extra depth + links to all 22 towns.
//
// Content is grounded in the installer partner's actual published service
// list (camera systems with AI-assisted monitoring, intrusion/perimeter
// alarms, access control, gate & barrier automation plus security doors and
// sectional gates, addressable fire detection, structured network/telecoms
// infrastructure). No brand names, warranty lengths, response-time
// commitments or capabilities beyond what's confirmed are included.
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
      'AI-assisted monitoring, so activity is easier to review rather than scrubbing through hours of raw footage',
      'Remote viewing from your phone via a dedicated app, wherever you are',
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
      'Intruder alarm systems with motion sensors, connected control panels and app-based alerts, for villas and holiday homes across the Algarve. Call +351 923 272 806.',
    h1: 'Alarm Systems in the Algarve',
    heroSubhead:
      'Intruder alarm systems with motion sensors, connected control panels and app-based alerts, for villas, apartments and holiday homes.',
    imageAlt: '[Placeholder: Alarm control panel and door sensor installed indoors]',
    intro:
      'An alarm system covers the parts of a property a camera can’t always watch — doors, windows and internal movement — and adds an on-site deterrent alongside whatever a camera records.',
    included: [
      'Motion sensors covering both indoor rooms and outdoor perimeter areas',
      'Outdoor sensors designed to resist false alarms from wind, weather and animals',
      'High-power sirens as an on-site deterrent',
      'Connected control panels that manage sensors and sirens as one system',
      'Alerts and control through an app, so you can check status remotely',
      'Systems suited to permanent homes and seasonal or holiday properties',
    ],
    whyItMatters:
      'Many properties in the Algarve sit empty for weeks at a time while owners are back in the UK, Ireland, the Netherlands or Germany. An alarm system you can arm, disarm and check on remotely gives you a way to keep watch over an empty property without being there in person.',
    extraSections: [
      {
        heading: 'Perimeter & Indoor Coverage',
        text: 'Sensors cover both the outside of the property — doors, windows, boundary lines — and the inside, so movement is picked up whether someone is trying to get in or has already got past the perimeter.',
      },
      {
        heading: 'False-Alarm-Resistant Outdoor Sensors',
        text: 'Outdoor sensors are built to filter out the usual causes of false alerts — wind, small animals, passing headlights — so an alarm going off means something actually triggered it, not the weather.',
      },
      {
        heading: 'Connected Control Panels',
        text: 'Sensors and sirens run through a connected control panel rather than as separate standalone units, so the whole system arms, disarms and reports faults together.',
      },
      {
        heading: 'App-Based Alerts & Control',
        text: 'Arming, disarming and alerts are handled through an app, so you can check the status of the system or respond to an alert without being on-site.',
      },
    ],
  },
  {
    slug: 'access-control',
    name: 'Access Control',
    navLabel: 'Access Control',
    flagship: false,
    metaTitle: 'Access Control Systems Algarve | AlgarveSecure',
    metaDescription:
      'Intelligent readers, electronic locks and video intercoms for gated properties, apartment blocks and businesses in the Algarve. Call +351 923 272 806.',
    h1: 'Access Control Systems in the Algarve',
    heroSubhead:
      'Intelligent readers, electronic locks and video intercoms, so only the people you want on the property can get in.',
    imageAlt: '[Placeholder: Video intercom panel mounted beside a gated entrance]',
    intro:
      'Access control puts you in charge of who can get onto a property — cleaners, gardeners, guests and delivery drivers — without needing to hand out physical keys or be on-site to let people in.',
    included: [
      'Intelligent readers for card, fob or code-based entry',
      'Electronic locks controlled without a physical key',
      'Video door entry and intercom systems',
      'Turnstiles for shared entrances in condominiums and commercial premises',
      'Integration with gate automation for full perimeter control',
      'Access limited to authorised people only',
    ],
    whyItMatters:
      'For gated villas, condominiums and rental properties, controlling who comes through the front gate matters — especially when you’re not there to answer the door yourself. Access control lets you manage entry for cleaners, gardeners, guests and delivery drivers without handing out physical keys.',
    extraSections: [
      {
        heading: 'Intelligent Readers',
        text: 'Card, fob and code-based readers control who can open a door or gate, without needing to cut and manage physical keys for every cleaner, guest or contractor.',
      },
      {
        heading: 'Electronic Locks',
        text: 'Doors and gates are fitted with electronic locks that can be managed and updated without a locksmith call-out every time access needs to change.',
      },
      {
        heading: 'Turnstiles for Shared & Commercial Entrances',
        text: 'For condominiums, gated developments and business premises, turnstiles keep entry limited to authorised people at shared or higher-traffic access points.',
      },
      {
        heading: 'Intercom Integration',
        text: 'Access control ties into the property’s video intercom setup, so entry and communication work as one system rather than separate installs.',
      },
    ],
  },
  {
    slug: 'gate-automation',
    name: 'Gate Automation',
    navLabel: 'Gate Automation',
    flagship: false,
    metaTitle: 'Automated Gate Installation Algarve | AlgarveSecure',
    metaDescription:
      'Motorised gates, barriers, security doors and sectional gates for villas and gated developments across the Algarve. Call +351 923 272 806.',
    h1: 'Automated Gate Systems in the Algarve',
    heroSubhead:
      'Motorised gates and barriers, plus security doors and sectional gates, with remote and app control.',
    imageAlt: '[Placeholder: Automated sliding driveway gate at villa entrance]',
    intro:
      'A gate that opens smoothly and reliably is often the first thing that makes a property feel secure — and the first thing that frustrates an owner when it doesn’t.',
    included: [
      'Automation for swing gates, sliding gates and barriers',
      'Remote controls and keypad entry',
      'App-based opening for guests and family',
      'Security doors and sectional gates for residential, commercial and industrial entrances',
      'Integration with intercom and access control systems',
      'Backup power available, so gates can keep working through a power interruption',
    ],
    whyItMatters:
      'Automating a driveway gate adds a layer of security while making everyday access easier for family, guests and visiting contractors — no more getting out of the car in the rain to open a manual gate by hand.',
    extraSections: [
      {
        heading: 'Gate & Barrier Automation',
        text: 'Swing gates, sliding gates and barriers are motorised and connected to remote controls, keypads or an app, so opening the driveway doesn’t mean getting out of the car.',
      },
      {
        heading: 'Security Doors',
        text: 'Resistant, modern security door solutions for entrances that need more than a standard domestic door — residential, commercial or industrial.',
      },
      {
        heading: 'Sectional Gates',
        text: 'Sectional gate solutions sized to the entrance, from a single villa driveway to a commercial or industrial access point.',
      },
      {
        heading: 'Backup Power',
        text: 'Backup power can be added to gate and access systems, so a power cut doesn’t mean being locked in or out.',
      },
    ],
  },
  {
    slug: 'fire-detection',
    name: 'Fire Detection',
    navLabel: 'Fire Detection',
    flagship: false,
    metaTitle: 'Fire Detection Installation Algarve | AlgarveSecure',
    metaDescription:
      'Optical smoke detectors and addressable fire panels for homes and businesses in the Algarve. Call +351 923 272 806.',
    h1: 'Fire Detection Systems in the Algarve',
    heroSubhead:
      'Optical smoke detectors and addressable fire panels, built for prevention, safety and a quick response.',
    imageAlt: '[Placeholder: Smoke detector mounted on ceiling in hallway]',
    intro:
      'A property standing empty for long stretches is exactly where early fire detection matters most — there’s nobody there to smell smoke or notice a fault before it becomes serious.',
    included: [
      'Optical smoke detectors for early detection',
      'Addressable fire panels, so the system can identify exactly which detector triggered',
      'Detectors wired with isolation, so a single fault doesn’t take the rest of the loop offline',
      'Interlinked alerts so a trigger is noticed throughout the property',
      'Suited to homes, businesses and larger properties such as warehouses',
      'Can be combined with your existing security setup',
    ],
    whyItMatters:
      'A property that stands empty for long stretches is exactly where early detection matters most — there’s nobody there to smell smoke or notice a fault before it turns serious. Addressable panels and optical detectors are built to catch that early, whether the property is occupied or not.',
    extraSections: [
      {
        heading: 'Optical Smoke Detectors',
        text: 'Optical detectors sense smoke early, before a fire has had the chance to take hold, whether the property is a home, a business, or a larger space such as a warehouse.',
      },
      {
        heading: 'Addressable Fire Panels',
        text: 'An addressable panel can identify exactly which detector has triggered, rather than just sounding a general alarm — useful on larger properties where knowing the location matters.',
      },
      {
        heading: 'Detector Isolation',
        text: 'Detectors are wired with isolation built in, so a single faulty or triggered detector doesn’t take the rest of the fire loop offline.',
      },
      {
        heading: 'Built for Prevention and a Quick Response',
        text: 'The goal is catching a problem early: detection and alert systems designed for prevention, safety and a quick response if something does trigger.',
      },
    ],
  },
  {
    slug: 'home-networking',
    name: 'Home Networking',
    navLabel: 'Home Networking',
    flagship: false,
    metaTitle: 'Home Networking Installation Algarve | AlgarveSecure',
    metaDescription:
      'Structured cabling, network racks and backup power, built to support your cameras, alarms and access control across the Algarve. Call +351 923 272 806.',
    h1: 'Home Networking in the Algarve',
    heroSubhead:
      'Structured cabling, network racks and backup power, built to support your cameras, alarms and access control reliably.',
    imageAlt: '[Placeholder: Network router and cabling panel installed in utility cupboard]',
    intro:
      'Every camera, alarm and access control device in a property depends on a network connection that doesn’t drop out. A poorly planned network is one of the most common reasons security systems become unreliable.',
    included: [
      'Structured cabling for a stable, wired backbone',
      'Organised network racks, so equipment is installed properly rather than left as a tangle of cables',
      'Backup power (UPS) to keep the network running through a power interruption',
      'Telecommunications infrastructure connecting communication and access systems',
      'A network built to support CCTV, alarms and access control running reliably',
      'Suited to homes, offices and larger properties with more equipment to connect',
    ],
    whyItMatters:
      'Solid networking is the foundation everything else runs on. Structured cabling, a properly organised rack and backup power mean your cameras, alarms and access control simply work, rather than dropping out because the network underneath them wasn’t planned properly.',
    extraSections: [
      {
        heading: 'Structured Cabling',
        text: 'A wired, structured cabling backbone gives cameras, alarms and access control a stable connection to rely on, rather than depending on Wi-Fi alone.',
      },
      {
        heading: 'Network Rack & Infrastructure',
        text: 'Equipment is installed into an organised, labelled rack rather than left as a loose pile of boxes and cables — easier to maintain and to troubleshoot if something needs attention.',
      },
      {
        heading: 'Backup Power (UPS)',
        text: 'A UPS keeps the network — and whatever depends on it, like cameras and alarms — running through a short power interruption instead of dropping offline.',
      },
      {
        heading: 'Built to Support Your Other Systems',
        text: 'Networking is the layer everything else sits on top of. It’s set up with your cameras, alarms and access control in mind, not as a separate, disconnected job.',
      },
    ],
  },
  {
    slug: 'smart-home-automation',
    name: 'Smart Home Automation',
    navLabel: 'Smart Home Automation',
    flagship: false,
    metaTitle: 'Smart Home & Property Automation Algarve | AlgarveSecure',
    metaDescription:
      'Connected gate, access control, camera and alarm automation for homes and properties across the Algarve, managed from one app. Call +351 923 272 806.',
    h1: 'Smart Home Automation in the Algarve',
    heroSubhead:
      'Gates, access control, cameras and alarms connected together and managed from one app, rather than run as separate systems.',
    imageAlt: '[Placeholder: Smart home control panel and app interface on wall-mounted tablet]',
    intro:
      'Automation, for most properties, starts with connecting the systems already in place — the gate, the access control, the cameras, the alarm — so they work together and can be managed from a single app, rather than being separate installs that don’t talk to each other.',
    included: [
      'Gate and barrier automation as part of a connected setup',
      'Access control integrated with automated entry points',
      'Cameras, alarms and access control connected through a single app rather than run separately',
      'Remote control of gates and access points from your phone',
      'Automation scaled to the property — residential, condominium or commercial',
      'Suited to both new installations and connecting up existing systems',
    ],
    whyItMatters:
      'Managing a property from a distance is easier when the gate, the cameras, the alarm and the access control all work through one app rather than several different logins. In practice, automation is mostly about making the systems you already rely on work together.',
    extraSections: [
      {
        heading: 'Gate & Entry Automation',
        text: 'Driveway gates, barriers and entry points are motorised and connected, so access doesn’t rely on someone being physically there to open them.',
      },
      {
        heading: 'Access Control Integration',
        text: 'Access control is built into the same connected setup as the gate and cameras, rather than installed as a separate, standalone system.',
      },
      {
        heading: 'One App, Several Systems',
        text: 'Cameras, alarms, access control and gates connect through a single app, so you’re not switching between separate logins to check different parts of the property.',
      },
      {
        heading: 'Scales With the Property',
        text: 'The same approach works for a single villa, a condominium’s shared entrances, or a commercial property — the setup is sized to what’s actually there.',
      },
    ],
  },
];

module.exports = services;
