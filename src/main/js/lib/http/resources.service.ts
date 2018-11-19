import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resources } from "./resources";
import { Resource } from "./resource";

import { JwtToken } from "../../component/user/model/jwt.token";

/**
 * 
 */
@Injectable()
export class ResourcesService {
    constructor(private http: HttpClient, private jwtToken: JwtToken) { }

    /**
     * 
     * @param apiURL 
     */
    get(apiURL): Observable<Resources> {
        return this.http.get<Resources>(apiURL, {
            headers : {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    /**
     * @method post
     * @description
     * POST method to submit resource object to given resource api path.
     * It returns {Observable} fo {Resource} object on successful call.
     * 
     * @param apiURL string API resource path.
     * @param resource Resource resouce object to be submitted.
     * @return Observable Observable of Resource object.
     */
    post(apiURL, resource): Observable<Resource> {
        return this.http.post<Resource>(apiURL, resource,{
            headers : {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            } 
        });
    }

    selfUrl(resource: Resource) {
        return resource._links["self"];
    }
}