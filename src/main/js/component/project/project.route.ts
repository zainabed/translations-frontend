import { Routes } from '@angular/router'
import { ProjectComponent, ProjectFormComponent, ProjectListComponent } from './project.core';

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