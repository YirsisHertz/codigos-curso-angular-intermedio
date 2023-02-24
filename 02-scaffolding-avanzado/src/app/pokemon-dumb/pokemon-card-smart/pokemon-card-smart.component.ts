import { Component, Input } from '@angular/core';
import { PokemonItem } from '../../core/interfaces/pokemon-list.interface';

@Component({
  selector: 'app-pokemon-card-smart',
  templateUrl: './pokemon-card-smart.component.html',
  styleUrls: ['./pokemon-card-smart.component.scss'],
})
export class PokemonCardSmartComponent {
  @Input()
  pokemon: PokemonItem | null = null;

  @Input()
  index: number = 1;

  get image() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.index}.png`;
  }
}
