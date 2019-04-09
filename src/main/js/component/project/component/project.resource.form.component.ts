import { Component, Injector } from "@angular/core";


import { ModelForm } from "../../../lib/form/model.form";
import { ProjectService } from "../../project/model/project.service";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";


export class ProjectResourceFormComponent<T> extends ResourceFormComponent<T> {
    title;
    projectService: ProjectService;
    projectId: string;

    constructor(injector: Injector) {
        super(injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.setProject();
        
    }

    setProject() {
        let projectResource = this.projectService.resource;
        let projectHref = this.appData.getResourceSelfUrl(projectResource);
        this.form.form.get("projects").setValue(projectHref);
        this.projectId = this.projectService.projectId;
    }

    navigateToList() {
        this.router.navigate(["projects", this.projectId, this._path]);
    }

}