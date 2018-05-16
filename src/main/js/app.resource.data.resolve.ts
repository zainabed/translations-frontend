import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";

import { ProjectResourceService } from "./lib/http/project.resource.service";
import { ProjectResource } from "./lib/http/project.resource";

@Injectable()
export class AppResourceDataResolve implements Resolve<Observable<ProjectResource>>{

    constructor(private projectService: ProjectResourceService) {

    }

    resolve() {
        return this.projectService.get(environment.apiUrl);

    }

}