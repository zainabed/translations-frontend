import { Route } from "@angular/router";
import { UserDetails } from "./user.details";
import { JwtToken } from "./jwt.token";

export interface UserSecurityInterface {
    isLogged(): boolean;
    isAllowed(roles: [string]): boolean;
    resolve(roles: [string]): boolean;
}