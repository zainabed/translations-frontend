import { Injectable } from "@angular/core";
import { UserToken } from "./user.token";


/**
 * 
 */
@Injectable()
export class JwtToken {
    token: string;
    type: string;
    refreshToken: string;
    user: UserToken;
   
    storage = window.localStorage;

    constructor() {
        let tokenObject = this.storage.getItem("token");
        if (tokenObject && typeof tokenObject == "string") {
            this.setTokeObject(JSON.parse(tokenObject));
        }
    }

    /**
     * 
     * @param tokenObject 
     */
    public setTokeObject(tokenObject) {
        this.type = tokenObject.type;
        this.token = tokenObject.token;

        if (tokenObject.token) {
            this.buildUserFromToken(tokenObject.token);
        }

        this.storage.setItem("token", JSON.stringify(tokenObject));
    }

    /**
     * 
     * @param token 
     */
    public buildUserFromToken(token: string) {
        let tokenValues = token.split(".");
        this.user = this.getBase64EncodedObj(tokenValues[1]);

        if (this.user && this.user.sub) {

            let userInfo = this.user.sub.split("_");
            this.user.username = userInfo[0];
            this.user.userId = userInfo[1];
        }

        let tokenTime = new Date(this.user.exp * 1000);

        if (tokenTime < new Date()) {
            this.reset();
        }
    }
    /**
     * 
     */
    public reset() {
        this.token = null;
        this.type = null;
        this.refreshToken = null;
        this.user = null;
        this.storage.removeItem("token");
    }

    /**
     * 
     * @param value 
     */
    private getBase64EncodedObj(value: string) {
        return JSON.parse(atob(value));
    }
}