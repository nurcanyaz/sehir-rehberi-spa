import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';
import { CityPhoto } from '../models/city-photo';
import { HotelDatepickerComponent } from './hotel-datepicker/hotel-datepicker.component';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers : [HotelService]
})
export class HotelComponent implements OnInit {
  hotels: Hotel[];
//city:City;
  constructor(
    private hotelService:HotelService,
    private activatedRoute: ActivatedRoute
  ) {}

ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
    const cityId = params['cityId'];
    this.hotelService.getHotelsByCityId(cityId).subscribe(
      (hotels: Hotel[]) => {
        this.hotels = hotels;
       
      },
      error => {
        console.error('Otel listesi alınamadı:', error);
      }
    );
  });
}
loadHotelPhotos(): void {
  for (const hotel of this.hotels) {
    this.hotelService.getHotelPhotos(hotel.id.toString()).subscribe((photos: CityPhoto[]) => {
      hotel.photos = photos;
    });
  }
}

}



