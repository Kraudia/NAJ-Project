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
var todoList_service_1 = require("./todoList.service");
var router_1 = require("@angular/router");
var TodoListComponent = (function () {
    function TodoListComponent(todoService, activatedRoute) {
        this.todoService = todoService;
        this.activatedRoute = activatedRoute;
        this.todos = [];
        this.order = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos1().subscribe(function (b) { return _this.todos = b; });
    };
    TodoListComponent.prototype.addChildOrder = function (taskToAddOrder) {
        this.order.push(taskToAddOrder);
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'my-todo-list',
        templateUrl: 'app/todo-list/todo-list.component.html'
    }),
    __metadata("design:paramtypes", [todoList_service_1.TodoService,
        router_1.ActivatedRoute])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map