import { Routes } from '@angular/router'
import { ProjectComponent, ProjectFormComponent, ProjectListComponent, ProjectDashboardComponent } from './project.core';
import {LocaleFormComponent, LocaleListComponent, LocaleComponent} from '../locale/locale.core';

export const ProjectRouteNames = {
    projectHome: 'projects',
    projectNew: 'project-new'
};

export const ProjectRoutes: Routes = [
    {
        path: ProjectRouteNames.projectHome, component: ProjectComponent,
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'new', component: ProjectFormComponent },
            { path: ':id', component: ProjectDashboardComponent },
            { path: ':id/edit', component: ProjectFormComponent },
            { path: ':id/locales', component: LocaleListComponent },
            { path: ':id/locales/new', component: LocaleFormComponent },
            { path: ':id/locales/:id', component: LocaleFormComponent },
        ],

    }
];


