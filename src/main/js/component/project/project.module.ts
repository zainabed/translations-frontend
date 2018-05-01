// Core Modules
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';

// Projects Component and Services
import {
    ProjectComponent, ProjectFormComponent, ProjectListComponent,
    ProjectService, ProjectForm
} from './project.core';
import { ProjectRoutes } from './project.route';

@NgModule({
    imports: [
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatProgressBarModule,
        FlexLayoutModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
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