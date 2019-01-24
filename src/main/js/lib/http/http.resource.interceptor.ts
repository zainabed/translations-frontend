import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { _throw as throwError } from 'rxjs/observable/throw';
import { HttpProgress } from "./http.progress";

@Injectable()
export class HttpResourceInterceptor implements HttpInterceptor {

    private requestNumber: number;

    constructor(private httpProgress: HttpProgress) {
        this.requestNumber = 0;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.pushRequest();
        return next.handle(req).pipe(
            tap(response => {
                if (response instanceof HttpResponse) {
                    this.popRequest();
                }
            }),
            catchError(err => {
                this.popRequest();
                return throwError(err);
            })
        );
    }

    popRequest() {
        this.requestNumber--;
        if (this.requestNumber <= 0) {
            this.httpProgress.end();
        }
    }

    pushRequest() {
        this.requestNumber++;
        this.httpProgress.start();
    }
}