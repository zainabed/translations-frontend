import { Component } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { ProjectForm } from './project.form';

@Component({
    selector: "project-form-component",
    templateUrl: "./projects-form.html"
})
export class ProjectFormComponent {

    constructor(private projectService: ProjectService, private projectForm: ProjectForm) {

    }

    create() {
        this.projectService.create(this.projectForm.getData())
            .subscribe(() => {

            }, (error) => {
                console.log(error);
            });
    }

}