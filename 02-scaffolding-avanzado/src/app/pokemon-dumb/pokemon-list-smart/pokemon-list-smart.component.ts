import { Component } from '@angular/core';
import { PokemonList } from '../../core/interfaces/pokemon-list.interface';
import { PokeapiService } from '../../core/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list-smart',
  templateUrl: './pokemon-list-smart.component.html',
  styleUrls: ['./pokemon-list-smart.component.scss'],
})
export class PokemonListSmartComponent {
  private _pokemons: PokemonList = {
    count: 0,
    next: '',
    results: [],
  };

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
