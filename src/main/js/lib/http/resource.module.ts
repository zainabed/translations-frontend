import { NgModule } from "@angular/core";

import { ProjectResourceService } from "./project.resource.service";
import { ResourcesService } from "./resources.service";
import { ResourceService } from "./resource.service"

@NgModule({
    providers: [
        ProjectResourceService,
        ResourcesService,
        ResourceService
    ]
})
export class ResourceModule {

}