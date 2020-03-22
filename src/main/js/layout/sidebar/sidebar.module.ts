import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../lib/material/mareial.module";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { BreadcrumbModule } from "../breadcrumb/breadcrumb.module"


@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        RouterModule,
        MaterialModule,
        CommonModule,
        BreadcrumbModule
    ],
    declarations: [
        SidebarComponent
    ],
    providers: [],
    exports: [
        SidebarComponent
    ]
})
export class SidebarModule {

}