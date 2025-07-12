import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-AHETUCJG.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/components/footer/footer.component.html
var footer_component_default;
var init_footer_component = __esm({
  "angular:jit:template:src/app/components/footer/footer.component.html"() {
    footer_component_default = '<footer class="footer">\n  <div class="footer-overlay">    <div class="footer-logo">\n      <p>Experience the world like never before.</p>\n    </div>\n\n    <div class="footer-content">\n      <div class="footer-section">\n        <h3>COMPANY</h3>\n        <ul>\n          <li><a href="#">Contact Us</a></li>\n          <li><a href="#">Blogs</a></li>\n          <li><a href="#">FAQs</a></li>\n          <li><a href="#">About Us</a></li>\n        </ul>\n      </div>\n\n      <div class="footer-section">\n        <h3>REACH US</h3>\n        <p>helloexpllingo.com</p>\n        <p>Chat on WhatsApp</p>\n        <p>\u{1F4DE} +91 98765 43210</p>\n      </div>\n    </div>\n\n    <div class="footer-bottom">\n      <p>\xA9 2025 Expllingo. All Rights Reserved.</p>\n      <ul class="footer-links">\n        <li><a href="#">Privacy Policy</a></li>\n        <li><a href="#">Terms & Conditions</a></li>\n        <li><a href="#">Cancellation Policy</a></li>\n        <li><a href="#">Sitemap</a></li>\n      </ul>\n    </div>\n  </div>\n</footer>\n\n\n\n';
  }
});

// angular:jit:style:src/app/components/footer/footer.component.css
var footer_component_default2;
var init_footer_component2 = __esm({
  "angular:jit:style:src/app/components/footer/footer.component.css"() {
    footer_component_default2 = "/* src/app/components/footer/footer.component.css */\n.footer {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  background: url(https://res.cloudinary.com/djwss052h/image/upload/v1751042523/foot_xzh1wm.jpg) no-repeat center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 100% 2%;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n}\n.footer-overlay {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 50px 0;\n}\n.footer-logo {\n  text-align: center;\n}\n.footer-logo img {\n  width: 250px;\n  margin-bottom: 10px;\n}\n.footer-content {\n  display: flex;\n  justify-content: space-around;\n  width: 80%;\n  max-width: 1200px;\n  text-align: left;\n}\n.footer-section h3 {\n  font-size: 16px;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n}\n.footer-section ul {\n  list-style: none;\n  padding: 0;\n}\n.footer-section ul li {\n  margin-bottom: 5px;\n}\n.footer-section ul li a {\n  color: black;\n  text-decoration: none;\n  font-size: 14px;\n}\n.footer-section ul li a:hover {\n  text-decoration: underline;\n}\n.footer-bottom {\n  text-align: center;\n  font-size: 14px;\n  margin-top: 30px;\n}\n.footer-links {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n  padding: 0;\n}\n.footer-links li a {\n  color: black;\n  text-decoration: none;\n  font-size: 14px;\n}\n.footer-links li a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=footer.component.css.map */\n";
  }
});

// src/app/components/footer/footer.component.ts
var FooterComponent;
var init_footer_component3 = __esm({
  "src/app/components/footer/footer.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer_component();
    init_footer_component2();
    init_core();
    FooterComponent = class FooterComponent2 {
    };
    FooterComponent = __decorate([
      Component({
        selector: "app-footer",
        imports: [],
        template: footer_component_default,
        styles: [footer_component_default2]
      })
    ], FooterComponent);
  }
});

export {
  FooterComponent,
  init_footer_component3 as init_footer_component
};
//# sourceMappingURL=chunk-4SBHHN4N.js.map
