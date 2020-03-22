import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../lib/material/mareial.module"
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule {

}