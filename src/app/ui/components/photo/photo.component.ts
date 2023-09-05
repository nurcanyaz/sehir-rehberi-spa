import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from '../services/alertify.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CityPhoto } from '../models/city-photo';
import { PhotoUpdateDto } from '../models/photo-update-dto';
import { DashboardService } from 'src/app/admin/layout/components/services/dashboard.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
    cityId: number;
  photos: CityPhoto[];

  constructor(
    private route: ActivatedRoute,
    private dashboardService:DashboardService
  ) {}

  ngOnInit(): void {
    this.cityId = +this.route.snapshot.paramMap.get('id');
    this.loadPhotos();
  }
  baseUrl= 'https://localhost:44324/api/';
  loadPhotos() {
    this.dashboardService.getCityPhotos(this.cityId).subscribe(
      (data: CityPhoto[]) => {
        this.photos = data;
      },
      error => {
        console.error('Error loading photos:', error);
      }
    );
  }

  deletePhoto(photoId: number) {
    this.dashboardService.deleteCityPhoto(this.cityId, photoId).subscribe(
      () => {
        console.log('Photo deleted successfully.');
        this.loadPhotos();
      },
      error => {
        console.error('Error deleting photo:', error);
      }
    );
  }
}