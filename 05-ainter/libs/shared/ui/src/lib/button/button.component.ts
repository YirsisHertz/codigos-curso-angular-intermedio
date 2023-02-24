import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ainter-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Define si el color es primario (yellow)
   */
  @Input()
  isPrimary: boolean = false;

  /**
   * Define si el boton esta redondeado (1 rem)
   */
  @Input()
  isRounded: boolean = false;

  /**
   * Define un texto personalizado
   */
  @Input()
  text: string = 'Default text';

  /**
   * Custom Color
   */
  @Input()
  customColor?: string;

  /**
   * Custom Foreground Text
   */
  @Input()
  customForeground?: string;

  get roundedClass() {
    return this.isRounded ? 'rounded' : '';
  }
}
