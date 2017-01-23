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
require("rxjs/add/operator/catch");
var BorrowService = (function () {
    function BorrowService(http) {
        this.http = http;
    }
    BorrowService.prototype.borrowMovies = function (borrow) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/borrow', JSON.stringify(borrow), options)
            .map(this.extractData);
    };
    BorrowService.prototype.extractData = function (res) {
        console.log(res);
        if (res.status)
            this.message = res.status;
        var body = res.json();
        return body.data || {};
    };
    return BorrowService;
}());
BorrowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BorrowService);
exports.BorrowService = BorrowService;
//# sourceMappingURL=borrow.service.js.map