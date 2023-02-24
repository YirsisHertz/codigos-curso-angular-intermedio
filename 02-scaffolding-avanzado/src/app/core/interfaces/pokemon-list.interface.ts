export interface PokemonList {
  count: number;
  next: string;
  previous?: string;
  results: PokemonItem[];
}

export interface PokemonItem {
  name: string;
  url: string;
}
