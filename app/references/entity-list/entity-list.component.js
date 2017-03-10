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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var references_service_1 = require("../../shared/references.service");
var EntityListComponent = (function () {
    function EntityListComponent(router, activatedRoute, phraseService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.phraseService = phraseService;
    }
    EntityListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            _this.selectedId = params["entity"];
            _this.phraseService
                .getAll()
                .then(function (result) { return _this.phrases = result; });
        });
    };
    EntityListComponent.prototype.isSelected = function (phrase) {
        return phrase.value == this.selectedId;
    };
    EntityListComponent.prototype.onSelect = function (selected) {
        this.router.navigate(["/references", selected.value]);
    };
    return EntityListComponent;
}());
EntityListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "entity-list",
        templateUrl: "entity-list.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        references_service_1.ReferencesService])
], EntityListComponent);
exports.EntityListComponent = EntityListComponent;
//# sourceMappingURL=entity-list.component.js.map