import { Injector, Component } from "@angular/core";

import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { ResourcePath, ResourceComponent } from "../../../lib/component/resource.component.core";
import { AppResourceData } from "../../../app.resource.data";

import { Project } from "../model/project";
import { ProjectService } from "../model/project.service";
import { User } from "../../user/model/user";
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';

@ResourcePath({
    path: "projects",
    route: "/projects",
    id: "projectId"
})
@Component({
    selector: "project-dashboard",
    templateUrl: "project-dashboard.html",
    host: {
        class: "column__xdt--10 column__dt--10 center-center"
    }
})
export class ProjectDashboardComponent extends ResourceComponent<Project>{
    appData: AppResourceData;
    constructor(injector: Injector,
        private sidebarService: SidebarService,
        private projectService: ProjectService,
        public securityFactory: SecurityFactory) {
        super(injector);
        this.appData = injector.get(AppResourceData);
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.projectService.resource = response;
        let id = this.appData.getResourceId(response);
        this.projectService.projectId = id
        this.sidebarService.resource = this.resource;
        this.router.navigate([this._route, id, "locales"]);
        //this.updateUserDetailsRoles(id);
    }

    /*updateUserDetailsRoles(projectId: string){
        let authenticationManager: AuthenticationManager = this.securityFactory.getAuthenticationManager();
        let userDetails: User = Object.assign(new User(), authenticationManager.get());
        let roles = userDetails.getRoles().filter( (grantedRole : GrantedRole) =>{
            return grantedRole.getRole().startsWith(projectId);
        }).map( (grantedRole : GrantedRole) => {
            return new GrantedRole(grantedRole.getRole().replace(projectId + "_", ""));
        });

        userDetails.roles = roles;
        console.log(userDetails); 
        this.userDetailsService.set(userDetails);
    }*/
}