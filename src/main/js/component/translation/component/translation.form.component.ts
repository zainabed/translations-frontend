import { Component, Injector } from "@angular/core";


import { Translation } from "../model/translation";
import { TranslationForm } from "../form/translation.form";
import { ProjectService, ProjectResourceFormComponent } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "translations",
    route: "/translations",
    id: "translationId"
})
@Component({
    selector: "translation-form",
    templateUrl: "translation-form.html",
    host: {
        class: "column__xdt--6 column__dt--6"
    }
})
export class TranslationFormComponent extends ProjectResourceFormComponent<Translation> {

    private locales;

    constructor(injector: Injector, public translationForm: TranslationForm) {
        super(translationForm, injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.getLocales();

        if (this.isForUpdate) {
            this.title = "Update translation";
        } else {
            this.title = "Add New translation";
        }
    }

    getLocales() {
        let localesApiPath = this.appData.getResourceListUrlFor(this.projectService.resource, "locales");
        this.resourcesService.get(localesApiPath).subscribe(this.onLocaleGetSuccess.bind(this), this.onLocaleGetFail.bind(this));
    }

    onLocaleGetSuccess(response) {
        this.locales = response[this.EMBEDDED]["locales"];
        console.log(response);
        console.log(this.locales);
    }

    onLocaleGetFail(error) {
        this.error = error;
    }


}