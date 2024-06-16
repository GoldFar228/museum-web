import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MuseumMapService {

    private _museumMaps: string[] =
        [
            "../../../assets/floor0.svg",
            "../../../assets/floor1.svg",
            "../../../assets/floor2.svg",

        ];
    public getData(): string[] {
        return this._museumMaps;
    }
}