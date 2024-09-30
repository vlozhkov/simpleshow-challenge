"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SearchModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var search_results_component_1 = require("./search-results/search-results.component");
var search_bar_component_1 = require("./search-bar/search-bar.component");
var search_component_1 = require("./search/search.component");
var search_item_component_1 = require("./search-item/search-item.component");
var core_module_1 = require("../../core/core.module");
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_module_1.CoreModule
            ],
            declarations: [
                search_component_1.SearchComponent,
                search_bar_component_1.SearchBarComponent,
                search_results_component_1.SearchResultsComponent,
                search_item_component_1.SearchItemComponent
            ],
            exports: [
                search_component_1.SearchComponent
            ]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;
