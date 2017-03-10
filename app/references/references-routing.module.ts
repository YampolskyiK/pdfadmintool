import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { EntityListComponent } from "./entity-list/entity-list.component";
import { ReferencesTableComponent } from "./references-table/references-table.component";
import { ReferencesHomeComponent } from "./references-home/references-home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/references",
                pathMatch: "full"
            },
            {
                path: "references",
                component: ReferencesHomeComponent, 
                children: [
                    {
                        path: "",
                        component: EntityListComponent, 
                        children: [
                            {
                                path: ":entity",
                                component: ReferencesTableComponent
                            },
                            {
                                path: "",
                                component: ReferencesTableComponent
                            }
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PhrasesRoutingModule { }
