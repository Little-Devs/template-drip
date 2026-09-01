export interface ScoreRow {
  label: string;
  scores: string[];
  pick: number;
}

export interface CoffeeLot {
  code: string;
  name: string;
  profile: string;
  image: string;
  alt: string;
  process: string;
  elevation: string;
  roast: string;
  notes: string;
  fileNote: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  id: 'drip',
  name: 'Drip Theory',
  mark: 'DT',
  metaTitle: 'Drip Theory — Fitzroy coffee roastery and cupping room',
  metaDescription:
    'Small-lot coffee roasted twice a week on Brunswick Street, Fitzroy. Retail bags from the counter, wholesale to a handful of rooms, public cupping Saturdays at 10:00.',
  kicker: 'Roast · Fitzroy',

  logo: { mark: 'DT', name: 'Drip Theory' },

  colors: {
    charcoal: '#1c1814',
    cherrywood: '#6b2e24',
    cream: '#efe6d4',
    parchment: '#f6f0e4',
    ember: '#c45a32',
    ash: '#8a8175',
  },

  fonts: {
    display: '"Bricolage Grotesque", "Avenir Next Condensed", sans-serif',
    ui: '"Source Serif 4", "Iowan Old Style", Palatino, serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },

  nav: [
    { label: 'Roastery', href: '#roastery' },
    { label: 'Lots', href: '#lots' },
    { label: 'Cupping', href: '#cupping' },
    { label: 'Room', href: '#room' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],

  sections: {
    hero: true,
    roastery: true,
    lots: true,
    cupping: true,
    room: true,
    contact: true,
  },

  hero: {
    kicker: 'Roast · Fitzroy',
    titleLead: 'We roast to the table,',
    titleEm: 'not the trend.',
    lead: 'A two-kilo drum on Brunswick Street. We buy small lots, roast twice a week, and cup every roast before it leaves the room.',
    primary: { label: 'Book a cupping', href: '#cupping' },
    secondary: { label: 'Current lots', href: '#lots' },
    sheet: {
      header: 'Drip Theory — cupping record',
      number: 'Sheet Nº 41',
      lot: 'DT-25-114',
      origin: 'Gedeb, Ethiopia — washed',
      roastDate: '26 Aug 2026 · 2 kg drum',
      profile: 'Filter',
      rows: [
        { label: 'Fragrance', scores: ['6', '7', '8', '8.5', '9', '10'], pick: 3 },
        { label: 'Flavour', scores: ['6', '7', '8', '8.5', '9', '10'], pick: 4 },
        { label: 'Aftertaste', scores: ['6', '7', '8', '8.5', '9', '10'], pick: 2 },
      ] as ScoreRow[],
      notesLabel: 'Notes',
      notes: 'apricot · black tea · raw sugar',
      total: 'Total 84.75',
      stamp: 'Approved for the shelf',
    },
  },

  roastery: {
    id: 'roastery',
    eyebrow: 'The roastery',
    heading: 'Small lots, roasted twice a week',
    paras: [
      'Two kilograms at a time on a drum off Brunswick Street. We buy small lots from importers we visit, roast on Tuesday and Friday, and cup every batch before it is bagged.',
      'Wholesale goes to a handful of rooms around Melbourne — kitchens that pour the same coffee we drink at the bench. Everything else is sold as retail bags from the counter, dated the day it was roasted.',
    ],
    aside: 'Not a restaurant. No dinner service. Coffee, roasted and poured, from 07:30.',
    ledger: [
      { term: 'Drum', detail: '2 kg, vented' },
      { term: 'Roast days', detail: 'Tue · Fri' },
      { term: 'Cupped', detail: 'Every batch, before it ships' },
    ],
  },

  lots: {
    id: 'lots',
    eyebrow: 'Current lots',
    heading: 'On the shelf this fortnight',
    lead: 'Four lots on the bench. Bags are 250 g, dated the day they were roasted — when a lot is gone, it is gone.',
    items: [
      {
        code: 'DT-25-114',
        name: 'Ethiopia — Gedeb',
        profile: 'Filter',
        image: '/images/roast.jpg',
        alt: 'Freshly roasted beans cooling in the drum tray',
        process: 'Washed',
        elevation: '1,950–2,100 m',
        roast: 'Filter',
        notes: 'Apricot, black tea, raw sugar',
        fileNote: 'Heirloom varieties from smallholder plots around Gedeb, washed and dried on raised beds. We take it light, for pour-over.',
      },
      {
        code: 'DT-25-117',
        name: 'Colombia — Huila',
        profile: 'Omni',
        image: '/images/cans.jpg',
        alt: 'Sealed retail coffee bags packed at the roastery',
        process: 'Honey',
        elevation: '1,700 m',
        roast: 'Omni',
        notes: 'Panela, red apple, cacao nib',
        fileNote: 'Dried slowly as a honey at a small farm above Pitalito. Sweet enough for espresso, clean enough for the bench.',
      },
      {
        code: 'DT-25-121',
        name: 'Guatemala — Antigua',
        profile: 'Filter',
        image: '/images/pourover.jpg',
        alt: 'A slow pour-over brewing onto a scale at the counter',
        process: 'Washed',
        elevation: '1,600 m',
        roast: 'Filter',
        notes: 'Toffee, orange peel, almond meal',
        fileNote: 'Bourbon and Caturra grown on the valley floor under pecan trees. A steady, round cup for the cooler mornings.',
      },
      {
        code: 'DT-25-B4',
        name: 'Steady Hand — house blend',
        profile: 'Espresso',
        image: '/images/espresso.jpg',
        alt: 'A double shot of espresso pouring into a small cup',
        process: 'Natural + washed',
        elevation: '900–1,400 m',
        roast: 'Espresso',
        notes: 'Milk chocolate, hazelnut, dried fig',
        fileNote: 'Our pour for milk coffees at the counter — Brazil for body, a washed Ethiopia for the top notes. Pulled as a double, straight into the cup.',
      },
    ] as CoffeeLot[],
  },

  cupping: {
    id: 'cupping',
    eyebrow: 'Public cupping',
    heading: 'Saturdays, 10:00 — at the bench',
    paras: [
      'Every Saturday at ten we line up what came off the drum that week and cup it properly — fragrance first, then flavour, then aftertaste. No experience needed; we will lend you a spoon.',
      'Scores stay in the book. What you taste is yours to describe.',
    ],
    image: '/images/cupping.jpg',
    imageAlt: 'Cupping bowls lined up on the tasting bench with spoons',
    ledger: [
      { term: 'When', detail: 'Sat 10:00 — about an hour' },
      { term: 'Where', detail: '412 Brunswick St — the bench' },
      { term: 'Bring', detail: 'Nothing but your nose' },
    ],
    cta: { label: 'Book a seat by email', href: 'mailto:sales@little.cloud' },
  },

  room: {
    id: 'room',
    eyebrow: 'The room',
    heading: '412 Brunswick Street, Fitzroy',
    paras: [
      'A narrow room with a two-group machine, a slow filter bar, and bags on the shelf behind the counter. Come in for a coffee, leave with something roasted this week.',
      'Everything on the shelf was roasted within the fortnight — ask what went through the drum last.',
    ],
    image: '/images/counter.jpg',
    imageAlt: 'The service counter at Drip Theory with bags on the shelf behind',
    hours: [
      { days: 'Tue – Fri', time: '07:30 – 15:00', open: true },
      { days: 'Saturday', time: '08:00 – 14:00', open: true },
      { days: 'Monday', time: 'Closed', open: false },
    ],
  },

  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    heading: 'Write to us',
    paras: [
      'Wholesale enquiries, cupping bookings, or a question about what is on the shelf — send a note and we will answer between roasts.',
    ],
    email: 'sales@little.cloud',
    phone: '+61 3 9417 2208',
    phoneHref: 'tel:+61394172208',
    fields: {
      name: 'Name',
      email: 'Email',
      note: 'Note',
    },
    submit: 'Open mail to sales@little.cloud',
  },

  footer: {
    address: '412 Brunswick Street, Fitzroy VIC 3065',
    hours: 'Tue–Fri 07:30–15:00 · Sat 08:00–14:00 · Mon closed',
    credit: 'Drip Theory — a Little-Devs template',
  },
};
