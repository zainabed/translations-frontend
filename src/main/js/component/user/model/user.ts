import {Resource} from 'angular4-hal';

export class User extends Resource {
     username: String;
     email: String;
     password: String;
}