export interface Property {
  id: string;
  slug: string;
  name: string;
  zone: string;
  city: string;
  status: 'DISPONIBLE' | 'PREVENTA' | 'EXCLUSIVO';
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  yearBuilt: number;
  description: string[];
  features: string[];
  image: string;
  gallery: { src: string; alt: string }[];
  alt: string;
  coordinates: string;
}

// Hot-linked Unsplash placeholders. Replace with shoot photography pre-launch.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const properties: Property[] = [
  {
    id: 'nogal',
    slug: 'residencia-nogal',
    name: 'Residencia Nogal',
    zone: 'El Poblado alto',
    city: 'Medellín',
    status: 'EXCLUSIVO',
    price: '$2.400.000.000 COP',
    area: '420 m²',
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    yearBuilt: 2023,
    description: [
      'Residencia Nogal se posa sobre la ladera oriental de El Poblado, donde la ciudad cede espacio al silencio y los árboles dictan el horizonte. Cuatro habitaciones, cinco baños, una piscina infinita que recoge el atardecer paisa cada tarde sin falta.',
      'Diseñada en colaboración con un estudio antioqueño de arquitectura, cada material — guayacán colombiano, mármol Macael, latón macizo — fue seleccionado por el equipo de curaduría Pento. La propiedad mantiene su licencia de construcción vigente y certificado energético clase A.',
    ],
    features: [
      'Piscina infinita con vista a la cordillera',
      'Cocina abierta con isla de mármol Macael',
      'Suite principal con vestidor independiente',
      'Estudio insonorizado con doble vidrio',
      'Garaje subterráneo para tres vehículos',
      'Sistema domótico Lutron',
      'Bodega climatizada para 200 botellas',
      'Generador eléctrico de respaldo total',
    ],
    image: u('1613553497126-a44624272024', 2200),
    gallery: [
      { src: u('1613490493576-7fde63acd811'), alt: 'Sala principal con vista panorámica' },
      { src: u('1600585154340-be6161a56a0c'), alt: 'Piscina infinita al atardecer' },
      { src: u('1600573472550-8090b5e0745e'), alt: 'Suite principal' },
      { src: u('1600210492486-724fe5c67fb0'), alt: 'Cocina con isla de mármol' },
    ],
    alt: 'Residencia Nogal — fachada de villa moderna en El Poblado',
    coordinates: '6.2086° N · 75.5695° W',
  },
  {
    id: 'milla-de-oro',
    slug: 'penthouse-milla-de-oro',
    name: 'Penthouse Milla de Oro',
    zone: 'Milla de Oro',
    city: 'Medellín',
    status: 'PREVENTA',
    price: '$3.800.000.000 COP',
    area: '560 m²',
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    yearBuilt: 2025,
    description: [
      'En la última planta de uno de los proyectos más vigilados de la Milla de Oro, este penthouse de 560 m² ocupa toda la corona del edificio. Vista 360° sobre el Valle de Aburrá: amanecer hacia Las Palmas, atardecer sobre el San Javier.',
      'Entrega en preventa con personalización completa de acabados antes del cierre 2025. Pento gestiona toda la curaduría de materiales con el cliente — desde el grano del mármol hasta el cuero de las puertas.',
    ],
    features: [
      'Terraza envolvente de 180 m²',
      'Jacuzzi privado en azotea',
      'Cinco habitaciones con baño privado',
      'Ascensor exclusivo con biometría',
      'Cuatro parqueaderos cubiertos',
      'Cuarto de servicio independiente',
      'Sistema de filtración de aire HEPA',
      'Salón de eventos con barra independiente',
    ],
    image: u('1600596542815-ffad4c1539a9', 2200),
    gallery: [
      { src: u('1600210492486-724fe5c67fb0'), alt: 'Sala doble altura' },
      { src: u('1600573472550-8090b5e0745e'), alt: 'Habitación principal' },
      { src: u('1545324418-cc1a3fa10c00'), alt: 'Terraza con jacuzzi' },
      { src: u('1564013799919-ab600027ffc6'), alt: 'Vista nocturna del Valle de Aburrá' },
    ],
    alt: 'Penthouse Milla de Oro — vista nocturna de la ciudad',
    coordinates: '6.2010° N · 75.5680° W',
  },
  {
    id: 'llano-grande',
    slug: 'casa-llano-grande',
    name: 'Casa Llano Grande',
    zone: 'Llano Grande',
    city: 'Rionegro',
    status: 'DISPONIBLE',
    price: '$1.900.000.000 COP',
    area: '680 m²',
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    yearBuilt: 2021,
    description: [
      'Casa Llano Grande se extiende sobre 4.200 m² de lote en el Oriente antioqueño, a 35 minutos del aeropuerto José María Córdova. Cinco habitaciones, lago privado, caballerizas con cinco pesebreras y arquitectura de hacienda contemporánea reinterpretada por taller paisa.',
      'Construcción 2021 con mantenimiento documentado. Certificación de aguas, sistema séptico independiente, acueducto privado y conexión de fibra óptica directa.',
    ],
    features: [
      'Lote de 4.200 m² con lago privado',
      'Caballeriza con cinco pesebreras',
      'Salón principal con chimenea de doble cara',
      'Cocina industrial + cocina familiar',
      'Habitación de huéspedes independiente',
      'Sistema fotovoltaico de 12 kW',
      'Pozo profundo certificado',
      'Conexión fibra óptica simétrica 500 Mbps',
    ],
    image: u('1600585154340-be6161a56a0c', 2200),
    gallery: [
      { src: u('1505842465776-3d90f616310d'), alt: 'Vista exterior con lago' },
      { src: u('1518780664697-55e3ad937233'), alt: 'Sala principal con chimenea' },
      { src: u('1564013799919-ab600027ffc6'), alt: 'Caballeriza' },
      { src: u('1600573472550-8090b5e0745e'), alt: 'Suite principal' },
    ],
    alt: 'Casa Llano Grande — arquitectura contemporánea en el Oriente',
    coordinates: '6.1530° N · 75.4290° W',
  },
  {
    id: 'santa-marta',
    slug: 'villa-santa-marta',
    name: 'Villa Santa Marta',
    zone: 'El Rodadero',
    city: 'Santa Marta',
    status: 'EXCLUSIVO',
    price: '$2.100.000.000 COP',
    area: '380 m²',
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    yearBuilt: 2022,
    description: [
      'Sobre la línea costera del Rodadero, Villa Santa Marta entrega 380 m² de arquitectura tropical contemporánea con acceso directo a una franja privada de playa. Cuatro habitaciones, todas con vista al Caribe, y una piscina de borde infinito que reposa sobre la roca natural del acantilado.',
      'Estructura sismo-resistente certificada con materiales tratados para ambiente salino. Mantenimiento administrado por Pento Concierge desde la entrega — la propiedad nunca queda desatendida más de 72 horas.',
    ],
    features: [
      'Acceso privado a playa',
      'Piscina infinita sobre acantilado',
      'Cuatro habitaciones con vista al mar',
      'Pérgola exterior con cocina al aire libre',
      'Cuarto de equipos para deportes náuticos',
      'Generador y desalinizadora de respaldo',
      'Sistema anti-corrosión en todas las terminaciones metálicas',
      'Acceso vehicular controlado en condominio cerrado',
    ],
    image: u('1571939228382-b2f2b585ce15', 2200),
    gallery: [
      { src: u('1507525428034-b723cf961d3e'), alt: 'Vista al Caribe desde la terraza' },
      { src: u('1545324418-cc1a3fa10c00'), alt: 'Piscina infinita sobre el acantilado' },
      { src: u('1600596542815-ffad4c1539a9'), alt: 'Sala con doble altura' },
      { src: u('1600585154340-be6161a56a0c'), alt: 'Suite principal con vista al mar' },
    ],
    alt: 'Villa Santa Marta — frente al mar Caribe',
    coordinates: '11.2049° N · 74.2280° W',
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getRelatedProperties(slug: string, count = 3): Property[] {
  return properties.filter((p) => p.slug !== slug).slice(0, count);
}
