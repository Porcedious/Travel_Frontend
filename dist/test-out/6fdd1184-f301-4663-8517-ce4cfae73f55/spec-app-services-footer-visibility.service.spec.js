import {
  FooterVisibilityService,
  init_footer_visibility_service
} from "./chunk-RFJR6ZIS.js";
import {
  TestBed,
  init_testing
} from "./chunk-AHETUCJG.js";
import "./chunk-TTULUY32.js";

// src/app/services/footer-visibility.service.spec.ts
init_testing();
init_footer_visibility_service();
describe("FooterVisibilityService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterVisibilityService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-app-services-footer-visibility.service.spec.js.map
