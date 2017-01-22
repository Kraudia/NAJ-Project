"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("./shared.module");
var order_component_1 = require("./order.component");
var OrderModule = (function () {
    function OrderModule() {
    }
    return OrderModule;
}());
OrderModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, forms_1.ReactiveFormsModule],
        declarations: [order_component_1.OrderComponent],
        exports: [order_component_1.OrderComponent]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map