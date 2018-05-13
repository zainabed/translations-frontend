import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService } from "../../project/model/project.service";
import { Locale } from "../model/locale";

@ResourcePath({
    path: "locales",
    route: "/locales",
    id: "projectId"
})
@Component({
    selector: "locale-list",
    templateUrl: "./locale-list.html",
    host: {
        class: "column__xdt--10 component"
    }
})
export class LocaleListComponent extends ResourceListComponent<Locale> {
    projectService: ProjectService;
    projectId: string;

    constructor(injector: Injector) {
        super(injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.apiUrl = this.appData.getResourceListUrlFor(this.projectService.resource, this._path);
        this.projectId = this.route.snapshot.paramMap.get(this.projectService.projectId);
        this.get();
    }

    edit(resource) {
        //super.edit(resource);
        let localeId = this.appData.getResourceId(resource);
        this.router.navigate(["projects", this.projectId, "locales", localeId]);
    }

    add() {
        this.router.navigate(["projects", this.projectId, "locales", "new"]);
    }

}