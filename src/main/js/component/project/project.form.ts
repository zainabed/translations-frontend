import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable()
export class ProjectForm {

    projectForm: FormGroup;

    constructor(private builder: FormBuilder) {
        this.projectForm = this.builder.group({
            name: ['', [Validators.required, Validators.min(5), Validators.max(15)]],
            description: ['', [Validators.required, Validators.min(10), Validators.max(200)]],
            imageUri: ['']
        });
    }

    getData(): Project {
        let project: Project = new Project();
        project.name = this.projectForm.get('name').value;
        project.description = this.projectForm.get('description').value;
        project.imageUri = this.projectForm.get('imageUri').value;

        return project;
    }
}