import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Entity } from "../../shared/references";
import { ReferencesService } from "../../shared/references.service";

@Component({
    moduleId: module.id,
    selector: "references-table",
    templateUrl: "references-table.component.html"
})
export class ReferencesTableComponent implements OnInit {

    entity: Entity;

   
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ReferencesService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = params["entity"]; 
            this.service
                .getPhrase(id) 
                .then(result => this.entity = result); 
        });
    }
}