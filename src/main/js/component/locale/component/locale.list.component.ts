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
export class LocaleListComponent extends ProjectResourceListComponent<Locale> {

    private downloadLocaleName: string;

    constructor(injector: Injector) {
        super(injector);
    }

    download(resource) {
        this.downloadLocaleName = resource.code;
        let apiUrl = this.appData.getResourceSelfUrl(resource);
        this.resourceService.get(apiUrl + "/download").subscribe(this.onDownloadSucess.bind(this), this.onGetFail.bind(this));
    }

    onDownloadSucess(response) {
        let data = "";
        for (var key in response) {
            data += key +"=" + response[key] +"\n";
        };
        const blob = new Blob([data], {type: "text/x-java-properties"});
        console.log(blob);
        // const url= window.URL.createObjectURL(blob);
        //  window.open(url + ".properties");
        //var a = document.createElement("a");
        // a.href = URL.createObjectURL(blob);
        //a.download = "message.properties";
        // a.click();
        saveAs(blob, "messages_" + this.downloadLocaleName.substr(0,2) + ".properties");
    }
}