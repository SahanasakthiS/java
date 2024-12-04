import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8080/auth/feedback'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  sendFeedback(feedbackData: { name: string; phone: string; feedback: string }): Observable<any> {
    return this.http.post(this.apiUrl, feedbackData);
  }
}