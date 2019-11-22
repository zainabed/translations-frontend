import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resource } from "./resource";
import { SecurityFactory, AuthenticationManager, AuthUser } from '@zainabed/security';

/**
 * 
 */
@Injectable()
export class ResourceService {
    jwtToken: any;
    constructor(private http: HttpClient, securityFactory: SecurityFactory) {
        let authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
        let userDetails: AuthUser = authenticationManager.get();
        if (userDetails != null) {
            this.jwtToken = userDetails.getCredentials();
        }
    }

    /**
     * 
     * @param url 
     */
    get(url): Observable<Resource> {
        return this.http.get<Resource>(url, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    /**
     * 
     * @param url 
     * @param resource 
     */
    patch(url, resource): Observable<Resource> {
        return this.http.patch<Resource>(url, resource, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    /**
     * 
     * @param url 
     * @param resource 
     */
    put(url, resource): Observable<Resource> {
        return this.http.put<Resource>(url, resource, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    /**
     * 
     * @param url 
     */
    delete(url) {
        return this.http.delete(url, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    search(url) {

    }
}