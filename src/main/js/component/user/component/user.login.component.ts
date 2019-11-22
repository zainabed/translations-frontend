import { Component } from "@angular/core";
import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";
import { HttpProgress } from "../../../lib/http/http.progress";
import { MatSnackBar } from '@angular/material';
import { UserHttp } from "../http/user.http";
import { LoginForm } from "../form/login.form";
import { Login } from "../model/login";
import { Router } from "@angular/router";
import { ErrorMatcher } from "../../../lib/form/error.matcher";
import { UserStoreService } from "../service/user.store.service";
import { SecurityFactory, AuthenticationManager, AuthUser } from '@zainabed/security';


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
        public router: Router,
        public snackBar: MatSnackBar,
        public httpProgress: HttpProgress,
        public userStoreService: UserStoreService,
        private securityFactory: SecurityFactory) {

    }

    login() {
        let login: Login = this.loginForm.getData();
        this.http.authenticate(login.username, login.password).subscribe(this.onSuccess.bind(this),
            this.onError.bind(this));
    }

    onSuccess(response) {
        this.loginForm.reset();
        let authenticationManager : AuthenticationManager = this.securityFactory.getAuthenticationManager();
        let userDetails: AuthUser = this.userStoreService.buildUserDetails(response);
        authenticationManager.set(userDetails);
        this.router.navigate(["/projects"]);
    }

    onError(error) {
        console.log(error);
        this.snackBar.open(error.error.message, null, {
            duration: this.snackBarDuration
        });
    }
}