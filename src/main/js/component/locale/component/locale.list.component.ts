import { Component, Injector } from "@angular/core";
import { saveAs } from 'file-saver';

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";
import { ImportUriDialogComponent } from "../dialog/import.uri.dialog.component";
import { MatDialog } from '@angular/material';

import { Locale } from "../model/locale";
import { LocaleUri } from "../model/locale.uri";

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
        this.httpProgress = true;
        this.resourcesService.get(this.projectApi).subscribe(this.onGetProjectLocalesSuccess.bind(this), this.onGetFail.bind(this));
    }

    onGetProjectLocalesSuccess(response) {
        this.httpProgress = false;
        let projectLocales = this.getEmbeddedResource(response);
        projectLocales = projectLocales.map(locale => {
            return this.getId(locale);
        });

        console.log(projectLocales);

        this.resourceList = this.resourceList.map(resource => {
            let id = this.getId(resource);
            resource["id"] = id;
            if (projectLocales.indexOf(id) >= 0) {
                resource["present"] = true;
            }
            resource['api'] = this.projectApi + "/" + id;
            return resource;
        }).sort((a, b) => a.name.localeCompare(b.name)
            ).sort((a, b) => (a.present === b.present) ? 0 : a.present ? -1 : 1);

        console.log(this.resourceList);
    }

    getId(locale) {
        let href = locale['_links']['self']['href'];
        let lastIndex = href.lastIndexOf("/") + 1;
        return href.substr(lastIndex);
    }


    post(apiPath) {
        this.resourcesService.post(apiPath, null).subscribe(this.onPostSuccess.bind(this), this.onPostFail.bind(this));
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
            console.log(data);
            if(data.length){
                let localeUri: LocaleUri = new LocaleUri(data, locale.code);
                this.importLanguage(locale.api, localeUri);
            }
            
        });
    }

    importLanguage(api: string, localeUri: LocaleUri) {
        this.httpProgress = true;
        this.resourcesService.post(api + "/import/uri", localeUri).subscribe(this.onImportSucess.bind(this), this.onImportFail.bind(this));
    }

    onImportSucess(response) {
        this.httpProgress = false;
        this.showNotification("Imported translation successfuly");
    }

    onImportFail(response) {
        this.httpProgress = false;
        this.showNotification(response.error.message);
    }

    onPostSuccess(response) {
        this.httpProgress = false;
        this.get();

    }

    onPostFail(response) {
        this.httpProgress = false;
        this.showNotification(response.error.message);
    }





    onDownloadSucess(response) {
        this.httpProgress = false;
        let data = "";
        for (var key in response) {
            data += key + "=" + response[key] + "\n";
        };
        const blob = new Blob([data], { type: "text/x-java-properties" });
        console.log(blob);
        // const url= window.URL.createObjectURL(blob);
        //  window.open(url + ".properties");
        //var a = document.createElement("a");
        // a.href = URL.createObjectURL(blob);
        //a.download = "message.properties";
        // a.click();
        let code = this.downloadLocaleCode == 'en' ? '' : '_' + this.downloadLocaleCode;
        saveAs(blob, "messages" + code + ".properties");

    }

}