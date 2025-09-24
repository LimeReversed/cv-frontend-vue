export class Tag {
  constructor(
    public name: string,
    public level: number,
    public category: string,
  ) {}
}

export enum TagLevel {
  Beginner,
  Basic,
  Mediocre,
  LessConfident,
  Confident,
  MostConfident,
}

export const categories = {
  programLanguage: 'Programspråk',
  platforms: 'Plattformar',
  web: 'Web',
  smartPhone: 'Telefon',
  database: 'Databaser',
  processes: 'Processer',
}

export default Tag
