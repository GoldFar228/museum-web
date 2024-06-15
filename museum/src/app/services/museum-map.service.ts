import { Injectable } from '@angular/core';
import { HomeImg } from '../models/home-events.model';
import { EventMuseum } from '../models/event.model';

@Injectable({
    providedIn: 'root'
})
export class MuseumMapService {

    private _museumMaps: string[] =
        [
            "../../../assets/floor0.png",
            "../../../assets/floor1.jpg",
            "../../../assets/floor2.jpg",

        ];
    public getData(): string[] {
        return this._museumMaps;
    }
}