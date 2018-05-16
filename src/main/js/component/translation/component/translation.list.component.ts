import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";
import { Translation } from "../model/translation";
import { KeyService } from "../../key/model/key.service";
import { KeyForm } from "../../key/form/key.form";

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
    keyForm: KeyForm;
    searchUrl : string;
    isSearched: boolean;
    onSearch: boolean = false;

    constructor(injector: Injector) {
        super(injector);
        this.keyService = injector.get(KeyService);
        this.keyForm = injector.get(KeyForm);
        this.isSearched = false;
    }

    ngOnInit(){
        super.ngOnInit();
        this.searchUrl = this.appData.getResourceListUrlFor(this.appData.resource, this._path);
        this.searchUrl += "/search/name?projects=" + this.projectId + "&name="; 
    }

    search(){
        let key = this.keyForm.getData();
        this.apiUrl = this.searchUrl +  key.name;
        this.isSearched = true;
        this.get();
    }

    openSearchBox(){
        this.onSearch = true;
    }

    closeSearchBox(){
        this.onSearch = false;
        this.keyForm.form.get("name").setValue("");
        this.search();
    }

    open(resource) {
        this.keyService.resource = resource;
        this.keyService.keyId = this.appData.getResourceId(resource);
        this.router.navigate(["projects", this.projectId, "translations", "keys", this.keyService.keyId]);
    }
}