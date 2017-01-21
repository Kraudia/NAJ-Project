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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var OrderComponent = (function () {
    function OrderComponent(location) {
        this.meassage2 = 'Hallo!';
        this.model = {};
        this.submitted = false;
        this.location = location;
    }
    OrderComponent.prototype.onSubmit = function () { this.submitted = true; };
    OrderComponent.prototype.back = function () {
        this.location.back();
    };
    OrderComponent.prototype.go = function () {
        if (this.model.phone.search(/[0-9]{9,10}/) != -1 && this.model.phone.length < 11) {
            alert("Good number!");
        }
        else {
            alert("Bad number!");
        }
    };
    return OrderComponent;
}());
OrderComponent = __decorate([
    core_1.Component({
        selector: 'myOrder',
        templateUrl: 'app/order/order.component.html',
        styleUrls: ['app/order/order.component.css']
    }),
    __metadata("design:paramtypes", [common_1.Location])
], OrderComponent);
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map