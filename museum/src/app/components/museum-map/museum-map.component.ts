import { Component, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { PanelComponent } from "../../reusableComonents/panel/panel.component";
import { MuseumMapService } from '../../services/museum-map.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-museum-map',
    standalone: true,
    templateUrl: './museum-map.component.html',
    styleUrl: './museum-map.component.css',
    imports: [PanelComponent, CommonModule]
})
export class MuseumMapComponent {
  mapService = inject(MuseumMapService)
  public museumMap: string[] = this.mapService.getData();
  private scale = 1;

  router = inject(Router)

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event']) 
  onDoubleClick(event: MouseEvent) {
    this.router.navigateByUrl('')
    this.scale = this.scale === 1 ? 1.5 : 1; 
    this.setScale(this.scale);
  }

  private setScale(scale: number): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
  }
}
