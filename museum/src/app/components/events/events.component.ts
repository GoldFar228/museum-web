import { Component, ElementRef, Renderer2 } from '@angular/core';
import { PanelComponent } from "../../reusableComonents/panel/panel.component";

@Component({
    selector: 'app-events',
    standalone: true,
    templateUrl: './events.component.html',
    styleUrl: './events.component.css',
    imports: [PanelComponent]
})
export class EventsComponent {
    constructor(private renderer: Renderer2, private el: ElementRef) { }

    changeImage(imageNumber: number) {
        const imageElements = this.el.nativeElement.querySelectorAll('.events-header-image img');
        const radioButtons = this.el.nativeElement.querySelectorAll('.rb input[type="radio"]');

        imageElements.forEach((img: any, index: number) => {
            if (index + 1 === imageNumber) {
                this.renderer.setStyle(img, 'display', 'block');
                radioButtons[index].checked = true;
            } else {
                this.renderer.setStyle(img, 'display', 'none');
                radioButtons[index].checked = false;
            }
        });
    }
}
