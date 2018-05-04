import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Resource } from "./resource";

@Injectable()
export class ResourceService {
    constructor(private http: HttpClient) { }

    get(url): Observable<Resource> {
        return this.http.get<Resource>(url);
    }
}