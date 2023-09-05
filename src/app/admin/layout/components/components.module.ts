import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RezervationsComponent } from './rezervations/rezervations.component';
import { UsersComponent } from './users/users.component';
import { ComponentsComponent } from 'src/app/ui/components/components.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AddCityComponent } from './cities/add-city/add-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCityComponent } from './cities/edit-city/edit-city.component';
import { AddHotelComponent } from './hotels/add-hotel/add-hotel.component';


@NgModule({
  declarations: [
    CitiesComponent,
    DashboardComponent,
    HotelsComponent,
    RezervationsComponent,
    UsersComponent,
    RoomsComponent,
    AddCityComponent,
    EditCityComponent,
    AddHotelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CitiesComponent,
    DashboardComponent,
    HotelsComponent,
    RezervationsComponent,
    UsersComponent,
    RoomsComponent,
    AddCityComponent,
    EditCityComponent,
    AddHotelComponent
  
  ],
  providers:[],
  bootstrap:[ComponentsComponent]

})
export class ComponentsModule { }
