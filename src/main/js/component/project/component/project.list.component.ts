import { Component, Injector, AfterContentInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { SidebarService } from "../../../layout/sidebar/sidebar.service";
import { ResourcePath, ResourceListComponent } from "../../../lib/component/resource.component.core";

import { Project } from '../model/project';
import { UserStoreService } from '../../user/service/user.store.service';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { HeaderService, BACKGROUND_COLOR, HEADER_POSITION, HEADER_TYPE, FAB_DIRECTION } from 'src/main/js/layout/header/header.service';


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
    authenticationManager: AuthenticationManager;

    constructor(
        injector: Injector,
        private sidebarService: SidebarService,
        private securityFactory: SecurityFactory,
        private userStoreService: UserStoreService,
        headerService: HeaderService) {
        super(injector);
        this.setHeader(headerService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.sidebarService.resource = null;
        this.authenticationManager = this.securityFactory.getAuthenticationManager();
        this.authenticationManager.set(this.userStoreService.getItem());
        this.get();

    }

    setHeader(headerService: HeaderService) {
        headerService.setHeader({
            title: "Projects",
            background: BACKGROUND_COLOR.PRIMARY,
            position: HEADER_POSITION.STICKY,
            type: HEADER_TYPE.PROMINENT,
            fab: true,
            fabDirection: FAB_DIRECTION.RIGHT
        });
    }


    get() {
        this.apiUrl += "/search/user?id=" + this.authenticationManager.get().getId();
        this.resourcesService.get(this.apiUrl).subscribe(this.onGetSuccess.bind(this), this.onGetFail.bind(this));
    }

    ngAfterContentInit() {
        // this.sidebarService.resource = null;
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.resourceList = this.filterExtendedProjects(this.resourceList);
        this.projectsTableData = new MatTableDataSource(this.resourceList);
    }

    filterExtendedProjects(projects) {
        projects.map(p => {
            p.extendList = this.resourceList.filter(e => {
                return e.name != p.name && p.extended == null && this.appData.getId(p) != e.extended;
            });
            return p;
        });
        return projects;
    }

    
    extend(project, extendProject) {
        let projectId = this.appData.getId(project);
        let extendProjectId = this.appData.getId(extendProject);
        let extendApiUrl = this.getApiUrl() + "/" + projectId + "/extend/" + extendProjectId;
        this.resourcesService.post(extendApiUrl, {})
            .subscribe(this.onExtendSuccess.bind(this), this.onExtendFail.bind(this));;
    }

    onExtendSuccess(response) {
        this.showNotification("Project is extended successfully.");
        this.get();
    }

    onExtendFail(response) {
        this.error = response;
        this.showNotification(response.error.message);
    }

    getImageName(name) {
        name = name.split(" ").join("_").toLowerCase();
        return "/assets/images/projects/" + name + ".jpg";
    }
}