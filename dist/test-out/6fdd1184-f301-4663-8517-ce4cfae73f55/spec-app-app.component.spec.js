import {
  FooterComponent,
  init_footer_component
} from "./chunk-4SBHHN4N.js";
import {
  NavbarComponent,
  init_navbar_component
} from "./chunk-W7KLSWOP.js";
import {
  DestinationsComponent,
  init_destinations_component
} from "./chunk-P7B3RFNX.js";
import "./chunk-NRTI6FCM.js";
import {
  TravelDataService,
  init_travel_data_service
} from "./chunk-5SDFLPWZ.js";
import "./chunk-27UD5MJR.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-YGAVFKBD.js";
import {
  CommonModule,
  init_common
} from "./chunk-OFHRICUK.js";
import "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import {
  FooterVisibilityService,
  init_footer_visibility_service
} from "./chunk-RFJR6ZIS.js";
import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  TestBed,
  ViewChild,
  ViewContainerRef,
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

// angular:jit:template:src/app/app.component.html
var app_component_default;
var init_app_component = __esm({
  "angular:jit:template:src/app/app.component.html"() {
    app_component_default = '<app-navbar ></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf="footerVisible$ | async"></app-footer>\n';
  }
});

// angular:jit:style:src/app/app.component.css
var app_component_default2;
var init_app_component2 = __esm({
  "angular:jit:style:src/app/app.component.css"() {
    app_component_default2 = "/* src/app/app.component.css */\n/*# sourceMappingURL=app.component.css.map */\n";
  }
});

// src/app/app.component.ts
var AppComponent;
var init_app_component3 = __esm({
  "src/app/app.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_app_component();
    init_app_component2();
    init_core();
    init_router();
    init_common();
    init_footer_component();
    init_navbar_component();
    init_footer_visibility_service();
    init_destinations_component();
    init_travel_data_service();
    AppComponent = class AppComponent2 {
      footerVisibilityService;
      componentFactoryResolver;
      travelDataService;
      cdr;
      popupContainer;
      isPopupOpen = false;
      title = "expllingo-frontend";
      footerVisible$;
      constructor(footerVisibilityService, componentFactoryResolver, travelDataService, cdr) {
        this.footerVisibilityService = footerVisibilityService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.travelDataService = travelDataService;
        this.cdr = cdr;
      }
      ngOnInit() {
        this.footerVisible$ = this.footerVisibilityService.footerVisible$;
      }
      destinations = [];
      togglePopup(destinationId) {
        try {
          if (this.isPopupOpen) {
            this.closePopup();
          } else {
            this.destinations = this.travelDataService.getAllLocations();
            if (!this.destinations?.length) {
              console.error("No destinations found");
              return;
            }
            this.popupContainer.clear();
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DestinationsComponent);
            const componentRef = this.popupContainer.createComponent(componentFactory);
            componentRef.instance.destinations = this.destinations;
            this.isPopupOpen = true;
            this.cdr.detectChanges();
          }
        } catch (error) {
          console.error("Error showing destinations:", error);
        }
      }
      closePopup() {
        this.popupContainer.clear();
        this.isPopupOpen = false;
        this.cdr.detectChanges();
      }
      static ctorParameters = () => [
        { type: FooterVisibilityService },
        { type: ComponentFactoryResolver$1 },
        { type: TravelDataService },
        { type: ChangeDetectorRef }
      ];
      static propDecorators = {
        popupContainer: [{ type: ViewChild, args: ["popupContainer", { read: ViewContainerRef, static: true }] }]
      };
    };
    AppComponent = __decorate([
      Component({
        selector: "app-root",
        template: app_component_default,
        standalone: true,
        imports: [RouterOutlet, FooterComponent, NavbarComponent, CommonModule],
        styles: [app_component_default2]
      })
    ], AppComponent);
  }
});

// src/app/app.component.spec.ts
var require_app_component_spec = __commonJS({
  "src/app/app.component.spec.ts"(exports) {
    init_testing();
    init_app_component3();
    describe("AppComponent", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AppComponent]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it(`should have the 'expllingo-frontend' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("expllingo-frontend");
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, expllingo-frontend");
      });
    });
  }
});
export default require_app_component_spec();
//# sourceMappingURL=spec-app-app.component.spec.js.map
