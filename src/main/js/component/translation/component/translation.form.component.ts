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
        class: "column__xdt--6 column__dt--6 translation-form"
    }
})
export class TranslationFormComponent extends ProjectResourceFormComponent<Translation> implements OnChanges, OnDestroy {

    public locales;
    public keyService: KeyService;
    public searchUrl: string;
    public postUrl: string;
    sub: any;

    constructor(injector: Injector, public translationForm: TranslationForm) {
        super(translationForm, injector);
        this.keyService = injector.get(KeyService);
    }

    ngOnInit() {
        super.ngOnInit();
        this.postUrl = this.apiUrl;
        this.projectId = this.projectService.projectId;
              
        this.sub = this.route.params.subscribe((params) => {
            this.setSearchUrl("");
            this.getLocales();
            this.translationForm.form.get("locales").setValue("");
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
        //super.onGetFail(error);
        this.resource = null;
        this.resourceList = null;
        this.error = error;
        this.configureForm();
    }

    post() {
        this.apiUrl = this.postUrl;
        super.post();
    }

    onPostSuccess(response) {
        this.resource = response;
        this.showNotification("Added record successfully.");
    }

    onPutSuccess(reponse) {
        this.showNotification("Updated record successfully.");
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
        if(this.locales.length){
            let locale = this.locales[0];
            this.translationForm.form.get("locales").setValue(this.appData.getResourceSelfUrl(locale));
            this.onLocalesChange();
        }
        console.log(response);
        console.log(this.locales);
    }

    onLocaleGetFail(error) {
        this.error = error;
    }


}