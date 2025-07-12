import {
  HomeDataService,
  init_home_data_service
} from "./chunk-55C7EEVE.js";
import {
  TestBed,
  init_testing
} from "./chunk-AHETUCJG.js";
import "./chunk-TTULUY32.js";

// src/app/services/home-data.service.spec.ts
init_testing();
init_home_data_service();
describe("HomeDataService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDataService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-home-data.service.spec.js.map
