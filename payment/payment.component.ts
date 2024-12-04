import { Component } from '@angular/core';
import { NavbarComponent } from '@app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from './payment.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NavbarComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  courseName: string = '';
  payerName: string = '';
  payerEmail: string = '';
  amount: string = '';
  
  constructor(private paymentService: PaymentService, private router: Router) {}

  onSubmit(paymentForm: any) {
    if (paymentForm.valid) {
      const paymentData = {
        courseName: this.courseName,
        payerName: this.payerName,
        payerEmail: this.payerEmail,
        amount: this.amount,
      };

      this.paymentService.processPayment(paymentData).subscribe({
        next: (response) => {
          alert("Payment Successfull!");
          this.router.navigate(['/feedback']); 
        },
        error: (error) => {
          alert('Payment Failed: ' + error.error);
        },
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}