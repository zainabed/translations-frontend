import { OnInit, Injector } from "@angular/core";
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from "@angular/router";

import { ResourcesService } from "../http/resources.service";
import { ResourceService } from "../http/resource.service";
import { Resources } from "../http/resources";
import { AppResourceData } from "../../app.resource.data";

import { ResourceList } from "./resource.list";



/**
 * 
 */
export abstract class ResourceListComponent<T> implements ResourceList {
    public _path;
    public _route;
    public _id;
    public apiUrl;
    public EMBEDDED = "_embedded";
    public error;
    public resource: T;
    public resourceList;
    public httpProgress: boolean = false;
    public snackBar: MatSnackBar;
    public snackBarDuration = 5000;

    resourcesService: ResourcesService;
    resourceService: ResourceService;
    appData: AppResourceData;
    router: Router;
    route: ActivatedRoute;

    /**
     * 
     * @param service 
     * @param appData 
     */
    constructor(injector: Injector) {
        this.resourcesService = injector.get(ResourcesService);
        this.resourceService = injector.get(ResourceService);
        this.appData = injector.get(AppResourceData);
        this.router = injector.get(Router);
        this.route = injector.get(ActivatedRoute);
        this.snackBar = injector.get(MatSnackBar);
    }

    getComponentPath() {
        return this._path;
    }

    /**
     * 
     */
    ngOnInit() {
        if (!this._path) {
            throw new Error("Path property is not set for this component.");
        }
        this.apiUrl = this.appData.getResourceListUrlFor(this.appData.resource, this._path);
    }

    /**
     * 
     * @param response 
     */
    getEmbeddedResource(response) {
        return response[this.EMBEDDED][this._path];
    }

    /**
     * 
     */
    get() {
        this.httpProgress = true;
        this.resourcesService.get(this.apiUrl).subscribe(this.onGetSuccess.bind(this), this.onGetFail.bind(this));
    }

    onGetSuccess(response) {
        this.resourceList = this.getEmbeddedResource(response);
        this.httpProgress = false;
    }

    onGetFail(error) {
        this.resourceList = null;
        this.error = error;
        this.httpProgress = false;
        this.showNotification("Unable to fetch record. please try after some time.");
    }

    delete(resource) {
        let apiUrl = this.appData.getResourceSelfUrl(resource);
        this.resourceService.delete(apiUrl).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    onDeleteSuccess(response: any) {
        this.showNotification("Deleted record successfully.");
        this.get();
    }

    onDeleteFail(error: any) {
        this.error = error;
        this.showErrorMessage(error, "Unable to delete record. please delete all related record associated wit it.");
        //this.showNotification("Unable to delete record. please delete all related record associated wit it.");
    }

    edit(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id, "edit"]);
    }

    open(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id]);
    }

    showErrorMessage(error, message?: string) {
        switch (error.status) {
            case 403:
                this.showNotification("You are not authorized");
                break;
            default:
                if (message)
                    this.showNotification(message);
        }
    }
    showNotification(message) {
        this.snackBar.open(message, null, {
            duration: this.snackBarDuration
        });
    }
}