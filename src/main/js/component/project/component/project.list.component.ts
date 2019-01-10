import { Component, Injector, AfterContentInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { ResourcePath, ResourceListComponent } from "../../../lib/component/resource.component.core";

import { Project } from '../model/project';
import { ProjectService } from '../model/project.service';



@ResourcePath({
    path: "projects",
    route: "/projects",
    id: "projectId"
})
@Component({
    selector: "project-list",
    templateUrl: './projects-list.html',
    host: {
        class: "column__xdt--10 column__dt--10"
    }
})
export class ProjectListComponent extends ResourceListComponent<Project> implements AfterContentInit {

    private projects;
    projectsTableData: MatTableDataSource<Project>;
    displayedColumns = ['name', 'description', "selection"];

    constructor(injector: Injector, private sidebarService: SidebarService) {
        super(injector);

    }

    ngOnInit() {
        super.ngOnInit();
        this.get();
        //     this.sidebarService.resource = null;
    }

    ngAfterContentInit() {
        // this.sidebarService.resource = null;
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.projectsTableData = new MatTableDataSource(this.resourceList);
    }


    extend(project, extendProject) {
        let projectId = this.appData.getId(project);
        let extendProjectId = this.appData.getId(extendProject);
        this.resourcesService.post(this.apiUrl + "/" + projectId + "/extend/" + extendProjectId, {})
            .subscribe(this.onExtendSuccess.bind(this), this.onExtendFail.bind(this));;
    }

    onExtendSuccess(response) {

    }

    onExtendFail(response) {
        console.log(response);
    }
}