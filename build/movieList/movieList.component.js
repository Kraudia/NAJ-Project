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
var movieList_service_1 = require("./movieList.service");
var router_1 = require("@angular/router");
var MovieListComponent = (function () {
    function MovieListComponent(movieService, activatedRoute) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.movies = [];
        this.order = [];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.movieService.getMovies(param.priority).subscribe(function (data) { return _this.movies = data; });
        });
    };
    MovieListComponent.prototype.addChildOrder = function (filmToAddOrder) {
        this.order.push(filmToAddOrder);
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'myMovieList',
        templateUrl: 'app/movieList/movieList.component.html'
    }),
    __metadata("design:paramtypes", [movieList_service_1.MovieService,
        router_1.ActivatedRoute])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movieList.component.js.map