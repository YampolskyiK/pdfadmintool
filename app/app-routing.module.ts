import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TemplateManagerComponent } from "./template-manager/template-manager.component";



@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "templatemanager",
            pathMatch: "full"
        },
        { path: "templatemanager", component: TemplateManagerComponent},
    ])],
    exports: [RouterModule] 
})
export class AppRoutingModule { }