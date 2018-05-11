import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from "../../lib/material/mareial.module";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';


@NgModule({
    imports: [
        RouterModule,
        MaterialModule,
        CommonModule
    ],
    declarations: [
        SidebarComponent
    ],
    providers: [],
    exports:[
        SidebarComponent
    ]
})
export class SidebarModule {

}