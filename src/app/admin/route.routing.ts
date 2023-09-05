
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { CitiesComponent } from './layout/components/cities/cities.component';
import { HotelsComponent } from './layout/components/hotels/hotels.component';
import { RezervationsComponent } from './layout/components/rezervations/rezervations.component';
import { UsersComponent } from './layout/components/users/users.component';
import { RoomsComponent } from './layout/components/rooms/rooms.component';
import { AddCityComponent } from './layout/components/cities/add-city/add-city.component';
import { EditCityComponent } from './layout/components/cities/edit-city/edit-city.component';
import { AddHotelComponent } from './layout/components/hotels/add-hotel/add-hotel.component';



const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'cities',component:CitiesComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'rezervations',component:RezervationsComponent},
  {path:'users',component:UsersComponent},
  {path:"addcity", component: AddCityComponent },
  { path: 'edit/:id', component: EditCityComponent },
  {path:"addHotel", component: AddHotelComponent },
  {path:'',redirectTo:"dashboard", pathMatch:"full"},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  RouteRoutes{}