import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-monorepo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  isPrimary: boolean = false;

  @Input()
  isRounded: boolean = false;

  @Input()
  text: string = 'Default Text';

  @Input()
  bgColor: string = 'tomato';

  @Input()
  textColor: string = 'snow';

  get roundedClass() {
    return this.isRounded ? 'rounded' : '';
  }
}
