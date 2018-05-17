import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { ProjectService , ProjectResourceListComponent} from "../../project/project.core";
import { Key } from "../model/key";

@ResourcePath({
    path: "keys",
    route: "/keys",
    id: "projectId"
})
@Component({
    selector: "key-list",
    templateUrl: "./key-list.html",
    host: {
        class: "column__xdt--10 column__dt--10 component"
    }
})
export class KeyListComponent extends ProjectResourceListComponent<Key> {
   
    constructor(injector: Injector) {
        super(injector);
    }

}