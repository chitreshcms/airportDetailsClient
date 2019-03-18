import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiServiceService} from "../api-service.service";
import {Airport} from "../airport.model";

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

  airports:Airport[];

  constructor(private router: Router, private airportService: ApiServiceService) { }

  ngOnInit() {
    this.airportService.getAirports()
    .subscribe( data => {
      this.airports = data;
    });
  }

  deleteUser(airport: Airport): void {
    this.airportService.deleteAirport(airport.airport_code)
      .subscribe( data => {
        this.airports = this.airports.filter(a => a !== airport);
      })
  };

  editAirport(airport: Airport): void {
    localStorage.removeItem("editAirportId");
    localStorage.setItem("editAirportId", airport.airport_code.toString());
    this.router.navigate(['edit-airport']);
  };

  addUser(): void {
    this.router.navigate(['add-airport']);
  };
}