import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../core/interfaces/pokemon-list.interface';
import { PokeapiService } from '../core/services/pokeapi.service';

/**
 * Smart and Dumb
 */

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  private _pokemons: PokemonList | null = null;

  constructor(private readonly pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.pokeapiService.getPokemonList().subscribe({
      next: (res) => {
        this._pokemons = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get pokemons() {
    return this._pokemons?.results;
  }
}
