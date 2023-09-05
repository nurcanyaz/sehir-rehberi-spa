import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/ui/components/services/city.service';
import { DashboardService } from '../../services/dashboard.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { AuthService } from '../../../../../ui/components/services/auth.service';
import { Hotel } from 'src/app/ui/components/models/hotel';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dashboardService: DashboardService
   
  ) {}

  hotel: Hotel;
  hotelAddForm: FormGroup;

  createHotelForm() {
    this.hotelAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createHotelForm();
  }
  add() {
    if (this.hotelAddForm.valid) {
      this.hotel = Object.assign({}, this.hotelAddForm.value);
      this.dashboardService.add(this.hotel);
    }
  }
  }

