import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SignupComponent } from './signup/signup.component';
import { ItineraryAiComponent } from './pages/itinerary-ai/itinerary-ai.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent ,data: { animation: 'HomePage' }},
  { path: 'destinations', component: DestinationsComponent, data: { animation: 'DestinationsPage' }},
  { path: 'packages', component: PackagesComponent, data: { animation: 'PackagesPage' }},
  { path: 'explore/:destinationId', component: ExploreComponent, data: { animation: 'ExplorePage' }},  
  { path: 'itinerary-ai', component: ItineraryAiComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
];
