import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";


@Injectable()
export class LoginHttpService {

    constructor(private http: HttpClient, injector: Injector) {

    }

    authenticate(username: string, password: string) {
        let basicAuthenticationHeader = "Basic " + btoa(username + ":" + password);
        return this.http.post(environment.apiUrl + "/auth", null, {
            headers: {
                Authorization: basicAuthenticationHeader
            }
        });
    }
}