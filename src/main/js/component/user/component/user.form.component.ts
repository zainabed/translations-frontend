import { Component } from "@angular/core";
import { UserForm } from "../form/user.form";

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

    constructor(public userForm: UserForm) {

    }
}