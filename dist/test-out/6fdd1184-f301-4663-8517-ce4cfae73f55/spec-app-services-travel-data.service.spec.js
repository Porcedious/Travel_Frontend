import {
  TravelDataService,
  init_travel_data_service
} from "./chunk-5SDFLPWZ.js";
import {
  TestBed,
  init_testing
} from "./chunk-AHETUCJG.js";
import "./chunk-TTULUY32.js";

// src/app/services/travel-data.service.spec.ts
init_testing();
init_travel_data_service();
describe("TravelDataService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelDataService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-travel-data.service.spec.js.map
