import { Component } from "@angular/core";
import { ResourcePath, ResourceFormComponent } from "../../../lib/component/resource.component.core";
import { LoginHttpService } from "../http/login.http.service";
import { LoginForm } from "../form/login.form";
import { Login } from "../model/login";
import { JwtToken } from "../model/jwt.token";
import { Router } from "@angular/router";

@ResourcePath({
    path: "login",
    route: "/login",
    id: "login"
})
@Component({
    selector: "user-login-component",
    templateUrl: "login-form.html",
    host: {
        class: "column__xdt--6"
    }
})
export class UserLoginComponent {

    constructor(private loginService: LoginHttpService, 
        private loginForm: LoginForm, 
        private jwtToken: JwtToken,
    private router: Router) {

    }

    login() {
        let login: Login = this.loginForm.getData();
        this.loginService.authenticate(login.username, login.password).subscribe(this.onSuccess.bind(this),
            this.onError.bind(this));
    }

    onSuccess(response) {
        this.jwtToken.type = response.type;
        this.jwtToken.token = response.token;
        this.router.navigate(["/"]);
    }

    onError(error) {
        console.log(error);
    }
}