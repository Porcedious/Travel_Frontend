import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getCountryCallingCode, CountryCode } from 'libphonenumber-js';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { FooterVisibilityService } from '../services/footer-visibility.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent implements OnInit, OnDestroy {
  phone = '';
  otp = '';
  selectedCountryCode = '+91';
  showOTPInput = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  showSignupPrompt = false;
  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private cookieService: CookieService,private footerVisibilityService: FooterVisibilityService) {}
  ngOnDestroy(): void {
    // Perform any necessary cleanup, such as unsubscribing from observables or clearing timers
    this.footerVisibilityService.setFooterVisibility(true);
    }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  englishSpeakingCountries: CountryCode[] = ['IN', 'US', 'GB', 'AU', 'CA', 'IE', 'NZ', 'SG', 'PH', 'ZA', 'PK', 'NG', 'GH', 'KE', 'MY', 'TZ', 'UG', 'BZ', 'JM', 'TT'];

  countryCodes: { name: string; code: string }[] = [];

  ngOnInit() {
    this.loadCountryCodes();
    this.footerVisibilityService.setFooterVisibility(false);
  }

  loadCountryCodes() {
    this.countryCodes = this.englishSpeakingCountries.map((country) => ({
      name: this.getCountryName(country),
      code: `+${getCountryCallingCode(country)}`
    }));
  }

  getCountryName(countryCode: string): string {
    const countryNames: { [key: string]: string } = {
      IN: 'India', US: 'United States', GB: 'United Kingdom', AU: 'Australia',
      CA: 'Canada', IE: 'Ireland', NZ: 'New Zealand', SG: 'Singapore',
      PH: 'Philippines', ZA: 'South Africa', PK: 'Pakistan', NG: 'Nigeria',
      GH: 'Ghana', KE: 'Kenya', MY: 'Malaysia', TZ: 'Tanzania', UG: 'Uganda',
      BZ: 'Belize', JM: 'Jamaica', TT: 'Trinidad & Tobago'
    };
    return countryNames[countryCode] || countryCode;
  }

  sendLoginOTP() {
    this.isLoading = true;
    const formattedPhone = `${this.selectedCountryCode}${this.phone}`;

    this.http.post('http://128.199.31.140:5200/api/users/send-otp-login', { phone: formattedPhone }).subscribe(
      () => {
        this.showOTPInput = true;
        this.isLoading = false;
        this.errorMessage = '';
        this.showSignupPrompt = false;
      },
      error => {
        this.isLoading = false;
        if (error.error.message === 'No data found. Please sign up!') {
          this.showSignupPrompt = true;
        } else {
          this.errorMessage = error.error.message;
        }
      }
    );
  }

  verifyLoginOTP() {
    this.isLoading = true;
    this.errorMessage = '';
    const verifyData = { phone: this.selectedCountryCode + this.phone, otp: this.otp };
  
    this.http.post('http://128.199.31.140:5200/api/users/verify-otp', verifyData).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.successMessage = "✅ Login Successful! Redirecting...";
  
        // Store token and user data
        this.authService.login(response.user, response.token);
  
        // Debugging: Check if cookies are set
        console.log('Auth Token:', this.cookieService.get('authToken'));
        console.log('Current User:', this.cookieService.get('currentUser'));
  
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      },
      error => {
        this.isLoading = false;
        this.errorMessage = error.error.message;
      }
    );
  }  
}
