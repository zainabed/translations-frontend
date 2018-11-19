import { Injector } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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


export abstract class ResourceFormComponent<T> extends ResourceListComponent<T> implements ResourceForm {

    matcher = new MyErrorStateMatcher();
    private id: any;
    protected isForUpdate: boolean = false;
    
    constructor(public form: ModelForm<T>, injector: Injector) {
        super(injector);
        
    }

    ngOnInit() {
        super.ngOnInit();
        this.id = this.route.snapshot.paramMap.get(this._id);
        if (this.id) {
            this.isForUpdate = true;
            this.apiUrl += "/" + this.id;
            this.get();
        }
    }

    post() {
        if (this.form.form.valid) {
            let data = this.form.getData();
            this.httpProgress = true;
            this.resourcesService.post(this.apiUrl, data).subscribe(this.onPostSuccess.bind(this), this.onPostFail.bind(this));
        }
    }

    onPostSuccess(response) {
        this.httpProgress = false;
        this.showNotification("Added record successfully.");
        this.navigateToList();
    }

    onPostFail(response) {
        this.httpProgress = false;
        this.error = response;
        this.showNotification(response.error.message);
    }

    patch(resource: Resource) {
        if (this.form.form.valid) {
            let apiUrl = this.appData.getResourceSelfUrl(resource);
            let data = this.form.getData();
            this.httpProgress = true;
            this.resourceService.patch(apiUrl, data).subscribe(this.onPatchSuccess.bind(this), this.onPatchFail.bind(this));
        }
    }

    onPatchSuccess(reponse) {
        this.httpProgress = false;
        this.showNotification("Update record successfully.");
        this.navigateToList();
    }

    onPatchFail(error) {
        this.httpProgress = false;
        this.error = error;
        this.showNotification("Unable to update record. please try after some time.");
    }

    put(resource) {
        if (this.form.form.valid) {
            let apiUrl = this.appData.getResourceSelfUrl(resource);
            let data = this.form.getData();
            this.httpProgress = true;
            this.resourceService.put(apiUrl, data).subscribe(this.onPutSuccess.bind(this), this.onPutFail.bind(this));
        }
    }

    onPutSuccess(reponse) {
        this.httpProgress = false;
        this.showNotification("Update record successfully.");
        this.navigateToList();
    }

    onPutFail(error) {
        this.httpProgress = false;
        this.error = error;
        this.showNotification("Unable to update record. please try after some time.");
    }
    

    navigateToList() {
        this.router.navigate([this._route]);
    }

    onGetSuccess(response) {
        this.httpProgress = false;
        this.resource = response;
        this.form.form.patchValue(response);
    }

    onDeleteSuccess(response: any) {
        this.showNotification("Deleted record successfully.");
        this.navigateToList();
    }

}