import { Component } from '@angular/core';
import { ProjectService } from '../model/project.service';
import { Project } from '../model/project';
import { ProjectForm } from '../form/project.form';
import {Router} from '@angular/router';

@Component({
    selector: "project-form-component",
    templateUrl: "./projects-form.html"
})
export class ProjectFormComponent {

    inProgress:  Boolean = false;

    constructor(private projectService: ProjectService, private projectForm: ProjectForm, private router: Router) {

    }

    create() {
        this.inProgress = true;
        this.projectService.create(this.projectForm.getData())
            .subscribe(() => {
                this.inProgress = false;
                this.router.navigate(['/projects']);
            }, (error) => {
                this.inProgress = false;
                console.log(error);
            });
    }

}