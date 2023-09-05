import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalUsers: number;
  totalCities: number;
  totalHotels: number;
  totalReservations: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getTotals().subscribe(data => {
      console.log(data);
      this.totalUsers = data.totalUsers;
      this.totalCities = data.totalCities;
      this.totalHotels = data.totalHotels;
     // this.totalReservations = data.totalReservations;
    });
  }
}

