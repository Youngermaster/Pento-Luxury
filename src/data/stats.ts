export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 200, prefix: '+', suffix: '', label: 'Propiedades vendidas' },
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 500, prefix: '$', suffix: 'B+', label: 'En transacciones gestionadas' },
  { value: 15, suffix: '', label: 'Ciudades en Colombia' },
];
