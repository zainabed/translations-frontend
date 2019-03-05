import { UserSecurity } from "./user.security";
import { UserDetails } from "@app/lib/security/user.details";
import { JwtToken } from "@app/lib/security/jwt.token";
import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserGaurd } from "@app/lib/security/user.gaurd";
import { Injector } from "@angular/core";
import { UserDetailsService } from "@app/lib/security/user.details.service";

export abstract class AbstractUserSecurity implements UserSecurity, UserGaurd, CanActivate, CanActivateChild {

    loginRoute: [string];
    userDetails: UserDetails;
    statusCode: number;
    storage = window.localStorage;
    router: Router;
    userDetailsService: UserDetailsService;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.userDetailsService = injector.get(UserDetailsService);
        this.userDetails = null;
        this.get();
        this.loginRoute = this.getLoginRoute();
    }

    abstract getLoginRoute(): [string];
    abstract build(jwtToken: JwtToken): UserDetails;

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.resolve(route.data.roles);
    }

    save(userDetails: UserDetails) {
        this.userDetails = userDetails;
        this.userDetailsService.userDetails = userDetails;
        this.storage.setItem("token", JSON.stringify(this.userDetails));
    }

    get(): UserDetails {
        this.userDetails = JSON.parse(this.storage.getItem("token"));
        this.userDetailsService.userDetails = this.userDetails;
        return this.userDetails;
    }

    isLogged(): boolean {
        return this.userDetails != null;
    }

    isAllowed(roles: [string]): boolean {
        if (!this.isLogged()) {
            return false;
        }
        let userRoles = this.userDetails.roles;

        if (!userRoles) {
            return true;
        }

        if(!roles) {
            return true;
        }
        let status: boolean = true;
        console.log(roles);
        console.log(userRoles);
        roles.forEach(role => {
            
            if (userRoles.indexOf(role) == -1) {
                console.log(userRoles.indexOf(role));
                status = false;
                return;
            }
        });

        return status;
    }

    login(jwtToken: JwtToken) {
        let userDetails: UserDetails = this.build(jwtToken);
        this.save(userDetails);
    }

    logout() {
        this.userDetails = null;
        this.userDetailsService.userDetails = null;
        this.storage.removeItem("token");
    }

    resolve(permissions: [string]): boolean {
        if (!this.isLogged()) {
            this.statusCode = 403;
            this.router.navigate(this.loginRoute);
            console.log("User is not logged in");
            return false;
        }
        console.log("permission:" + this.isAllowed(permissions));
        if (!this.isAllowed(permissions)) {
            this.statusCode = 405;
            console.log("Access denied");
            return false;
        }

        return true;
    }

}