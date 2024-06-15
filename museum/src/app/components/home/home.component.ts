import { Component, ElementRef, Renderer2, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from "../../reusableComonents/panel/panel.component";
import { CommonModule } from '@angular/common';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [PanelComponent, CommonModule]
})
export class HomeComponent {

  homeService = inject(HomeService);
  inputText = "Поиск";
  router = inject(Router)
  isVisible: boolean = true;

  inputClicked() {
    this.isVisible = false;
  }

  homeImgs = this.homeService.getData();

  eventImgs = this.homeService.getImgs();
  searchInputString: string = '';

  searchInput(e: any){
    this.inputText = '';
    this.searchInputString = e.target.value;
    if(e.target.value === ''){
      this.inputText = "Поиск";
    }
  }

  redirectEvent(){
    this.router.navigateByUrl("events")
  }
}
