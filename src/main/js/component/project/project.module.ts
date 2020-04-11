// Core Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectRquiredModule } from "./project.required.module";

// Projects Component and Services
import {
    ProjectComponent, ProjectFormComponent, ProjectListComponent,
    ProjectDashboardComponent, ProjectService, ProjectForm
} from './project.core';
import { ProjectRoutes } from './project.route';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        ProjectRquiredModule,
        RouterModule.forChild(ProjectRoutes)
    ],
    declarations: [
        ProjectComponent,
        ProjectFormComponent,
        ProjectListComponent,
        ProjectDashboardComponent
    ],
    providers: [
        ProjectService,
        ProjectForm
    ]
})
export class ProjectModule {

}