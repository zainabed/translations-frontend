// Core Modules
import { NgModule } from "@angular/core";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../../lib/material/mareial.module";

import { LoginComponent } from "./component/login.component";
import { LoginForm } from "./form/login.form";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [LoginForm]
})
export class LoginModule {

}