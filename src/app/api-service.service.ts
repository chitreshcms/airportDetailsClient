import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Airport} from './airport.model';
import { filter, timeInterval } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }
 airports:Airport[] ;
 idDefault:number=0;
  breakLoop=false;
  baseUrl: string ="http://localhost:3000/api/airports/";
  
    getAirports() {
      return this.http.get<Airport[]>(this.baseUrl);
    }
  
    getAirportById(code: number) {
      this.getAirports()
      .subscribe( data => {
        this.airports = data;
      });
      this.airports.forEach(air => {
        if(!this.breakLoop){
        if(air.country_code===code)
        {
            this.idDefault=air.id;
              this.breakLoop=true;
        }
        else{
          console.log("Not found");
        }
      }

      });
      return this.http.get<Airport>(this.baseUrl + '/' + this.idDefault);
    }
  
    createAirport(airport: Airport) {
      return this.http.post(this.baseUrl+'create', airport);
    }
  
    updateAirport(airport: Airport) {
      this.getAirports()
      .subscribe( data => {
        this.airports = data;
      },()=>
      this.airports.forEach(air => {
        if(air===airport)
          this.idDefault=air.id;
      })
    );
      return this.http.put(this.baseUrl + this.idDefault, airport);
    }
  
    deleteAirport(id: number) {
      return this.http.delete(this.baseUrl + '/' + id);
    }

   
}
