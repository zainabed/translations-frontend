import { Component, Injector } from '@angular/core';
import { ProjectService } from '../model/project.service';
import { Project } from '../model/project';
import { ProjectForm } from '../form/project.form';
import { Router } from '@angular/router';


import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "projects",
    route: "/projects",
    id: "projectId"
})
@Component({
    selector: "project-form-component",
    templateUrl: "./projects-form.html"
})
export class ProjectFormComponent extends ResourceFormComponent<Project>{

    inProgress: Boolean = false;
    title: string;

    constructor(private projectForm: ProjectForm, injector: Injector) {
        super(projectForm, injector);
    }

    ngOnInit(){
        super.ngOnInit();
        if(this.isForUpdate){
            this.title = "Update Project";
        }else{
            this.title = "Add New Project";
        }
    }
}