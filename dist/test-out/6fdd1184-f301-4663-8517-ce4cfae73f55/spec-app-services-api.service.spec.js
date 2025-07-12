import {
  HttpClient,
  init_http
} from "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import {
  Injectable,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import "./chunk-TTULUY32.js";

// src/app/services/api.service.spec.ts
init_testing();

// src/app/services/api.service.ts
init_tslib_es6();
init_core();
init_http();
var ApiService = class ApiService2 {
  http;
  apiUrl = "http://128.199.31.140:5200";
  // Update with backend URL
  constructor(http) {
    this.http = http;
  }
  // Fetch all destinations from backend
  getDestinations() {
    return this.http.get(`${this.apiUrl}/destinations/`);
  }
  // Fetch all travel packages (if needed)
  getPackages() {
    return this.http.get(`${this.apiUrl}/packages/`);
  }
  static ctorParameters = () => [
    { type: HttpClient }
  ];
};
ApiService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ApiService);

// src/app/services/api.service.spec.ts
describe("ApiService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-api.service.spec.js.map
