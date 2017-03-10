"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var entity_list_component_1 = require("./entity-list/entity-list.component");
var references_table_component_1 = require("./references-table/references-table.component");
var references_home_component_1 = require("./references-home/references-home.component");
var PhrasesRoutingModule = (function () {
    function PhrasesRoutingModule() {
    }
    return PhrasesRoutingModule;
}());
PhrasesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                {
                    path: "",
                    redirectTo: "/references",
                    pathMatch: "full"
                },
                {
                    path: "references",
                    component: references_home_component_1.ReferencesHomeComponent,
                    children: [
                        {
                            path: "",
                            component: entity_list_component_1.EntityListComponent,
                            children: [
                                {
                                    path: ":entity",
                                    component: references_table_component_1.ReferencesTableComponent
                                },
                                {
                                    path: "",
                                    component: references_table_component_1.ReferencesTableComponent
                                }
                            ]
                        }
                    ]
                }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], PhrasesRoutingModule);
exports.PhrasesRoutingModule = PhrasesRoutingModule;
//# sourceMappingURL=references-routing.module.js.map