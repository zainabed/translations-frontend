import { Routes } from '@angular/router'
import {TranslationFormComponent, TranslationListComponent, TranslationComponent} from './translation.core';

export const TranslationRouteNames = {
    translationHome: 'translations',
    translationNew: 'translations-new'
};

export const TranslationRoutes: Routes = [
    {
        path: TranslationRouteNames.translationHome, component: TranslationComponent,
        children: [
            { path: '', component: TranslationFormComponent },
            { path: 'new', component: TranslationFormComponent },
            { path: ':id', component: TranslationFormComponent },
        ],

    }
];