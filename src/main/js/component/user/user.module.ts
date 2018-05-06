// Core Modules
import { NgModule } from "@angular/core";
import { UserRquireModule } from './user.require.module';
import { Router, RouterModule } from '@angular/router';


// User Component and Services
import { UserForm, UserFormComponent, UserComponent, UserService, UserListComponent } from "./user.core";
import { UserRoutes } from "./user.route";

@NgModule({
    imports: [
        UserRquireModule,
        RouterModule.forChild(UserRoutes)
    ],
    declarations: [
        UserComponent,
        UserFormComponent,
        UserListComponent
    ],
    providers: [UserForm, UserService]
})
export class UserModule {

}
