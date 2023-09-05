import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CityService } from '../services/city.service';
import { City } from '../models/city';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [CityService]
})
export class NavComponent implements OnInit {

  constructor( private authService:AuthService,private cityService: CityService, private hotelService:HotelService) { }
  
  
  loginUser:any={}

  searchKeyword = '';
  hotels: Hotel[] =[];
  cities: City[] = [];
  ngOnInit() {
  }

  login(){
    this.authService.login(this.loginUser);
  }

  logOut(){
    this.authService.logOut();
  }

  get isAuthenticated(){
    return this.authService.loggedIn();
  }
  
}
