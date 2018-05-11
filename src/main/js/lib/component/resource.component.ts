
import { Injector } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ResourceListComponent } from "./resource.list.component";

export abstract class ResourceComponent<T> extends ResourceListComponent<T>  {

    private id: any;
    protected isForUpdate: boolean = false;
    route: ActivatedRoute;

    constructor(injector: Injector) {
        super(injector);
        this.route = injector.get(ActivatedRoute);
    }

    ngOnInit() {
        super.ngOnInit();
        this.id = this.route.snapshot.paramMap.get("id");
        if (this.id) {
            this.isForUpdate = true;
            this.apiUrl += "/" + this.id;
            this.get();
        }
    }

    onGetSuccess(response) {
        this.resource = response;
    }
}