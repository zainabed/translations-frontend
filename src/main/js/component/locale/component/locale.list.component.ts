import { Component, Injector } from "@angular/core";
import { saveAs } from 'file-saver';

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService, ProjectResourceListComponent } from "../../project/project.core";

import { Locale } from "../model/locale";

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
    }
})
export class LocaleListComponent extends ResourceListComponent<Locale> {

    private downloadLocaleCode: string;
    private localeApi: string;
    private projectApi: string;
    private projectService: ProjectService;

    constructor(injector: Injector, ) {
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
        });

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

    onPostSuccess(response) {
        this.httpProgress = false;
        this.get();
      
    }

    onPostFail(response) {
        this.httpProgress = false;
        this.showNotification(response.error.message);
    }

    delete(api) {
        this.resourceService.delete(api).subscribe(this.onDeleteSuccess.bind(this), this.onDeleteFail.bind(this));
    }

    download(api, code) {
        this.downloadLocaleCode = code;
        this.resourceService.get(api + "/download").subscribe(this.onDownloadSucess.bind(this), this.onGetFail.bind(this));
    }

    onDownloadSucess(response) {
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
        saveAs(blob, "messages_" + this.downloadLocaleCode.substr(0, 2) + ".properties");

    }

}