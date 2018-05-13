import { Component, Injector } from "@angular/core";


import { Locale } from "../model/locale";
import { LocaleForm } from "../form/locale.form";
import { ProjectService } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "locales",
    route: "/locales",
    id: "localeId"
})
@Component({
    selector: "locale-form",
    templateUrl: "locale-form.html",
    host: {
        class: "column__xdt--6 column__dt--6 component"
    }
})
export class LocaleFormComponent extends ResourceFormComponent<Locale> {
    title;
    projectService: ProjectService;
    projectId: string;

    constructor(injector: Injector, public localeForm: LocaleForm) {
        super(localeForm, injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.setProject();
        this.projectId = this.route.snapshot.paramMap.get(this.projectService.projectId);

        if (this.isForUpdate) {
            this.title = "Update Locale";
        } else {
            this.title = "Add New Locale";
        }
    }

    setProject() {
        let projectResource = this.projectService.resource;
        let projectHref = this.appData.getResourceListUrlFor(projectResource, "self");
        console.log(projectHref);
        this.form.form.get("projects").setValue(projectHref);

    }

    navigateToList() {
        this.router.navigate(["projects", this.projectId, "locales"]);
    }

}