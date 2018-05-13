import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService , ProjectResourceListComponent} from "../../project/project.core";
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
  
    constructor(injector: Injector) {
        super(injector);
    }
}