
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { Access } from './access';
import { UserProjectRole } from './user.project.role';

@Injectable({
    providedIn: "root"
})
export class AccessService {

    jwtToken: any;

    constructor(private http: HttpClient, securityFactory: SecurityFactory) {
        let authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
        this.jwtToken = authenticationManager.get().getCredentials();
    }

    public save(apiUrl: string, userProjectRole: UserProjectRole): Observable<any> {
        return this.http.post(apiUrl + "/userProjectRoles", userProjectRole, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    public findByUsername(apiUrl: string, username: string): Observable<Array<Access>> {
        return this.http.get<Array<Access>>(apiUrl + "/users/search/findByUsernameContains?username=" + username, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }

    public findByProject(apiUrl: string, projectId: string): Observable<Array<Access>> {
        return this.http.get<Array<Access>>(apiUrl + "/access/project/" + projectId, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }
}