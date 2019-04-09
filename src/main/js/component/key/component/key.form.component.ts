import { Component, Injector } from "@angular/core";


import { Key } from "../model/key";
import { KeyForm } from "../form/key.form";
import { ProjectService, ProjectResourceFormComponent } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { Autowired } from '@zainabed/tdi/core';


@ResourcePath({
    path: "keys",
    route: "/keys",
    id: "keyId"
})
@Component({
    selector: "key-form",
    templateUrl: "key-form.html",
    host: {
        class: "column__xdt--11 column__dt--11 component"
    }
})
export class KeyFormComponent extends ProjectResourceFormComponent<Key> {

    @Autowired()
    public keyForm: KeyForm;

    constructor(injector: Injector, ) {
        super(injector);
        this.form = this.keyForm;
    }

    ngOnInit() {
        super.ngOnInit();

        if (this.isForUpdate) {
            this.title = "Update key";
        } else {
            this.title = "Add New key";
            this.keyForm.form.reset();
            this.setProject();
        }
    }

    navigateToList() {
        this.router.navigate(["projects", this.projectId, "translations"]);
    }

}