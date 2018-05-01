import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {User} from './user';

@Injectable()
export class UserService {
    protected endPoint: string = "http://localhost:8080/";
    protected modelPath: string = "users";
    protected apiEndPoint: string;

    constructor(private http: HttpClient) {
        this.apiEndPoint = this.endPoint + this.modelPath;
    }

    get(){
        return this.http.get(this.apiEndPoint);
    }
}