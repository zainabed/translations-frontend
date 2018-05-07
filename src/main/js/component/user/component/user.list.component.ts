import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from "@angular/router";

import { UserService } from "../model/user.service";
import { Resources } from "../../../lib/http/resources";
import { ResourcePath, ResourceListComponent } from "../../../lib/component/resource.component.core";
import { ResourcesService } from "../../../lib/http/resources.service";
import { AppResourceData } from "../../../app.resource.data";
import { User } from "../model/user";

/**
 * 
 */
@ResourcePath("users")
@Component({
    selector: "users-list",
    templateUrl: "users-list.html"
})
export class UserListComponent extends ResourceListComponent {
    
    dataSource: MatTableDataSource<User>;
    displayedColumns = ['username', 'email'];
    errorMessage: string = null;

    /**
     * 
     * @param service 
     * @param appData 
     * @param route 
     */
    constructor(service: ResourcesService,
        appData: AppResourceData) {
        super(service, appData);
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
        super.onGetSuccess(response);
        this.dataSource = new MatTableDataSource(this.resourceList)
    }

    /**
     * 
     * @param error 
     */
    onGetFail(error) {
        super.onGetFail(error);
        this.errorMessage = "Failed to fetch " + this.path + " list";
    }


}