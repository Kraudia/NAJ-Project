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
var order_service_1 = require("./../order/order.service");
var router_1 = require("@angular/router");
var MovieListComponent = (function () {
    function MovieListComponent(movieService, activatedRoute, orderService) {
        this.movieService = movieService;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.movies = [];
        this.categoriesAll = {};
        this.message = '';
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total = this.orderService.total;
        this.activatedRoute.params.subscribe(function () {
            _this.movieService.getCategories().subscribe(function (data) {
                _this.categoriesAll = data;
                _this.updateCopies();
            });
        });
        this.activatedRoute.params.subscribe(function (param) {
            _this.movieService.getMovies(param.priority).subscribe(function (data) {
                _this.movies = data;
                _this.updateCopies();
            });
        });
    };
    MovieListComponent.prototype.updateCopies = function () {
        var _this = this;
        this.orderService.order.forEach(function (element) {
            var oneMovie = _this.movies.filter(function (movie) {
                return movie.id === element.id;
            });
            oneMovie = oneMovie[0];
            if (oneMovie) {
                var index = _this.movies.indexOf(oneMovie);
                _this.movies[index].copiesLeft -= 1;
                if (_this.movies[index].copiesLeft === 0) {
                    _this.movies[index].isAvailable = false;
                }
                if (_this.movies[index].copiesLeft < 0) {
                    _this.removeChildOrder(oneMovie);
                }
            }
        });
    };
    MovieListComponent.prototype.addChildOrder = function (filmToAddOrder) {
        if (filmToAddOrder.copiesLeft > 0) {
            filmToAddOrder.copiesLeft = filmToAddOrder.copiesLeft - 1;
            if (filmToAddOrder.copiesLeft === 0) {
                filmToAddOrder.isAvailable = false;
            }
            this.message = "Movie " + filmToAddOrder.name + " is added to Your basket!";
            this.orderService.addToOrderedMovies(filmToAddOrder);
        }
        else {
            this.message = "Sorry, movie is not available now!";
        }
        this.total = this.orderService.total;
    };
    MovieListComponent.prototype.removeChildOrder = function (filmToRemoveOrder) {
        var oneMovie = this.movies.filter(function (movie) {
            return movie.id === filmToRemoveOrder.id;
        });
        oneMovie = oneMovie[0];
        if (oneMovie) {
            var index = this.movies.indexOf(oneMovie);
            this.movies[index].copiesLeft += 1;
            if (this.movies[index].isAvailable === false) {
                this.movies[index].isAvailable = true;
            }
        }
        this.message = 'Movie is removed from your basket!';
        this.orderService.removeFromOrderedMovies(filmToRemoveOrder);
        this.total = this.orderService.total;
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'myMovieList',
        templateUrl: 'app/movieList/movieList.component.html'
    }),
    __metadata("design:paramtypes", [movieList_service_1.MovieService,
        router_1.ActivatedRoute,
        order_service_1.OrderService])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movieList.component.js.map