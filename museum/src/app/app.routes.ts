import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { SocialHistoryComponent } from './components/history/social-history/social-history.component';
import { MuseumMapComponent } from './components/museum-map/museum-map.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "events", component: EventsComponent},
    {path: "history", component: SocialHistoryComponent},
    {path: "map", component: MuseumMapComponent}
];
