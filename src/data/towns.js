'use strict';

// 22 Algarve towns commonly relevant to English-speaking expats (UK, Ireland,
// Netherlands, Germany). Grouped by region so town pages can cross-link to
// nearby towns for internal linking.
const towns = [
  // West Algarve (Barlavento)
  { slug: 'lagos', name: 'Lagos', region: 'west',
    character: 'a popular base for expats on the western Algarve coast, with a historic old town and surrounding villa developments' },
  { slug: 'praia-da-luz', name: 'Praia da Luz', region: 'west',
    character: 'a small resort village popular with British and Irish homeowners' },
  { slug: 'sagres', name: 'Sagres', region: 'west',
    character: 'a remote coastal town at the Algarve’s south-western tip, popular for its quieter, off-grid feel' },
  { slug: 'aljezur', name: 'Aljezur', region: 'west',
    character: 'a laid-back town on the west coast, popular with owners drawn to the wilder Costa Vicentina coastline' },
  { slug: 'alvor', name: 'Alvor', region: 'west',
    character: 'a small fishing town turned popular residential and holiday destination' },
  { slug: 'portimao', name: 'Portimão', region: 'west',
    character: 'a larger town and commercial hub on the western Algarve, with a mix of apartments, villas and businesses' },
  { slug: 'ferragudo', name: 'Ferragudo', region: 'west',
    character: 'a small fishing village opposite Portimão, with a mix of traditional homes and villas' },
  { slug: 'lagoa', name: 'Lagoa', region: 'west',
    character: 'a municipality covering several coastal towns and villages with a strong villa and rental market' },
  { slug: 'carvoeiro', name: 'Carvoeiro', region: 'west',
    character: 'a small coastal town with a strong concentration of holiday villas and rental properties' },
  { slug: 'silves', name: 'Silves', region: 'west',
    character: 'an inland town with a growing number of expat homeowners drawn to its quieter pace' },
  { slug: 'monchique', name: 'Monchique', region: 'west',
    character: 'a hillside town in the Algarve’s inland hills, popular with owners seeking a quieter rural setting' },

  // Central Algarve
  { slug: 'albufeira', name: 'Albufeira', region: 'central',
    character: 'one of the Algarve’s busiest resort towns, with a large mix of villas, apartments and holiday rentals' },
  { slug: 'vilamoura', name: 'Vilamoura', region: 'central',
    character: 'a marina resort area known for golf estates, villas and gated developments' },
  { slug: 'quarteira', name: 'Quarteira', region: 'central',
    character: 'a coastal town neighbouring Vilamoura, with a large number of apartments and holiday homes' },
  { slug: 'loule', name: 'Loulé', region: 'central',
    character: 'an inland and coastal municipality with everything from historic town houses to modern villa developments' },
  { slug: 'almancil', name: 'Almancil', region: 'central',
    character: 'an area known for upmarket villas and golf resort developments' },

  // East Algarve (Sotavento)
  { slug: 'faro', name: 'Faro', region: 'east',
    character: 'the Algarve’s capital and main transport hub, with a wide mix of residential property types' },
  { slug: 'olhao', name: 'Olhão', region: 'east',
    character: 'a working fishing town on the eastern Algarve with a growing expat community' },
  { slug: 'sao-bras-de-alportel', name: 'São Brás de Alportel', region: 'east',
    character: 'a quiet inland town popular with homeowners looking to be away from the coastal crowds' },
  { slug: 'tavira', name: 'Tavira', region: 'east',
    character: 'a quieter, historic town on the eastern Algarve, popular with retirees and second-home owners' },
  { slug: 'castro-marim', name: 'Castro Marim', region: 'east',
    character: 'a small historic town on the eastern Algarve near the Guadiana river' },
  { slug: 'vila-real-de-santo-antonio', name: 'Vila Real de Santo António', region: 'east',
    character: 'a border town on the eastern Algarve, close to the Spanish frontier' },
];

function nearbyTowns(slug, count = 3) {
  const current = towns.find((t) => t.slug === slug);
  if (!current) return [];
  const sameRegion = towns.filter((t) => t.slug !== slug && t.region === current.region);
  const rest = towns.filter((t) => t.slug !== slug && t.region !== current.region);
  return [...sameRegion, ...rest].slice(0, count);
}

module.exports = { towns, nearbyTowns };
