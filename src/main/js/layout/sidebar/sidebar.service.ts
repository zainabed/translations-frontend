import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable()
export class SidebarService {
    public _resource = null;
    public active: boolean = false;
    public title: string;

    set resource(resource) {
        this._resource = {};

        if (resource) {
            this.title = resource.name;
            let self = this;

            let links = resource["_links"];
            Object.keys(links).forEach(function (key) {
                if (key !== "self" && key !== "project") {
                    let link = links[key];
                    let href = link["href"];
                    let hrefValue = href.replace(environment.apiUrl, "");
                    self._resource[key] = { name: key, href: hrefValue };
                }

            });
        }
        this.setActive(this._resource);
    }

    get resource() {
        return this._resource;
    }

    setActive(active: Array<any>) {
        this.active = false;
        
        if (active && Object.keys(active).length) {
            console.log(active);
            this.active = true;
        }
    }

}