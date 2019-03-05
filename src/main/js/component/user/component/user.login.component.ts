import { Component } from "@angular/core";
import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";
import { HttpProgress } from "../../../lib/http/http.progress";
import { MatSnackBar } from '@angular/material';
import { UserHttp } from "../http/user.http";
import { LoginForm } from "../form/login.form";
import { Login } from "../model/login";
import { JwtToken } from "../model/jwt.token";
import { Router } from "@angular/router";
import { ErrorMatcher } from "../../../lib/form/error.matcher";
import { UserDetailsService } from "@app/lib/security/user.details.service";

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
    matcher = new ErrorMatcher();

    constructor(public http: UserHttp,
        public loginForm: LoginForm,
        public jwtToken: JwtToken,
        public router: Router,
        public snackBar: MatSnackBar,
        public httpProgress: HttpProgress,
        public userDetailsService: UserDetailsService) {

    }

    login() {
        let login: Login = this.loginForm.getData();
        this.http.authenticate(login.username, login.password).subscribe(this.onSuccess.bind(this),
            this.onError.bind(this));
    }

    onSuccess(response) {
        this.jwtToken.setTokeObject(response);
        this.loginForm.reset();
        this.userDetailsService.set(response);
        this.router.navigate(["/"]);
    }

    onError(error) {
        console.log(error);
        this.snackBar.open(error.error.message, null, {
            duration: this.snackBarDuration
        });
    }
}