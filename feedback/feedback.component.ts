import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from './feedback.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ NavbarComponent, FormsModule, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  name: string = '';
  phone: string = '';
  feedback: string = '';
  
  constructor(private router: Router, private feedbackService: FeedbackService){}
  sendFeedback() {
    if (this.name && this.phone && this.feedback) {
      console.log('Feedback Submitted:', {
        name: this.name,
        phone: this.phone,
        feedback: this.feedback
      });
      alert('Thank you for your feedback!');
      this.router.navigate(['/dashboard'])
      // Optionally redirect to a thank-you page or reset form
      this.name = '';
      this.phone = '';
      this.feedback = '';
    } else {
      alert('Please fill out all fields.');
    }
  }
}
