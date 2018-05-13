import { Component, Injector } from "@angular/core";


import { Key } from "../model/key";
import { KeyForm } from "../form/key.form";
import { ProjectService, ProjectResourceFormComponent } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "keys",
    route: "/keys",
    id: "keyId"
})
@Component({
    selector: "key-form",
    templateUrl: "key-form.html",
    host: {
        class: "column__xdt--6 column__dt--6 component"
    }
})
export class KeyFormComponent extends ProjectResourceFormComponent<Key> {

    constructor(injector: Injector, public keyForm: KeyForm) {
        super(keyForm, injector);
    }

    ngOnInit() {
        super.ngOnInit();

        if (this.isForUpdate) {
            this.title = "Update key";
        } else {
            this.title = "Add New key";
        }
    }


}