import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { ResourceList } from "./resource.list";


@Injectable()
export class ResourceListService {
    constructor(private http: HttpClient) { }

    get(apiURL): Observable<ResourceList> {
        return this.http.get<ResourceList>(apiURL);
    }
}