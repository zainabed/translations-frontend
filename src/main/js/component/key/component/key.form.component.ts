import { Component, Injector } from "@angular/core";


import { Key } from "../model/key";
import { KeyForm } from "../form/key.form";
import { ProjectService } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "keys",
    route: "/keys",
    id: "keyId"
})
@Component({
    selector: "key-form",
    templateUrl: "key-form.html",
    host: {
        class: "column__xdt--6 column__dt--6 component"
    }
})
export class KeyFormComponent extends ResourceFormComponent<Key> {
    title;
    projectService: ProjectService;
    projectId: string;

    constructor(injector: Injector, public keyForm: KeyForm) {
        super(keyForm, injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.setProject();
        this.projectId = this.route.snapshot.paramMap.get(this.projectService.projectId);

        if (this.isForUpdate) {
            this.title = "Update key";
        } else {
            this.title = "Add New key";
        }
    }

    setProject() {
        let projectResource = this.projectService.resource;
        let projectHref = this.appData.getResourceListUrlFor(projectResource, "self");
        console.log(projectHref);
        this.form.form.get("projects").setValue(projectHref);

    }

    navigateToList() {
        this.router.navigate(["projects", this.projectId, "keys"]);
    }

}