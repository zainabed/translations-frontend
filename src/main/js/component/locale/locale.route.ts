import { Routes } from '@angular/router'
import {LocaleFormComponent, LocaleListComponent, LocaleComponent} from './locale.core';
import { ModalHeaderComponent } from '../../layout/header/modal/modal.header.component';

export const LocaleRouteNames = {
    LocaleHome: 'locales',
    LocaleNew: 'locales-new'
};

export const LocaleRoutes: Routes = [
    {
        path: LocaleRouteNames.LocaleHome, component: LocaleComponent,
        children: [
            { path: '', component: LocaleListComponent, },
           
            { path: 'new', component: LocaleFormComponent },
            { path: ':id', component: LocaleFormComponent },
        ],

    }
];