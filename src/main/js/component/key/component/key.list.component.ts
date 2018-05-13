import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService } from "../../project/model/project.service";
import { Key } from "../model/key";

@ResourcePath({
    path: "keys",
    route: "/keys",
    id: "projectId"
})
@Component({
    selector: "key-list",
    templateUrl: "./key-list.html",
    host: {
        class: "column__xdt--10 column__dt--10 component"
    }
})
export class KeyListComponent extends ResourceListComponent<Key> {
    projectService: ProjectService;
    projectId: string;

    constructor(injector: Injector) {
        super(injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        console.log("path = " + this._path);
        this.apiUrl = this.appData.getResourceListUrlFor(this.projectService.resource, this._path);
        this.projectId = this.route.snapshot.paramMap.get(this.projectService.projectId);
        this.get();
    }

    edit(resource) {
        //super.edit(resource);
        let keyId = this.appData.getResourceId(resource);
        this.router.navigate(["projects", this.projectId, "keys", keyId]);
    }

    add() {
        this.router.navigate(["projects", this.projectId, "keys", "new"]);
    }

}