import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent],
})
export class LayoutModule {}
