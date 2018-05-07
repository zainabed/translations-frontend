import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resources } from "./resources";
import { Resource } from "./resource";

/**
 * 
 */
@Injectable()
export class ResourcesService {
    constructor(private http: HttpClient) { }

    /**
     * 
     * @param apiURL 
     */
    get(apiURL): Observable<Resources> {
        return this.http.get<Resources>(apiURL);
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
        return this.http.post<Resource>(apiURL, resource);
    }

    selfUrl(resource: Resource) {
        return resource._links["self"];
    }
}