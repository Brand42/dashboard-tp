webpackJsonp([1,4],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentService = (function () {
    function ContentService() {
        this.pages = {
            'home': {
                title: 'Home',
                name: 'Julia',
                content: 'Some home content.',
                image: 'http://lorempixel.com/400/200'
            },
            'about': {
                title: 'About',
                subtitle: 'About Us',
                content: 'Some content about us.',
                image: 'http://lorempixel.com/600/300'
            },
            'contact': {
                title: 'Contact',
                subtitle: 'Contact Us',
                content: 'How to contact us.',
                image: 'http://lorempixel.com/220/100'
            }
        };
    }
    ContentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ContentService);
    return ContentService;
}());
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 338;


/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(479);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations__ = __webpack_require__(477);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.openClose = 'open';
        this.menuState = 'mobileOut';
    }
    AppComponent.prototype.hideAndShow = function () {
        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
        // alert('alert hideshow' + this.openClose);
    };
    AppComponent.prototype.hideShowMobileMenu = function () {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'mobileOut' ? 'mobileIn' : 'mobileOut';
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(559),
            styles: [__webpack_require__(533)],
            animations: [
                //  These animations are stored in ./shared/animations
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["a" /* sidemenu */],
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["b" /* mainContainer */],
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["c" /* hero */],
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["d" /* mobileMenu */],
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["e" /* mobileMenuIcon */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_page_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_content_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_directives_fullpage_directive__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_popover__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_hero_hero_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_content_dashboard_content_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_myprogress_myprogress_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_adminresults_adminresults_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_carousel__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_resultscarousel_resultscarousel_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_studysupport_studysupport_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_mycareer_mycareer_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_newsupdates_newsupdates_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_events_events_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_primarypush_primarypush_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_mobilemenu_mobilemenu_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_headermobile_headermobile_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_footer_footer_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_ad_ad_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_centrepicker_centrepicker_component__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_directives_fullpage_directive__["a" /* FullpageDirective */],
                __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_dashboard_content_dashboard_content_component__["a" /* DashboardContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_myprogress_myprogress_component__["a" /* MyprogressComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_adminresults_adminresults_component__["a" /* AdminresultsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_resultscarousel_resultscarousel_component__["a" /* ResultscarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_studysupport_studysupport_component__["a" /* StudysupportComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_mycareer_mycareer_component__["a" /* MycareerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_newsupdates_newsupdates_component__["a" /* NewsupdatesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_primarypush_primarypush_component__["a" /* PrimarypushComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_mobilemenu_mobilemenu_component__["a" /* MobilemenuComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_headermobile_headermobile_component__["a" /* HeadermobileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_ad_ad_component__["a" /* AdComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_centrepicker_centrepicker_component__["a" /* CentrepickerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // BrowserAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                // AppRoutingModule,
                __WEBPACK_IMPORTED_MODULE_8_ng2_popover__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_14_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_content_service__["a" /* ContentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdComponent = (function () {
    function AdComponent() {
    }
    AdComponent.prototype.ngOnInit = function () {
    };
    AdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-ad',
            template: __webpack_require__(560),
            styles: [__webpack_require__(534)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdComponent);
    return AdComponent;
}());
//# sourceMappingURL=ad.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminresultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminresultsComponent = (function () {
    function AdminresultsComponent() {
        this.adminresults = {
            title: 'Assessment and results',
            summary: 'View detailed results information on your qualification dashboard.'
        };
    }
    AdminresultsComponent.prototype.ngOnInit = function () {
    };
    AdminresultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-adminresults',
            template: __webpack_require__(561),
            styles: [__webpack_require__(535)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminresultsComponent);
    return AdminresultsComponent;
}());
//# sourceMappingURL=adminresults.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentrepickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CentrepickerComponent = (function () {
    function CentrepickerComponent() {
    }
    CentrepickerComponent.prototype.ngOnInit = function () {
    };
    CentrepickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-centrepicker',
            template: __webpack_require__(562),
            styles: [__webpack_require__(536)]
        }), 
        __metadata('design:paramtypes', [])
    ], CentrepickerComponent);
    return CentrepickerComponent;
}());
//# sourceMappingURL=centrepicker.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardContentComponent = (function () {
    function DashboardContentComponent() {
        this.dashcontent = {
            heading1: 'Download AAT approved logos',
            heading2: '3 saved bookmarks',
            heading3: 'Check out our SecureAssess support resources',
            heading4: 'My progress',
            heading5: 'Assessments and results',
            heading6: 'Study support',
            heading7: 'My career',
            heading8: 'News and updates'
        };
    }
    DashboardContentComponent.prototype.ngOnInit = function () {
    };
    DashboardContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-content',
            template: __webpack_require__(563),
            styles: [__webpack_require__(537)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardContentComponent);
    return DashboardContentComponent;
}());
//# sourceMappingURL=dashboard-content.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-events',
            template: __webpack_require__(564),
            styles: [__webpack_require__(538)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventsComponent);
    return EventsComponent;
}());
//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-footer',
            template: __webpack_require__(565),
            styles: [__webpack_require__(539)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.header = {
            firstname: 'John',
            lastname: 'Snow',
            content: 'Some home content.',
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-header',
            template: __webpack_require__(566),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadermobileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadermobileComponent = (function () {
    function HeadermobileComponent() {
    }
    HeadermobileComponent.prototype.ngOnInit = function () {
    };
    HeadermobileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-headermobile',
            template: __webpack_require__(567),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeadermobileComponent);
    return HeadermobileComponent;
}());
//# sourceMappingURL=headermobile.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-hero',
            template: __webpack_require__(568),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
//# sourceMappingURL=hero.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobilemenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobilemenuComponent = (function () {
    function MobilemenuComponent() {
    }
    MobilemenuComponent.prototype.ngOnInit = function () {
    };
    MobilemenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-mobilemenu',
            template: __webpack_require__(569),
            styles: [__webpack_require__(543)],
        }), 
        __metadata('design:paramtypes', [])
    ], MobilemenuComponent);
    return MobilemenuComponent;
}());
//# sourceMappingURL=mobilemenu.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycareerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MycareerComponent = (function () {
    function MycareerComponent() {
        this.mycareer = {
            heading: 'My career',
            summary: 'There are plenty of resources here to help you - whether you\'re working in finance, or searching for your first role.',
            link1: {
                title: 'Search for UK jobs',
                url: '/'
            },
            link2: {
                title: 'Online CV builder',
                url: '/'
            },
            link3: {
                title: 'Career support',
                url: '/'
            },
            link4: {
                title: 'Record work experience',
                url: '/'
            },
        };
    }
    MycareerComponent.prototype.ngOnInit = function () {
    };
    MycareerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-mycareer',
            template: __webpack_require__(570),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [])
    ], MycareerComponent);
    return MycareerComponent;
}());
//# sourceMappingURL=mycareer.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprogressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyprogressComponent = (function () {
    function MyprogressComponent() {
        // User input add new items functionality:
        // code.tutsplus.com/tutorials/creating-a-grocery-list-manager-using-angular-part-1-add-display-items--cms-28586
        // task: string;
        // tasks = [];
        //
        // onClick(){
        //   this.tasks.push({name: this.task});
        //   this.task = '';
        // }
        this.myprogress = {
            title: 'My progress',
            summary: 'Track your progress through your qualification. You may work through these learning areas in any order.',
            item1: {
                title: 'Accounts preparation',
                task: '2/2 tasks',
                status: 'Completed',
                module: {
                    title1: 'Lorem ipsum dolor - sit amet',
                    title2: 'Lorem ipsum dolor - sit amet'
                }
            },
            item2: {
                title: 'Accounting Systems and Controls',
                task: '4/4 tasks',
                status: 'Completed',
                module: {
                    title1: 'Lorem ipsum dolor - sit amet',
                    title2: 'Lorem ipsum dolor - sit amet',
                    title3: 'Lorem ipsum dolor - sit amet',
                    title4: 'Lorem ipsum dolor - sit amet'
                }
            },
            item3: {
                title: 'Management Accounting',
                task: '2/3 tasks',
                status: 'In progress',
                module: {
                    title1: 'Module 1 - Credit Management',
                    title2: 'Module 2 - Cash and Treasury Management',
                    title3: 'Module 3 - External auditing'
                }
            },
            item4: {
                title: 'Work Effectively in Finance',
                task: '0/2 tasks',
                status: 'Pending',
                module: {
                    title1: 'Lorem ipsum dolor - sit amet',
                    title2: 'Lorem ipsum dolor - sit amet'
                }
            }
        };
        this.my_Class = 'style1';
    }
    MyprogressComponent.prototype.toggle_class = function () {
        if (this.my_Class === 'style1') {
            this.my_Class = 'style2';
        }
        else {
            this.my_Class = 'style1';
        }
    };
    MyprogressComponent.prototype.ngOnInit = function () {
    };
    MyprogressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-myprogress',
            template: __webpack_require__(571),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [])
    ], MyprogressComponent);
    return MyprogressComponent;
}());
//# sourceMappingURL=myprogress.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsupdatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsupdatesComponent = (function () {
    function NewsupdatesComponent() {
    }
    NewsupdatesComponent.prototype.ngOnInit = function () {
    };
    NewsupdatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-newsupdates',
            template: __webpack_require__(572),
            styles: [__webpack_require__(546)]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsupdatesComponent);
    return NewsupdatesComponent;
}());
//# sourceMappingURL=newsupdates.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimarypushComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrimarypushComponent = (function () {
    function PrimarypushComponent() {
    }
    PrimarypushComponent.prototype.ngOnInit = function () {
    };
    PrimarypushComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-primarypush',
            template: __webpack_require__(573),
            styles: [__webpack_require__(547)]
        }), 
        __metadata('design:paramtypes', [])
    ], PrimarypushComponent);
    return PrimarypushComponent;
}());
//# sourceMappingURL=primarypush.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultscarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultscarouselComponent = (function () {
    function ResultscarouselComponent() {
    }
    ResultscarouselComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 12000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: false,
            custom: 'banner'
        };
    };
    ResultscarouselComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    ResultscarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-resultscarousel',
            template: __webpack_require__(574),
            styles: [__webpack_require__(548)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResultscarouselComponent);
    return ResultscarouselComponent;
}());
//# sourceMappingURL=resultscarousel.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudysupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// This was for a ngFor loop
// const studySupportContent = [
//   {title: 'Search by unit', imageUrl: '/assets/img/studysupport/search-by-unit.png'},
//   {title: 'Green Light tests', imageUrl: '/assets/img/studysupport/green-light.png'},
//   {title: 'Guidance', imageUrl: '/assets/img/studysupport/guidance.png'},
//   {title: 'E-Learning', imageUrl: '/assets/img/studysupport/e-learning.png'},
//   {title: 'Sample assessments', imageUrl: '/assets/img/studysupport/sample-assess.png'},
//   {title: 'Events and networking', imageUrl: '/assets/img/studysupport/events.png'}
// ];
var StudysupportComponent = (function () {
    // This was for a ngFor loop
    // supportContent = studySupportContent;
    // public studylist = [
    //   'stuff1',
    //   'stuff2',
    //   'stuff3'
    // ];
    function StudysupportComponent() {
        this.studysupport = {
            heading: 'Study support',
            summary: 'Access study support resources for all areas of your qualification.',
            card1: {
                title: 'Search for study support',
                imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/search-by-unit.png'
            },
            card2: {
                title: 'Study tips on AAT Comment',
                imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/green-light.png'
            },
            card3: {
                title: 'Guidance',
                imageUrl: '/assets/img/studysupport/guidance.png'
            },
            card4: {
                title: 'Essential study support (ebook)',
                imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/e-learning.png'
            },
            card5: {
                title: 'Ask a question in our forums',
                imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/sample-assess.png'
            },
            card6: {
                title: 'Events and networking',
                imageUrl: 'https://knowclive.github.io/dashboard/assets/img/studysupport/events.png'
            },
        };
    }
    StudysupportComponent.prototype.ngOnInit = function () {
    };
    StudysupportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-studysupport',
            template: __webpack_require__(575),
            styles: [__webpack_require__(549)]
        }), 
        __metadata('design:paramtypes', [])
    ], StudysupportComponent);
    return StudysupportComponent;
}());
//# sourceMappingURL=studysupport.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(447);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = (function () {
    function PageComponent(route, contentService) {
        this.route = route;
        this.contentService = contentService;
    }
    PageComponent.prototype.ngOnInit = function () {
        var pageData = this.route.snapshot.data['page'];
        this.page = this.contentService.pages[pageData];
    };
    PageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page',
            template: __webpack_require__(576),
            styles: [__webpack_require__(550)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]) === 'function' && _b) || Object])
    ], PageComponent);
    return PageComponent;
    var _a, _b;
}());
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sidemenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mobileMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mobileMenuIcon; });

// https://www.udemy.com/the-complete-angular-master-class/learn/v4/t/lecture/7681422?start=0
// Make animations reusable
var sidemenu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('sideMenuAnime', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px', visibility: 'hidden' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '260px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('open => close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('close => open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
var mainContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('mainContainerAnime', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ marginLeft: '90px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ marginLeft: '260px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('open => close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('close => open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
var hero = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('heroAnime', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ paddingLeft: '105px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ paddingLeft: '280px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('open => close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('close => open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
var mobileMenu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('menuAnimeMobile', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('mobileIn', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translate3d(0, 0, 0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('mobileOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translate3d(-100%, 0, 0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('mobileIn => mobileOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('mobileOut => mobileIn', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
var mobileMenuIcon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('menuAnimeMobileIcon', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('mobileIn', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translate3d(220px, 0, 0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('mobileOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translate3d(0, 0, 0)' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('mobileIn => mobileOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('mobileOut => mobileIn', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullpageDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullpageDirective = (function () {
    function FullpageDirective(element) {
        this.element = element;
    }
    FullpageDirective.prototype.onResize = function (event) {
        this.resize();
    };
    FullpageDirective.prototype.onLoad = function (event) {
        this.resize();
    };
    FullpageDirective.prototype.resize = function () {
        var bgwidth = this.element.nativeElement.width;
        var bgheight = this.element.nativeElement.height;
        var winwidth = window.innerWidth;
        var winheight = window.innerHeight;
        var widthratio = winwidth / bgwidth;
        var heightratio = winheight / bgheight;
        var widthdiff = heightratio * bgwidth;
        var heightdiff = widthratio * bgheight;
        if (heightdiff > winheight) {
            this.element.nativeElement.width = winwidth;
            this.element.nativeElement.height = heightdiff;
        }
        else {
            this.element.nativeElement.width = widthdiff;
            this.element.nativeElement.height = winheight;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FullpageDirective.prototype, "onResize", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('load', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FullpageDirective.prototype, "onLoad", null);
    FullpageDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fullpage]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], FullpageDirective);
    return FullpageDirective;
    var _a;
}());
//# sourceMappingURL=fullpage.directive.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.hero {\n  height: 282px;\n  z-index: -999;\n  background: #DFE1E5;\n  padding-left: 30px;\n  padding-top: 60px; }\n  .hero p {\n    padding-top: 10px; }\n\n.sidebar {\n  height: 100%;\n  /* Full-height: remove this if you want \"auto\" height */\n  position: fixed;\n  /* Fixed Sidebar (stay in place on scroll) */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  /* Stay at the top */\n  left: 0;\n  overflow-x: hidden;\n  /* Disable horizontal scroll */ }\n  .sidebar-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    height: 100%; }\n    .sidebar-main-icons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 68px;\n              flex: 0 0 68px;\n      max-width: 68px;\n      background: #1A1A1A; }\n      .sidebar-main-icons-brand {\n        padding: 20px 0 0 0;\n        height: 68px; }\n      .sidebar-main-icons ul {\n        color: #fff;\n        opacity: 0.8;\n        text-align: center; }\n        .sidebar-main-icons ul .active {\n          border-left: 5px solid #00ab4e; }\n          .sidebar-main-icons ul .active:hover {\n            color: #fff;\n            background: #1A1A1A; }\n        .sidebar-main-icons ul li {\n          padding: 15px;\n          height: 68px;\n          cursor: pointer; }\n          .sidebar-main-icons ul li i {\n            font-size: 24px; }\n    .sidebar-main__menu {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 192px;\n              flex: 0 0 192px;\n      max-width: 192px;\n      background: #4A4A4A; }\n      .sidebar-main__menu button {\n        background: transparent;\n        border-color: transparent;\n        border-style: none;\n        border-width: 0;\n        padding: 15px 15px 0 0;\n        float: right;\n        position: relative;\n        top: 10px; }\n        .sidebar-main__menu button i.fa-angle-left {\n          color: #fff;\n          font-size: 20px; }\n      .sidebar-main__menu ul {\n        top: 68px;\n        position: relative;\n        color: #fff;\n        opacity: 0.8;\n        cursor: pointer; }\n        .sidebar-main__menu ul li {\n          padding: 15px;\n          height: 68px; }\n\n.dashboard {\n  margin-left: 0;\n  /* Same as the width of the sidebar */ }\n  .dashboard button {\n    background: transparent;\n    border-color: transparent;\n    border-style: none;\n    border-width: 0;\n    padding: 15px 15px 0 0;\n    float: none;\n    position: absolute;\n    top: 10px;\n    left: 80px; }\n    .dashboard button i.fa-angle-right {\n      color: #1A1A1A;\n      font-size: 20px; }\n  @media (min-width: 992px) {\n    .dashboard {\n      margin-left: 260px;\n      /* Same as the width of the sidebar */ } }\n\ndashboard-content {\n  display: block;\n  position: relative;\n  top: -40px; }\n  @media (min-width: 992px) {\n    dashboard-content {\n      top: -160px; } }\n\n.hero-mobile {\n  background: #DFE1E5;\n  position: relative;\n  top: -27px;\n  padding: 30px 0 0 30px; }\n\n.hamburger {\n  display: block;\n  position: relative;\n  top: -43px;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  width: 68px;\n  cursor: pointer;\n  outline: none;\n  background: #1A1A1A;\n  border: 0;\n  color: #fff; }\n  .hamburger i {\n    font-size: 24px;\n    position: relative;\n    right: -5px; }\n\n.main-wrapper-small {\n  overflow-y: scroll;\n  /* has to be scroll, not auto */\n  -webkit-overflow-scrolling: touch;\n  overflow-x: hidden;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n:host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "ul li {\n  padding-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.centre-details {\n  padding-top: 15px; }\n  .centre-details span {\n    font-size: 14px;\n    font-weight: 700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.card {\n  padding: 30px 15px 0 15px;\n  border: solid 1px #DFE1E5; }\n\n.card-progress, .card-adminresults, .card-study-support, .card-mycareer, dashboard-newsupdates, dashboard-events, dashboard-ad {\n  margin-top: 30px; }\n\ndashboard-footer {\n  margin-bottom: -160px;\n  height: 290px; }\n  @media (min-width: 992px) {\n    dashboard-footer {\n      height: 170px; } }\n\n.col-top {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  height: 85px;\n  margin-top: 15px; }\n  .col-top:first-child .card-top {\n    background-color: #00ab4e; }\n  .col-top .card-top {\n    height: 85px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 30px 15px;\n    margin-top: 15px; }\n    .col-top .card-top a {\n      color: #1A1A1A; }\n    @media (min-width: 992px) {\n      .col-top .card-top {\n        margin-top: 0; } }\n  @media (min-width: 992px) {\n    .col-top {\n      margin-top: 0; } }\n\n.card-top-rhs {\n  background: url(\"https://knowclive.github.io/dashboard/assets/img/promo-bgd.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 192px;\n  color: #fff;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-bottom: 15px;\n  margin-top: 30px; }\n  .card-top-rhs a {\n    color: #fff; }\n  @media (min-width: 992px) {\n    .card-top-rhs {\n      margin-top: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.card-head {\n  padding-bottom: 15px; }\n\n.card-foot {\n  padding-bottom: 30px;\n  border-bottom: 1px solid #DFE1E5; }\n\n.card-img img {\n  width: 100%; }\n\n.card-img .tag-success {\n  position: relative;\n  bottom: 35px;\n  left: 14px; }\n\n.card-list {\n  padding-bottom: 15px; }\n  .card-list__item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: wrap;\n        flex-flow: wrap;\n    padding-top: 30px; }\n    .card-list__item-img {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 35%;\n              flex: 0 0 35%; }\n      .card-list__item-img img {\n        width: 100px; }\n    .card-list__item-text {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 65%;\n              flex: 0 0 65%; }\n      .card-list__item-text a {\n        font-size: 14px;\n        display: block;\n        margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n:host {\n  background: #4A4A4A;\n  display: block; }\n  :host .footer {\n    padding: 30px 0 0 30px; }\n    :host .footer__brand {\n      padding-bottom: 15px; }\n    :host .footer ul {\n      color: #fff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    :host .footer__social-links {\n      position: relative;\n      top: 12px; }\n      :host .footer__social-links li {\n        padding-right: 30px; }\n        :host .footer__social-links li i {\n          font-size: 16px; }\n    :host .footer__policies {\n      padding-top: 15px;\n      border-top: 1px solid #fff; }\n      :host .footer__policies ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n        :host .footer__policies ul li {\n          padding-right: 15px; }\n          :host .footer__policies ul li a {\n            color: #fff;\n            font-size: 14px;\n            font-weight: 400; }\n            :host .footer__policies ul li a:hover {\n              color: #fff; }\n      @media (min-width: 992px) {\n        :host .footer__policies ul {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.header {\n  position: relative;\n  height: 68px;\n  margin-left: 260px; }\n  .header-toolbar {\n    height: 68px;\n    line-height: 50px;\n    padding-top: 5px; }\n    .header-toolbar__inner {\n      float: right; }\n      .header-toolbar__inner ul {\n        margin: 0;\n        padding: 0 20px 0 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .header-toolbar__inner ul li {\n          list-style: none;\n          margin: 0;\n          padding: 0 0 0 20px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          cursor: pointer; }\n          .header-toolbar__inner ul li label .fa-search {\n            position: absolute;\n            top: 5px;\n            right: 15px; }\n          .header-toolbar__inner ul li .avatar {\n            padding-left: 15px; }\n            .header-toolbar__inner ul li .avatar img {\n              border-radius: 50%; }\n          .header-toolbar__inner ul li .member-details {\n            padding: 0 30px 0 15px; }\n            .header-toolbar__inner ul li .member-details .name {\n              font-weight: 700;\n              position: relative;\n              top: -5px;\n              height: 10px; }\n            .header-toolbar__inner ul li .member-details .memberid {\n              font-size: 14px;\n              position: relative;\n              top: 5px; }\n      .header-toolbar__inner i {\n        height: 45px;\n        line-height: 50px;\n        color: #1A1A1A;\n        vertical-align: top;\n        font-size: 20px; }\n      .header-toolbar__inner label {\n        margin: 0;\n        padding: 0;\n        vertical-align: top; }\n        .header-toolbar__inner label i {\n          position: absolute;\n          top: 0;\n          right: 0; }\n        .header-toolbar__inner label input {\n          margin: 0;\n          padding: 0;\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          border: 1px solid #fff;\n          font-size: 14px;\n          text-align: left;\n          width: 0;\n          height: 25px;\n          transition: 0.1s border linear, 0.25s width linear; }\n          .header-toolbar__inner label input:focus {\n            border: 2px solid #DFE1E5;\n            border-radius: 3px;\n            outline: none;\n            width: 650px;\n            height: 60px;\n            transition: 0.1s border linear, 0.25s width linear;\n            padding-left: 15px; }\n      .header-toolbar__inner__popover .profile-menu {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 280px;\n        padding: 15px;\n        font-size: 18px;\n        box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.1);\n        border-radius: 3px; }\n        .header-toolbar__inner__popover .profile-menu li {\n          padding: 10px 0; }\n          .header-toolbar__inner__popover .profile-menu li a {\n            color: #1A1A1A;\n            font-weight: 400; }\n            .header-toolbar__inner__popover .profile-menu li a span {\n              font-size: 14px;\n              position: relative;\n              top: -6px; }\n            .header-toolbar__inner__popover .profile-menu li a i.fa-external-link-alt {\n              vertical-align: unset;\n              height: -webkit-fit-content;\n              height: -moz-fit-content;\n              height: fit-content;\n              margin-left: 5px; }\n    .header-toolbar > div {\n      padding: 0 20px; }\n  .header #branding {\n    text-transform: uppercase;\n    letter-spacing: 0px;\n    float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.header-mobile {\n  padding: 6px 0;\n  background: #1A1A1A; }\n  .header-mobile__popover .user-details img {\n    border-radius: 50%; }\n  .header-mobile__popover .user-details .user-name {\n    font-weight: 700;\n    position: relative;\n    top: -48px;\n    left: 65px; }\n  .header-mobile__popover .user-details .memberid {\n    position: relative;\n    top: -46px;\n    left: 65px; }\n  .header-mobile__popover .profile-menu li {\n    padding-bottom: 15px; }\n    .header-mobile__popover .profile-menu li a {\n      font-weight: 400;\n      color: #1A1A1A; }\n      .header-mobile__popover .profile-menu li a span {\n        font-size: 11px; }\n  .header-mobile__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .header-mobile__inner a {\n      padding: 0 30px 0 10%; }\n      .header-mobile__inner a i {\n        color: #fff;\n        font-size: 24px; }\n    .header-mobile__inner .avatar-mobile {\n      padding-right: 15px; }\n      .header-mobile__inner .avatar-mobile img {\n        border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n:host {\n  background: #1A1A1A;\n  color: #fff;\n  position: fixed;\n  right: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 20%;\n  min-width: 250px;\n  z-index: 9999;\n  padding: 15px 0 0 0; }\n  :host .mobile-menu__branding {\n    padding-bottom: 30px; }\n  :host ul li {\n    padding: 15px 0 15px 10px; }\n    :host ul li i {\n      font-size: 24px;\n      padding-right: 15px; }\n  :host ul .active-mobile {\n    border-left: 5px solid #00ab4e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\nli {\n  padding-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.row {\n  padding-top: 15px; }\n\n.drawer {\n  border-bottom: 1px solid #DFE1E5;\n  border-top: 1px solid #DFE1E5;\n  cursor: pointer; }\n  .drawer p {\n    color: #00ab4e;\n    font-weight: 700; }\n    .drawer p:hover {\n      color: #006578;\n      text-decoration: underline; }\n\n.module-title {\n  position: relative;\n  left: 15px;\n  font-size: 14px; }\n\n.fa-check-circle {\n  color: #00883E;\n  font-size: 20px; }\n\n.fa-check {\n  font-size: 16px; }\n\n.accordion {\n  padding: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: all 0.8s ease; }\n  .accordion .row {\n    padding-bottom: 15px;\n    border-bottom: 1px solid #DFE1E5; }\n\n.accordion.open {\n  max-height: 400px;\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 0 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.card-head {\n  padding-bottom: 15px; }\n\n.card-foot {\n  padding-bottom: 30px;\n  border-bottom: 1px solid #DFE1E5; }\n\n.card-img img {\n  width: 100%; }\n\n.card-img .tag-success {\n  position: relative;\n  bottom: 35px;\n  left: 14px; }\n\n.card-list {\n  padding-bottom: 15px; }\n  .card-list__item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: wrap;\n        flex-flow: wrap;\n    padding-top: 30px; }\n    .card-list__item-img {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 35%;\n              flex: 0 0 35%; }\n      .card-list__item-img img {\n        width: 100px; }\n    .card-list__item-text {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 65%;\n              flex: 0 0 65%; }\n      .card-list__item-text a {\n        font-size: 14px;\n        display: block;\n        margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.primary-banner {\n  margin-top: 60px;\n  background-image: url(\"https://knowclive.github.io/dashboard/assets/img/primary-push-student.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 55% center;\n  overflow: hidden;\n  height: 400px;\n  color: #fff; }\n  .primary-banner__inner {\n    width: 100%;\n    padding: 60px 15px 0 15px;\n    position: relative;\n    top: 50px; }\n    .primary-banner__inner h1 {\n      color: #fff; }\n  @media (min-width: 992px) {\n    .primary-banner {\n      background-size: inherit;\n      background-position: center center; }\n      .primary-banner__inner {\n        width: 620px;\n        padding: 0 15px 0 60px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.bannerStyle h1 {\n  background-color: #ccc;\n  min-height: 300px;\n  text-align: center;\n  line-height: 300px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: -80px;\n  bottom: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: -80px;\n  bottom: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  right: 0; }\n\nngx-item {\n  text-align: center; }\n  ngx-item img {\n    margin-bottom: 15px; }\n  ngx-item .image-1, ngx-item .image-2 {\n    width: 220px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n\n.card-mini {\n  border: 1px solid #DFE1E5;\n  overflow: hidden;\n  margin-bottom: 15px;\n  padding-left: 0;\n  padding-right: 0; }\n  .card-mini__text {\n    display: inline-block;\n    width: 50%;\n    padding: 10px 0 0 10px; }\n  .card-mini img {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p, a {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p, a {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p, a {\n    font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<!--<h1>-->\n<!--{{title}}-->\n<!--</h1>-->\n\n<!--<ul>-->\n<!--<li><a [routerLink]=\"['home']\" routerLinkActive=\"active\">Home</a></li>-->\n<!--<li><a [routerLink]=\"['about']\" routerLinkActive=\"active\">About</a></li>-->\n<!--<li><a [routerLink]=\"['contact']\" routerLinkActive=\"active\">Contact</a></li>-->\n<!--</ul>-->\n\n<!--<button class=\"btn btn-success\" style=\"margin-left:80px;\" [@myTrigger]=\"state\" (click)=\"toggleState()\">My Button</button>-->\n<!--<button class=\"btn btn-success\" style=\"margin-left:80px;\" (click)=\"toggleState()\" [@removeMe]=\"btnState\">My Button</button>-->\n\n<!--<ul>-->\n<!--&lt;!&ndash;<li *ngFor=\"let item of items\" [@myTrigger]=\"state\">{{ item }}</li>&ndash;&gt;-->\n<!--<li *ngFor=\"let item of items\" [@myTrigger]=\"state\" (@myTrigger.start)=\"animStart($event)\" (@myTrigger.done)=\"animDone($event)\">{{ item }}</li>-->\n<!--</ul>-->\n\n<!--<p>{{ animDetails }}</p>-->\n\n<!--<page></page>-->\n\n\n<div class=\"main-wrapper-large d-none d-sm-block\">\n\n    <dashboard-header></dashboard-header>\n    <!--header-->\n\n    <aside class=\"sidebar\">\n\n        <div class=\"sidebar-main\">\n            <div class=\"sidebar-main-icons\">\n                <div class=\"sidebar-main-icons-brand\">\n                    <img alt=\"AAT Home\" height=\"30\" src=\"https://www.aat.org.uk/assets/img/svg/aat_logo.svg\"\n                         title=\"AAT Home\" width=\"69\">\n                </div>\n\n                <ul>\n                    <li class=\"active\"><i class=\"fas fa-home\"></i></li>\n                    <li><i class=\"far fa-clipboard\"></i></li>\n                    <li><i class=\"far fa-life-ring\"></i></li>\n                    <li><i class=\"fas fa-suitcase\"></i></li>\n                    <li><i class=\"fas fa-users\"></i></li>\n                    <li><i class=\"fas fa-id-card\"></i></li>\n                    <li><i class=\"far fa-newspaper\"></i></li>\n                </ul>\n            </div>\n            <!--sidebar-main-icons-->\n\n            <div class=\"sidebar-main__menu\" [@sideMenuAnime]=\"openClose\">\n                <button (click)=\"hideAndShow()\" role=\"button\" class=\"btn-sidemenu__close\"><i class=\"fas fa-angle-left\"></i></button>\n                <ul>\n                    <li>MyAAT</li>\n                    <li>Training and assessment</li>\n                    <li>Professional zone</li>\n                    <li>My career</li>\n                    <li>Support resources</li>\n                    <li>My membership</li>\n                    <li>News and events</li>\n                </ul>\n\n            </div>\n            <!--sidebar-main__menu-->\n        </div>\n        <!--Sidebar container-->\n\n    </aside>\n    <!--sidebar-->\n\n\n    <div class=\"hero container-fluid\" [@heroAnime]=\"openClose\">\n        <h1 class=\"myaat-h1\">Hello John</h1>\n        <p>Welcome to your dashboard, notice anything new?</p>\n    </div>\n    <!--hero-->\n\n    <article class=\"dashboard\" [@mainContainerAnime]=\"openClose\">\n        <button (click)=\"hideAndShow()\" role=\"button\" class=\"btn-sidemenu__close\"><i class=\"fas fa-angle-right\"></i></button>\n\n        <dashboard-content class=\"container-fluid\"></dashboard-content>\n\n    </article>\n\n\n    <!--<router-outlet></router-outlet>-->\n</div>\n<!--main wrapper large-->\n\n\n\n<div class=\"main-wrapper-small d-sm-none d-md-none d-lg-none\">\n\n    <dashboard-headermobile></dashboard-headermobile>\n\n    <button (click)=\"hideShowMobileMenu()\" [@menuAnimeMobileIcon]=\"menuState\" class=\"hamburger\">\n        <i class=\"fas fa-bars\"></i>\n    </button>\n\n\n    <dashboard-mobilemenu [@menuAnimeMobile]=\"menuState\"></dashboard-mobilemenu>\n    <!--<dashboard-mobileusermenu></dashboard-mobileusermenu>-->\n\n    <!--header-->\n\n    <!--<aside class=\"sidebar\">-->\n\n        <!--<div class=\"sidebar-main\">-->\n            <!--<div class=\"sidebar-main-icons\">-->\n                <!--<div class=\"sidebar-main-icons-brand\">-->\n                    <!--<img alt=\"AAT Home\" height=\"30\" src=\"https://www.aat.org.uk/assets/img/svg/aat_logo.svg\"-->\n                         <!--title=\"AAT Home\" width=\"69\">-->\n                <!--</div>-->\n\n                <!--<ul>-->\n                    <!--<li><i class=\"fas fa-home\"></i></li>-->\n                    <!--<li><i class=\"far fa-clipboard\"></i></li>-->\n                    <!--<li><i class=\"far fa-life-ring\"></i></li>-->\n                    <!--<li><i class=\"fas fa-suitcase\"></i></li>-->\n                    <!--<li><i class=\"fas fa-users\"></i></li>-->\n                    <!--<li><i class=\"fas fa-id-card\"></i></li>-->\n                    <!--<li><i class=\"far fa-newspaper\"></i></li>-->\n                <!--</ul>-->\n            <!--</div>-->\n            <!--&lt;!&ndash;sidebar-main-icons&ndash;&gt;-->\n\n            <!--<div class=\"sidebar-main__menu\">-->\n                <!--&lt;!&ndash;<button (click)=\"hideAndShow()\" role=\"button\" class=\"btn-sidemenu__close\"><i class=\"fas fa-angle-left\"></i></button>&ndash;&gt;-->\n                <!--<ul>-->\n                    <!--<li>MyAAT</li>-->\n                    <!--<li>Training and assessment</li>-->\n                    <!--<li>Professional zone</li>-->\n                    <!--<li>My career</li>-->\n                    <!--<li>Support resources</li>-->\n                    <!--<li>My membership</li>-->\n                    <!--<li>News and events</li>-->\n                <!--</ul>-->\n\n            <!--</div>-->\n            <!--&lt;!&ndash;sidebar-main__menu&ndash;&gt;-->\n        <!--</div>-->\n        <!--&lt;!&ndash;Sidebar container&ndash;&gt;-->\n\n    <!--</aside>-->\n    <!--&lt;!&ndash;sidebar&ndash;&gt;-->\n\n\n    <div class=\"hero-mobile container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <h1 class=\"myaat-h1\">Hello John</h1>\n                <p>Welcome to your dashboard, notice anything new?</p>\n            </div>\n        </div>\n    </div>\n    <!--hero-->\n\n    <article class=\"dashboard\">\n        <!--<button (click)=\"hideAndShow()\" role=\"button\" class=\"btn-sidemenu__close\"><i class=\"fas fa-angle-right\"></i></button>-->\n\n        <dashboard-content class=\"container-fluid\"></dashboard-content>\n\n    </article>\n\n\n    <!--<router-outlet></router-outlet>-->\n</div>\n<!--main wrapper small-->\n\n\n"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"ad-img\">\n  <a href=\"https://www.eventsforce.net/aatevents/frontend/reg/thome.csp?pageID=42304&eventID=160&CSPCHD=000001000000gC581exm4qmRIuvgkeRF$x2rah37nMsz5rCFc4\">\n  <img src=\"/assets/img/tp-awards-ad.png\" alt=\"\">\n  <!--<img src=\"https://knowclive.github.io/dashboard/assets/img/Knowledge-Hub-ad.png\" alt=\"\">-->\n  </a>\n</div>"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<!--<a class=\"edit-link\" href=\"#\">Edit</a>-->\n\n<h3>{{ adminresults.title }}</h3>\n\n<p>{{ adminresults.summary }}</p>\n\n<div class=\"row\">\n    <div class=\"col-md-7\">\n        <dashboard-resultscarousel></dashboard-resultscarousel>\n    </div>\n    <div class=\"col-md-5\">\n        <ul>\n            <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019216_Qualifications-Dashboard-Student\" target=\"_blank\">Qualification dashboard</a></li>\n            <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019207_Your-Assessment-Results-Student\" target=\"_blank\">Your assessment results</a></li>\n            <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019208_Statement-Of-Achievement-Student\" target=\"_blank\">Statement of achievement</a></li>\n            <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019214_Grade-Calculator-Student\" target=\"_blank\">Grade calculator</a></li>\n            <li><a href=\"https://www.aat.org.uk/assessment-venues/search\" target=\"_blank\">Find an assessment venue</a></li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<select class=\"centre-select\">\n  <option value=\"change\" selected>Change centre</option>\n  <option value=\"centre\">AAT Training Centre</option>\n  <option value=\"college\">AAT College</option>\n</select>\n\n<h3>Centre picker</h3>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"centre-details\">\n      <span>Centre details</span>\n      <p>AAT Training Centre, 140 Aldersgate St, London, EC1A 4HY</p>\n      <span>Main contact</span>\n      <ul>\n        <li><b>Name:</b> AAT contact</li>\n        <li><b>Email:</b> contact@aat.org.uk</li>\n        <li><b>Phone:</b> 020 1234 56789</li>\n        <li><b>Website:</b> www.aat.org.uk</li>\n      </ul>\n      <span>Role at centre</span>\n      <p>Tutor</p>\n\n      <p><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/291337772_Manage_Training_Provider_Content\" target=\"_blank\">Manage training provider content</a></p>\n      <p><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/291337771_Manage_Assessment_Venue_Content\" target=\"_blank\">Manage assessment venue content</a></p>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 col-top\">\n        <div class=\"card card-top\">\n            <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/291337774_Download_AAT_Approved_Logos\" target=\"_blank\">\n            <h4 class=\"h4\">{{ dashcontent.heading1 }}</h4>\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-top\">\n        <div class=\"card card-top\">\n            <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019215_My-Bookmarked-Items-Student\" target=\"_blank\">\n            <h4 class=\"h4\"><i class=\"far fa-star\">&nbsp;&nbsp;</i>{{ dashcontent.heading2 }}</h4>\n            </a>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card card-top-rhs\">\n            <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/291337773_Check_Out_Our_SecureAssess_Support_Resources\"\n               target=\"_blank\"><h4 class=\"h4\">{{ dashcontent.heading3 }}</h4></a>\n        </div>\n    </div>\n</div>\n<!--top row-->\n\n<div class=\"row\">\n    <div class=\"col-md-8\">\n        <!--MyProgress component not required until later development-->\n        <!--<div class=\"card card-progress\">-->\n            <!--<dashboard-myprogress></dashboard-myprogress>-->\n        <!--</div>-->\n\n        <div class=\"card card-study-support\">\n            <dashboard-centrepicker></dashboard-centrepicker>\n        </div>\n\n        <div class=\"card card-study-support\">\n            <dashboard-studysupport></dashboard-studysupport>\n        </div>\n        <div class=\"card card-adminresults\">\n            <dashboard-adminresults></dashboard-adminresults>\n        </div>\n        <div class=\"card card-mycareer\">\n            <dashboard-mycareer></dashboard-mycareer>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <dashboard-newsupdates class=\"card\"></dashboard-newsupdates>\n        <dashboard-events class=\"card\"></dashboard-events>\n        <dashboard-ad></dashboard-ad>\n    </div>\n    <div class=\"col-md-12 px-0\">\n        <dashboard-primarypush></dashboard-primarypush>\n    </div>\n\n    <div class=\"col-md-12 px-0\">\n        <dashboard-footer></dashboard-footer>\n    </div>\n\n</div>\n<!--second row-->"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-head\">\n  <h3>Events</h3>\n</div>\n<div class=\"card-img\">\n  <a href=\"https://www.aat.org.uk/aat-events/branch-events/west-london-branch-time-management-agm\" target=\"_blank\">\n    <img src=\"https://knowclive.github.io/dashboard/assets/img/events.png\" alt=\"\">\n    <!--<span class=\"tag tag-success\">Free</span>-->\n  </a>\n</div>\n<div class=\"card-foot\">\n  <a href=\"https://events-emea1.adobeconnect.com/content/connect/c1/1097522706/en/events/event/shared/1378712327/event_landing.html?sco-id=2632784079&_charset_=utf-8\" target=\"_blank\">\n    <h4>SecureAssess webinar</h4>\n  </a>\n  <span class=\"small-text\">Mon 30 April, 12.30 - 14.00</span>\n</div>\n\n<div class=\"card-list\">\n  <div class=\"card-list__item\">\n    <!--<div class=\"card-list__item-img\">-->\n      <!--<img src=\"https://knowclive.github.io/dashboard/assets/img/event-tb1.png\" alt=\"\">-->\n    <!--</div>-->\n    <div class=\"card-list__item-text\">\n      <a href=\"https://www.eventsforce.net/aatevents/frontend/reg/thome.csp?pageID=42304&eventID=160&CSPCHD=000001000000pfsrazWQHU9RLl93u6D3bo3KgBlY4ufM_YObfa\" target=\"_blank\">\n        Training Provider Awards</a>\n      <span class=\"small-text\">Thu 24 May, East Midlands Conference Centre</span>\n    </div>\n  </div>\n\n  <div class=\"card-list__item\">\n    <!--<div class=\"card-list__item-img\">-->\n      <!--<img src=\"https://knowclive.github.io/dashboard/assets/img/event-tb2.png\" alt=\"\">-->\n    <!--</div>-->\n    <div class=\"card-list__item-text\">\n      <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/291337766_Synoptic_Assessment_Windows\" target=\"_blank\">\n        Next AVSY synoptic assessments window</a>\n      <span class=\"small-text\">18 - 24 June</span>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<div class=\"row footer\">\n\n  <div class=\"col-md-12\">\n\n    <div class=\"row footer__brand\">\n      <div class=\"footer__logo col-md-2\">\n        <img alt=\"AAT Home\" height=\"52\" src=\"https://www.aat.org.uk/assets/img/svg/aat_logo.svg\"\n             title=\"AAT Home\" width=\"90\">\n      </div>\n\n      <div class=\"col-md-10\">\n        <ul class=\"footer__social-links\">\n          <li><i class=\"fab fa-facebook\"></i></li>\n          <li><i class=\"fab fa-twitter\"></i></li>\n          <li><i class=\"fab fa-instagram\"></i></li>\n          <li><i class=\"fab fa-linkedin-in\"></i></li>\n          <li><i class=\"fab fa-youtube\"></i></li>\n        </ul>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 footer__policies\">\n        <ul>\n          <li><a href=\"\">Privacy policy</a></li>\n          <li><a href=\"\">Cookie policy</a></li>\n          <li><a href=\"\">Equality of opportunity</a></li>\n          <li><a href=\"\">Terms and conditions</a></li>\n          <li><a href=\"\">Copyright &copy; 2018. All rights reserved.</a></li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"header-toolbar\">\n    <nav class=\"header-toolbar__inner\">\n      <ul>\n        <li>\n          <label>\n            <i class=\"fas fa-search\"></i>\n            <input type=\"search\" name=\"search\" placeholder=\"Search AAT...\">\n          </label>\n        </li>\n        <li [popover]=\"myPopover\">\n          <div class=\"avatar\">\n            <img src=\"https://knowclive.github.io/dashboard/assets/img/john-snow.jpg\" alt=\"\" width=\"48\" height=\"48\">\n          </div>\n\n          <div class=\"member-details\">\n            <div class=\"name\">{{ header.firstname + ' ' + header.lastname}}</div>\n            <div class=\"memberid\">Membership number: 12345678</div>\n          </div>\n\n          <i class=\"fas fa-ellipsis-v\"></i>\n\n        </li>\n      </ul>\n      <popover-content #myPopover\n                       title=\"\"\n                       [closeOnClickOutside]=\"true\"\n                       class=\"header-toolbar__inner__popover\">\n        <ul class=\"profile-menu\">\n          <li><a href=\"\">Profile and account</a></li>\n          <li><a href=\"\">Student membership<br><span>Change role</span></a></li>\n          <li><a href=\"\">Edit my details</a></li>\n          <li><a href=\"\" class=\"ext-link\">Visit the AAT website <i class=\"fas fa-external-link-alt\"></i></a></li>\n          <li><a href=\"\">Log out</a></li>\n        </ul>\n      </popover-content>\n    </nav>\n\n  </div>\n</header>"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-mobile\">\n\n  <popover-content #myPopover\n                   title=\"\"\n                   [closeOnClickOutside]=\"true\"\n                   class=\"header-mobile__popover\">\n    <div class=\"user-details\">\n      <div class=\"avatar\">\n        <img src=\"https://knowclive.github.io/dashboard/assets/img/john-snow.jpg\" alt=\"\" width=\"60\" height=\"60\">\n      </div>\n      <div class=\"user-name\">John Snow</div>\n      <div class=\"memberid\">12345678</div>\n    </div>\n\n    <ul class=\"profile-menu\">\n      <li><a href=\"\">Profile and account</a></li>\n      <li><a href=\"\">Student membership<br><span>[Change role]</span></a></li>\n      <li><a href=\"\">Edit my details</a></li>\n      <li><a href=\"\" class=\"ext-link\">Visit the AAT website <i class=\"fas fa-external-link-alt\"></i></a></li>\n      <li><a href=\"\">Log out</a></li>\n    </ul>\n  </popover-content>\n\n  <div class=\"header-mobile__inner\">\n    <img alt=\"AAT Home\" height=\"30\" src=\"https://www.aat.org.uk/assets/img/svg/aat_logo.svg\"\n         title=\"AAT Home\" width=\"69\">\n\n    <a href=\"https://www.aat.org.uk/search\" target=\"_blank\"><i class=\"fas fa-search\"></i></a>\n\n    <div class=\"avatar-mobile\" [popover]=\"myPopover\">\n      <img src=\"https://knowclive.github.io/dashboard/assets/img/john-snow.jpg\" alt=\"\" width=\"48\" height=\"48\">\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<p>\n  hero works!\n</p>\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-menu__branding\">\n    <img alt=\"AAT Home\" height=\"30\" src=\"https://www.aat.org.uk/assets/img/svg/aat_logo.svg\"\n         title=\"AAT Home\" width=\"69\">\n</div>\n\n<ul>\n    <li class=\"active-mobile\"><i class=\"fas fa-home\"></i>MyAAT</li>\n    <li><i class=\"far fa-clipboard\"></i>Training and assessment</li>\n    <li><i class=\"far fa-life-ring\"></i>Professional zone</li>\n    <li><i class=\"fas fa-suitcase\"></i>My career</li>\n    <li><i class=\"fas fa-users\"></i>Support resources</li>\n    <li><i class=\"fas fa-id-card\"></i>My membership</li>\n    <li><i class=\"far fa-newspaper\"></i>News and events</li>\n</ul>"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<!--<a class=\"edit-link\" href=\"#\">See more</a>-->\n\n<h3>{{ mycareer.heading }}</h3>\n\n<p>{{ mycareer.summary }}</p>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <ul>\n      <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019209_Search-For-UK-Jobs-Student\" target=\"_blank\">{{ mycareer.link1.title }}</a></li>\n      <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019211_Build-My-CV-Online-Student\" target=\"_blank\">{{ mycareer.link2.title }}</a></li>\n    </ul>\n  </div>\n  <div class=\"col-md-6\">\n    <ul>\n      <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019213_Career-Support\" target=\"_blank\">{{ mycareer.link3.title }}</a></li>\n      <li><a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019205_Record-Work-Experience-Student\" target=\"_blank\">{{ mycareer.link4.title }}</a></li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<!--<a class=\"edit-link\" href=\"#\">Edit</a>-->\n<h3>{{ myprogress.title }}</h3>\n\n\n<p>{{ myprogress.summary }}</p>\n\n<div class=\"row drawer\" (click)=\"isClassVisible1 = !isClassVisible1;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item1.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-success\">{{ myprogress.item1.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item1.status }}</span></div>\n    <div class=\"col-md-1\"><i class=\"fas fa-check-circle\"></i></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible1 }\">\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item1.module.title1 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item1.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n</div>\n\n<div class=\"row drawer\" (click)=\"isClassVisible2 = !isClassVisible2;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item2.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-success\">{{ myprogress.item2.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item2.status }}</span></div>\n    <div class=\"col-md-1\"><i class=\"fas fa-check-circle\"></i></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible2 }\">\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title1 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n</div>\n\n<div class=\"row drawer\" (click)=\"isClassVisible3 = !isClassVisible3;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item3.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-my-progress\">{{ myprogress.item3.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item3.status }}</span></div>\n    <div class=\"col-md-1\"><img src=\"https://knowclive.github.io/dashboard/assets/img/my-progress.svg\" alt=\"\"></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible3 }\">\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item3.module.title1 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item3.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\"><span class=\"module-title\">{{ myprogress.item3.module.title3 }}</span></div>\n    </div>\n</div>\n\n<div class=\"row drawer\" (click)=\"isClassVisible4 = !isClassVisible4;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item4.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-pending\">{{ myprogress.item4.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item4.status }}</span></div>\n    <div class=\"col-md-1\"><i class=\"far fa-circle\"></i></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible4 }\">\n    <div class=\"row\">\n        <div class=\"col-md-12\"><span class=\"module-title\">{{ myprogress.item4.module.title1 }}</span></div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\"><span class=\"module-title\">{{ myprogress.item4.module.title2 }}</span></div>\n\n    </div>\n</div>\n\n\n\n\n<!-- User input add new items functionality-->\n\n<!--<div>-->\n    <!--<h2> Grocery list manager </h2>-->\n\n    <!--<ul class=\"list-group\">-->\n        <!--<li *ngFor=\"let task of tasks\" class=\"list-group-item\">-->\n            <!--<span> {{ task.name }} </span>-->\n        <!--</li>-->\n    <!--</ul>-->\n\n\n    <!--<div class=\"row\">-->\n        <!--<div class=\"col-xs-6 col-md-4\">-->\n            <!--<div class=\"input-group\">-->\n                <!--<input type=\"text\" class=\"form-control\" placeholder=\"enter grocery items\" [(ngModel)]=\"task\" />-->\n                <!--<div class=\"input-group-btn\">-->\n                    <!--<button class=\"btn btn-primary\" type=\"button\" (click)=\"onClick()\">-->\n                        <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n                    <!--</button>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n\n<!--</div>-->"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<div class=\"card-head\">\n    <h3>Information and updates</h3>\n</div>\n<div class=\"card-img\">\n    <a href=\"https://www.aat.org.uk/tpconference\" target=\"_blank\">\n        <img src=\"/assets/img/tpconference_web.png\" alt=\"\">\n        <!--<img src=\"https://knowclive.github.io/dashboard/assets/img/Brian-Palmer.jpg\" alt=\"\">-->\n        <!--<span class=\"tag tag-success\">Salaries</span>-->\n    </a>\n</div>\n<div class=\"card-foot\">\n    <a href=\"https://www.aat.org.uk/tpconference\" target=\"_blank\">\n    <h4>Training provider conference programme confirmed</h4>\n    </a>\n    <span class=\"small-text\">28 Mar 2018</span>\n</div>\n\n<div class=\"card-list\">\n    <div class=\"card-list__item\">\n        <div class=\"card-list__item-img\">\n            <img src=\"https://knowclive.github.io/dashboard/assets/img/HMRC.jpg\" alt=\"\">\n        </div>\n        <div class=\"card-list__item-text\">\n            <a href=\"https://www.aat.org.uk/aat-news/mps-clearer-tax-strategy-and-additional-hmrc-investment-needed\" target=\"_blank\">\n                A reminder of AQ2013 key dates</a>\n            <span class=\"small-text\">21 Mar 2018</span>\n        </div>\n    </div>\n\n    <div class=\"card-list__item\">\n        <div class=\"card-list__item-img\">\n            <img src=\"https://knowclive.github.io/dashboard/assets/img/man-at-desk.jpg\" alt=\"\">\n        </div>\n        <div class=\"card-list__item-text\">\n            <a href=\"https://www.aat.org.uk/aat-news/aat-flexible-working-solutions-key-to-tackling-sharing-parental-responsibilities\" target=\"_blank\">\n                Updates to the AAT Code of Practice and Self-assessment form</a>\n            <span class=\"small-text\">15 Mar 2018</span>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"primary-banner\">\n  <div class=\"primary-banner__inner\">\n    <h1>Achieve AAT full membership (MAAT)</h1>\n    <p>Are you ready to apply for full membership and gain internationally recognised MAAT status?</p>\n    <a href=\"https://www.aat.org.uk/membership/apply-for-aat-full-membership\" class=\"btn btn-success\">How to apply</a>\n  </div>\n</div>"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<ngx-carousel\n        [inputs]=\"carouselOne\"\n        (carouselLoad)=\"myfunc($event)\">\n    <ngx-item NgxCarouselItem>\n        <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019216_Qualifications-Dashboard-Student\"\n           target=\"_blank\">\n            <img class=\"image-1\" src=\"https://knowclive.github.io/dashboard/assets/img/results/quals-doughnut.png\" alt=\"\">\n            <h4>How much is each assessment worth?</h4>\n        </a>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n        <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019216_Qualifications-Dashboard-Student\"\n           target=\"_blank\">\n            <img class=\"image-2\" src=\"https://knowclive.github.io/dashboard/assets/img/results/Pound-coins-close-up.jpg\" alt=\"\">\n            <h4>Elements of Costing results are ready</h4>\n        </a>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n        <a href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019216_Qualifications-Dashboard-Student\"\n           target=\"_blank\">\n            <img src=\"https://knowclive.github.io/dashboard/assets/img/results/ring.svg\" alt=\"\">\n            <!--<img src=\"https://knowclive.github.io/dashboard/assets/img/results/ring.svg\" alt=\"\">-->\n            <h4>Congratulations! You passed Bookkeeping Controls</h4>\n        </a>\n    </ngx-item>\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\n</ngx-carousel>\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<!--<a class=\"edit-link\" href=\"#\">Edit</a>-->\n\n<h3>{{ studysupport.heading }}</h3>\n\n<p>{{ studysupport.summary }}</p>\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <!--<ul>-->\n        <!--<li *ngFor=\"let support of supportContent\" class=\"card-mini\">-->\n        <!--<p>{{ support.title }}</p>-->\n        <!--<img [src]=\"support.imageUrl\"  alt=\"\">-->\n        <!--</li>-->\n        <!--</ul>-->\n        <ul>\n            <li class=\"card-mini col-md-12 col-xs-12\"><a\n                    href=\"https://aat.invisionapp.com/share/WTGQWMW4GMR#/290019210_Search-For-Study-Support-Student\"\n                    target=\"_blank\">\n                <span class=\"card-mini__text\">\n                <p>\n                {{ studysupport.card1.title }}\n                </p>\n                </span>\n                <img [src]=\"studysupport.card1.imageUrl\" alt=\"\"></a>\n            </li>\n\n            <li class=\"card-mini col-md-12 col-xs-12\"><a href=\"https://www.aatcomment.org.uk/category/study-tips/\" target=\"_blank\">\n                <span class=\"card-mini__text\">\n                <p>{{ studysupport.card2.title }}</p>\n                </span>\n                    <img\n                    [src]=\"studysupport.card2.imageUrl\" alt=\"\"></a>\n            </li>\n            <!--<li class=\"card-mini\"><a href=\"\"><p>{{ studysupport.card3.title }}</p><img [src]=\"studysupport.card3.imageUrl\" alt=\"\"></a></li>-->\n        </ul>\n    </div>\n    <div class=\"col-md-6\">\n        <ul>\n            <li class=\"card-mini col-md-12 col-xs-12\"><a href=\"https://www.aat.org.uk/prod/s3fs-public/assets/Your_little_book_of_essential_study_support_0.pdf\" target=\"_blank\">\n                <span class=\"card-mini__text\">\n                <p>{{ studysupport.card4.title }}</p>\n                </span>\n                    <img\n                    [src]=\"studysupport.card4.imageUrl\" alt=\"\"></a>\n            </li>\n            <li class=\"card-mini col-md-12 col-xs-12\"><a href=\"https://forums.aat.org.uk/Forum/categories/for-student-members\" target=\"_blank\">\n                <span class=\"card-mini__text\">\n                <p>{{ studysupport.card5.title }}</p>\n                </span>\n                    <img\n                    [src]=\"studysupport.card5.imageUrl\" alt=\"\"></a>\n            </li>\n            <!--<li class=\"card-mini\"><a href=\"\"><p>{{ studysupport.card6.title }}</p><img [src]=\"studysupport.card6.imageUrl\" alt=\"\"></a></li>-->\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<!--<h1 class=\"h1-hero\"> H1 hero</h1>-->\n\n<!--<h1> H1 {{ page.title }}</h1>-->\n\n\n<!--<h2>H2 title</h2>-->\n<!--<h3>H3 title</h3>-->\n<!--<h4>H4 title</h4>-->\n<!--<p> {{ page.subtitle }}</p>-->\n<!--<p> {{ page.content }}</p>-->\n\n<!--<img class=\"fullBg\" fullpage [src]=\"page.image\">-->\n"

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ })

},[610]);
//# sourceMappingURL=main.bundle.js.map