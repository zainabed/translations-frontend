import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { ProjectResource } from "./project.resource";

/**
 * @description
 * Class is designed to fetch HATEOS project resource using {HttpClient}
 * service.
 * It is angulars injectable service.
 */
@Injectable()
export class ProjectResourceService {

    constructor(private http: HttpClient) { }

    /**
     * @method get
     * @description
     * GET method to return HATEOS project resources.
     * It accept the application api url and returns the Observable of {ProjectResource}
     * 
     * @param apiUrl
     * @return {Observable<ProjectResource>} Observable of ProjectResource. 
     */
    get(apiUrl): Observable<ProjectResource> {
        return this.http.get<ProjectResource>(apiUrl);
    }
}