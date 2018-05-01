import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable()
export class ProjectForm {

    form: FormGroup;

    constructor(private builder: FormBuilder) {
        this.form = this.builder.group({
            name: ['', [Validators.required, Validators.min(5), Validators.max(15)]],
            description: ['', [Validators.required, Validators.min(10), Validators.max(200)]],
            imageUri: ['']
        });
    }

    getData(): Project {
        let project: Project = new Project();
        project.name = this.form.get('name').value;
        project.description = this.form.get('description').value;
        project.imageUri = this.form.get('imageUri').value;

        return project;
    }
}