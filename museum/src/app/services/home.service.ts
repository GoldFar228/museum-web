import { Injectable } from '@angular/core';
import { HomeImg } from '../models/home-events.model';
import { EventMuseum } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private _homeObjects: HomeImg[] =
        [{
            img: "../../../assets/exhibitions.jpg",
            name: "Выставки"
        },
        {
            img: "../../../assets/lections.jpg",
            name: "Лекции"
        },
        {
            img: "../../../assets/excursions.jpg",
            name: "Экскурсии"
        }];
    private _eventObjects: EventMuseum[] = [{
        img: "../../../assets/event1.png",
        name: "Люблю и ненавижу",
        genre: "Концерт",
        cost: "",
        place: "",
        date: ""
    }]
    public getData(): HomeImg[] {
        return this._homeObjects;
    }
    public addItem(newTrainingDescription: HomeImg): void {
        this._homeObjects.push(newTrainingDescription);
    }
    public getImgs(): EventMuseum[] {
        return this._eventObjects;
    }
}