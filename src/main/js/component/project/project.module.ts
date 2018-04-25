import {NgModule} from '@angular/core';
import {ProjectComponent} from './project.component';
import {ProjectService} from './project.service';
import {ProjectRoutes} from './project.route';
import { Router, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        RouterModule.forChild(ProjectRoutes),
        MatTableModule
    ],
    declarations: [
        ProjectComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectModule {

}