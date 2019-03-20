import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractUserDetailsService, UserDetails , GrantedRole} from "@zainabed/shield/lib/core";
import { UserPricipalImpl } from "src/main/js/component/user/model/user.principal.impl";

export class UserDetailsServiceImpl extends AbstractUserDetailsService {

    storage: any;

    constructor() {
        super();
        this.storage = window.localStorage;
    }

    setItem(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    getItem(key: string): string {
        return this.storage.getItem(key);
    }

    removeItem(key: string): void {
        this.storage.removeItem(key);
    }


    /**
     * 
     * @param jwtToken 
     */
    loadUserDetails(jwtToken: any): UserDetails {
        let userDetails = new UserPricipalImpl();
        userDetails.credentails = jwtToken;
        let tokenValues = jwtToken.token.split(".");
        let user = this.getBase64EncodedObj(tokenValues[1]);

        if (user && user.sub) {
            let userInfo = user.sub.split("_");
            userDetails.username = userInfo[0];
            userDetails.id = userInfo[1];
            userDetails.roles = user.roles.map(role => new GrantedRole(role));
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