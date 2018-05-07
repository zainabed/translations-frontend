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
    path;
    protected apiUrl;
    protected EMBEDDED = "_embedded";
    resources;

    /**
     * 
     * @param service 
     * @param appData 
     */
    constructor(public service: ResourcesService,
        protected appData: AppResourceData) {
    }

    
    /**
     * 
     */
    ngOnInit() {
        this.apiUrl = this.appData.getResourceListUrlFor(this.path);
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
        this.resources = response[this.EMBEDDED][this.path];
    }

    /**
     * 
     * @param error 
     */
    onGetFail(error) {
        console.log(error);
    }
}