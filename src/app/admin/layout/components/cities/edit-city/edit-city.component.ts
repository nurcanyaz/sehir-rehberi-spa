import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { City } from 'src/app/ui/components/models/city';
import { CityUpdateDto } from 'src/app/ui/components/models/city-update-dto';
import { CityPhoto } from 'src/app/ui/components/models/city-photo';
import { PhotoComponent } from 'src/app/ui/components/photo/photo.component';
@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
  city: City;
  editingCity: CityUpdateDto = new CityUpdateDto();
  selectedFile: File;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    const cityId = +this.route.snapshot.paramMap.get('id');
    this.loadCity(cityId);
  }
  
  loadCity(cityId: number) {
    this.dashboardService.getCity(cityId).subscribe(
      (data: City) => {
        this.city = data;
        this.editingCity.id = data.id;
        this.editingCity.name = data.name;
        this.editingCity.description = data.description;
        if (data.photoUrl && data.photoUrl.length > 0) {
          this.editingCity.photoUrl = data.photoUrl[0].url; 
        } else {
          this.editingCity.photoUrl = ''; 
        }
      },
      error => {
        console.error('Error loading city:', error);
      }
    );
  }
  
  
  

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  updateCity() {
    const cityUpdateDto: CityUpdateDto = {
      id: this.editingCity.id,
      name: this.editingCity.name,
      description: this.editingCity.description,
      photoUrl: this.editingCity.photoUrl 
    };
  
    this.dashboardService.updateCity(this.editingCity.id, cityUpdateDto).subscribe(
      () => {
        console.log('Şehir başarıyla güncellendi.');
        this.router.navigate(['/cities']);
      },
      error => {
        console.error('Şehir güncellenirken bir hata oluştu:', error);
      }
    );
  }
}
