import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    open = false;

    constructor(private element: ElementRef,
                private renderer: Renderer2) {}

    @HostBinding('style.cursor') cursor = 'pointer';

    @HostListener('click') toggle() {
        this.open = !this.open;
        if(this.open) {
            this.renderer.addClass(this.element.nativeElement, 'open');
        } else {
            this.renderer.removeClass(this.element.nativeElement, 'open');
        }
    }
}