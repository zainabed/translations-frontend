import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs/observable";

import { HttpResource } from "../../../lib/http/http.resource";

import { User } from './user';

@Injectable()
export class UserService extends HttpResource<User>{

    constructor(http: HttpClient) {
        super(http, "users", "http://localhost:8080/");
    }

    
}