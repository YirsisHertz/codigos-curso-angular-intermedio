import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PokemonListModule } from '../pokemon-list/pokemon-list.module';
import { PokemonDumbModule } from '../pokemon-dumb/pokemon-dumb.module';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, PagesRoutingModule, PokemonDumbModule],
})
export class PagesModule {}
