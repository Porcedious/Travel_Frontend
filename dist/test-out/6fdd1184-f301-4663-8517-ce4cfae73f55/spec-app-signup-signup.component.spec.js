import {
  getCountryCallingCode,
  init_libphonenumber_js
} from "./chunk-JN45AJE6.js";
import {
  FormsModule,
  init_forms
} from "./chunk-2V6KEZW6.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-27UD5MJR.js";
import {
  Router,
  init_router
} from "./chunk-YGAVFKBD.js";
import {
  CommonModule,
  init_common
} from "./chunk-OFHRICUK.js";
import {
  HttpClient,
  init_http
} from "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import {
  FooterVisibilityService,
  init_footer_visibility_service
} from "./chunk-RFJR6ZIS.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/signup/signup.component.html
var signup_component_default;
var init_signup_component = __esm({
  "angular:jit:template:src/app/signup/signup.component.html"() {
    signup_component_default = `<div class="signup-container">
    <div class="signup-box">
      <h2>Sign Up</h2>
  

      <p *ngIf="successMessage" class="success-message">{{ successMessage }}</p>
<p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>

      <form (ngSubmit)="onSignup()">
        <div class="input-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" [(ngModel)]="fullName" name="fullName" required>
        </div>
  
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" [(ngModel)]="email" name="email" required>
        </div>
  
        <div class="input-group">
          <label for="phone">Phone Number</label>
          <div class="phone-input">
            <select [(ngModel)]="selectedCountryCode" name="countryCode">
              <option *ngFor="let country of countryCodes" [value]="country.code">
                {{ country.code }}({{ country.name }})
              </option>
            </select>
            <input type="text" id="phone" [(ngModel)]="phone" name="phone" required placeholder="Enter phone number">
          </div>
        </div>

        <div *ngIf="showOTPinput" class="input-group otp-box">
            <label for="otp">Enter OTP</label>
            <input type="text" id="otp" [(ngModel)]="otp" name="otp" placeholder="Enter OTP">
            <button type="button" (click)="verifyOTP()" class="verify-btn">Verify OTP</button>
          </div>
  <!-- Submit Button with Loading -->
  <button type="submit" class= "signup-btn" [disabled]="isLoading">
    {{ isLoading ? 'Registering...' : 'Register' }}
  </button>
</form>



  <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>

<p class="login-link">
    Already have an account? <button (click)="navigateToLogin()">Login</button>
  </p>
</div>
</div>

  
`;
  }
});

// angular:jit:style:src/app/signup/signup.component.css
var signup_component_default2;
var init_signup_component2 = __esm({
  "angular:jit:style:src/app/signup/signup.component.css"() {
    signup_component_default2 = "/* src/app/signup/signup.component.css */\n.signup-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: url(https://res.cloudinary.com/dy6qrgrym/image/upload/v1741548022/fby1ujlwo0zqnbs9nfqx.jpg) no-repeat center center/cover;\n}\n.signup-box {\n  width: 400px;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.countrycode {\n  color: grey;\n}\n.signup-box h2 {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 20px;\n  color: #333;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  margin-bottom: 15px;\n}\n.input-group label {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #444;\n}\n.input-group input,\n.input-group select {\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  font-size: 16px;\n  width: 100%;\n}\n.phone-input {\n  display: flex;\n  gap: 10px;\n}\n.phone-input select {\n  flex: 1;\n  background: #f8f8f8;\n  color: rgba(9, 3, 3, 0.787);\n}\n.phone-input input {\n  flex: 2;\n}\n.signup-btn {\n  width: 100%;\n  padding: 12px;\n  background: #ff5733;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.signup-btn:hover {\n  background: #e04e2b;\n}\n.login-link {\n  margin-top: 15px;\n  font-size: 14px;\n}\n.login-link a {\n  color: #ff5733;\n  text-decoration: none;\n  font-weight: bold;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 500px) {\n  .signup-box {\n    width: 90%;\n    padding: 20px;\n  }\n}\n.login-link {\n  text-align: center;\n  margin-top: 15px;\n  font-size: 14px;\n  color: #333;\n}\n.login-link a {\n  text-decoration: none;\n  color: #ff5733;\n  font-weight: bold;\n  transition: color 0.3s ease-in-out;\n}\n.login-link a:hover {\n  color: #ff2e00;\n  text-decoration: underline;\n}\n.login-link button {\n  background: none;\n  border: none;\n  color: #ff5733;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 14px;\n  transition: color 0.3s ease-in-out;\n}\n.login-link button:hover {\n  color: #ff2e00;\n  text-decoration: underline;\n}\n.otp-box {\n  margin-top: 10px;\n  display: flex;\n  gap: 10px;\n}\n.otp-box input {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.verify-btn {\n  background-color: #ff5733;\n  color: white;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.verify-btn:hover {\n  background-color: #e60000;\n}\n.success-message {\n  color: green;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=signup.component.css.map */\n";
  }
});

// src/app/signup/signup.component.ts
var SignupComponent;
var init_signup_component3 = __esm({
  "src/app/signup/signup.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_signup_component();
    init_signup_component2();
    init_core();
    init_http();
    init_forms();
    init_common();
    init_router();
    init_libphonenumber_js();
    init_auth_service();
    init_footer_visibility_service();
    SignupComponent = class SignupComponent2 {
      http;
      router;
      authService;
      footerVisibilityService;
      fullName = "";
      email = "";
      phone = "";
      otp = "";
      showOTPinput = false;
      phoneNumber = "";
      selectedCountryCode = "";
      countryCodes = [];
      isLoading = false;
      errorMessage = "";
      successMessage = "";
      constructor(http, router, authService, footerVisibilityService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.footerVisibilityService = footerVisibilityService;
      }
      navigateToLogin() {
        this.router.navigate(["/login"]);
      }
      englishSpeakingCountries = [
        "IN",
        "US",
        "GB",
        "AU",
        "CA",
        "IE",
        "NZ",
        "SG",
        "PH",
        "ZA",
        "PK",
        "NG",
        "GH",
        "KE",
        "MY",
        "TZ",
        "UG",
        "BZ",
        "JM",
        "TT"
      ];
      ngOnInit() {
        this.loadCountryCodes();
        this.footerVisibilityService.setFooterVisibility(false);
      }
      ngOnDestroy() {
        this.footerVisibilityService.setFooterVisibility(true);
      }
      loadCountryCodes() {
        this.countryCodes = this.englishSpeakingCountries.map((country) => ({
          name: this.getCountryName(country),
          code: `+${getCountryCallingCode(country)}`
        }));
        this.selectedCountryCode = "+91";
      }
      getCountryName(countryCode) {
        const countryNames = {
          IN: "India",
          US: "United States",
          GB: "United Kingdom",
          AU: "Australia",
          CA: "Canada",
          IE: "Ireland",
          NZ: "New Zealand",
          SG: "Singapore",
          PH: "Philippines",
          ZA: "South Africa",
          PK: "Pakistan",
          NG: "Nigeria",
          GH: "Ghana",
          KE: "Kenya",
          MY: "Malaysia",
          TZ: "Tanzania",
          UG: "Uganda",
          BZ: "Belize",
          JM: "Jamaica",
          TT: "Trinidad & Tobago"
        };
        return countryNames[countryCode] || countryCode;
      }
      onSignup() {
        this.isLoading = true;
        const formattedPhone = `${this.selectedCountryCode}${this.phone}`;
        const userData = { fullName: this.fullName, email: this.email, phone: formattedPhone };
        this.http.post("http://128.199.31.140:5200/api/users/send-otp-signup", userData).subscribe(() => {
          this.showOTPinput = true;
          this.successMessage = "\u2705 OTP has been sent to your email!";
          this.isLoading = false;
        }, (error) => {
          this.isLoading = false;
          if (error.error.message === "User already exists!") {
            if (confirm("This phone number is already registered. Do you want to log in instead?")) {
              this.router.navigate(["/login"]);
            }
          } else {
            this.errorMessage = error.error.message;
          }
        });
      }
      verifyOTP() {
        this.isLoading = true;
        this.errorMessage = "";
        const otpData = { phone: this.selectedCountryCode + this.phone, otp: this.otp };
        this.http.post("http://128.199.31.140:5200/api/users/verify-otp", otpData).subscribe((response) => {
          this.isLoading = false;
          this.successMessage = "\u2705 Signup Successful! Redirecting...";
          this.authService.login(response.user, response.token);
          setTimeout(() => {
            this.router.navigate(["/home"]);
          }, 1500);
        }, (error) => {
          this.isLoading = false;
          this.errorMessage = error.error.message;
        });
      }
      static ctorParameters = () => [
        { type: HttpClient },
        { type: Router },
        { type: AuthService },
        { type: FooterVisibilityService }
      ];
    };
    SignupComponent = __decorate([
      Component({
        selector: "app-signup",
        template: signup_component_default,
        imports: [CommonModule, FormsModule],
        styles: [signup_component_default2]
      })
    ], SignupComponent);
  }
});

// src/app/signup/signup.component.spec.ts
var require_signup_component_spec = __commonJS({
  "src/app/signup/signup.component.spec.ts"(exports) {
    init_testing();
    init_signup_component3();
    describe("SignupComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [SignupComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_signup_component_spec();
//# sourceMappingURL=spec-app-signup-signup.component.spec.js.map
