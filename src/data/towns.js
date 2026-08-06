'use strict';

// 22 Algarve towns commonly relevant to English-speaking expats (UK, Ireland,
// Netherlands, Germany). Grouped by region so town pages can cross-link to
// nearby towns for internal linking.
//
// `character` is a short phrase used inline in the town-page intro sentence.
// `context` is the opening paragraph (property/expat profile + which services
// tend to be most relevant there, reasoned from property type — not a claim
// about specific past jobs, client counts or named developments).
// `propertyProfile`, `concerns` and `proximity` expand on that with genuine,
// town-specific detail: what's actually built there, what an owner in that
// town realistically worries about, and how it sits relative to its
// (hand-curated, geographically accurate) `nearby` towns.
// `relevantServices` picks 3 of the 7 services most relevant to the town's
// property profile, each with a short, specific reason — not every town
// needs the same three.
// `streetscapeAlt` is a town-specific placeholder caption for a
// property/streetscape image, distinct from the generic hero shot.
// `nearby` is a hand-curated list of the 3 geographically closest towns
// (not just "same region in array order") for accurate cross-linking.
const towns = [
  // West Algarve (Barlavento)
  {
    slug: 'lagos', name: 'Lagos', region: 'west', nearby: ['praia-da-luz', 'sagres', 'aljezur'],
    character: 'a popular base for expats on the western Algarve coast, with a historic old town and surrounding villa developments',
    context: 'Lagos combines a historic old town — narrow streets, a marina, apartment buildings — with newer villa developments spreading out toward Meia Praia and the surrounding hills. That mix means different priorities depending on where a property sits: apartments in the old town tend to lean on access control and video intercoms for shared entrances, while standalone villas further out are usually more focused on CCTV coverage of the garden and driveway, alarm systems, and a gate that can be opened without getting out of the car.',
    propertyProfile: 'Properties range from apartments and townhouses in the historic old town to standalone villas spreading out toward Meia Praia, Porto de Mós and the hills above the marina. Old-town buildings typically have shared entrances with several units per stairwell, while the newer villa developments sit on individual plots with private driveways, gardens and, often, a pool. Marina-front apartments form a third category, generally with some building-level entry security already in place.',
    concerns: "Owners who split time between Lagos and the UK or Ireland tend to worry most about a property standing empty for stretches of the year without a way to check on it. In the old town, narrow streets and close neighbours make discreet camera placement more of a priority than raw coverage. Around the newer developments near Meia Praia, the bigger question is usually covering a larger boundary and driveway properly rather than fitting equipment into a tight urban footprint.",
    proximity: "Lagos sits at the western end of the Algarve's main resort coastline, a short drive from Praia da Luz and around 30 minutes from Sagres at the region's south-western tip. Aljezur, further north along the wilder west coast, is also within reach for owners with property in both areas.",
    streetscapeAlt: '[Placeholder: Whitewashed apartment balconies overlooking Lagos marina]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Villa developments around Meia Praia benefit from full perimeter and driveway coverage across larger plots.' },
      { slug: 'access-control', reason: 'Old-town apartment buildings with shared stairwells suit video intercom and card-based entry.' },
      { slug: 'alarm-systems', reason: 'Properties left empty for weeks at a time benefit from remote arm, disarm and status checks.' },
    ],
  },
  {
    slug: 'praia-da-luz', name: 'Praia da Luz', region: 'west', nearby: ['lagos', 'sagres', 'alvor'],
    character: 'a small resort village popular with British and Irish homeowners',
    context: "Praia da Luz is a small resort village rather than a large town, with most properties being villas and townhouses, many owned as holiday or second homes rather than full-time residences. For owners who aren't on-site for weeks or months at a time, CCTV and an alarm system that can be checked and controlled remotely tend to matter more here than they would for a full-time residence, simply because the property is empty more often.",
    propertyProfile: 'Praia da Luz is a small resort village rather than a large town, and the property stock reflects that — mostly villas and townhouses built for holiday or seasonal use, with fewer large apartment blocks than towns like Lagos or Albufeira. Many properties sit within short walking distance of each other in low-rise developments rather than sprawling estates, and gardens and pools are common even on smaller plots.',
    concerns: 'Because a large share of properties here are second homes, extended vacancy is the central concern — owners are often back in the UK or Ireland for months at a stretch. Being able to check that a villa is secure, that the alarm is armed, and that nothing has been disturbed matters more here than in a town with a larger full-time resident population keeping an eye on things informally.',
    proximity: 'Praia da Luz sits between Lagos, a few minutes east along the coast, and Sagres, roughly 20 minutes further west. Alvor and the Portimão area are also within easy reach for owners who split their time across the western coast.',
    streetscapeAlt: '[Placeholder: Low-rise villa street in Praia da Luz near the seafront]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Remote viewing suits owners checking on a holiday villa from outside Portugal.' },
      { slug: 'alarm-systems', reason: 'A property left empty for months benefits from remote arm and disarm rather than relying on being on-site.' },
      { slug: 'smart-home-automation', reason: 'Connecting cameras and alarm into one app suits owners managing a property from a distance.' },
    ],
  },
  {
    slug: 'sagres', name: 'Sagres', region: 'west', nearby: ['praia-da-luz', 'lagos', 'aljezur'],
    character: 'a remote coastal town at the Algarve’s south-western tip, popular for its quieter, off-grid feel',
    context: "Sagres sits at the Algarve's south-western tip and has a quieter, more remote character than the towns further east — fewer dense developments, more standalone properties spread further apart. That spacing makes CCTV and alarm coverage more important on their own, since there are fewer neighbours nearby, and a stable network connection is worth planning for properly given the more rural setting.",
    propertyProfile: 'Sagres has a more remote, spread-out property profile than towns further east — standalone houses and villas on larger plots, with far fewer apartment blocks or dense developments. Distances between neighbouring properties are often greater here than anywhere else on the western coast, and many homes sit along the approach roads into town rather than clustered around a centre.',
    concerns: "The relative isolation that draws owners to Sagres is also what makes security more of a standalone concern — there are simply fewer neighbours nearby to notice anything out of place. A stable network connection can't be assumed either, given the more rural setting, which makes it worth factoring into any camera or alarm system from the start rather than treating it as an afterthought.",
    proximity: "Sagres sits at the Algarve's south-western tip, about 20 minutes from Praia da Luz and 30 minutes from Lagos. Aljezur, up the west coast, is the nearest town in the other direction, roughly 30-40 minutes north.",
    streetscapeAlt: '[Placeholder: Standalone villa on a remote clifftop road near Sagres]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Wider property boundaries with fewer neighbours nearby benefit from full perimeter coverage.' },
      { slug: 'home-networking', reason: 'A more rural setting makes a properly planned, stable network worth getting right from the start.' },
      { slug: 'alarm-systems', reason: 'Standalone properties with more distance from neighbours benefit from on-site and remote alerting together.' },
    ],
  },
  {
    slug: 'aljezur', name: 'Aljezur', region: 'west', nearby: ['sagres', 'monchique', 'silves'],
    character: 'a laid-back town on the west coast, popular with owners drawn to the wilder Costa Vicentina coastline',
    context: 'Aljezur and the surrounding Costa Vicentina coastline have a more rural, spread-out character than the resort towns further south — smallholdings, converted farmhouses and standalone properties rather than dense villa developments. Larger boundaries and driveways make gate automation and CCTV covering the approach to the property particularly relevant, and a reliable network connection is worth getting right given the more rural setting.',
    propertyProfile: 'Aljezur and the surrounding Costa Vicentina have a rural property profile — smallholdings, converted farmhouses and standalone houses on larger plots of land, rather than the dense villa developments common further south. Boundaries are often longer and less clearly defined than a typical resort-town garden wall, and outbuildings are common.',
    concerns: "The main concern for owners here tends to be the property's more remote setting: longer approach roads, fewer immediate neighbours, and boundaries that are harder to keep an eye on casually. A gate at the start of a long driveway is often the first real security measure a property has, and getting a network connection that reaches across a larger plot reliably takes more planning than in a compact urban setting.",
    proximity: 'Aljezur sits on the west coast, around 30-40 minutes north of Sagres and a similar distance from Monchique inland. Silves, further south-east, is also within a reasonable drive for owners covering multiple properties in the region.',
    streetscapeAlt: '[Placeholder: Converted farmhouse with land on the outskirts of Aljezur]',
    relevantServices: [
      { slug: 'gate-automation', reason: 'Longer driveways and rural approach roads make an automated gate a practical first step.' },
      { slug: 'cctv-installation', reason: 'Larger, less-defined boundaries benefit from cameras covering the approach to the property.' },
      { slug: 'home-networking', reason: 'A rural setting means a stable network needs proper planning rather than relying on standard broadband.' },
    ],
  },
  {
    slug: 'alvor', name: 'Alvor', region: 'west', nearby: ['praia-da-luz', 'portimao', 'lagos'],
    character: 'a small fishing town turned popular residential and holiday destination',
    context: 'Alvor has grown from a fishing town into a popular residential and holiday destination, with a mix of apartments near the estuary and villas further back from the centre. Apartment owners tend to prioritise access control and intercom systems for shared building entrances, while villa owners more often start with CCTV and an alarm system covering the property on its own.',
    propertyProfile: "Alvor's property mix reflects its growth from fishing town to residential destination — apartment blocks near the estuary and marina, and villas further back toward the surrounding hills. Estuary-front apartments are often part of larger developments with shared grounds, while the villas tend to sit on individual plots with more separation from neighbours.",
    concerns: "Apartment owners near the estuary are usually more focused on their own unit's entry security, since the building itself often already has some shared-entrance measures in place. Villa owners further back tend to think more about the whole property boundary and about coverage while away, since a number of properties in Alvor are used seasonally rather than year-round.",
    proximity: 'Alvor sits between Praia da Luz, about 15 minutes west, and Portimão, a similar distance east. Lagos is a bit further west along the same coast road, within easy reach for owners covering more than one property.',
    streetscapeAlt: '[Placeholder: Apartment block overlooking the Alvor estuary]',
    relevantServices: [
      { slug: 'access-control', reason: 'Estuary-front apartment blocks suit card or fob entry alongside existing building security.' },
      { slug: 'cctv-installation', reason: 'Villas further from the centre benefit from full boundary and driveway coverage.' },
      { slug: 'alarm-systems', reason: 'Seasonally used properties benefit from a system that can be checked and armed remotely.' },
    ],
  },
  {
    slug: 'portimao', name: 'Portimão', region: 'west', nearby: ['alvor', 'ferragudo', 'lagoa'],
    character: 'a larger town and commercial hub on the western Algarve, with a mix of apartments, villas and businesses',
    context: 'Portimão is the largest town on the western Algarve, with a genuine mix of apartments, villas and commercial premises rather than being purely residential. That range means the full spread of services applies here — access control and networking are particularly relevant for business premises and apartment blocks, alongside the CCTV and alarm systems that suit standalone villas in the surrounding areas.',
    propertyProfile: "As the largest town on the western Algarve, Portimão has the widest property mix in the area — apartment blocks in the centre, villas in the surrounding residential areas, and a genuine amount of commercial and retail premises. It's one of the few towns covered here where business security is as relevant as residential.",
    concerns: 'Commercial premises in Portimão tend to have different priorities than a holiday villa — access control for staff and stock areas, and a reliable network to support point-of-sale and camera systems together. Residential owners, meanwhile, split fairly evenly between apartment-block concerns (shared entrances, building security) and villa concerns (boundary coverage, remote monitoring while away).',
    proximity: "Portimão sits centrally on the western Algarve, close to Alvor to the west and Ferragudo and Lagoa just across the estuary and coast to the east. It's a natural hub for owners with interests spread across the western towns.",
    streetscapeAlt: '[Placeholder: Mixed apartment and commercial street in central Portimão]',
    relevantServices: [
      { slug: 'access-control', reason: 'Commercial premises and apartment blocks both benefit from controlled entry at shared or staff access points.' },
      { slug: 'home-networking', reason: 'Business premises running cameras, alarms and point-of-sale systems need networking that can support all of them reliably.' },
      { slug: 'cctv-installation', reason: 'Both villas and commercial premises commonly start with camera coverage as the first step.' },
    ],
  },
  {
    slug: 'ferragudo', name: 'Ferragudo', region: 'west', nearby: ['portimao', 'lagoa', 'carvoeiro'],
    character: 'a small fishing village opposite Portimão, with a mix of traditional homes and villas',
    context: 'Ferragudo is a small, traditional fishing village across the estuary from Portimão, with narrow streets and a mix of older village houses and villas on the outskirts. In the village core, CCTV and alarm systems tend to be the more practical starting point given the tighter layout; villas further out have more room for gate automation as well.',
    propertyProfile: "Ferragudo's older village core is made up of traditional, closely built houses along narrow streets, quite different from the villas found on the town's outskirts. Village-centre properties often share walls with neighbours and have limited exterior space, while the outlying villas have more typical garden and driveway layouts.",
    concerns: "In the tighter village core, discreet camera and sensor placement matters more than in a standalone villa, simply because there's less distance between a property and the street or a neighbour's window. Villas on the outskirts have more conventional concerns — boundary coverage and a gate at the driveway — closer to what you'd see in the larger developments nearby.",
    proximity: "Ferragudo sits directly across the estuary from Portimão, with Lagoa and Carvoeiro both within about 10-15 minutes to the east. It's a compact, walkable village, with most surrounding properties reachable within a short drive.",
    streetscapeAlt: "[Placeholder: Narrow traditional street in Ferragudo's village centre]",
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Village-centre properties benefit from compact, discreetly placed cameras suited to a tighter street layout.' },
      { slug: 'alarm-systems', reason: 'Closely built properties still benefit from sensor coverage independent of what neighbours can see.' },
      { slug: 'gate-automation', reason: 'Villas on the outskirts more often have a driveway and gate worth automating.' },
    ],
  },
  {
    slug: 'lagoa', name: 'Lagoa', region: 'west', nearby: ['ferragudo', 'carvoeiro', 'portimao'],
    character: 'a municipality covering several coastal towns and villages with a strong villa and rental market',
    context: 'Lagoa is a municipality covering several coastal towns and villages, with a strong holiday-villa and rental market throughout. For owners renting properties out between stays, CCTV that can be checked remotely is particularly useful for keeping an eye on a property between guests, and access control suits gated developments where several units share an entrance.',
    propertyProfile: 'Lagoa covers several coastal towns and villages under one municipality, with a property market weighted heavily toward holiday villas and rental properties rather than full-time residences. Many are part of small, purpose-built developments with shared access roads, alongside standalone villas on larger individual plots.',
    concerns: 'With so much of the property stock here used for holiday lets or as second homes, the recurring theme is managing a property between stays — knowing when guests have arrived or left, and being able to check on the property without being on-site for every changeover. Shared developments also raise questions about where private security ends and any development-level measures begin.',
    proximity: "Lagoa sits between Ferragudo and Carvoeiro along the coast, both around 10 minutes away, with Portimão a short drive to the west. It's a convenient base for owners with rental properties spread across the immediate area.",
    streetscapeAlt: '[Placeholder: Small villa development near Lagoa with a shared access road]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Remote viewing helps confirm guest arrival and departure on rental properties between stays.' },
      { slug: 'access-control', reason: 'Code-based entry suits rental properties, removing the need for physical key handovers.' },
      { slug: 'alarm-systems', reason: 'A property between bookings benefits from remote arm and disarm rather than relying on someone being present.' },
    ],
  },
  {
    slug: 'carvoeiro', name: 'Carvoeiro', region: 'west', nearby: ['lagoa', 'ferragudo', 'silves'],
    character: 'a small coastal town with a strong concentration of holiday villas and rental properties',
    context: "Carvoeiro has a high concentration of holiday villas and rental properties relative to its size, with many owners not on-site between bookings or visits. CCTV with remote viewing is especially relevant here for checking on a property between guests, and an alarm system that can be armed and checked remotely covers the periods when nobody's there at all.",
    propertyProfile: 'Carvoeiro has a particularly high concentration of holiday villas and rental properties for its size, with relatively few full-time residences by comparison. Properties tend to be villas rather than apartments, most with a pool, and many managed at least partly by an agency or property manager rather than the owner directly.',
    concerns: "The recurring concern here is time — owners and property managers alike are frequently not on-site, whether that's an owner back in the UK or a rental changing over between guests every week. Confirming a property is secure and undamaged between visits matters more in Carvoeiro than in towns with a larger share of permanent residents.",
    proximity: 'Carvoeiro sits between Lagoa, a short drive east, and Silves inland to the north. Ferragudo and Portimão are both within about 15-20 minutes for owners managing multiple properties along this stretch of coast.',
    streetscapeAlt: '[Placeholder: Villa with pool on a hillside above Carvoeiro]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'High rental turnover makes remote viewing between guest stays particularly useful.' },
      { slug: 'alarm-systems', reason: 'Properties frequently left unattended benefit from remote arm, disarm and status checks.' },
      { slug: 'access-control', reason: 'Code-based entry simplifies guest check-in without physical keys changing hands.' },
    ],
  },
  {
    slug: 'silves', name: 'Silves', region: 'west', nearby: ['lagoa', 'portimao', 'monchique'],
    character: 'an inland town with a growing number of expat homeowners drawn to its quieter pace',
    context: 'Silves is an inland, historic town with a growing number of expat homeowners, and a property mix that runs from town houses in the centre to rural quintas on the outskirts. Rural properties tend to need more thought given to networking and CCTV coverage across a larger boundary, while town-centre properties are usually more straightforward access control and alarm installs.',
    propertyProfile: 'Silves has two fairly distinct property types: historic town houses in the centre, close to the old castle and cathedral, and rural quintas and country properties on the outskirts. The inland setting means fewer holiday-villa developments than the coastal towns, and a higher share of owners living in the property full-time or for extended periods.',
    concerns: 'Town-centre owners deal with the same discretion and shared-wall considerations as any historic core, while rural quinta owners further out have to think about larger boundaries, longer driveways and a network connection that has to reach across more ground. Both groups tend to be less focused on holiday-rental turnover than the coastal towns and more on straightforward day-to-day security.',
    proximity: "Silves sits inland from Lagoa and Portimão, both around 15-20 minutes away, with Monchique further north into the hills. It's a natural base for owners drawn to the quieter, inland side of the western Algarve.",
    streetscapeAlt: '[Placeholder: Historic town house near Silves castle]',
    relevantServices: [
      { slug: 'access-control', reason: 'Historic town-centre properties benefit from electronic locks without altering original doors and frames.' },
      { slug: 'cctv-installation', reason: 'Rural quintas with larger boundaries benefit from coverage across the approach and grounds.' },
      { slug: 'home-networking', reason: 'Country properties on the outskirts need a network planned to reach across a larger plot.' },
    ],
  },
  {
    slug: 'monchique', name: 'Monchique', region: 'west', nearby: ['silves', 'aljezur', 'portimao'],
    character: 'a hillside town in the Algarve’s inland hills, popular with owners seeking a quieter rural setting',
    context: "Monchique sits up in the Algarve's inland hills, with a rural, spread-out character quite different from the coastal resort towns. Properties here tend to have larger grounds and more distance from neighbours, which makes CCTV and alarm coverage more self-contained, and a properly planned network connection more important given the more rural location.",
    propertyProfile: "Monchique's hillside, inland setting produces a different property profile from anywhere on the coast — traditional houses in the town itself, and larger rural properties with significant land scattered through the surrounding hills. Plots here are often irregular, following the contours of the hillside rather than a flat, rectangular garden.",
    concerns: 'The rural, hillside setting is both the appeal and the security challenge — properties are more spread out, distances to neighbours are greater, and mobile or broadband coverage can be less consistent than on the coast. Planning a network connection properly, rather than assuming standard coverage will reach every part of the property, matters more here than almost anywhere else covered.',
    proximity: "Monchique sits inland and uphill from Silves, about 20 minutes away, with Aljezur reachable over the hills to the west and Portimão back down toward the coast. It's a distinct, quieter alternative to the resort towns for owners who prefer that setting.",
    streetscapeAlt: '[Placeholder: Hillside rural property in the hills above Monchique]',
    relevantServices: [
      { slug: 'home-networking', reason: 'Hillside terrain and rural coverage make a properly planned network essential before adding other systems.' },
      { slug: 'cctv-installation', reason: 'Larger, irregular plots benefit from cameras covering multiple approach points rather than a single entrance.' },
      { slug: 'alarm-systems', reason: 'Greater distance from neighbours makes independent sensor coverage more important.' },
    ],
  },

  // Central Algarve
  {
    slug: 'albufeira', name: 'Albufeira', region: 'central', nearby: ['vilamoura', 'quarteira', 'loule'],
    character: 'one of the Algarve’s busiest resort towns, with a large mix of villas, apartments and holiday rentals',
    context: 'Albufeira is one of the busiest resort towns in the Algarve, with a large and varied mix of villas, apartments and holiday rentals packed close together. That density makes access control and video intercoms particularly relevant for apartment blocks and gated resorts, while CCTV and alarm systems suit the high turnover of holiday-rental villas where owners aren’t on-site between bookings.',
    propertyProfile: "Albufeira has one of the densest and most varied property markets in the Algarve — high-rise apartment blocks near the marina and old town, gated villa developments on the outskirts, and a large stock of holiday rentals throughout. Few towns in the region combine this much density with this much villa development at the same time.",
    concerns: "In the busier apartment areas, shared-entrance security and managing who has access to a building matter as much as any single unit's own system. In the villa developments and gated resorts further out, the concern shifts toward the high turnover of holiday rentals — properties changing guests weekly, sometimes with an owner who's never actually on-site to manage it directly.",
    proximity: "Albufeira sits centrally, close to Vilamoura and Quarteira to the east, both around 15-20 minutes away, with Loulé a bit further inland. It's one of the best-connected towns in the central Algarve for owners managing more than one property.",
    streetscapeAlt: '[Placeholder: High-rise apartment blocks near Albufeira marina]',
    relevantServices: [
      { slug: 'access-control', reason: 'Dense apartment blocks and gated resorts both rely on managed entry at shared access points.' },
      { slug: 'cctv-installation', reason: 'High rental turnover across villa developments benefits from remote viewing between guest stays.' },
      { slug: 'alarm-systems', reason: 'Rental villas left unattended between bookings benefit from remote arm and disarm.' },
    ],
  },
  {
    slug: 'vilamoura', name: 'Vilamoura', region: 'central', nearby: ['albufeira', 'quarteira', 'loule'],
    character: 'a marina resort area known for golf estates, villas and gated developments',
    context: 'Vilamoura is built around its marina and golf estates, with villas and townhouses largely sitting inside gated developments rather than standing alone. That gated structure makes access control and gate automation especially relevant here, working alongside CCTV to cover both the individual property and its access points.',
    propertyProfile: "Vilamoura is built almost entirely around planned developments — golf estates, marina-front apartments and villas within gated communities, rather than the organic town growth seen elsewhere in the Algarve. Very few properties here sit outside some form of managed development, each with its own entrance and, often, its own shared security arrangements already in place.",
    concerns: "Because so much of Vilamoura is gated, the main question for an individual property isn't whether there's any security at the development's edge, but how a private system complements it — controlling entry to your own villa or apartment specifically, rather than relying solely on the development's shared gate. Coordinating a personal system with an existing development setup is more relevant here than almost anywhere else covered.",
    proximity: "Vilamoura sits between Albufeira, a short drive west, and Quarteira immediately to the south, with Loulé inland to the north. Its marina and golf estates make it a natural cluster for owners with more than one property in the immediate area.",
    streetscapeAlt: '[Placeholder: Gated villa entrance within a Vilamoura golf estate]',
    relevantServices: [
      { slug: 'access-control', reason: 'Properties within gated developments benefit from managed entry at the individual unit alongside the development gate.' },
      { slug: 'gate-automation', reason: "Villas within golf estates commonly have their own driveway gate worth automating separately." },
      { slug: 'cctv-installation', reason: "Coverage of a property's own entrance and grounds complements, rather than replaces, development-level security." },
    ],
  },
  {
    slug: 'quarteira', name: 'Quarteira', region: 'central', nearby: ['vilamoura', 'albufeira', 'almancil'],
    character: 'a coastal town neighbouring Vilamoura, with a large number of apartments and holiday homes',
    context: 'Quarteira, next to Vilamoura, has a large number of apartments and holiday homes rather than being dominated by standalone villas. Access control and video intercom systems suit apartment block entrances well, and CCTV covering communal or private outdoor space is a common addition for owners who use the property seasonally.',
    propertyProfile: "Quarteira's property stock leans heavily toward apartments and holiday homes rather than standalone villas, reflecting its role as a busier, more affordable neighbour to Vilamoura. Blocks here are typically mid-rise, close to the seafront, with a mix of full-time residents and seasonal owners.",
    concerns: "Apartment security in Quarteira tends to centre on the building's shared entrance and stairwell rather than an individual garden or boundary, since most units don't have private outdoor space beyond a balcony or terrace. For seasonally used units, checking on the property remotely and knowing the building's shared areas are secure both matter more than boundary coverage.",
    proximity: "Quarteira sits right next to Vilamoura, a few minutes' drive, with Albufeira also close by to the west and Almancil a short drive inland to the east. It's well placed for owners covering the central Algarve's coastal strip.",
    streetscapeAlt: '[Placeholder: Mid-rise apartment building near Quarteira seafront]',
    relevantServices: [
      { slug: 'access-control', reason: 'Apartment block entrances benefit from video intercom and card or fob entry.' },
      { slug: 'cctv-installation', reason: 'Seasonal owners benefit from remote viewing of communal or private outdoor space.' },
      { slug: 'smart-home-automation', reason: "Connecting a single unit's systems into one app suits owners checking in remotely." },
    ],
  },
  {
    slug: 'loule', name: 'Loulé', region: 'central', nearby: ['albufeira', 'almancil', 'quarteira'],
    character: 'an inland and coastal municipality with everything from historic town houses to modern villa developments',
    context: 'Loulé’s municipality spans everything from historic town houses in the old town to modern villa developments further out, so there’s no single property type that dominates. Older town-centre properties tend to prioritise alarm systems and access control, while newer villa developments more often go for a fuller setup including CCTV and gate automation.',
    propertyProfile: "Loulé's municipality is genuinely broad — a historic old town with traditional houses and a well-known market, alongside modern villa developments and golf-adjacent properties further out toward the coast. Few towns covered here span such a wide range of property ages and styles within the same area.",
    concerns: "Old-town properties raise the same discretion and shared-wall questions as any historic centre, while newer villa developments further out have more conventional villa concerns — boundary coverage, a gate, and remote monitoring while away. There isn't a single dominant concern in Loulé the way there is in a resort town; it depends heavily on which part of the municipality a property sits in.",
    proximity: "Loulé sits inland from Albufeira and Vilamoura, both around 15-20 minutes away, with Almancil and Quarteira also within easy reach toward the coast. Its central position makes it a natural hub for owners covering the wider central Algarve.",
    streetscapeAlt: "[Placeholder: Traditional building near Loulé's historic market]",
    relevantServices: [
      { slug: 'access-control', reason: 'Historic old-town properties suit electronic locks and intercom without altering original doors.' },
      { slug: 'cctv-installation', reason: 'Newer villa developments further out benefit from full boundary coverage.' },
      { slug: 'gate-automation', reason: 'Villa properties toward the coast commonly include a driveway gate worth automating.' },
    ],
  },
  {
    slug: 'almancil', name: 'Almancil', region: 'central', nearby: ['loule', 'quarteira', 'faro'],
    character: 'an area known for upmarket villas and golf resort developments',
    context: 'Almancil is known for upmarket villas and golf resort developments, with larger properties and more substantial grounds than many other parts of the Algarve. CCTV, gate automation and access control tend to be the starting point here, given the size of the properties and the number of gated developments in the area.',
    propertyProfile: 'Almancil is known for some of the larger, more upmarket villas in the Algarve, many within golf resort developments. Plots tend to be bigger than average, often with extensive gardens, pools and multiple outbuildings, and gated entrances are the norm rather than the exception.',
    concerns: "With larger properties come more entry points and a bigger boundary to account for — a single camera or sensor covering the front door isn't enough when a property has several access points across a large plot. Owners here are also more likely to have staff (cleaners, gardeners, pool maintenance) coming and going regularly, which makes managing access without physical keys a bigger practical concern than in a smaller property.",
    proximity: 'Almancil sits between Loulé, a short drive inland, and Quarteira toward the coast, with Faro and its airport also within easy reach to the east. Its location between the coast and inland Loulé makes it convenient for owners covering both.',
    streetscapeAlt: '[Placeholder: Large villa with pool within an Almancil golf resort development]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Larger plots with multiple entry points benefit from full perimeter coverage rather than a single camera.' },
      { slug: 'access-control', reason: 'Regular staff access (cleaners, gardeners, pool maintenance) suits managed entry without physical keys.' },
      { slug: 'gate-automation', reason: "Gated entrances are standard across the area's golf resort developments." },
    ],
  },

  // East Algarve (Sotavento)
  {
    slug: 'faro', name: 'Faro', region: 'east', nearby: ['almancil', 'olhao', 'sao-bras-de-alportel'],
    character: 'the Algarve’s capital and main transport hub, with a wide mix of residential property types',
    context: 'Faro is the Algarve’s capital and main transport hub, with a genuinely wide mix of residential property types alongside a significant amount of commercial and office space. That range means access control and networking are particularly relevant for business premises, while the residential mix covers everything from apartments to standalone houses that suit the fuller range of CCTV, alarm and access control options.',
    propertyProfile: "As the Algarve's capital, Faro has the most varied property mix covered here — apartment blocks and townhouses in the city itself, standalone houses in the surrounding suburbs, and a genuine amount of office and commercial space given its role as the region's administrative and transport hub.",
    concerns: "Commercial and office premises in Faro have different priorities from residential properties — controlled staff access, and often a higher standard of camera and alarm coverage given the volume of people passing through. Residential owners split between city-apartment concerns (shared entrances, building security) and suburban-house concerns (boundary coverage, a gate), depending on where in the wider Faro area the property sits.",
    proximity: 'Faro sits centrally on the eastern side of the Algarve, close to Almancil to the west and Olhão a short drive east along the coast. Its airport and transport links make it a practical base for owners with property spread across the wider region.',
    streetscapeAlt: '[Placeholder: Mixed residential and commercial street in central Faro]',
    relevantServices: [
      { slug: 'access-control', reason: 'Commercial and office premises benefit from controlled staff access and visitor management.' },
      { slug: 'home-networking', reason: 'Business premises running multiple security systems need networking built to support them reliably.' },
      { slug: 'cctv-installation', reason: 'Both residential and commercial properties commonly start with camera coverage as a first step.' },
    ],
  },
  {
    slug: 'olhao', name: 'Olhão', region: 'east', nearby: ['faro', 'sao-bras-de-alportel', 'tavira'],
    character: 'a working fishing town on the eastern Algarve with a growing expat community',
    context: 'Olhão is a working fishing town rather than a resort destination, with a growing expat community settling into its more traditional town fabric. Properties here tend to be closer together than in the villa-heavy resort areas, which makes CCTV and alarm systems the more common starting point, with gate automation more relevant on the outskirts where properties have more space.',
    propertyProfile: "Olhão's property fabric reflects its working fishing-town origins — closely built houses in the centre, many with shared walls, and more spread-out properties on the outskirts as the town gives way to surrounding farmland. It has a genuine full-time resident population rather than being dominated by seasonal or holiday ownership.",
    concerns: "In the town centre, tightly packed streets mean discreet installation matters, similar to other historic cores in the region. On the outskirts, where properties have more land, the concerns shift toward boundary coverage and a gate at the driveway. Olhão's growing expat community also means more owners than in the past are looking for straightforward, English-explained options rather than navigating the process in Portuguese.",
    proximity: "Olhão sits between Faro, a short drive west, and Tavira further east, with São Brás de Alportel reachable inland to the north. It's a convenient midpoint for owners covering the stretch between Faro and the eastern towns.",
    streetscapeAlt: '[Placeholder: Traditional fishing-town house in central Olhão]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Town-centre properties benefit from compact, discreet camera placement suited to a tighter street layout.' },
      { slug: 'alarm-systems', reason: 'Closely built properties still benefit from independent sensor coverage.' },
      { slug: 'gate-automation', reason: 'Properties on the outskirts with more land often include a driveway worth automating.' },
    ],
  },
  {
    slug: 'sao-bras-de-alportel', name: 'São Brás de Alportel', region: 'east', nearby: ['faro', 'olhao', 'loule'],
    character: 'a quiet inland town popular with homeowners looking to be away from the coastal crowds',
    context: 'São Brás de Alportel sits inland, away from the coastal crowds, with a quieter, more residential character. Properties here are often standalone houses with more surrounding land than a coastal apartment, which makes CCTV and alarm coverage across the whole boundary more relevant, alongside a properly planned network given the more rural setting.',
    propertyProfile: "São Brás de Alportel sits away from the coast entirely, and its property profile reflects that — standalone houses with real gardens and land, rather than apartments or the tightly packed villa developments found in the resort towns. It's a genuinely residential, inland town rather than a holiday destination.",
    concerns: "Because most properties here are full-time or long-term residences rather than seasonal homes, the concerns are more everyday than holiday-specific: covering a boundary that's often larger than a typical coastal plot, and making sure a network connection reaches reliably across the property, given the more rural setting than the towns directly on the coast.",
    proximity: 'São Brás de Alportel sits inland between Faro and Loulé, both around 15-20 minutes away, with Olhão also within easy reach toward the coast. It offers a quieter, inland alternative for owners who want distance from the busier resort towns without moving far from Faro.',
    streetscapeAlt: '[Placeholder: Standalone house with garden in São Brás de Alportel]',
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Larger inland plots benefit from coverage across the whole boundary rather than just the entrance.' },
      { slug: 'alarm-systems', reason: 'Full-time residences benefit from sensor coverage independent of casual passers-by.' },
      { slug: 'home-networking', reason: 'A more rural setting means a stable network needs proper planning from the outset.' },
    ],
  },
  {
    slug: 'tavira', name: 'Tavira', region: 'east', nearby: ['olhao', 'sao-bras-de-alportel', 'castro-marim'],
    character: 'a quieter, historic town on the eastern Algarve, popular with retirees and second-home owners',
    context: 'Tavira is one of the more historic towns on the eastern Algarve, popular with retirees and second-home owners drawn to its quieter pace. Many properties here are left empty for periods of the year, which makes CCTV and an alarm system that can be checked remotely particularly useful, while historic town-centre properties sometimes call for more discreet installation than a modern villa would.',
    propertyProfile: "Tavira's property market is weighted toward its historic centre — townhouses and traditional buildings along the river and around the town's churches and bridges — with modern developments and villas more common on the outskirts. It has a notably older and more retiree-heavy owner profile than the western resort towns.",
    concerns: "Many properties in Tavira sit empty for real stretches of the year, whether that's a retiree spending part of the year back home or a second-home owner visiting seasonally. Historic town-centre buildings also often can't accommodate a standard camera or sensor installation the way a modern villa can, which makes planning around the property's existing structure more important here than in newer developments.",
    proximity: 'Tavira sits between Olhão to the west and Castro Marim further east toward the Spanish border, both within about 20-30 minutes. São Brás de Alportel is also reachable inland for owners covering the wider eastern Algarve.',
    streetscapeAlt: '[Placeholder: Historic townhouse along the river in Tavira]',
    relevantServices: [
      { slug: 'alarm-systems', reason: 'Properties left empty for extended periods benefit from remote arm, disarm and status checks.' },
      { slug: 'cctv-installation', reason: 'Remote viewing suits owners checking on a property from outside Portugal for part of the year.' },
      { slug: 'access-control', reason: 'Historic buildings suit electronic locks that work with existing doors rather than requiring structural changes.' },
    ],
  },
  {
    slug: 'castro-marim', name: 'Castro Marim', region: 'east', nearby: ['tavira', 'vila-real-de-santo-antonio', 'sao-bras-de-alportel'],
    character: 'a small historic town on the eastern Algarve near the Guadiana river',
    context: 'Castro Marim is a small, historic town near the Guadiana river in the far east of the Algarve, with a quieter property market than the resort towns further west. Standalone houses here tend to do well with straightforward CCTV and alarm coverage, and access control suits the smaller number of gated or shared developments in the area.',
    propertyProfile: 'Castro Marim has one of the quieter, smaller property markets covered here — standalone houses rather than large developments, with a noticeably lower density than the resort towns further west. Its position near the Guadiana river and the Spanish border gives it a distinct, less touristic character.',
    concerns: "With fewer large developments and a smaller overall population, individual property security tends to matter more on its own terms here — there's less of a shared-development safety net to rely on than in a gated resort. Straightforward, reliable coverage of a standalone house is generally the priority rather than anything more elaborate.",
    proximity: "Castro Marim sits at the eastern edge of the Algarve, close to Vila Real de Santo António on the border and around 20 minutes from Tavira to the west. It's the natural final stop for owners covering the Algarve's eastern reach toward Spain.",
    streetscapeAlt: "[Placeholder: Standalone house near Castro Marim's hilltop castle]",
    relevantServices: [
      { slug: 'cctv-installation', reason: 'Standalone houses without a shared development benefit from independent perimeter coverage.' },
      { slug: 'alarm-systems', reason: 'Straightforward sensor coverage suits smaller, standalone properties well.' },
      { slug: 'access-control', reason: 'The smaller number of gated or shared developments in the area still benefit from managed entry.' },
    ],
  },
  {
    slug: 'vila-real-de-santo-antonio', name: 'Vila Real de Santo António', region: 'east', nearby: ['castro-marim', 'tavira', 'olhao'],
    character: 'a border town on the eastern Algarve, close to the Spanish frontier',
    context: 'Vila Real de Santo António sits right on the border with Spain, with a residential mix of apartments and houses rather than large villa estates. Apartment buildings benefit from access control and intercom systems at shared entrances, while standalone houses in and around the town more commonly start with CCTV and an alarm system.',
    propertyProfile: "Vila Real de Santo António's property stock is mostly apartments and townhouses rather than large villa estates, reflecting its planned, grid-laid-out town centre near the border crossing into Spain. It has a more urban feel than most other towns covered here, closer in character to a small city than a resort village.",
    concerns: 'Apartment buildings in the town centre benefit most from shared-entrance security, given the density of the layout, while standalone houses on the edges of town have more typical boundary and gate concerns. Being right on the border also means a genuinely international mix of owners and visitors passing through, which makes clear English-language support a practical consideration alongside the security work itself.',
    proximity: "Vila Real de Santo António sits at the Algarve's easternmost point, a short drive from Castro Marim and around 30-40 minutes from Tavira further west. Olhão is also within reach for owners covering the wider eastern stretch of the region.",
    streetscapeAlt: '[Placeholder: Grid-planned apartment street in central Vila Real de Santo António]',
    relevantServices: [
      { slug: 'access-control', reason: 'Town-centre apartment buildings benefit from video intercom and card or fob entry at shared entrances.' },
      { slug: 'cctv-installation', reason: "Standalone houses on the town's edges benefit from boundary and driveway coverage." },
      { slug: 'alarm-systems', reason: 'Both apartments and houses benefit from independent sensor coverage regardless of building type.' },
    ],
  },
];

function nearbyTowns(slug, count = 3) {
  const current = towns.find((t) => t.slug === slug);
  if (!current) return [];
  if (current.nearby && current.nearby.length) {
    return current.nearby
      .slice(0, count)
      .map((s) => towns.find((t) => t.slug === s))
      .filter(Boolean);
  }
  const sameRegion = towns.filter((t) => t.slug !== slug && t.region === current.region);
  const rest = towns.filter((t) => t.slug !== slug && t.region !== current.region);
  return [...sameRegion, ...rest].slice(0, count);
}

const REGION_LABELS = { west: 'West Algarve', central: 'Central Algarve', east: 'East Algarve' };

function regionGroups() {
  return ['west', 'central', 'east'].map((key) => ({
    key,
    label: REGION_LABELS[key],
    towns: towns.filter((t) => t.region === key),
  }));
}

module.exports = { towns, nearbyTowns, regionGroups };
