import { Injectable } from "@angular/core";


@Injectable()
export class JwtToken {
    token: string;
    type: string;
    refreshToken: string;
    user: any;

    storage = window.localStorage;

    constructor() {
        let tokenObject = this.storage.getItem("token");
        if (tokenObject && typeof tokenObject == "string") {
            this.setTokeObject(JSON.parse(tokenObject));
        }
    }

    public setTokeObject(tokenObject) {
        this.type = tokenObject.type;
        this.token = tokenObject.token;
        if (tokenObject.token) {
            let tokenValues = tokenObject.token.split(".");
            this.user = JSON.parse(atob(tokenValues[1]));
        }

        this.storage.setItem("token", JSON.stringify(tokenObject));
    }
}