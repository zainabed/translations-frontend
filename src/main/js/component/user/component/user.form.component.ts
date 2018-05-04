import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';



import { UserForm } from "../form/user.form";
import { UserService } from "../model/user.service";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: "users-form",
    templateUrl: "users-form.html"
})
export class UserFormComponent {

    matcher = new MyErrorStateMatcher();
    public apiError = false;

    constructor(public userForm: UserForm, private userService: UserService, private router: Router) {
    }

    save() {
        this.userService.save(this.userForm.getData()).subscribe(this.navigateToUserList, this.serviceError);
    }

    navigateToUserList(response) {
        this.router.navigate(['/users']);
    }

    serviceError(error) {
        this.apiError = true;
    }
}