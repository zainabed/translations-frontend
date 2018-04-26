import {RestService} from 'angular4-hal';
import {User} from './user';
import {Injectable, Injector} from '@angular/core';

@Injectable()
export class UserService extends RestService<User> {
    constructor(injector: Injector){
        super(User, 'users', injector);
    }
}