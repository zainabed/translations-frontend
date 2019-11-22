import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { ProjectResource } from "./project.resource";
import { AuthenticationManager,SecurityFactory, AuthUser } from "@zainabed/security";
import {} from "@zainabed/soteria"

/**
 * @description
 * Class is designed to fetch HATEOS project resource using {HttpClient}
 * service.
 * It is angulars injectable service.
 */
@Injectable()
export class ProjectResourceService {
     authenticationManager: AuthenticationManager;
    constructor(private http: HttpClient, securityFactory: SecurityFactory) {
         this.authenticationManager = securityFactory.getAuthenticationManager();
     }

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
        let userDetail : AuthUser = this.authenticationManager.get();
        if(!userDetail) {
            return null;
        }

        let jwt = userDetail.getCredentials();
        return this.http.get<ProjectResource>(apiUrl, {
            headers: {
                Authorization: jwt.type + " " + jwt.token
            }
        });
    }
}