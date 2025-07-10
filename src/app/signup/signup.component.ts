import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getCountryCallingCode, CountryCode } from 'libphonenumber-js';
import { AuthService } from '../services/auth.service';
import { FooterVisibilityService } from '../services/footer-visibility.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SignupComponent implements OnInit {
  fullName = '';
  email = '';
  phone = '';
  otp = '';
  showOTPinput = false;
  phoneNumber: string = '';
  selectedCountryCode: string = '';
  countryCodes: { name: string; code: string }[] = [];
  isLoading: boolean = false;
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService,private footerVisibilityService: FooterVisibilityService) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  englishSpeakingCountries: CountryCode[] = [
    'IN', 'US', 'GB', 'AU', 'CA', 'IE', 'NZ', 'SG', 'PH', 'ZA', 'PK', 'NG', 'GH', 'KE', 'MY', 'TZ', 'UG', 'BZ', 'JM', 'TT',
  ];

  ngOnInit(): void {
    this.loadCountryCodes();
    this.footerVisibilityService.setFooterVisibility(false);
  }

  ngOnDestroy(): void {
    this.footerVisibilityService.setFooterVisibility(true);
  }
  
  loadCountryCodes() {
    this.countryCodes = this.englishSpeakingCountries.map((country) => ({
      name: this.getCountryName(country),
      code: `+${getCountryCallingCode(country)}`,
    }));

    this.selectedCountryCode = '+91';
  }

  getCountryName(countryCode: string): string {
    const countryNames: { [key: string]: string } = {
      IN: 'India', US: 'United States', GB: 'United Kingdom', AU: 'Australia',
      CA: 'Canada', IE: 'Ireland', NZ: 'New Zealand', SG: 'Singapore',
      PH: 'Philippines', ZA: 'South Africa', PK: 'Pakistan', NG: 'Nigeria',
      GH: 'Ghana', KE: 'Kenya', MY: 'Malaysia', TZ: 'Tanzania', UG: 'Uganda',
      BZ: 'Belize', JM: 'Jamaica', TT: 'Trinidad & Tobago',
    };
    return countryNames[countryCode] || countryCode;
  }

  onSignup() {
    this.isLoading = true;
    const formattedPhone = `${this.selectedCountryCode}${this.phone}`;
    const userData = { fullName: this.fullName, email: this.email, phone: formattedPhone };

    this.http.post('http://128.199.31.140:5200/api/users/send-otp-signup', userData).subscribe(
      () => {
        this.showOTPinput = true;
        this.successMessage = "✅ OTP has been sent to your email!";
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        if (error.error.message === 'User already exists!') {
          if (confirm("This phone number is already registered. Do you want to log in instead?")) {
            this.router.navigate(['/login']);
          }
        } else {
          this.errorMessage = error.error.message;
        }
      }
    );
  }

  verifyOTP() {
    this.isLoading = true;
    this.errorMessage = '';
    const otpData = { phone: this.selectedCountryCode + this.phone, otp: this.otp };

    this.http.post('http://128.199.31.140:5200/api/users/verify-otp', otpData).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.successMessage = "✅ Signup Successful! Redirecting...";

        // Store token and user data
        this.authService.login(response.user, response.token);

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
