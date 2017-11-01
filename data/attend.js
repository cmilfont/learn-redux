const beers = [
  {
    value: 1,
    label: 'Abyssal',
    id: 1,
    name: 'Abyssal',
    description: 'Russian Imperial Stout',
    photoUrl: `images/beers/abyssal-1.jpg`,
  },
  {
    value: 2,
    label: 'Hop Madness',
    id: 2,
    name: 'Hop Madness',
    description: 'IPA',
    photoUrl: `images/beers/hop-madness.jpg`,
  },
  {
    value: 3,
    label: 'Wit 5 Bier',
    id: 3,
    name: 'Wit 5 Bier',
    description: 'Estilo Belga - Wit Bier',
    photoUrl: `images/beers/whit.jpg`,
  },
  {
    value: 4,
    label: 'Hopsession',
    id: 4,
    name: 'Hopsession',
    description: 'Session IPA',
    photoUrl:  `images/beers/R¢tulo-Hop-Session.jpg`,
  },
  {
    value: 5,
    label: 'Davi e Golias',
    id: 5,
    name: 'Davi e Golias',
    description: 'American Pale Ale',
    photoUrl: `images/beers/davi-e-golias-2.jpg`,
  }
];

localforage.setItem('beers', beers);

localforage.getItem('beers').then(beers => console.warn(beers));

const attend = {
  brewery: 'Cervejaria 5Elementos',
  date: '31 de outubro de 2017',
  address: 'Av. Cel. José Philomeno Gomes, 1152 - Eng. Luciano Cavalcante, Fortaleza - CE, 60811-170',
  photoUrl: 'IMG_20170127_203432980.jpg',
  beers: [
    {
      id: window.uuid(),
      name: 'Abyssal',
      description: 'Russian Imperial Stout',
      photoUrl: `images/beers/abyssal-1.jpg`,
      qty: '1 Pint',
      order: 1,
    },
    {
      id: window.uuid(),
      name: 'Hop Madness',
      description: 'IPA',
      photoUrl: `images/beers/hop-madness.jpg`,
      qty: 'Growler 2lt',
      order: 4,
    },
    {
      id: window.uuid(),
      name: 'Wit 5 Bier',
      description: 'Estilo Belga - Wit Bier',
      photoUrl: `images/beers/whit.jpg`,
      qty: '1 Pint',
      order: 3,
    },
    {
      id: window.uuid(),
      name: 'Hopsession',
      description: 'Session IPA',
      photoUrl:  `images/beers/R¢tulo-Hop-Session.jpg`,
      qty: '1 Pint',
      order: 2,
    },
    {
      id: window.uuid(),
      name: 'Davi e Golias',
      description: 'American Pale Ale',
      photoUrl: `images/beers/davi-e-golias-2.jpg`,
      qty: '1 Pint',
      order: 5,
    }
  ],
};

localforage.setItem('attend', attend);
