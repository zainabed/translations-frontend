import { OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from "@angular/router";

import { ResourcesService } from "../http/resources.service";
import { Resources } from "../http/resources";
import { AppResourceData } from "../../app.resource.data";

import { ResourceList } from "./resource.list";

/**
 * 
 */
export abstract class ResourceListComponent implements ResourceList {
    resource;
    protected apiUrl;
    protected EMBEDDED = "_embedded";
    list;

    /**
     * 
     * @param service 
     * @param appData 
     */
    constructor(public service: ResourcesService,
        protected appData: AppResourceData) {
        this.setResource();
    }

    abstract setResource();

    /**
     * 
     */
    ngOnInit() {
        this.apiUrl = this.appData.getResourceListUrlFor(this.resource);
        this.get();
    }

    /**
     * 
     */
    get() {
        this.service.get(this.apiUrl).subscribe(this.onGetSuccess.bind(this), this.onGetFail.bind(this));
    }

    /**
     * 
     * @param response 
     */
    onGetSuccess(response: Resources) {
        this.list = response[this.EMBEDDED][this.resource];
    }

    /**
     * 
     * @param error 
     */
    onGetFail(error) {
        console.log(error);
    }
}