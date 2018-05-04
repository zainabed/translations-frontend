import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { ProjectResource } from "./project.resource";

@Injectable()
export class ProjectResourceService {

    private _apiUrl: string;

    constructor(private http: HttpClient) {

    }

    set apiUrl(apirUrl) {
        this._apiUrl = apirUrl;
    }

    get apiUrl() {
        return this._apiUrl;
    }

    getProjectResources(): Observable<ProjectResource> {
        return this.http.get<ProjectResource>(this.apiUrl);
    }
}