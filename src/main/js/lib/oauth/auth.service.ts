import { Injectable } from "@angular/core";
import { AuthToken } from "./auth.token";

@Injectable()
export class AuthService {
    public token: AuthToken = null;
    
}