import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/ui/components/models/hotel';
import { HotelUpdateDto } from 'src/app/ui/components/models/hotel-update-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { CityPhoto } from 'src/app/ui/components/models/city-photo';

@Component({
  selector: 'app-edit-hotels',
  templateUrl: './edit-hotels.component.html',
  styleUrls: ['./edit-hotels.component.css']
})
export class EditHotelsComponent implements OnInit {
hotel:Hotel;
editingHotel: HotelUpdateDto =  new HotelUpdateDto();
selectedFile: File;


constructor(
  private route: ActivatedRoute,
  private router: Router,
  private dashboardService: DashboardService
) {}

ngOnInit(): void {
  const hotelId = +this.route.snapshot.paramMap.get('id');
  this.loadHotel(hotelId);
}

loadHotel(hotelId: number) {
  this.dashboardService.getHotel(hotelId).subscribe(
    (data: Hotel) => {
      this.hotel = data;
      this.editingHotel.id = data.id;
      this.editingHotel.name = data.name;
      this.editingHotel.description = data.description;
      if (data.photoUrl && data.photoUrl.length > 0) {
        this.editingHotel.photoUrl = data.photoUrl[0].url; 
      } else {
        this.editingHotel.photoUrl = ''; 
      }
    },
    error => {
      console.error('Error loading hotel:', error);
    }
  );
}




onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

updateHotel() {
  const hotelUpdateDto: HotelUpdateDto = {
    id: this.editingHotel.id,
    name: this.editingHotel.name,
    description: this.editingHotel.description,
    photoUrl: this.editingHotel.photoUrl 
  };

  this.dashboardService.updateHotel(this.editingHotel.id, hotelUpdateDto).subscribe(
    () => {
      console.log('Şehir başarıyla güncellendi.');
      this.router.navigate(['/hotels']);
    },
    error => {
      console.error('Şehir güncellenirken bir hata oluştu:', error);
    }
  );
}
}


