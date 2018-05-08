import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ResourceService } from "../../../lib/http/resource.service";
import { ResourcesService } from "../../../lib/http/resources.service";
import { AppResourceData } from "../../../app.resource.data";
import { Resources } from "../../../lib/http/resources";

import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";

import { UserForm } from "../form/user.form";
import { User } from '../model/user';

@ResourcePath({
    path: "users",
    route: "/users"
})
@Component({
    selector: "users-form",
    templateUrl: "users-form.html"
})
export class UserFormComponent extends ResourceFormComponent<User>{

    constructor(public resourceService: ResourceService,
        public resourcesService: ResourcesService,
        public userForm: UserForm,
        public router: Router,
        public appData: AppResourceData) {
        super(resourcesService, resourceService, userForm, appData);
    }



    onPostSuccess(response) {
        this.router.navigate(["/" + this.path]);
    }

    onGetSuccess(response: Resources) {

    }

    onGetFail(error) {

    }

    onDeleteSuccess(response) {
        this.router.navigate(this.route);
    }

    onDeleteFail(error) {

    }
}