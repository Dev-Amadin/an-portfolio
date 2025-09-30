import { Routes } from '@angular/router';
import { LandingpageComponent } from './landing_page/landingpage/landingpage.component';

export const routes: Routes = [
    {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
    {path:'landingPage', component: LandingpageComponent}
];
