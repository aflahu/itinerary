import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { LanggananComponent } from './pages/langganan/langganan.component';

const routes: Routes = [
  {
    path: '',
    component: ItineraryComponent
  },
  {
    path: 'itinerary',
    component: ItineraryComponent
  },
  {
    path: 'langganan',
    component: LanggananComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
