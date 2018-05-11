import { Component, Injector } from "@angular/core";


import { Locale } from "../model/locale";
import { LocaleForm } from "../form/locale.form";
import { ResourceFormComponent, ResourcePath } from "../../../lib/component/resource.component.core";

@ResourcePath({
    path: "locales",
    route: "/locales"
})
@Component({
    selector: "locale-form",
    templateUrl: "locale-form.html",
    host: {
        class: "row component"
    }
})
export class LocaleFormComponent extends ResourceFormComponent<Locale> {
    title;
    
    constructor(injector: Injector, public localeForm: LocaleForm) {
        super(localeForm, injector);
    }

    ngOnInit(){
        super.ngOnInit();
        if(this.isForUpdate){
            this.title = "Update Locale";
        }else{
            this.title = "Add New Locale";
        }
    }

}