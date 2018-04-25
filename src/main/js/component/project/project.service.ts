import {RestService} from 'angular4-hal';
import {Project} from './project';
import {Injectable, Injector} from '@angular/core';

@Injectable()
export class ProjectService extends RestService<Project> {

    constructor(injector: Injector) {
        super(Project, 'projects', injector);
    }

}