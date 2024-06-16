import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent implements OnInit {
  activeItem: string = '';
  constructor(private router: Router) {
    // Подписываемся на события навигации
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Устанавливаем активный элемент на основе текущего маршрута
        this.setActiveItem(this.router.url);
      }
    });
  }

  ngOnInit() {
    // Устанавливаем активный элемент при инициализации компонента
    this.setActiveItem(this.router.url);
  }

  redirectTo(url: string, item: string) {
    this.activeItem = item;
    this.router.navigate([url]).then(() => {
      // Убедиться, что активный элемент установлен после завершения навигации
      this.setActiveItem(this.router.url);
    });
  }
  setActiveItem(url: string) {
    if (url.includes('/map')) {
      this.activeItem = 'map';
    } else if (url.includes('/history')) {
      this.activeItem = 'rules';
    } else if (url.includes('/events')) {
      this.activeItem = 'statistic';
    } else {
      this.activeItem = 'home';
    }
  }
}
