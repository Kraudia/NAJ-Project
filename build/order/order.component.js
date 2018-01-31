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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var order_service_1 = require('./order.service');
var OrderComponent = (function () {
    function OrderComponent(location, fb, orderService) {
        this.fb = fb;
        this.orderService = orderService;
        this.order = {};
        this.orderedMovies = [];
        this.submitted = false;
        this.active = true;
        this.formErrors = {
            'name': '',
            'surname': '',
            'phone': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'pattern': 'Name is wrong. Only letters allowed.'
            },
            'surname': {
                'required': 'Surname is required.',
                'minlength': 'Surname must be at least 4 characters long.',
                'maxlength': 'Surname cannot be more than 24 characters long.',
                'pattern': 'Surname is wrong. Only letters allowed.'
            },
            'phone': {
                'required': 'Phone is required.',
                'minlength': 'Phone must be at least 9 characters long.',
                'maxlength': 'Phone cannot be more than 10 characters long.',
                'pattern': 'Phone number is wrong.'
            }
        };
        this.location = location;
        this.orderedMovies = this.orderService.order;
    }
    OrderComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.order = this.orderForm.value;
    };
    OrderComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    OrderComponent.prototype.buildForm = function () {
        var _this = this;
        this.orderForm = this.fb.group({
            'name': [this.order.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(24),
                    forms_1.Validators.pattern("\\w+")
                ]
            ],
            'surname': [this.order.surname, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(1),
                    forms_1.Validators.maxLength(24),
                    forms_1.Validators.pattern("\\w+")
                ]],
            'phone': [this.order.phone, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(9),
                    forms_1.Validators.maxLength(10),
                    forms_1.Validators.pattern("[0-9]{9,10}")
                ]]
        });
        this.orderForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    OrderComponent.prototype.onValueChanged = function (data) {
        if (!this.orderForm) {
            return;
        }
        var form = this.orderForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    OrderComponent.prototype.back = function () {
        this.location.back();
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'myOrder',
            templateUrl: 'app/order/order.component.html',
            styleUrls: ['app/order/order.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.Location, forms_1.FormBuilder, order_service_1.OrderService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map