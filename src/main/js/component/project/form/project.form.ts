import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { ModelForm } from "../../../lib/form/model.form";
import { Service } from '@zainabed/tdi/core';

@Service()
export class ProjectForm extends ModelForm<Project>{

    constructor() {
        super();
    }

    buildForm(builder: FormBuilder): FormGroup {
        return builder.group({
            name: ['', [Validators.required, Validators.min(5), Validators.max(50)]],
            description: ['', [Validators.required, Validators.min(10), Validators.max(500)]],
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