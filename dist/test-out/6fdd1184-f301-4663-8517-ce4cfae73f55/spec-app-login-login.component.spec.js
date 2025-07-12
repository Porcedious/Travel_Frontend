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
  CookieService,
  init_auth_service,
  init_ngx_cookie_service
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

// angular:jit:template:src/app/login/login.component.html
var login_component_default;
var init_login_component = __esm({
  "angular:jit:template:src/app/login/login.component.html"() {
    login_component_default = `<div class="login-container">
  <div class="login-box">
    <h2>Login</h2>

    <p *ngIf="successMessage" class="success-message">{{ successMessage }}</p>
    
    <form (ngSubmit)="sendLoginOTP()">
      <div class="input-group">
        <label for="phone">Phone Number</label>
        <div class="phone-input">
          <select [(ngModel)]="selectedCountryCode" name="countryCode">
            <option *ngFor="let country of countryCodes" [value]="country.code">
              {{ country.code }} ({{ country.name }})
            </option>
          </select>
          <input type="text" id="phone" [(ngModel)]="phone" name="phone" required placeholder="Enter phone number">
        </div>
      </div>

      <!-- \u2705 Send OTP Button -->
      <button *ngIf="!showOTPInput" type="submit" class="login-btn" [disabled]="isLoading">
        {{ isLoading ? 'Sending OTP...' : 'Send OTP' }}
      </button>

      <!-- \u2705 OTP Verification Section (Appears After Sending OTP) -->
      <div *ngIf="showOTPInput" class="otp-container">
        <label for="otp">Enter OTP:</label>
        <input type="text" id="otp" [(ngModel)]="otp" name="otp" required placeholder="Enter OTP">
      </div>

      <button *ngIf="showOTPInput" class="verify-btn" (click)="verifyLoginOTP()" [disabled]="isLoading">
        {{ isLoading ? 'Verifying...' : 'Verify OTP' }}
      </button>
    </form>

    <p *ngIf="errorMessage" class="error">{{ errorMessage }}</p>

    <!-- \u2705 Sign-up Prompt (Only Shows if User is Not Found) -->
    <p *ngIf="showSignupPrompt" class="signup-prompt">
      No account found for this number. <a (click)="navigateToSignup()">Sign up here.</a>
    </p>

    <!-- \u2705 Sign-up Link -->
    <p class="signup-link">
      Don't have an account? <button (click)="navigateToSignup()">Sign up</button>
    </p>
  </div>
</div>`;
  }
});

// angular:jit:style:src/app/login/login.component.css
var login_component_default2;
var init_login_component2 = __esm({
  "angular:jit:style:src/app/login/login.component.css"() {
    login_component_default2 = "/* src/app/login/login.component.css */\n.login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: url(https://res.cloudinary.com/dy6qrgrym/image/upload/v1741548022/fby1ujlwo0zqnbs9nfqx.jpg) no-repeat center center/cover;\n}\n.login-box {\n  width: 400px;\n  background: rgba(255, 255, 255, 0.9);\n  padding: 30px;\n  border-radius: 10px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  text-align: center;\n}\n.input-group {\n  margin-bottom: 15px;\n  text-align: left;\n}\n.input-group label {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n.input-group input {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.phone-input {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.phone-input select {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  width: 100px;\n}\n.otp-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\n.otp-container input {\n  flex: 1;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.login-btn,\n.verify-btn {\n  width: 100%;\n  padding: 12px;\n  background: #ff5733;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n  transition: 0.3s;\n  margin-top: 10px;\n}\n.login-btn:hover,\n.verify-btn:hover {\n  background: #e04e2a;\n}\n.error {\n  color: red;\n  margin-top: 10px;\n}\n.signup-link {\n  margin-top: 15px;\n  font-size: 14px;\n}\n.signup-link button {\n  background: none;\n  border: none;\n  color: #007bff;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: underline;\n}\n.signup-link button:hover {\n  color: #0056b3;\n}\n.success-message {\n  color: #28a745;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=login.component.css.map */\n";
  }
});

// src/app/login/login.component.ts
var LoginComponent;
var init_login_component3 = __esm({
  "src/app/login/login.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_component();
    init_login_component2();
    init_core();
    init_http();
    init_forms();
    init_common();
    init_router();
    init_libphonenumber_js();
    init_auth_service();
    init_ngx_cookie_service();
    init_footer_visibility_service();
    LoginComponent = class LoginComponent2 {
      http;
      router;
      authService;
      cookieService;
      footerVisibilityService;
      phone = "";
      otp = "";
      selectedCountryCode = "+91";
      showOTPInput = false;
      isLoading = false;
      errorMessage = "";
      successMessage = "";
      showSignupPrompt = false;
      constructor(http, router, authService, cookieService, footerVisibilityService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.cookieService = cookieService;
        this.footerVisibilityService = footerVisibilityService;
      }
      ngOnDestroy() {
        this.footerVisibilityService.setFooterVisibility(true);
      }
      navigateToSignup() {
        this.router.navigate(["/signup"]);
      }
      englishSpeakingCountries = ["IN", "US", "GB", "AU", "CA", "IE", "NZ", "SG", "PH", "ZA", "PK", "NG", "GH", "KE", "MY", "TZ", "UG", "BZ", "JM", "TT"];
      countryCodes = [];
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
      sendLoginOTP() {
        this.isLoading = true;
        const formattedPhone = `${this.selectedCountryCode}${this.phone}`;
        this.http.post("http://128.199.31.140:5200/api/users/send-otp-login", { phone: formattedPhone }).subscribe(() => {
          this.showOTPInput = true;
          this.isLoading = false;
          this.errorMessage = "";
          this.showSignupPrompt = false;
        }, (error) => {
          this.isLoading = false;
          if (error.error.message === "No data found. Please sign up!") {
            this.showSignupPrompt = true;
          } else {
            this.errorMessage = error.error.message;
          }
        });
      }
      verifyLoginOTP() {
        this.isLoading = true;
        this.errorMessage = "";
        const verifyData = { phone: this.selectedCountryCode + this.phone, otp: this.otp };
        this.http.post("http://128.199.31.140:5200/api/users/verify-otp", verifyData).subscribe((response) => {
          this.isLoading = false;
          this.successMessage = "\u2705 Login Successful! Redirecting...";
          this.authService.login(response.user, response.token);
          console.log("Auth Token:", this.cookieService.get("authToken"));
          console.log("Current User:", this.cookieService.get("currentUser"));
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
        { type: CookieService },
        { type: FooterVisibilityService }
      ];
    };
    LoginComponent = __decorate([
      Component({
        selector: "app-login",
        template: login_component_default,
        imports: [CommonModule, FormsModule],
        styles: [login_component_default2]
      })
    ], LoginComponent);
  }
});

// src/app/login/login.component.spec.ts
var require_login_component_spec = __commonJS({
  "src/app/login/login.component.spec.ts"(exports) {
    init_testing();
    init_login_component3();
    describe("LoginComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_component_spec();
//# sourceMappingURL=spec-app-login-login.component.spec.js.map
