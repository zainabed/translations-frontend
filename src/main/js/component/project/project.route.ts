import { Routes } from '@angular/router'
import { ProjectComponent, ProjectFormComponent, ProjectListComponent, ProjectDashboardComponent } from './project.core';
import { LocaleFormComponent, LocaleListComponent, LocaleComponent } from '../locale/locale.core';
import { KeyFormComponent, KeyListComponent, KeyComponent } from '../key/key.core';

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
            { path: ':projectId', component: ProjectDashboardComponent },
            { path: ':projectId/edit', component: ProjectFormComponent },
            { path: ':projectId/locales', component: LocaleListComponent },
            { path: ':projectId/locales/new', component: LocaleFormComponent },
            { path: ':projectId/locales/:localeId', component: LocaleFormComponent },
            { path: ':projectId/keys', component: KeyListComponent },
            { path: ':projectId/keys/new', component: KeyFormComponent },
            { path: ':projectId/keys/:keyId', component: KeyFormComponent },
        ],

    }
];


