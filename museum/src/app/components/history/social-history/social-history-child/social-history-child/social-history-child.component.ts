import { Component, Input, inject } from '@angular/core';
import { PanelComponent } from "../../../../../reusableComonents/panel/panel.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-social-history-child',
    standalone: true,
    templateUrl: './social-history-child.component.html',
    styleUrl: './social-history-child.component.css',
    imports: [PanelComponent, CommonModule]
})
export class SocialHistoryChildComponent {
  @Input()
  socialHistory;
  @Input() historyId: number
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.historyId = +params['id'] || 0;
      });
  }

  getBackgroundPosition(): string {
    if (this.historyId === 0 || this.historyId === 3 || this.historyId === 5 || this.historyId === 7 || this.historyId === 8 || this.historyId === 18 || this.historyId === 19 || this.historyId === 28 ) {
        return 'center';
    } else if (this.historyId === 1 || this.historyId === 17 || this.historyId === 24 || this.historyId === 25) {
        return '60%';
    } 
    else if(this.historyId === 2 || this.historyId === 6 || this.historyId === 12 || this.historyId === 14 || this.historyId === 16  || this.historyId === 27 || this.historyId === 29 ) {
        return '30%';
    }
    else if(this.historyId === 21 || this.historyId === 22 || this.historyId === 23 || this.historyId === 30 ) {
        return '40%';
    }
    else if(this.historyId === 15) {
        return 'right';
    }
    else if(this.historyId === 13) {
        return '20%';
    }
    else if(this.historyId === 4 || this.historyId === 9){
        return '80%'
    }
    else if(this.historyId === 11 || this.historyId === 20 || this.historyId === 26 ){
        return '70%'
    }
    else if(this.historyId === 10){
        return '40%'
    }
    else{
        return 'left'
    }
}

}
