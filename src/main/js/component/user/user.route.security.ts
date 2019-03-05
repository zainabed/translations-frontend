import { Injectable, Injector } from "@angular/core";
import { AbstractUserSecurity } from "@app/lib/security/abstract.user.security";
import { JwtToken } from "@app/lib/security/jwt.token";
import { UserDetails } from "@app/lib/security/user.details";
import { Router } from "@angular/router";

@Injectable()
export class UserRouteSecurity extends AbstractUserSecurity {

    constructor(injector: Injector) {
        super(injector);
    }

    getLoginRoute(): [string] {
        return ["/login"];
    }

    build(jwtToken: JwtToken): UserDetails {
        let userDetails = new UserDetails();
        userDetails.jwt = jwtToken;
        let tokenValues = jwtToken.token.split(".");
        let user = this.getBase64EncodedObj(tokenValues[1]);

        if (user && user.sub) {
            let userInfo = user.sub.split("_");
            userDetails.username = userInfo[0];
            userDetails.userId = userInfo[1];
            userDetails.roles = user.roles;
        }
        console.log(userDetails);
        return userDetails;
    }

    private getBase64EncodedObj(value: string) {
        return JSON.parse(atob(value));
    }

}