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
      //  console.log(this.appData.resource);
      //  console.log(this.apiUrl);
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

    onGetFail(response) {
        this.resourceList = null;
        this.error = response;
        this.httpProgress = false;
        this.showNotification(response.error.message);
    }

    delete(resource) {
        let apiUrl = this.appData.getResourceSelfUrl(resource);
        this.resourceService.delete(apiUrl).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    onDeleteSuccess(response: any) {
        this.showNotification("Deleted record successfully.");
        this.get();
    }

    onDeleteFail(response: any) {
        this.error = response;
        this.showNotification(response.error.message);
    }

    edit(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id, "edit"]);
    }

    open(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id]);
    }

    showNotification(message) {
        this.snackBar.open(message, null, {
            duration: this.snackBarDuration
        });
    }
}