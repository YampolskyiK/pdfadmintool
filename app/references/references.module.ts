import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReferencesHomeComponent } from "./references-home/references-home.component";
import { EntityListComponent } from "./entity-list/entity-list.component";
import { ReferencesTableComponent } from "./references-table/references-table.component";

import { PhrasesRoutingModule } from "./references-routing.module";

@NgModule({
    imports: [
        CommonModule,
        PhrasesRoutingModule 
    ],
    declarations: [
        ReferencesTableComponent,
        EntityListComponent,
        ReferencesHomeComponent
    ]
})
export class ReferencesModule { }