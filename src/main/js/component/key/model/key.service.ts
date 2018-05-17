import {Injectable, Injector} from '@angular/core';

import {Key} from './key';


@Injectable()
export class KeyService {
    resource;
    keyId: string = "keyId";
}