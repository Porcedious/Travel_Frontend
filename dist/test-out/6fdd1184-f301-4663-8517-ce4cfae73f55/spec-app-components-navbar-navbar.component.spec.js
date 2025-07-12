import {
  NavbarComponent,
  init_navbar_component
} from "./chunk-W7KLSWOP.js";
import "./chunk-5SDFLPWZ.js";
import "./chunk-27UD5MJR.js";
import "./chunk-YGAVFKBD.js";
import "./chunk-OFHRICUK.js";
import "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import {
  TestBed,
  init_testing
} from "./chunk-AHETUCJG.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/navbar/navbar.component.spec.ts
var require_navbar_component_spec = __commonJS({
  "src/app/components/navbar/navbar.component.spec.ts"(exports) {
    init_testing();
    init_navbar_component();
    describe("NavbarComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [NavbarComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_navbar_component_spec();
//# sourceMappingURL=spec-app-components-navbar-navbar.component.spec.js.map
