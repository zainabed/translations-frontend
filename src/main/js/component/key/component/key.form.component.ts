import { Component, Injector } from "@angular/core";


import { Key } from "../model/key";
import { KeyForm } from "../form/key.form";
import { ProjectService, ProjectResourceFormComponent } from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";
import { HeaderService, BACKGROUND_COLOR, HEADER_POSITION, HEADER_TYPE, FAB_DIRECTION } from 'src/main/js/layout/header/header.service';

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

    constructor(
        injector: Injector,
        public keyForm: KeyForm,
        headerService: HeaderService) {
        super(keyForm, injector);
        this.setHeader(headerService);
    }

    ngOnInit() {
        super.ngOnInit();


    }

    setHeader(headerService: HeaderService) {
        if (this.isForUpdate) {
            this.title = "Update key";
        } else {
            this.title = "Add New key";
            this.keyForm.form.reset();
            this.setProject();
        }
        headerService.setHeader({
            title: this.title,
            background: BACKGROUND_COLOR.BLACK,
            position: HEADER_POSITION.NORMAL,
            type: HEADER_TYPE.PROMINENT,
            fab: false,
            fabDirection: FAB_DIRECTION.RIGHT
        });
    }

    navigateToList() {
        this.router.navigate(["projects", this.projectId, "translations"]);
    }

}