import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { AuthToken } from "../../../lib/oauth/auth.token"

import { Login } from "../model/login";

@Injectable()
export class LoginResource {

    private gratnType: string = "grant_type";
    private oathUrl = environment.oauthUrl;

    constructor(private http: HttpClient) {

    }

    authenticate(login: Login): Observable<AuthToken> {
        let params = new HttpParams()
            .set("username", login.username)
            .set("password", login.password)
            .set(this.gratnType, "password");

        console.log(params.toString());

        return this.http.post<AuthToken>(this.oathUrl, params.toString(), {
            headers: new HttpHeaders()
                .set("Authorization", this.getBasic(environment.clientId, environment.clientSecret))
                .set("Content-Type", "application/x-www-form-urlencoded")
        });

    }

    getBasic(username, password) {
        return "Basic " + btoa(username + ":" + password);
    }
}