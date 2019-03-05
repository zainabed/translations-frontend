import { Injectable, Injector } from "@angular/core";
import { JwtToken } from "@app/lib/security/jwt.token";
import { UserDetails } from "@app/lib/security/user.details";
import { Router } from "@angular/router";
import { UserDetailsService } from "@app/lib/security/user.details.service";


export class UserDetailsServiceImpl extends UserDetailsService {


    /**
     * 
     * @param jwtToken 
     */
    build(jwtToken: JwtToken): UserDetails {
        let userDetails = new UserDetails();
        userDetails.jwt = jwtToken;
        let tokenValues = jwtToken.token.split(".");
        let user = this.getBase64EncodedObj(tokenValues[1]);

        if (user && user.sub) {
            let userInfo = user.sub.split("_");
            userDetails.username = userInfo[0];
            userDetails.id = userInfo[1];
            userDetails.roles = user.roles;
        }
        console.log(userDetails);
        return userDetails;
    }

    /**
     * 
     * @param value 
     */
    private getBase64EncodedObj(value: string) {
        return JSON.parse(atob(value));
    }

}