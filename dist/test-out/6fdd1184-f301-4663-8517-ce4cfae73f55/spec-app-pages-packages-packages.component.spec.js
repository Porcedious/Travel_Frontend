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

// angular:jit:template:src/app/pages/packages/packages.component.html
var packages_component_default;
var init_packages_component = __esm({
  "angular:jit:template:src/app/pages/packages/packages.component.html"() {
    packages_component_default = "<p>packages works!</p>\n";
  }
});

// angular:jit:style:src/app/pages/packages/packages.component.css
var packages_component_default2;
var init_packages_component2 = __esm({
  "angular:jit:style:src/app/pages/packages/packages.component.css"() {
    packages_component_default2 = "/* src/app/pages/packages/packages.component.css */\n/*# sourceMappingURL=packages.component.css.map */\n";
  }
});

// src/app/pages/packages/packages.component.ts
var PackagesComponent;
var init_packages_component3 = __esm({
  "src/app/pages/packages/packages.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_packages_component();
    init_packages_component2();
    init_core();
    PackagesComponent = class PackagesComponent2 {
    };
    PackagesComponent = __decorate([
      Component({
        selector: "app-packages",
        imports: [],
        template: packages_component_default,
        styles: [packages_component_default2]
      })
    ], PackagesComponent);
  }
});

// src/app/pages/packages/packages.component.spec.ts
var require_packages_component_spec = __commonJS({
  "src/app/pages/packages/packages.component.spec.ts"(exports) {
    init_testing();
    init_packages_component3();
    describe("PackagesComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [PackagesComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PackagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_packages_component_spec();
//# sourceMappingURL=spec-app-pages-packages-packages.component.spec.js.map
