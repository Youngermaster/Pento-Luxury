export interface Zone {
  id: string;
  name: string;
  tagline: string;
  count: number;
  image: string;
  alt: string;
}

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const zones: Zone[] = [
  {
    id: 'poblado',
    name: 'El Poblado',
    tagline: 'El epicentro del lujo en Medellín',
    count: 12,
    image: u('1582407947304-fd86f028f716'),
    alt: 'El Poblado — vista nocturna de Medellín',
  },
  {
    id: 'llano-grande',
    name: 'Llano Grande',
    tagline: 'Haciendas y fincas de autor en el Oriente',
    count: 6,
    image: u('1505842465776-3d90f616310d'),
    alt: 'Llano Grande — campo y arquitectura',
  },
  {
    id: 'el-retiro',
    name: 'El Retiro',
    tagline: 'Exclusividad a 30 minutos de la ciudad',
    count: 4,
    image: u('1518780664697-55e3ad937233'),
    alt: 'El Retiro — naturaleza y refugio',
  },
  {
    id: 'envigado',
    name: 'Envigado',
    tagline: 'Tranquilidad y sofisticación urbana',
    count: 3,
    image: u('1600585154340-be6161a56a0c'),
    alt: 'Envigado — fachada residencial',
  },
  {
    id: 'santa-marta',
    name: 'Santa Marta',
    tagline: 'Frente al mar Caribe',
    count: 5,
    image: u('1507525428034-b723cf961d3e'),
    alt: 'Santa Marta — costa Caribe',
  },
];
