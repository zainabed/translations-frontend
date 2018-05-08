import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

import { UserService } from "../model/user.service";
import { Resources } from "../../../lib/http/resources";
import { ResourcePath, ResourceListComponent } from "../../../lib/component/resource.component.core";
import { ResourcesService } from "../../../lib/http/resources.service";
import { ResourceService } from "../../../lib/http/resource.service";
import { AppResourceData } from "../../../app.resource.data";
import { User } from "../model/user";


export class ActivatedResource {
    snapshot: any;
}

export class ResourceRouter {

    constructor(private activatedResource: ActivatedResource, private router: Router) { }

    navigate(resource, commands: any[], extras?: NavigationExtras) {
        this.activatedResource.snapshot = resource;
        this.router.navigate(resource._path);
    }
}

/**
 * 
 */
@ResourcePath({
    path: "users",
    route: "/users"
})
@Component({
    selector: "users-list",
    templateUrl: "users-list.html"
})
export class UserListComponent extends ResourceListComponent {

    dataSource: MatTableDataSource<User>;
    displayedColumns = ['username', 'email', 'selection'];
    errorMessage: string = null;

    /**
     * 
     * @param service 
     * @param route 
     */
    constructor(resourcesService: ResourcesService,
        public resourceService: ResourceService,
        appData: AppResourceData,
        protected router: Router) {
        super(resourcesService, resourceService, appData);
    }

    /**
     * 
     */
    ngOnInit() {
        super.ngOnInit();
        this.get();
    }


    /**
     * 
     * @param response 
     */
    onGetSuccess(response: Resources) {
        this.resourceList = response[this.EMBEDDED][this.path];
        this.dataSource = new MatTableDataSource(this.resourceList);
    }

    /**
     * 
     * @param error 
     */
    onGetFail(error) {
        this.errorMessage = "Failed to fetch " + this.path + " list";
    }


    edit(resource) {

    }

    onDeleteSuccess(response) {
        this.get();
    }

    onDeleteFail(error) {

    }
    
}