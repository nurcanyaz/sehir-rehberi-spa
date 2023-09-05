import { Routes, } from '@angular/router';

import { CityDetailComponent } from "./ui/components/city/city-detail/city-detail.component";
import { CityComponent } from "./ui/components/city/city.component";
import { RegisterComponent } from "./ui/components/register/register.component";
import { HotelComponent } from "./ui/components/hotel//hotel.component";
import { AllHotelsComponent } from './ui/components/hotel/all-hotels/all-hotels.component';




export const  appRoutes : Routes = [
    { path: "city", component: CityComponent },
    { path: "register", component: RegisterComponent },
    
    { path: "cityDetail/:cityId", component :CityDetailComponent},
    { path: 'cities/:cityId/hotels', component: HotelComponent },
    { path: 'hotel', component: AllHotelsComponent },
    
    

    { path: "**", redirectTo:"city", pathMatch:"full" }
];
