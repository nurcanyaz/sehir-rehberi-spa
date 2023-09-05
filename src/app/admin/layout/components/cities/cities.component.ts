import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { City } from 'src/app/ui/components/models/city';
import { HttpClient } from '@angular/common/http';
import { CityUpdateDto } from 'src/app/ui/components/models/city-update-dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit{
  cities: City[]; 

  constructor(private dashboardService:DashboardService,private httpClient:HttpClient, private router:Router) {}
  
  ngOnInit(): void {
    this.getCities();
  } 

  getCities() {
    this.dashboardService.getCities().subscribe(
      (data: City[]) => {
        this.cities = data; 
      },
      (error) => {
        console.error(error);
      }
    );
  }


  editCity(cityId: number) {
    this.router.navigate(['/edit', cityId]);
  }
  


updateCity(cityId: number, city: CityUpdateDto) {
  this.dashboardService.updateCity(cityId, city).subscribe(
    () => {
      console.log('Şehir başarıyla güncellendi.');
  
    },
    error => {
      console.error('Şehir güncellenirken bir hata oluştu:', error);
    }
  );
}
  
  
  confirmDeleteCity(cityId: number) {
    if (confirm("Bu şehri silmek istediğinizden emin misiniz?")) {
      this.deleteCity(cityId);
    }
  }

  deleteCity(cityId: number) {
    this.httpClient.delete(`${this.dashboardService.path}/deletecity/${cityId}`).subscribe(
      () => {
        console.log('Şehir başarıyla silindi.');
        this.getCities(); 
      },
      error => {
        console.error('Şehir silinirken bir hata oluştu:', error);
      }
    );
  }
}

 