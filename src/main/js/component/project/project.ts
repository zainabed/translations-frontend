import {Resource} from 'angular4-hal';
import {User} from '../user/user';

export class Project extends Resource {
    name: String;
    description: String;
    imageUri: String;
    users: User[];
}