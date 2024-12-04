import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/signup'; // Backend API URL

  constructor(private http: HttpClient) {}

  processInfo(userData: any): Observable<string> {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.post<string>(this.apiUrl, userData, { headers });
  }
}