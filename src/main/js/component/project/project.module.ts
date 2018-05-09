// Core Modules
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectRquiredModule } from "./project.required.module";

// Projects Component and Services
import {
    ProjectComponent, ProjectFormComponent, ProjectListComponent,
    ProjectService, ProjectForm
} from './project.core';
import { ProjectRoutes } from './project.route';

@NgModule({
    imports: [
        ProjectRquiredModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    declarations: [
        ProjectComponent,
        ProjectFormComponent,
        ProjectListComponent
    ],
    providers: [
        ProjectService,
        ProjectForm
    ]
})
export class ProjectModule {

}