import { OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute , Router} from "@angular/router";

import { ResourcesService } from "../http/resources.service";
import { ResourceService } from "../http/resource.service";
import { Resources } from "../http/resources";
import { AppResourceData } from "../../app.resource.data";

import { ResourceList } from "./resource.list";



/**
 * 
 */
export abstract class ResourceListComponent implements ResourceList {
    protected _path;
    protected _route;
    public apiUrl;
    public EMBEDDED = "_embedded";
   
    /**
     * 
     * @param service 
     * @param appData 
     */
    constructor(public resourcesService: ResourcesService,
        public resourceService: ResourceService,
        protected appData: AppResourceData,
        public router: Router) {
    }


    /**
     * 
     */
    ngOnInit() {
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