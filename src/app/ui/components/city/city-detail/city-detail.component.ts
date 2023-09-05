import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';

import { CityPhoto } from '../../models/city-photo';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'], //
  providers: [CityService]
})
export class CityDetailComponent implements OnInit {
  imageUrls: any = [];
  cities: any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private activatedRoute: ActivatedRoute, private cityService: CityService) { }
  city: City;
  photos: CityPhoto[] = []


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"])
    })
  }

  getCityById(cityId) {
    this.cityService.getCityById(cityId).subscribe(data => {
      this.city = data;
       
      this.getPhotosByCity(cityId);
    })

  }
  getPhotosByCity(cityId) {
    this.cityService.getPhotosByCity(cityId).subscribe(data => {

      this.photos= data;
      this.setGallery();
    })
  }

  getImages(): NgxGalleryImage[] {

      
    for(let i = 0;i<this.city.photos.length;i++)
    {
      this.imageUrls.push({
        small:this.city.photos[i].url,
        medium:this.city.photos[i].url,
        big:this.city.photos[i].url
      })
   
    }
    return this.imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '600px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSwipe: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        imageSwipe: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        imageSwipe: true
      }
    ];

    
    this.galleryImages = this.getImages();
  }
}
