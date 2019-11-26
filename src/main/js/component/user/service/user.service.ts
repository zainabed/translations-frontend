import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { SecurityFactory, AuthenticationManager } from '@zainabed/security';

@Injectable({
    providedIn: "root"
})
export class UserService {

    jwtToken: any;

    constructor(private http: HttpClient, securityFactory: SecurityFactory) {
        let authenticationManager: AuthenticationManager = securityFactory.getAuthenticationManager();
        this.jwtToken = authenticationManager.get().getCredentials();
    }

    public findByUsername(apiUrl: string, username: string): Observable<Array<User>> {
        return this.http.get<Array<User>>(apiUrl + "/users/search/findByUsernameContains?username=" + username, {
            headers: {
                Authorization: this.jwtToken.type + " " + this.jwtToken.token
            }
        });
    }
}