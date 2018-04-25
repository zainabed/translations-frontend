import { Routes } from '@angular/router'
import { ProjectComponent } from './project.component';

export const ProjectRouteNames = {
    projectHome: 'projects'
};

export const ProjectRoutes: Routes = [
    {
        path: ProjectRouteNames.projectHome, children: [
            { path: '', component: ProjectComponent, outlet: 'content' },
        ]
    }
];