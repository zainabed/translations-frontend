import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService } from "../../project/model/project.service";


export class ProjectResourceListComponent<T> extends ResourceListComponent<T> {
    projectService: ProjectService;
    projectId: string;

    constructor(injector: Injector) {
        super(injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.apiUrl = this.appData.getResourceListUrlFor(this.projectService.resource, this._path);
        this.projectId = this.route.snapshot.paramMap.get(this.projectService.projectId);
        this.get();
    }

    edit(resource) {
        let localeId = this.appData.getResourceId(resource);
        this.router.navigate(["projects", this.projectId, this._path, localeId]);
    }

    add() {
        this.router.navigate(["projects", this.projectId, this._path, "new"]);
    }

}