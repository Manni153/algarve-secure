'use strict';

// 22 Algarve towns commonly relevant to English-speaking expats (UK, Ireland,
// Netherlands, Germany). Grouped by region so town pages can cross-link to
// nearby towns for internal linking.
//
// `character` is a short phrase used inline in the town-page intro sentence.
// `context` is a fuller paragraph (property/expat profile + which services
// tend to be most relevant there, reasoned from property type — not a claim
// about specific past jobs, client counts or named developments).
const towns = [
  // West Algarve (Barlavento)
  { slug: 'lagos', name: 'Lagos', region: 'west',
    character: 'a popular base for expats on the western Algarve coast, with a historic old town and surrounding villa developments',
    context: 'Lagos combines a historic old town — narrow streets, a marina, apartment buildings — with newer villa developments spreading out toward Meia Praia and the surrounding hills. That mix means different priorities depending on where a property sits: apartments in the old town tend to lean on access control and video intercoms for shared entrances, while standalone villas further out are usually more focused on CCTV coverage of the garden and driveway, alarm systems, and a gate that can be opened without getting out of the car.' },
  { slug: 'praia-da-luz', name: 'Praia da Luz', region: 'west',
    character: 'a small resort village popular with British and Irish homeowners',
    context: "Praia da Luz is a small resort village rather than a large town, with most properties being villas and townhouses, many owned as holiday or second homes rather than full-time residences. For owners who aren't on-site for weeks or months at a time, CCTV and an alarm system that can be checked and controlled remotely tend to matter more here than they would for a full-time residence, simply because the property is empty more often." },
  { slug: 'sagres', name: 'Sagres', region: 'west',
    character: 'a remote coastal town at the Algarve’s south-western tip, popular for its quieter, off-grid feel',
    context: "Sagres sits at the Algarve's south-western tip and has a quieter, more remote character than the towns further east — fewer dense developments, more standalone properties spread further apart. That spacing makes CCTV and alarm coverage more important on their own, since there are fewer neighbours nearby, and a stable network connection is worth planning for properly given the more rural setting." },
  { slug: 'aljezur', name: 'Aljezur', region: 'west',
    character: 'a laid-back town on the west coast, popular with owners drawn to the wilder Costa Vicentina coastline',
    context: 'Aljezur and the surrounding Costa Vicentina coastline have a more rural, spread-out character than the resort towns further south — smallholdings, converted farmhouses and standalone properties rather than dense villa developments. Larger boundaries and driveways make gate automation and CCTV covering the approach to the property particularly relevant, and a reliable network connection is worth getting right given the more rural setting.' },
  { slug: 'alvor', name: 'Alvor', region: 'west',
    character: 'a small fishing town turned popular residential and holiday destination',
    context: 'Alvor has grown from a fishing town into a popular residential and holiday destination, with a mix of apartments near the estuary and villas further back from the centre. Apartment owners tend to prioritise access control and intercom systems for shared building entrances, while villa owners more often start with CCTV and an alarm system covering the property on its own.' },
  { slug: 'portimao', name: 'Portimão', region: 'west',
    character: 'a larger town and commercial hub on the western Algarve, with a mix of apartments, villas and businesses',
    context: 'Portimão is the largest town on the western Algarve, with a genuine mix of apartments, villas and commercial premises rather than being purely residential. That range means the full spread of services applies here — access control and networking are particularly relevant for business premises and apartment blocks, alongside the CCTV and alarm systems that suit standalone villas in the surrounding areas.' },
  { slug: 'ferragudo', name: 'Ferragudo', region: 'west',
    character: 'a small fishing village opposite Portimão, with a mix of traditional homes and villas',
    context: 'Ferragudo is a small, traditional fishing village across the estuary from Portimão, with narrow streets and a mix of older village houses and villas on the outskirts. In the village core, CCTV and alarm systems tend to be the more practical starting point given the tighter layout; villas further out have more room for gate automation as well.' },
  { slug: 'lagoa', name: 'Lagoa', region: 'west',
    character: 'a municipality covering several coastal towns and villages with a strong villa and rental market',
    context: 'Lagoa is a municipality covering several coastal towns and villages, with a strong holiday-villa and rental market throughout. For owners renting properties out between stays, CCTV that can be checked remotely is particularly useful for keeping an eye on a property between guests, and access control suits gated developments where several units share an entrance.' },
  { slug: 'carvoeiro', name: 'Carvoeiro', region: 'west',
    character: 'a small coastal town with a strong concentration of holiday villas and rental properties',
    context: "Carvoeiro has a high concentration of holiday villas and rental properties relative to its size, with many owners not on-site between bookings or visits. CCTV with remote viewing is especially relevant here for checking on a property between guests, and an alarm system that can be armed and checked remotely covers the periods when nobody's there at all." },
  { slug: 'silves', name: 'Silves', region: 'west',
    character: 'an inland town with a growing number of expat homeowners drawn to its quieter pace',
    context: 'Silves is an inland, historic town with a growing number of expat homeowners, and a property mix that runs from town houses in the centre to rural quintas on the outskirts. Rural properties tend to need more thought given to networking and CCTV coverage across a larger boundary, while town-centre properties are usually more straightforward access control and alarm installs.' },
  { slug: 'monchique', name: 'Monchique', region: 'west',
    character: 'a hillside town in the Algarve’s inland hills, popular with owners seeking a quieter rural setting',
    context: "Monchique sits up in the Algarve's inland hills, with a rural, spread-out character quite different from the coastal resort towns. Properties here tend to have larger grounds and more distance from neighbours, which makes CCTV and alarm coverage more self-contained, and a properly planned network connection more important given the more rural location." },

  // Central Algarve
  { slug: 'albufeira', name: 'Albufeira', region: 'central',
    character: 'one of the Algarve’s busiest resort towns, with a large mix of villas, apartments and holiday rentals',
    context: 'Albufeira is one of the busiest resort towns in the Algarve, with a large and varied mix of villas, apartments and holiday rentals packed close together. That density makes access control and video intercoms particularly relevant for apartment blocks and gated resorts, while CCTV and alarm systems suit the high turnover of holiday-rental villas where owners aren’t on-site between bookings.' },
  { slug: 'vilamoura', name: 'Vilamoura', region: 'central',
    character: 'a marina resort area known for golf estates, villas and gated developments',
    context: 'Vilamoura is built around its marina and golf estates, with villas and townhouses largely sitting inside gated developments rather than standing alone. That gated structure makes access control and gate automation especially relevant here, working alongside CCTV to cover both the individual property and its access points.' },
  { slug: 'quarteira', name: 'Quarteira', region: 'central',
    character: 'a coastal town neighbouring Vilamoura, with a large number of apartments and holiday homes',
    context: 'Quarteira, next to Vilamoura, has a large number of apartments and holiday homes rather than being dominated by standalone villas. Access control and video intercom systems suit apartment block entrances well, and CCTV covering communal or private outdoor space is a common addition for owners who use the property seasonally.' },
  { slug: 'loule', name: 'Loulé', region: 'central',
    character: 'an inland and coastal municipality with everything from historic town houses to modern villa developments',
    context: 'Loulé’s municipality spans everything from historic town houses in the old town to modern villa developments further out, so there’s no single property type that dominates. Older town-centre properties tend to prioritise alarm systems and access control, while newer villa developments more often go for a fuller setup including CCTV and gate automation.' },
  { slug: 'almancil', name: 'Almancil', region: 'central',
    character: 'an area known for upmarket villas and golf resort developments',
    context: 'Almancil is known for upmarket villas and golf resort developments, with larger properties and more substantial grounds than many other parts of the Algarve. CCTV, gate automation and access control tend to be the starting point here, given the size of the properties and the number of gated developments in the area.' },

  // East Algarve (Sotavento)
  { slug: 'faro', name: 'Faro', region: 'east',
    character: 'the Algarve’s capital and main transport hub, with a wide mix of residential property types',
    context: 'Faro is the Algarve’s capital and main transport hub, with a genuinely wide mix of residential property types alongside a significant amount of commercial and office space. That range means access control and networking are particularly relevant for business premises, while the residential mix covers everything from apartments to standalone houses that suit the fuller range of CCTV, alarm and access control options.' },
  { slug: 'olhao', name: 'Olhão', region: 'east',
    character: 'a working fishing town on the eastern Algarve with a growing expat community',
    context: 'Olhão is a working fishing town rather than a resort destination, with a growing expat community settling into its more traditional town fabric. Properties here tend to be closer together than in the villa-heavy resort areas, which makes CCTV and alarm systems the more common starting point, with gate automation more relevant on the outskirts where properties have more space.' },
  { slug: 'sao-bras-de-alportel', name: 'São Brás de Alportel', region: 'east',
    character: 'a quiet inland town popular with homeowners looking to be away from the coastal crowds',
    context: 'São Brás de Alportel sits inland, away from the coastal crowds, with a quieter, more residential character. Properties here are often standalone houses with more surrounding land than a coastal apartment, which makes CCTV and alarm coverage across the whole boundary more relevant, alongside a properly planned network given the more rural setting.' },
  { slug: 'tavira', name: 'Tavira', region: 'east',
    character: 'a quieter, historic town on the eastern Algarve, popular with retirees and second-home owners',
    context: 'Tavira is one of the more historic towns on the eastern Algarve, popular with retirees and second-home owners drawn to its quieter pace. Many properties here are left empty for periods of the year, which makes CCTV and an alarm system that can be checked remotely particularly useful, while historic town-centre properties sometimes call for more discreet installation than a modern villa would.' },
  { slug: 'castro-marim', name: 'Castro Marim', region: 'east',
    character: 'a small historic town on the eastern Algarve near the Guadiana river',
    context: 'Castro Marim is a small, historic town near the Guadiana river in the far east of the Algarve, with a quieter property market than the resort towns further west. Standalone houses here tend to do well with straightforward CCTV and alarm coverage, and access control suits the smaller number of gated or shared developments in the area.' },
  { slug: 'vila-real-de-santo-antonio', name: 'Vila Real de Santo António', region: 'east',
    character: 'a border town on the eastern Algarve, close to the Spanish frontier',
    context: 'Vila Real de Santo António sits right on the border with Spain, with a residential mix of apartments and houses rather than large villa estates. Apartment buildings benefit from access control and intercom systems at shared entrances, while standalone houses in and around the town more commonly start with CCTV and an alarm system.' },
];

function nearbyTowns(slug, count = 3) {
  const current = towns.find((t) => t.slug === slug);
  if (!current) return [];
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
