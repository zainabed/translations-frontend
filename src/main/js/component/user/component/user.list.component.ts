import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';

//import { UserService } from "../model/user.service";
//import { ResourceListService } from "../../../lib/http/resource.list.service";
//import { ResourceList } from "../../../lib/http/resource.list";
import { AppResourceData } from "../../../app.resource.data";
import { User } from "../model/user";


@Component({
    selector: "users-list",
    templateUrl: "users-list.html"
})
export class UserListComponent {
  /*  resourceName = "users";
    apiUrl;
    private _list;
    dataSource: MatTableDataSource<User>;
    displayedColumns = ['username', 'email'];

    constructor(public service: ResourceListService, private appData: AppResourceData) {

    }

    ngOnInit() {
        this.apiUrl = this.appData.getResourceListUrlFor(this.resourceName);
        this.service.get(this.apiUrl).subscribe(
            (response: ResourceList) => {
                this.list = response._embedded[this.resourceName];
                this.dataSource = new MatTableDataSource(this.list);
            });
    }

    get list() {
        return this._list;
    }

    set list(list) {
        this._list = list;
    }
    */
}