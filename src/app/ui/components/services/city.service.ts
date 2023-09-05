import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';
import { CityPhoto } from '../models/city-photo';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';



@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient, private alertifyService:AlertifyService,
    private router:Router) { }
  path = "https://localhost:44324/api/";

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "cities");
  }

 
  getCityById(cityId: string): Observable<City> {
    return this.httpClient.get<City>(this.path + "cities/detail?id=" + cityId);
  }

  getPhotosByCity(cityId: string):Observable<CityPhoto[]>{
    return this.httpClient.get<CityPhoto[]>(this.path + "cities/photos?cityId="+cityId);
  }
  add(city){
    this.httpClient.post(this.path + 'addcity', city).subscribe(data=>{
      this.alertifyService.success("Şehir başarıyla eklendi.")
      this.router.navigateByUrl('/cityDetail/'+ data["id"])
    
  });

}
}