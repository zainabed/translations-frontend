import { Component, Injector, OnChanges, OnDestroy } from "@angular/core";


import { Translation } from "../model/translation";
import { TranslationForm } from "../form/translation.form";
import { ProjectService, ProjectResourceFormComponent } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { KeyService } from "../../key/model/key.service";


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
export class TranslationFormComponent extends ProjectResourceFormComponent<Translation> implements OnChanges, OnDestroy {

    private locales;
    private keyService: KeyService;
    private searchUrl: string;
    private postUrl: string;
    sub: any;

    constructor(injector: Injector, public translationForm: TranslationForm) {
        super(translationForm, injector);
        this.keyService = injector.get(KeyService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.sub = this.route.params.subscribe((params) => {
            this.projectId = this.projectService.projectId;
            this.postUrl = this.apiUrl;
            this.setSearchUrl("");
            this.getLocales();

            this.configureForm();
        });


    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngOnChanges() {
        this.configureForm();
    }

    configureForm() {
        this.translationForm.form.get("content").setValue("");
        this.setKeys();
        this.setProject();
    }

    get() {
        this.apiUrl = this.searchUrl;
        super.get();
    }

    onGetFail(error) {
        super.onGetFail(error);
        this.resource = null;
        this.configureForm();
    }

    post() {
        this.apiUrl = this.postUrl;
        super.post();
    }

    setKeys() {
        let keyHref = this.appData.getResourceSelfUrl(this.keyService.resource);
        this.form.form.get("keys").setValue(keyHref);
    }


    onLocalesChange() {
        let localesId = this.appData.filterId(this.translationForm.form.get("locales").value);
        this.setSearchUrl(localesId);
        this.get();
    }



    setSearchUrl(localeId) {
        this.searchUrl = this.appData.getResourceListUrlFor(this.appData.resource, this._path);
        this.searchUrl += "/search/get_one?projects=" + this.projectId + "&locales=" + localeId + "&keys=" + this.keyService.keyId;
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