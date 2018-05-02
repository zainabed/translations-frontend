import { Routes } from '@angular/router'
import { UserFormComponent , UserComponent} from './user.core';

export const UserRouteNames = {
    UserHome: 'users',
    UserNew: 'user-new'
};

export const UserRoutes: Routes = [
    {
        path: UserRouteNames.UserHome, component: UserComponent,
        children: [
            { path: '', component: UserFormComponent },
        ],

    }
];