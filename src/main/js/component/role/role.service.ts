
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';
import { Role } from './role';

@Injectable({
    providedIn: "root"
})
export class RolesService {

    jwtToken: any;

    constructor(private http: HttpClient, securityFactory: SecurityFactory) {
        let authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
        this.jwtToken = authenticationManager.get().getCredentials();
    }

    public getAll(apiUrl: string): Observable<Array<Role>> {
        return this.http.get<Array<Role>>(apiUrl + "/roles", {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }
}