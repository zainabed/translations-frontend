import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../lib/material/mareial.module";
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';


@NgModule({
    imports: [
        RouterModule,
        MaterialModule,
        CommonModule
    ],
    declarations: [
        BreadcrumbComponent
    ],
    providers: [],
    exports:[
        BreadcrumbComponent
    ]
})
export class BreadcrumbModule {

}