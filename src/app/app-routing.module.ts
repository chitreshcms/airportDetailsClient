import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightDetailsComponent} from './flight-details/flight-details.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { EditAirportComponent } from './edit-airport/edit-airport.component';

const routes: Routes = [
  {path:'flight-details', component:FlightDetailsComponent},
  {path:'add-airport', component:AddAirportComponent},
  {path:'edit-airport',component:EditAirportComponent},
  {path:'',component:FlightDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
