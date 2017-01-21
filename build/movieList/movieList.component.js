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
        this.categoriesAll = {};
        this.total = 0;
        this.message = '';
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function () {
            _this.movieService.getCategories().subscribe(function (data) {
                _this.categoriesAll = data;
            });
        });
        this.activatedRoute.params.subscribe(function (param) {
            _this.movieService.getMovies(param.priority).subscribe(function (data) {
                _this.movies = data;
            });
        });
    };
    MovieListComponent.prototype.addChildOrder = function (filmToAddOrder) {
        if (filmToAddOrder.copiesLeft > 0) {
            var index = this.movies.indexOf(filmToAddOrder);
            this.order.push(this.movies[index]);
            this.sumTotalFee();
            filmToAddOrder.copiesLeft = filmToAddOrder.copiesLeft - 1;
            this.message = "Movie is added to Your basket!";
            if (filmToAddOrder.copiesLeft === 0) {
                filmToAddOrder.isAvailable = false;
            }
        }
        else {
            this.message = "Sorry, movie is not available now!";
        }
    };
    MovieListComponent.prototype.removeChildOrder = function (filmToRemoveOrder) {
        if (filmToRemoveOrder.isAvailable === false) {
            filmToRemoveOrder.isAvailable = true;
        }
        this.message = 'Movie is removed from your basket!';
        var index = this.order.indexOf(filmToRemoveOrder);
        this.order.splice(index, 1);
        this.sumTotalFee();
        filmToRemoveOrder.copiesLeft = filmToRemoveOrder.copiesLeft + 1;
    };
    MovieListComponent.prototype.sumTotalFee = function () {
        var _this = this;
        this.total = 0;
        if (this.order.length > 0) {
            this.order.forEach(function (element) {
                _this.total = _this.total + element.fee;
            });
        }
        console.log(this.total);
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