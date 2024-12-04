import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/auth/payments'; // Backend API URL

  constructor(private http: HttpClient) {}

  processPayment(paymentData: any): Observable<string> {
    return this.http.post<string>(this.apiUrl, paymentData);
  }
}