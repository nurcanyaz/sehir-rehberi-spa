import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient:HttpClient) { }

path = "https://localhost:44324/api/";

getUsers(): Observable<User[]> {
  return this.httpClient.get<User[]>(this.path);

}
}