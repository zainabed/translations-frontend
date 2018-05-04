import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material';

import { UserService } from "../model/user.service";
import { User } from "../model/user";


@Component({
    selector: "users-list",
    templateUrl: "users-list.html"
})
export class UserListComponent {
    private _list;
    dataSource: MatTableDataSource<User>;
    displayedColumns = [ 'username', 'email'];

    constructor(public userService: UserService) {

    }

    ngOnInit() {
        this.userService.get().subscribe(
            (response) => {
                this.list = response.list;
                this.dataSource = new MatTableDataSource(this.list);
            });
    }

    get list() {
        return this._list;
    }

    set list(list) {
        this._list = list;
    }
}