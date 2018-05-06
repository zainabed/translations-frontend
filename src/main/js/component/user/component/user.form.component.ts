import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ResourceService } from "../../../lib/http/resource.service";
import { ResourcesService } from "../../../lib/http/resources.service";
import { AppResourceData } from "../../../app.resource.data";

import { ResourceFormComponent } from "../../../lib/component/resource.form.component";

import { UserForm } from "../form/user.form";
import { UserService } from "../model/user.service";
import { User } from '../model/user';

@Component({
    selector: "users-form",
    templateUrl: "users-form.html"
})
export class UserFormComponent extends ResourceFormComponent<User>{
   
    constructor(public resourceService: ResourceService,
        public resources: ResourcesService,
        public userForm: UserForm,
        public router: Router,
        public appData: AppResourceData) {
        super(resourceService, resources, userForm,  appData);
    }

    setResource(){
        this.resource = "users";
    }

    onPostSuccess(response) {
        this.router.navigate(["/" + this.resource]);
    }
}