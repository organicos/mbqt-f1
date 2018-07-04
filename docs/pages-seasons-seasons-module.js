(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seasons-seasons-module"],{

/***/ "./src/app/pages/seasons/seasons-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/seasons/seasons-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SeasonsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsRoutingModule", function() { return SeasonsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seasons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seasons.component */ "./src/app/pages/seasons/seasons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _seasons_component__WEBPACK_IMPORTED_MODULE_2__["SeasonsComponent"] }
];
var SeasonsRoutingModule = /** @class */ (function () {
    function SeasonsRoutingModule() {
    }
    SeasonsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SeasonsRoutingModule);
    return SeasonsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/seasons/seasons.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/seasons/seasons.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/seasons/seasons.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/seasons/seasons.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let year of years\">\r\n    <app-season [year]=\"year\"></app-season>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/seasons/seasons.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/seasons/seasons.component.ts ***!
  \****************************************************/
/*! exports provided: SeasonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsComponent", function() { return SeasonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeasonsComponent = /** @class */ (function () {
    function SeasonsComponent() {
        this.years = Array.from({ length: 11 }, function (v, k) { return k + 2007; });
    }
    SeasonsComponent.prototype.ngOnInit = function () {
    };
    SeasonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seasons',
            template: __webpack_require__(/*! ./seasons.component.html */ "./src/app/pages/seasons/seasons.component.html"),
            styles: [__webpack_require__(/*! ./seasons.component.css */ "./src/app/pages/seasons/seasons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeasonsComponent);
    return SeasonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/seasons/seasons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/seasons/seasons.module.ts ***!
  \*************************************************/
/*! exports provided: SeasonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonsModule", function() { return SeasonsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _seasons_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seasons-routing.module */ "./src/app/pages/seasons/seasons-routing.module.ts");
/* harmony import */ var _seasons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seasons.component */ "./src/app/pages/seasons/seasons.component.ts");
/* harmony import */ var _components_season_season_season_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/season/season/season.module */ "./src/app/shared/components/season/season/season.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SeasonsModule = /** @class */ (function () {
    function SeasonsModule() {
    }
    SeasonsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _seasons_routing_module__WEBPACK_IMPORTED_MODULE_2__["SeasonsRoutingModule"],
                _components_season_season_season_module__WEBPACK_IMPORTED_MODULE_4__["SeasonModule"],
            ],
            declarations: [_seasons_component__WEBPACK_IMPORTED_MODULE_3__["SeasonsComponent"]]
        })
    ], SeasonsModule);
    return SeasonsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/season/season/season.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/season/season/season.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/season/season/season.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/season/season/season.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{year}} {{ circuit?.circuitName }}</h1>\n\n<div *ngIf=\"season else loadingTemplate\">\n\n  <div *ngIf=\"season.MRData else problemsLoadingTemplate\">\n\n    <p>\n      <strong>Champion:</strong>\n      {{ champion.givenName }}\n      {{ champion.familyName }}\n    </p>\n    \n  </div>\n\n</div>\n\n<ng-template #loadingTemplate>\n  Loading...\n</ng-template>\n\n<ng-template #problemsLoadingTemplate>\n  Problems loading data. Please try again later.\n</ng-template>"

/***/ }),

/***/ "./src/app/shared/components/season/season/season.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/season/season/season.component.ts ***!
  \*********************************************************************/
/*! exports provided: SeasonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonComponent", function() { return SeasonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ergast_ergast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/ergast/ergast.service */ "./src/app/shared/services/ergast/ergast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeasonComponent = /** @class */ (function () {
    function SeasonComponent(ergast) {
        this.ergast = ergast;
    }
    SeasonComponent.prototype.ngAfterViewInit = function () {
        this.loadSeasons();
    };
    SeasonComponent.prototype.loadSeasons = function () {
        var _this = this;
        this.ergast.season(this.year)
            .toPromise()
            .then(function (season) {
            _this.season = season;
            _this.extractChampion();
            _this.extractCircuit();
        });
    };
    SeasonComponent.prototype.extractChampion = function () {
        try {
            this.champion = this.season.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
        }
        catch (error) {
            return undefined;
        }
    };
    SeasonComponent.prototype.extractCircuit = function () {
        try {
            this.circuit = this.season.MRData.RaceTable.Races[0].Circuit;
        }
        catch (error) {
            return undefined;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SeasonComponent.prototype, "year", void 0);
    SeasonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-season',
            template: __webpack_require__(/*! ./season.component.html */ "./src/app/shared/components/season/season/season.component.html"),
            styles: [__webpack_require__(/*! ./season.component.css */ "./src/app/shared/components/season/season/season.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ergast_ergast_service__WEBPACK_IMPORTED_MODULE_1__["ErgastService"]])
    ], SeasonComponent);
    return SeasonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/season/season/season.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/season/season/season.module.ts ***!
  \******************************************************************/
/*! exports provided: SeasonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeasonModule", function() { return SeasonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _season_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./season.component */ "./src/app/shared/components/season/season/season.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeasonModule = /** @class */ (function () {
    function SeasonModule() {
    }
    SeasonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_season_component__WEBPACK_IMPORTED_MODULE_2__["SeasonComponent"]],
            exports: [_season_component__WEBPACK_IMPORTED_MODULE_2__["SeasonComponent"]]
        })
    ], SeasonModule);
    return SeasonModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-seasons-seasons-module.js.map