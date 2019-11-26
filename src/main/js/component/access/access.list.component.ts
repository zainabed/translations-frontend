import { Component, OnInit, Injector } from "@angular/core";
import { ResourcePath } from '../../lib/component/resource.path';
import { ResourceListComponent } from '../../lib/component/resource.list.component';
import { Access } from './access';
import { HttpClient } from '@angular/common/http';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { User } from '../user/core';
import { environment } from 'src/environments/environment';
import { RolesService } from '../role/role.service';
import { AccessService } from './access.service';
import { ProjectService } from '../project/project.core';
import { Role } from '../role/role';
import { FormControl } from '@angular/forms';
import { UserService } from '../user/service/user.service';
import { UserProjectRole } from './user.project.role';
import { access } from 'fs';

@ResourcePath({
    path: "access",
    route: "/access",
    id: "projectId"
})
@Component({
    selector: "access-list",
    templateUrl: "./access-list.html",
    host: {
        class: "column__xdt--10 column__dt--10 component"
    }
})
export class AccessListComponent implements OnInit {

    jwtToken: any;
    user: User = null;
    accessList: Array<Access>;
    roleList: Array<Role>;
    userList: Array<User>;
    apiPath: string;
    projectId: any;
    usernameControl = new FormControl();

    constructor(injector: Injector,
        private http: HttpClient,
        private roleService: RolesService,
        private accessService: AccessService,
        private projectService: ProjectService,
        private userService: UserService,
        securityFactory: SecurityFactory) {
        this.apiPath = environment.apiUrl;
        let authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
        this.jwtToken = authenticationManager.get().getCredentials();

    }

    ngOnInit(): void {
        this.projectId = this.projectService.projectId;
        this.getAccess();
        this.getRoles();

        this.usernameControl.valueChanges.subscribe(username => {
            this.userService.findByUsername(this.apiPath, username).subscribe(
                response => this.userList = this.filterUserByAccessUsers(response["_embedded"]["users"], this.accessList),
                error => console.log(error)
            );
        });
    }

    AddUser() {
        console.log(this.usernameControl.value);
        let user: User = this.userList.find(user => user.username == this.usernameControl.value);
        let access: Access = new Access();
        access.userId = this.getProcessId(user);
        access.projectId = this.projectId;
        access.roleId = this.roleList[0].id;
        let userProjectRole: UserProjectRole = UserProjectRole.getInstance(this.apiPath, access);
        this.saveAccess(userProjectRole);
    }

    saveAccess(userProjectRole: UserProjectRole) {
        this.accessService.save(this.apiPath, userProjectRole).subscribe(
            response => {
                console.log("Added access");
                this.getAccess();
            },
            error => console.log(error)
        );
    }

    filterUserByAccessUsers(userList: Array<User>, accessList: Array<Access>): Array<User> {
        return userList.filter(user => !accessList.map(access => access.username).includes(user.username));
    }

    roleChangeEvent(access: Access, event: any) {
        access.roleId = event.value;
        let userProjectRole: UserProjectRole = UserProjectRole.getInstance(this.apiPath, access);
        this.saveAccess(userProjectRole);
    }

    getAccess() {
        this.accessService.findByProject(this.apiPath, this.projectId).subscribe(
            response => this.accessList = response,
            error => console.log(error)
        );
    }

    getRoles() {
        this.roleService.getAll(this.apiPath).subscribe(
            response => this.roleList = response["_embedded"]["roles"],
            error => console.log(error)
        );
    }

    public getProcessId(user): number {
        let idFactors: Array<string> = user._links.self.href.split("/");
        return parseInt(idFactors[idFactors.length - 1]);
    }

}