import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resource } from "./resource";

/**
 * 
 */
@Injectable()
export class ResourceService {
    constructor(private http: HttpClient) { }

    /**
     * 
     * @param url 
     */
    get(url): Observable<Resource> {
        return this.http.get<Resource>(url);
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