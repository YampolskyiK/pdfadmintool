"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var references_1 = require("./references");
var phrases = [
    new references_1.Entity(1, "Applicant"),
    new references_1.Entity(2, "Household"),
    new references_1.Entity(3, "Income"),
    new references_1.Entity(4, "Assets"),
    new references_1.Entity(5, "Eligibility"),
    new references_1.Entity(6, "Determination"),
];
var phrasesPromise = Promise.resolve(phrases);
var ReferencesService = (function () {
    function ReferencesService() {
    }
    ReferencesService.prototype.getAll = function () {
        return phrasesPromise;
    };
    ReferencesService.prototype.getPhrase = function (entityName) {
        return phrasesPromise
            .then(function (phrases) { return phrases.find(function (x) { return x.value == entityName; }); });
    };
    return ReferencesService;
}());
ReferencesService = __decorate([
    core_1.Injectable()
], ReferencesService);
exports.ReferencesService = ReferencesService;
//# sourceMappingURL=references.service.js.map