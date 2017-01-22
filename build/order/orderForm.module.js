"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var orderForm_component_1 = require("./orderForm.component");
var order_module_1 = require("./order.module");
var OrderFormModule = (function () {
    function OrderFormModule() {
    }
    return OrderFormModule;
}());
OrderFormModule = __decorate([
    NgModule({
        imports: [
            order_module_1.OrderModule
        ],
        declarations: [orderForm_component_1.OrderFormComponent],
        bootstrap: [orderForm_component_1.OrderFormComponent]
    })
], OrderFormModule);
exports.OrderFormModule = OrderFormModule;
//# sourceMappingURL=orderForm.module.js.map