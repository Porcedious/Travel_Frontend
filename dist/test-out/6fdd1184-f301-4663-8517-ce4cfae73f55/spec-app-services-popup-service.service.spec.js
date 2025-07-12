import {
  BehaviorSubject,
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import "./chunk-TTULUY32.js";

// src/app/services/popup-service.service.spec.ts
init_testing();

// src/app/services/popup-service.service.ts
init_tslib_es6();
init_core();
init_esm();
var PopupServiceService = class PopupServiceService2 {
  popupState = new BehaviorSubject(false);
  popupState$ = this.popupState.asObservable();
  openPopup() {
    this.popupState.next(true);
  }
  closePopup() {
    this.popupState.next(false);
  }
  constructor() {
  }
  static ctorParameters = () => [];
};
PopupServiceService = __decorate([
  Injectable({
    providedIn: "root"
  })
], PopupServiceService);

// src/app/services/popup-service.service.spec.ts
describe("PopupServiceService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupServiceService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-popup-service.service.spec.js.map
