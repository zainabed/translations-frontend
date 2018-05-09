import { Component, OnInit, Injector } from "@angular/core";
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
    templateUrl: "users-list.html",
    host: {
        class: "column__xdt--12"
    }
})
export class UserListComponent extends ResourceListComponent {

    dataSource: MatTableDataSource<User>;
    displayedColumns = ['username', 'email', 'selection'];
    errorMessage: string = null;
    resourceList;

    /**
     * 
     * @param service 
     * @param route 
     */
    constructor(injector: Injector) {
        super(injector);
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
        this.resourceList = this.getEmbeddedResource(response);
        this.dataSource = new MatTableDataSource(this.resourceList);
    }

    /**
     * 
     * @param error 
     */
    onGetFail(error) {
        this.errorMessage = "Failed to fetch list";
    }



    onDeleteSuccess(response) {
        this.get();
    }

    onDeleteFail(error) {

    }

}