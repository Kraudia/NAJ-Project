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
var todo_list_component_1 = require("./todo-list.component");
var todo_component_1 = require("./todo.component");
var todoList_service_1 = require("./todoList.service");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: todo_list_component_1.TodoListComponent },
    { path: ':priority', component: todo_list_component_1.TodoListComponent },
];
var TodoModule = (function () {
    function TodoModule() {
    }
    return TodoModule;
}());
TodoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [todo_list_component_1.TodoListComponent, todo_component_1.TodoComponent],
        exports: [todo_list_component_1.TodoListComponent],
        providers: [todoList_service_1.TodoService]
    })
], TodoModule);
exports.TodoModule = TodoModule;
//# sourceMappingURL=todo.module.js.map