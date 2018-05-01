import {RestService} from 'angular4-hal';
import {Injectable, Injector} from '@angular/core';

import {Project} from './project';


@Injectable()
export class ProjectService extends RestService<Project> {

    constructor(injector: Injector) {
        super(Project, 'projects', injector);
    }

}