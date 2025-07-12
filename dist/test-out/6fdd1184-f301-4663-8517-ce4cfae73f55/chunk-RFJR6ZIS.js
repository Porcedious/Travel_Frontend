import {
  BehaviorSubject,
  Injectable,
  __decorate,
  init_core,
  init_esm,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/services/footer-visibility.service.ts
var FooterVisibilityService;
var init_footer_visibility_service = __esm({
  "src/app/services/footer-visibility.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    FooterVisibilityService = class FooterVisibilityService2 {
      footerVisible = new BehaviorSubject(true);
      footerVisible$ = this.footerVisible.asObservable();
      setFooterVisibility(visible) {
        this.footerVisible.next(visible);
      }
    };
    FooterVisibilityService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], FooterVisibilityService);
  }
});

export {
  FooterVisibilityService,
  init_footer_visibility_service
};
//# sourceMappingURL=chunk-RFJR6ZIS.js.map
