import {Injectable, Injector} from '@angular/core';

import {Project} from './project';


@Injectable()
export class ProjectService {
    resource;
    projectId: string = "projectId";
}