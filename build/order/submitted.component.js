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
var order_service_1 = require('./order.service');
var borrow_service_1 = require('./borrow.service');
var order_model_1 = require('./order.model');
var SubmittedComponent = (function () {
    function SubmittedComponent(borrowService, orderService) {
        this.borrowService = borrowService;
        this.orderService = orderService;
        this.submitted = false;
        this.submittedChange = new core_1.EventEmitter();
    }
    SubmittedComponent.prototype.onClick = function () {
        this.submittedChange.emit(false);
    };
    SubmittedComponent.prototype.onClickConfirm = function () {
        var orderedMoviesIds = [];
        this.orderService.order.forEach(function (element) {
            orderedMoviesIds.push(element.id);
        });
        var borrow = {
            form: {
                firstName: this.order.name,
                lastName: this.order.surname,
                phone: parseInt(this.order.phone, 10)
            },
            movieIds: orderedMoviesIds
        };
        this.borrowService.borrowMovies(borrow).subscribe(function (borrow) {
            console.log(borrow);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', order_model_1.Order)
    ], SubmittedComponent.prototype, "order", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SubmittedComponent.prototype, "submitted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SubmittedComponent.prototype, "submittedChange", void 0);
    SubmittedComponent = __decorate([
        core_1.Component({
            selector: 'order-submitted',
            template: "\n  <div *ngIf=\"submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Name</div>\n      <div class=\"col-xs-9  pull-left\">{{ order.name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Surname</div>\n      <div class=\"col-xs-9 pull-left\">{{ order.surname }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-3\">Phone</div>\n      <div class=\"col-xs-9 pull-left\">{{ order.phone }}</div>\n    </div>\n    <br>\n    <button class=\"btn btn-default\" (click)=\"onClick()\">Edit</button>\n    <button class=\"btn btn-success\" (click)=\"onClickConfirm()\">Confirm</button>\n    <div *ngIf=\"this.borrowService.message\" class=\"alert alert-dismissible alert-success\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n      <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n    </div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [borrow_service_1.BorrowService, order_service_1.OrderService])
    ], SubmittedComponent);
    return SubmittedComponent;
}());
exports.SubmittedComponent = SubmittedComponent;
//# sourceMappingURL=submitted.component.js.map