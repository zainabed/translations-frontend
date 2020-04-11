import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../lib/material/mareial.module"
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ModalHeaderComponent } from './modal/modal.header.component';
import { ModalHeaderService } from './modal/modal.header.service';
import { HeaderService } from './header.service';


@NgModule({
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        MaterialModule,
        RouterModule,
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        ModalHeaderComponent
    ],
    providers: [
        ModalHeaderService,
        HeaderService
    ]
})
export class HeaderModule {

}