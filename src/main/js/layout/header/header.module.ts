import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../lib/material/mareial.module"
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MaterialModule,
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule {

}