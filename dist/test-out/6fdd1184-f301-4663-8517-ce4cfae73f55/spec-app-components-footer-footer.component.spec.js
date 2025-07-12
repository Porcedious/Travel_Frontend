import {
  FooterComponent,
  init_footer_component
} from "./chunk-4SBHHN4N.js";
import {
  TestBed,
  init_testing
} from "./chunk-AHETUCJG.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/footer/footer.component.spec.ts
var require_footer_component_spec = __commonJS({
  "src/app/components/footer/footer.component.spec.ts"(exports) {
    init_testing();
    init_footer_component();
    describe("FooterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [FooterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_component_spec();
//# sourceMappingURL=spec-app-components-footer-footer.component.spec.js.map
