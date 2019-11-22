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
        return this.authorizationManager.hasAnyRoles(route.data.roles);
    }

}