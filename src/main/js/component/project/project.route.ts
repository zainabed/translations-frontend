import { Routes } from '@angular/router'
import { ProjectComponent } from './project.component';
import { ProjectFormComponent } from './project.form.component';
import { ProjectListComponent } from './project.list.component';

export const ProjectRouteNames = {
    projectHome: 'projects',
    projectNew: 'project-new'
};

export const ProjectRoutes: Routes = [
    {
        path: ProjectRouteNames.projectHome, component: ProjectComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'new', component: ProjectFormComponent }
        ],

    }
];