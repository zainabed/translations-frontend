import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { User } from './user';
import { UserList } from "./user.list";

@Injectable()
export class UserService {
    protected endPoint: string = "http://localhost:8080/";
    protected path: string = "users";
    protected apiEndPoint: string;

    constructor(private http: HttpClient) {
        this.apiEndPoint = this.endPoint + this.path;
    }

    get(): Observable<UserList> {
        return this.http.get(this.apiEndPoint)
            .map((response: Response) => response)
            .map((data) => new UserList(data));
    }
}