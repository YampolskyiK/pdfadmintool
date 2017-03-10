import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { TemplateManagerComponent } from "./template-manager/template-manager.component";
import { ReferencesService } from "./shared/references.service";

import { ReferencesModule } from "./references/references.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReferencesModule
    ],
    declarations: [
        AppComponent,
        TemplateManagerComponent
    ],
    providers: [ReferencesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
