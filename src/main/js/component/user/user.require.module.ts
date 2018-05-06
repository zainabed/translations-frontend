// Core Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../../lib/material/mareial.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ]
})
export class UserRquireModule {

}