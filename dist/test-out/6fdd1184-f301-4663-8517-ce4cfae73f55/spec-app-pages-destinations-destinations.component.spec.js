import {
  DestinationsComponent,
  init_destinations_component
} from "./chunk-P7B3RFNX.js";
import "./chunk-NRTI6FCM.js";
import "./chunk-5SDFLPWZ.js";
import "./chunk-YGAVFKBD.js";
import "./chunk-OFHRICUK.js";
import "./chunk-FI3XTIHJ.js";
import "./chunk-ZCYQ42IE.js";
import "./chunk-RFJR6ZIS.js";
import {
  TestBed,
  init_testing
} from "./chunk-AHETUCJG.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/destinations/destinations.component.spec.ts
var require_destinations_component_spec = __commonJS({
  "src/app/pages/destinations/destinations.component.spec.ts"(exports) {
    init_testing();
    init_destinations_component();
    describe("DestinationsComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DestinationsComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(DestinationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_destinations_component_spec();
//# sourceMappingURL=spec-app-pages-destinations-destinations.component.spec.js.map
