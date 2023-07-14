import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PrimaryDirective } from './button/directives/primary.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, PrimaryDirective],
  exports: [ButtonComponent],
})
export class SharedUiModule {}
