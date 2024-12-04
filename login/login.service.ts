import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/auth'; // Backend URL

  constructor(private http: HttpClient) {}

 

  login(usernameOrEmail: string, password: string): Observable<string> {
    const body = { usernameOrEmail, password };
    return this.http.post<string>(`${this.apiUrl}/login`, body, { responseType: 'text' as 'json'});
  }
}