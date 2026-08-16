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
    seoTitle: 'CCTV Installation in the Algarve | Algarve Smart Home',
    seoDescription: 'Indoor and outdoor CCTV with remote phone viewing, planned around your property’s entrances, from a locally based, English-speaking team — call today.',
    heroHeadline: 'See what\'s happening at home, from anywhere.',
    heroTagline: 'Camera systems with remote viewing — installed and explained in plain English.',
    ctaNote: 'Describe your property — get a straight answer in one call.',
    reassurance: { heading: 'Not sure how many cameras you actually need?', body: 'That\'s exactly what a first call sorts out. Describe the property, hear an honest read on what\'s worth covering and what isn\'t — no site-visit commitment, and no pressure to go bigger than the property needs.' },
    heroSubhead:
      'Indoor and outdoor camera systems with remote viewing, planned around each property\'s actual entrances and blind spots.',
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
    commonProblems: [
      {
        symptom: 'Camera showing no picture, or a frozen or black screen in the app',
        text: 'Usually a power problem at that specific camera — a tripped socket, a disconnected PoE cable, or a fault on that circuit — rather than the camera itself. A wireless unit losing picture is more often a dropped Wi-Fi connection than a hardware failure, check that before assuming the camera has died.',
      },
      {
        symptom: "App says the system is offline even though the cameras are clearly still running at the property",
        text: "Usually a router restart, an ISP outage, or a change made to the property's internet connection, rather than a fault with the recorder. Checking the router first — has it been swapped, reset, or lost its connection — saves a callout for something that resolves itself once the network is back.",
      },
      {
        symptom: 'A gap in the recording after a power cut',
        text: "The NVR didn't restart cleanly, or its hard drive needs reformatting after being interrupted mid-write. Battery backup on the recorder avoids this happening again; if power cuts are regular in your area, add it.",
      },
      {
        symptom: 'Night vision has gone patchy, washed out, or shows a ring of reflected glare',
        text: 'Almost always a dusty or cobwebbed lens, or the camera aimed too close to a reflective surface like a white wall or a glass door — infrared light bounces straight back and washes out the image. A clean and a small angle adjustment usually fixes it without needing new equipment.',
      },
      {
        symptom: 'Motion alerts have stopped coming through, even though the camera is clearly still recording',
        text: 'Detection zones and phone notification permissions can both get reset by an app update without anyone noticing. Check the zone settings and the phone\'s own notification permissions first — the camera usually hasn\'t stopped detecting anything.',
      },
      {
        symptom: 'Constant false alerts from trees moving, shadows, or cars passing outside the gate',
        text: "Detection zone masking narrows what actually triggers a notification to the parts of the frame that matter, rather than leaving the whole image active. Sensitivity can be tuned down for a specific camera without affecting the others.",
      },
      {
        symptom: "A camera's field of view catches a neighbour's garden or the street outside the property",
        text: 'Adjusting the angle, or masking off part of the frame in software, keeps coverage on the property itself rather than areas that aren\'t yours to cover — get this set during installation, not after it becomes a conversation with a neighbour.',
      },
      {
        symptom: 'Footage from a specific date has gone missing',
        text: "Recorders overwrite older footage once storage fills up, so how far back footage actually reaches depends on camera count, resolution and drive size — not a fixed number of days that applies to every system. Know your system's actual retention window rather than assuming footage is kept indefinitely.",
      },
      {
        symptom: 'Bought a property that already has cameras installed, but nobody has the login',
        text: 'A legacy system left behind by a previous owner can usually be taken over and re-commissioned with new credentials, rather than ripped out and replaced — have it assessed before assuming a full replacement is needed.',
      },
      {
        symptom: 'A wireless camera keeps lagging or dropping out on live view',
        text: "A Wi-Fi camera at the edge of the router's range struggles in a way a cabled camera simply doesn't, particularly for an outdoor unit at the far end of a driveway or boundary wall. A cabled connection or a properly placed access point resolves it rather than just repositioning the router and hoping.",
      },
      {
        symptom: "Holiday-let guests keep asking whether the cameras cover inside the villa",
        text: "Have a clear, honest answer ready before it comes up. Outdoor-only coverage of entrances and driveways is the more common setup on rental properties for exactly this reason — indoor cameras raise real privacy questions that most owners choose not to introduce.",
      },
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
        q: 'Do cameras need to be cleaned or serviced, or is it a fit-and-forget install?',
        a: 'Outdoor units in particular benefit from an occasional lens clean — salt air and dust build-up gradually affect image and night-vision quality more than most owners expect. It’s a five-minute job, not a service contract, but worth doing a couple of times a year rather than never.',
      },
      {
        q: 'Can CCTV be combined with an alarm system?',
        a: 'Yes — cameras and <a href="/alarm-systems">alarm systems</a> are commonly installed together and can be set up to work as one connected system rather than two separate installs.',
      },
      {
        q: 'What happens if a camera is damaged or stops working?',
        a: 'Get in touch and it’ll be looked at as part of ongoing support — the same number for a new install is the number to call if something needs attention afterwards.',
      },
      {
        q: 'Can a camera cover a shared driveway in a gated community without filming the neighbour’s property?',
        a: 'Yes — field of view and masking are adjusted so coverage stays on your own property, which matters more in developments where houses sit close together than on a standalone villa with open boundaries.',
      },
      {
        q: 'What happens to live viewing if the property’s internet goes down?',
        a: 'Recording continues locally to the NVR regardless, since it doesn’t depend on the internet — but live and remote viewing needs a working connection at the property. Footage is there to review once the connection is back.',
      },
      {
        q: 'Can cameras be added one at a time, or does the whole system need to be planned upfront?',
        a: 'Cameras can be added incrementally, as long as the recorder and cabling have spare capacity for them. Having a rough sense of the eventual scope early on avoids under-sizing the NVR and having to upgrade it sooner than expected.',
      },
      {
        q: 'Do guests at a holiday rental need to be told about outdoor cameras?',
        a: 'Many owners choose to mention outdoor cameras in the listing details or a welcome guide, simply so guests know coverage is there before they arrive — worth deciding on that approach early rather than after a guest raises it.',
      },
    ],
  },
  {
    slug: 'alarm-systems',
    name: 'Alarm Systems',
    navLabel: 'Alarm Systems',
    flagship: false,
    h1: 'Alarm Systems in the Algarve',
    seoTitle: 'Intruder Alarm Systems in the Algarve | Algarve Smart Home',
    seoDescription: 'Motion sensors, sirens and app alerts that cut false alarms, fitted and explained by a locally based, English-speaking team — call today for a fast quote.',
    heroHeadline: 'Know the moment something\'s wrong — not after the fact.',
    heroTagline: 'Sensors and app alerts you can actually trust — without the false alarms.',
    ctaNote: 'Quick call, plain English, no pressure.',
    reassurance: { heading: 'No pressure — just a straight answer about your property.', body: 'A five-minute call is enough to tell you what sensor coverage actually makes sense for your layout. If a basic setup covers it, that\'s exactly what you\'ll hear.' },
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
    commonProblems: [
      {
        symptom: 'Alarm keeps going off for no obvious reason',
        text: 'Usually traces to an outdoor sensor tripped by wind-blown foliage, an insect crossing the sensor lens, or a door that hasn\'t latched fully shut and registers as open. Checking each zone at the moment it triggers — rather than resetting and hoping it doesn\'t happen again — is what actually finds the cause.',
      },
      {
        symptom: 'Control panel shows a fault light but the system still arms normally',
        text: "Often a specific sensor reporting a low battery or a communication fault, rather than a problem with the whole panel. Have it looked at rather than ignoring it — a faulty zone can end up excluded from coverage without anyone realising until it matters.",
      },
      {
        symptom: 'Set the alarm off by forgetting to disarm before opening the door',
        text: 'Entry delay settings can be extended to give more time between opening the door and the siren triggering, and a keypad positioned closer to the main entrance reduces this happening in the first place.',
      },
      {
        symptom: "App shows the alarm as armed, but there's no way to be sure it's actually working",
        text: "A test mode, or a glance at the panel's own status light, confirms the system is genuinely armed without needing to wait for a real trigger to find out.",
      },
      {
        symptom: "Pet keeps setting off the indoor motion sensor",
        text: "Pet-tolerant sensor types and placement exist specifically for this — mentioning pets during the initial setup means sensors are chosen and positioned to avoid this rather than working around it afterwards.",
      },
      {
        symptom: 'Returned after months away to find the alarm had been sitting disarmed the whole time',
        text: "Remote status checks let an owner confirm the arm/disarm state from outside Portugal, rather than only finding out on arrival. Check status periodically during an extended absence, not just once on the way out.",
      },
      {
        symptom: 'Siren sounds at the property but no notification reaches the phone',
        text: "The on-site siren and the phone notification are two separate things — a network or connectivity gap at the property can affect one without affecting the other. Understand that distinction, and one failure stops looking like a whole broken system.",
      },
      {
        symptom: 'New tenant, family member or property manager needs their own way to arm and disarm',
        text: 'A separate code can be issued for each person rather than sharing one code among everyone — makes it possible to see who armed or disarmed the system and when, and to revoke access for one person without resetting it for everyone else.',
      },
      {
        symptom: "Outdoor sensor near the gate keeps triggering at night from passing headlights",
        text: 'A positioning or angle adjustment, facing the sensor away from the road rather than across it, resolves this without reducing the sensor\'s actual coverage of the entrance.',
      },
      {
        symptom: 'Not sure the alarm would actually reach anyone during a genuine break-in attempt',
        text: "In practice this works in layers: the siren and the app alert come first; cameras — if installed — show within seconds whether it's a genuine intrusion or a false trigger; and a local keyholder (a property manager, a trusted neighbour, or a paid keyholding service) is who physically attends when the owner is in another country. If something is genuinely wrong, 112 reaches the emergency services anywhere in Portugal. Agree that chain during setup, not the first time the siren goes off.",
      },
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
      {
        q: 'What happens if I forget the disarm code?',
        a: 'Get in touch and it can be reset as part of ongoing support — no need to replace the panel over a forgotten code.',
      },
      {
        q: 'How often should sensors and the control panel actually be checked?',
        a: 'Periodic checking catches a fault — a low battery, a sensor drifting out of alignment — before it turns into a real gap in coverage. Worth asking what a sensible interval looks like for your specific system rather than assuming it’s a fit-and-forget install.',
      },
      {
        q: 'Does an outdoor siren need to be visible, or can it be fitted more discreetly?',
        a: 'Either works — a visible siren adds a deterrent effect on its own, while a more discreetly housed unit still sounds just as loudly without advertising exactly where it is. Which makes sense is more a preference than a technical requirement.',
      },
      {
        q: 'Can a specific zone or sensor be switched off temporarily — like a room being renovated — without disarming the whole system?',
        a: 'Yes — individual zones can usually be excluded temporarily without disarming the whole panel, useful during building work or when a room’s normal use changes for a while.',
      },
      {
        q: 'What happens if the alarm is triggered while I’m out of the country?',
        a: 'The alert reaches your phone wherever you are. From there, the practical sequence is: check the cameras (if fitted) to see what actually triggered it; if it looks genuine, call your local keyholder — a property manager, neighbour or keyholding service — to attend, and the emergency services on 112 if it’s serious. Owners away for long stretches should have that chain agreed before it’s ever needed, and setting it up is part of planning the system.',
      },
    ],
  },
  {
    slug: 'access-control',
    name: 'Access Control',
    navLabel: 'Access Control',
    flagship: false,
    h1: 'Access Control Systems in the Algarve',
    seoTitle: 'Access Control Systems in the Algarve | Algarve Smart Home',
    seoDescription: 'Video intercoms and electronic locks so only the right people get onto your property, installed by a locally based, English-speaking team — get a free quote.',
    heroHeadline: 'Know exactly who\'s coming and going, before you open the door.',
    heroTagline: 'Electronic locks and video intercoms — no more key cutting, no more lockboxes.',
    ctaNote: 'One call to find out what actually fits your property.',
    reassurance: { heading: 'Ask before you commit to anything.', body: 'Whether a keypad is enough or a video intercom earns its keep depends entirely on who comes and goes — a quick call settles it before any equipment enters the conversation.' },
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
      {
        heading: 'Why Managing Credentials Matters More Than the Hardware Itself',
        text: "The reader or lock on the door is a one-time install; managing who has a code or fob is an ongoing job that outlasts it. A property with a cleaner, a gardener, occasional rental guests and family visiting from abroad ends up issuing and revoking access far more often than the hardware itself ever changes — which is why how easily a code can be added, scheduled or switched off matters as much as which reader is fitted. A system where every change means a callout gets used less carefully than one an owner can manage themselves in a couple of taps, and that difference tends to show up months after installation, not on day one.",
      },
    ],
    included: [
      'Intelligent readers for card, fob or code-based entry',
      'Electronic locks controlled without a physical key',
      'Video door entry and intercom systems',
      'Turnstiles for shared entrances in condominiums and commercial premises',
      'Integration with gate automation for full perimeter control',
      'Time-limited and scheduled codes for cleaners, contractors and rental guests',
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
    commonProblems: [
      {
        symptom: 'Fob or card stopped working with no explanation',
        text: "Battery failure in a passive fob is rare — more often the credential was deactivated by mistake, or it needs re-syncing to the reader after a system update. Reissuing it usually takes minutes, not a full replacement.",
      },
      {
        symptom: "A rental guest says the door code doesn't work when they arrive",
        text: "Codes are often scheduled to start and end on specific dates. If a code was set for the wrong check-in date, or a previous booking's code hasn't expired yet and is blocking a new one, it simply won't work until the schedule is corrected.",
      },
      {
        symptom: 'Video intercom shows a picture but no sound, or sound but no picture',
        text: "Usually a wiring or settings issue isolated to the audio or video path separately, not a full unit failure — report which one is missing rather than assuming the whole intercom needs replacing.",
      },
      {
        symptom: "Locked out because the app won't load or the phone has no signal",
        text: 'An offline backup entry method — a physical key override or a standalone keypad code — matters for exactly this moment. Confirm one exists during the original setup — not while standing at the door.',
      },
      {
        symptom: "A cleaner or gardener needs access, but a permanent shared code doesn't feel right",
        text: 'A time-limited or scheduled code can be set to work only within a defined window — say, Tuesday and Friday mornings — rather than a permanent code that keeps working indefinitely.',
      },
      {
        symptom: "Condominium wants individual owners to have their own access without everyone sharing one code for the building",
        text: 'Reader systems can issue individual credentials per unit while still controlling the shared gate or entrance as one system — each owner gets their own fob or code rather than a single code the whole building shares.',
      },
      {
        symptom: "Intercom buzzer doesn't reach a phone when the owner is away from the property",
        text: "Depends on whether the intercom is set up for app-based remote answering or only rings a physical handset inside the property — worth clarifying which is actually needed during setup, since they're different configurations.",
      },
      {
        symptom: "A former cleaner or guest's code still works even though it shouldn't",
        text: "Codes don't expire automatically unless they were scheduled to — a code needs to be actively revoked once someone no longer needs access, so build revoking into a routine rather than assuming it happens on its own.",
      },
      {
        symptom: "Electronic lock feels sluggish or occasionally doesn't release on the first try",
        text: "Usually a battery or alignment issue with the lock itself, rather than a problem with the reader or the credential — flag it early — a lock that's starting to struggle is far easier to sort before it fails outright.",
      },
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
      {
        q: 'What happens if the power or internet goes down — can I still get in?',
        a: 'Worth planning a non-networked backup entry method — a physical key or a standalone keypad — alongside app-based access, discussed as part of setup rather than assumed to be unnecessary.',
      },
      {
        q: 'Can access be limited to certain times of day, like a cleaner’s usual hours?',
        a: 'Yes — scheduled or time-limited codes suit cleaners, contractors and rental guests who only need access within a specific window rather than permanently.',
      },
      {
        q: 'If a property has multiple doors or gates, do access logs show which one was used?',
        a: 'Yes — logs can typically break access down by specific door or gate rather than one combined log for the whole property, useful once there’s more than one entry point to keep track of.',
      },
      {
        q: 'Does a condominium need to replace its whole entry system to add this?',
        a: 'Often it integrates alongside what’s already there rather than requiring a full replacement, depending on the existing setup — worth having it assessed rather than assuming a complete overhaul is needed.',
      },
      {
        q: 'Can different people have different levels of access — some doors but not others?',
        a: 'Yes — access can be set per door or per gate rather than all-or-nothing, so a cleaner’s code might open the front door but not a separate storage area, for example.',
      },
      {
        q: 'Can lighting be added to the same setup?',
        a: 'Basic remote-controlled lighting can be added alongside an access control or camera install — switched from the same app, as part of the <a href="/smart-home-automation">smart home add-on</a> rather than a separate project.',
      },
    ],
  },
  {
    slug: 'gate-automation',
    name: 'Gate Automation',
    navLabel: 'Gate Automation',
    flagship: false,
    h1: 'Automated Gate Systems in the Algarve',
    seoTitle: 'Gate Automation in the Algarve | Algarve Smart Home',
    seoDescription: 'Motorised gates and barriers you can open from your car, keypad or phone, fitted by a locally based, 100% English-speaking team — call today for a quote.',
    heroHeadline: 'Open your gate from your phone — no one waiting at the intercom.',
    heroTagline: 'Motorised gates and barriers that open from the car, the keypad or your phone.',
    ctaNote: 'Describe your gate — hear what\'s realistic before anything else.',
    reassurance: { heading: 'Wondering if your existing gate can take a motor?', body: 'Describe the gate on a quick call — its age, whether it drags, how it hangs — and you\'ll get an honest answer, including when the right answer is fixing the gate before automating it.' },
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
      {
        heading: 'Automating an Existing Gate Versus Starting From Scratch',
        text: "Most enquiries aren't about a bare driveway — they're about a gate that's already there and either isn't automated at all, or was automated years ago by whoever built the property and has since stopped working properly. The starting point is always an honest look at the gate itself: whether the frame is straight, whether it drags or binds anywhere along its travel, and whether the hinges or track are in good enough condition to take a motor without it working against the gate's own resistance. A structurally sound gate is usually more efficient to automate as-is than to replace, since the cost difference comes from the motor and controls rather than the gate itself — but a gate that's already warped or dragging often needs that fixed first, otherwise the motor spends its life fighting a problem automation didn't cause and won't solve on its own.",
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
    commonProblems: [
      {
        symptom: 'Remote stopped working, but the gate still opens fine from the keypad',
        text: "Usually a flat battery in the remote itself, or it's lost sync with the receiver — rarely a fault with the motor. Try a spare or a battery swap before assuming the whole system needs attention.",
      },
      {
        symptom: 'Lost the only gate remote or fob, and no spare was ever set up',
        text: 'A new remote or fob can be programmed to the existing receiver without replacing any of the gate hardware — have at least one spare made once a replacement is issued, so this doesn\'t happen twice.',
      },
      {
        symptom: 'Gate has become slow, jerky, or stops partway through opening',
        text: "Usually a motor straining against a gate that's swollen, warped, or dragging along the ground — a mechanical problem with the gate itself rather than the motor failing outright. Addressing the drag or alignment first is what actually fixes it long-term.",
      },
      {
        symptom: 'Gate reverses direction as soon as it starts to close',
        text: 'Safety sensors (photocells) detecting an obstruction — sometimes a real one, sometimes a false trigger from leaves, insects, or the sensors drifting slightly out of alignment over time as gate posts settle.',
      },
      {
        symptom: "Old manual gate is structurally solid, but the owner isn't sure it can be automated rather than replaced",
        text: "Most existing gates can take a motor as-is, provided the gate itself is in good enough structural condition — automating what's already there is usually more straightforward than starting from a blank driveway.",
      },
      {
        symptom: 'Gate stopped working entirely after a storm or a power cut',
        text: "Check backup power or battery status first — a gate without backup simply won't move until mains power returns, which can look like a fault when it's actually just waiting on electricity.",
      },
      {
        symptom: "App shows the gate as closed, but it's visibly standing open",
        text: 'Usually a position sensor that\'s been knocked out of calibration — common after the gate takes a knock from a vehicle or a strong gust catches it. Recalibrating the sensor resolves the mismatch between what the app reports and what\'s actually happening.',
      },
      {
        symptom: 'New housekeeper or contractor needs their own way in, not a shared code everyone uses',
        text: 'A separate code or credential can be issued specifically for them, tied into the same access control setup as the gate, rather than handing out the one code everyone else already has.',
      },
      {
        symptom: 'Gate opens fine but makes a loud grinding or straining noise doing it',
        text: "An early sign of mechanical wear — have it looked at before it fails completely — a noise that's new or getting louder is a useful early warning rather than something to wait out.",
      },
    ],
    extraSections: [
      {
        heading: 'Gate & Barrier Automation',
        text: 'Swing gates, sliding gates and barriers are motorised and connected to remote controls, keypads or an app, so opening the driveway doesn’t mean getting out of the car.',
      },
      {
        heading: 'Security Doors',
        text: 'Security doors come up most often for ground-floor entrances and commercial premises where a standard door is the obvious weak point. The door, frame and locking have to work as one unit — a heavy door in a weak frame achieves little — which is why they go in as complete assemblies rather than being swapped leaf-for-leaf.',
      },
      {
        heading: 'Sectional Gates',
        text: 'Sectional gates open vertically in guided panels rather than swinging or sliding, which suits garages and entrances with no room for a gate\'s travel — the driveway stays usable right up to the door. Most common on garages, loading entrances and commercial units.',
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
      {
        q: 'Can two different gates on the same property — say, a pedestrian gate and a vehicle gate — be controlled from the same remote or app?',
        a: 'Yes — multiple gates or barriers on one property can usually be brought under the same remote and app control, rather than needing a separate system for each.',
      },
      {
        q: 'Is there a limit to how many remotes or app users a single gate can have?',
        a: 'Not in any meaningful sense for a typical household — remotes and app access can be issued to as many family members, staff or regular visitors as the property actually needs.',
      },
      {
        q: 'Can a gate be set to close automatically after a set time, rather than needing to be closed manually every time?',
        a: 'Yes — an auto-close timer can be set so the gate shuts itself after a defined interval, useful for anyone who forgets to close it manually after driving through.',
      },
      {
        q: 'How long does backup battery keep the gate working during a power cut?',
        a: 'Depends on the battery and how often the gate is used during the outage — discussed as part of choosing backup power for the specific property.',
      },
      {
        q: 'Can different family members or guests each have their own remote instead of sharing one?',
        a: 'Yes — remotes and codes can be issued individually rather than everyone sharing a single one.',
      },
      {
        q: 'Can anything else be controlled from the same app as the gate?',
        a: 'Cameras, the alarm and access control can share the app, and simple add-ons like <a href="/smart-home-automation">remote-controlled lighting</a> can be included alongside — useful for making an empty property look occupied without running a separate system.',
      },
    ],
  },
  {
    slug: 'fire-detection',
    name: 'Fire Detection',
    navLabel: 'Fire Detection',
    flagship: false,
    h1: 'Fire Detection Systems in the Algarve',
    seoTitle: 'Fire Detection Systems in the Algarve | Algarve Smart Home',
    seoDescription: 'Optical smoke detectors and addressable fire panels for early warning, installed by a locally based, English-speaking team — call today for a fast quote.',
    heroHeadline: 'Know the moment smoke is detected, not when it\'s too late.',
    heroTagline: 'Smoke detectors and addressable panels that catch problems while they\'re still small.',
    ctaNote: 'A short call is enough to scope what you need.',
    reassurance: { heading: 'A straight answer about what your property actually needs.', body: 'Detector counts and positions come from the layout, not a sales target. Call, describe the property, and hear what coverage genuinely makes sense — nothing more.' },
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
      {
        heading: 'Assessing What a Property Already Has Before Adding Anything',
        text: "A large share of the work on existing properties starts with figuring out what's actually there rather than assuming a blank slate. Villas bought with detectors already fitted by a previous owner, or a builder, often have equipment of unknown age, unknown type, and no record of when it was last checked — and a detector that looks fine mounted on the ceiling gives no visual clue about whether its sensor chamber still works reliably. The assessment covers what's installed, whether it's interlinked or standalone, whether coverage actually matches how the property is laid out now rather than how it was laid out when the detectors went in, and what — if anything — needs replacing versus what can stay. It's usually a more efficient starting point than treating every property as a fresh install, since a surprising amount of existing equipment turns out to be salvageable once it's actually looked at.",
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
        text: 'An electrical fault or a fridge left running are common, unglamorous causes of a fire starting in a property nobody\'s currently in — an addressable panel reporting a fault immediately, rather than staying silent until someone happens to test it, is what actually catches this kind of problem early in an unattended property.',
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
    commonProblems: [
      {
        symptom: 'Detector chirps intermittently, especially at night',
        text: "Almost always a low-battery warning rather than smoke detected — a distinct, repeating chirp rather than a continuous alarm. Learn to tell the two apart — ignoring the chirp risks missing the real thing when it matters.",
      },
      {
        symptom: "Alarm triggers from cooking or steam rather than an actual fire",
        text: 'Detector type and position relative to the kitchen both matter here — optical detectors and correct placement reduce this without losing sensitivity in the rest of the property.',
      },
      {
        symptom: 'Property stood empty for months — no way to know if a detector had been silently faulting the whole time',
        text: "An addressable panel reports a fault as soon as it happens rather than staying silent until someone tests it manually, which matters most for exactly this kind of long, unattended absence.",
      },
      {
        symptom: 'New villa purchase came with existing smoke detectors of unknown age or condition',
        text: "Have them assessed rather than assuming they still function as intended — detectors do have a working lifespan, and there's no way to know from looking at one whether it's still reliable.",
      },
      {
        symptom: 'One hallway detector keeps triggering with no smoke or steam anywhere nearby',
        text: 'Dust build-up inside the sensor chamber is a common cause, particularly in a property that\'s been closed up and unventilated for a while — cleaning or servicing the unit usually resolves it.',
      },
      {
        symptom: "Renovation work covered a detector in dust, and it hasn't worked reliably since",
        text: 'Detectors near building or renovation work often need checking or replacing afterwards — dust ingress during construction is a common, avoidable cause of later false triggers or missed detection.',
      },
      {
        symptom: "Holiday guests wouldn't know where in the property a fire had actually started",
        text: 'Interlinked detectors mean every unit sounds together, not just the one nearest the fire — the whole point for guests unfamiliar with a property\'s layout, who wouldn\'t otherwise know where to check first.',
      },
      {
        symptom: "Detector in an outbuilding or garage isn't covered by the main panel",
        text: 'Coverage needs to be planned to specifically include outbuildings and garages rather than assumed — a separate structure is easy to overlook if it wasn\'t part of the original conversation about the property.',
      },
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
        heading: 'Detectors Age — and Look Fine Doing It',
        text: 'A detector\'s sensing chamber degrades with dust and time long before anything visible changes on the ceiling. Age and service history matter more than appearance, which is why detectors of unknown age in a newly purchased property get assessed rather than trusted on looks.',
      },
    ],
    faqs: [
      {
        q: 'What’s the difference between a smoke detector and an addressable fire panel?',
        a: 'A standalone smoke detector just sounds an alarm. An addressable panel can identify exactly which detector triggered, particularly useful on a larger property where knowing the location saves time.',
      },
      {
        q: 'How many detectors does a property need?',
        a: 'There\'s no fixed number — it comes from walking the property and identifying where a fire could start or spread unnoticed. As a rough guide, most homes end up with at least one detector per bedroom and hallway, with more added for extra floors or outbuildings.',
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
        a: 'Like any fire safety equipment, detectors have a working lifespan and benefit from an occasional check rather than being fitted and forgotten — particularly on a property that stands empty for stretches, where nobody\'s around to notice a fault. Worth asking what a sensible check-in interval looks like for your specific system.',
      },
      {
        q: 'Why does a detector chirp even when there’s clearly no fire?',
        a: 'Almost always a low-battery warning — a distinct, repeating chirp rather than a continuous alarm. Worth replacing the battery or having it checked rather than removing the detector to stop the noise.',
      },
      {
        q: 'Can existing smoke detectors in a property just purchased be assessed rather than replacing everything?',
        a: 'Yes — an assessment establishes what’s already there and working, so only what genuinely needs replacing or adding gets changed.',
      },
      {
        q: 'Will cooking set the detectors off unnecessarily?',
        a: 'Detector type and positioning relative to the kitchen reduce this without losing sensitivity elsewhere in the property — worth flagging kitchen layout during the initial assessment.',
      },
      {
        q: 'Are outbuildings or a garage covered, or only the main house?',
        a: 'Coverage needs to be planned in specifically for outbuildings and garages — worth mentioning any separate structures on the property early, rather than assuming they’re automatically included.',
      },
    ],
  },
  {
    slug: 'home-networking',
    name: 'Home Networking',
    navLabel: 'Home Networking',
    flagship: false,
    h1: 'Home Networking in the Algarve',
    seoTitle: 'Home Networking in the Algarve | Algarve Smart Home',
    seoDescription: 'Structured cabling, network racks and backup power that keep your cameras and alarm online, from a locally based, English-speaking team — get a free quote.',
    heroHeadline: 'The reason your cameras and alarm actually work when you need them.',
    heroTagline: 'The wired backbone that keeps cameras, alarms and intercoms actually online.',
    ctaNote: 'Explain the problem — hear the fix before committing to anything.',
    reassurance: { heading: 'Not sure if your network is the problem?', body: 'Describe what\'s dropping out and where — half the time the fix is smaller than a full re-cable, and you\'ll be told when it is.' },
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
      'Wi-Fi access points positioned for real coverage — indoors, outdoors and across outbuildings',
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
        text: 'A property that\'s had cameras or an alarm reinstalled more than once, with each installer blaming the last one\'s equipment, often just has an underlying network that was never properly assessed — sorting out cabling and access points first, before touching the security devices again, is usually what actually fixes it.',
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
    commonProblems: [
      {
        symptom: 'Wi-Fi drops out completely in one part of the villa, usually upstairs or in a back room',
        text: "Thick stone or concrete walls block a single router's signal well before it reaches the far side of a larger property. A mesh setup or wired access points close the gap properly, rather than a signal booster that amplifies a weak connection instead of fixing the cause.",
      },
      {
        symptom: "Outdoor camera keeps disconnecting even though it's not far from the house",
        text: 'Outdoor Wi-Fi range is typically shorter than indoor range once walls and distance combine — a cabled connection to that camera removes the problem entirely rather than working around a weak signal.',
      },
      {
        symptom: 'Internet feels fine for browsing, but cameras lag or buffer on live view',
        text: 'Multiple cameras streaming at once need more sustained bandwidth than general browsing — a basic router setup often wasn\'t sized for that load, even though everyday internet use feels unaffected.',
      },
      {
        symptom: 'Router restarts randomly and takes the whole security system down with it',
        text: "A consumer router under sustained load from several connected devices can be the actual point of failure, rather than any individual camera or sensor — look at the router itself before blaming the devices connected to it.",
      },
      {
        symptom: 'Property has multiple buildings — main house, guest annex, pool house — and none of them get reliable signal',
        text: 'Separate structures typically need their own access point, or a wired link running between buildings, rather than relying on one router to reach across the whole plot.',
      },
      {
        symptom: 'New router installed by the internet provider, and the cameras stopped working the same day',
        text: "Provider-supplied routers can reset port or IP settings that other devices were relying on. Flag it in advance if a router swap is planned, so the cameras and other devices get reconfigured to match rather than left disconnected.",
      },
      {
        symptom: "Cabling behind the wall or in the utility cupboard was never labelled",
        text: 'A proper network rack and labelling scheme prevents this becoming a guessing game the next time something needs troubleshooting — sort it once rather than living with an unlabelled tangle indefinitely.',
      },
      {
        symptom: 'Property is rented out and needs guest Wi-Fi kept separate from the network running the security system',
        text: "A separate guest network keeps visitors off the same network as cameras and alarms, so guest device issues don't risk affecting the security system, and vice versa.",
      },
      {
        symptom: "Signal reaches the garden but drops the moment you're by the pool or at the far boundary wall",
        text: "Outdoor coverage at range needs a purpose-placed access point rather than relying on the router's default reach — map the property's actual outdoor use before assuming standard Wi-Fi will cover it.",
      },
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
      {
        q: 'Does upgrading the network mean ripping open walls and redecorating?',
        a: 'Not necessarily — cable runs are planned to use existing routes where possible (under floors, through cupboards, along skirting), and a mix of cabled and wireless equipment can reduce how much needs to be chased into walls. Worth discussing a property’s specific construction before assuming extensive building work is required.',
      },
      {
        q: 'How long does a typical home networking install take?',
        a: 'Depends on how much cabling needs to be run and whether it’s new-build, renovation, or retrofitting into a finished property — retrofitting through existing walls and floors takes longer than running cable during a build, and timing is confirmed as part of the assessment.',
      },
      {
        q: 'What’s the difference between mesh Wi-Fi and structured cabling for fixing dead spots?',
        a: 'Mesh helps extend general Wi-Fi coverage around a property. Structured cabling is the more reliable fix for fixed devices like cameras that need a consistent connection rather than a shared wireless signal.',
      },
      {
        q: 'Does every camera need a cable, or can some run on Wi-Fi?',
        a: 'Depends on position and how reliable that connection needs to be — a mix of cabled and wireless cameras is common, with cabling prioritised for the cameras that matter most or sit furthest from the router.',
      },
      {
        q: 'Can an existing unreliable network be assessed before deciding what to change?',
        a: 'Yes — an assessment identifies what’s actually causing the problem before recommending cabling, access points, or anything else, rather than replacing equipment on a guess.',
      },
    ],
  },
  {
    slug: 'smart-home-automation',
    name: 'Smart Home Automation',
    navLabel: 'Smart Home Automation',
    flagship: false,
    h1: 'Smart Home Automation in the Algarve',
    seoTitle: 'Smart Home Automation in the Algarve | Algarve Smart Home',
    seoDescription: 'Connect your gate, cameras and alarm into one app, plus simple lighting control, with a locally based, 100% English-speaking team — call today for a quote.',
    heroHeadline: 'Control your gate, cameras and alarm from one app, not three.',
    heroTagline: 'An add-on to a security install — one app for your systems, plus simple lighting control.',
    ctaNote: 'Ask what\'s realistic for your setup — no packages, no pressure.',
    reassurance: { heading: 'Unsure whether automation is worth it for your setup?', body: 'It\'s an add-on, not a hard sell. If connecting your systems into one app wouldn\'t genuinely make life easier, you\'ll hear that on the call.' },
    heroSubhead: 'Your gate, cameras and alarm brought into one app, with simple add-ons like remote-controlled lighting.',
    imageAlt: '[Placeholder: Phone showing one app controlling gate, cameras and alarm]',
    scenarioImageAlt: '[Placeholder: Phone screen showing a connected app with gate, camera and alarm controls]',
    detailImageAlt: '[Placeholder: Wall switch and phone app controlling the same villa lighting]',
    intro:
      'Smart home automation here is deliberately scoped as an add-on to a security installation, not a standalone service. When a <a href="/gate-automation">gate</a>, <a href="/cctv-installation">cameras</a>, an <a href="/alarm-systems">alarm</a> or <a href="/access-control">access control</a> go in, they can be connected to work from a single app — and simple automation, like remote-controlled lighting, can be added alongside. That\'s the honest scope: making the systems being installed work together, plus the basics that naturally extend from them.',
    deepDive: [
      {
        heading: "What 'Connected' Actually Means in Practice",
        text: "Automation here isn\'t a separate system bolted on top — it\'s the gate, access control, cameras and alarm that are already being installed, set up to share one app instead of four. That changes how a property gets managed day to day: checking a camera, seeing whether the gate is closed, and confirming the alarm is armed become one habit instead of three, particularly for an owner checking on a property from outside Portugal. Systems can also be connected incrementally as they\'re added — there\'s no need to plan a complete setup before starting with whatever is already in place.",
      },
      {
        heading: 'Remote-Controlled Lighting: The Add-On That Earns Its Place',
        text: "The most requested extra alongside a security install is also the simplest: lights that can be switched from the same app as the cameras and alarm. For a property that stands empty for weeks, turning lights on for the evening — from another country — makes the place read as occupied in a way a permanently dark villa never does. And because it rides along with an install that\'s happening anyway, it\'s a small addition rather than a project of its own.",
      },
    ],
    included: [
      'Gate and barrier automation as part of a connected setup',
      'Access control integrated with automated entry points',
      'Cameras, alarms and access control connected through a single app rather than run separately',
      'Remote control of gates and access points from your phone',
      'Basic remote-controlled lighting, added alongside a security install',
      'Suited to both new installations and connecting up existing systems',
    ],
    whyItMatters:
      'Managing a property from a distance is easier when the gate, the cameras, the alarm and the access control all work through one app rather than several different logins. This is deliberately a modest offering: connect what\'s being installed, add simple extras like lighting control where they genuinely help, and skip the smart-home theatre a holiday property doesn\'t need.',
    scenarios: [
      {
        heading: 'Managing Multiple Systems From One App',
        text: 'Instead of separate apps for the gate, the cameras and the alarm, a connected setup brings them together — useful for checking on a property remotely without switching between logins.',
      },
      {
        heading: "Lights On While You\'re Away",
        text: 'An empty villa that\'s dark every night for a month reads as empty. Remote-controlled lighting from the same app as the cameras lets an owner put lights on for the evening from anywhere.',
      },
      {
        heading: 'Connecting Up an Existing System',
        text: 'A property with cameras or an alarm already installed can often have gate or access automation added and connected to the existing setup, rather than starting over.',
      },
    ],
    commonProblems: [
      {
        symptom: "Gate, cameras and alarm each have their own app, and checking on the property means logging into three separate things",
        text: 'Connecting them into one app is exactly the starting point most properties begin from — the individual systems stay the same, only how they\'re managed changes.',
      },
      {
        symptom: "Added a camera system after the gate was already automated, and now the two don\'t talk to each other",
        text: "Existing systems can usually be connected retroactively rather than needing the original gate install redone — have it assessed before assuming a full rebuild is required.",
      },
      {
        symptom: 'Managing a property from outside Portugal means checking several different apps just to confirm everything is fine',
        text: 'A connected app removes exactly that friction for a remote owner — one check instead of several, particularly useful when the property is being checked from a different country and time zone.',
      },
      {
        symptom: 'The villa sits dark for weeks at a time and visibly looks unoccupied',
        text: "Remote-controlled lighting is the simple fix — switch lights on for the evening from the same app as the cameras, so an empty property doesn\'t advertise itself as one.",
      },
      {
        symptom: 'Bought a property with an existing automated gate from a different installer and want it brought into a connected setup',
        text: "Existing gate, camera or alarm hardware can often be connected into a combined setup rather than replaced outright — have the existing equipment assessed before assuming a full swap-out is needed.",
      },
    ],
    extraSections: [
      {
        heading: 'Gate & Entry Automation',
        text: 'Driveway gates, barriers and entry points are motorised and connected, so access doesn\'t rely on someone being physically there to open them.',
      },
      {
        heading: 'One App, Several Systems',
        text: 'Cameras, alarms, access control and gates connect through a single app, avoiding the need to switch between separate logins to check different parts of the property.',
      },
      {
        heading: 'Simple Lighting Control',
        text: 'Remote-controlled lighting can be added alongside a security install — switch lights from the same app used for the cameras and alarm, so an empty property doesn\'t have to look empty.',
      },
    ],
    faqs: [
      {
        q: 'What does "smart home automation" actually include here?',
        a: 'It\'s an add-on to a security installation rather than a standalone service: the gate, access control, cameras and alarm connected into one app, plus simple automation such as remote-controlled lighting. It deliberately doesn\'t stretch beyond that.',
      },
      {
        q: 'Can lighting be controlled remotely as part of this?',
        a: 'Yes — basic remote-controlled lighting is one of the add-ons offered alongside a security install, managed from the same app as the cameras and alarm rather than as a separate system.',
      },
      {
        q: 'Can automation be added to systems already installed?',
        a: 'Often, yes — existing gates, cameras or alarms can frequently be connected into a single setup rather than needing to be replaced, and it can happen incrementally as systems are added or upgraded.',
      },
      {
        q: 'Do I need all four systems — gate, access, cameras and alarm — to use automation?',
        a: 'No — automation can apply to whichever systems are in place. Two connected systems still means fewer separate logins than running them independently.',
      },
      {
        q: 'How does "one app" actually work in practice?',
        a: 'Once systems are connected, cameras can be checked, the alarm armed or disarmed, and the gate opened from the same app, rather than switching between separate ones for each system.',
      },
      {
        q: 'What happens if the internet goes down — do the gate, alarm and cameras stop working, or just the connected app?',
        a: 'The individual systems — the gate motor, the alarm panel, the cameras — keep working on their own regardless of the connection; it\'s specifically the remote app view and cross-system control that needs a working connection.',
      },
      {
        q: 'Does connecting systems together make any one of them less reliable running on its own?',
        a: 'No — each system still operates independently; connecting them adds a shared layer for viewing and control rather than making one dependent on another to function at all.',
      },
    ],
  },
];

module.exports = services;
