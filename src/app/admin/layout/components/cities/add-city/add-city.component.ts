import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../../../ui/components/services/city.service';
import { DashboardService } from '../../services/dashboard.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { City } from 'src/app/ui/components/models/city';
import { AuthService } from '../../../../../ui/components/services/auth.service';


@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
  providers: [CityService],
})
export class AddCityComponent implements OnInit {

  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dashboardService: DashboardService
   
  ) {}

  city: City;
  cityAddForm: FormGroup;

  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.createCityForm();
  }
  add() {
    if (this.cityAddForm.valid) {
      this.city = Object.assign({}, this.cityAddForm.value);
      this.dashboardService.add(this.city);
    }
  }
  }



  
