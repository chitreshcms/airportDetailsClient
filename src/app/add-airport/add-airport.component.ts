import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiServiceService} from "../api-service.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {Airport} from "../airport.model";
@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.scss']
})
export class AddAirportComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private airportService: ApiServiceService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      airport_code: [],
      airport_name: ['', Validators.required],
      city_name: ['', Validators.required],
      country_code: []
    });

  }

  onSubmit() {
    this.airportService.createAirport(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['flight-details']);
      });
  }


}
