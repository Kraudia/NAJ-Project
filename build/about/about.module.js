"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var about_component_1 = require("./about.component");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: about_component_1.AboutComponent }
];
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [about_component_1.AboutComponent],
        exports: [about_component_1.AboutComponent]
    })
], AboutModule);
exports.AboutModule = AboutModule;
//# sourceMappingURL=about.module.js.map