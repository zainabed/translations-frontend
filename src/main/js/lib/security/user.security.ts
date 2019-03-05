import { UserSecurityInterface } from "./user.security.interface";
import { UserDetails } from "@app/lib/security/user.details";
import { JwtToken } from "@app/lib/security/jwt.token";
import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { UserGaurd } from "@app/lib/security/user.gaurd";
import { Injector, Injectable } from "@angular/core";
import { UserDetailsService } from "@app/lib/security/user.details.service";

/**
 * 
 */
@Injectable()
export class UserSecurity implements UserSecurityInterface,  CanActivate, CanActivateChild {

    statusCode: number;
    router: Router;
    userDetailsService: UserDetailsService;

    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.userDetailsService = injector.get(UserDetailsService);
   //     this.loginRoute = this.getLoginRoute();
    }


    /**
     * 
     * @param childRoute 
     * @param state 
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    /**
     * 
     * @param route 
     * @param state 
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.resolve(route.data.roles);
    }

   
    /**
     * 
     */
    isLogged(): boolean {
        let userDetails = this.userDetailsService.get();
        return userDetails != null;
    }

    /**
     * 
     * @param roles 
     */
    isAllowed(roles: [string]): boolean {
      
        if (!this.isLogged()) {
            return false;
        }

        let userDetails = this.userDetailsService.get();
        let userRoles = userDetails.roles;

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

   
    /**
     * 
     * @param permissions 
     */
    resolve(permissions: [string]): boolean {
        if (!this.isLogged()) {
            this.statusCode = 403;
            this.router.navigate(["/login"]);
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