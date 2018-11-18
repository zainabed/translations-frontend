import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resource } from "./resource";
import { JwtToken } from "../../component/user/model/jwt.token";

/**
 * 
 */
@Injectable()
export class ResourceService {
    constructor(private http: HttpClient, private jwt: JwtToken) { }

    /**
     * 
     * @param url 
     */
    get(url): Observable<Resource> {
        return this.http.get<Resource>(url, {
            headers: {
                Authorization: this.jwt.type + " " + this.jwt.token
            }
        });
    }

    /**
     * 
     * @param url 
     * @param resource 
     */
    patch(url, resource): Observable<Resource> {
        return this.http.patch<Resource>(url, resource);
    }

    /**
     * 
     * @param url 
     * @param resource 
     */
    put(url, resource): Observable<Resource> {
        return this.http.put<Resource>(url, resource);
    }

    /**
     * 
     * @param url 
     */
    delete(url) {
        return this.http.delete(url);
    }

    search(url) {

    }
}