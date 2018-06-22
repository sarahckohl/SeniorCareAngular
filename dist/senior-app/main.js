(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\r\n\r\n\t\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\r\n\r\n</head>\r\n\r\n<body>\r\n    <nav class=\"navbar navbar-default navbar-static-top\"  style=\"display: none\">\r\n        <div class=\"navbar-header\">\r\n          <a routerLink=\"/login\">Login</a>\r\n                \r\n          <a routerLink=\"/register_patient\">Register as a Patient</a>\r\n          &nbsp;\r\n          <a routerLink=\"/register_nurse\">Register as a Nurse</a>\r\n          &nbsp;\r\n          <a routerLink=\"/calendar\">Scheduler</a>\r\n        </div>\r\n    </nav>\r\n       \r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.3.1.min.js\" integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\" crossorigin=\"anonymous\"></script>\r\n\r\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\" integrity=\"sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T\" crossorigin=\"anonymous\"></script>\r\n</body>\r\n\r\n\r\n\r\n\r\n\r\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_register_nurse_register_nurse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register-nurse/register-nurse.component */ "./src/app/views/user/register-nurse/register-nurse.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _views_user_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/calendar/calendar.component */ "./src/app/views/user/calendar/calendar.component.ts");
/* harmony import */ var _views_user_available_available_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/available/available.component */ "./src/app/views/user/available/available.component.ts");
/* harmony import */ var _views_user_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/user/appointment/appointment.component */ "./src/app/views/user/appointment/appointment.component.ts");
/* harmony import */ var _views_user_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/user/create/create.component */ "./src/app/views/user/create/create.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _views_user_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/user/landing-page/landing-page.component */ "./src/app/views/user/landing-page/landing-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _views_user_register_nurse_register_nurse_component__WEBPACK_IMPORTED_MODULE_6__["RegisterNurseComponent"],
                _views_user_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"],
                _views_user_available_available_component__WEBPACK_IMPORTED_MODULE_11__["AvailableComponent"],
                _views_user_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_12__["AppointmentComponent"],
                _views_user_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"],
                _views_user_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_16__["LandingPageComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_9__["DataTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_15__["HttpModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_register_nurse_register_nurse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/register-nurse/register-nurse.component */ "./src/app/views/user/register-nurse/register-nurse.component.ts");
/* harmony import */ var _views_user_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/calendar/calendar.component */ "./src/app/views/user/calendar/calendar.component.ts");
/* harmony import */ var _views_user_available_available_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/available/available.component */ "./src/app/views/user/available/available.component.ts");
/* harmony import */ var _views_user_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/appointment/appointment.component */ "./src/app/views/user/appointment/appointment.component.ts");
/* harmony import */ var _views_user_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/create/create.component */ "./src/app/views/user/create/create.component.ts");
/* harmony import */ var _views_user_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/landing-page/landing-page.component */ "./src/app/views/user/landing-page/landing-page.component.ts");









var appRoutes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register_patient', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'register_nurse', component: _views_user_register_nurse_register_nurse_component__WEBPACK_IMPORTED_MODULE_3__["RegisterNurseComponent"] },
    { path: 'calendar', component: _views_user_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"] },
    { path: 'available', component: _views_user_available_available_component__WEBPACK_IMPORTED_MODULE_5__["AvailableComponent"] },
    { path: 'appointment', component: _views_user_appointment_appointment_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentComponent"] },
    { path: 'create', component: _views_user_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"] },
    { path: "", component: _views_user_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/views/user/appointment/appointment.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/user/appointment/appointment.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/appointment/appointment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/user/appointment/appointment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form>\n    <table class=\"table table-striped table-bordered table-responsive\" style=\"margin-bottom: 0px\">\n       <thead>\n         <tr>\n          <th style=\"width: 20%; text-align: center\" class=\"bg-primary\">Appointment Schedule</th>\n          <th style=\"width: 20%; text-align: center\"><a href=\"http://localhost:4200/create\">Create Appointment</a></th>\n          <th style=\"width: 20%; text-align: center\">Preferences</th>\n          <th style=\"width: 20%; text-align: center\">Profile</th>\n          <th style=\"width: 20%\"><a href=\"http://localhost:4200/login\">Logout</a></th>          \n        </tr>\n        </thead>\n      </table>\n      <table class=\"table table-striped table-bordered table-responsive\" style=\"margin-top: 0px\">\n          <thead class=\"light\">\n         \n            <th style=\"width:10%\"></th>\n            <th style=\"width:10%\" id=\"day1\">\n              June 4, 2018 {{this.day}}\n            </th>\n            <th style=\"width:10%\" id=\"day2\">\n              June 5, 2018 {{this.day}}\n            </th>\n            <th style=\"width:10%\" id=\"day3\">\n              June 6, 2018 {{this.day}}\n            </th>\n            <th style=\"width:10%\" id=\"day4\">\n              June 7, 2018 {{this.day}}\n            </th>\n            <th style=\"width:10%\" id=\"day5\">\n              June 8, 2018 {{this.day}}\n            </th>\n            <th style=\"width:10%\" id=\"day6\">\n              June 9, 2018 {{this.day}}\n            </th>\n            <th style=\"width:10%\" id=\"day7\">\n              June 10, 2018 {{this.day}}\n            </th>\n          \n          </thead>\n          <tbody>\n          <tr>\n            <td id=\"nine\">&nbsp;9:00-10:00am</td>\n            <td><span *ngFor=\"let patientNine of patientsNine\">{{patientNine.name}}</span></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>        \n            <td></td>\n          </tr>\n          <tr>\n              <td id=\"ten\">10:00-11:00am</td>\n              <td><span *ngFor=\"let patientTen of patientsTen\">{{patientTen.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr>\n              <td id=\"eleven\">11:00-12:00pm</td>\n              <td><span *ngFor=\"let patientEleven of patientsEleven\">{{patientEleven.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr>\n              <td id=\"twelve\">&nbsp;12:00-1:00pm</td>\n              <td><span *ngFor=\"let patientTwelve of patientsTwelve\">{{patientTwelve.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr>\n              <td id=\"one\">&nbsp;1:00-2:00pm</td>\n              <td><span *ngFor=\"let patientOne of patientsOne\">{{patientOne.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr>\n              <td id=\"two\">&nbsp;2:00-3:00pm</td>\n              <td><span *ngFor=\"let patientTwo of patientsTwo\">{{patientTwo?.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr>\n              <td id=\"three\">&nbsp;3:00-4:00pm</td>\n              <td><span *ngFor=\"let patientThree of patientsThree\">{{patientThree?.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr>\n              <td id=\"four\">&nbsp;4:00-5:00pm </td>\n              <td><span *ngFor=\"let patientFour of patientsFour\">{{patientFour?.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>\n          </tr>\n          <tr> \n              <td id=\"five\">&nbsp;5:00-6:00pm </td>\n              <td><span *ngFor=\"let patientFive of patientsFive\">{{patientFive?.name}}</span></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>        \n              <td></td>  \n          </tr>  \n          </tbody>\n        \n      </table>\n    </form>"

/***/ }),

/***/ "./src/app/views/user/appointment/appointment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/user/appointment/appointment.component.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentComponent", function() { return AppointmentComponent; });
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

var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent() {
    }
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    AppointmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! ./appointment.component.html */ "./src/app/views/user/appointment/appointment.component.html"),
            styles: [__webpack_require__(/*! ./appointment.component.css */ "./src/app/views/user/appointment/appointment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppointmentComponent);
    return AppointmentComponent;
}());



/***/ }),

/***/ "./src/app/views/user/available/available.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/user/available/available.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/views/user/available/available.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/user/available/available.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form>\n\n  <table class=\"table\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n    <thead>\n    <tr>\n        <th style=\"width:16.5%; text-align: center\">\n            <mfDefaultSorter by=\"schedule\"><a href=\"http://localhost:4200/calendar\">Schedule</a></mfDefaultSorter>\n        </th>\n        <th style=\"width: 16.5%; text-align: center\" class=\"bg-primary\">\n            <mfDefaultSorter by=\"patients\">Available Patients</mfDefaultSorter>\n        </th>\n        <th style=\"width: 16.5%; text-align: center\">\n            <mfDefaultSorter by=\"notifications\">Notifications</mfDefaultSorter>\n        </th>\n        <th style=\"width: 16.5%; text-align: center\">\n            <mfDefaultSorter by=\"supplies\">Supplies Request</mfDefaultSorter>\n        </th>\n        <th style=\"width: 16.5%; text-align: center\">\n            <mfDefaultSorter by=\"profile\">Profile</mfDefaultSorter>\n        </th>\n        <th style=\"width: 16.5%; text-align: center\"><a href=\"http://localhost:4200/login\">Logout</a></th>\n               \n    </tr>\n    </thead>\n    \n    <tbody>      \n</table>\n<table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th style=\"width:12.5%; text-align: center\">Name</th>\n        <th style=\"width:12.5%; text-align: center\">Age</th>\n        <th style=\"width:12.5%; text-align: center\">Location</th>\n        <th style=\"width:12.5%; text-align: center\">Care Needed</th>\n        <th style=\"width:12.5%; text-align: center\">Date Needed</th>\n        <th style=\"width:12.5%; text-align: center\">Time</th>\n        <th style=\"width:12.5%; text-align: center\">Medication</th>\n        <th style=\"width:12.5%; text-align: center\">Add</th>\n      \n      </tr>\n    </thead>\n    <tbody id=\"tablebody\">\n      <tr *ngFor=\"let patient of patients\">\n        <td style=\"width:12.5%; text-align: center\">{{ patient.name }}</td>\n        <td style=\"width:12.5%; text-align: center\">{{ patient.age }}</td>\n        <td style=\"width:12.5%; text-align: center\">{{ patient.location}}</td>\n        <td style=\"width:12.5%; text-align: center\">{{ patient.careneed }}</td>\n        <td style=\"width:12.5%; text-align: center\">{{ patient.dateneed }} </td>\n        <td style=\"width:12.5%; text-align: center\">{{ patient.time }} </td>\n        <td style=\"width:12.5%; text-align: center\">{{ patient.meds }}</td>\n        <td align=\"center\" style=\"width:12.5%; text-align: center\"><a routerLink=\"/calendar\" button type=\"submit\" class=\"btn btn-primary btn-sm\" (click)=\"addPatient()\">Add</a></td>\n             \n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/views/user/available/available.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/user/available/available.component.ts ***!
  \*************************************************************/
/*! exports provided: AvailableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableComponent", function() { return AvailableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _available_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./available.service */ "./src/app/views/user/available/available.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvailableComponent = /** @class */ (function () {
    function AvailableComponent(atService) {
        this.atService = atService;
    }
    AvailableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atService.getPatients().subscribe(function (value) {
            console.log(value[0].name);
            _this.patients = value;
        });
    };
    AvailableComponent.prototype.addPatient = function () {
    };
    AvailableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-available',
            template: __webpack_require__(/*! ./available.component.html */ "./src/app/views/user/available/available.component.html"),
            styles: [__webpack_require__(/*! ./available.component.css */ "./src/app/views/user/available/available.component.css")]
        }),
        __metadata("design:paramtypes", [_available_service__WEBPACK_IMPORTED_MODULE_1__["AvailableService"]])
    ], AvailableComponent);
    return AvailableComponent;
}());



/***/ }),

/***/ "./src/app/views/user/available/available.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/available/available.service.ts ***!
  \***********************************************************/
/*! exports provided: AvailableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableService", function() { return AvailableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _calendar_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar/mock.data */ "./src/app/views/user/calendar/mock.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailableService = /** @class */ (function () {
    //Replace with Http constructor when connecting to Spring
    // constructor(private http: HttpClient) {}
    function AvailableService() {
    }
    //For connecting to SpringData:
    // getPatients(): Observable<any[]> {
    //   return this.http.post(patients)('/springdata/URL/HERE', '');
    // }
    AvailableService.prototype.getPatients = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_calendar_mock_data__WEBPACK_IMPORTED_MODULE_2__["patients"]);
    };
    AvailableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AvailableService);
    return AvailableService;
}());



/***/ }),

/***/ "./src/app/views/user/calendar/calendar.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/calendar/calendar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/user/calendar/calendar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/calendar/calendar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form>\n <table class=\"table\" style=\"margin-bottom: 0px\">\n    <thead>\n   \n        <th style=\"width:16.5%; text-align: center\" class=\"bg-primary\">Scheduled Patients</th>\n        <th style=\"width: 16.5%; text-align: center\"><a href=\"http://localhost:4200/available\">Available Patients</a></th>\n        <th style=\"width: 16.5%; text-align: center\">Notifications</th>\n        <th style=\"width: 16.5%; text-align: center\">Supplies Request</th>\n        <th style=\"width: 16.5%; text-align: center\">Profile</th>\n        <th style=\"width: 16.5%; text-align: center\"><a href=\"http://localhost:4200/login\">Logout</a></th>\n    \n    </thead>\n    <tbody>\n</table>\n<table class=\"table table-striped table-bordered table-responsive\" style=\"margin-top: 0px\">\n    <thead class=\"light\">\n   \n      <th style=\"width:10%\"></th>\n      <th style=\"width:10%\" id=\"day1\">\n        June 4, 2018 {{this.day}}\n      </th>\n      <th style=\"width:10%\" id=\"day2\">\n        June 5, 2018 {{this.day}}\n      </th>\n      <th style=\"width:10%\" id=\"day3\">\n        June 6, 2018 {{this.day}}\n      </th>\n      <th style=\"width:10%\" id=\"day4\">\n        June 7, 2018 {{this.day}}\n      </th>\n      <th style=\"width:10%\" id=\"day5\">\n        June 8, 2018 {{this.day}}\n      </th>\n      <th style=\"width:10%\" id=\"day6\">\n        June 9, 2018 {{this.day}}\n      </th>\n      <th style=\"width:10%\" id=\"day7\">\n        June 10, 2018 {{this.day}}\n      </th>\n    \n    </thead>\n    <tbody>\n    <tr>\n      <td id=\"nine\">&nbsp;9:00-10:00am</td>\n      <td><span *ngFor=\"let patientNine of patientsNine\">{{patientNine.name}}</span></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>        \n      <td></td>\n    </tr>\n    <tr>\n        <td id=\"ten\">10:00-11:00am</td>\n        <td><span *ngFor=\"let patientTen of patientsTen\">{{patientTen.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr>\n        <td id=\"eleven\">11:00-12:00pm</td>\n        <td><span *ngFor=\"let patientEleven of patientsEleven\">{{patientEleven.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr>\n        <td id=\"twelve\">&nbsp;12:00-1:00pm</td>\n        <td><span *ngFor=\"let patientTwelve of patientsTwelve\">{{patientTwelve.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr>\n        <td id=\"one\">&nbsp;1:00-2:00pm</td>\n        <td><span *ngFor=\"let patientOne of patientsOne\">{{patientOne.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr>\n        <td id=\"two\">&nbsp;2:00-3:00pm</td>\n        <td><span *ngFor=\"let patientTwo of patientsTwo\">{{patientTwo?.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr>\n        <td id=\"three\">&nbsp;3:00-4:00pm</td>\n        <td><span *ngFor=\"let patientThree of patientsThree\">{{patientThree?.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr>\n        <td id=\"four\">&nbsp;4:00-5:00pm </td>\n        <td><span *ngFor=\"let patientFour of patientsFour\">{{patientFour?.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>\n    </tr>\n    <tr> \n        <td id=\"five\">&nbsp;5:00-6:00pm </td>\n        <td><span *ngFor=\"let patientFive of patientsFive\">{{patientFive?.name}}</span></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>        \n        <td></td>  \n    </tr>  \n    </tbody>\n  \n</table>\n</form>"

/***/ }),

/***/ "./src/app/views/user/calendar/calendar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/calendar/calendar.component.ts ***!
  \***********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.service */ "./src/app/views/user/calendar/calendar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(atService) {
        this.atService = atService;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.span = this.atService.getSpans();
        this.atService.getPatientsNine().subscribe(function (value) {
            _this.patientsNine = value;
        });
        this.atService.getPatientsTen().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsTen = value;
        });
        this.atService.getPatientsEleven().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsEleven = value;
        });
        this.atService.getPatientsTwelve().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsTwelve = value;
        });
        this.atService.getPatientsOne().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsOne = value;
        });
        this.atService.getPatientsTwo().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsTwo = value;
        });
        this.atService.getPatientsThree().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsThree = value;
        });
        this.atService.getPatientsFour().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsFour = value;
        });
        this.atService.getPatientsFive().subscribe(function (value) {
            console.log(value[0].name);
            _this.patientsFive = value;
        });
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/views/user/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/views/user/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_calendar_service__WEBPACK_IMPORTED_MODULE_1__["CalendarService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/views/user/calendar/calendar.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/calendar/calendar.service.ts ***!
  \*********************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock.data */ "./src/app/views/user/calendar/mock.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarService = /** @class */ (function () {
    //Replace with Http constructor when connecting to Spring
    // constructor(private http: HttpClient) {}
    function CalendarService() {
    }
    //Retreive patients by appoint start time
    // getPatientsNine(): Observable<any[]> {
    //   return this.http.post(patientsNine)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsNine = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsNine"]);
    };
    // getPatientsNine(): Observable<any[]> {
    //   return this.http.post(patients)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsTen = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsTen"]);
    };
    // getPatientsEleven(): Observable<any[]> {
    //   return this.http.post(patients)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsEleven = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsEleven"]);
    };
    // getPatientsTwelve(): Observable<any[]> {
    //   return this.http.post(patientsTwelve)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsTwelve = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsTwelve"]);
    };
    // getPatientsOne(): Observable<any[]> {
    //   return this.http.post(patientsOne)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsOne = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsOne"]);
    };
    // getPatientsTwo(): Observable<any[]> {
    //   return this.http.post(patientsTwo)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsTwo = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsTwo"]);
    };
    // getPatientsThree(): Observable<any[]> {
    //   return this.http.post(patientsThree)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsThree = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsThree"]);
    };
    // getPatientsFour(): Observable<any[]> {
    //   return this.http.post(patientsFour)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsFour = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsFour"]);
    };
    // getPatientsFive(): Observable<any[]> {
    //   return this.http.post(patientsFive)('/springdata/URL/HERE', '');
    // }
    CalendarService.prototype.getPatientsFive = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_data__WEBPACK_IMPORTED_MODULE_2__["patientsFive"]);
    };
    CalendarService.prototype.getSpans = function () {
        return ["name"];
    };
    ;
    CalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/views/user/calendar/mock.data.ts":
/*!**************************************************!*\
  !*** ./src/app/views/user/calendar/mock.data.ts ***!
  \**************************************************/
/*! exports provided: patientsNine, patientsTen, patientsEleven, patientsTwelve, patientsOne, patientsTwo, patientsThree, patientsFour, patientsFive, patients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsNine", function() { return patientsNine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsTen", function() { return patientsTen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsEleven", function() { return patientsEleven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsTwelve", function() { return patientsTwelve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsOne", function() { return patientsOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsTwo", function() { return patientsTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsThree", function() { return patientsThree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsFour", function() { return patientsFour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patientsFive", function() { return patientsFive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patients", function() { return patients; });
var patientsNine = [
    {
        name: 'Bobby Jones'
    }
];
var patientsTen = [
    {
        name: 'Mary Clark'
    }
];
var patientsEleven = [
    {
        name: 'Jack Barry'
    }
];
var patientsTwelve = [
    {
        name: 'Martin Thomas'
    }
];
var patientsOne = [
    {
        name: 'Jim Smith'
    }
];
var patientsTwo = [
    {
        name: 'Morris Bentley'
    }
];
var patientsThree = [
    {
        name: 'Lori Lansing'
    }
];
var patientsFour = [
    {
        name: 'Brent Brown'
    }
];
var patientsFive = [
    {
        name: 'Winston Waters'
    }
];
var patients = [
    {
        name: 'Timothy Jackson',
        age: 89,
        location: 'Reston',
        careneed: 'Bath, Administer Medicine',
        dateneed: '07/01/18',
        time: '9:00-2:00',
        meds: 'Warfarin'
    },
    {
        name: 'Jane Johnson',
        age: 78,
        location: 'Reston',
        careneed: 'Administer Medicine',
        dateneed: '08/11/18',
        time: '7:00-10:00',
        meds: 'Lisinopril'
    },
    {
        name: 'Jane Johnson',
        age: 78,
        location: 'Herndon',
        careneed: 'Bath',
        dateneed: '08/11/18',
        time: '5:00-6:00',
        meds: 'N/A'
    }
];


/***/ }),

/***/ "./src/app/views/user/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/views/user/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background {\r\n\r\n    background: url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBSaWdodHM6TWFya2VkPSJGYWxzZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzQyNUY1MzBCQjExMUU0QUE3NkZBOEJCNTgyMTZDRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzQyNUY1MjBCQjExMUU0QUE3NkZBOEJCNTgyMTZDRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1MzIFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDoyNjE0MDI3NjZERUFFMjExOTRDODk1OEIxNzlFNUEwRCIgc3RSZWY6ZG9jdW1lbnRJRD0iNURFODdGMjkyMzAxMUFBMEI0OTZERDNBRThBOUZCMDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht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') top left repeat;\r\n    margin-top: 0px;\r\n}"

/***/ }),

/***/ "./src/app/views/user/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/user/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"background\">\n<div class=\"container\" style=\"max-width:600px;\">\n    <h1 style=\"color: black; margin-bottom: 15px; text-align: center\" class=\"text-muted\">Make an Appointment</h1>\n    <form [formGroup]=\"create\" (ngSubmit) = \"createAppointment()\">\n      <div class=\"row\">\n          <div class=\"col\"> \n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"name\" class=\"form-control\" id=\"fname\" formControlName=\"name\" placeholder=\"Enter Name\">\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\">\n                <label for=\"age\">Age</label>\n                <input type=\"age\" class=\"form-control\" id=\"sname\" formControlName=\"age\" placeholder=\"Enter Age\">\n            </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"form-group\">\n              <label for=\"city\">City</label>\n              <input type=\"city\" class=\"form-control\" id=\"email\" formControlName=\"city\" placeholder=\"Enter City\">\n          </div>\n        </div>\n      \n        <div class=\"col\">\n            <div class=\"form-group\">\n              <label for=\"mes\">Medication</label>\n              <input type=\"meds\" class=\"form-control\" id=\"meds\" formControlName=\"meds\" placeholder=\"Enter Your Medication(s)\">\n            </div>\n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n                <div class=\"form-group\">\n                          <label for=\"start-time\">Date and Start Time</label>\n                        <div type=\"time\" value=\"Desired Start Time\" id=\"start-time\">\n                           <input class=\"form-control\" type=\"datetime-local\" id=\"datetime\" name=\"datetime\">\n                           \n                        </div>                 \n                </div>\n            </div>\n           \n            <div class=\"col\">\n              <div class=\"form-group\">\n                  <label for=\"end-time\">End Time</label>\n                  <div class>\n                    <input class=\"form-control\" type=\"time\" value=\"Desired End Time\" id=\"end-time\">\n                  </div>\n              </div>\n            </div>\n      </div>\n        <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col\">\n                  <div class=\"form-group\">\n                    <label for=\"city\">Care Type</label>\n                    <input type=\"city\" class=\"form-control\" id=\"careneed\" formControlName=\"careneed\" placeholder=\"Describe Type of Care Needed\">\n                  </div>\n                </div>           \n            </div>\n        </div>\n                   \n              <a button type=\"submit\" id=\"create\" class=\"btn btn-primary\" style=\"color: white; float: right; margin-bottom: 20px\" value=\"create\" (click)=\"createAppointment()\">Make Appointment</a>\n              <a href=\"http://localhost:4200/appointment\" button type=\"submit\" style=\"color: white\" class=\"btn btn-primary\" style=\"margin-bottom: 20px; margin-left: 250px;\">Cancel</a>\n              <a href=\"http://localhost:4200/login\" button type=\"submit\" style=\"color: white\" class=\"btn btn-primary\" style=\"float: left; margin-bottom: 20px\">Logout</a>\n    </form>\n  </div>\n</div>\n        "

/***/ }),

/***/ "./src/app/views/user/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/user/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(httpClient) {
        this.httpClient = httpClient;
        this.productObj = {};
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.create = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            meds: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            careneed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    };
    CreateComponent.prototype.createAppointment = function () {
        this.productObj = {
            "name": "",
            "age": "",
            "city": "",
            "meds": "",
            "careneed": "",
            "start": "",
            "end": ""
        };
        console.log(this.create.value);
        this.httpClient.get('http//localhost:3200/create', JSON.stringify(this.create.value));
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/views/user/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/views/user/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/views/user/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/user/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\r\n\tbackground-image: url('fake-care.jpg');\r\n\t\r\n\tbackground-size: cover;\r\n    max-height: 950%;\r\n    height: 650px; \r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n \r\n  \r\n}\r\n\r\n#login {\r\n  text-align: center;\r\n  height: 50px;\r\n  width: 100px;\r\n  margin-top: 350px;\r\n \r\n    \r\n  }"

/***/ }),

/***/ "./src/app/views/user/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/user/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"view\">\n<div id=\"background\">\n  <div> \n    <div>\n      \n        \n          <div class=\"text-center\">\n            <div class=\"h-50 d-inline-block\">\n              <a href=\"http://localhost:4200/login\" button id=\"login\"type=\"submit\" class=\"btn btn-primary btn-lg\">Login</a>\n          </div>\n     \n       </div>\n      </div>\n    </div>\n  </div>\n<div>\n   "

/***/ }),

/***/ "./src/app/views/user/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/user/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/views/user/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/views/user/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Muli|Open+Sans|Source+Sans+Pro|Ubuntu');\r\n/* LOGIN PAGE STYLE SHEET\r\nLOGIN.HTML\r\n*/\r\n/* \r\nfont-family: 'Open Sans', sans-serif;\r\nfont-family: 'Source Sans Pro', sans-serif;\r\nfont-family: 'Ubuntu', sans-serif;\r\nfont-family: 'Muli', sans-serif;\r\n*/\r\nbody{\r\n\tfont-family: 'Muli', sans-serif;\r\n\r\n}\r\na, a:hover{\r\n\ttext-decoration: none;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor: grabbing;\r\n}\r\n.bg-form {\r\n\tbackground: url('fake-care.jpg');\r\n\tbackground-position: 100% 0;\r\n\tbackground-size: cover;\r\n\tmax-height: 100%;\r\n}\r\n.login-form{\r\n\tbackground: #fff;\r\n\tpadding: 30px 50px;\r\n\tmargin: 62px 0px;\r\n}\r\n.login-form .form-control {\r\n\theight: 50px;\r\n\tborder-radius: 0px;\r\n}\r\n.login-form #btn{\r\n\tbackground: #FCD71F;\r\n\tborder: none;\r\n}\r\n.bg-form .contact-text{\r\n\tcolor: #fff;\r\n\tmargin: 100px 0px;\r\n}\r\n.social-logins, .social{\r\n\tmargin: 30px 0px;\r\n}\r\n.social a{\r\n\tborder: 1px solid #FCD71F;\r\n\tpadding: 5px 10px;\r\n\tbackground: #FCD71F;\r\n\tcolor: #fff;\r\n}\r\n.forget-password a{\r\n\tcolor: #333;\r\n}\r\n.contact-text p{\r\n\tline-height: 1.6em;\r\n}"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\t<div id=\"view\">\r\n\r\n      <div class=\"bg-form\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <div class=\"login-form\">\r\n                <div class=\"login\">\r\n                  <h3>Login</h3>\r\n                  <hr>\r\n                </div>\r\n                <form [formGroup]=\"loginForm\">\r\n                  <div class=\"form-group\">\r\n                    <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Enter username\" formControlName=\"username\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Enter password\" formControlName=\"password\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"checkbox\" placeholder=\"Enter password\">\r\n                    Remember Password\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"button\" style=\"background:rgb(31, 189, 252);border-style:none;\" class=\"form-control btn\" value=\"Login\"\r\n                      id=\"login\">\r\n                  </div>\r\n                  <a routerLink=\"/register_patient\" class=\"btn btn-secondary\">Register as a Patient</a>\r\n                   &nbsp;\r\n                  <a routerLink=\"/register_nurse\" class=\"btn btn-secondary\">Register as a Nurse</a>\r\n                  <span class=\"danger\" id=\"message\"></span>\r\n                </form>\r\n\r\n                <hr>\r\n                <div class=\"forget-password\">\r\n                  <a href=\"\">Forgot Your Password?</a>\r\n                </div>\r\n  \r\n              </div>\r\n  \r\n            </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n<br>\r\n<label>Username</label>\r\n<input placeholder = \"Username\"/>\r\n<br/>\r\n<label>Password</label>\r\n<input placeholder = \"Password\" />\r\n<br/>\r\n<button>Login</button>\r\n-->"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register-nurse/register-nurse.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/user/register-nurse/register-nurse.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\r\n@import url('https://fonts.googleapis.com/css?family=Maven+Pro');\r\nbody{\r\n        margin: 0;\r\n        padding: 0;\r\n        font-family: 'Maven Pro', sans-serif;\r\n    }\r\nbody{\r\n        margin: 0;\r\n        padding: 0;\r\n        font-family: 'Maven Pro', sans-serif;\r\n    }\r\ninput[type=text]:focus,input[type=email]:focus,input[type=password]:focus{\r\n        outline: none;\r\n        box-shadow: 0px 0px 2px 0px #68CAF1;\r\n        border: none;\r\n        \r\n    }\r\n.image-left{\r\n        width: 50%;\r\n        float: right;\r\n        background-color: #fff;\r\n        color: #ccc;\r\n        height: 100vh;\r\n    }\r\n.image-wrapper{\r\n        margin: 6em 6em;\r\n    }\r\n.image-wrapper h3{\r\n        font-size: 40px;\r\n        margin-bottom: 1.5em;\r\n    }\r\n.image-wrapper ul li{\r\n        font-size: 25px;\r\n        margin-bottom: 2em;\r\n    }\r\n.image-wrapper ul li i{\r\n        margin-right: 20px; \r\n    }\r\n.form-register .u-name{\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAwkQIzu+dBhGAAAA1ElEQVQoz23PsUoDURCF4S+7G8RCAqJihFVBZUGxzyNYW4hVnsBXEOwsBVG0EXtfxVKw2q3S2QXBkGQLi5h7I5tTnTnzzzDTEnWqb6Jr3bUPDbW9SEHHq/Y8TgNwIvEOxraNfM3iRESHwQ/jYAQKVfCVognsK4Mv7TWPPHYV/I28ueHTkRWwqzawRD2X4FYnhskCMFWDiZ9l8+fu/vAdj3r/m11PzhbqVN+9zRg8WG1sXPM8v2FLZdQAvpU2ZsBYEf8Oyh2a0gIHLuRqtRqZTGbgTcUvJ38ozpxEpmMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDMtMDlUMTY6MzU6NTkrMDE6MDCa8k6EAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAzLTA5VDE2OjM1OjU5KzAxOjAw66/2OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=) no-repeat 16px center;\r\n    }\r\n.form-register .e-mail{\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAwkQNBFgTFUGAAAAtklEQVQoz6XRLY7CUBQG0EPBkDYkCJIG0QUg0GNIRuBmDSg0rOOhCcXgWASWLTA7IambMDOiLeHfcOU7L/luvsu70zAxdHqiTd/sLDSf8MIucrC1FN9xbGnrQEDfRnrFqY0+QvmBxNrgzANrCQhR9VSYmRqDsamZooTWRWbbhxF+tMWONZQRPbkuMhm6cr1aAzpWVWY9iZUOQqvaYH5TVmHur9whFfl9UNMJkbThy+eLqvdvH9M/pYAjdfRSzdgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDMtMDlUMTY6NTI6MTcrMDE6MDBE7uoZAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAzLTA5VDE2OjUyOjE3KzAxOjAwNbNSpQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=) no-repeat 16px center;\r\n    }\r\n.form-register .p-password{\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAwkSNi+Qn/5BAAAA/UlEQVQoz23RzyvDARgG8M9mftWiSZkyOUkkJRdx0JTd3OWGg4MDf4CT5OSPUEo5KSfJhaZtrVE7yEXhMJHE2a+D72Zbe07v87w/nrf3bVKLhGmtXv2UhVAl1W5b0oOihCFP1t1Vd47LWaniY9JWqwuSBoJoWDNocWi+bgEdzuxLS4GYvK7agjUL6HIa8EWbMCkaCAeB0VXA445Z8ulcFLtKCjIy3lzoBNmIHntKBhVM6a2YHYl5h7Adl0oKGiHuOYycGY0xKxdB0beUE7cylVTUh5gNc3+0W16irrvuUBOylhud+v9ZbbYk3bvWb8RL+VmhusF9Rj268VUWfgGwNDpPIgmBBgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMy0wOVQxODo1NDo0NyswMTowMPv2mIoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDMtMDlUMTg6NTQ6NDcrMDE6MDCKqyA2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 16px center;\r\n    }\r\nul{\r\n        list-style: none;\r\n    }\r\n@media only screen and (max-width: 1050px) {\r\n        .image-left {\r\n           display: none;\r\n        }\r\n        .form-register{\r\n            width: 100%;\r\n        }\r\n        .form-register form{\r\n        margin: 4em 3.5em;\r\n        }\r\n    }\r\nselect,select option {\r\n        width: 100%;\r\n        height:45px;\r\n        font-size: 15px;\r\n        border-color: transparent;\r\n        border: 2px solid #5293BF;\r\n        font-family: 'Poiret One', cursive;\r\n        font-weight: bold;\r\n    }\r\nselect:focus{\r\n        border: none;\r\n        outline: 2px solid #5293BF;\r\n        box-shadow: 0px 0px 3px 0px #5293BF;\r\n    }\r\nselect option {\r\n        margin: 10px 0px;\r\n        padding: 10px;\r\n    }"

/***/ }),

/***/ "./src/app/views/user/register-nurse/register-nurse.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/user/register-nurse/register-nurse.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div style=\"width: 50%; float: left; height: 100vh;\"\r\n      class=\"form-register\">\r\n      <form style=\"margin: 6em 10em;\" [formGroup] = \"registerNurseForm\">\r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input id=\"firstname\"\r\n            style=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n            class=\"u-name\" type=\"text\" name=\"firstname\"\r\n            placeholder=\"First Name\" required=\"\">\r\n        </div>\r\n  \r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input id=\"lastname\"\r\n            style=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n            class=\"u-name\" type=\"text\" name=\"lastname\" placeholder=\"Last Name\"\r\n            required=\"\">\r\n        </div>\r\n  \r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input id=\"email\"\r\n            style=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n            class=\"e-mail\" type=\"email\" name=\"email\" placeholder=\"Email\"\r\n            required=\"\">\r\n        </div>\r\n  \r\n  \r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input id=\"username\"\r\n            style=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n            class=\"u-name\" type=\"text\" name=\"username\" placeholder=\"Username\"\r\n            required=\"\">\r\n        </div>\r\n  \r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input id=\"password\"\r\n            style=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n            class=\"p-password\" type=\"password\" name=\"password\"\r\n            placeholder=\"Password\" required=\"\">\r\n        </div>\r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input\r\n            style=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n            class=\"p-password\" type=\"password\" name=\"confirm-password\"\r\n            placeholder=\"Confirm password\" required=\"\">\r\n        </div>\r\n  \r\n  \r\n        <section id=\"language\" style=\"margin:50px 0px;\">\r\n          <div class=\"main\">\r\n            <div class=\"wrapper\" style=\"width:60%; margin:0 auto;\">\r\n              <span>Primary Language</span>\r\n              <div class=\"field\" style=\"margin-bottom:35px;\">\r\n                <select id=\"plang\">\r\n                  <option value=\"English\">English</option>\r\n                  <option value=\"Spanish\">Spanish</option>\r\n                  <option value=\"Mandarin\">Mandarin</option>\r\n                  <option value=\"Arabic\">Arabic</option>\r\n                  <option value=\"Russian\">Russian</option>\r\n                  <option value=\"Hindi\">Hindi</option>\r\n                  <option value=\"Vietnamese\">Vietnamese</option>\r\n                  <option value=\"Japanese\">Japanese</option>\r\n                  <option value=\"Urdu\">Urdu</option>\r\n                  <option value=\"Armenian\">Armenian</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          </section>\r\n  \r\n          <section id=\"language\" style=\"margin:50px 0px;\">\r\n              <div class=\"main\">\r\n                <div class=\"wrapper\" style=\"width:60%; margin:0 auto;\">\r\n                  <span>Secondary Language</span>\r\n                  <div class=\"field\" style=\"margin-bottom:35px;\">\r\n                    <select id=\"slang\">\r\n                      <option value=\"English\">English</option>\r\n                      <option value=\"Spanish\">Spanish</option>\r\n                      <option value=\"Mandarin\">Mandarin</option>\r\n                      <option value=\"Arabic\">Arabic</option>\r\n                      <option value=\"Russian\">Russian</option>\r\n                      <option value=\"Hindi\">Hindi</option>\r\n                      <option value=\"Vietnamese\">Vietnamese</option>\r\n                      <option value=\"Japanese\">Japanese</option>\r\n                      <option value=\"Urdu\">Urdu</option>\r\n                      <option value=\"Armenian\">Armenian</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </section>\t\r\n  \r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n            <input type=\"checkbox\" name=\"\"> I am a registered nurse\r\n          </div>\r\n\r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input type=\"checkbox\" name=\"\"> Agree to the Terms and Conditions\r\n        </div>\r\n        <div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n          <input id=\"signup\"\r\n            style=\"background-color: #68CAF1; color: #fff; cursor: pointer; border: none; outline: none; width: 8em; padding: 16px 20px; border-radius: 3px; box-shadow: none; font-size: 15px;\"\r\n            type=\"button\" value=\"Register\">\r\n  \r\n        </div>\r\n        <p>Already you have an account? <a routerLink=\"/login\">Login</a> -></p>\r\n        <router-outlet></router-outlet>\r\n      </form>\r\n    </div>\r\n    <div class=\"image-left\">\r\n      <div class=\"image-wrapper\">\r\n        <h3>Register</h3>\r\n        <ul style=\"list-style: none;\">\r\n  \r\n          <li id=\"user\">&emsp;&emsp;Access profile</li>\r\n          <li id=\"team\">&emsp;&emsp;Interact with team</li>\r\n          <li id=\"analytics\">&emsp;&emsp;Real time analytics</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/views/user/register-nurse/register-nurse.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/user/register-nurse/register-nurse.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterNurseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterNurseComponent", function() { return RegisterNurseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterNurseComponent = /** @class */ (function () {
    function RegisterNurseComponent() {
    }
    RegisterNurseComponent.prototype.ngOnInit = function () {
        this.registerNurseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    };
    RegisterNurseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-nurse',
            template: __webpack_require__(/*! ./register-nurse.component.html */ "./src/app/views/user/register-nurse/register-nurse.component.html"),
            styles: [__webpack_require__(/*! ./register-nurse.component.css */ "./src/app/views/user/register-nurse/register-nurse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterNurseComponent);
    return RegisterNurseComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');\r\n@import url('https://fonts.googleapis.com/css?family=Maven+Pro');\r\nbody{\r\n        margin: 0;\r\n        padding: 0;\r\n        font-family: 'Maven Pro', sans-serif;\r\n    }\r\nbody{\r\n        margin: 0;\r\n        padding: 0;\r\n        font-family: 'Maven Pro', sans-serif;\r\n    }\r\ninput[type=text]:focus,input[type=email]:focus,input[type=password]:focus{\r\n        outline: none;\r\n        box-shadow: 0px 0px 2px 0px #68CAF1;\r\n        border: none;\r\n        \r\n    }\r\n.image-left{\r\n        width: 50%;\r\n        float: right;\r\n        background-color: #fff;\r\n        color: #ccc;\r\n        height: 100vh;\r\n    }\r\n.image-wrapper{\r\n        margin: 6em 6em;\r\n    }\r\n.image-wrapper h3{\r\n        font-size: 40px;\r\n        margin-bottom: 1.5em;\r\n    }\r\n.image-wrapper ul li{\r\n        font-size: 25px;\r\n        margin-bottom: 2em;\r\n    }\r\n.image-wrapper ul li i{\r\n        margin-right: 20px; \r\n    }\r\n.form-register .u-name{\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAwkQIzu+dBhGAAAA1ElEQVQoz23PsUoDURCF4S+7G8RCAqJihFVBZUGxzyNYW4hVnsBXEOwsBVG0EXtfxVKw2q3S2QXBkGQLi5h7I5tTnTnzzzDTEnWqb6Jr3bUPDbW9SEHHq/Y8TgNwIvEOxraNfM3iRESHwQ/jYAQKVfCVognsK4Mv7TWPPHYV/I28ueHTkRWwqzawRD2X4FYnhskCMFWDiZ9l8+fu/vAdj3r/m11PzhbqVN+9zRg8WG1sXPM8v2FLZdQAvpU2ZsBYEf8Oyh2a0gIHLuRqtRqZTGbgTcUvJ38ozpxEpmMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDMtMDlUMTY6MzU6NTkrMDE6MDCa8k6EAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAzLTA5VDE2OjM1OjU5KzAxOjAw66/2OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=) no-repeat 16px center;\r\n    }\r\n.form-register .e-mail{\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAwkQNBFgTFUGAAAAtklEQVQoz6XRLY7CUBQG0EPBkDYkCJIG0QUg0GNIRuBmDSg0rOOhCcXgWASWLTA7IambMDOiLeHfcOU7L/luvsu70zAxdHqiTd/sLDSf8MIucrC1FN9xbGnrQEDfRnrFqY0+QvmBxNrgzANrCQhR9VSYmRqDsamZooTWRWbbhxF+tMWONZQRPbkuMhm6cr1aAzpWVWY9iZUOQqvaYH5TVmHur9whFfl9UNMJkbThy+eLqvdvH9M/pYAjdfRSzdgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDMtMDlUMTY6NTI6MTcrMDE6MDBE7uoZAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAzLTA5VDE2OjUyOjE3KzAxOjAwNbNSpQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=) no-repeat 16px center;\r\n    }\r\n.form-register .p-password{\r\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAwkSNi+Qn/5BAAAA/UlEQVQoz23RzyvDARgG8M9mftWiSZkyOUkkJRdx0JTd3OWGg4MDf4CT5OSPUEo5KSfJhaZtrVE7yEXhMJHE2a+D72Zbe07v87w/nrf3bVKLhGmtXv2UhVAl1W5b0oOihCFP1t1Vd47LWaniY9JWqwuSBoJoWDNocWi+bgEdzuxLS4GYvK7agjUL6HIa8EWbMCkaCAeB0VXA445Z8ulcFLtKCjIy3lzoBNmIHntKBhVM6a2YHYl5h7Adl0oKGiHuOYycGY0xKxdB0beUE7cylVTUh5gNc3+0W16irrvuUBOylhud+v9ZbbYk3bvWb8RL+VmhusF9Rj268VUWfgGwNDpPIgmBBgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMy0wOVQxODo1NDo0NyswMTowMPv2mIoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDMtMDlUMTg6NTQ6NDcrMDE6MDCKqyA2AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 16px center;\r\n    }\r\nul{\r\n        list-style: none;\r\n    }\r\n@media only screen and (max-width: 1050px) {\r\n        .image-left {\r\n           display: none;\r\n        }\r\n        .form-register{\r\n            width: 100%;\r\n        }\r\n        .form-register form{\r\n        margin: 4em 3.5em;\r\n        }\r\n    }\r\nselect,select option {\r\n        width: 100%;\r\n        height:45px;\r\n        font-size: 15px;\r\n        border-color: transparent;\r\n        border: 2px solid #5293BF;\r\n        font-family: 'Poiret One', cursive;\r\n        font-weight: bold;\r\n    }\r\nselect:focus{\r\n        border: none;\r\n        outline: 2px solid #5293BF;\r\n        box-shadow: 0px 0px 3px 0px #5293BF;\r\n    }\r\nselect option {\r\n        margin: 10px 0px;\r\n        padding: 10px;\r\n    }"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n\t\t<div style=\"width: 50%; float: left; height: 100vh;\"\r\n\t\t\tclass=\"form-register\">\r\n\t\t\t<form style=\"margin: 6em 10em;\" [formGroup] = \"registerForm\">\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input id=\"firstname\"\r\n\t\t\t\t\t\tstyle=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n\t\t\t\t\t\tclass=\"u-name\" type=\"text\"\r\n\t\t\t\t\t\tplaceholder=\"First Name\" required=\"\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input id=\"lastname\"\r\n\t\t\t\t\t\tstyle=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n\t\t\t\t\t\tclass=\"u-name\" type=\"text\" placeholder=\"Last Name\"\r\n\t\t\t\t\t\trequired=\"\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input id=\"email\"\r\n\t\t\t\t\t\tstyle=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n\t\t\t\t\t\tclass=\"e-mail\" type=\"email\"  placeholder=\"Email\"\r\n\t\t\t\t\t\trequired=\"\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input id=\"username\"\r\n\t\t\t\t\t\tstyle=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n\t\t\t\t\t\tclass=\"u-name\" type=\"text\" placeholder=\"Username\"\r\n\t\t\t\t\t\trequired=\"\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input id=\"password\"\r\n\t\t\t\t\t\tstyle=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n\t\t\t\t\t\tclass=\"p-password\" type=\"password\" \r\n\t\t\t\t\t\tplaceholder=\"Password\" required=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input\r\n\t\t\t\t\t\tstyle=\"height: 2.4em; min-width: 15em; font-size: 1.05em; border: 1px solid #f1f1f1; box-shadow: 0px 0px 2px 0px #f1f1f1; border-radius: 3px; padding: 5px 50px;\"\r\n\t\t\t\t\t\tclass=\"p-password\" type=\"password\" \r\n\t\t\t\t\t\tplaceholder=\"Confirm password\" required=\"\">\r\n\t\t\t\t</div>\r\n\t\r\n\t\r\n\t\t\t\t<section id=\"language\" style=\"margin:50px 0px;\">\r\n\t\t\t\t\t<div class=\"main\">\r\n\t\t\t\t\t\t<div class=\"wrapper\" style=\"width:60%; margin:0 auto;\">\r\n\t\t\t\t\t\t\t<span>Primary Language</span>\r\n\t\t\t\t\t\t\t<div class=\"field\" style=\"margin-bottom:35px;\">\r\n\t\t\t\t\t\t\t\t<select id=\"plang\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"English\">English</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Spanish\">Spanish</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Mandarin\">Mandarin</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Arabic\">Arabic</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Russian\">Russian</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Hindi\">Hindi</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Vietnamese\">Vietnamese</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Japanese\">Japanese</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Urdu\">Urdu</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"Armenian\">Armenian</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</section>\r\n\t\r\n\t\t\t\t\t<section id=\"language\" style=\"margin:50px 0px;\">\r\n\t\t\t\t\t\t\t<div class=\"main\">\r\n\t\t\t\t\t\t\t\t<div class=\"wrapper\" style=\"width:60%; margin:0 auto;\">\r\n\t\t\t\t\t\t\t\t\t<span>Secondary Language</span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"field\" style=\"margin-bottom:35px;\">\r\n\t\t\t\t\t\t\t\t\t\t<select id=\"slang\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"English\">English</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Spanish\">Spanish</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Mandarin\">Mandarin</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Arabic\">Arabic</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Russian\">Russian</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Hindi\">Hindi</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Vietnamese\">Vietnamese</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Japanese\">Japanese</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Urdu\">Urdu</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"Armenian\">Armenian</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</section>\t\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input type=\"checkbox\" name=\"\"> Agree to the Terms and Conditions\r\n\t\t\t\t</div>\r\n\t\t\t\t<div style=\"margin: 0px 0px 30px 0px;\" class=\"field\">\r\n\t\t\t\t\t<input id=\"signup\"\r\n\t\t\t\t\t\tstyle=\"background-color: #68CAF1; color: #fff; cursor: pointer; border: none; outline: none; width: 8em; padding: 16px 20px; border-radius: 3px; box-shadow: none; font-size: 15px;\"\r\n\t\t\t\t\t\ttype=\"button\" value=\"Register\">\r\n\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<p>Already you have an account? <a routerLink=\"/login\">Login</a> -></p>\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"image-left\">\r\n\t\t\t<div class=\"image-wrapper\">\r\n\t\t\t\t<h3>Register</h3>\r\n\t\t\t\t<ul style=\"list-style: none;\">\r\n\t\r\n\t\t\t\t\t<li id=\"user\">&emsp;&emsp;Access profile</li>\r\n\t\t\t\t\t<li id=\"team\">&emsp;&emsp;Interact with team</li>\r\n\t\t\t\t\t<li id=\"analytics\">&emsp;&emsp;Real time analytics</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bwesp\Documents\SeniorCareAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map