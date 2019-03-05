import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resource } from "./resource";
import { JwtToken } from "../../component/user/model/jwt.token";
import { UserDetailsService } from "@app/lib/security/user.details.service";

/**
 * 
 */
@Injectable()
export class ResourceService {
    jwtToken: any;
    constructor(private http: HttpClient, private userDetailsService: UserDetailsService) { 
        if(userDetailsService.userDetails !=null) {
          this.jwtToken = userDetailsService.userDetails.jwt;
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