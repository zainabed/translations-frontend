import { Component, Injector } from "@angular/core";


import { ModelForm } from "../../../lib/form/model.form";
import { ProjectService } from "../../project/model/project.service";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";


export class ProjectResourceFormComponent<T> extends ResourceFormComponent<T> {
    title;
    projectService: ProjectService;
    projectId: string;

    constructor(form: ModelForm<T>, injector: Injector) {
        super(form, injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.setProject();
        this.projectId = this.route.snapshot.paramMap.get(this.projectService.projectId);
    }

    setProject() {
        let projectResource = this.projectService.resource;
        let projectHref = this.appData.getResourceListUrlFor(projectResource, "self");
        this.form.form.get("projects").setValue(projectHref);

    }

    navigateToList() {
        this.router.navigate(["projects", this.projectId, this._path]);
    }

}