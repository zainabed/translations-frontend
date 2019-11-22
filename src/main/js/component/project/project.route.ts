import { Routes } from '@angular/router'
import { ProjectComponent, ProjectFormComponent, ProjectListComponent, ProjectDashboardComponent } from './project.core';
import { LocaleFormComponent, LocaleListComponent, LocaleComponent } from '../locale/locale.core';
import { KeyFormComponent, KeyListComponent, KeyComponent } from '../key/key.core';
import { TranslationListComponent, TranslationFormComponent } from "../translation/translation.core";
import { RouteSecurity } from '../../lib/security/route.security';

export const ProjectRouteNames = {
    projectHome: 'projects',
    projectNew: 'project-new'
};

export const ProjectRoutes: Routes = [
    {
        path: ProjectRouteNames.projectHome, component: ProjectComponent,
        canActivate: [RouteSecurity],
        data: { roles: ["ROLE_USER"] },
        children: [
            { path: '', component: ProjectListComponent },
            {
                path: 'new', component: ProjectFormComponent,
                canActivate: [RouteSecurity],
                data: { roles: ["ROLE_ADMIN"] }
            },
            {
                path: ':projectId', component: ProjectDashboardComponent,
                canActivate: [RouteSecurity],
                data: { roles: ["ROLE_USER"] }
            },
            {
                path: ':projectId/edit', component: ProjectFormComponent,
                canActivate: [RouteSecurity],
                data: {
                    roles: ["ROLE_ADMIN"]
                }
            },
            {
                path: ':projectId/locales', component: LocaleListComponent,
                canActivate: [RouteSecurity],
                data: { roles: ["ROLE_USER"] }
            },
            { path: ':projectId/locales/new', component: LocaleFormComponent },
            { path: ':projectId/locales/:localeId/edit', component: LocaleFormComponent },
            { path: ':projectId/keys', component: KeyListComponent },
            {
                path: ':projectId/keys/new', component: KeyFormComponent,
                canActivate: [RouteSecurity],
                data: { roles: ["ROLE_ADMIN", "ROLE_PO"] }
            },
            {
                path: ':projectId/keys/:keyId/edit', component: KeyFormComponent,
                canActivate: [RouteSecurity],
                data: { roles: ["ROLE_ADMIN", "ROLE_PO"] }
            },
            {
                path: ':projectId/translations', component: TranslationListComponent,
                children: [
                    { path: 'keys/:keyId', component: TranslationFormComponent }
                ]
            }

        ],

    }
];


