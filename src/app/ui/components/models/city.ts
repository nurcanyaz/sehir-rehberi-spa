import { CityPhoto } from "./city-photo";

export class City {
    id:number;
    name:string;
    description:string;
    userId:number;
    hotelId:number;
    photos:CityPhoto[];
    photoUrl: CityPhoto[];
}
