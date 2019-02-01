// Core Modules
import { NgModule } from "@angular/core";
import { UserRquireModule } from './user.require.module';
import { Router, RouterModule } from '@angular/router';


// User Component and Services
import { UserForm, UserFormComponent, UserComponent, UserService, UserListComponent, UserRegisterComponent } from "./core";
import { UserRoutes } from "./user.route";
import { UserLoginComponent } from "./component/user.login.component";
import { UserLogoutComponent } from './component/user.logout.component';
import { LoginForm } from "./form/login.form";
import { UserHttp } from "./http/user.http";
import { JwtToken } from "./model/jwt.token";

@NgModule({
    imports: [
        UserRquireModule,
        RouterModule.forChild(UserRoutes)
    ],
    declarations: [
        UserComponent,
        UserFormComponent,
        UserListComponent,
        UserLoginComponent,
        UserLogoutComponent,
        UserRegisterComponent
    ],
    providers: [
        UserForm,
        UserService,
        LoginForm,
        UserHttp,
        JwtToken
    ]
})
export class UserModule {

}
