import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { KnobModule } from 'primeng/knob';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    CardModule,
    AccordionModule,
    KnobModule,
  ],
  exports: [MenubarModule, CardModule, AccordionModule, KnobModule],
})
export class PrimeNgModule {}
