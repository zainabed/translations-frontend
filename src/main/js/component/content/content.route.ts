import { Routes } from '@angular/router'
import { IndexComponent } from "./component/index.component";

export const ContentrRouteNames = {
    IndexComponent: 'index'
};

export const ContentRoutes: Routes = [
    {
        path: ContentrRouteNames.IndexComponent, component: IndexComponent
    }
];