import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { PageEvent } from '@angular/material';
import { Page } from "../../../lib/http/page";
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
        class: "column__xdt--11 column__dt--11 component"
    }
})
export class TranslationListComponent extends ProjectResourceListComponent<Translation> {
    keyService: KeyService;
    keyForm: KeyForm;
    searchUrl: string;
    keyUrl: string;
    isSearched: boolean;
    onSearch: boolean = false;
    searchKey: string;
    page: Page;
    pageEvent: PageEvent;


    constructor(injector: Injector) {
        super(injector);
        this.keyService = injector.get(KeyService);
        this.keyForm = injector.get(KeyForm);
        this.isSearched = false;
        //this.page = new Page();
        this.pageEvent = new PageEvent();
        this.pageEvent.pageIndex = 0;
        this.pageEvent.pageSize = 10;
    }

    ngOnInit() {
        super.ngOnInit();
        
        this.searchUrl = this.keyUrl + "/search/name?projects=" + this.projectId + "&name=";
    }

    get() {
        this.keyUrl = this.appData.getResourceListUrlFor(this.appData.resource, this._path);
        if (this.isSearched) {
            this.apiUrl = this.searchUrl + this.searchKey;
        } else {
            this.apiUrl = this.keyUrl + "/search/from?projects=" + this.projectId;
        }
        this.apiUrl += "&page=" + this.pageEvent.pageIndex + "&size=" + this.pageEvent.pageSize;
        super.get();
    }

    pageHandler(pageEvent: any) {
        this.pageEvent = pageEvent;
        this.get();
    }

    onGetSuccess(response) {
        this.resourceList = this.getEmbeddedResource(response);
        this.page = response["page"];
    }

    search() {
        this.searchKey = this.keyForm.getData().name;
        this.isSearched = true;
        this.pageEvent.pageIndex = 0;
        this.get();
    }

    openSearchBox() {
        this.onSearch = true;
    }

    closeSearchBox() {
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