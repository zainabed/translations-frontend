import { Routes } from '@angular/router'
import { ProjectComponent } from './project.component';
import { ProjectFormComponent } from './project.form.component';

export const ProjectRouteNames = {
    projectHome: 'projects',
    projectNew: 'project-new'
};

export const ProjectRoutes: Routes = [
    {
        path: ProjectRouteNames.projectHome, children: [
            { path: '', component: ProjectComponent, outlet: 'content' }

        ],

    },
    {
        path: 'new',
        children: [
            { path: '', component: ProjectFormComponent, outlet: 'content' }

        ]
    }
];