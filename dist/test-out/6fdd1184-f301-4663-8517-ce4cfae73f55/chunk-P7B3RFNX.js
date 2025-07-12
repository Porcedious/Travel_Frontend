import {
  gsapWithCSS,
  init_gsap
} from "./chunk-NRTI6FCM.js";
import {
  TravelDataService,
  init_travel_data_service
} from "./chunk-5SDFLPWZ.js";
import {
  ActivatedRoute,
  Router,
  RouterModule,
  init_router
} from "./chunk-YGAVFKBD.js";
import {
  CommonModule,
  init_common,
  isPlatformBrowser
} from "./chunk-OFHRICUK.js";
import {
  FooterVisibilityService,
  init_footer_visibility_service
} from "./chunk-RFJR6ZIS.js";
import {
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  __decorate,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  concat,
  core_exports,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  filter,
  init_core,
  init_esm,
  init_operators,
  init_tslib_es6,
  inject,
  map,
  of,
  signal,
  skip,
  startWith,
  take,
  takeUntil,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-AHETUCJG.js";
import {
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/destinations/destinations.component.html
var destinations_component_default;
var init_destinations_component = __esm({
  "angular:jit:template:src/app/pages/destinations/destinations.component.html"() {
    destinations_component_default = `<body #container class="mat-typography dark">

  <div class="switch-wrap">
    <div id="switch" #switcher class="hover-target">
      <div id="circle"></div>
    </div>
  </div>
  
  

  
  <div class="section">
    <div class="case-study-wrapper-container">
      <ul #list class="case-study-wrapper" *ngFor="let destination of destinations">
        <li class="case-study-name">
          <a href="#" class="hover-target" [routerLink]="['/explore', destination.id]">{{ destination.destinationName }}</a>
        </li>
      </ul>
    </div>
    <ul class="case-study-images">
      <li *ngFor="let destination of destinations; let i = index">
        <div class="img-hero-background">
          <span *ngFor="let img of destination.destinationImage">
            <div class="image-wrapper">
              <img [src]="img" alt="">
              <div class="image-overlay"></div>
            </div>
          </span>
        </div>        
        <div class="hero-number-back">{{ i + 1 }}</div>
        <div class="hero-number">{{ i + 1 }}</div>
        <div class="hero-number-fixed">{{ destinations.length }}</div>
      </li>
    </ul>
  </div>
  
  
  <a href="https://themeforest.net/user/ig_design/portfolio" class="link-to-portfolio hover-target" target="_blank"></a>
  </body>
  `;
  }
});

// angular:jit:style:src/app/pages/destinations/destinations.component.css
var destinations_component_default2;
var init_destinations_component2 = __esm({
  "angular:jit:style:src/app/pages/destinations/destinations.component.css"() {
    destinations_component_default2 = '/* src/app/pages/destinations/destinations.component.css */\nbody {\n  width: 100%;\n  height: 100vh;\n  background: #1f2029;\n  overflow: hidden;\n  cursor: none;\n}\n.cursor,\n.cursor2,\n.cursor3 {\n  position: fixed;\n  border-radius: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  pointer-events: none;\n  left: -100px;\n  top: 50%;\n  mix-blend-mode: difference;\n}\n.cursor {\n  background-color: #fff;\n  height: 0;\n  width: 0;\n  z-index: 99999;\n}\n.cursor2,\n.cursor3 {\n  height: 36px;\n  width: 36px;\n  z-index: 99998;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n.cursor2.hover,\n.cursor3.hover {\n  -webkit-transform: scale(2) translateX(-25%) translateY(-25%);\n  transform: scale(2) translateX(-25%) translateY(-25%);\n  border: none;\n}\n.cursor2 {\n  border: 2px solid #fff;\n  box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);\n}\n.cursor2.hover {\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);\n}\n.section {\n  position: relative;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  height: 100vh;\n}\n.case-study-wrapper-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  width: auto;\n  margin: 0;\n  padding: 0;\n  transform: translate(-50%, -50%);\n  list-style-type: none;\n  overflow-y: auto;\n  max-height: 80vh;\n  scrollbar-width: thin;\n  scrollbar-color: #8167a9 #1f2029;\n}\n.case-study-wrapper {\n  top: 10%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.case-study-wrapper .case-study-name {\n  margin: 0 auto;\n  text-align: center;\n}\nli::marker {\n  content: none !important;\n}\n.case-study-wrapper .case-study-name a {\n  position: relative;\n  list-style-type: none;\n  margin: 0 auto;\n  display: inline-block;\n  text-align: center;\n  padding: 0;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-family: "Poppins", sans-serif;\n  font-size: 8vh;\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: 3px;\n  color: #4a4a52;\n  text-decoration: none;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.case-study-wrapper .case-study-name a:hover {\n  text-decoration: none;\n}\n.case-study-wrapper .case-study-name.active a {\n  color: #fff;\n}\n.case-study-wrapper .case-study-name a:before {\n  position: absolute;\n  content: "";\n  left: 50%;\n  bottom: 0;\n  height: 6px;\n  width: 0;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      45deg,\n      #f19872,\n      #e86c9a);\n  -webkit-transition: all 200ms linear;\n  transition: all 200ms linear;\n}\n.case-study-wrapper .case-study-name:nth-child(2) a:before {\n  background:\n    linear-gradient(\n      45deg,\n      #0947db,\n      #07d89d);\n}\n.case-study-wrapper .case-study-name:nth-child(3) a:before {\n  background:\n    linear-gradient(\n      45deg,\n      #ee2d29,\n      #f8ae2c);\n}\n.case-study-wrapper .case-study-name:nth-child(4) a:before {\n  background:\n    linear-gradient(\n      45deg,\n      #3a3d98,\n      #6f22b9);\n}\n.case-study-wrapper .case-study-name.active a:before {\n  width: 100%;\n}\n.case-study-images {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  z-index: 2;\n}\n.case-study-images li {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  list-style: none;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.case-study-images li .img-hero-background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  list-style: none;\n  opacity: 0;\n  -webkit-transform: translateY(60px);\n  transform: translateY(60px);\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.case-study-images li.show .img-hero-background {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n.case-study-images li .hero-number {\n  position: absolute;\n  bottom: 25px;\n  left: 50%;\n  width: 40px;\n  margin-left: -70px;\n  display: block;\n  letter-spacing: 2px;\n  text-align: center;\n  list-style: none;\n  opacity: 0;\n  font-size: 13px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n  z-index: 6;\n  -webkit-transform: translateY(100%);\n  transform: translateY(100%);\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.case-study-images li .hero-number-fixed {\n  position: absolute;\n  bottom: 25px;\n  left: 50%;\n  margin-left: 30px;\n  width: 40px;\n  text-align: center;\n  display: block;\n  letter-spacing: 2px;\n  list-style: none;\n  font-size: 13px;\n  font-family: "Poppins", sans-serif;\n  font-weight: 300;\n  line-height: 1;\n  color: #fff;\n  z-index: 6;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.case-study-images li .hero-number-fixed:before {\n  position: absolute;\n  content: "";\n  top: 50%;\n  left: -60px;\n  width: 60px;\n  height: 1px;\n  z-index: 1;\n  background-color: rgba(255, 255, 255, 0.4);\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n.case-study-images li.show .hero-number {\n  opacity: 1;\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n.case-study-images li.show .hero-number-back {\n  opacity: 1;\n}\n.case-study-images li .img-hero-background span img {\n  width: 85%;\n  height: 85%;\n  margin-top: 5%;\n  margin-left: 5%;\n  display: block;\n  transform: scale(0.6, 1.7);\n  align-items: center;\n  transform-origin: center top;\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n}\n.image-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.image-wrapper img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.image-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  pointer-events: none;\n}\n.image-wrapper:hover .image-overlay {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.case-study-images li.show .img-hero-background span img {\n  transform: scale(1);\n}\n@media (max-width: 991px) {\n  .case-study-images li .hero-number-back {\n    font-size: 26vw;\n  }\n}\n@media (max-width: 767px) {\n  .case-study-wrapper .case-study-name a {\n    font-size: 26px;\n    letter-spacing: 1px;\n  }\n  .case-study-images li .hero-number-back {\n    font-size: 32vw;\n  }\n}\n@media (max-width: 580px) {\n  .case-study-images li:nth-child(1) .img-hero-background span,\n  .case-study-images li:nth-child(2) .img-hero-background span,\n  .case-study-images li:nth-child(3) .img-hero-background span,\n  .case-study-images li:nth-child(4) .img-hero-background span {\n    width: calc(100% - 40px);\n    top: 50%;\n    left: 20px;\n    transform: translateY(-50%);\n  }\n}\n.switch-wrap {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 1000;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n#switch,\n#circle {\n  cursor: pointer;\n  -webkit-transition: all 300ms linear;\n  transition: all 300ms linear;\n}\n#switch {\n  width: 70px;\n  height: 8px;\n  margin: 0 auto;\n  text-align: center;\n  border-radius: 27px;\n  position: relative;\n  display: inline-block;\n}\n#circle {\n  position: absolute;\n  top: -11px;\n  left: 0;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n}\n.switched {\n  border-color: #8167a9 !important;\n  background: #000 !important;\n}\n.switched #circle {\n  left: 44px;\n  background: #000;\n}\nbody.light {\n  background: #f2f5f5;\n}\nbody.light .cursor {\n  mix-blend-mode: normal;\n}\nbody.light .cursor2 {\n  border: 2px solid #000;\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);\n  mix-blend-mode: normal;\n}\nbody.light .cursor2.hover {\n  background: rgba(0, 0, 0, 0.15);\n  box-shadow: 0 0 0 rgba(255, 255, 255, 0.2);\n  border-color: transparent;\n  mix-blend-mode: normal;\n}\nbody.light .case-study-images li .hero-number-back {\n  -webkit-text-stroke: 4px #ccc;\n}\nbody.light .case-study-images li .hero-number {\n  color: #212121;\n}\nbody.light .case-study-images li .hero-number-fixed {\n  color: #212121;\n}\nbody.light .case-study-images li .hero-number-fixed:before {\n  background-color: rgba(0, 0, 0, 0.4);\n}\nbody.light .case-study-wrapper .case-study-name a {\n  color: #777777;\n}\nbody.light .case-study-wrapper .case-study-name.active a {\n  color: #000;\n}\n.link-to-portfolio {\n  position: fixed;\n  top: 30px;\n  right: 30px;\n  z-index: 100;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border-radius: 3px;\n  background-position: center center;\n  background-size: cover;\n  background-image: url(#);\n  transition:\n    opacity 0.2s,\n    border-radius 0.2s,\n    box-shadow 0.2s;\n  transition-timing-function: ease-out;\n}\n.link-to-portfolio:hover {\n  opacity: 0.8;\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0);\n}\n/*# sourceMappingURL=destinations.component.css.map */\n';
  }
});

// node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var init_fake_event_detection_DWOdFTFz = __esm({
  "node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs
var SHIFT, CONTROL, ALT, META, MAC_META;
var init_keycodes_CpHkExLC = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs"() {
    "use strict";
    SHIFT = 16;
    CONTROL = 17;
    ALT = 18;
    META = 91;
    MAC_META = 224;
  }
});

// node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
var shadowDomIsSupported;
var init_shadow_dom_B0oHn41l = __esm({
  "node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs
var hasV8BreakIterator, Platform;
var init_platform_DNDzkVcI = __esm({
  "node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    try {
      hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
    } catch {
      hasV8BreakIterator = false;
    }
    Platform = class _Platform {
      _platformId = inject(PLATFORM_ID);
      // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention
      /** Whether the Angular application is being rendered in the browser. */
      isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
      /** Whether the current browser is Microsoft Edge. */
      EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */
      TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
      /** Whether the current rendering engine is Blink. */
      BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.
      /** Whether the current rendering engine is WebKit. */
      WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */
      IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.
      /** Whether the current browser is Firefox. */
      FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.
      ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.
      /** Whether the current browser is Safari. */
      SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Platform, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Platform, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Platform, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/passive-listeners-esHZRgIN.mjs
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var supportsPassiveEvents;
var init_passive_listeners_esHZRgIN = __esm({
  "node_modules/@angular/cdk/fesm2022/passive-listeners-esHZRgIN.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
var init_element_x4z00URv = __esm({
  "node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs"() {
    "use strict";
    init_core();
  }
});

// node_modules/@angular/cdk/fesm2022/focus-monitor-DLjkiju1.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, TOUCH_BUFFER_MS, modalityEventListenerOptions, InputModalityDetector, FocusMonitorDetectionMode, FOCUS_MONITOR_DEFAULT_OPTIONS, captureEventListenerOptions, FocusMonitor, CdkMonitorFocus;
var init_focus_monitor_DLjkiju1 = __esm({
  "node_modules/@angular/cdk/fesm2022/focus-monitor-DLjkiju1.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_fake_event_detection_DWOdFTFz();
    init_keycodes_CpHkExLC();
    init_shadow_dom_B0oHn41l();
    init_platform_DNDzkVcI();
    init_passive_listeners_esHZRgIN();
    init_element_x4z00URv();
    INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
    INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
      ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
    };
    TOUCH_BUFFER_MS = 650;
    modalityEventListenerOptions = {
      passive: true,
      capture: true
    };
    InputModalityDetector = class _InputModalityDetector {
      _platform = inject(Platform);
      _listenerCleanups;
      /** Emits whenever an input modality is detected. */
      modalityDetected;
      /** Emits when the input modality changes. */
      modalityChanged;
      /** The most recently detected input modality. */
      get mostRecentModality() {
        return this._modality.value;
      }
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */
      _mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
      _modality = new BehaviorSubject(null);
      /** Options for this InputModalityDetector. */
      _options;
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */
      _lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */
      _onKeydown = (event) => {
        if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
          return;
        }
        this._modality.next("keyboard");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onMousedown = (event) => {
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        }
        this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onTouchstart = (event) => {
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next("keyboard");
          return;
        }
        this._lastTouchMs = Date.now();
        this._modality.next("touch");
        this._mostRecentTarget = _getEventTarget(event);
      };
      constructor() {
        const ngZone = inject(NgZone);
        const document2 = inject(DOCUMENT);
        const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, { optional: true });
        this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
        this.modalityDetected = this._modality.pipe(skip(1));
        this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
        if (this._platform.isBrowser) {
          const renderer = inject(RendererFactory2).createRenderer(null, null);
          this._listenerCleanups = ngZone.runOutsideAngular(() => {
            return [
              renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions),
              renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions),
              renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)
            ];
          });
        }
      }
      ngOnDestroy() {
        this._modality.complete();
        this._listenerCleanups?.forEach((cleanup) => cleanup());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InputModalityDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InputModalityDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: InputModalityDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    (function(FocusMonitorDetectionMode2) {
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
    })(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
    FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
    captureEventListenerOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    FocusMonitor = class _FocusMonitor {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _inputModalityDetector = inject(InputModalityDetector);
      /** The focus origin that the next focus event is a result of. */
      _origin = null;
      /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
      _lastFocusOrigin;
      /** Whether the window has just been focused. */
      _windowFocused = false;
      /** The timeout id of the window focus timeout. */
      _windowFocusTimeoutId;
      /** The timeout id of the origin clearing timeout. */
      _originTimeoutId;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */
      _originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */
      _elementInfo = /* @__PURE__ */ new Map();
      /** The number of elements currently being monitored. */
      _monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */
      _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
      /**
       * The specified detection mode, used for attributing the origin of a focus
       * event.
       */
      _detectionMode;
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _windowFocusListener = () => {
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
      };
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT, { optional: true });
      /** Subject for stopping our InputModalityDetector subscription. */
      _stopInputModalityDetector = new Subject();
      constructor() {
        const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
          optional: true
        });
        this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
      }
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _rootNodeFocusAndBlurListener = (event) => {
        const target = _getEventTarget(event);
        for (let element = target; element; element = element.parentElement) {
          if (event.type === "focus") {
            this._onFocus(event, element);
          } else {
            this._onBlur(event, element);
          }
        }
      };
      monitor(element, checkChildren = false) {
        const nativeElement = coerceElement(element);
        if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
          return of();
        }
        const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
        const cachedInfo = this._elementInfo.get(nativeElement);
        if (cachedInfo) {
          if (checkChildren) {
            cachedInfo.checkChildren = true;
          }
          return cachedInfo.subject;
        }
        const info = {
          checkChildren,
          subject: new Subject(),
          rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject;
      }
      stopMonitoring(element) {
        const nativeElement = coerceElement(element);
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
          elementInfo.subject.complete();
          this._setClasses(nativeElement);
          this._elementInfo.delete(nativeElement);
          this._removeGlobalListeners(elementInfo);
        }
      }
      focusVia(element, origin, options) {
        const nativeElement = coerceElement(element);
        const focusedElement = this._getDocument().activeElement;
        if (nativeElement === focusedElement) {
          this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
        } else {
          this._setOrigin(origin);
          if (typeof nativeElement.focus === "function") {
            nativeElement.focus(options);
          }
        }
      }
      ngOnDestroy() {
        this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
      }
      /** Access injected document if available or fallback to global document reference */
      _getDocument() {
        return this._document || document;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        const doc = this._getDocument();
        return doc.defaultView || window;
      }
      _getFocusOrigin(focusEventTarget) {
        if (this._origin) {
          if (this._originFromTouchInteraction) {
            return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
          } else {
            return this._origin;
          }
        }
        if (this._windowFocused && this._lastFocusOrigin) {
          return this._lastFocusOrigin;
        }
        if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
          return "mouse";
        }
        return "program";
      }
      /**
       * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
       * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
       * handle a focus event following a touch interaction, we need to determine whether (1) the focus
       * event was directly caused by the touch interaction or (2) the focus event was caused by a
       * subsequent programmatic focus call triggered by the touch interaction.
       * @param focusEventTarget The target of the focus event under examination.
       */
      _shouldBeAttributedToTouch(focusEventTarget) {
        return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
      }
      /**
       * Sets the focus classes on the element based on the given focus origin.
       * @param element The element to update the classes on.
       * @param origin The focus origin.
       */
      _setClasses(element, origin) {
        element.classList.toggle("cdk-focused", !!origin);
        element.classList.toggle("cdk-touch-focused", origin === "touch");
        element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
        element.classList.toggle("cdk-mouse-focused", origin === "mouse");
        element.classList.toggle("cdk-program-focused", origin === "program");
      }
      /**
       * Updates the focus origin. If we're using immediate detection mode, we schedule an async
       * function to clear the origin at the end of a timeout. The duration of the timeout depends on
       * the origin being set.
       * @param origin The origin to set.
       * @param isFromInteraction Whether we are setting the origin from an interaction event.
       */
      _setOrigin(origin, isFromInteraction = false) {
        this._ngZone.runOutsideAngular(() => {
          this._origin = origin;
          this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
          if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
            clearTimeout(this._originTimeoutId);
            const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
            this._originTimeoutId = setTimeout(() => this._origin = null, ms);
          }
        });
      }
      /**
       * Handles focus events on a registered element.
       * @param event The focus event.
       * @param element The monitored element.
       */
      _onFocus(event, element) {
        const elementInfo = this._elementInfo.get(element);
        const focusEventTarget = _getEventTarget(event);
        if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
          return;
        }
        this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
      }
      /**
       * Handles blur events on a registered element.
       * @param event The blur event.
       * @param element The monitored element.
       */
      _onBlur(event, element) {
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
          return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo, null);
      }
      _emitOrigin(info, origin) {
        if (info.subject.observers.length) {
          this._ngZone.run(() => info.subject.next(origin));
        }
      }
      _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
          return;
        }
        const rootNode = elementInfo.rootNode;
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
          this._ngZone.runOutsideAngular(() => {
            rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          });
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        if (++this._monitoredElementCount === 1) {
          this._ngZone.runOutsideAngular(() => {
            const window2 = this._getWindow();
            window2.addEventListener("focus", this._windowFocusListener);
          });
          this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
            this._setOrigin(
              modality,
              true
              /* isFromInteraction */
            );
          });
        }
      }
      _removeGlobalListeners(elementInfo) {
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
          const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
          if (rootNodeFocusListeners > 1) {
            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
          } else {
            rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            this._rootNodeFocusListenerCount.delete(rootNode);
          }
        }
        if (!--this._monitoredElementCount) {
          const window2 = this._getWindow();
          window2.removeEventListener("focus", this._windowFocusListener);
          this._stopInputModalityDetector.next();
          clearTimeout(this._windowFocusTimeoutId);
          clearTimeout(this._originTimeoutId);
        }
      }
      /** Updates all the state on an element once its focus origin has changed. */
      _originChanged(element, origin, elementInfo) {
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo, origin);
        this._lastFocusOrigin = origin;
      }
      /**
       * Collects the `MonitoredElementInfo` of a particular element and
       * all of its ancestors that have enabled `checkChildren`.
       * @param element Element from which to start the search.
       */
      _getClosestElementsInfo(element) {
        const results = [];
        this._elementInfo.forEach((info, currentElement) => {
          if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
            results.push([currentElement, info]);
          }
        });
        return results;
      }
      /**
       * Returns whether an interaction is likely to have come from the user clicking the `label` of
       * an `input` or `textarea` in order to focus it.
       * @param focusEventTarget Target currently receiving focus.
       */
      _isLastInteractionFromInputLabel(focusEventTarget) {
        const { _mostRecentTarget: mostRecentTarget, mostRecentModality } = this._inputModalityDetector;
        if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
          return false;
        }
        const labels = focusEventTarget.labels;
        if (labels) {
          for (let i = 0; i < labels.length; i++) {
            if (labels[i].contains(mostRecentTarget)) {
              return true;
            }
          }
        }
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FocusMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkMonitorFocus = class _CdkMonitorFocus {
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _monitorSubscription;
      _focusOrigin = null;
      cdkFocusChange = new EventEmitter();
      constructor() {
      }
      get focusOrigin() {
        return this._focusOrigin;
      }
      ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
          this._focusOrigin = origin;
          this.cdkFocusChange.emit(origin);
        });
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (this._monitorSubscription) {
          this._monitorSubscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkMonitorFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkMonitorFocus, isStandalone: true, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkMonitorFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
        exportAs: "cdkMonitorFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkFocusChange: [{
      type: Output
    }] } });
  }
});

// node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs
var appsWithLoaders, _CdkPrivateStyleLoader;
var init_style_loader_B2sGQXxD = __esm({
  "node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs"() {
    "use strict";
    init_core();
    init_core();
    appsWithLoaders = /* @__PURE__ */ new WeakMap();
    _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
      _appRef;
      _injector = inject(Injector);
      _environmentInjector = inject(EnvironmentInjector);
      /**
       * Loads a set of styles.
       * @param loader Component which will be instantiated to load the styles.
       */
      load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
          data = { loaders: /* @__PURE__ */ new Set(), refs: [] };
          appsWithLoaders.set(appRef, data);
          appRef.onDestroy(() => {
            appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
            appsWithLoaders.delete(appRef);
          });
        }
        if (!data.loaders.has(loader)) {
          data.loaders.add(loader);
          data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkPrivateStyleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/private.mjs
var _VisuallyHiddenLoader;
var init_private = __esm({
  "node_modules/@angular/cdk/fesm2022/private.mjs"() {
    "use strict";
    init_core();
    init_core();
    _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __VisuallyHiddenLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __VisuallyHiddenLoader, isStandalone: true, selector: "ng-component", exportAs: ["cdkVisuallyHidden"], ngImport: core_exports, template: "", isInline: true, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _VisuallyHiddenLoader, decorators: [{
      type: Component,
      args: [{ exportAs: "cdkVisuallyHidden", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"] }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
var init_array_I1yfCXUO = __esm({
  "node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
var mediaQueriesForWebkitCompatibility, mediaQueryStyleNode, MediaMatcher, BreakpointObserver;
var init_breakpoints_observer_QutrMj4x = __esm({
  "node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform_DNDzkVcI();
    init_array_I1yfCXUO();
    mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
    MediaMatcher = class _MediaMatcher {
      _platform = inject(Platform);
      _nonce = inject(CSP_NONCE, { optional: true });
      /** The internal matchMedia method to return back a MediaQueryList like object. */
      _matchMedia;
      constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
          // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window)
        ) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       */
      matchMedia(query) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
          createEmptyStyleRule(query, this._nonce);
        }
        return this._matchMedia(query);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MediaMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MediaMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MediaMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BreakpointObserver = class _BreakpointObserver {
      _mediaMatcher = inject(MediaMatcher);
      _zone = inject(NgZone);
      /**  A map of all media queries currently being listened for. */
      _queries = /* @__PURE__ */ new Map();
      /** A subject for all other observables to takeUntil based on. */
      _destroySubject = new Subject();
      constructor() {
      }
      /** Completes the active subject, signalling to all other observables to complete. */
      ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
      }
      /**
       * Whether one or more media queries match the current viewport size.
       * @param value One or more media queries to check.
       * @returns Whether any of the media queries match.
       */
      isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
      }
      /**
       * Gets an observable of results for the given queries that will emit new results for any changes
       * in matching of the given queries.
       * @param value One or more media queries to check.
       * @returns A stream of matches for the given queries.
       */
      observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map((query) => this._registerQuery(query).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((breakpointStates) => {
          const response = {
            matches: false,
            breakpoints: {}
          };
          breakpointStates.forEach(({ matches, query }) => {
            response.matches = response.matches || matches;
            response.breakpoints[query] = matches;
          });
          return response;
        }));
      }
      /** Registers a specific query to be listened for. */
      _registerQuery(query) {
        if (this._queries.has(query)) {
          return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        const queryObservable = new Observable((observer) => {
          const handler = (e) => this._zone.run(() => observer.next(e));
          mql.addListener(handler);
          return () => {
            mql.removeListener(handler);
          };
        }).pipe(startWith(mql), map(({ matches }) => ({ query, matches })), takeUntil(this._destroySubject));
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BreakpointObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BreakpointObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BreakpointObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule;
var init_observers = __esm({
  "node_modules/@angular/cdk/fesm2022/observers.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element_x4z00URv();
    MutationObserverFactory = class _MutationObserverFactory {
      create(callback) {
        return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MutationObserverFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MutationObserverFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MutationObserverFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ContentObserver = class _ContentObserver {
      _mutationObserverFactory = inject(MutationObserverFactory);
      /** Keeps track of the existing MutationObservers so they can be reused. */
      _observedElements = /* @__PURE__ */ new Map();
      _ngZone = inject(NgZone);
      constructor() {
      }
      ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
      }
      observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
          const stream = this._observeElement(element);
          const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
            this._ngZone.run(() => {
              observer.next(records);
            });
          });
          return () => {
            subscription.unsubscribe();
            this._unobserveElement(element);
          };
        });
      }
      /**
       * Observes the given element by using the existing MutationObserver if available, or creating a
       * new one if not.
       */
      _observeElement(element) {
        return this._ngZone.runOutsideAngular(() => {
          if (!this._observedElements.has(element)) {
            const stream = new Subject();
            const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
          } else {
            this._observedElements.get(element).count++;
          }
          return this._observedElements.get(element).stream;
        });
      }
      /**
       * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
       * observing this element.
       */
      _unobserveElement(element) {
        if (this._observedElements.has(element)) {
          this._observedElements.get(element).count--;
          if (!this._observedElements.get(element).count) {
            this._cleanupObserver(element);
          }
        }
      }
      /** Clean up the underlying MutationObserver for the specified element. */
      _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
          const { observer, stream } = this._observedElements.get(element);
          if (observer) {
            observer.disconnect();
          }
          stream.complete();
          this._observedElements.delete(element);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ContentObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ContentObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ContentObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkObserveContent = class _CdkObserveContent {
      _contentObserver = inject(ContentObserver);
      _elementRef = inject(ElementRef);
      /** Event emitted for each change in the element's content. */
      event = new EventEmitter();
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._disabled ? this._unsubscribe() : this._subscribe();
      }
      _disabled = false;
      /** Debounce interval for emitting the changes. */
      get debounce() {
        return this._debounce;
      }
      set debounce(value) {
        this._debounce = coerceNumberProperty(value);
        this._subscribe();
      }
      _debounce;
      _currentSubscription = null;
      constructor() {
      }
      ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
          this._subscribe();
        }
      }
      ngOnDestroy() {
        this._unsubscribe();
      }
      _subscribe() {
        this._unsubscribe();
        const stream = this._contentObserver.observe(this._elementRef);
        this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
      }
      _unsubscribe() {
        this._currentSubscription?.unsubscribe();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkObserveContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkObserveContent, isStandalone: true, selector: "[cdkObserveContent]", inputs: { disabled: ["cdkObserveContentDisabled", "disabled", booleanAttribute], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkObserveContent, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkObserveContent]",
        exportAs: "cdkObserveContent"
      }]
    }], ctorParameters: () => [], propDecorators: { event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }], disabled: [{
      type: Input,
      args: [{ alias: "cdkObserveContentDisabled", transform: booleanAttribute }]
    }], debounce: [{
      type: Input
    }] } });
    ObserversModule = class _ObserversModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ObserversModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _ObserversModule, imports: [CdkObserveContent], exports: [CdkObserveContent] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ObserversModule, providers: [MutationObserverFactory] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ObserversModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkObserveContent],
        exports: [CdkObserveContent],
        providers: [MutationObserverFactory]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/a11y-module-DHa4AVFz.mjs
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var InteractivityChecker, FocusTrap, FocusTrapFactory, CdkTrapFocus, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, uniqueIds, LiveAnnouncer, CdkAriaLive, HighContrastMode, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS, HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, HighContrastModeDetector, A11yModule;
var init_a11y_module_DHa4AVFz = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y-module-DHa4AVFz.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_focus_monitor_DLjkiju1();
    init_platform_DNDzkVcI();
    init_shadow_dom_B0oHn41l();
    init_style_loader_B2sGQXxD();
    init_private();
    init_breakpoints_observer_QutrMj4x();
    init_observers();
    InteractivityChecker = class _InteractivityChecker {
      _platform = inject(Platform);
      constructor() {
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param element Element to be checked.
       * @returns Whether the element is disabled.
       */
      isDisabled(element) {
        return element.hasAttribute("disabled");
      }
      /**
       * Gets whether an element is visible for the purposes of interactivity.
       *
       * This will capture states like `display: none` and `visibility: hidden`, but not things like
       * being clipped by an `overflow: hidden` parent or being outside the viewport.
       *
       * @returns Whether the element is visible.
       */
      isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
      }
      /**
       * Gets whether an element can be reached via Tab key.
       * Assumes that the element has already been checked with isFocusable.
       *
       * @param element Element to be checked.
       * @returns Whether the element is tabbable.
       */
      isTabbable(element) {
        if (!this._platform.isBrowser) {
          return false;
        }
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
          if (getTabIndexValue(frameElement) === -1) {
            return false;
          }
          if (!this.isVisible(frameElement)) {
            return false;
          }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute("contenteditable")) {
          return tabIndexValue !== -1;
        }
        if (nodeName === "iframe" || nodeName === "object") {
          return false;
        }
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
          return false;
        }
        if (nodeName === "audio") {
          if (!element.hasAttribute("controls")) {
            return false;
          }
          return tabIndexValue !== -1;
        }
        if (nodeName === "video") {
          if (tabIndexValue === -1) {
            return false;
          }
          if (tabIndexValue !== null) {
            return true;
          }
          return this._platform.FIREFOX || element.hasAttribute("controls");
        }
        return element.tabIndex >= 0;
      }
      /**
       * Gets whether an element can be focused by the user.
       *
       * @param element Element to be checked.
       * @param config The config object with options to customize this method's behavior
       * @returns Whether the element is focusable.
       */
      isFocusable(element, config) {
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InteractivityChecker, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InteractivityChecker, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: InteractivityChecker, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    FocusTrap = class {
      _element;
      _checker;
      _ngZone;
      _document;
      _injector;
      _startAnchor;
      _endAnchor;
      _hasAttached = false;
      // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
      startAnchorListener = () => this.focusLastTabbableElement();
      endAnchorListener = () => this.focusFirstTabbableElement();
      /** Whether the focus trap is active. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(value, this._startAnchor);
          this._toggleAnchorTabIndex(value, this._endAnchor);
        }
      }
      _enabled = true;
      constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._injector = _injector;
        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /** Destroys the focus trap by cleaning up the anchors. */
      destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
          startAnchor.removeEventListener("focus", this.startAnchorListener);
          startAnchor.remove();
        }
        if (endAnchor) {
          endAnchor.removeEventListener("focus", this.endAnchorListener);
          endAnchor.remove();
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
      }
      /**
       * Inserts the anchors into the DOM. This is usually done automatically
       * in the constructor, but can be deferred for cases like directives with `*ngIf`.
       * @returns Whether the focus trap managed to attach successfully. This may not be the case
       * if the target element isn't currently in the DOM.
       */
      attachAnchors() {
        if (this._hasAttached) {
          return true;
        }
        this._ngZone.runOutsideAngular(() => {
          if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
            this._startAnchor.addEventListener("focus", this.startAnchorListener);
          }
          if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
            this._endAnchor.addEventListener("focus", this.endAnchorListener);
          }
        });
        if (this._element.parentNode) {
          this._element.parentNode.insertBefore(this._startAnchor, this._element);
          this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
          this._hasAttached = true;
        }
        return this._hasAttached;
      }
      /**
       * Waits for the zone to stabilize, then focuses the first tabbable element.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusInitialElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusInitialElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the first tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusFirstTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the last tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusLastTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
        });
      }
      /**
       * Get the specified boundary element of the trapped region.
       * @param bound The boundary to get (start or end of trapped region).
       * @returns The boundary element.
       */
      _getRegionBoundary(bound) {
        const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          for (let i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            }
          }
        }
        if (bound == "start") {
          return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
      }
      /**
       * Focuses the element that should be focused when the focus trap is initialized.
       * @returns Whether focus was moved successfully.
       */
      focusInitialElement(options) {
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
        if (redirectToElement) {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
            console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
          }
          if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
            console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
          }
          if (!this._checker.isFocusable(redirectToElement)) {
            const focusableChild = this._getFirstTabbableElement(redirectToElement);
            focusableChild?.focus(options);
            return !!focusableChild;
          }
          redirectToElement.focus(options);
          return true;
        }
        return this.focusFirstTabbableElement(options);
      }
      /**
       * Focuses the first tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusFirstTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("start");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Focuses the last tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusLastTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("end");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Checks whether the focus trap has successfully been attached.
       */
      hasAttached() {
        return this._hasAttached;
      }
      /** Get the first tabbable element from a DOM subtree (inclusive). */
      _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Get the last tabbable element from a DOM subtree (inclusive). */
      _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = children.length - 1; i >= 0; i--) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Creates an anchor element. */
      _createAnchor() {
        const anchor = this._document.createElement("div");
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add("cdk-visually-hidden");
        anchor.classList.add("cdk-focus-trap-anchor");
        anchor.setAttribute("aria-hidden", "true");
        return anchor;
      }
      /**
       * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
       * @param isEnabled Whether the focus trap is enabled.
       * @param anchor Anchor on which to toggle the tabindex.
       */
      _toggleAnchorTabIndex(isEnabled, anchor) {
        isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
      }
      /**
       * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
       * @param enabled: Whether the anchors should trap Tab.
       */
      toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(enabled, this._startAnchor);
          this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
      }
      /** Executes a function when the zone is stable. */
      _executeOnStable(fn) {
        if (this._injector) {
          afterNextRender(fn, { injector: this._injector });
        } else {
          setTimeout(fn);
        }
      }
    };
    FocusTrapFactory = class _FocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _document = inject(DOCUMENT);
      _injector = inject(Injector);
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param element The element around which focus will be trapped.
       * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @returns The created focus trap instance.
       */
      create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkTrapFocus = class _CdkTrapFocus {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      /** Underlying FocusTrap instance. */
      focusTrap;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */
      _previouslyFocusedElement = null;
      /** Whether the focus trap is active. */
      get enabled() {
        return this.focusTrap?.enabled || false;
      }
      set enabled(value) {
        if (this.focusTrap) {
          this.focusTrap.enabled = value;
        }
      }
      /**
       * Whether the directive should automatically move focus into the trapped region upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
      autoCapture;
      constructor() {
        const platform = inject(Platform);
        if (platform.isBrowser) {
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
      }
      ngOnDestroy() {
        this.focusTrap?.destroy();
        if (this._previouslyFocusedElement) {
          this._previouslyFocusedElement.focus();
          this._previouslyFocusedElement = null;
        }
      }
      ngAfterContentInit() {
        this.focusTrap?.attachAnchors();
        if (this.autoCapture) {
          this._captureFocus();
        }
      }
      ngDoCheck() {
        if (this.focusTrap && !this.focusTrap.hasAttached()) {
          this.focusTrap.attachAnchors();
        }
      }
      ngOnChanges(changes) {
        const autoCaptureChange = changes["autoCapture"];
        if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
          this._captureFocus();
        }
      }
      _captureFocus() {
        this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
        this.focusTrap?.focusInitialElementWhenReady();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTrapFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTrapFocus, isStandalone: true, selector: "[cdkTrapFocus]", inputs: { enabled: ["cdkTrapFocus", "enabled", booleanAttribute], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute] }, exportAs: ["cdkTrapFocus"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTrapFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTrapFocus]",
        exportAs: "cdkTrapFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { enabled: [{
      type: Input,
      args: [{ alias: "cdkTrapFocus", transform: booleanAttribute }]
    }], autoCapture: [{
      type: Input,
      args: [{ alias: "cdkTrapFocusAutoCapture", transform: booleanAttribute }]
    }] } });
    LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
      providedIn: "root",
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
    uniqueIds = 0;
    LiveAnnouncer = class _LiveAnnouncer {
      _ngZone = inject(NgZone);
      _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
        optional: true
      });
      _liveElement;
      _document = inject(DOCUMENT);
      _previousTimeout;
      _currentPromise;
      _currentResolve;
      constructor() {
        const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, { optional: true });
        this._liveElement = elementToken || this._createLiveElement();
      }
      announce(message, ...args) {
        const defaultOptions = this._defaultOptions;
        let politeness;
        let duration;
        if (args.length === 1 && typeof args[0] === "number") {
          duration = args[0];
        } else {
          [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
          politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
        }
        if (duration == null && defaultOptions) {
          duration = defaultOptions.duration;
        }
        this._liveElement.setAttribute("aria-live", politeness);
        if (this._liveElement.id) {
          this._exposeAnnouncerToModals(this._liveElement.id);
        }
        return this._ngZone.runOutsideAngular(() => {
          if (!this._currentPromise) {
            this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
          }
          clearTimeout(this._previousTimeout);
          this._previousTimeout = setTimeout(() => {
            this._liveElement.textContent = message;
            if (typeof duration === "number") {
              this._previousTimeout = setTimeout(() => this.clear(), duration);
            }
            this._currentResolve?.();
            this._currentPromise = this._currentResolve = void 0;
          }, 100);
          return this._currentPromise;
        });
      }
      /**
       * Clears the current text from the announcer element. Can be used to prevent
       * screen readers from reading the text out again while the user is going
       * through the page landmarks.
       */
      clear() {
        if (this._liveElement) {
          this._liveElement.textContent = "";
        }
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        this._liveElement?.remove();
        this._liveElement = null;
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }
      _createLiveElement() {
        const elementClass = "cdk-live-announcer-element";
        const previousElements = this._document.getElementsByClassName(elementClass);
        const liveEl = this._document.createElement("div");
        for (let i = 0; i < previousElements.length; i++) {
          previousElements[i].remove();
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add("cdk-visually-hidden");
        liveEl.setAttribute("aria-atomic", "true");
        liveEl.setAttribute("aria-live", "polite");
        liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
        this._document.body.appendChild(liveEl);
        return liveEl;
      }
      /**
       * Some browsers won't expose the accessibility node of the live announcer element if there is an
       * `aria-modal` and the live announcer is outside of it. This method works around the issue by
       * pointing the `aria-owns` of all modals to the live announcer element.
       */
      _exposeAnnouncerToModals(id) {
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
          const modal = modals[i];
          const ariaOwns = modal.getAttribute("aria-owns");
          if (!ariaOwns) {
            modal.setAttribute("aria-owns", id);
          } else if (ariaOwns.indexOf(id) === -1) {
            modal.setAttribute("aria-owns", ariaOwns + " " + id);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LiveAnnouncer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LiveAnnouncer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: LiveAnnouncer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAriaLive = class _CdkAriaLive {
      _elementRef = inject(ElementRef);
      _liveAnnouncer = inject(LiveAnnouncer);
      _contentObserver = inject(ContentObserver);
      _ngZone = inject(NgZone);
      /** The aria-live politeness level to use when announcing messages. */
      get politeness() {
        return this._politeness;
      }
      set politeness(value) {
        this._politeness = value === "off" || value === "assertive" ? value : "polite";
        if (this._politeness === "off") {
          if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
          }
        } else if (!this._subscription) {
          this._subscription = this._ngZone.runOutsideAngular(() => {
            return this._contentObserver.observe(this._elementRef).subscribe(() => {
              const elementText = this._elementRef.nativeElement.textContent;
              if (elementText !== this._previousAnnouncedText) {
                this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
                this._previousAnnouncedText = elementText;
              }
            });
          });
        }
      }
      _politeness = "polite";
      /** Time in milliseconds after which to clear out the announcer element. */
      duration;
      _previousAnnouncedText;
      _subscription;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      ngOnDestroy() {
        if (this._subscription) {
          this._subscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAriaLive, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkAriaLive, isStandalone: true, selector: "[cdkAriaLive]", inputs: { politeness: ["cdkAriaLive", "politeness"], duration: ["cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAriaLive, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAriaLive]",
        exportAs: "cdkAriaLive"
      }]
    }], ctorParameters: () => [], propDecorators: { politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }], duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }] } });
    (function(HighContrastMode2) {
      HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
      HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
      HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
    })(HighContrastMode || (HighContrastMode = {}));
    BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
    WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
    HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
    HighContrastModeDetector = class _HighContrastModeDetector {
      _platform = inject(Platform);
      /**
       * Figuring out the high contrast mode and adding the body classes can cause
       * some expensive layouts. This flag is used to ensure that we only do it once.
       */
      _hasCheckedHighContrastMode;
      _document = inject(DOCUMENT);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
          if (this._hasCheckedHighContrastMode) {
            this._hasCheckedHighContrastMode = false;
            this._applyBodyHighContrastModeCssClasses();
          }
        });
      }
      /** Gets the current high-contrast-mode for the page. */
      getHighContrastMode() {
        if (!this._platform.isBrowser) {
          return HighContrastMode.NONE;
        }
        const testElement = this._document.createElement("div");
        testElement.style.backgroundColor = "rgb(1,2,3)";
        testElement.style.position = "absolute";
        this._document.body.appendChild(testElement);
        const documentWindow = this._document.defaultView || window;
        const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
        const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
        testElement.remove();
        switch (computedColor) {
          // Pre Windows 11 dark theme.
          case "rgb(0,0,0)":
          // Windows 11 dark themes.
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return HighContrastMode.WHITE_ON_BLACK;
          // Pre Windows 11 light theme.
          case "rgb(255,255,255)":
          // Windows 11 light theme.
          case "rgb(255,250,239)":
            return HighContrastMode.BLACK_ON_WHITE;
        }
        return HighContrastMode.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
      _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
          const bodyClasses = this._document.body.classList;
          bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          this._hasCheckedHighContrastMode = true;
          const mode = this.getHighContrastMode();
          if (mode === HighContrastMode.BLACK_ON_WHITE) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
          } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _HighContrastModeDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _HighContrastModeDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: HighContrastModeDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    A11yModule = class _A11yModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _A11yModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus], exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: A11yModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
        exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/a11y.mjs
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ID_DELIMITER, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, nextId, AriaDescriber, ConfigurableFocusTrap, EventListenerFocusTrapInertStrategy, FOCUS_TRAP_INERT_STRATEGY, FocusTrapManager, ConfigurableFocusTrapFactory;
var init_a11y = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y.mjs"() {
    "use strict";
    init_a11y_module_DHa4AVFz();
    init_a11y_module_DHa4AVFz();
    init_core();
    init_core();
    init_platform_DNDzkVcI();
    init_style_loader_B2sGQXxD();
    init_private();
    ID_DELIMITER = " ";
    CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
    CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
    nextId = 0;
    AriaDescriber = class _AriaDescriber {
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      /** Map of all registered message elements that have been placed into the document. */
      _messageRegistry = /* @__PURE__ */ new Map();
      /** Container for all registered messages. */
      _messagesContainer = null;
      /** Unique ID for the service. */
      _id = `${nextId++}`;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
        this._id = inject(APP_ID) + "-" + nextId++;
      }
      describe(hostElement, message, role) {
        if (!this._canBeDescribed(hostElement, message)) {
          return;
        }
        const key = getKey(message, role);
        if (typeof message !== "string") {
          setMessageId(message, this._id);
          this._messageRegistry.set(key, { messageElement: message, referenceCount: 0 });
        } else if (!this._messageRegistry.has(key)) {
          this._createMessageElement(message, role);
        }
        if (!this._isElementDescribedByMessage(hostElement, key)) {
          this._addMessageReference(hostElement, key);
        }
      }
      removeDescription(hostElement, message, role) {
        if (!message || !this._isElementNode(hostElement)) {
          return;
        }
        const key = getKey(message, role);
        if (this._isElementDescribedByMessage(hostElement, key)) {
          this._removeMessageReference(hostElement, key);
        }
        if (typeof message === "string") {
          const registeredMessage = this._messageRegistry.get(key);
          if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(key);
          }
        }
        if (this._messagesContainer?.childNodes.length === 0) {
          this._messagesContainer.remove();
          this._messagesContainer = null;
        }
      }
      /** Unregisters all created message elements and removes the message container. */
      ngOnDestroy() {
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
        for (let i = 0; i < describedElements.length; i++) {
          this._removeCdkDescribedByReferenceIds(describedElements[i]);
          describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        this._messagesContainer?.remove();
        this._messagesContainer = null;
        this._messageRegistry.clear();
      }
      /**
       * Creates a new element in the visually hidden message container element with the message
       * as its content and adds it to the message registry.
       */
      _createMessageElement(message, role) {
        const messageElement = this._document.createElement("div");
        setMessageId(messageElement, this._id);
        messageElement.textContent = message;
        if (role) {
          messageElement.setAttribute("role", role);
        }
        this._createMessagesContainer();
        this._messagesContainer.appendChild(messageElement);
        this._messageRegistry.set(getKey(message, role), { messageElement, referenceCount: 0 });
      }
      /** Deletes the message element from the global messages container. */
      _deleteMessageElement(key) {
        this._messageRegistry.get(key)?.messageElement?.remove();
        this._messageRegistry.delete(key);
      }
      /** Creates the global container for all aria-describedby messages. */
      _createMessagesContainer() {
        if (this._messagesContainer) {
          return;
        }
        const containerClassName = "cdk-describedby-message-container";
        const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
        for (let i = 0; i < serverContainers.length; i++) {
          serverContainers[i].remove();
        }
        const messagesContainer = this._document.createElement("div");
        messagesContainer.style.visibility = "hidden";
        messagesContainer.classList.add(containerClassName);
        messagesContainer.classList.add("cdk-visually-hidden");
        if (!this._platform.isBrowser) {
          messagesContainer.setAttribute("platform", "server");
        }
        this._document.body.appendChild(messagesContainer);
        this._messagesContainer = messagesContainer;
      }
      /** Removes all cdk-describedby messages that are hosted through the element. */
      _removeCdkDescribedByReferenceIds(element) {
        const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
      }
      /**
       * Adds a message reference to the element using aria-describedby and increments the registered
       * message's reference count.
       */
      _addMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
        registeredMessage.referenceCount++;
      }
      /**
       * Removes a message reference from the element using aria-describedby
       * and decrements the registered message's reference count.
       */
      _removeMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      /** Returns true if the element has been described by the provided message ID. */
      _isElementDescribedByMessage(element, key) {
        const referenceIds = getAriaReferenceIds(element, "aria-describedby");
        const registeredMessage = this._messageRegistry.get(key);
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
      }
      /** Determines whether a message can be described on a particular element. */
      _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
          return false;
        }
        if (message && typeof message === "object") {
          return true;
        }
        const trimmedMessage = message == null ? "" : `${message}`.trim();
        const ariaLabel = element.getAttribute("aria-label");
        return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
      }
      /** Checks whether a node is an Element node. */
      _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AriaDescriber, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AriaDescriber, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: AriaDescriber, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    ConfigurableFocusTrap = class extends FocusTrap {
      _focusTrapManager;
      _inertStrategy;
      /** Whether the FocusTrap is enabled. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
          this._focusTrapManager.register(this);
        } else {
          this._focusTrapManager.deregister(this);
        }
      }
      constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
        super(_element, _checker, _ngZone, _document, config.defer, injector);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
      }
      /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
      destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
      }
    };
    EventListenerFocusTrapInertStrategy = class {
      /** Focus event handler. */
      _listener = null;
      /** Adds a document event listener that keeps focus inside the FocusTrap. */
      preventFocus(focusTrap) {
        if (this._listener) {
          focusTrap._document.removeEventListener("focus", this._listener, true);
        }
        this._listener = (e) => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
          focusTrap._document.addEventListener("focus", this._listener, true);
        });
      }
      /** Removes the event listener added in preventFocus. */
      allowFocus(focusTrap) {
        if (!this._listener) {
          return;
        }
        focusTrap._document.removeEventListener("focus", this._listener, true);
        this._listener = null;
      }
      /**
       * Refocuses the first element in the FocusTrap if the focus event target was outside
       * the FocusTrap.
       *
       * This is an event listener callback. The event listener is added in runOutsideAngular,
       * so all this code runs outside Angular as well.
       */
      _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
          setTimeout(() => {
            if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
              focusTrap.focusFirstTabbableElement();
            }
          });
        }
      }
    };
    FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
    FocusTrapManager = class _FocusTrapManager {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      _focusTrapStack = [];
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       */
      register(focusTrap) {
        this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
        let stack = this._focusTrapStack;
        if (stack.length) {
          stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
      }
      /**
       * Removes the FocusTrap from the stack, and activates the
       * FocusTrap that is the new top of the stack.
       */
      deregister(focusTrap) {
        focusTrap._disable();
        const stack = this._focusTrapStack;
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
          stack.splice(i, 1);
          if (stack.length) {
            stack[stack.length - 1]._enable();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapManager, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapManager, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FocusTrapManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusTrapManager = inject(FocusTrapManager);
      _document = inject(DOCUMENT);
      _inertStrategy;
      _injector = inject(Injector);
      constructor() {
        const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, { optional: true });
        this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      create(element, config = { defer: false }) {
        let configObject;
        if (typeof config === "boolean") {
          configObject = { defer: config };
        } else {
          configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ConfigurableFocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var DIR_DOCUMENT, RTL_LOCALE_PATTERN, Directionality;
var init_directionality_CChdj3az = __esm({
  "node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs"() {
    "use strict";
    init_core();
    init_core();
    DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
      providedIn: "root",
      factory: DIR_DOCUMENT_FACTORY
    });
    RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    Directionality = class _Directionality {
      /** The current 'ltr' or 'rtl' value. */
      get value() {
        return this.valueSignal();
      }
      /**
       * The current 'ltr' or 'rtl' value.
       */
      valueSignal = signal("ltr");
      /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
      change = new EventEmitter();
      constructor() {
        const _document = inject(DIR_DOCUMENT, { optional: true });
        if (_document) {
          const bodyDir = _document.body ? _document.body.dir : null;
          const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
        }
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Directionality, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Directionality, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Directionality, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir, BidiModule;
var init_bidi = __esm({
  "node_modules/@angular/cdk/fesm2022/bidi.mjs"() {
    "use strict";
    init_directionality_CChdj3az();
    init_core();
    init_core();
    Dir = class _Dir {
      /** Whether the `value` has been set to its initial value. */
      _isInitialized = false;
      /** Direction as passed in by the consumer. */
      _rawDir;
      /** Event emitted when the direction changes. */
      change = new EventEmitter();
      /** @docs-private */
      get dir() {
        return this.valueSignal();
      }
      set dir(value) {
        const previousValue = this.valueSignal();
        this.valueSignal.set(_resolveDirectionality(value));
        this._rawDir = value;
        if (previousValue !== this.valueSignal() && this._isInitialized) {
          this.change.emit(this.valueSignal());
        }
      }
      /** Current layout direction of the element. */
      get value() {
        return this.dir;
      }
      valueSignal = signal("ltr");
      /** Initialize once default value has been set. */
      ngAfterContentInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dir, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _Dir, isStandalone: true, selector: "[dir]", inputs: { dir: "dir" }, outputs: { change: "dirChange" }, host: { properties: { "attr.dir": "_rawDir" } }, providers: [{ provide: Directionality, useExisting: _Dir }], exportAs: ["dir"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Dir, decorators: [{
      type: Directive,
      args: [{
        selector: "[dir]",
        providers: [{ provide: Directionality, useExisting: Dir }],
        host: { "[attr.dir]": "_rawDir" },
        exportAs: "dir"
      }]
    }], propDecorators: { change: [{
      type: Output,
      args: ["dirChange"]
    }], dir: [{
      type: Input
    }] } });
    BidiModule = class _BidiModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule, imports: [Dir], exports: [Dir] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BidiModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Dir],
        exports: [Dir]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/common-module-cKSwHniA.mjs
var MATERIAL_SANITY_CHECKS, MatCommonModule;
var init_common_module_cKSwHniA = __esm({
  "node_modules/@angular/material/fesm2022/common-module-cKSwHniA.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_core();
    init_core();
    MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
      providedIn: "root",
      factory: () => true
    });
    MatCommonModule = class _MatCommonModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCommonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule], exports: [BidiModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule, BidiModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCommonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule],
        exports: [BidiModule]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/card.mjs
var MAT_CARD_CONFIG, MatCard, MatCardTitle, MatCardTitleGroup, MatCardContent, MatCardSubtitle, MatCardActions, MatCardHeader, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, CARD_DIRECTIVES, MatCardModule;
var init_card = __esm({
  "node_modules/@angular/material/fesm2022/card.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common_module_cKSwHniA();
    MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
    MatCard = class _MatCard {
      appearance;
      constructor() {
        const config = inject(MAT_CARD_CONFIG, { optional: true });
        this.appearance = config?.appearance || "raised";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCard, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatCard, isStandalone: true, selector: "mat-card", inputs: { appearance: "appearance" }, host: { properties: { "class.mat-mdc-card-outlined": 'appearance === "outlined"', "class.mdc-card--outlined": 'appearance === "outlined"', "class.mat-mdc-card-filled": 'appearance === "filled"', "class.mdc-card--filled": 'appearance === "filled"' }, classAttribute: "mat-mdc-card mdc-card" }, exportAs: ["matCard"], ngImport: core_exports, template: "<ng-content></ng-content>\n", styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCard, decorators: [{
      type: Component,
      args: [{ selector: "mat-card", host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"',
        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
        "[class.mdc-card--filled]": 'appearance === "filled"'
      }, exportAs: "matCard", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'] }]
    }], ctorParameters: () => [], propDecorators: { appearance: [{
      type: Input
    }] } });
    MatCardTitle = class _MatCardTitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardTitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardTitle, isStandalone: true, selector: "mat-card-title, [mat-card-title], [matCardTitle]", host: { classAttribute: "mat-mdc-card-title" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardTitle, decorators: [{
      type: Directive,
      args: [{
        selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
        host: { "class": "mat-mdc-card-title" }
      }]
    }] });
    MatCardTitleGroup = class _MatCardTitleGroup {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardTitleGroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardTitleGroup, isStandalone: true, selector: "mat-card-title-group", host: { classAttribute: "mat-mdc-card-title-group" }, ngImport: core_exports, template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardTitleGroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-card-title-group", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "mat-mdc-card-title-group" }, template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n' }]
    }] });
    MatCardContent = class _MatCardContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardContent, isStandalone: true, selector: "mat-card-content", host: { classAttribute: "mat-mdc-card-content" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardContent, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-content",
        host: { "class": "mat-mdc-card-content" }
      }]
    }] });
    MatCardSubtitle = class _MatCardSubtitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardSubtitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardSubtitle, isStandalone: true, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]", host: { classAttribute: "mat-mdc-card-subtitle" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardSubtitle, decorators: [{
      type: Directive,
      args: [{
        selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
        host: { "class": "mat-mdc-card-subtitle" }
      }]
    }] });
    MatCardActions = class _MatCardActions {
      // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
      // as to not conflict with the native `align` attribute.
      /** Position of the actions inside the card. */
      align = "start";
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardActions, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardActions, isStandalone: true, selector: "mat-card-actions", inputs: { align: "align" }, host: { properties: { "class.mat-mdc-card-actions-align-end": 'align === "end"' }, classAttribute: "mat-mdc-card-actions mdc-card__actions" }, exportAs: ["matCardActions"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardActions, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-actions",
        exportAs: "matCardActions",
        host: {
          "class": "mat-mdc-card-actions mdc-card__actions",
          "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }] } });
    MatCardHeader = class _MatCardHeader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardHeader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardHeader, isStandalone: true, selector: "mat-card-header", host: { classAttribute: "mat-mdc-card-header" }, ngImport: core_exports, template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-card-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "mat-mdc-card-header" }, template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n' }]
    }] });
    MatCardFooter = class _MatCardFooter {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardFooter, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardFooter, isStandalone: true, selector: "mat-card-footer", host: { classAttribute: "mat-mdc-card-footer" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardFooter, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-footer",
        host: { "class": "mat-mdc-card-footer" }
      }]
    }] });
    MatCardImage = class _MatCardImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardImage, isStandalone: true, selector: "[mat-card-image], [matCardImage]", host: { classAttribute: "mat-mdc-card-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-image], [matCardImage]",
        host: { "class": "mat-mdc-card-image mdc-card__media" }
      }]
    }] });
    MatCardSmImage = class _MatCardSmImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardSmImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardSmImage, isStandalone: true, selector: "[mat-card-sm-image], [matCardImageSmall]", host: { classAttribute: "mat-mdc-card-sm-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardSmImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-sm-image], [matCardImageSmall]",
        host: { "class": "mat-mdc-card-sm-image mdc-card__media" }
      }]
    }] });
    MatCardMdImage = class _MatCardMdImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardMdImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardMdImage, isStandalone: true, selector: "[mat-card-md-image], [matCardImageMedium]", host: { classAttribute: "mat-mdc-card-md-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardMdImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-md-image], [matCardImageMedium]",
        host: { "class": "mat-mdc-card-md-image mdc-card__media" }
      }]
    }] });
    MatCardLgImage = class _MatCardLgImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardLgImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardLgImage, isStandalone: true, selector: "[mat-card-lg-image], [matCardImageLarge]", host: { classAttribute: "mat-mdc-card-lg-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardLgImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-lg-image], [matCardImageLarge]",
        host: { "class": "mat-mdc-card-lg-image mdc-card__media" }
      }]
    }] });
    MatCardXlImage = class _MatCardXlImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardXlImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardXlImage, isStandalone: true, selector: "[mat-card-xl-image], [matCardImageXLarge]", host: { classAttribute: "mat-mdc-card-xl-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardXlImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-xl-image], [matCardImageXLarge]",
        host: { "class": "mat-mdc-card-xl-image mdc-card__media" }
      }]
    }] });
    MatCardAvatar = class _MatCardAvatar {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardAvatar, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatCardAvatar, isStandalone: true, selector: "[mat-card-avatar], [matCardAvatar]", host: { classAttribute: "mat-mdc-card-avatar" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardAvatar, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-avatar], [matCardAvatar]",
        host: { "class": "mat-mdc-card-avatar" }
      }]
    }] });
    CARD_DIRECTIVES = [
      MatCard,
      MatCardActions,
      MatCardAvatar,
      MatCardContent,
      MatCardFooter,
      MatCardHeader,
      MatCardImage,
      MatCardLgImage,
      MatCardMdImage,
      MatCardSmImage,
      MatCardSubtitle,
      MatCardTitle,
      MatCardTitleGroup,
      MatCardXlImage
    ];
    MatCardModule = class _MatCardModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardModule, imports: [
        MatCommonModule,
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        MatCardLgImage,
        MatCardMdImage,
        MatCardSmImage,
        MatCardSubtitle,
        MatCardTitle,
        MatCardTitleGroup,
        MatCardXlImage
      ], exports: [
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        MatCardLgImage,
        MatCardMdImage,
        MatCardSmImage,
        MatCardSubtitle,
        MatCardTitle,
        MatCardTitleGroup,
        MatCardXlImage,
        MatCommonModule
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCardModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCardModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, ...CARD_DIRECTIVES],
        exports: [CARD_DIRECTIVES, MatCommonModule]
      }]
    }] });
  }
});

// src/app/pages/destinations/destinations.component.ts
var DestinationsComponent;
var init_destinations_component3 = __esm({
  "src/app/pages/destinations/destinations.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_destinations_component();
    init_destinations_component2();
    init_core();
    init_card();
    init_common();
    init_router();
    init_travel_data_service();
    init_footer_visibility_service();
    init_gsap();
    DestinationsComponent = class DestinationsComponent2 {
      router;
      route;
      renderer;
      travelDataService;
      footerVisibilityService;
      destinations = [];
      list;
      listItems;
      container;
      cursor;
      cursor2;
      cursor3;
      switcher;
      activeIndex = 0;
      gridTemplateColumns = "";
      constructor(router, route, renderer, travelDataService, footerVisibilityService) {
        this.router = router;
        this.route = route;
        this.renderer = renderer;
        this.travelDataService = travelDataService;
        this.footerVisibilityService = footerVisibilityService;
      }
      ngOnInit() {
        this.destinations = this.travelDataService.getAllLocations();
        console.log(this.destinations);
        this.footerVisibilityService.setFooterVisibility(false);
      }
      ngOnDestroy() {
        this.footerVisibilityService.setFooterVisibility(true);
      }
      ngAfterViewInit() {
        this.resync();
        this.initCursorEffects();
        this.initHoverEffects();
        this.initLightDarkToggle();
        this.triggerFirstHover();
      }
      gsapAnimation() {
        gsapWithCSS.to(this.container.nativeElement, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        });
      }
      setActiveIndex(index) {
        this.activeIndex = index;
        const cols = new Array(this.destinations.length).fill("").map((_, i) => index === i ? "10fr" : "1fr").join(" ");
        this.gridTemplateColumns = cols;
      }
      resync() {
        const w = Math.max(...this.listItems.map((item) => item.nativeElement.offsetWidth));
        this.list.nativeElement.style.setProperty("--article-width", `${w}px`);
      }
      navigateToExplore(id) {
        this.router.navigate(["/explore", id]);
      }
      initCursorEffects() {
        this.renderer.listen("document", "mousemove", (event) => {
          const x = `${event.clientX}px`;
          const y = `${event.clientY}px`;
          this.setCursorPosition(this.cursor, x, y);
          this.setCursorPosition(this.cursor2, x, y);
          this.setCursorPosition(this.cursor3, x, y);
        });
      }
      setCursorPosition(elRef, x, y) {
        if (elRef?.nativeElement) {
          this.renderer.setStyle(elRef.nativeElement, "left", x);
          this.renderer.setStyle(elRef.nativeElement, "top", y);
        }
      }
      initHoverEffects() {
        const hoverTargets = document.querySelectorAll(".hover-target");
        hoverTargets.forEach((el) => {
          this.renderer.listen(el, "mouseover", () => {
            if (this.cursor2?.nativeElement) {
              this.cursor2.nativeElement.classList.add("hover");
            }
            if (this.cursor3?.nativeElement) {
              this.cursor3.nativeElement.classList.add("hover");
            }
          });
          this.renderer.listen(el, "mouseout", () => {
            if (this.cursor2?.nativeElement) {
              this.cursor2.nativeElement.classList.remove("hover");
            }
            if (this.cursor3?.nativeElement) {
              this.cursor3.nativeElement.classList.remove("hover");
            }
          });
        });
      }
      initLightDarkToggle() {
        this.renderer.listen(this.switcher.nativeElement, "click", () => {
          const body = document.body;
          if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
          } else if (body.classList.contains("dark")) {
            body.classList.remove("dark");
          } else {
            body.classList.add("light");
          }
          this.switcher.nativeElement.classList.toggle("switched");
        });
      }
      triggerFirstHover() {
        const names = document.querySelectorAll(".case-study-name");
        const images = document.querySelectorAll(".case-study-images li");
        names.forEach((name, index) => {
          this.renderer.listen(name, "mouseenter", () => {
            document.querySelector(".case-study-name.active")?.classList.remove("active");
            document.querySelector(".case-study-images li.show")?.classList.remove("show");
            name.classList.add("active");
            images[index].classList.add("show");
          });
        });
        names[0]?.dispatchEvent(new Event("mouseenter"));
      }
      static ctorParameters = () => [
        { type: Router },
        { type: ActivatedRoute },
        { type: Renderer2 },
        { type: TravelDataService },
        { type: FooterVisibilityService }
      ];
      static propDecorators = {
        list: [{ type: ViewChild, args: ["list"] }],
        listItems: [{ type: ViewChildren, args: ["listItem"] }],
        container: [{ type: ViewChild, args: ["container"] }],
        cursor: [{ type: ViewChild, args: ["cursor"] }],
        cursor2: [{ type: ViewChild, args: ["cursor2"] }],
        cursor3: [{ type: ViewChild, args: ["cursor3"] }],
        switcher: [{ type: ViewChild, args: ["switcher"] }],
        resync: [{ type: HostListener, args: ["window:resize"] }]
      };
    };
    DestinationsComponent = __decorate([
      Component({
        selector: "app-destinations",
        standalone: true,
        template: destinations_component_default,
        imports: [CommonModule, MatCardModule, RouterModule],
        styles: [destinations_component_default2]
      })
    ], DestinationsComponent);
  }
});

export {
  DestinationsComponent,
  init_destinations_component3 as init_destinations_component
};
//# sourceMappingURL=chunk-P7B3RFNX.js.map
