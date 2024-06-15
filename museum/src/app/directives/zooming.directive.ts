import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[doubleClick]'
})
export class DoubleClickDirective {
    router = inject(Router)
//   @HostListener('dblclick', ['$event'])
//   onDoubleClick(event: MouseEvent) {
//     // Обработка двойного клика
//   }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  private scale = 1;


  @HostListener('document:click', ['$event']) 
  onDoubleClick(event: MouseEvent) {
    this.router.navigateByUrl('')
    // this.setScale(2)
    // this.scale = this.scale === 1 ? 1.5 : 1; 
    // this.setScale(this.scale);
  }

  private setScale(scale: number): void {
    
    // this.router.navigateByUrl('')
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
  }
}