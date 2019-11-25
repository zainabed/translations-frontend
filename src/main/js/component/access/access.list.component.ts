import { Component, OnInit, Injector } from "@angular/core";
import { ResourcePath } from '../../lib/component/resource.path';
import { ResourceListComponent } from '../../lib/component/resource.list.component';
import { Access } from './access';
import { HttpClient } from '@angular/common/http';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { User } from '../user/core';

@ResourcePath({
    path: "access",
    route: "/access",
    id: "projectId"
})
@Component({
    selector: "access-list", 
    templateUrl: "./access-list.html"
})
export class AccessListComponent extends ResourceListComponent<Access> implements OnInit {

    jwtToken: any;
    user: User = null;
    accessList : Array<Access>;

    constructor(injector: Injector, private http: HttpClient, securityFactory: SecurityFactory) {
        super(injector);
        let authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
        this.jwtToken = authenticationManager.get().getCredentials();

    }

    ngOnInit(): void {
        super.ngOnInit();
        console.log(this.apiUrl);
        this.http.get<Access>(this.apiUrl, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        }).subscribe(response => console.log(response), error => console.log(error));
    }

}