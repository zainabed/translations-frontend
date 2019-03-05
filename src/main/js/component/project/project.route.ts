import { Routes } from '@angular/router'
import { ProjectComponent, ProjectFormComponent, ProjectListComponent, ProjectDashboardComponent } from './project.core';
import { LocaleFormComponent, LocaleListComponent, LocaleComponent } from '../locale/locale.core';
import { KeyFormComponent, KeyListComponent, KeyComponent } from '../key/key.core';
import { TranslationListComponent, TranslationFormComponent } from "../translation/translation.core";
import { UserSecurity } from '@app/lib/security/user.security';

export const ProjectRouteNames = {
    projectHome: 'projects',
    projectNew: 'project-new'
};

export const ProjectRoutes: Routes = [
    {
        path: ProjectRouteNames.projectHome, component: ProjectComponent,
        canActivate: [UserSecurity],
        children: [
            { path: '', component: ProjectListComponent },
            { path: 'new', component: ProjectFormComponent },
            { path: ':projectId', component: ProjectDashboardComponent },
            { path: ':projectId/edit', component: ProjectFormComponent },
            {
                path: ':projectId/locales', component: LocaleListComponent,
                canActivate: [UserSecurity],
                data: { roles: ["ROLE_ADMIN"] }
            },
            { path: ':projectId/locales/new', component: LocaleFormComponent },
            { path: ':projectId/locales/:localeId/edit', component: LocaleFormComponent },
            { path: ':projectId/keys', component: KeyListComponent },
            { path: ':projectId/keys/new', component: KeyFormComponent },
            { path: ':projectId/keys/:keyId/edit', component: KeyFormComponent },
            {
                path: ':projectId/translations', component: TranslationListComponent,
                children: [
                    { path: 'keys/:keyId', component: TranslationFormComponent }
                ]
            }

        ],

    }
];


