
import { Component } from "@angular/core";
import { MatSnackBar } from '@angular/material';
import { UserHttp } from "../http/user.http";
import { UserForm } from "../form/user.form";
import { User } from "../model/user";
import { HttpProgress } from "../../../lib/http/http.progress";


/**
 * 
 */
@Component({
    selector: "user-register-component",
    templateUrl: "user-register.html",
    host: {
        class: "row center-center"
    }
})
export class UserRegisterComponent {
    public response: any;
    snackBarDuration = 2000;

    /**
     * 
     * @param userHttp 
     * @param userForm 
     * @param snackBar 
     */
    constructor(
        private userHttp: UserHttp,
        public userForm: UserForm,
        public snackBar: MatSnackBar,
        public httpProgress: HttpProgress) {
        this.response = null;
    }

    /**
     * 
     */
    register() {
        let user: User = this.userForm.getData();
        this.userHttp.register(user).subscribe(this.onRegisterSuccess.bind(this), this.onRequestFail.bind(this));
    }

    /**
     * 
     * @param response 
     */
    onRegisterSuccess(response) {
        this.response = response;
    }

    /**
     * 
     * @param error 
     */
    onRequestFail(error) {
        this.snackBar.open(error.error.message, null, {
            duration: this.snackBarDuration
        });
    }
}