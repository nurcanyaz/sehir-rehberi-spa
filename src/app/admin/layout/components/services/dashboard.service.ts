import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/app/ui/components/services/alertify.service';
import { Router } from '@angular/router';
import { CityUpdateDto } from 'src/app/ui/components/models/city-update-dto';
import { City } from 'src/app/ui/components/models/city';
import { PhotoUpdateDto } from 'src/app/ui/components/models/photo-update-dto';
import { CityPhoto } from 'src/app/ui/components/models/city-photo';
import { HotelUpdateDto } from 'src/app/ui/components/models/hotel-update-dto';
import { Hotel } from 'src/app/ui/components/models/hotel';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  path = "https://localhost:44324";

  constructor(private httpClient: HttpClient, private alertifyService: AlertifyService, private router: Router) { }

  getTotals(): Observable<any> {
    return this.httpClient.get<any>(`${this.path}/totals`);
  }

  getCities(): Observable<any> {
    return this.httpClient.get<any>(`${this.path}/cities`);
  }
  
  getAllHotels(): Observable<any> {
    return this.httpClient.get<any>(`${this.path}/hotels`);
  }

add(city) {
  this.httpClient.post(this.path + '/addcity', city).subscribe((data: any) => {
    this.alertifyService.success("Şehir başarıyla eklendi.");
    this.router.navigateByUrl('/cities');
  });
}
addhotel(hotel) {
  this.httpClient.post(this.path + '/addHotel', hotel).subscribe((data: any) => {
    this.alertifyService.success("Hotel başarıyla eklendi.");
    this.router.navigateByUrl('/hotels');
  });
}
getCity(cityId: number): Observable<City> {
  return this.httpClient.get<City>(`${this.path}/getcity/${cityId}`);
}


getCityPhotos(cityId: number): Observable<CityPhoto[]> {
  return this.httpClient.get<CityPhoto[]>(`${this.path}cities/${cityId}/photos`);
}

deleteCityPhoto(cityId: number, photoId: number): Observable<any> {
  return this.httpClient.delete(`${this.path}cities/${cityId}/photos/${photoId}`);
}



getHotel(hotelId: number): Observable<Hotel> {
  return this.httpClient.get<Hotel>(`${this.path}/gethotel/${hotelId}`);
}
updateCity(cityId: number, city: CityUpdateDto): Observable<any> {
  return this.httpClient.put(`${this.path}/updatecity/${cityId}`, city);
}


updateHotel(hotelId: number, hotel: HotelUpdateDto): Observable<any> {
  return this.httpClient.put(`${this.path}/updatecity/${hotelId}`, hotel);
}
}


