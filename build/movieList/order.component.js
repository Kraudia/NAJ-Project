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
var OrderComponent = (function () {
    function OrderComponent() {
        this.orderMovieFilm = new core_1.EventEmitter();
    }
    OrderComponent.prototype.removeFilmOrder = function () {
        this.removeMovieFilmOrder.emit(this.todoTask);
    };
    return OrderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OrderComponent.prototype, "orderedMovieFilm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], OrderComponent.prototype, "orderMovieFilm", void 0);
OrderComponent = __decorate([
    core_1.Component({
        selector: 'myOrder',
        templateUrl: 'app/movieList/order.component.html'
    })
], OrderComponent);
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map