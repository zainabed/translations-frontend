import { OnInit, Injector } from "@angular/core";
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from "@angular/router";

import { ResourcesService } from "../http/resources.service";
import { ResourceService } from "../http/resource.service";
import { HttpProgress } from "../http/http.progress";
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
    public httpProgress: HttpProgress;
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
        this.httpProgress = injector.get(HttpProgress);
        this.appData = injector.get(AppResourceData);
        this.router = injector.get(Router);
        this.route = injector.get(ActivatedRoute);
        this.snackBar = injector.get(MatSnackBar);

    }

    /**
     * 
     */
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
        let resource = response[this.EMBEDDED][this._path];
        if(!resource) {
            throw new Error("Embedded resource not found.");
        }
        
        return resource;
    }

    /**
     * 
     */
    get() {
        this.resourcesService.get(this.apiUrl).subscribe(this.onGetSuccess.bind(this), this.onGetFail.bind(this));
    }

    /**
     * 
     * @param response 
     */
    onGetSuccess(response) {
        this.resourceList = this.getEmbeddedResource(response);
    }

    /**
     * 
     * @param response 
     */
    onGetFail(response) {
        this.resourceList = null;
        this.error = response;
        this.showNotification(response.error.message);
    }

    /**
     * 
     * @param resource 
     */
    delete(resource) {
        let apiUrl = this.appData.getResourceSelfUrl(resource);
        this.resourceService.delete(apiUrl).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    /**
     * 
     * @param response 
     */
    onDeleteSuccess(response: any) {
        this.showNotification("Deleted record successfully.");
        this.get();
    }

    /**
     * 
     * @param response 
     */
    onDeleteFail(response: any) {
        this.error = response;
        this.showNotification(response.error.message);
    }

    /**
     * 
     * @param resource 
     */
    edit(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id, "edit"]);
    }

    /**
     * 
     * @param resource 
     */
    open(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id]);
    }

    /**
     * 
     * @param message 
     */
    showNotification(message) {
        this.snackBar.open(message, null, {
            duration: this.snackBarDuration
        });
    }

    /**
     * 
     * @param response 
     */
    onRequestFail(response) {
        this.error = response;
        this.showNotification(response.error.message);
    }
}