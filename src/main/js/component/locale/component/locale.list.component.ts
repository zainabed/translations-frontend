import { Component, Injector } from "@angular/core";
import { saveAs } from 'file-saver';

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";
import { ImportUriDialogComponent } from "../dialog/import.uri.dialog.component";
import { MatDialog } from '@angular/material';

import { Locale } from "../model/locale";
import { LocaleUri } from "../model/locale.uri";
import {LocalService} from "../service/locale.service";

@ResourcePath({
    path: "locales",
    route: "/locales",
    id: "projectId"
})
@Component({
    selector: "locale-list",
    templateUrl: "./locale-list.html",
    host: {
        class: "column__xdt--10 column__dt--10 component"
    },
    entryComponents: [ImportUriDialogComponent]
})
export class LocaleListComponent extends ResourceListComponent<Locale> {

    private downloadLocaleCode: string;
    private localeApi: string;
    private projectApi: string;
    private projectService: ProjectService;

    constructor(injector: Injector, public dialog: MatDialog) {
        super(injector);
        this.projectService = injector.get(ProjectService);

    }

    ngOnInit() {
        super.ngOnInit();
        this.projectApi = this.appData.getResourceListUrlFor(this.projectService.resource, this._path);
        this.localeApi = this.apiUrl;
        this.get();
    }

    onGetSuccess(response) {
        super.onGetSuccess(response);
        this.getProjectLocales();
    }

    getProjectLocales() {
        this.resourcesService.get(this.projectApi).subscribe(this.onGetProjectLocalesSuccess.bind(this), this.onGetFail.bind(this));
    }

    onGetProjectLocalesSuccess(response) {
        let projectLocales = this.getEmbeddedResource(response);
        this.resourceList = LocalService.transform(this.resourceList, projectLocales, this.appData, this.projectApi);
    }

    post(apiPath) {
        this.resourcesService.post(apiPath, null).subscribe(this.onPostSuccess.bind(this), this.onRequestFail.bind(this));
    }

    delete(api) {
        this.resourceService.delete(api).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    download(api, code) {
        this.downloadLocaleCode = code;
        this.resourceService.get(api + "/download").subscribe(this.onDownloadSucess.bind(this), this.onGetFail.bind(this));
    }

    import(locale) {
        let dialogRef = this.dialog.open(ImportUriDialogComponent, {
            width: "450px",
            data: {}
        });

        dialogRef.afterClosed().subscribe(data => {
            if (data.length) {
                let localeUri: LocaleUri = new LocaleUri(data, locale.code);
                this.importLanguage(locale.api, localeUri);
            }
        });
    }

    importLanguage(api: string, localeUri: LocaleUri) {
        this.resourcesService.post(api + "/import/uri", localeUri).subscribe(this.onImportSucess.bind(this), this.onRequestFail.bind(this));
    }

    onImportSucess(response) {
        this.showNotification("Imported translation successfuly");
    }

    onPostSuccess(response) {
        this.get();
    }

    onDownloadSucess(response) {
        let data = "";
        for (var key in response) {
            data += key + "=" + response[key] + "\n";
        };
        const blob = new Blob([data], { type: "text/x-java-properties" });
        let code = this.downloadLocaleCode == 'en' ? '' : '_' + this.downloadLocaleCode;
        saveAs(blob, "messages" + code + ".properties");
    }

}