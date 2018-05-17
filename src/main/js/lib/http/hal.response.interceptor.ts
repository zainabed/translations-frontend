import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class HalResponseInterceptor {}