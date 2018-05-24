import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginForm } from "../form/login.form";
import { LoginResource } from "../http/login.resource";
import { AuthService } from "../../../lib/oauth/auth.service";

@Component({
    selector: "login",
    templateUrl: "login.html",
    host: {
        class: "component row center-center"
    }
})
export class LoginComponent {

    private httpProgress;

    constructor(private loginForm: LoginForm,
        private loginResource: LoginResource,
        private authService: AuthService,
        private router: Router) {

    }

    login() {
        console.log("clicked");
        let login = this.loginForm.getData();
        this.httpProgress = true;
        this.loginResource.authenticate(login).subscribe(this.onSuccess.bind(this), this.onFail.bind(this));
    }

    onSuccess(token) {
        this.authService.token = token;
        this.httpProgress = false;
        this.router.navigate(["/"]);
    }

    onFail(error) {
        this.httpProgress = false;
    }
} 