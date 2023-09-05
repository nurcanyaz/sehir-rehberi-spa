import { Component, OnInit } from '@angular/core';
import { City } from '../models/city';
import { CityService } from '../services/city.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers:[CityService]
})
export class CityComponent implements OnInit {
city: any;

  constructor(private cityService:CityService, private httpClient:HttpClient) { }
  cities:City[]
  ngOnInit() {
    this.cityService.getCities().subscribe(data =>{
      this.cities = data;
    })
  }
  getCities()
  {
  return this.httpClient.get<City[]>("http://localhost:61061/api/cities");
 
}
}


