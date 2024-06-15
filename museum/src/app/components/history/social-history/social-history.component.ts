import { Component, inject } from '@angular/core';
import { PanelComponent } from "../../../reusableComonents/panel/panel.component";
import { HistoryService } from '../../../services/history.service';
import { SocialHistory } from '../../../models/history.model';
import { SocialHistoryChildComponent } from "./social-history-child/social-history-child/social-history-child.component";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-social-history',
    standalone: true,
    templateUrl: './social-history.component.html',
    styleUrl: './social-history.component.css',
    imports: [PanelComponent, SocialHistoryChildComponent, CommonModule, RouterModule]
})
export class SocialHistoryComponent {
    historyService = inject(HistoryService);
    dataId = 0; 
    data: SocialHistory[] = this.historyService.getData();
    router = inject(Router)
    changeDataId() {
        this.dataId++; 
        if (this.dataId >= this.data.length) {
            this.dataId = 0; 
        }
        this.router.navigate([], { queryParams: { id: this.dataId } });
    }
    redirectToHome(){
        this.router.navigateByUrl("/")
    }
}
