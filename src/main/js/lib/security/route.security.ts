import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class RouteSecurity implements CanActivate {
    authorizationManager: AuthorizationManager;
    static event:Subject<any> = new Subject();

    constructor(private securityFactory: SecurityFactory) {
        this.authorizationManager = securityFactory.getAuthorizationManager();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let roles: Array<string> = route.data.roles;
        let projectId: string = route.params["projectId"];
        if (projectId) {
            roles = roles.concat(roles.map(role => projectId + "_" + role));
        }
        let result: boolean = this.authorizationManager.hasAnyRoles(new Set(roles));
        if(!result){
            RouteSecurity.event.next("Access is denied");
        }
        return result;
    }

}