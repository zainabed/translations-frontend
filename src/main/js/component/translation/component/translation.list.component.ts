import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";
import { Translation } from "../model/translation";
import { KeyService } from "../../key/model/key.service";

@ResourcePath({
    path: "keys",
    route: "/translations",
    id: "projectId"
})
@Component({
    selector: "translation-list",
    templateUrl: "./translation-list.html",
    host: {
        class: "column__xdt--10 column__dt--10 component"
    }
})
export class TranslationListComponent extends ProjectResourceListComponent<Translation> {
    keyService: KeyService;

    constructor(injector: Injector) {
        super(injector);
        this.keyService = injector.get(KeyService);
    }

    open(resource) {
        this.keyService.resource = resource;
        this.keyService.keyId = this.appData.getResourceId(resource);
        this.router.navigate(["projects", this.projectId, "translations", "keys", this.keyService.keyId]);
    }
}