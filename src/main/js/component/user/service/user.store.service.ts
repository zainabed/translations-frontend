import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractUserDetailsService, UserDetails, GrantedRole, UserDetailsService } from "@zainabed/shield/lib/core";
import { User } from "../model/user";

@Injectable()
export class UserStoreService {

    storage: any;
    key: string = "user_token";
    constructor(private userDetailsService: UserDetailsService) {
        this.storage = window.localStorage;

        /*this.userDetailsService.getSubsriber().subscribe(userDetails=>{
            if(userDetails) {
               this.setItem(userDetails);
            }else{
              // this.removeItem();
            }
        });*/
    }

    setItem(value: UserDetails): void {
        this.storage.setItem(this.key, JSON.stringify(value));
    }

    getItem(): UserDetails {

        if (!this.storage.getItem(this.key)) {
            return null;
        }

        let data = JSON.parse(this.storage.getItem(this.key));
        let user: User = Object.assign(new User(), data);
        user.roles = User.buildRoles(user.roles);
        console.log(user);
        return user;
    }


    removeItem(): void {
        this.storage.removeItem(this.key);
    }


    /**
     * 
     * @param jwtToken 
     */
    buildUserDetails(jwtToken: any): UserDetails {
        let user: User = new User();
        user.credentails = jwtToken;
        let tokenValues = jwtToken.token.split(".");
        let userJSON = this.getBase64EncodedObj(tokenValues[1]);

        if (userJSON && userJSON.sub) {
            let userInfo = userJSON.sub.split("_");
            user.username = userInfo[0];
            user.id = userInfo[1];
            user.roles = userJSON.roles.map(role => new GrantedRole(role));
        }
        console.log(user);
        this.setItem(user);
        return user;
    }

    /**
     * 
     * @param value 
     */
    private getBase64EncodedObj(value: string) {
        return JSON.parse(atob(value));
    }

}