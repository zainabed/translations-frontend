import { OnInit, Injector } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from "@angular/router";

import { ResourcesService } from "../http/resources.service";
import { ResourceService } from "../http/resource.service";
import { Resources } from "../http/resources";
import { AppResourceData } from "../../app.resource.data";

import { ResourceList } from "./resource.list";



/**
 * 
 */
export abstract class ResourceListComponent implements ResourceList {
    public _path;
    public _route;
    public apiUrl;
    public EMBEDDED = "_embedded";

    resourcesService: ResourcesService;
    resourceService: ResourceService;
    appData: AppResourceData;
    router: Router;

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
    }

    getComponentPath(){
        return this._path;
    }

    /**
     * 
     */
    ngOnInit() {
        if(!this._path) {
            throw new Error("Path property is not set for this component.");
        }
        this.apiUrl = this.appData.getResourceListUrlFor(this._path);
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
        this.resourcesService.get(this.apiUrl).subscribe(this.onGetSuccess.bind(this), this.onGetFail.bind(this));
    }

    abstract onGetSuccess(response: any);

    abstract onGetFail(error: any);

    delete(resource) {
        let apiUrl = this.appData.getResourceSelfUrl(resource);
        this.resourceService.delete(apiUrl).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    abstract onDeleteSuccess(response: any);
    abstract onDeleteFail(error: any);

    edit(resource) {
        let id = this.appData.getResourceId(resource);
        this.router.navigate([this._route, id]);
    }

}