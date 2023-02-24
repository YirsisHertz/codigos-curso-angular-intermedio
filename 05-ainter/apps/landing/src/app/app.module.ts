import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedUiModule } from '@ainter/shared/ui';

import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { DescriptionComponent } from './components/description/description.component';
import { TopicsComponent } from './components/topics/topics.component';
import { LevelComponent } from './components/level/level.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    DescriptionComponent,
    TopicsComponent,
    LevelComponent,
  ],
  imports: [BrowserModule, LayoutModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
