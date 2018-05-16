import { Injector, Component } from "@angular/core";

import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { ResourcePath, ResourceComponent } from "../../../lib/component/resource.component.core";
import { AppResourceData } from "../../../app.resource.data";

import { Project } from "../model/project";
import { ProjectService } from "../model/project.service";

@ResourcePath({
    path: "projects",
    route: "/projects",
    id: "projectId"
})
@Component({
    selector: "project-dashboard",
    templateUrl: "project-dashboard.html",
    host: {
        class: "column__xdt--7 column__dt--7 center-center"
    }
})
export class ProjectDashboardComponent extends ResourceComponent<Project>{
    appData: AppResourceData;
    constructor(injector: Injector, private sidebarService: SidebarService, private projectService: ProjectService) {
        super(injector);
        this.appData = injector.get(AppResourceData);
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.projectService.resource = response;
        this.projectService.projectId = this.appData.getResourceId(response);
        this.sidebarService.resource = this.resource;
    }
}