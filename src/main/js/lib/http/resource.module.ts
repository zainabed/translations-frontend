import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { ProjectResourceService } from "./project.resource.service";
import { ResourcesService } from "./resources.service";
import { ResourceService } from "./resource.service"
import { HttpProgress} from "./http.progress";
import { HttpResourceInterceptor } from "./http.resource.interceptor";

@NgModule({
    providers: [
        ProjectResourceService,
        ResourcesService,
        ResourceService,
        HttpProgress,
        { provide: HTTP_INTERCEPTORS, useClass: HttpResourceInterceptor, multi: true }
    ]
})
export class ResourceModule {

}