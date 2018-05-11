import { Component, Injector, AfterContentInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { ResourcePath, ResourceListComponent } from "../../../lib/component/resource.component.core";

import { Project } from '../model/project';
import { ProjectService } from '../model/project.service';



@ResourcePath({
    path: "projects",
    route: "/projects"
})
@Component({
    selector: "project-list",
    templateUrl: './projects-list.html',
    host: {
        class: "component column__xdt--10"
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

    ngAfterContentInit(){
        console.log("change");
       // this.sidebarService.resource = null;
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.projectsTableData = new MatTableDataSource(this.resourceList);
    }

}