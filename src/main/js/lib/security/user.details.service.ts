import { Injectable } from "@angular/core";
import { UserDetails } from "@app/lib/security/user.details";

export abstract class UserDetailsService {

    userDetails: UserDetails;
    storage = window.localStorage;
    readonly USER_INFO: string = "user_info";

    /**
     * 
     * @param response 
     */
    abstract build(response: any): UserDetails;

    /**
     * 
     * @param response 
     */
    set(response: any) {
        this.userDetails = this.build(response);
        this.storage.setItem(this.USER_INFO, JSON.stringify(this.userDetails));
    }

    /**
     * 
     */
    get() {
        if (this.userDetails == null) {
            this.userDetails = JSON.parse(this.storage.getItem(this.USER_INFO));
        }
        return this.userDetails;
    }

    /**
     * 
     */
    reset() {
        this.userDetails = null;
        this.storage.removeItem(this.USER_INFO);
    }
}