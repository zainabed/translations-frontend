import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { User } from "../model/user";
import { Resource } from "../../../lib/http/resource";
import { environment } from "../../../../../environments/environment";
import { HttpConst } from "../../../lib/http/http.const";
import { JwtToken } from "../model/jwt.token";

@Injectable()
export class UserHttp {

    apiUrl: string;
    registerPath: string;
    authenticationPath: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
        this.registerPath = "/users";
        this.authenticationPath = "/auth";
    }

    /**
     * 
     * @param user 
     */
    register(user: User): Observable<Resource> {
        console.log(this.apiUrl + this.registerPath);
        return this.http.post<Resource>(this.apiUrl + this.registerPath, user);
    }

    /**
     * 
     * @param username 
     * @param password 
     */
    authenticate(username: string, password: string): Observable<JwtToken> {
        let basicAuthenticationHeader = this.getBasicAuth(username, password);
        return this.http.post<JwtToken>(this.apiUrl + this.authenticationPath, null, {
            headers: {
                Authorization: basicAuthenticationHeader
            }
        });
    }

    /**
     * 
     * @param username 
     * @param password 
     */
    getBasicAuth(username: string, password: string) {
        return HttpConst.BASIC + " " + btoa(username + ":" + password);
    }
}