import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {Router} from "@angular/router";
import {Airport} from "../airport.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-airport',
  templateUrl: './edit-airport.component.html',
  styleUrls: ['./edit-airport.component.scss']
})
export class EditAirportComponent implements OnInit {

  airport: Airport;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private airportService: ApiServiceService) { }

  ngOnInit() {
    let airportId = +localStorage.getItem("editAirportId");
    if(!airportId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      airport_code: +airportId,
      airport_name: ['', Validators.required],
      city_name: ['', Validators.required],
      country_code: []
    });
    this.airportService.getAirportById(+airportId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.airportService.updateAirport(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-user']);
        },
        error => {
          alert(error);
        });
  }

}

