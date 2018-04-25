import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';
import { ProjectRoutes } from './project.route';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProjectFormComponent } from './project.form.component';
import { ProjectListComponent } from './project.list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProjectForm} from './project.form';

@NgModule({
    imports: [
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
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