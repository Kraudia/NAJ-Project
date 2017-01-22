"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var OrderService = (function () {
    function OrderService() {
        this.order = [];
        this.total = 0;
    }
    OrderService.prototype.sumTotalFee = function () {
        var _this = this;
        this.total = 0;
        if (this.order.length > 0) {
            this.order.forEach(function (element) {
                _this.total = _this.total + element.fee;
            });
        }
    };
    OrderService.prototype.addToOrderedMovies = function (movie) {
        this.order.push(movie);
        this.sumTotalFee();
    };
    OrderService.prototype.removeFromOrderedMovies = function (movie) {
        this.order.splice(this.order.indexOf(movie), 1);
        this.sumTotalFee();
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map