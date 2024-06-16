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
  mapService = inject(MuseumMapService);
  router = inject(Router);
  public museumMaps: string[];
  public currentMap: string;
  public activeButtonIndex = 0;
  private scale = 1;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.museumMaps = this.mapService.getData();
    this.currentMap = this.museumMaps[0]; // Изначально отображаем первую карту
  }

  showMap(index: number): void {
    if (index >= 0 && index < this.museumMaps.length) {
      this.currentMap = this.museumMaps[index];
      this.activeButtonIndex = index; // Обновляем активную кнопку
    }
  }

  @HostListener('dblclick', ['$event'])
  onDoubleClick(event: MouseEvent): void {
    this.scale = this.scale === 1 ? 1.5 : 1;
    this.setScale(this.scale);
  }

  private setScale(scale: number): void {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.map img'), 'transform', `scale(${scale})`);
  }
}
