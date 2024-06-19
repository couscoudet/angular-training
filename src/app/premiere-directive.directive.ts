import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import images from 'src/assets/Images';

@Directive({
  selector: '[appPremiereDirective]',
})
export class PremiereDirectiveDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const randomNumber = Math.round(Math.random() * images.length);
    // this.el.nativeElement.style.backgroundColor = colors[randomNumber];
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.height = '300px';
    this.el.nativeElement.style.backgroundSize = 'cover';
    this.el.nativeElement.style.backgroundImage =
      'url(' + images[randomNumber] + ')';
    console.log('url(' + images[randomNumber] + ')');
  }
}
