import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SubscriptionService } from './subscription.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  userId: string = '';
  planName: string = '';
  startDate: string = '';
  endDate: string = '';
  minDate: string = '';
  endDateInvalid: boolean = false;

  constructor(private subscriptionService: SubscriptionService, private router: Router) {}

  ngOnInit(): void {
    this.minDate = new Date().toISOString().slice(0, 16); // Initialize the minimum date for startDate input.
  }

  validateDates(): void {
    this.endDateInvalid = new Date(this.endDate) <= new Date(this.startDate);
  }

  subscribeNow(): void {
    if (this.endDateInvalid) {
      alert('End Date should be after the Start Date.');
      return;
    }

    const subscriptionData = {
      userId: this.userId,
      planName: this.planName,
      startDate: this.startDate,
      endDate: this.endDate,
    };

    // Navigate to confirmation page
    

    // Call the subscription service
    this.subscriptionService.subscribe(subscriptionData).subscribe(
      (response) => {
        console.log('Subscription successful:', response);
        alert('Subscription successful');
        this.router.navigate(['/feedback']); 
        // Navigate to confirmation pag
      },
      (error) => {
        console.error('Error during subscription:', error);
        alert('Error during subscription: ' + error.message);
      }
    );
  }
}