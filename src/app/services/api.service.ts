import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://128.199.31.140:5200'; // Update with backend URL

  constructor(private http: HttpClient) {}

  // Fetch all destinations from backend
  getDestinations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/destinations/`);
  }

  // Fetch all travel packages (if needed)
  getPackages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/packages/`);
  }
}
