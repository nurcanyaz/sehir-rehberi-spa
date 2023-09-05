import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { NavComponent } from './nav/nav.component';
import { PhotoComponent } from './photo/photo.component';
import { RegisterComponent } from './register/register.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { HotelDatepickerComponent } from './hotel/hotel-datepicker/hotel-datepicker.component';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { HotelComponent } from './hotel/hotel.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertifyService } from './services/alertify.service';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { AuthService } from './services/auth.service';
import { appRoutes } from 'src/app/routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AllHotelsComponent } from './hotel/all-hotels/all-hotels.component';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    BsDatepickerModule.forRoot(),
    
   

  ],
  declarations: [
    ComponentsComponent,
    NavComponent,
    PhotoComponent,
    RegisterComponent,
    CityComponent,
    CityDetailComponent,
    HotelComponent,
    HotelDatepickerComponent,
    AllHotelsComponent,
    
    

    
  ],
  exports:[
    
    CityComponent,
    CityDetailComponent,
    HotelComponent,
    HotelDatepickerComponent,
    NavComponent,
    ComponentsComponent,
    AllHotelsComponent
    

  ],
  providers: [AlertifyService],
  bootstrap:[ComponentsComponent],
})
export class ComponentsModule { }
