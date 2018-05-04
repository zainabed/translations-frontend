import { Injectable } from "@angular/core";

@Injectable()
export class AppResourceData {
    private _projectRsource;

    get projectRsource() {
        return this._projectRsource;
    }

    set projectRsource(projectRsource) {
        this._projectRsource = projectRsource;
    }

    getResourceListUrlFor(resourceName) {
        return this.projectRsource["_links"][resourceName]["href"];
    }
}