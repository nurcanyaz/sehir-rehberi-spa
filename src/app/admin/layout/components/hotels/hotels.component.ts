import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/ui/components/models/hotel';
import { DashboardService } from '../services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HotelUpdateDto } from 'src/app/ui/components/models/hotel-update-dto';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit{
  hotels: Hotel[];

  constructor(private dashboardService:DashboardService,private httpClient:HttpClient, private router:Router) {}
  
  ngOnInit(): void {
    this.getHotel();
  } 

getHotel() {
    this.dashboardService.getAllHotels().subscribe(
      (data: Hotel[]) => {
        this.hotels = data; 
      },
      (error) => {
        console.error(error);
      }
    );
  }


  editHotel(hotelId: number) {
    this.router.navigate(['/edit', hotelId]);
  }

  
updateHotel(hotelId: number, city: HotelUpdateDto) {
  this.dashboardService.updateHotel(hotelId, city).subscribe(
    () => {
      console.log('Şehir başarıyla güncellendi.');
     
    },
    error => {
      console.error('Şehir güncellenirken bir hata oluştu:', error);
    }
  );

  }

  confirmDeleteHotel(hotelId: number) {
    if (confirm("Bu şehri silmek istediğinizden emin misiniz?")) {
      this.deleteHotel(hotelId);
    }
  }

  deleteHotel(hotelId: number) {
    this.httpClient.delete(`${this.dashboardService.path}/deletehotel/${hotelId}`).subscribe(
      () => {
        console.log('Otel başarıyla silindi.');
        this.getHotel(); 
      },
      error => {
        console.error('Otel silinirken bir hata oluştu:', error);
      }
    );
  }
}

 

