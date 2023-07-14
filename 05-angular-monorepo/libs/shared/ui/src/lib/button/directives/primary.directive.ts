import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[primary]',
})
export class PrimaryDirective implements OnInit {
  constructor(private readonly el: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.setColor();
  }

  setColor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.color = '#111';
  }
}
