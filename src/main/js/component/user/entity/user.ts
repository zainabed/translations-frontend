import {Resource} from 'angular4-hal';

export class User extends Resource {
    private username: String;
    private email: String;
    private password: String;
}