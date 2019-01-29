import {Injectable} from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { User } from "../model/user";
import { Resource } from "../../../lib/http/resource";
import { environment } from "../../../../../environments/environment";

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

    register(user: User): Observable<Resource> {
        console.log(this.apiUrl + this.registerPath);
        return this.http.post<Resource>(this.apiUrl + this.registerPath, user);
    }
}