'use strict';

// Order below is priority order for build/internal-linking weight.
// CCTV Installation is the flagship page: extra depth + links to all 22 towns.
//
// Content is grounded in the installer partner's actual published service
// list (camera systems with AI-assisted monitoring, intrusion/perimeter
// alarms, access control, gate & barrier automation plus security doors and
// sectional gates, addressable fire detection, structured network/telecoms
// infrastructure) — never named on the public site. No brand names,
// warranty lengths, response-time commitments, pricing figures or
// capabilities beyond what's confirmed are included anywhere below.
const services = [
  {
    slug: 'cctv-installation',
    name: 'CCTV Installation',
    navLabel: 'CCTV Installation',
    flagship: true,
    h1: 'CCTV Installation in the Algarve',
    heroHeadline: 'See what\'s happening at home, from anywhere.',
    heroTagline: 'Camera systems with remote viewing — installed and explained in plain English.',
    heroSubhead:
      'Indoor and outdoor camera systems with remote viewing, installed and explained in plain English for homeowners across the Algarve.',
    imageAlt: '[Placeholder: CCTV camera close-up, mounted on villa exterior wall]',
    scenarioImageAlt: '[Placeholder: Aerial or wide shot of a villa boundary wall and pool area showing camera coverage angles]',
    detailImageAlt: '[Placeholder: NVR recording unit and cabling in a utility cupboard]',
    intro:
      'A CCTV system is often the first thing an owner installs to keep an eye on a property from a distance — whether that means checking on a pool area, seeing who has come to the gate, or looking in on a holiday rental between guests.',
    deepDive: [
      {
        heading: 'How Camera Positions Actually Get Decided',
        text: "Camera placement isn't picked from a fixed formula. It usually starts with a conversation about the property — where the entrances are, which areas already have a clear sightline from inside the house, and which parts of the plot would otherwise go unwatched — followed by a site visit where that's possible, or a review of photos and a description where it isn't. A villa with a long driveway and a rear garden backing onto open land needs a different camera count and placement to a townhouse with one street-facing entrance, and getting the positions right matters more than the total number of cameras: four cameras covering genuine blind spots do more than eight covering the same few angles from slightly different heights.",
      },
      {
        heading: 'Why Two Quotes for Similar Properties Can Differ',
        text: 'The most common reason two CCTV quotes for what look like similar properties come out differently is cabling, not cameras. A property with easy access to a utility space and short, direct cable runs to each camera position is a more contained job than one where cabling has to be routed through finished walls, across multiple floors, or out to a detached garage or pool house. The number of cameras, the resolution and features chosen, and how much of the property needs covering all play a part too, which is why an accurate quote comes from a conversation about the specific property rather than a flat per-camera price.',
      },
    ],
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
    scenarios: [
      {
        heading: 'Villa Perimeter Coverage',
        text: 'Cameras positioned around the boundary of a villa — garden walls, side access points, the rear of the property — cover the parts that aren’t visible from the house itself, so the whole perimeter is accounted for rather than just the front door.',
      },
      {
        heading: 'Pool Area Monitoring',
        text: 'A camera covering the pool area means it can be checked without walking outside — useful for keeping an eye on the space when the property is empty, or confirming a pool cover is on before a storm.',
      },
      {
        heading: 'Holiday-Let Guest Turnover',
        text: 'For a rental property, an outdoor camera covering the entrance or driveway lets an owner or property manager confirm guests have arrived or left, without being on-site for every check-in and check-out.',
      },
      {
        heading: 'Gate & Driveway Coverage',
        text: 'A camera covering the driveway and gate shows who’s arrived before anyone answers the door — useful for deliveries, expected guests, or simply confirming the gate is closed properly after visitors leave.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'Full perimeter coverage — driveway, pool area, garden boundaries and entry points — sized to the layout of the plot.' },
      { type: 'Apartment', text: 'Cameras typically cover the property’s own entrance, balcony or terrace, alongside any building-level CCTV already covering shared areas.' },
      { type: 'Gated Community', text: 'Coverage focuses on the property itself, complementing rather than replacing whatever CCTV the development already has on shared gates and common areas.' },
      { type: 'Holiday Rental', text: 'Outdoor-only coverage of entrances and communal outdoor space is typical. Indoor cameras raise real privacy considerations for guests, worth thinking through rather than assuming they belong everywhere.' },
    ],
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
    faqs: [
      {
        q: 'How much does CCTV installation cost?',
        a: 'Costs vary depending on the number of cameras, the size of the property and how much cabling or network work is needed — there’s no single price that applies to every property. The most accurate way to get a number is a quick call or WhatsApp message describing the property.',
      },
      {
        q: 'How long does installation take?',
        a: 'It depends on the number of cameras and the property — a straightforward villa system is typically a more contained job than a larger property or one needing extra cabling work. Timing is confirmed as part of the assessment, not before it.',
      },
      {
        q: 'Do I need a fast internet connection for remote viewing?',
        a: 'A stable connection helps, particularly for viewing multiple cameras or higher-resolution footage remotely. If a property has a patchy connection, that’s worth mentioning early — it may be worth pairing CCTV with a <a href="/home-networking">home networking assessment</a>.',
      },
      {
        q: 'Where is the footage stored?',
        a: 'Footage is recorded to a local NVR or DVR unit kept on-site, rather than relying solely on cloud storage — so there’s a recorded history to look back on even during an internet outage.',
      },
      {
        q: 'Can I view cameras from outside Portugal?',
        a: 'Yes — the app works over any working internet connection, so it makes no difference whether the viewer is a few streets from the property or on a completely different continent.',
      },
      {
        q: 'Is CCTV suitable for a holiday rental?',
        a: 'Outdoor cameras covering entrances and driveways are common on rental properties, mainly for security and confirming guest arrival or departure. Indoor cameras raise real privacy considerations for guests and are worth thinking through carefully rather than assuming they’re appropriate everywhere.',
      },
      {
        q: 'Can CCTV be combined with an alarm system?',
        a: 'Yes — cameras and <a href="/alarm-systems">alarm systems</a> are commonly installed together and can be set up to work as one connected system rather than two separate installs.',
      },
      {
        q: 'What happens if a camera is damaged or stops working?',
        a: 'Get in touch and it’ll be looked at as part of ongoing support — the same number for a new install is the number to call if something needs attention afterwards.',
      },
    ],
  },
  {
    slug: 'alarm-systems',
    name: 'Alarm Systems',
    navLabel: 'Alarm Systems',
    flagship: false,
    h1: 'Alarm Systems in the Algarve',
    heroHeadline: 'Know the moment something\'s wrong — not after the fact.',
    heroTagline: 'Motion sensors and app alerts — installed and explained in plain English.',
    heroSubhead:
      'Intruder alarm systems with motion sensors, connected control panels and app-based alerts, for villas, apartments and holiday homes.',
    imageAlt: '[Placeholder: Alarm control panel and door sensor installed indoors]',
    scenarioImageAlt: '[Placeholder: Door and window sensor mounted discreetly on a villa window frame]',
    detailImageAlt: '[Placeholder: Wall-mounted alarm keypad next to a front door]',
    intro:
      'An alarm system covers the parts of a property a camera can’t always watch — doors, windows and internal movement — and adds an on-site deterrent alongside whatever a camera records.',
    deepDive: [
      {
        heading: 'Matching Sensor Coverage to How a Property Is Actually Used',
        text: 'An alarm system is planned around how a property is actually used, not a checklist. A full-time home with pets or regular visitors needs sensors set up to avoid tripping on normal daily movement, while a property that’s empty for months at a stretch can run a wider, more sensitive coverage without that concern. Perimeter sensors on doors and windows form the baseline; internal motion sensors get added where they make sense — hallways and living areas rather than every room — and outdoor sensors covering a driveway or gate approach are common on larger villas where the alarm needs to pick up movement before someone reaches the building.',
      },
      {
        heading: 'What Actually Causes False Alarms, and How It’s Avoided',
        text: "Most false alarms trace back to a handful of predictable causes: an outdoor sensor picking up a cat or a gust of wind through foliage, a door left slightly ajar registering as open, or a sensor placed somewhere it catches sunlight moving across a wall at certain times of day. Outdoor sensors are chosen and positioned specifically to filter these out, and getting the initial placement right avoids the more common alternative — an alarm that gets disarmed altogether because it goes off too often to be trusted.",
      },
    ],
    included: [
      'Motion sensors covering both indoor rooms and outdoor perimeter areas',
      'Outdoor sensors designed to resist false alarms from wind, weather and animals',
      'High-power sirens as an on-site deterrent',
      'Connected control panels that manage sensors and sirens as one system',
      'Alerts and control through an app, so you can check status remotely',
      'Systems suited to permanent homes and seasonal or holiday properties',
    ],
    whyItMatters:
      'Many properties in the Algarve sit empty for weeks at a time while owners are back in the UK, Ireland, the Netherlands or Germany. An alarm system that can be armed, disarmed and checked remotely gives a way to keep watch over an empty property without being there in person.',
    scenarios: [
      {
        heading: 'Extended Time Away',
        text: 'For an owner back in the UK, Ireland, the Netherlands or Germany for weeks at a time, an alarm system that can be armed, checked and disarmed remotely means the property isn’t simply left unmonitored for the whole period.',
      },
      {
        heading: 'Villa With Multiple Entry Points',
        text: 'Larger villas often have several doors and windows at ground level — sensors across each entry point mean coverage isn’t limited to just the front door.',
      },
      {
        heading: 'Holiday Home Between Visits',
        text: 'A property used a few weeks a year benefits from an alarm that’s easy to arm before leaving and check on remotely, rather than one that needs someone physically present to manage.',
      },
      {
        heading: 'Apartment With Shared Access',
        text: 'In an apartment, an alarm system covering your own unit adds a layer of protection that’s independent of whatever security the building itself has at the main entrance.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'Full sensor coverage across doors, windows and motion zones, with an on-site siren and app-based control.' },
      { type: 'Apartment', text: 'Sensors cover the unit itself — doors, windows, main living areas — independent of any building-level security.' },
      { type: 'Gated Community', text: 'An alarm system adds property-level coverage on top of whatever perimeter security the development provides at its own gates.' },
      { type: 'Holiday Rental', text: 'Remote arm and disarm makes it possible to manage the alarm between guest stays without needing to be on-site for every changeover.' },
    ],
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
        text: 'Arming, disarming and alerts are handled through an app, so the system’s status can be checked or an alert responded to without being on-site.',
      },
    ],
    faqs: [
      {
        q: 'How does an alarm system get armed and disarmed?',
        a: 'Through a connected control panel, and through an app on your phone — so the system can be armed or disarmed without needing to be at the property.',
      },
      {
        q: 'Will an outdoor sensor go off because of wind or animals?',
        a: 'Outdoor sensors are designed to filter out common causes of false alerts — wind, small animals, passing headlights — so alerts are less likely to be triggered by the weather rather than something worth checking.',
      },
      {
        q: 'What happens when the alarm is triggered?',
        a: 'The on-site siren sounds as a deterrent, and an alert is sent to the app, so you know something has triggered the system whether you’re at the property or not.',
      },
      {
        q: 'Can I add an alarm system to an existing CCTV setup?',
        a: 'Yes — alarms and <a href="/cctv-installation">cameras</a> are commonly installed together and can be set up to work as one connected system.',
      },
      {
        q: 'Is an alarm system suitable for an apartment?',
        a: 'Yes — sensors are sized and placed for the property itself, whether that’s a large villa or a single apartment unit.',
      },
      {
        q: 'Does the alarm need a landline or broadband connection?',
        a: 'The connected control panel and app-based alerts rely on a working network connection at the property — worth mentioning if a property has a patchy connection, so a <a href="/home-networking">home networking</a> assessment can be factored in alongside it.',
      },
      {
        q: 'How much does an alarm system cost?',
        a: 'Costs depend on the size of the property and how many sensors are needed. A larger property with more entry points and outdoor coverage naturally costs more than a compact apartment with a handful of door and window sensors — get in touch with a few specifics and the difference becomes clear.',
      },
    ],
  },
  {
    slug: 'access-control',
    name: 'Access Control',
    navLabel: 'Access Control',
    flagship: false,
    h1: 'Access Control Systems in the Algarve',
    heroHeadline: 'Know exactly who\'s coming and going, before you open the door.',
    heroTagline: 'Electronic locks and video intercoms — installed and explained in plain English.',
    heroSubhead:
      'Intelligent readers, electronic locks and video intercoms, so only the people you want on the property can get in.',
    imageAlt: '[Placeholder: Video intercom panel mounted beside a gated entrance]',
    scenarioImageAlt: '[Placeholder: Keypad or fob reader mounted at a villa gate entrance]',
    detailImageAlt: '[Placeholder: Electronic door lock with card reader on an apartment entrance]',
    intro:
      'Access control puts you in charge of who can get onto a property — cleaners, gardeners, guests and delivery drivers — without needing to hand out physical keys or be on-site to let people in.',
    deepDive: [
      {
        heading: 'Deciding Between a Keypad, a Card Reader and a Video Intercom',
        text: 'Which access method makes sense depends on who needs to get in and how often. A property with a small, fairly fixed group of people coming and going — an owner, a cleaner, a gardener — often works fine with a keypad or fob, where a code or fob can be reissued without a locksmith call-out. A building with a rotating cast of visitors, deliveries and guests benefits more from a video intercom, where a person can be seen and spoken to before the door or gate is released. Many properties end up with a combination: a fob for regular access and an intercom at the main entrance for everyone else.',
      },
      {
        heading: 'Where Access Control Meets the Rest of the Property',
        text: "Access control rarely stands alone. It usually connects to whatever handles the <a href=\"/gate-automation\">gate</a> — so a code that opens the front door can open the driveway gate too — and increasingly ties into the same app used for <a href=\"/cctv-installation\">cameras</a> and the <a href=\"/alarm-systems\">alarm</a>, so checking who came through the gate and seeing the camera footage from that moment happen in one place rather than two separate systems that don't talk to each other.",
      },
    ],
    included: [
      'Intelligent readers for card, fob or code-based entry',
      'Electronic locks controlled without a physical key',
      'Video door entry and intercom systems',
      'Turnstiles for shared entrances in condominiums and commercial premises',
      'Integration with gate automation for full perimeter control',
      'Access limited to authorised people only',
    ],
    whyItMatters:
      'For gated villas, condominiums and rental properties, controlling who comes through the front gate matters — especially when you’re not there to answer the door yourself. Access control makes it possible to manage entry for cleaners, gardeners, guests and delivery drivers without handing out physical keys.',
    scenarios: [
      {
        heading: 'Managing Cleaners and Gardeners',
        text: 'Rather than cutting spare keys for every cleaner or gardener, a code or fob can be issued and changed whenever needed, without a locksmith call-out.',
      },
      {
        heading: 'Holiday Rental Guest Access',
        text: 'A code-based entry system means guests can let themselves in at check-in without a physical key being handed over or left in a lockbox.',
      },
      {
        heading: 'Apartment Block Shared Entrance',
        text: 'A video intercom at a shared building entrance means a visitor can be seen and spoken to before being buzzed in, rather than the door being opened blind.',
      },
      {
        heading: 'Gated Community Visitor Management',
        text: 'Intelligent readers at a development’s shared entrances mean visitor and delivery access can be managed without a resident needing to come down to the gate.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'Electronic locks and readers at the main entrance and gate, often paired with gate automation for full perimeter control.' },
      { type: 'Apartment', text: 'Video intercom and card or fob entry at the building’s shared entrance, alongside the unit’s own door.' },
      { type: 'Gated Community', text: 'Turnstiles and readers manage entry at shared gates, with access limited to authorised residents and their visitors.' },
      { type: 'Holiday Rental', text: 'Code-based entry removes the need for physical key handovers or lockboxes between guest stays.' },
    ],
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
    faqs: [
      {
        q: 'How is access given to a cleaner or guest?',
        a: 'Through a code, fob or card issued for that person, which can be changed or deactivated whenever needed — no need to cut a new physical key each time.',
      },
      {
        q: 'What happens if a fob is lost or a code forgotten?',
        a: 'Get in touch and it can be reissued or reset as part of ongoing support, without needing to replace the whole system.',
      },
      {
        q: 'Can access control work with an existing gate?',
        a: 'Yes — access control commonly integrates with <a href="/gate-automation">gate automation</a>, so a code or card can open the gate as well as a door.',
      },
      {
        q: 'Is a video intercom necessary, or is a keypad enough?',
        a: 'It depends on the property — a keypad covers basic code-based entry, while a video intercom adds the ability to see and speak to a visitor before letting them in. Which makes sense depends on the property and what you’re trying to manage.',
      },
      {
        q: 'Does access control suit a single apartment, or only larger buildings?',
        a: 'Both — a single apartment can have its own electronic lock and intercom, independent of whether the building has shared access control at the main entrance.',
      },
      {
        q: 'Can I see who has come and gone?',
        a: 'Access logs can show when a code or fob was used, useful for keeping track of cleaners, contractors or guest arrivals without needing to be on-site.',
      },
    ],
  },
  {
    slug: 'gate-automation',
    name: 'Gate Automation',
    navLabel: 'Gate Automation',
    flagship: false,
    h1: 'Automated Gate Systems in the Algarve',
    heroHeadline: 'Open your gate from your phone — no one waiting at the intercom.',
    heroTagline: 'Motorised gates and barriers — installed and explained in plain English.',
    heroSubhead:
      'Motorised gates and barriers, plus security doors and sectional gates, with remote and app control.',
    imageAlt: '[Placeholder: Automated sliding driveway gate at villa entrance]',
    scenarioImageAlt: '[Placeholder: Car approaching an automated gate at a villa driveway]',
    detailImageAlt: '[Placeholder: Gate motor and control unit mounted beside a driveway gate]',
    intro:
      'A gate that opens smoothly and reliably is often the first thing that makes a property feel secure — and the first thing that frustrates an owner when it doesn’t.',
    deepDive: [
      {
        heading: 'Sliding, Swing or Barrier — What the Site Actually Decides',
        text: "The type of gate a property ends up with is usually decided by the site rather than preference. A narrow driveway with a wall close to one side often can't accommodate a swing gate's arc and works better with a sliding gate instead; a wide, flat entrance has more flexibility either way; and shared or commercial entrances handling frequent vehicle movement are often better served by a barrier than a full gate. Automating an existing gate is possible in many cases without replacing it outright, provided the gate itself is in good enough condition to take a motor.",
      },
      {
        heading: 'What Happens When the Power Goes Out',
        text: 'A motorised gate that only works with mains power becomes a real inconvenience during a power cut, which is a genuine consideration in areas prone to interruptions. Backup power can be added specifically so the gate keeps working through a short outage rather than leaving a car stuck on the wrong side of it, and the same backup can extend to whatever <a href="/access-control">access control</a> or intercom is tied into the same entrance.',
      },
    ],
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
    scenarios: [
      {
        heading: 'Daily Driveway Access',
        text: 'Opening a gate without getting out of the car — useful every day, and particularly useful in the rain or arriving with shopping or luggage.',
      },
      {
        heading: 'Guest and Family Access',
        text: 'App-based or remote-control opening means family and regular guests can be given a way to open the gate themselves, without a shared physical key.',
      },
      {
        heading: 'Gated Villa Combined With Access Control',
        text: 'A motorised gate paired with an intercom or reader means a visitor can be seen and let in without anyone walking down the driveway.',
      },
      {
        heading: 'Commercial or Shared Entrance',
        text: 'Sectional gates and security doors suit commercial premises or shared development entrances that need something more robust than a standard domestic gate.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'A motorised swing or sliding gate at the driveway entrance, with remote, keypad or app control.' },
      { type: 'Apartment / Condominium', text: 'Gate automation typically applies to a development’s shared vehicle or pedestrian entrance rather than an individual unit.' },
      { type: 'Gated Community', text: 'Barriers and automated gates manage vehicle access at the development’s entrances, often paired with access control for residents and visitors.' },
      { type: 'Commercial / Industrial', text: 'Security doors and sectional gates suit business premises needing a more robust entrance than a standard domestic gate.' },
    ],
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
    faqs: [
      {
        q: 'Can an existing manual gate be automated?',
        a: 'Often, yes — automation can be added to a gate that’s already in place rather than needing a full replacement, depending on the gate’s condition and design.',
      },
      {
        q: 'What happens to the gate during a power cut?',
        a: 'Backup power can be added to gate and access systems, so a power interruption doesn’t mean being locked in or out.',
      },
      {
        q: 'How is the gate opened — remote, keypad, or app?',
        a: 'Any combination — remote controls, keypad entry and app-based opening can all be set up together, so different people can use whichever suits them.',
      },
      {
        q: 'Can the gate be linked to an intercom?',
        a: 'Yes — gate automation commonly integrates with intercom and <a href="/access-control">access control</a> systems, so a visitor can be seen, spoken to and let in from one setup.',
      },
      {
        q: 'Is gate automation only for large villas?',
        a: 'No — it applies just as well to a single villa gate as to a shared development entrance or commercial access point.',
      },
      {
        q: 'How much does gate automation cost?',
        a: 'It depends on the size and type of gate, and whether it’s a new installation or automating an existing one — get in touch with details of the gate and you’ll get a specific answer.',
      },
    ],
  },
  {
    slug: 'fire-detection',
    name: 'Fire Detection',
    navLabel: 'Fire Detection',
    flagship: false,
    h1: 'Fire Detection Systems in the Algarve',
    heroHeadline: 'Know the moment smoke is detected, not when it\'s too late.',
    heroTagline: 'Smoke detectors and fire panels — installed and explained in plain English.',
    heroSubhead:
      'Optical smoke detectors and addressable fire panels, built for prevention, safety and a quick response.',
    imageAlt: '[Placeholder: Smoke detector mounted on ceiling in hallway]',
    scenarioImageAlt: '[Placeholder: Interlinked smoke detector mounted in a villa bedroom hallway]',
    detailImageAlt: '[Placeholder: Addressable fire panel mounted on a utility room wall]',
    intro:
      'A property standing empty for long stretches is exactly where early fire detection matters most — there’s nobody there to smell smoke or notice a fault before it becomes serious.',
    deepDive: [
      {
        heading: "Why Detector Placement Follows the Property's Layout, Not a Fixed Count",
        text: "The number of detectors a property needs comes from its layout, not a general rule of thumb. Bedrooms, hallways connecting sleeping areas, and living spaces where electrical equipment runs are the typical starting points, with additional coverage added for larger properties, multiple floors, or outbuildings where a fire could develop unnoticed for longer. Interlinking the detectors means a trigger anywhere in the property is heard everywhere in it, which matters most in larger homes or ones with guests unfamiliar with the layout.",
      },
      {
        heading: 'Addressable Panels and Why They Matter More on Bigger Properties',
        text: "A basic smoke detector just sounds an alarm; an addressable panel identifies exactly which detector triggered it. On a small apartment that distinction barely matters, but on a larger villa, a property with outbuildings, or a commercial premises, knowing the location immediately — rather than searching room to room — is the difference that addressable systems are built to provide.",
      },
    ],
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
    scenarios: [
      {
        heading: 'Bedroom and Living Area Coverage',
        text: 'Detectors placed across bedrooms, hallways and living areas mean a fire is picked up early wherever it starts, not just in one part of the property.',
      },
      {
        heading: 'Property Left Empty for Weeks',
        text: 'A property standing empty for long stretches is exactly where early detection matters most — there’s nobody there to smell smoke or notice a fault before it becomes serious.',
      },
      {
        heading: 'Larger Properties or Outbuildings',
        text: 'Addressable panels identify exactly which detector has triggered, which matters more on a larger property, or one with outbuildings, where knowing the location saves time.',
      },
      {
        heading: 'Combining With Existing Security',
        text: 'Fire detection can be added alongside an existing CCTV or alarm setup, rather than installed as a completely separate system.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'Detectors across bedrooms, hallways and living areas, sized to the layout of the property.' },
      { type: 'Apartment', text: 'Detection covers the unit itself, alongside whatever fire safety measures the building already has in shared areas.' },
      { type: 'Holiday Rental', text: 'Interlinked detectors mean a trigger is noticed throughout the property, useful when guests are unfamiliar with the layout.' },
      { type: 'Business / Warehouse', text: 'Addressable panels and detector isolation suit larger commercial or warehouse spaces where pinpointing the exact location matters.' },
    ],
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
    faqs: [
      {
        q: 'What’s the difference between a smoke detector and an addressable fire panel?',
        a: 'A standalone smoke detector just sounds an alarm. An addressable panel can identify exactly which detector triggered, particularly useful on a larger property where knowing the location saves time.',
      },
      {
        q: 'How many detectors does a property need?',
        a: 'It depends on the size and layout — bedrooms, hallways and living areas are typical locations, worked out as part of the assessment rather than a fixed number applied to every property.',
      },
      {
        q: 'Can fire detection be combined with an alarm system?',
        a: 'Yes — it can be set up alongside an existing <a href="/alarm-systems">alarm system</a> rather than as a completely separate system.',
      },
      {
        q: 'What happens if one detector develops a fault?',
        a: 'Detectors are wired with isolation built in, so a single faulty or triggered detector doesn’t take the rest of the fire loop offline.',
      },
      {
        q: 'Is fire detection suitable for a holiday rental?',
        a: 'Yes — interlinked detectors are particularly useful where guests may be unfamiliar with the property, since a trigger anywhere is noticed throughout.',
      },
      {
        q: 'Does fire detection need to be checked periodically?',
        a: 'Like any fire safety equipment, detectors benefit from periodic checking. Get in touch if you have questions about a specific system.',
      },
    ],
  },
  {
    slug: 'home-networking',
    name: 'Home Networking',
    navLabel: 'Home Networking',
    flagship: false,
    h1: 'Home Networking in the Algarve',
    heroHeadline: 'The reason your cameras and alarm actually work when you need them.',
    heroTagline: 'Structured cabling and network hardware — installed and explained in plain English.',
    heroSubhead:
      'Structured cabling, network racks and backup power, built to support your cameras, alarms and access control reliably.',
    imageAlt: '[Placeholder: Network router and cabling panel installed in utility cupboard]',
    scenarioImageAlt: '[Placeholder: Structured cabling run along a wall into a network patch panel]',
    detailImageAlt: '[Placeholder: Organised network rack with labelled cabling in a utility room]',
    intro:
      'Every camera, alarm and access control device in a property depends on a network connection that doesn’t drop out. A poorly planned network is one of the most common reasons security systems become unreliable.',
    deepDive: [
      {
        heading: 'Why a Security System Is Only as Reliable as the Network Under It',
        text: "A <a href=\"/cctv-installation\">camera</a> that drops offline, an <a href=\"/alarm-systems\">alarm</a> that's slow to report its status, or a video intercom that lags before releasing a door are frequently network problems rather than faults with the devices themselves. Wi-Fi alone struggles in larger or thick-walled properties, multi-floor villas, and anywhere cameras sit outdoors at the edge of a signal's range, which is why a structured cabling backbone is recommended for fixed devices wherever it's practical to run — it removes an entire category of intermittent, hard-to-diagnose faults.",
      },
      {
        heading: 'What a Properly Set Up Network Actually Looks Like',
        text: "In practice, that means a network rack with equipment organised and labelled rather than left as a pile of boxes behind a router, cabling run to fixed points like cameras and access control readers, and backup power in place so a short outage doesn't take the whole system offline along with the electricity. It's a less visible part of a security installation than a camera or a keypad, but it's frequently the part that determines whether everything else works reliably.",
      },
    ],
    included: [
      'Structured cabling for a stable, wired backbone',
      'Organised network racks, so equipment is installed properly rather than left as a tangle of cables',
      'Backup power (UPS) to keep the network running through a power interruption',
      'Telecommunications infrastructure connecting communication and access systems',
      'A network built to support CCTV, alarms and access control running reliably',
      'Suited to homes, offices and larger properties with more equipment to connect',
    ],
    whyItMatters:
      'Solid networking is the foundation everything else runs on. Structured cabling, a properly organised rack and backup power mean cameras, alarms and access control simply work, rather than dropping out because the network underneath them wasn’t planned properly.',
    scenarios: [
      {
        heading: 'Supporting a Growing Number of Devices',
        text: 'As more cameras, alarms and access control points get added to a property, the network underneath them needs to keep up — a single router often isn’t enough for a full system.',
      },
      {
        heading: 'Large or Multi-Floor Villas',
        text: 'Thick walls, multiple floors and outdoor areas can all weaken a Wi-Fi signal — structured cabling gives cameras and other devices a stable wired connection instead of relying on Wi-Fi alone.',
      },
      {
        heading: 'Property With an Existing Unreliable Network',
        text: 'A network that drops out or has dead spots is one of the most common reasons a security system becomes unreliable — sorting out the underlying network often resolves problems that look like camera or alarm faults.',
      },
      {
        heading: 'New Build or Renovation',
        text: 'Structured cabling and a properly organised rack are far easier to put in during a build or renovation than to retrofit afterwards.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'Structured cabling and a network rack sized to the property, supporting cameras, alarms and access control across multiple rooms or floors.' },
      { type: 'Apartment', text: 'A more contained setup, typically centred on a single equipment point rather than a full multi-room cabling run.' },
      { type: 'Holiday Rental', text: 'A reliable network matters for both the security system and for guests, if Wi-Fi is offered as part of the stay.' },
      { type: 'Business / Office', text: 'Structured cabling and rack infrastructure suit an office’s mix of security systems, phones and general network use.' },
    ],
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
        text: 'Networking is the layer everything else sits on top of. It’s set up with cameras, alarms and access control in mind, not as a separate, disconnected job.',
      },
    ],
    faqs: [
      {
        q: 'Do I need structured cabling, or is Wi-Fi enough?',
        a: 'It depends on the property — thick walls, multiple floors and outdoor cameras all put more strain on Wi-Fi alone. A wired backbone gives cameras and other fixed devices a more stable connection to rely on.',
      },
      {
        q: 'What is a network rack, and is it necessary?',
        a: 'It’s where network equipment is installed in an organised way, rather than left as a loose pile of boxes and cables — worthwhile once a property has more than a couple of connected systems.',
      },
      {
        q: 'Can home networking fix existing Wi-Fi dead spots?',
        a: 'Often, yes — a dead spot is frequently a sign the network wasn’t planned for the property’s layout. Structured cabling and properly placed access points can resolve that.',
      },
      {
        q: 'Does the network need backup power?',
        a: 'A UPS is worth considering so the network — and whatever depends on it, like cameras and alarms — keeps running through a short power interruption instead of dropping offline.',
      },
      {
        q: 'Can networking be added after cameras and alarms are already installed?',
        a: 'Yes — though it’s more efficient to plan the network alongside a new <a href="/cctv-installation">CCTV</a> or <a href="/alarm-systems">alarm</a> system than to retrofit it afterwards, especially if cabling needs to be run.',
      },
      {
        q: 'Is this only relevant for large properties?',
        a: 'No — any property running more than one or two connected security devices benefits from a properly planned network, regardless of size.',
      },
    ],
  },
  {
    slug: 'smart-home-automation',
    name: 'Smart Home Automation',
    navLabel: 'Smart Home Automation',
    flagship: false,
    h1: 'Smart Home Automation in the Algarve',
    heroHeadline: 'Control your gate, cameras and alarm from one app, not three.',
    heroTagline: 'Connected systems managed from one app — installed and explained in plain English.',
    heroSubhead:
      'Gates, access control, cameras and alarms connected together and managed from one app, rather than run as separate systems.',
    imageAlt: '[Placeholder: Smart home control panel and app interface on wall-mounted tablet]',
    scenarioImageAlt: '[Placeholder: Phone screen showing a connected app with gate, camera and alarm controls]',
    detailImageAlt: '[Placeholder: Wall-mounted tablet controlling gate and camera systems in a villa hallway]',
    intro:
      'Automation, for most properties, starts with connecting the systems already in place — the <a href="/gate-automation">gate</a>, the <a href="/access-control">access control</a>, the <a href="/cctv-installation">cameras</a>, the <a href="/alarm-systems">alarm</a> — so they work together and can be managed from a single app, rather than being separate installs that don’t talk to each other. Beyond that core connection, automation can extend further depending on the property — what makes sense is worked out directly rather than sold as a fixed package.',
    deepDive: [
      {
        heading: "What 'Connected' Actually Means in Practice",
        text: "Automation here isn't a separate system bolted on top — it's the gate, access control, cameras and alarm that are already being installed, set up to share one app instead of four. That distinction matters because it changes how a property gets managed day to day: checking a camera, seeing whether the gate is closed, and confirming the alarm is armed become one habit instead of three, particularly useful for an owner checking on a property from outside Portugal.",
      },
      {
        heading: 'Starting Small and Building Up Over Time',
        text: "Most properties don't connect everything at once. A common starting point is linking whatever two systems are already installed — a camera setup and an alarm, for instance — and adding the gate or access control into the same app later, when that work happens anyway. Because the underlying systems are the same regardless of when they're connected, there's no need to plan the full setup upfront before getting started.",
      },
      {
        heading: 'Automation Beyond Connecting Security Systems',
        text: "Connecting the gate, cameras, alarm and access control is the starting point for most properties, but it isn't necessarily the ceiling. Depending on what a property already has and what an owner is trying to achieve, automation can extend into other parts of how the property runs. Because that scope varies so much from one property to the next, it's discussed directly during the initial conversation rather than presented as a fixed menu.",
      },
    ],
    included: [
      'Gate and barrier automation as part of a connected setup',
      'Access control integrated with automated entry points',
      'Cameras, alarms and access control connected through a single app rather than run separately',
      'Remote control of gates and access points from your phone',
      'Automation scaled to the property — residential, condominium or commercial',
      'Suited to both new installations and connecting up existing systems',
      'Additional automation scoped to the property directly, beyond the core connected setup',
    ],
    whyItMatters:
      'Managing a property from a distance is easier when the gate, the cameras, the alarm and the access control all work through one app rather than several different logins. In practice, automation is mostly about making the systems already in place work together.',
    scenarios: [
      {
        heading: 'Managing Multiple Systems From One App',
        text: 'Instead of separate apps for the gate, the cameras and the alarm, a connected setup brings them together — useful for checking on a property remotely without switching between logins.',
      },
      {
        heading: 'Gated Villa With Several Access Points',
        text: 'A property with a driveway gate, a front door and a side gate benefits from having all of them connected and controllable from the same place, rather than managed separately.',
      },
      {
        heading: 'Condominium With Shared Entrances',
        text: 'Automation scaled to a condominium’s shared gates and entrances means access can be managed consistently across the development, not just at an individual unit.',
      },
      {
        heading: 'Connecting Up an Existing System',
        text: 'A property with cameras or an alarm already installed can often have gate or access automation added and connected to the existing setup, rather than starting over.',
      },
    ],
    propertyTypes: [
      { type: 'Villa', text: 'Gate, access control, cameras and alarm connected and controlled from one app, sized to the property’s entry points.' },
      { type: 'Apartment', text: 'Automation typically applies to the unit’s own access point, alongside whatever the building manages at shared entrances.' },
      { type: 'Condominium / Gated Community', text: 'Automation scales to shared gates and entrances as well as individual properties within the development.' },
      { type: 'Commercial', text: 'The same connected approach applies to a commercial property’s gates, access points and security systems.' },
    ],
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
        text: 'Cameras, alarms, access control and gates connect through a single app, avoiding the need to switch between separate logins to check different parts of the property.',
      },
      {
        heading: 'Scales With the Property',
        text: 'The same approach works for a single villa, a condominium’s shared entrances, or a commercial property — the setup is sized to what’s actually there.',
      },
    ],
    faqs: [
      {
        q: 'What does "smart home automation" actually include here?',
        a: 'At its core, it means connecting the gate, access control, cameras and alarm so they’re managed from one app rather than as separate systems. Depending on the property, automation can extend further than that — the exact scope is worked out directly rather than fixed in advance.',
      },
      {
        q: 'Can automation be added to systems already installed?',
        a: 'Often, yes — existing gates, cameras or alarms can frequently be connected into a single setup rather than needing to be replaced.',
      },
      {
        q: 'Do I need all four systems — gate, access, cameras and alarm — to use automation?',
        a: 'No — automation can apply to whichever systems are in place. Two connected systems still means fewer separate logins than running them independently.',
      },
      {
        q: 'Is this suitable for a commercial property?',
        a: 'Yes — the same connected approach applies whether the property is a single villa or a commercial premises with multiple access points.',
      },
      {
        q: 'How does "one app" actually work in practice?',
        a: 'Once systems are connected, cameras can be checked, the alarm armed or disarmed, and the gate opened from the same app, rather than switching between separate ones for each system.',
      },
    ],
  },
];

module.exports = services;
