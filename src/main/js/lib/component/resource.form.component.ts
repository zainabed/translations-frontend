//import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ResourceService } from "../http/resource.service";
import { ResourcesService } from "../http/resources.service";
import { AppResourceData } from "../../app.resource.data";
import { ModelForm } from "../form/model.form";
import { Resource } from "../http/resource";

import { ResourceListComponent } from "./resource.list.component";
import { ResourceForm } from "./resource.form";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


export abstract class ResourceFormComponent<T> extends ResourceListComponent implements ResourceForm {

    matcher = new MyErrorStateMatcher();

    constructor(public resourceService: ResourceService,
        public resourcesService: ResourcesService,
        public form: ModelForm<T>,
        public appData: AppResourceData) {
        super(resourcesService, appData);
    }

  
    post() {
        let data = this.form.getData();
        this.resourcesService.post(this.apiUrl, data).subscribe(this.onPostSuccess.bind(this), this.onPostFail.bind(this));
    }

    onPostSuccess(response) {
    }

    onPostFail(error) {
    }

    patch(resource: Resource) {
        let apiUrl = this.appData.getResourceSelfUrl(resource);
        let data = this.form.getData();
        this.resourceService.update(apiUrl, data).subscribe(this.onPatchSuccess.bind(this), this.onPatchFail.bind(this));
    }

    onPatchSuccess(response) {
    }

    onPatchFail(error) {
    }
}