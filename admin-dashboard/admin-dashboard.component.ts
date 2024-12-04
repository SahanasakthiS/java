import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  usersCount: number = 0;
  paymentsCount: number = 0;
  subscriptionsCount: number = 0;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.usersCount = data.usersCount;
      this.paymentsCount = data.paymentsCount;
      this.subscriptionsCount = data.subscriptionsCount;
    });
  }
}
