import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-datepicker',
  templateUrl: './hotel-datepicker.component.html',
  styleUrls: ['./hotel-datepicker.component.css']
})
export class HotelDatepickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  
  constructor() { }

  ngOnInit() {
  }

}
