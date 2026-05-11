export interface Zone {
  id: string;
  name: string;
  tagline: string;
  count: number;
  image: string;
  alt: string;
}

// AV Group's actual operating sub-zones in and around Medellín.
const av = (file: string) => `https://avgrouprojects.com/cdn/shop/files/${file}`;

export const zones: Zone[] = [
  {
    id: 'el-poblado',
    name: 'El Poblado',
    tagline: 'El epicentro de la curaduría AV',
    count: 8,
    image: av('Foto.23.jpg'),
    alt: 'El Poblado — corazón residencial de Medellín',
  },
  {
    id: 'astorga',
    name: 'Astorga · Milla de Oro',
    tagline: 'Capital corporativa de Medellín',
    count: 1,
    image: av('Astorga_IMG02_1.jpg'),
    alt: 'Astorga, Milla de Oro — distrito financiero',
  },
  {
    id: 'alto-de-las-palmas',
    name: 'Alto de las Palmas',
    tagline: 'Aire frío y vista al valle',
    count: 2,
    image: av('PHOTO-2024-01-24-09-21-10.jpg'),
    alt: 'Alto de las Palmas — montaña sobre el Valle de Aburrá',
  },
  {
    id: 'el-campestre',
    name: 'El Campestre',
    tagline: 'Discreción y arquitectura de autor',
    count: 1,
    image: av('SM_3.jpg'),
    alt: 'El Campestre — sector residencial consolidado',
  },
  {
    id: 'nuevo-provenza',
    name: 'Nuevo Provenza',
    tagline: 'Donde la noche y la curaduría se cruzan',
    count: 1,
    image: av('IMG_1526.jpg'),
    alt: 'Nuevo Provenza — escena vibrante de El Poblado',
  },
];
