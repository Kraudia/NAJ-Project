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
var movieList_component_1 = require("./movieList.component");
var movie_component_1 = require("./movie.component");
var movieList_service_1 = require("./movieList.service");
var router_1 = require("@angular/router");
var routes = [
    { path: '', component: movieList_component_1.MovieListComponent },
    { path: ':priority', component: movieList_component_1.MovieListComponent },
];
var MovieModule = (function () {
    function MovieModule() {
    }
    return MovieModule;
}());
MovieModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [movieList_component_1.MovieListComponent, movie_component_1.MovieComponent],
        exports: [movieList_component_1.MovieListComponent],
        providers: [movieList_service_1.MovieService]
    })
], MovieModule);
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map