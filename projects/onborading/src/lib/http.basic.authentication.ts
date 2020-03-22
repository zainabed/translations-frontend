import { Authentication } from './authentication';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HttpBasicAuthentication implements Authentication {

    apiDoamin: string;

    /*constructor(private http: HttpClient, environment: Environment) {
        this.apiDoamin = environment.apiDoamin;
    }

    getHtpBasicPayload(username: string, password: string): HttpHeaders {
        throw new Error("Method not implemented.");
    }
    
    authentication(username: string, password: string): Observable<any> {
        let httpBasicPayload = this.getHtpBasicPayload(username, password);

        return this.http.post(this.apiDoamin, {}, {
            headers: httpBasicPayload
        });
    }*/

    

}