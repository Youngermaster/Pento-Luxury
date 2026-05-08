export interface Property {
  id: string;
  name: string;
  zone: string;
  city: string;
  status: 'DISPONIBLE' | 'PREVENTA' | 'EXCLUSIVO';
  price: string;
  area: string;
  bedrooms: number;
  parking: number;
  image: string;
  alt: string;
}

// Hot-linked Unsplash placeholders. Replace with shoot photography pre-launch.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const properties: Property[] = [
  {
    id: 'nogal',
    name: 'Residencia Nogal',
    zone: 'El Poblado alto',
    city: 'Medellín',
    status: 'EXCLUSIVO',
    price: '$2.400.000.000 COP',
    area: '420 m²',
    bedrooms: 4,
    parking: 3,
    image: u('1613553497126-a44624272024', 1800),
    alt: 'Residencia Nogal — fachada de villa moderna en El Poblado',
  },
  {
    id: 'milla-de-oro',
    name: 'Penthouse Milla de Oro',
    zone: 'Milla de Oro',
    city: 'Medellín',
    status: 'PREVENTA',
    price: '$3.800.000.000 COP',
    area: '560 m²',
    bedrooms: 5,
    parking: 4,
    image: u('1600596542815-ffad4c1539a9'),
    alt: 'Penthouse Milla de Oro — vista nocturna de la ciudad',
  },
  {
    id: 'llano-grande',
    name: 'Casa Llano Grande',
    zone: 'Llano Grande',
    city: 'Rionegro',
    status: 'DISPONIBLE',
    price: '$1.900.000.000 COP',
    area: '680 m²',
    bedrooms: 5,
    parking: 4,
    image: u('1600585154340-be6161a56a0c'),
    alt: 'Casa Llano Grande — arquitectura contemporánea en el Oriente',
  },
  {
    id: 'santa-marta',
    name: 'Villa Santa Marta',
    zone: 'El Rodadero',
    city: 'Santa Marta',
    status: 'EXCLUSIVO',
    price: '$2.100.000.000 COP',
    area: '380 m²',
    bedrooms: 4,
    parking: 2,
    image: u('1571939228382-b2f2b585ce15'),
    alt: 'Villa Santa Marta — frente al mar Caribe',
  },
];
