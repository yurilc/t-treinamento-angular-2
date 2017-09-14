import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight')
  highlightColor = {
    background: 'yellow',
    text: 'black'
  };

  @HostBinding('style.backgroundColor')
  color: string;

  constructor() { }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    console.log(event);
    this.color = this.highlightColor.background;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.color = '';
  }

}
