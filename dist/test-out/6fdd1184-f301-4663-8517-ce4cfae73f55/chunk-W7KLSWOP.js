import {
  TravelDataService,
  init_travel_data_service
} from "./chunk-5SDFLPWZ.js";
import {
  AuthService,
  init_auth_service
} from "./chunk-27UD5MJR.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-YGAVFKBD.js";
import {
  CommonModule,
  init_common
} from "./chunk-OFHRICUK.js";
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import {
  __async,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/components/navbar/navbar.component.html
var navbar_component_default;
var init_navbar_component = __esm({
  "angular:jit:template:src/app/components/navbar/navbar.component.html"() {
    navbar_component_default = `<nav class="navbar" [ngClass]="{ 'scrolled': isScrolled, 'hidden': isHidden }">
    <div class="logo">
    <a href="#"><img src="#" alt="C"></a> 
    </div>
  
    <div class="nav-right">
      <ul class="nav-links">
        <li> <button class="common">
          <a  (click)="gotodestination()" >DESTINATIONS</a>
        </button>
      </li>
        <li>
          <button class="common">
            <a routerLink="/themes">THEMES</a>
          </button>
        </li>
      </ul>
  
      <!-- <div class="spacer"></div>
        <button class="enquire-btn"><span>ENQUIRE NOW</span></button> -->
        <button>
          <span class="span-mother">
            <span>E</span>
            <span>N</span>
            <span>Q</span>
            <span>U</span>
            <span>I</span>
            <span>R</span>
            <span>E</span>
          </span>
          <span class="span-mother2">
            <span>E</span>
            <span>N</span>
            <span>Q</span>
            <span>U</span>
            <span>I</span>
            <span>R</span>
            <span>E</span>
          </span>
        </button>

      <!-- <button class="enquire-btn">ENQUIRE NOW</button> -->
      <div *ngIf="authService.isLoggedIn; else loginBlock">
        <div class="user-profile">
          <button class="login-btn2"  (click)="authService.logout()"><span>{{ authService.getCurrentUser()?.fullName }}</span></button>
        </div>
      </div>
    
      <ng-template #loginBlock>
        <button class="login-btn" routerLink="/signup">SIGN UP</button>
      </ng-template>
    </div>
</nav>
`;
  }
});

// angular:jit:style:src/app/components/navbar/navbar.component.css
var navbar_component_default2;
var init_navbar_component2 = __esm({
  "angular:jit:style:src/app/components/navbar/navbar.component.css"() {
    navbar_component_default2 = '/* src/app/components/navbar/navbar.component.css */\n.navbar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 50px;\n  background: transparent;\n  transition: transform 0.4s ease-in-out, background 0.3s ease-in-out;\n  z-index: 1000;\n}\n.navbar.scrolled {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  height: 70px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n.navbar.hidden {\n  transform: translateY(-100%);\n}\n.logo img {\n  height: 40px;\n  transition: height 0.3s ease-in-out;\n}\n.navbar.scrolled .logo img {\n  height: 35px;\n}\n.nav-links {\n  list-style: none;\n  display: flex;\n  gap: 30px;\n}\n.nav-links li {\n  display: inline;\n}\n.nav-links a {\n  text-decoration: none;\n  color: white;\n  font-weight: 400;\n  font-size: 16px;\n  transition: color 0.3s ease-in-out;\n}\n.enquire-btn,\n.login-btn {\n  border: none;\n  background: white;\n  padding: 10px 20px;\n  border-radius: 25px;\n  font-weight: bold;\n  cursor: pointer;\n  margin-left: 15px;\n}\n.logo img {\n  height: 40px;\n}\n.nav-right {\n  display: flex;\n  gap: 30px;\n}\n.nav-links {\n  list-style: none;\n  display: flex;\n  gap: 30px;\n}\n.nav-links li {\n  display: inline;\n}\n.nav-links a {\n  text-decoration: none;\n  color: white;\n  font-weight: 300;\n  font-size: 16px;\n}\n.nav-links:hover {\n  color: red;\n}\n.spacer {\n  width: 10px;\n}\n.enquire-btn {\n  border: none;\n  background: white;\n  padding: 12px 25px;\n  border-radius: 25px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.login-btn {\n  border: 2px solid white;\n  background: transparent;\n  padding: 10px 25px;\n  border-radius: 25px;\n  font-weight: bold;\n  color: white;\n  width: 110px;\n  cursor: pointer;\n}\n.login-btn2 {\n  border: 2px solid goldenrod;\n  background: rgba(144, 138, 25, 0.176);\n  padding: 10px 25px;\n  border-radius: 25px;\n  font-weight: bold;\n  color: white;\n  cursor: pointer;\n}\n@media (max-width: 768px) {\n  .navbar {\n    padding: 10px 15px;\n  }\n  .nav-right {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 8px;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n  }\n  .nav-links {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n    margin: 0;\n    padding: 0;\n  }\n  .nav-links li {\n    margin: 0;\n  }\n  .nav-links button {\n    padding: 6px 10px;\n    font-size: 12px;\n  }\n  button {\n    width: auto;\n    height: auto;\n    padding: 6px 10px;\n    font-size: 12px;\n    min-width: auto;\n  }\n  .login-btn {\n    margin-left: 0;\n    padding: 6px 10px;\n    font-size: 12px;\n    width: auto;\n  }\n  .span-mother span,\n  .span-mother2 span {\n    font-size: 12px;\n  }\n}\n@media (max-width: 480px) {\n  .navbar {\n    padding: 8px;\n  }\n  .nav-right {\n    justify-content: flex-end;\n    gap: 5px;\n  }\n  .logo img {\n    height: 30px;\n  }\n  .nav-links {\n    gap: 5px;\n  }\n  .nav-links button,\n  button,\n  .login-btn {\n    padding: 4px 8px;\n    font-size: 11px;\n  }\n  .span-mother span,\n  .span-mother2 span {\n    font-size: 11px;\n  }\n}\n.popup-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.popup-content {\n  background: white;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n.common {\n  font-size: 18px;\n  color: #e1e1e1;\n  font-family: inherit;\n  font-weight: 800;\n  cursor: pointer;\n  position: relative;\n  border: none;\n  background: none;\n  text-transform: uppercase;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 400ms;\n  transition-property: color;\n}\n.common:focus,\n.common:hover {\n  color: #fff;\n}\n.common:focus:after,\n.common:hover:after {\n  width: 100%;\n  left: 0%;\n}\n.common:after {\n  content: "";\n  pointer-events: none;\n  bottom: -2px;\n  left: 50%;\n  position: absolute;\n  width: 0%;\n  height: 2px;\n  background-color: #fff;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: 400ms;\n  transition-property: width, left;\n}\n.content__item {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n  pointer-events: none;\n}\n.button {\n  pointer-events: auto;\n  cursor: pointer;\n  background: #e7e7e7;\n  border: none;\n  padding: 1.5rem 3rem;\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  position: relative;\n  display: inline-block;\n}\n.button::before,\n.button::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.button--pan {\n  font-family: aktiv-grotesk-extended, sans-serif;\n  font-weight: 700;\n  border: 2px solid #000;\n  border-radius: 3rem;\n  overflow: hidden;\n  color: #fff;\n}\n.button--pan span {\n  position: relative;\n  mix-blend-mode: difference;\n}\n.button--pan::before {\n  content: "";\n  background: #000;\n  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);\n}\n.button--pan:hover::before {\n  transform: translate3d(0, -100%, 0);\n}\nbutton {\n  font-weight: bold;\n  color: black;\n  border-radius: 2rem;\n  cursor: pointer;\n  width: 95.02px;\n  height: 42.66px;\n  border: none;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nbutton .span-mother {\n  display: flex;\n  overflow: hidden;\n}\nbutton:hover .span-mother {\n  position: absolute;\n}\nbutton:hover .span-mother span {\n  transform: translateY(1.2em);\n}\nbutton .span-mother span:nth-child(1) {\n  transition: 0.2s;\n}\nbutton .span-mother span:nth-child(2) {\n  transition: 0.3s;\n}\nbutton .span-mother span:nth-child(3) {\n  transition: 0.4s;\n}\nbutton .span-mother span:nth-child(4) {\n  transition: 0.5s;\n}\nbutton .span-mother span:nth-child(5) {\n  transition: 0.6s;\n}\nbutton .span-mother span:nth-child(6) {\n  transition: 0.7s;\n}\nbutton .span-mother span:nth-child(7) {\n  transition: 0.8s;\n}\nbutton .span-mother2 {\n  display: flex;\n  position: absolute;\n  overflow: hidden;\n}\nbutton .span-mother2 span {\n  transform: translateY(-1.2em);\n}\nbutton:hover .span-mother2 span {\n  transform: translateY(0);\n}\nbutton .span-mother2 span {\n  transition: 0.2s;\n}\nbutton .span-mother2 span:nth-child(2) {\n  transition: 0.3s;\n}\nbutton .span-mother2 span:nth-child(3) {\n  transition: 0.4s;\n}\nbutton .span-mother2 span:nth-child(4) {\n  transition: 0.5s;\n}\nbutton .span-mother2 span:nth-child(5) {\n  transition: 0.6s;\n}\nbutton .span-mother2 span:nth-child(6) {\n  transition: 0.7s;\n}\nbutton .span-mother2 span:nth-child(7) {\n  transition: 0.8s;\n}\n/*# sourceMappingURL=navbar.component.css.map */\n';
  }
});

// src/app/components/navbar/navbar.component.ts
var NavbarComponent;
var init_navbar_component3 = __esm({
  "src/app/components/navbar/navbar.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar_component();
    init_navbar_component2();
    init_core();
    init_common();
    init_router();
    init_auth_service();
    init_travel_data_service();
    NavbarComponent = class NavbarComponent2 {
      travelDataService;
      authService;
      router;
      destinationClicked = new EventEmitter();
      isLoginModalOpen = false;
      isScrolled = false;
      isHidden = false;
      lastScrollY = 0;
      user;
      destinations;
      constructor(travelDataService, authService, router) {
        this.travelDataService = travelDataService;
        this.authService = authService;
        this.router = router;
        this.authService.currentUser$.subscribe((user) => {
          this.user = user;
        });
      }
      gotodestination() {
        return __async(this, null, function* () {
          yield this.router.navigate(["/destinations"]);
        });
      }
      onWindowScroll() {
        const currentScrollY = window.scrollY;
        this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 100;
        this.isScrolled = currentScrollY > 50;
        this.lastScrollY = currentScrollY;
      }
      openLoginModal() {
        this.isLoginModalOpen = true;
      }
      closeLoginModal() {
        this.isLoginModalOpen = false;
      }
      onDestinationClick(destinationId) {
        this.destinationClicked.emit(destinationId);
      }
      static ctorParameters = () => [
        { type: TravelDataService },
        { type: AuthService },
        { type: Router }
      ];
      static propDecorators = {
        destinationClicked: [{ type: Output }],
        onWindowScroll: [{ type: HostListener, args: ["window:scroll", []] }]
      };
    };
    NavbarComponent = __decorate([
      Component({
        selector: "app-navbar",
        standalone: true,
        template: navbar_component_default,
        imports: [CommonModule, RouterModule],
        styles: [navbar_component_default2]
      })
    ], NavbarComponent);
  }
});

export {
  NavbarComponent,
  init_navbar_component3 as init_navbar_component
};
//# sourceMappingURL=chunk-W7KLSWOP.js.map
