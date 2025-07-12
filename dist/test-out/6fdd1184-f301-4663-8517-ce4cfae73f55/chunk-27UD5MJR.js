import {
  init_common,
  isPlatformBrowser
} from "./chunk-OFHRICUK.js";
import {
  HttpClient,
  init_http
} from "./chunk-FI3XTIHJ.js";
import {
  BehaviorSubject,
  DOCUMENT,
  FactoryTarget,
  Inject,
  Injectable,
  PLATFORM_ID,
  __decorate,
  core_exports,
  init_core,
  init_esm,
  init_tslib_es6,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable
} from "./chunk-AHETUCJG.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// node_modules/ngx-cookie-service/fesm2022/ngx-cookie-service.mjs
var _CookieService, CookieService;
var init_ngx_cookie_service = __esm({
  "node_modules/ngx-cookie-service/fesm2022/ngx-cookie-service.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    _CookieService = class _CookieService {
      constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
      }
      /**
       * Get cookie Regular Expression
       *
       * @param name Cookie name
       * @returns property RegExp
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      static getCookieRegExp(name) {
        const escapedName = name.replace(/([\[\]{}()|=;+?,.*^$])/gi, "\\$1");
        return new RegExp("(?:^" + escapedName + "|;\\s*" + escapedName + ")=(.*?)(?:;|$)", "g");
      }
      /**
       * Gets the decoded version of an encoded component of a Uniform Resource Identifier (URI).
       *
       * @param encodedURIComponent A value representing an encoded URI component.
       *
       * @returns The decoded version of an encoded component of a Uniform Resource Identifier (URI).
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      static safeDecodeURIComponent(encodedURIComponent) {
        try {
          return decodeURIComponent(encodedURIComponent);
        } catch {
          return encodedURIComponent;
        }
      }
      /**
       * Return `true` if {@link Document} is accessible, otherwise return `false`
       *
       * @param name Cookie name
       * @returns boolean - whether cookie with specified name exists
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      check(name) {
        if (!this.documentIsAccessible) {
          return false;
        }
        name = encodeURIComponent(name);
        const regExp = _CookieService.getCookieRegExp(name);
        return regExp.test(this.document.cookie);
      }
      /**
       * Get cookies by name
       *
       * @param name Cookie name
       * @returns property value
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      get(name) {
        if (this.check(name)) {
          name = encodeURIComponent(name);
          const regExp = _CookieService.getCookieRegExp(name);
          const result = regExp.exec(this.document.cookie);
          return result && result[1] ? _CookieService.safeDecodeURIComponent(result[1]) : "";
        } else {
          return "";
        }
      }
      /**
       * Get all cookies in JSON format
       *
       * @returns all the cookies in json
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      getAll() {
        if (!this.documentIsAccessible) {
          return {};
        }
        const cookies = {};
        const document = this.document;
        if (document.cookie && document.cookie !== "") {
          document.cookie.split(";").forEach((currentCookie) => {
            const [cookieName, cookieValue] = currentCookie.split("=");
            cookies[_CookieService.safeDecodeURIComponent(cookieName.replace(/^ /, ""))] = _CookieService.safeDecodeURIComponent(cookieValue);
          });
        }
        return cookies;
      }
      set(name, value, expiresOrOptions, path, domain, secure, sameSite, partitioned) {
        if (!this.documentIsAccessible) {
          return;
        }
        if (typeof expiresOrOptions === "number" || expiresOrOptions instanceof Date || path || domain || secure || sameSite) {
          const optionsBody = {
            expires: expiresOrOptions,
            path,
            domain,
            secure,
            sameSite: sameSite ? sameSite : "Lax",
            partitioned
          };
          this.set(name, value, optionsBody);
          return;
        }
        let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";";
        const options = expiresOrOptions ? expiresOrOptions : {};
        if (options.expires) {
          if (typeof options.expires === "number") {
            const dateExpires = new Date((/* @__PURE__ */ new Date()).getTime() + options.expires * 1e3 * 60 * 60 * 24);
            cookieString += "expires=" + dateExpires.toUTCString() + ";";
          } else {
            cookieString += "expires=" + options.expires.toUTCString() + ";";
          }
        }
        if (options.path) {
          cookieString += "path=" + options.path + ";";
        }
        if (options.domain) {
          cookieString += "domain=" + options.domain + ";";
        }
        if (options.secure === false && options.sameSite === "None") {
          options.secure = true;
          console.warn(`[ngx-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`);
        }
        if (options.secure) {
          cookieString += "secure;";
        }
        if (!options.sameSite) {
          options.sameSite = "Lax";
        }
        cookieString += "sameSite=" + options.sameSite + ";";
        if (options.partitioned) {
          cookieString += "Partitioned;";
        }
        this.document.cookie = cookieString;
      }
      /**
       * Delete cookie by name at given path and domain. If not path is not specified, cookie at '/' path will be deleted.
       *
       * @param name   Cookie name
       * @param path   Cookie path
       * @param domain Cookie domain
       * @param secure Cookie secure flag
       * @param sameSite Cookie sameSite flag - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      delete(name, path, domain, secure, sameSite = "Lax") {
        if (!this.documentIsAccessible) {
          return;
        }
        const expiresDate = /* @__PURE__ */ new Date("Thu, 01 Jan 1970 00:00:01 GMT");
        this.set(name, "", { expires: expiresDate, path, domain, secure, sameSite });
      }
      /**
       * Delete all cookies at given path and domain. If not path is not specified, all cookies at '/' path will be deleted.
       *
       * @param path   Cookie path
       * @param domain Cookie domain
       * @param secure Is the Cookie secure
       * @param sameSite Is the cookie same site
       *
       * @author: Stepan Suvorov
       * @since: 1.0.0
       */
      deleteAll(path, domain, secure, sameSite = "Lax") {
        if (!this.documentIsAccessible) {
          return;
        }
        const cookies = this.getAll();
        for (const cookieName in cookies) {
          if (cookies.hasOwnProperty(cookieName)) {
            this.delete(cookieName, path, domain, secure, sameSite);
          }
        }
      }
    };
    _CookieService.\u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: core_exports, type: _CookieService, deps: [{ token: DOCUMENT }, { token: PLATFORM_ID }], target: FactoryTarget.Injectable });
    _CookieService.\u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.3", ngImport: core_exports, type: _CookieService, providedIn: "root" });
    CookieService = _CookieService;
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: core_exports, type: CookieService, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [{ type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: void 0, decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }] }] });
  }
});

// src/app/services/auth.service.ts
var AuthService;
var init_auth_service = __esm({
  "src/app/services/auth.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_esm();
    init_ngx_cookie_service();
    init_http();
    AuthService = class AuthService2 {
      cookieService;
      http;
      currentUserSubject = new BehaviorSubject(null);
      currentUser$ = this.currentUserSubject.asObservable();
      constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
        this.initializeAuthState();
      }
      initializeAuthState() {
        const token = sessionStorage.getItem("authToken");
        if (token) {
          this.fetchUserDetails(token);
        }
      }
      login(user, token) {
        const expiration = /* @__PURE__ */ new Date();
        expiration.setDate(expiration.getDate() + 7);
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        sessionStorage.setItem("authToken", token);
        this.currentUserSubject.next(user);
      }
      logout() {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("authToken");
        this.cookieService.delete("selectedLocations");
        this.currentUserSubject.next(null);
      }
      get isLoggedIn() {
        return !!sessionStorage.getItem("authToken");
      }
      getCurrentUser() {
        return this.currentUserSubject.value;
      }
      getUserId() {
        const user = sessionStorage.getItem("currentUser");
        return user ? JSON.parse(user).id : null;
      }
      fetchUserDetails(token) {
        this.http.get("http://128.199.31.140:5200/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` }
        }).subscribe((user) => {
          this.currentUserSubject.next(user);
        }, (error) => {
          console.error("Error fetching user details", error);
          this.logout();
        });
      }
      static ctorParameters = () => [
        { type: CookieService },
        { type: HttpClient }
      ];
    };
    AuthService = __decorate([
      Injectable({ providedIn: "root" })
    ], AuthService);
  }
});

export {
  CookieService,
  init_ngx_cookie_service,
  AuthService,
  init_auth_service
};
//# sourceMappingURL=chunk-27UD5MJR.js.map
