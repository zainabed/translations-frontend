import { Injector } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


import { ResourceService } from "../http/resource.service";
import { ResourcesService } from "../http/resources.service";
import { AppResourceData } from "../../app.resource.data";
import { ModelForm } from "../form/model.form";
import { ErrorMatcher } from "../form/error.matcher";
import { Resource } from "../http/resource";

import { ResourceListComponent } from "./resource.list.component";
import { ResourceForm } from "./resource.form";



/**
 * 
 */
export abstract class ResourceFormComponent<T> extends ResourceListComponent<T> implements ResourceForm {

    matcher = new ErrorMatcher();
    public id: any;
    public isForUpdate: boolean = false;
   
    /**
     * 
     * @param form 
     * @param injector 
     */
    constructor(public form: ModelForm<T>, injector: Injector) {
        super(injector);
        
    }

    /**
     * 
     */
    ngOnInit() {
        super.ngOnInit();
        this.id = this.route.snapshot.paramMap.get(this._id);
        if (this.id) {
            this.isForUpdate = true;
            this.apiUrl += "/" + this.id;
            this.get();
        }
    }

    /**
     * 
     */
    post() {
        if (this.form.form.valid) {
            let data = this.form.getData();
            this.resourcesService.post(this.apiUrl, data).subscribe(this.onPostSuccess.bind(this), this.onPostFail.bind(this));
        }
    }

    /**
     * 
     * @param response 
     */
    onPostSuccess(response) {
        this.showNotification("Added record successfully.");
        this.navigateToList();
    }

    /**
     * 
     * @param response 
     */
    onPostFail(response) {
        this.error = response;
        this.showNotification(response.error.message);
    }

    /**
     * 
     * @param resource 
     */
    patch(resource: Resource) {
        if (this.form.form.valid) {
            let apiUrl = this.appData.getResourceSelfUrl(resource);
            let data = this.form.getData();
            this.resourceService.patch(apiUrl, data).subscribe(this.onPatchSuccess.bind(this), this.onPatchFail.bind(this));
        }
    }

    /**
     * 
     * @param reponse 
     */
    onPatchSuccess(reponse) {
        this.showNotification("Update record successfully.");
        this.navigateToList();
    }

    /**
     * 
     * @param response 
     */
    onPatchFail(response) {
        this.error = response;
        this.showNotification(response.error.message);
    }

    /**
     * 
     * @param resource 
     */
    put(resource) {
        if (this.form.form.valid) {
            let apiUrl = this.appData.getResourceSelfUrl(resource);
            let data = this.form.getData();
            this.resourceService.put(apiUrl, data).subscribe(this.onPutSuccess.bind(this), this.onPutFail.bind(this));
        }
    }

    /**
     * 
     * @param reponse 
     */
    onPutSuccess(reponse) {
        this.showNotification("Update record successfully.");
        this.navigateToList();
    }

    /**
     * 
     * @param response 
     */
    onPutFail(response) {
        this.error = response;
        this.showNotification(response.error.message);
    }
    

    /**
     * 
     */
    navigateToList() {
        this.router.navigate([this._route]);
    }

    /**
     * 
     * @param response 
     */
    onGetSuccess(response) {
        this.resource = response;
        this.form.form.patchValue(response);
    }

    /**
     * 
     * @param response 
     */
    onDeleteSuccess(response: any) {
        this.showNotification("Deleted record successfully.");
        this.navigateToList();
    }

}