import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable()
export class SidebarService {
    private _resource = null;
    private active: boolean = false;

    set resource(resource) {
        this._resource = [];

        if (resource) {

            let self = this;

            let links = resource["_links"];
            Object.keys(links).forEach(function (key) {
                if (key !== "self" && key !== "projects") {
                    let link = links[key];
                    let href = link["href"];
                    let hrefValue = href.replace(environment.apiUrl, "");
                    self._resource.push({ name: key, href: hrefValue });
                }

            });
        }
        this.setActive(this._resource);
    }

    get resource() {
        return this._resource;
    }

    setActive(active: Array<any>) {
        this.active = true;
        if (active && active.length) {
            this.active = true;
        }
    }

}