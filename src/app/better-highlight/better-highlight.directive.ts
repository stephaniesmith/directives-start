import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'blue';
    this.color = 'white';

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }

}
