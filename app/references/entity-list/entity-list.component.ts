import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router"

import { Entity } from "../../shared/references";
import { ReferencesService } from "../../shared/references.service";

@Component({
    moduleId: module.id,
    selector: "entity-list",
    templateUrl: "entity-list.component.html",
})
export class EntityListComponent implements OnInit {

    selectedId: string;
    phrases: Entity[];

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private phraseService: ReferencesService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = params["entity"]; 
            this.phraseService 
                .getAll()    
                .then(result => this.phrases = result); 
        });
    }

    isSelected(phrase: Entity) {
        return phrase.value == this.selectedId;
    }

    onSelect(selected: Entity) {

        this.router.navigate(["/references", selected.value]);
    }
}
