import { Component } from "@angular/core";
import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";
import { MatSnackBar } from '@angular/material';
import { LoginHttpService } from "../http/login.http.service";
import { LoginForm } from "../form/login.form";
import { Login } from "../model/login";
import { JwtToken } from "../model/jwt.token";
import { Router } from "@angular/router";
import { ErrorMatcher } from "../../../lib/form/error.matcher";

@ResourcePath({
    path: "login",
    route: "/login",
    id: "login"
})
@Component({
    selector: "user-login-component",
    templateUrl: "login-form.html",
    host: {
        class: "row center-center"
    }
})
export class UserLoginComponent {
    snackBarDuration = 2000;
    httpProgress: boolean;
    matcher = new ErrorMatcher();

    constructor(public loginService: LoginHttpService,
        public loginForm: LoginForm,
        public jwtToken: JwtToken,
        public router: Router, public snackBar: MatSnackBar) {

    }

    login() {
        let login: Login = this.loginForm.getData();
        this.httpProgress = true;
        this.loginService.authenticate(login.username, login.password).subscribe(this.onSuccess.bind(this),
            this.onError.bind(this));
    }

    onSuccess(response) {
       this.jwtToken.setTokeObject(response);
        
        this.httpProgress = false;
        this.loginForm.reset();
        this.router.navigate(["/"]);
    }

    onError(error) {
        this.httpProgress = false;
        console.log(error);
        this.snackBar.open(error.error.message, null, {
            duration: this.snackBarDuration
        });
    }
}