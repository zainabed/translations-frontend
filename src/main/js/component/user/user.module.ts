// Core Modules
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularHalModule } from "angular4-hal";

// Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

// User Component and Services
import { UserForm, UserFormComponent } from "./user.core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        FlexLayoutModule,
        AngularHalModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    declarations: [
       // UserFormComponent
    ],
    providers: [UserForm]
})
export class UserModule {

}
