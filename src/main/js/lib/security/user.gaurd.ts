import { Route } from "@angular/router";
import { JwtToken } from "./jwt.token";
import { UserDetails } from "./user.details";

export interface UserGaurd {
    getLoginRoute():[string];
    build(jwtToken: JwtToken): UserDetails;
}