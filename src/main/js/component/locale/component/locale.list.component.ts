import { Component, Injector } from "@angular/core";

import { ResourceListComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { Locale } from "../model/locale";

@ResourcePath({
    path: "locales",
    route: "/locales"
})
@Component({
    selector: "locale-list",
    templateUrl: "./locale-list.html",
    host: {
        class: "row"
    }
})
export class LocaleListComponent extends ResourceListComponent<Locale> {

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        super.ngOnInit();
        this.get();
    }

}