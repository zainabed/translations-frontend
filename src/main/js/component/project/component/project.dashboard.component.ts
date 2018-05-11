import { Injector, Component } from "@angular/core";

import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { ResourcePath, ResourceComponent } from "../../../lib/component/resource.component.core";

import { Project } from "../model/project";

@ResourcePath({
    path: "projects",
    route: "/projects"
})
@Component({
    selector: "project-dashboard",
    templateUrl: "project-dashboard.html"
})
export class ProjectDashboardComponent extends ResourceComponent<Project>{

    constructor(injector: Injector, private sidebarService: SidebarService) {
        super(injector);
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.sidebarService.resource = this.resource;
    }
}