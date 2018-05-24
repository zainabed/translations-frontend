import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthorizedInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authService.token;
        console.log(token)
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', "Bearer " + token.access_token)
            });
            return next.handle(authReq);
        }
        return next.handle(req);

    }
}