export const site = {
  name: 'Recreatiebedrijf Boot',
  tagline: 'Centraal gelegen op de kop van Schouwen-Duiveland',
  shortDescription:
    'Gastvrij familiebedrijf in Noordwelle, op fietsafstand van Renesse, het Noordzeestrand en de Brouwersdam.',
  address: {
    street: 'Lokkershofweg 7',
    postal: '4326 SE',
    city: 'Noordwelle',
    region: 'Schouwen-Duiveland, Zeeland',
  },
  phone: '+31 6 10 43 00 45',
  phoneHref: 'tel:+31610430045',
  email: 'info@recreatiebedrijfboot.nl',
  emailHref: 'mailto:info@recreatiebedrijfboot.nl',
  hosts: 'Gertjan & Lisette',
  founded: 'Familiebedrijf, sinds 2024 onder leiding van Gertjan en Lisette',
  socials: {
    facebook: 'https://www.facebook.com/recreatiebedrijfboot',
    instagram: 'https://www.instagram.com/',
  },
};

export const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'Accommodaties',
    href: '/accommodaties',
    children: [
      { label: 'Mini-camping', href: '/accommodaties/mini-camping', desc: 'Ruime kampeerplaatsen tot 370 m²' },
      { label: 'Appartementen', href: '/accommodaties/appartementen', desc: '7 sfeervolle appartementen, 2 tot 5 personen' },
      { label: 'Safaritent', href: '/accommodaties/safaritent', desc: 'Avontuurlijk verblijf met veranda' },
      { label: 'Huisje Weltevreden', href: '/accommodaties/huisje-weltevreden', desc: 'Vakantiehuisje voor het hele gezin' },
      { label: 'Duinweg 119-4', href: '/accommodaties/duinweg-119-4', desc: 'Vakantiewoning aan de duinrand' },
      { label: 'Caravanstalling', href: '/accommodaties/caravanstalling', desc: 'Overdekte stalling tot 8 meter' },
    ],
  },
  { label: 'Plattegrond', href: '/plattegrond' },
  { label: 'Omgeving', href: '/omgeving' },
  { label: 'Arrangementen', href: '/arrangementen' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const accommodations = [
  {
    slug: 'mini-camping',
    name: 'Mini-camping',
    short: 'Ruime kampeerplaatsen op twee velden, midden in het Zeeuwse polderland.',
    capacity: 'Tot 6 pers. per plaats',
    sizeRange: '150 – 370 m² per plek',
    priceFrom: 'Vanaf € 22 p.n.',
    eyebrow: 'voor wie ruimte zoekt',
    image: '/images/mini-camping.webp',
    gallery: [
      '/images/gal-minicamping-1.webp',
      '/images/gal-minicamping-2.webp',
      '/images/gal-minicamping-3.webp',
      '/images/gal-minicamping-4.webp',
      '/images/gal-minicamping-5.webp',
      '/images/gal-minicamping-6.webp',
    ],
    badges: ['Eigen 10A stroom', 'Watertap met afvoer', 'Honden welkom'],
    description:
      'Twee gezellige velden met in totaal genoeg ruimte om écht weg te zijn. Op veld 1 vind je 10 royale kampeerplaatsen van zo\'n 150 m², op veld 2 staan plekken van gemiddeld 370 m². Iedere plek heeft een eigen wateraansluiting met afvoer en een 10A stroompunt. Wifi is gratis.',
    facilities: [
      'Twee verwarmde sanitairgebouwen met douches, toiletten en afwasplek',
      'Te huren privé-sanitair op veld 1',
      'Eigen stroomaansluiting (10A) en watertap met afvoer per plek',
      'Verharde parkeerplek bij iedere kampeerplaats',
      'Aparte parkeerplaats, cameratoezicht en gescheiden afvalinzameling',
      'Chemisch toilet stortplaats',
      'Gratis wifi en Digitenne-ontvangst',
    ],
    pets: 'Honden welkom (€ 3,00 p.n., max. 2 in overleg)',
  },
  {
    slug: 'appartementen',
    name: 'Appartementen',
    short: 'Zeven appartementen met namen uit de zee, ideaal voor stelletjes en gezinnen.',
    capacity: '2 – 5 personen',
    sizeRange: '7 appartementen',
    priceFrom: 'Vanaf € 60 p.n.',
    eyebrow: 'onder een eigen dak',
    image: '/images/appartementen.webp',
    gallery: [
      '/images/gal-appartementen-1.webp',
      '/images/gal-appartementen-2.webp',
      '/images/gal-appartementen-3.webp',
    ],
    badges: ['Eigen keuken', 'Badkamer met douche', 'Wifi gratis'],
    description:
      'Onze zeven appartementen heten Alikruik, Krab, Kreeft, Mossel, Oester, Wulk en Zeester. Vier ervan zijn voor twee personen, drie voor maximaal vijf. Elk appartement heeft een eigen keuken, woonkamer met zithoek, badkamer met douche en LCD-tv. Verwarming via gas of cv.',
    facilities: [
      'Volledig ingerichte keuken met kookplaat, koelkast en koffiezetter',
      'Woonkamer met zitje en LCD-tv',
      'Badkamer met douche, toilet en wastafel',
      'Centrale verwarming of gaskachel',
      'Gratis wifi op het hele terrein',
      'Laadpunt voor elektrische auto\'s',
    ],
    pets: 'Maximaal 2 honden per appartement (€ 3,00 p.n.)',
  },
  {
    slug: 'safaritent',
    name: 'Safaritent',
    short: 'Avontuurlijk slapen op een vlonder met 20 m² overdekte veranda.',
    capacity: '4 – 5 personen',
    sizeRange: '45 m² + 20 m² veranda',
    priceFrom: 'Vanaf € 55 p.n.',
    eyebrow: 'slapen onder doek',
    image: '/images/safaritent.webp',
    gallery: [
      '/images/gal-safaritent-1.webp',
      '/images/gal-safaritent-2.webp',
      '/images/gal-safaritent-3.webp',
    ],
    badges: ['Tweepersoons hemelbed', 'Pelletkachel', 'Veranda 20 m²'],
    description:
      'Slapen onder doek, maar dan luxe. Onze safaritent staat op een houten vlonder en biedt plek aan 4 tot 5 personen, ideaal voor gezinnen of een stel met kinderen. Binnen vind je een tweepersoons hemelbed, een stapelbed en een eenpersoonsbed. Voor frisse avonden is er een pelletkachel.',
    facilities: [
      'Volledige keuken: 4-pits gas, koelkast, magnetron, koffiezetter, waterkoker',
      'Badkamer met bad, wastafel en toilet',
      'Veranda van 20 m² met buitenmeubilair',
      'Pelletkachel voor de koelere avonden',
      '6 kWh stroom per dag inbegrepen',
      'Babybedje en kinderbedje op aanvraag',
    ],
    pets: 'Honden welkom (€ 3,00 p.n.)',
  },
  {
    slug: 'huisje-weltevreden',
    name: 'Huisje Weltevreden',
    short: 'Een knus vakantiehuisje voor wie even helemaal thuis wil zijn.',
    capacity: '4 – 6 personen',
    sizeRange: 'Vrijstaand huisje',
    priceFrom: 'Op aanvraag',
    eyebrow: 'tot rust komen',
    image: '/images/huisje-weltevreden.webp',
    badges: ['Eigen tuin', 'Volledig ingericht', 'Rustig gelegen'],
    description:
      'Huisje Weltevreden is precies wat de naam zegt: een plek om even niets te hoeven. Vrijstaand, eigen tuin, ruim bemeten woonkamer en een goed uitgeruste keuken. Perfect voor gezinnen die in alle rust willen genieten van Schouwen-Duiveland.',
    facilities: [
      'Ruime woonkamer met eethoek',
      'Volledig ingerichte keuken',
      'Twee slaapkamers',
      'Badkamer met douche',
      'Eigen tuin met terras',
      'Gratis wifi',
    ],
    pets: 'Honden welkom in overleg',
  },
  {
    slug: 'duinweg-119-4',
    name: 'Duinweg 119-4',
    short: 'Vakantiewoning aan de duinrand met strand binnen handbereik.',
    capacity: '4 – 6 personen',
    sizeRange: 'Vakantiewoning',
    priceFrom: 'Op aanvraag',
    eyebrow: 'aan de duinrand',
    image: '/images/duinweg.webp',
    badges: ['Aan de duinrand', '3 km van strand', 'Tuin op zuid'],
    description:
      'Onze vakantiewoning aan de Duinweg 119-4 ligt direct aan de duinrand, dichtbij Renesse. Ideaal voor een actieve vakantie: het strand bereik je in vijf minuten, fietsen en wandelen begint letterlijk voor de deur.',
    facilities: [
      'Woonkamer met open keuken',
      'Twee tot drie slaapkamers',
      'Badkamer met douche en toilet',
      'Tuin op het zuiden',
      'Parkeerplek voor de deur',
      'Gratis wifi',
    ],
    pets: 'Honden welkom in overleg',
  },
  {
    slug: 'caravanstalling',
    name: 'Caravanstalling',
    short: 'Overdekte stalling voor caravans en boten tot 8 meter.',
    capacity: 'Caravan tot 8 m',
    sizeRange: 'Per m²',
    priceFrom: 'Vanaf € 20 p.m²',
    eyebrow: 'winter en zomer',
    image: '/images/caravanstalling.webp',
    badges: ['Overdekt', 'Disselruimte inbegrepen', 'Fietsendrager OK'],
    description:
      'In onze schuren stallen we caravans, boten en andere vrijetijdsvoertuigen tot 8 meter. Het tarief is inclusief disselruimte en fietsendrager, zodat je alles op één plek hebt staan.',
    facilities: [
      'Overdekte stalling in onze schuren',
      'Maximale lengte 8 meter',
      'Inclusief disselruimte en fietsendrager',
      'Jaarstalling € 35,00 per m²',
      'Winterstalling (1 nov – 15 mrt) € 20,00 per m²',
      'Zomerdag-tarief € 1,50 per dag',
    ],
    pets: '',
  },
];

export const reviewLogos = [
  { name: 'Zoover', score: '8,9' },
  { name: 'Google', score: '4,7' },
  { name: 'ANWB', score: '8,5' },
  { name: 'ACSI', score: 'Aanbevolen' },
];

export const testimonials = [
  {
    name: 'Familie van der Berg',
    location: 'Apeldoorn',
    rating: 5,
    text: 'Wat een heerlijke plek. Gertjan en Lisette zijn ontzettend gastvrij, het sanitair is brandschoon en de plekken zijn enorm ruim. De kinderen vermaakten zich prima en wij genoten van de rust.',
    stay: 'Mini-camping, juli 2025',
  },
  {
    name: 'Marjolein & Pieter',
    location: 'Utrecht',
    rating: 5,
    text: 'Fantastisch verblijf in de safaritent. Het gevoel van kamperen, maar dan met alle gemakken en ochtenden op de veranda met koffie en zicht over de polder.',
    stay: 'Safaritent, mei 2025',
  },
  {
    name: 'Gezin Hoekstra',
    location: 'Zwolle',
    rating: 5,
    text: 'Onze derde keer en zeker niet de laatste. Renesse op fietsafstand, lekker rustig op het terrein en de broodjesservice is een aanrader. Echte familiecamping in de mooiste betekenis.',
    stay: 'Appartement Oester, augustus 2025',
  },
];

export const arrangementen = [
  {
    slug: 'kunstschouw',
    name: 'Kunstschouw',
    period: 'Eind augustus',
    short: 'Tien dagen kunst en cultuur door heel Schouwen-Duiveland.',
    image: '/images/arr-kunstschouw.webp',
    description:
      'Tijdens de Kunstschouw openen ateliers, kerken en musea hun deuren voor kunstliefhebbers. Verblijf bij ons en fiets dagelijks naar nieuwe routes en exposities. Wij stellen graag een persoonlijke route voor je samen.',
    inclusief: [
      'Drie nachten in een appartement of safaritent',
      'Welkomstpakket met streekproducten',
      'Persoonlijke kunstroute langs Schouwen-Duiveland',
      'Korting bij Died\'s Fiets-verhuur',
    ],
  },
  {
    slug: 'stroa',
    name: 'Stroâ',
    period: '18 februari t/m 18 maart',
    short: 'De oudste paardentraditie van Zeeland, vlak voor onze deur.',
    image: '/images/arr-stroa.webp',
    description:
      'Stroâ is een eeuwenoude traditie waarbij paarden in galop over het strand racen. Een spektakel dat je gezien moet hebben. Ons arrangement combineert een verblijf met een gegidste wandeling en een uitgebreid Zeeuws ontbijt.',
    inclusief: [
      'Twee nachten in een appartement',
      'Toegang tot de Stroâ-finale in Noordwelle',
      'Zeeuws ontbijt met streekproducten',
      'Een gegidste duinwandeling',
    ],
  },
];
