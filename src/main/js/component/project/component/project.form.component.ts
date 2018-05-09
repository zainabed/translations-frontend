import { Component, Injector } from '@angular/core';
import { ProjectService } from '../model/project.service';
import { Project } from '../model/project';
import { ProjectForm } from '../form/project.form';
import { Router } from '@angular/router';


import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "projects",
    route: "/projects"
})
@Component({
    selector: "project-form-component",
    templateUrl: "./projects-form.html"
})
export class ProjectFormComponent extends ResourceFormComponent<Project>{

    inProgress: Boolean = false;
    project: Project;
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

    onGetSuccess(response) {
        this.project = response;
        this.projectForm.form.patchValue(response);
    }

    onGetFail(error) {

    }

    onPostSuccess(response) {
        this.navigateToList();
    }

    onPostFail(eror) {

    }

    onPatchSuccess(response) {
        this.navigateToList();
    }

    onPatchFail(error) { }

    onDeleteSuccess(response) {
        this.navigateToList();
    }

    onDeleteFail(error) {

    }


}