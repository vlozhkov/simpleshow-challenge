"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GiphyService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var GiphyService = /** @class */ (function () {
    function GiphyService(http) {
        this.http = http;
        this.API_KEY = 'LmyNSlPJrJdLAJeBt9LxzHoc3dtY0tcP';
        this.API_URL = 'api.giphy.com/v1/gifs/search';
    }
    GiphyService.prototype.searchGif = function (keyword) {
        if (keyword === void 0) { keyword = 'smileyface'; }
        return this.http.get("https://" + this.API_URL + "?api_key=" + this.API_KEY + "&q=" + keyword + "&limit=24").pipe(rxjs_1.map(function (response) { return response.data.map(function (gif) { return ({
            name: gif.title,
            id: gif.id,
            url: gif.images.original.url
        }); }); }));
    };
    GiphyService = __decorate([
        core_1.Injectable()
    ], GiphyService);
    return GiphyService;
}());
exports.GiphyService = GiphyService;
