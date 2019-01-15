// Core Modules
import { NgModule } from "@angular/core";
import { UserRquireModule } from './user.require.module';
import { Router, RouterModule } from '@angular/router';


// User Component and Services
import { UserForm, UserFormComponent, UserComponent, UserService, UserListComponent } from "./user.core";
import { UserRoutes } from "./user.route";
import { UserLoginComponent } from "./component/user.login.component";
import { UserLogoutComponent } from './component/user.logout.component';
import { LoginForm } from "./form/login.form";
import { LoginHttpService } from "./http/login.http.service";
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
        UserLogoutComponent
    ],
    providers: [UserForm, UserService, LoginForm, LoginHttpService, JwtToken]
})
export class UserModule {

}
