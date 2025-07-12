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

// angular:jit:template:src/app/pages/itinerary-ai/itinerary-ai.component.html
var itinerary_ai_component_default;
var init_itinerary_ai_component = __esm({
  "angular:jit:template:src/app/pages/itinerary-ai/itinerary-ai.component.html"() {
    itinerary_ai_component_default = "<p>itinerary-ai works!</p>\n";
  }
});

// angular:jit:style:src/app/pages/itinerary-ai/itinerary-ai.component.css
var itinerary_ai_component_default2;
var init_itinerary_ai_component2 = __esm({
  "angular:jit:style:src/app/pages/itinerary-ai/itinerary-ai.component.css"() {
    itinerary_ai_component_default2 = "/* src/app/pages/itinerary-ai/itinerary-ai.component.css */\n/*# sourceMappingURL=itinerary-ai.component.css.map */\n";
  }
});

// src/app/pages/itinerary-ai/itinerary-ai.component.ts
var ItineraryAiComponent;
var init_itinerary_ai_component3 = __esm({
  "src/app/pages/itinerary-ai/itinerary-ai.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_itinerary_ai_component();
    init_itinerary_ai_component2();
    init_core();
    ItineraryAiComponent = class ItineraryAiComponent2 {
    };
    ItineraryAiComponent = __decorate([
      Component({
        selector: "app-itinerary-ai",
        imports: [],
        template: itinerary_ai_component_default,
        styles: [itinerary_ai_component_default2]
      })
    ], ItineraryAiComponent);
  }
});

// src/app/pages/itinerary-ai/itinerary-ai.component.spec.ts
var require_itinerary_ai_component_spec = __commonJS({
  "src/app/pages/itinerary-ai/itinerary-ai.component.spec.ts"(exports) {
    init_testing();
    init_itinerary_ai_component3();
    describe("ItineraryAiComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ItineraryAiComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(ItineraryAiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_itinerary_ai_component_spec();
//# sourceMappingURL=spec-app-pages-itinerary-ai-itinerary-ai.component.spec.js.map
