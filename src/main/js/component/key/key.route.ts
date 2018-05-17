import { Routes } from '@angular/router'
import {KeyFormComponent, KeyListComponent, KeyComponent} from './key.core';

export const KeyRouteNames = {
    keyHome: 'keys',
    keyNew: 'keys-new'
};

export const KeyRoutes: Routes = [
    {
        path: KeyRouteNames.keyHome, component: KeyComponent,
        children: [
            { path: '', component: KeyFormComponent },
            { path: 'new', component: KeyFormComponent },
            { path: ':id', component: KeyFormComponent },
        ],

    }
];