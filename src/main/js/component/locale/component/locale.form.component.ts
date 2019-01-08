import { Component, Injector } from "@angular/core";


import { Locale } from "../model/locale";
import { LocaleForm } from "../form/locale.form";
import { ProjectService, ProjectResourceFormComponent} from "../../project/project.core";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "locales",
    route: "/locales",
    id: "localeId"
})
@Component({
    selector: "locale-form",
    templateUrl: "locale-form.html",
    host: {
        class: "column__xdt--6 column__dt--6 component"
    }
})
export class LocaleFormComponent extends ProjectResourceFormComponent<Locale> {
  
    codeList = [ 'sv', 'en', 'da', 'fi', 'no'];

    constructor(injector: Injector,  public localeForm: LocaleForm) {
        super(localeForm, injector);
    }

    ngOnInit() {
        super.ngOnInit();
    
        if (this.isForUpdate) {
            this.title = "Update Locale";
        } else {
            this.title = "Add New Locale";
            this.localeForm.form.reset();
            this.setProject();
        }
    }

    
}