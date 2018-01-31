"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var about_service_1 = require('./about.service');
var router_1 = require('@angular/router');
var AboutComponent = (function () {
    function AboutComponent(aboutService, activatedRoute) {
        this.aboutService = aboutService;
        this.activatedRoute = activatedRoute;
        this.aboutInfo = {};
        this.aboutHours = {};
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () {
            _this.aboutService.getAbout().subscribe(function (data) {
                _this.aboutInfo = data;
                _this.aboutHours = data.hours;
            });
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'myAbout',
            templateUrl: 'app/about/about.component.html',
            providers: [about_service_1.AboutService]
        }), 
        __metadata('design:paramtypes', [about_service_1.AboutService, router_1.ActivatedRoute])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map