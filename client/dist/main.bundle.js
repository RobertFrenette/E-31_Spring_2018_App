webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-nav></app-nav>\n\n  <router-outlet></router-outlet>\n\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myLists';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__ = __webpack_require__("./src/app/reset/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirm_confirm_component__ = __webpack_require__("./src/app/confirm/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth_service__ = __webpack_require__("./src/app/providers/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_item_item_service__ = __webpack_require__("./src/app/providers/item/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_nav_nav_service__ = __webpack_require__("./src/app/providers/nav/nav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_edit_component__ = __webpack_require__("./src/app/edit/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__["a" /* ResetComponent */] },
    { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_9__confirm_confirm_component__["a" /* ConfirmComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_17__edit_edit_component__["a" /* EditComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__reset_reset_component__["a" /* ResetComponent */],
                __WEBPACK_IMPORTED_MODULE_9__confirm_confirm_component__["a" /* ConfirmComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__edit_edit_component__["a" /* EditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_item_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_nav_nav_service__["a" /* NavService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm/confirm.component.css":
/***/ (function(module, exports) {

module.exports = ".anchor {\n  cursor: pointer;\n  color: #007bff;\n}\n.anchor:hover {\n  text-decoration: underline;\n  color: #212529;\n}"

/***/ }),

/***/ "./src/app/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Password Reset</h1>\n<div class=\"container\">\n  <form id=\"confirmForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"userName\">User Name</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"userName\" name=\"userName\" ngModel #userName=\"ngModel\"\n            placeholder=\"Enter a User Name\" required autofocus />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" \n            id=\"email\" name=\"email\" [(ngModel)]=\"emailAddress\" #email=\"ngModel\"\n            placeholder=\"Enter your Email Address\" required \n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n            disabled />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" \n            id=\"password\" name=\"password\" ngModel #password=\"ngModel\"\n            placeholder=\"Enter a Password\" minlength=\"8\" required />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"confirm\">Confirm</label>\n      <input type=\"password\" class=\"form-control\" \n            id=\"confirm\" name=\"confirm\" ngModel #confirm=\"ngModel\"\n            placeholder=\"Confirm your password\" minlength=\"8\" required />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\n    <button type=\"reset\" class=\"btn btn-secondary\" id=\"resetBtn\">Reset</button>\n  </form>\n</div>\n<div class=\"container\">\n  <br />\n  <div class=\"alert alert-danger hidden\" role=\"alert\" id=\"errMsg\" *ngIf=\"error == true\">{{errmsg}}</div>\n  <div class=\"alert alert-success hidden\" role=\"alert\" id=\"successMsg\" *ngIf=\"pwdreset == true\">Your password has been reset. Please\n    <span title=\"Login\" class=\"anchor\" (click)=\"onLogin()\">login</span>.</div>\n  Already have an account?\n  <span title=\"Login\" class=\"anchor\" (click)=\"onLogin()\">Login now.</span>\n</div>\n"

/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__("./src/app/providers/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(authService, router, activatedRoute) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.emailAddress = '';
        this.error = false;
        this.errmsg = '';
        this.pwdreset = false;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.emailAddress = params['email'];
        });
    };
    ConfirmComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.userName === '' || f.email === '' || f.password === '' || f.confirm === '') {
            this.errmsg = 'All fields are required.';
            this.error = true;
        }
        else {
            if (f.password !== f.confirm) {
                this.errmsg = 'Passwords must match!';
                this.error = true;
            }
            else {
                this.authService.confirm(f.userName, this.emailAddress, f.password)
                    .subscribe(function (result) {
                    // Handle result
                    //console.log(result);
                }, function (error) {
                    //console.log(error);
                    _this.errmsg = 'Unsuccessful.';
                    _this.error = true;
                }, function () {
                    // 'onCompleted' callback.
                    _this.error = false;
                    _this.pwdreset = true;
                });
            }
        }
    };
    ConfirmComponent.prototype.onLogin = function () {
        this.router.navigate(['login']);
    };
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm',
            template: __webpack_require__("./src/app/confirm/confirm.component.html"),
            styles: [__webpack_require__("./src/app/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n  width: 90%;\n}\n\n.fa-edit:hover {\n  cursor: pointer;\n  color: blue;\n}\n\n.fa-trash-o:hover {\n  cursor: pointer;\n  color: red;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Items (<span id=\"userNameSpan\">{{userName}}</span>)</h1>\n<div class=\"container\">\n  <form id=\"addItemForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"itemName\">Item Name</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"itemName\" name=\"itemName\" ngModel #itemName=\"ngModel\"\n            placeholder=\"Enter an Item Name\" required autofocus />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"description\" name=\"description\" ngModel #description=\"ngModel\"\n            placeholder=\"(optional)\" />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Add Item</button>\n    <button type=\"reset\" class=\"btn btn-secondary\" id=\"resetBtn\">Reset</button>\n  </form>\n</div>\n<div class=\"container\" id=\"itemsDiv\">\n  <br />\n  <div class=\"alert alert-warning hidden\" role=\"alert\" id=\"warningMsg\" *ngIf=\"warning == true\">{{warningmsg}}</div>\n  <hr />\n  <h3>Items</h3>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Item Name</th>\n        <th>Description</th>\n        <th>&nbsp;</th>\n      </tr>\n    </thead>\n    <tbody id=\"itemsList\">\n      <tr *ngFor=\"let item of items\">\n        <td>{{item.name}}</td>\n        <td>{{item.desc}}</td>\n        <td>\n          <i class=\"fa fa-edit\" (click)=\"onEdit(item._id)\"></i>\n          &nbsp;\n          <i class=\"fa fa-trash-o\" (click)=\"onDelete(item._id)\"></i>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_item_item_service__ = __webpack_require__("./src/app/providers/item/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(itemService, router, route) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.userName = '';
        this.user_id = '';
        this.warning = false;
        this.warningmsg = '';
        this.items = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userName = params['userName'];
            _this.user_id = params['user_id'];
            _this.itemService.getItems(_this.user_id)
                .subscribe(function (result) {
                // Handle result
                //console.log(result);
                _this.items = result;
            }, function (error) {
                //console.log(error);
            }, function () {
                // 'onCompleted' callback.
                _this.warning = false;
            });
        });
    };
    DashboardComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.itemName === '') {
            this.warningmsg = 'Item Name is required.';
            this.warning = true;
        }
        else {
            this.itemService.create(this.user_id, f.itemName, f.description)
                .subscribe(function (result) {
                // Handle result
                //console.log(result);
                _this.items.push(result);
            }, function (error) {
                //console.log(error);
                _this.warningmsg = 'Item creation unsuccessful. Item alreasy exists in list.';
                _this.warning = true;
            }, function () {
                // 'onCompleted' callback.
                _this.warning = false;
            });
        }
    };
    DashboardComponent.prototype.onEdit = function (id) {
        this.router.navigate(['edit', { userName: this.userName, user_id: this.user_id, item_id: id }]);
    };
    DashboardComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.itemService.delete(id)
            .subscribe(function (result) {
            // Handle result
            //console.log(result);
            var allItems = _this.items;
            var filteredItems = allItems.filter(function (item) { return item._id !== result._id; });
            _this.items = filteredItems;
        }, function (error) {
            //console.log(error);
        }, function () {
            // 'onCompleted' callback.
            _this.warning = false;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_item_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Edit Item</h1>\n<div class=\"container\">\n  <form id=\"editItemForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"itemName\">Item Name</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"itemName\" name=\"itemName\" \n            [(ngModel)]=\"itemNameText\" #itemName=\"ngModel\" \n            required autofocus />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"description\" name=\"description\" \n            [(ngModel)]=\"descriptionText\" #description=\"ngModel\" />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Save</button>\n    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"onCancel()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_item_item_service__ = __webpack_require__("./src/app/providers/item/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(itemService, router, route) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
        this.userName = '';
        this.user_id = '';
        this.warning = false;
        this.warningmsg = '';
        this.item_id = '';
        this.itemName = '';
        this.itemNameText = '';
        this.description = '';
        this.descriptionText = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userName = params['userName'];
            _this.user_id = params['user_id'];
            _this.item_id = params['item_id'];
            _this.itemService.getItem(_this.item_id)
                .subscribe(function (result) {
                // Handle result
                //console.log(result);
                _this.itemName = result[0].name;
                _this.itemNameText = result[0].name;
                _this.description = result[0].desc;
                _this.descriptionText = result[0].desc;
            }, function (error) {
                //console.log(error);
                _this.warningmsg = 'Item GET unsuccessful.';
                _this.warning = true;
            }, function () {
                // 'onCompleted' callback.
            });
        });
    };
    EditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.itemName === '') {
            this.warningmsg = 'Item Name is required.';
            this.warning = true;
        }
        else {
            this.itemService.update(this.user_id, this.item_id, f.itemName, f.description)
                .subscribe(function (result) {
                // Handle result
                //console.log(result);
            }, function (error) {
                //console.log(error);
                _this.warningmsg = 'Item creation unsuccessful. Item alreasy exists in list.';
                _this.warning = true;
            }, function () {
                // 'onCompleted' callback.
                _this.router.navigate(['dashboard', { userName: _this.userName, user_id: _this.user_id }]);
            });
        }
    };
    EditComponent.prototype.onCancel = function () {
        this.router.navigate(['dashboard', { userName: this.userName, user_id: this.user_id }]);
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_item_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<hr />\n<footer class=\"float-right\">&copy;\n  <a href=\"https://www.linkedin.com/in/robertmfrenette\" title=\"LinkedIn Profile\" target=\"new\">R.M. Frenette</a> 2018\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1 class=\"display-4\">myLists</h1>\n  <h2>lists made easy</h2>\n  <p class=\"lead\">\n    <img src=\"assets/img/logo.png\" id=\"logo\" alt=\"myLists list App\" />\n    <br />With myLists you can easily create and manage your Lists from your computer, smart phone or tablet.\n  </p>\n  <hr class=\"my-4\" />\n  <p class=\"lead text-center\">\n    <a class=\"btn btn-primary btn-lg\" role=\"button\" (click)=\"onGetStarted()\">Get Started</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onGetStarted = function () {
        this.router.navigate(['login']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".anchor {\n  cursor: pointer;\n  color: #007bff;\n}\n.anchor:hover {\n  text-decoration: underline;\n  color: #212529;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<div class=\"container\">\n  <form id=\"loginForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"userName\">User Name</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"userName\" name=\"userName\" ngModel  #userName=\"ngModel\"\n            placeholder=\"Enter your User Name\" required autofocus />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" \n            id=\"password\" name=\"password\" ngModel #password=\"ngModel\"\n            placeholder=\"Enter your Password\" required />\n    </div>\n    <!--\n    <div class=\"form-check rememberMe\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"rememberMe\" name=\"rememberMe\" ngModel #rememberMe=\"ngModel\"/>\n      <label class=\"form-check-label\" for=\"rememberMe\">Remember Me</label>\n    </div>\n    -->\n    <br />\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Login</button>\n    <button type=\"reset\" class=\"btn btn-secondary\" id=\"resetBtn\">Reset</button>\n  </form>\n</div>\n<div class=\"container\">\n  <br />\n  <div class=\"alert alert-danger hidden\" role=\"alert\" id=\"errMsg\" *ngIf=\"error == true\">{{errmsg}}</div>\n  <br />Don't have an account?\n  <span title=\"Register\" class=\"anchor\" (click)=\"onRegister()\">Register.</span>\n  <br />Forgot your password?\n  <span title=\"Reset Password\" class=\"anchor\" (click)=\"onPasswordReset()\">Reset.</span>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__("./src/app/providers/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_nav_nav_service__ = __webpack_require__("./src/app/providers/nav/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(navService, authService, router) {
        this.navService = navService;
        this.authService = authService;
        this.router = router;
        this.userName = '';
        this.user_id = '';
        this.error = false;
        this.errmsg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        /*
        let persistedName = localStorage.getItem('user_name');
    
        if (persistedName !== null) {
          this.userName = JSON.parse(persistedName);
        } else {
          this.userName = '';
        }
        */
    };
    LoginComponent.prototype.onRegister = function () {
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.userName === '' || f.password === '') {
            this.errmsg = 'User Name and Password are required.';
            this.error = true;
        }
        else {
            this.authService.login(f.userName, f.password)
                .subscribe(function (result) {
                // Handle result
                //console.log(result);
                _this.user_id = result._id;
            }, function (error) {
                //console.log(error);
                _this.errmsg = 'Login unsuccessful.';
                _this.error = true;
            }, function () {
                // 'onCompleted' callback.
                // Check "Remeber Me"
                /*
                if (!f.rememberMe) {
                  localStorage.removeItem('user_name');
                  console.log(localStorage.getItem('user_name'));
                } else {
                  localStorage.setItem('user_name', JSON.stringify(f.userName));
                  console.log(localStorage.getItem('user_name'));
                }
                */
                _this.navService.sendMessage(true);
                // No errors, route to new page here
                _this.router.navigate(['dashboard', { userName: f.userName, user_id: _this.user_id }]);
            });
        }
    };
    LoginComponent.prototype.onPasswordReset = function () {
        this.router.navigate(['reset']);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_nav_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"/\">myLists</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" id=\"loginLink\" *ngIf=\"authd === false\">\n        <a class=\"nav-link\" (click)=\"onLogin()\">Login</a>\n      </li>\n      <li class=\"nav-item\" id=\"registerLink\" *ngIf=\"authd === false\">\n        <a class=\"nav-link\" (click)=\"onRegister()\">Register</a>\n      </li>\n      <li class=\"nav-item hidden\" id=\"logoutLink\" *ngIf=\"authd === true\">\n        <a class=\"nav-link\" (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_nav_nav_service__ = __webpack_require__("./src/app/providers/nav/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(navService, router) {
        var _this = this;
        this.navService = navService;
        this.router = router;
        this.authd = false;
        this.subscription = this.navService.getMessage().subscribe(function (message) {
            _this.authd = message.authd;
        });
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    NavComponent.prototype.onLogin = function () {
        this.router.navigate(['login']);
    };
    NavComponent.prototype.onRegister = function () {
        this.router.navigate(['register']);
    };
    NavComponent.prototype.onLogout = function () {
        this.navService.sendMessage(false);
        this.router.navigate(['']);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_nav_nav_service__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/providers/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiEndpoint = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiurl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // POST login
    AuthService.prototype.login = function (userName, password) {
        return this.http.post(this.apiEndpoint + 'login', { username: userName, password: password }, this.options)
            .map(function (res) { return res.json(); });
    };
    // POST register
    AuthService.prototype.register = function (userName, email, password) {
        return this.http.post(this.apiEndpoint + 'register', { username: userName, email: email, password: password }, this.options)
            .map(function (res) { return res.json(); });
    };
    // POST password reset
    AuthService.prototype.reset = function (email) {
        return this.http.post(this.apiEndpoint + 'reset', { email: email }, this.options)
            .map(function (res) { return res.json(); });
    };
    // POST password confirm
    AuthService.prototype.confirm = function (userName, email, password) {
        return this.http.post(this.apiEndpoint + 'confirm', { username: userName, email: email, password: password }, this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/providers/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
        this.apiEndpoint = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiurl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // POST create item
    ItemService.prototype.create = function (user_id, itemname, description) {
        return this.http.post(this.apiEndpoint + 'item', { user_id: user_id, itemname: itemname, description: description }, this.options)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.update = function (user_id, item_id, itemname, description) {
        return this.http.put(this.apiEndpoint + 'item', { user_id: user_id, item_id: item_id, name: itemname, desc: description }, this.options)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.getItem = function (item_id) {
        return this.http.get(this.apiEndpoint + 'item/' + item_id, this.options)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.getItems = function (user_id) {
        return this.http.get(this.apiEndpoint + 'items/' + user_id, this.options)
            .map(function (res) { return res.json(); });
    };
    ItemService.prototype.delete = function (_id) {
        return this.http.delete(this.apiEndpoint + 'item/' + _id, this.options)
            .map(function (res) { return res.json(); });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/providers/nav/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavService = /** @class */ (function () {
    function NavService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    NavService.prototype.sendMessage = function (message) {
        this.subject.next({ authd: message });
    };
    NavService.prototype.clearMessage = function () {
        this.subject.next();
    };
    NavService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".anchor {\n  cursor: pointer;\n  color: #007bff;\n}\n.anchor:hover {\n  text-decoration: underline;\n  color: #212529;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Register</h1>\n<div class=\"container\">\n  <form id=\"registerForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"userName\">User Name</label>\n      <input type=\"text\" class=\"form-control\" \n            id=\"userName\" name=\"userName\" ngModel #userName=\"ngModel\"\n            placeholder=\"Enter a User Name\" required autofocus />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input type=\"email\" class=\"form-control\" \n            id=\"email\" name=\"email\" ngModel #email=\"ngModel\"\n            placeholder=\"Enter your Email Address\" aria-describedby=\"emailHelp\" required\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"/>\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" \n            id=\"password\" name=\"password\" ngModel #password=\"ngModel\"\n            placeholder=\"Enter a Password\" aria-describedby=\"passwordHelp\" minlength=\"8\" required />\n      <small id=\"passwordHelp\" class=\"form-text text-muted\">Password must be at least 8 characters.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"confirm\">Confirm</label>\n      <input type=\"password\" class=\"form-control\" \n            id=\"confirm\" name=\"confirm\" ngModel #confirm=\"ngModel\"\n            placeholder=\"Confirm your password\" minlength=\"8\" required />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Register</button>\n    <button type=\"reset\" class=\"btn btn-secondary\" id=\"resetBtn\">Reset</button>\n  </form>\n</div>\n<div class=\"container\">\n  <br />\n  <div class=\"alert alert-danger hidden\" role=\"alert\" id=\"errMsg\" *ngIf=\"error == true\">{{errmsg}}</div>\n  Already have an account?\n  <span title=\"Login\" class=\"anchor\" (click)=\"onLogin()\">Login now.</span>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__("./src/app/providers/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.error = false;
        this.errmsg = "";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.userName === '' || f.email === '' || f.password === '' || f.confirm === '') {
            this.errmsg = 'All fields are required.';
            this.error = true;
        }
        else {
            if (f.password !== f.confirm) {
                this.errmsg = 'Passwords must match!';
                this.error = true;
            }
            else {
                this.authService.register(f.userName, f.email, f.password)
                    .subscribe(function (result) {
                    // Handle result
                    //console.log(result);
                }, function (error) {
                    //console.log(error);
                    _this.errmsg = 'Registration unsuccessful.';
                    _this.error = true;
                }, function () {
                    // 'onCompleted' callback.
                    // No errors, route to new page here
                    _this.router.navigate(['login']);
                });
            }
        }
    };
    RegisterComponent.prototype.onLogin = function () {
        this.router.navigate(['login']);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reset/reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Password Reset</h1>\n<div class=\"container\">\n  <form id=\"resetForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" \n            id=\"email\" name=\"email\" ngModel #email=\"ngModel\"\n            placeholder=\"Enter your Email Address\" required autofocus \n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" />\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\">Submit</button>\n    <button type=\"reset\" class=\"btn btn-secondary\" id=\"resetBtn\">Reset</button>\n  </form>\n</div>\n<div class=\"container\">\n  <br />\n  <div class=\"alert alert-danger hidden\" role=\"alert\" id=\"errMsg\" *ngIf=\"error == true\">{{errmsg}}</div>\n  <div class=\"alert alert-success hidden\" role=\"alert\" id=\"successMsg\" *ngIf=\"emailsent == true\">An email has been sent with a rest link.</div>\n</div>\n"

/***/ }),

/***/ "./src/app/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__("./src/app/providers/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetComponent = /** @class */ (function () {
    function ResetComponent(authService) {
        this.authService = authService;
        this.error = false;
        this.errmsg = '';
        this.emailsent = false;
    }
    ResetComponent.prototype.ngOnInit = function () { };
    ResetComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.email === '') {
            this.errmsg = 'Email is required.';
            this.error = true;
        }
        else {
            this.authService.reset(f.email)
                .subscribe(function (result) {
                // Handle result
                //console.log(result);
            }, function (error) {
                //console.log(error);
                _this.errmsg = 'Unsuccessful.';
                _this.error = true;
            }, function () {
                // 'onCompleted' callback.
                _this.error = false;
                _this.emailsent = true;
            });
        }
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset',
            template: __webpack_require__("./src/app/reset/reset.component.html"),
            styles: [__webpack_require__("./src/app/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiurl: 'http://localhost:8080/api/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map