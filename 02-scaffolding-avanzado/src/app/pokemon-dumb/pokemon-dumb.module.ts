import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDumbComponent } from './pokemon-dumb.component';
import { PokemonListSmartComponent } from './pokemon-list-smart/pokemon-list-smart.component';
import { PokemonCardSmartComponent } from './pokemon-card-smart/pokemon-card-smart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PokemonDumbComponent,
    PokemonListSmartComponent,
    PokemonCardSmartComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [PokemonDumbComponent],
})
export class PokemonDumbModule {}
