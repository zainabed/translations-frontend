import { Component } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { ProjectForm } from './project.form';
import {Router} from '@angular/router';

@Component({
    selector: "project-form-component",
    templateUrl: "./projects-form.html"
})
export class ProjectFormComponent {

    constructor(private projectService: ProjectService, private projectForm: ProjectForm, private router: Router) {

    }

    create() {
        this.projectService.create(this.projectForm.getData())
            .subscribe(() => {
                this.router.navigate(['/projects']);
            }, (error) => {
                console.log(error);
            });
    }

}