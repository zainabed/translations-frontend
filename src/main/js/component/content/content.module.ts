import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../lib/material/mareial.module"
import { IndexComponent } from './component/index.component';
import { CommonModule } from '@angular/common';
import { ContentRoutes } from "./content.route";

@NgModule({
    imports: [
        MaterialModule,
        RouterModule,
        CommonModule,
        RouterModule.forChild(ContentRoutes)
    ],
    declarations: [
        IndexComponent
    ],
    providers: []
})
export class ContentModule {

}