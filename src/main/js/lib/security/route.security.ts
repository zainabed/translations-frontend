import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class RouteSecurity implements CanActivate {
    authorizationManager: AuthorizationManager;

    constructor(private securityFactory: SecurityFactory) {
        this.authorizationManager = securityFactory.getAuthorizationManager();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let roles: Array<string> = route.data.roles;
        let projectId: string = route.params["projectId"];
        console.log("Project id=" + projectId);
        if (projectId) {
            roles = roles.concat(roles.map(role => projectId + "_" + role));
        }
        return this.authorizationManager.hasAnyRoles(new Set(roles));
    }

}