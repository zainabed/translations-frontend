import { Component, Injector } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Project } from '../model/project';
import { ProjectService } from '../model/project.service';

import { ResourcePath, ResourceListComponent } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "projects",
    route: "/projects"
})
@Component({
    selector: "project-list",
    templateUrl: './projects-list.html',
    host: {
        class: "column__xdt--12"
    }
})
export class ProjectListComponent extends ResourceListComponent {

    private projects;
    projectsTableData: MatTableDataSource<Project>;
    displayedColumns = ['name', 'description', "selection"];

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.get();
    }

    onGetSuccess(response) {
        this.projects = this.getEmbeddedResource(response);
        this.projectsTableData = new MatTableDataSource(this.projects);
    }

    onGetFail(error) {

    }

    onDeleteSuccess(response) {
        this.get();
     }

    onDeleteFail(error) { }

}