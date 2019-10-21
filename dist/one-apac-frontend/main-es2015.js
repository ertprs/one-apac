(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"app\" [@routeTransitionAnimation]=\"prepareRoute(outlet)\">\r\n  <app-header></app-header>\r\n  <router-outlet #outlet=\"outlet\"></router-outlet>\r\n  <app-navigation [@loginAnimation]=\"administrator.id ? 'show' : 'hide'\"></app-navigation>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"header\">\r\n  <i class=\"fab fa-facebook-messenger\"></i>\r\n  <div class=\"title oswald\">Dashboard</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"login\">\r\n  <div class=\"title roboto\">Please login to access your event dashboard.</div>\r\n  <form class=\"form\" id=\"form-login\">\r\n    <div class=\"fields\">\r\n      <input type=\"text\" placeholder=\"username\" required [(ngModel)]=\"form.username\" name=\"username\">\r\n      <input type=\"password\" placeholder=\"password\" required [(ngModel)]=\"form.password\" name=\"password\">\r\n    </div>\r\n    <button class=\"button oswald\" (click)=\"login()\">Login</button>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"navigation\">\r\n  <a class=\"navigation\" *ngFor=\"let navigation of navigations\" [routerLink]=\"navigation.url\" routerLinkActive=\"active\"\r\n    [routerLinkActiveOptions]=\"routerLinkActiveOptions\">\r\n    <i class={{navigation.iconClass}}></i>\r\n    <div class=\"navigation-description roboto\">\r\n      {{navigation.description}}\r\n    </div>\r\n  </a>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcast/broadcast.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcast/broadcast.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\" id=\"broadcast\">\r\n  <div class=\"content\">\r\n\r\n    <select class=\"select\" [(ngModel)]=\"selectedBroadcast\" (ngModelChange)=\"setSelectedBroadcastAsMessage()\">\r\n      <option value=\"\" disabled selected>Select broadcast message or type your own below</option>\r\n      <option *ngFor=\"let broadcast of broadcasts | async\" [ngValue]=\"broadcast\">\r\n        {{broadcast.description}}\r\n      </option>\r\n    </select>\r\n\r\n    <textarea class=\"textarea\" cols=\"30\" rows=\"20\" [(ngModel)]=\"message\" name=\"message\"></textarea>\r\n\r\n    <button class=\"button oswald\" (click)=\"sendBroadcast()\">Send Broadcast</button>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\" id=\"home\">\r\n  <app-login *ngIf=\"!administrator.id\"></app-login>\r\n  <div class=\"content\" [@loginAnimation]=\"administrator.id ? 'show' : 'hide'\">\r\n    <div class=\"oswald title\">\r\n      Welcome {{administrator.username}}!\r\n    </div>\r\n    <div class=\"roboto subtitle\">\r\n      If you need to login to another account, please <span class=\"logout-button\" (click)=\"logout()\">logout</span>\r\n      first. For any questions or\r\n      problems, please contact\r\n      the developer directly at kimkijung@icloud.com\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lip-sync-battle/lip-sync-battle.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lip-sync-battle/lip-sync-battle.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\" id=\"lip-sync-battle\">\n  <div class=\"content\">\n    <input class=\"vote-toggle\" type=\"checkbox\" *ngIf=\"voteStatus\" [(ngModel)]=\"voteStatus.isActive\"\n      (change)=\"setVoteStatus()\" />\n\n    <div class=\"vote-statistics\" *ngFor=\"let vote of votes | async\">\n      <div class=\"roboto vote-region\">{{vote.region}}: </div>\n      <div class=\"roboto vote-count\">{{vote.count}}</div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\" id=\"statistics\">\r\n  <div class=\"content\">\r\n\r\n    <div class=\"view\" *ngFor=\"let view of views | async\">\r\n      <div class=\"roboto view-description\">{{view.description}}: </div>\r\n      <div class=\"roboto view-count\">{{view.views}} view(s)</div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/animations/login/animation.ts":
/*!***********************************************!*\
  !*** ./src/app/animations/login/animation.ts ***!
  \***********************************************/
/*! exports provided: loginAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAnimation", function() { return loginAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const loginAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('loginAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: '0',
        color: 'rgba(0, 0, 0, 0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: '1',
        color: 'black'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in-out'))
]);


/***/ }),

/***/ "./src/app/animations/route-transition/animation.ts":
/*!**********************************************************!*\
  !*** ./src/app/animations/route-transition/animation.ts ***!
  \**********************************************************/
/*! exports provided: routeTransitionAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransitionAnimation", function() { return routeTransitionAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const routeTransitionAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeTransitionAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Broadcast => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('LipSyncBattle => Statistics', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('LipSyncBattle => Broadcast', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('LipSyncBattle => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Statistics => LipSyncBattle', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Statistics => Broadcast', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('Statistics => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_lip_sync_battle_lip_sync_battle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/lip-sync-battle/lip-sync-battle.component */ "./src/app/pages/lip-sync-battle/lip-sync-battle.component.ts");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "./src/app/pages/statistics/statistics.component.ts");
/* harmony import */ var _pages_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/broadcast/broadcast.component */ "./src/app/pages/broadcast/broadcast.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");









const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { animation: 'Home' }
    },
    {
        path: 'lip-sync-battle',
        component: _pages_lip_sync_battle_lip_sync_battle_component__WEBPACK_IMPORTED_MODULE_4__["LipSyncBattleComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { animation: 'LipSyncBattle' }
    },
    {
        path: 'statistics',
        component: _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__["StatisticsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { animation: 'Statistics' }
    },
    {
        path: 'broadcast',
        component: _pages_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_6__["BroadcastComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { animation: 'Broadcast' }
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#app {\n  min-height: -webkit-fill-available;\n  height: 100vh;\n  width: 100vw;\n  background-color: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxLaSBKdW5nIEtpbVxcRGVza3RvcFxcUHJvamVjdHNcXG9uZS1hcGFjLWZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FwcCB7XHJcbiAgbWluLWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG59IiwiI2FwcCB7XG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _animations_route_transition_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/route-transition/animation */ "./src/app/animations/route-transition/animation.ts");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _animations_login_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations/login/animation */ "./src/app/animations/login/animation.ts");





let AppComponent = class AppComponent {
    constructor(administratorService) {
        this.administratorService = administratorService;
    }
    ngOnInit() {
        this.administrator = this.administratorService.administrator;
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_animations_route_transition_animation__WEBPACK_IMPORTED_MODULE_2__["routeTransitionAnimation"], _animations_login_animation__WEBPACK_IMPORTED_MODULE_4__["loginAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "./src/app/pages/statistics/statistics.component.ts");
/* harmony import */ var _pages_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/broadcast/broadcast.component */ "./src/app/pages/broadcast/broadcast.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_lip_sync_battle_lip_sync_battle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/lip-sync-battle/lip-sync-battle.component */ "./src/app/pages/lip-sync-battle/lip-sync-battle.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _pages_broadcast_broadcast_component__WEBPACK_IMPORTED_MODULE_13__["BroadcastComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
            _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_12__["StatisticsComponent"],
            _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
            _pages_lip_sync_battle_lip_sync_battle_component__WEBPACK_IMPORTED_MODULE_15__["LipSyncBattleComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/administrator/administrator.ts":
/*!********************************************************!*\
  !*** ./src/app/classes/administrator/administrator.ts ***!
  \********************************************************/
/*! exports provided: Administrator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Administrator", function() { return Administrator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Administrator {
}


/***/ }),

/***/ "./src/app/classes/navigation/navigation.ts":
/*!**************************************************!*\
  !*** ./src/app/classes/navigation/navigation.ts ***!
  \**************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Navigation {
    constructor(description, iconClass, url) {
        this.description = description;
        this.iconClass = iconClass;
        this.url = url;
    }
}


/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: rgba(100, 120, 140, 0.5);\n  color: white;\n  font-size: 40px;\n  padding: 8px;\n}\n#header .title {\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxLaSBKdW5nIEtpbVxcRGVza3RvcFxcUHJvamVjdHNcXG9uZS1hcGFjLWZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSwwQ0FBQTtFQUVBLFlBQUE7RUFFQSxlQUFBO0VBRUEsWUFBQTtBQ0hGO0FES0U7RUFDRSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMjAsIDE0MCwgMC41KTtcclxuXHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICBmb250LXNpemU6IDQwcHg7XHJcblxyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG59IiwiI2hlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMjAsIDE0MCwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbiNoZWFkZXIgLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#login {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n#login .title {\n  margin: 24px;\n}\n#login .form .fields {\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXEtpIEp1bmcgS2ltXFxEZXNrdG9wXFxQcm9qZWN0c1xcb25lLWFwYWMtZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7QUNBRjtBREVFO0VBQ0UsWUFBQTtBQ0FKO0FESUk7RUFDRSxtQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICB3aWR0aDogMzAwcHg7XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybSB7XHJcbiAgICAuZmllbGRzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIjbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAwcHg7XG59XG4jbG9naW4gLnRpdGxlIHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuI2xvZ2luIC5mb3JtIC5maWVsZHMge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");



let LoginComponent = class LoginComponent {
    constructor(administratorService) {
        this.administratorService = administratorService;
        this.form = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
    }
    login() {
        this.loginSubscription = this.administratorService.login(this.form['username'], this.form['password'])
            .subscribe((response) => {
            return this.administratorService.setAdministrator(response);
        }, (error) => {
            return alert(error.error);
        }, () => {
            console.log(`Login complete! Welcome ${this.administratorService.administrator.username}.`);
            return;
        });
    }
    ngOnDestroy() {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#navigation {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: rgba(100, 120, 140, 0.5);\n}\n#navigation .navigation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: white;\n}\n#navigation .navigation i {\n  font-size: 24px;\n}\n#navigation .active {\n  transform: scale(1.2);\n  text-shadow: 0 0 2px white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcS2kgSnVuZyBLaW1cXERlc2t0b3BcXFByb2plY3RzXFxvbmUtYXBhYy1mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLDBDQUFBO0FDRkY7QURJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7QUNKSjtBRE1JO0VBQ0UsZUFBQTtBQ0pOO0FEUUU7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZpZ2F0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEyMCwgMTQwLCAwLjUpO1xyXG5cclxuICAubmF2aWdhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbn0iLCIjbmF2aWdhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMjAsIDE0MCwgMC41KTtcbn1cbiNuYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI25hdmlnYXRpb24gLm5hdmlnYXRpb24gaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiNuYXZpZ2F0aW9uIC5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRleHQtc2hhZG93OiAwIDAgMnB4IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");




let NavigationComponent = class NavigationComponent {
    constructor(administratorService, navigationService) {
        this.administratorService = administratorService;
        this.navigationService = navigationService;
    }
    ngOnInit() {
        this.administrator = this.administratorService.administrator;
        this.navigations = this.navigationService.navigations;
        this.routerLinkActiveOptions = {
            exact: true
        };
        return;
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"] },
    { type: _services_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");




let AuthGuard = class AuthGuard {
    constructor(administratorService, router) {
        this.administratorService = administratorService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.administratorService.administrator.id) {
            return true;
        }
        return this.router.parseUrl('/');
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_3__["AdministratorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/pages/broadcast/broadcast.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/broadcast/broadcast.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#broadcast .content {\n  display: flex;\n  flex-direction: column;\n}\n#broadcast .content .select {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 20px;\n  margin-bottom: 24px;\n  padding: 8px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);\n}\n#broadcast .content .textarea {\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnJvYWRjYXN0L0M6XFxVc2Vyc1xcS2kgSnVuZyBLaW1cXERlc2t0b3BcXFByb2plY3RzXFxvbmUtYXBhYy1mcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGJyb2FkY2FzdFxcYnJvYWRjYXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9icm9hZGNhc3QvYnJvYWRjYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDREo7QURHSTtFQUNFLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGVBQUE7RUFFQSxtQkFBQTtFQUVBLFlBQUE7RUFFQSxzQ0FBQTtBQ05OO0FEU0k7RUFDRSxtQkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnJvYWRjYXN0L2Jyb2FkY2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNicm9hZGNhc3Qge1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICAgICAgcGFkZGluZzogOHB4O1xyXG5cclxuICAgICAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRhcmVhIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIjYnJvYWRjYXN0IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNicm9hZGNhc3QgLmNvbnRlbnQgLnNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbiNicm9hZGNhc3QgLmNvbnRlbnQgLnRleHRhcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/broadcast/broadcast.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/broadcast/broadcast.component.ts ***!
  \********************************************************/
/*! exports provided: BroadcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastComponent", function() { return BroadcastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_broadcast_broadcast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/broadcast/broadcast.service */ "./src/app/services/broadcast/broadcast.service.ts");




let BroadcastComponent = class BroadcastComponent {
    constructor(administratorService, broadcastService) {
        this.administratorService = administratorService;
        this.broadcastService = broadcastService;
    }
    ngOnInit() {
        this.administrator = this.administratorService.administrator;
        this.broadcasts = this.getBroadcastMessages(this.administrator.eventId);
    }
    getBroadcastMessages(eventId) {
        return this.broadcastService.getBroadcasts(eventId);
    }
    sendBroadcast() {
        if (!this.message) {
            return alert('Message cannot be blank!');
        }
        this.broadcastSubscription = this.broadcastService.sendBroadcast(this.message, this.administrator.eventId)
            .subscribe((response) => {
            if (response['success']) {
                this.message = '';
            }
            return;
        }, (error) => {
            return alert(error.message);
        }, () => {
            console.log('Broadcast sent');
            return;
        });
    }
    setSelectedBroadcastAsMessage() {
        this.message = this.selectedBroadcast.message;
        return;
    }
    ngOnDestroy() {
        if (this.broadcastSubscription) {
            return this.broadcastSubscription.unsubscribe();
        }
    }
};
BroadcastComponent.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"] },
    { type: _services_broadcast_broadcast_service__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] }
];
BroadcastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-broadcast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./broadcast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/broadcast/broadcast.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./broadcast.component.scss */ "./src/app/pages/broadcast/broadcast.component.scss")).default]
    })
], BroadcastComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home .content {\n  display: flex;\n  flex-direction: column;\n}\n#home .content .title {\n  font-size: 32px;\n  font-weight: bold;\n}\n#home .content .subtitle {\n  font-size: 20px;\n}\n#home .content .subtitle .logout-button {\n  text-decoration: underline;\n}\n#home .content .subtitle .logout-button:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXEtpIEp1bmcgS2ltXFxEZXNrdG9wXFxQcm9qZWN0c1xcb25lLWFwYWMtZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7QUNETjtBREdNO0VBQ0UsMEJBQUE7QUNEUjtBREdRO0VBQ0UsZUFBQTtBQ0RWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUge1xyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgICAgLmxvZ291dC1idXR0b24ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIjaG9tZSAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jaG9tZSAuY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2hvbWUgLmNvbnRlbnQgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI2hvbWUgLmNvbnRlbnQgLnN1YnRpdGxlIC5sb2dvdXQtYnV0dG9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4jaG9tZSAuY29udGVudCAuc3VidGl0bGUgLmxvZ291dC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _animations_login_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/login/animation */ "./src/app/animations/login/animation.ts");




let HomeComponent = class HomeComponent {
    constructor(administratorService) {
        this.administratorService = administratorService;
    }
    ngOnInit() {
        this.administrator = this.administratorService.administrator;
    }
    logout() {
        return this.administratorService.logout();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        animations: [_animations_login_animation__WEBPACK_IMPORTED_MODULE_3__["loginAnimation"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/lip-sync-battle/lip-sync-battle.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/lip-sync-battle/lip-sync-battle.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#lip-sync-battle .content .vote-statistics {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 24px;\n}\n#lip-sync-battle .content .vote-statistics .vote-region {\n  width: 50%;\n  text-align: right;\n  font-style: italic;\n  white-space: pre;\n}\n#lip-sync-battle .content .vote-statistics .vote-count {\n  width: 50%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlwLXN5bmMtYmF0dGxlL0M6XFxVc2Vyc1xcS2kgSnVuZyBLaW1cXERlc2t0b3BcXFByb2plY3RzXFxvbmUtYXBhYy1mcm9udGVuZC9zcmNcXGFwcFxccGFnZXNcXGxpcC1zeW5jLWJhdHRsZVxcbGlwLXN5bmMtYmF0dGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9saXAtc3luYy1iYXR0bGUvbGlwLXN5bmMtYmF0dGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUVBLGVBQUE7QUNMTjtBRE9NO0VBQ0UsVUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ05SO0FEU007RUFDRSxVQUFBO0VBRUEsZ0JBQUE7QUNSUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpcC1zeW5jLWJhdHRsZS9saXAtc3luYy1iYXR0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGlwLXN5bmMtYmF0dGxlIHtcclxuICAuY29udGVudCB7XHJcblxyXG5cclxuICAgIC52b3RlLXN0YXRpc3RpY3Mge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAudm90ZS1yZWdpb24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudm90ZS1jb3VudCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIiNsaXAtc3luYy1iYXR0bGUgLmNvbnRlbnQgLnZvdGUtc3RhdGlzdGljcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4jbGlwLXN5bmMtYmF0dGxlIC5jb250ZW50IC52b3RlLXN0YXRpc3RpY3MgLnZvdGUtcmVnaW9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn1cbiNsaXAtc3luYy1iYXR0bGUgLmNvbnRlbnQgLnZvdGUtc3RhdGlzdGljcyAudm90ZS1jb3VudCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/lip-sync-battle/lip-sync-battle.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/lip-sync-battle/lip-sync-battle.component.ts ***!
  \********************************************************************/
/*! exports provided: LipSyncBattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LipSyncBattleComponent", function() { return LipSyncBattleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_lip_sync_battle_lip_sync_battle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lip-sync-battle/lip-sync-battle.service */ "./src/app/services/lip-sync-battle/lip-sync-battle.service.ts");



let LipSyncBattleComponent = class LipSyncBattleComponent {
    constructor(lipSyncBattleService) {
        this.lipSyncBattleService = lipSyncBattleService;
    }
    ngOnInit() {
        this.votes = this.lipSyncBattleService.getVotes();
        this.voteStatusSubscription = this.lipSyncBattleService.getVoteStatus()
            .subscribe((response) => {
            this.voteStatus = response;
            return;
        }, (error) => {
            return alert(error.error);
        }, () => {
            console.log(`Vote Status successfully retrieved. The status is ${this.voteStatus ? 'Active' : 'Locked'}`);
            return;
        });
    }
    setVoteStatus() {
        if (!confirm(`Are you sure you want to turn ${this.voteStatus.isActive ? 'off' : 'on'} the voting feature?`)) {
            return;
        }
        this.lipSyncBattleService.setVoteStatus(this.voteStatus)
            .subscribe((response) => {
            if (response['success']) {
                console.log('Voting status successfully set');
            }
            return;
        }, (error) => {
            return alert(error.error);
        }, () => {
            console.log('Voting status setting complete');
            return;
        });
    }
    ngOnDestroy() {
        if (this.voteStatusSubscription) {
            this.voteStatusSubscription.unsubscribe();
        }
    }
};
LipSyncBattleComponent.ctorParameters = () => [
    { type: _services_lip_sync_battle_lip_sync_battle_service__WEBPACK_IMPORTED_MODULE_2__["LipSyncBattleService"] }
];
LipSyncBattleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lip-sync-battle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lip-sync-battle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lip-sync-battle/lip-sync-battle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lip-sync-battle.component.scss */ "./src/app/pages/lip-sync-battle/lip-sync-battle.component.scss")).default]
    })
], LipSyncBattleComponent);



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pages/statistics/statistics.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#statistics .content .view {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-size: 14px;\n}\n#statistics .content .view .view-description {\n  width: 60%;\n  text-align: right;\n  font-style: italic;\n  white-space: pre;\n}\n#statistics .content .view .view-count {\n  width: 40%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdGlzdGljcy9DOlxcVXNlcnNcXEtpIEp1bmcgS2ltXFxEZXNrdG9wXFxQcm9qZWN0c1xcb25lLWFwYWMtZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxzdGF0aXN0aWNzXFxzdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBRUEsZUFBQTtBQ0pOO0FETU07RUFDRSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTFI7QURRTTtFQUNFLFVBQUE7RUFFQSxnQkFBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N0YXRpc3RpY3Mge1xyXG4gIC5jb250ZW50IHtcclxuXHJcbiAgICAudmlldyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgIC52aWV3LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG5cclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZpZXctY291bnQge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iLCIjc3RhdGlzdGljcyAuY29udGVudCAudmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4jc3RhdGlzdGljcyAuY29udGVudCAudmlldyAudmlldy1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA2MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG4jc3RhdGlzdGljcyAuY29udGVudCAudmlldyAudmlldy1jb3VudCB7XG4gIHdpZHRoOiA0MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/statistics/statistics.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.ts ***!
  \**********************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/administrator/administrator.service */ "./src/app/services/administrator/administrator.service.ts");
/* harmony import */ var _services_statistics_statistics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/statistics/statistics.service */ "./src/app/services/statistics/statistics.service.ts");




let StatisticsComponent = class StatisticsComponent {
    constructor(administratorService, statisticsService) {
        this.administratorService = administratorService;
        this.statisticsService = statisticsService;
    }
    ngOnInit() {
        this.administrator = this.administratorService.administrator;
        this.views = this.statisticsService.getViews(this.administrator.eventId);
    }
};
StatisticsComponent.ctorParameters = () => [
    { type: _services_administrator_administrator_service__WEBPACK_IMPORTED_MODULE_2__["AdministratorService"] },
    { type: _services_statistics_statistics_service__WEBPACK_IMPORTED_MODULE_3__["StatisticsService"] }
];
StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/statistics/statistics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./statistics.component.scss */ "./src/app/pages/statistics/statistics.component.scss")).default]
    })
], StatisticsComponent);



/***/ }),

/***/ "./src/app/services/administrator/administrator.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/administrator/administrator.service.ts ***!
  \*****************************************************************/
/*! exports provided: AdministratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministratorService", function() { return AdministratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _classes_administrator_administrator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/administrator/administrator */ "./src/app/classes/administrator/administrator.ts");
/* harmony import */ var _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation/navigation.service */ "./src/app/services/navigation/navigation.service.ts");






let AdministratorService = class AdministratorService {
    constructor(http, navigationService) {
        this.http = http;
        this.navigationService = navigationService;
        this.administrator = new _classes_administrator_administrator__WEBPACK_IMPORTED_MODULE_4__["Administrator"]();
    }
    login(username, password) {
        const body = {
            username,
            password
        };
        return this.http.post('/api/administrators/login', body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    setAdministrator(administrator) {
        this.administrator.id = administrator.id;
        this.administrator.username = administrator.username;
        this.administrator.eventId = administrator.eventId;
        this.navigationService.addLipSyncBattleNavigation(this.administrator.username);
        return;
    }
    logout() {
        this.administrator.id = null;
        this.administrator.username = null;
        this.administrator.eventId = null;
        return;
    }
};
AdministratorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _navigation_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"] }
];
AdministratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdministratorService);



/***/ }),

/***/ "./src/app/services/broadcast/broadcast.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/broadcast/broadcast.service.ts ***!
  \*********************************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BroadcastService = class BroadcastService {
    constructor(http) {
        this.http = http;
    }
    getBroadcasts(eventId) {
        return this.http.get('/api/broadcasts' + `?eventId=${eventId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    sendBroadcast(message, eventId) {
        return this.http.post('/api/broadcasts', { text: message, eventId })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
};
BroadcastService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BroadcastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BroadcastService);



/***/ }),

/***/ "./src/app/services/lip-sync-battle/lip-sync-battle.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/lip-sync-battle/lip-sync-battle.service.ts ***!
  \*********************************************************************/
/*! exports provided: LipSyncBattleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LipSyncBattleService", function() { return LipSyncBattleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let LipSyncBattleService = class LipSyncBattleService {
    constructor(http) {
        this.http = http;
    }
    getVotes() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(5000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(() => {
            return this.http.get('/api/votes');
        }));
    }
    getVoteStatus() {
        return this.http.get('/api/votes/status')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    setVoteStatus(voteStatus) {
        return this.http.put('/api/votes/status', voteStatus)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
};
LipSyncBattleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LipSyncBattleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LipSyncBattleService);



/***/ }),

/***/ "./src/app/services/navigation/navigation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/navigation/navigation.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/navigation/navigation */ "./src/app/classes/navigation/navigation.ts");



let NavigationService = class NavigationService {
    constructor() {
        this.navigations = new Array();
    }
    addLipSyncBattleNavigation(username) {
        this.resetNavigation();
        if (this.isOneApac(username)) {
            this.navigations.splice(1, 0, new _classes_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["Navigation"]('Lip Sync Battle', 'fas fa-microphone-alt', '/lip-sync-battle'));
        }
        return;
    }
    resetNavigation() {
        this.navigations.length = 0;
        this.navigations.push(new _classes_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["Navigation"]('Home', 'fas fa-home', '/'));
        this.navigations.push(new _classes_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["Navigation"]('Statistics', 'fas fa-chart-bar', '/statistics'));
        this.navigations.push(new _classes_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["Navigation"]('Broadcast', 'fas fa-bullhorn', '/broadcast'));
        return;
    }
    isOneApac(username) {
        if (username === 'oneapac') {
            return true;
        }
        return false;
    }
};
NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavigationService);



/***/ }),

/***/ "./src/app/services/statistics/statistics.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/statistics/statistics.service.ts ***!
  \***********************************************************/
/*! exports provided: StatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsService", function() { return StatisticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let StatisticsService = class StatisticsService {
    constructor(http) {
        this.http = http;
    }
    getViews(eventId) {
        return this.http.get('/api/views' + `?eventId=${eventId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
    getVotes() {
        return this.http.get('/api/votes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => data));
    }
};
StatisticsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StatisticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StatisticsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ki Jung Kim\Desktop\Projects\one-apac-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map