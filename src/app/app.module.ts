import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { ApiServiceService } from './api-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditAirportComponent } from './edit-airport/edit-airport.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FlightDetailsComponent,
    AddAirportComponent,
    EditAirportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
