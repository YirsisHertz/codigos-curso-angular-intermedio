import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonList } from '../interfaces/pokemon-list.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private readonly httpClient: HttpClient) {}

  getPokemonList() {
    return this.httpClient.get<PokemonList>(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  }
}
