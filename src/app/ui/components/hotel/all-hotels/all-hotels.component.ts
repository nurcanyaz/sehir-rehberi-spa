import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service'; // HotelService'nin yolunu düzgün şekilde ayarlayın
import { Hotel } from '../../models/hotel';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css'],
  providers: [HotelService]
})
export class AllHotelsComponent implements OnInit {

  constructor(
    private hotelService: HotelService,
    private activatedRoute: ActivatedRoute,
    private httpClient : HttpClient
    ) { }
  hotels: Hotel[];

  ngOnInit() {
      this.hotelService.getAllHotels().subscribe( data => {
        this.hotels = data;
      })
    }
    getAllHotels()
    {
      return this.httpClient.get<Hotel[]>("http://localhost:61061/api/hotels"); 
    }
  }

