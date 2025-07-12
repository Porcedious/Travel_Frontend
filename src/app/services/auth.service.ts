import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private cookieService: CookieService, private http: HttpClient) {
    this.initializeAuthState();
  }

  private initializeAuthState() {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      this.fetchUserDetails(token);
    }
  }

  login(user: any, token: string) {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 7); // 7 days expiration
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    sessionStorage.setItem('authToken', token);
    this.currentUserSubject.next(user);
  }

  logout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('authToken');
    this.cookieService.delete('selectedLocations'); // Clear selected locations
    this.currentUserSubject.next(null);
  }

  get isLoggedIn() {
    return !!sessionStorage.getItem('authToken');
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  getUserId(): string | null {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user).id : null;
  }

  private fetchUserDetails(token: string) {
    this.http.get('http://128.199.31.140:5200/api/users/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(
      (user: any) => {
        this.currentUserSubject.next(user);
      },
      error => {
        console.error('Error fetching user details', error);
        this.logout();
      }
    );
  }
}
