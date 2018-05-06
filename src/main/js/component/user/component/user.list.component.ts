import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from "@angular/router";

import { ResourceListComponent } from "../../../lib/component/resource.list.component";
import { UserService } from "../model/user.service";
import { Resources } from "../../../lib/http/resources";
import { ResourcesService } from "../../../lib/http/resources.service";
import { AppResourceData } from "../../../app.resource.data";
import { User } from "../model/user";

/**
 * 
 */
@Component({
    selector: "users-list",
    templateUrl: "users-list.html"
})
export class UserListComponent extends ResourceListComponent {

    dataSource: MatTableDataSource<User>;
    displayedColumns = ['username', 'email'];

    /**
     * 
     * @param service 
     * @param appData 
     * @param route 
     */
    constructor(service: ResourcesService,
        appData: AppResourceData,
        route: ActivatedRoute) {
        super(service, appData);
    }

    /**
     * 
     */
    setResource() {
        this.resource = "users";
    }

    /**
     * 
     * @param response 
     */
    onGetSuccess(response: Resources) {
        super.onGetSuccess(response);
        this.dataSource = new MatTableDataSource(this.list)
    }
}