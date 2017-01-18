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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function (categoryId) {
        if (categoryId) {
            return this.http.get('/api/movies' + categoryId).res.json() || {};
        }
        else {
            return this.http.get('/api/movies').res.json() || {};
        }
    };
    MovieService.prototype.getMovies1 = function () {
        return this.http.get('/api/movies')
            .map(this.extractData1);
    };
    MovieService.prototype.extractData1 = function (res) {
        var body = res.json();
        console.log(res.json());
        console.log("sprawdzam");
        return body || {};
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movieList.service.js.map