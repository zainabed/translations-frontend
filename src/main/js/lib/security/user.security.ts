import { Route } from "@angular/router";
import { UserDetails } from "./user.details";
import { JwtToken } from "./jwt.token";

export interface UserSecurity {
    save(userDetails: UserDetails);
    get(): UserDetails;
    isLogged(): boolean;
    isAllowed(roles: [string]): boolean;
    login(jwtToken: JwtToken);
    resolve(roles: [string]): boolean;
    logout();
}