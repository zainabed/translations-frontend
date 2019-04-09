import { Component, Injector } from "@angular/core";


import { Locale } from "../model/locale";
import { LocaleForm } from "../form/locale.form";
import { ProjectService, ProjectResourceFormComponent, ProjectResourceListComponent } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { Autowired } from '@zainabed/tdi/core';

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

    codeList = ['sv', 'en', 'da', 'fi', 'no'];
    private projectService: ProjectService;
    private localeApi: string;
    private projectApi: string;

    @Autowired()
    public localeForm: LocaleForm;

    constructor(injector: Injector) {
        super(injector);
        this.projectService = injector.get(ProjectService);
        this.form = this.localeForm;
    }


    ngOnInit() {
        super.ngOnInit();
        this.projectApi = this.appData.getResourceListUrlFor(this.projectService.resource, this._path);
        this.localeApi = this.apiUrl;
        this.get();
        /*    if (this.isForUpdate) {
                this.title = "Update Locale";
            } else {
                this.title = "Add New Locale";
                this.localeForm.form.reset();
                this.setProject();
            }*/
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.resource = this.getEmbeddedResource(this.resource);
        console.log(this.resource);
    }

    getId(locale) {
        let href = locale['_links']['self']['href'];
        let lastIndex = href.lastIndexOf("/") + 1;
        return href.substr(lastIndex);
    }


}