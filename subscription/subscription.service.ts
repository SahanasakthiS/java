import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private apiUrl = 'http://localhost:8080/auth/subscriptions';

  constructor(private http: HttpClient) {}

  subscribe(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}