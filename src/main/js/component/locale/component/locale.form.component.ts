import { Component, Injector } from "@angular/core";


import { Locale } from "../model/locale";
import { LocaleForm } from "../form/locale.form";
import { ProjectService} from "../../project/project.core";
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
    projectService: ProjectService;
    
    constructor(injector: Injector, public localeForm: LocaleForm) {
        super(localeForm, injector);
        this.projectService = injector.get(ProjectService);
    }

    ngOnInit(){
        super.ngOnInit();
        console.log(this.projectService.resource);
        this.form.form.get("projects").setValue(this.appData.getResourceListUrlFor(this.projectService.resource, "self"));
        if(this.isForUpdate){
            this.title = "Update Locale";
        }else{
            this.title = "Add New Locale";
        }
    }

}