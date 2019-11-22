import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model/user";
import { SecurityFactory, AuthUser } from '@zainabed/security';

@Injectable()
export class UserStoreService {

    storage: any;
    key: string = "user_token";
    constructor(private securityFactory: SecurityFactory) {
        this.storage = window.localStorage;

        /*this.userDetailsService.getSubsriber().subscribe(userDetails=>{
            if(userDetails) {
               this.setItem(userDetails);
            }else{
              // this.removeItem();
            }
        });*/
    }

    
    
    setItem(authUser: AuthUser): void {
        let temp:any = authUser;
        temp.roles = Array.from(authUser.getRoles().values()); 
        this.storage.setItem(this.key, JSON.stringify(authUser));
    }

    getItem(): AuthUser {

        if (!this.storage.getItem(this.key)) {
            return null;
        }

        let data = JSON.parse(this.storage.getItem(this.key));
        console.log(data);
        let user: User = new User(data);
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
    buildUserDetails(jwtToken: any): AuthUser {
        let user: User = new User(null);
        user.credentails = jwtToken;
        let tokenValues = jwtToken.token.split(".");
        let userJSON = this.getBase64EncodedObj(tokenValues[1]);

        if (userJSON && userJSON.sub) {
            let userInfo = userJSON.sub.split("_");
            user.username = userInfo[0];
            user.id = userInfo[1];
            user.setRoles(userJSON.roles);
        }
        user = new User(user);
        console.log(user);
        console.log(JSON.stringify(user))
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