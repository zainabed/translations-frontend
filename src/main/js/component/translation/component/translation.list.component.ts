import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";
import { Translation } from "../model/translation";

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

    constructor(injector: Injector) {
        super(injector);
    }

    open(resource) {
        let keyId = this.appData.getResourceId(resource);
        this.router.navigate(["projects", this.projectId, "translations", "keys", keyId]);
    }
}