import { Component, Injector } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ResourceService } from "../../../lib/http/resource.service";
import { ResourcesService } from "../../../lib/http/resources.service";
import { Resource } from "../../../lib/http/resource";
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
    templateUrl: "users-form.html",
    host: {
        class: "column__xdt--6"
    }
})
export class UserFormComponent extends ResourceFormComponent<User>{
    private resource: Resource;

    constructor(
        public userForm: UserForm, injector: Injector) {
        super(userForm, injector);
    }



    onPostSuccess(response) {
        this.navigateToList();
    }

    onPostFail(error) {

    }

    onGetSuccess(response: Resources) {
        this.resource = response;
        this.userForm.form.patchValue(response);
    }

    onGetFail(error) {
        console.log("Get error");
    }


    onPatchSuccess(response) {
        this.navigateToList();
    }

    onPatchFail(error) {
        console.log("Patch error");
    }

    onDeleteSuccess(response) {
        this.navigateToList();
    }

    onDeleteFail(error) {
        console.log("Delete error");
    }
}