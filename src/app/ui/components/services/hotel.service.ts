import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import { CityPhoto } from '../models/city-photo';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  path = "https://localhost:44324/api/";

  constructor(private httpClient: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.path + 'hotel'); 
  }
  

  getHotelsByCityId(cityId: string): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.path + 'cities/' + cityId + '/hotels');
  }

  getHotelById(hotelId: string): Observable<Hotel> {
    return this.httpClient.get<Hotel>(this.path + 'hotels/' + hotelId);
  }
  getHotelPhotos(hotelId: string): Observable<CityPhoto[]> {
    return this.httpClient.get<CityPhoto[]>(`${this.path}/${hotelId}/photos`);
  }
 
}

