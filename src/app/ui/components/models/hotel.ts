import { CityPhoto } from "./city-photo";
    
export class Hotel {
    id:number;
    name:string;
    description:string;
    userId:number;
    cityId:number;
    photos:CityPhoto[];
    photoUrl: CityPhoto[];
}
