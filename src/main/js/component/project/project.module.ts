import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectService } from './project.service';
import { ProjectRoutes } from './project.route';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { ProjectFormComponent } from './project.form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RouterModule.forChild(ProjectRoutes),
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProjectComponent,
        ProjectFormComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectModule {

}